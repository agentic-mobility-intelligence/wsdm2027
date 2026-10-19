"""Generate favicon assets from the AMI'27 horizontal logo.

Only the left emblem is used: the full lockup is too wide to stay readable at
16-32 px. Requires Pillow.
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "assets" / "img" / "ami27-logo-transparent.png"
IMAGE_DIR = ROOT / "assets" / "img"

# Emblem bounds inside the 2172x724 lockup. Update if the source artwork changes.
EMBLEM_BOX = (73, 97, 770, 626)
BRAND_NAVY = (18, 46, 64, 255)


def square_master(size: int) -> Image.Image:
    source = Image.open(SOURCE).convert("RGBA")
    emblem = source.crop(EMBLEM_BOX)
    side = max(emblem.size)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(emblem, ((side - emblem.width) // 2, (side - emblem.height) // 2), emblem)
    return canvas.resize((size, size), Image.LANCZOS)


master = square_master(512)
master.resize((16, 16), Image.LANCZOS).save(IMAGE_DIR / "favicon-16.png", optimize=True)
master.resize((32, 32), Image.LANCZOS).save(IMAGE_DIR / "favicon-32.png", optimize=True)

touch = Image.new("RGBA", (180, 180), BRAND_NAVY)
touch.alpha_composite(master.resize((150, 150), Image.LANCZOS), (15, 15))
touch.convert("RGB").save(IMAGE_DIR / "apple-touch-icon.png", optimize=True)

master.resize((256, 256), Image.LANCZOS).save(
    ROOT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)]
)
print("Wrote favicon-16.png, favicon-32.png, apple-touch-icon.png and favicon.ico")
