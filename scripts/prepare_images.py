"""Prepare compact website copies while preserving all supplied source files."""
from pathlib import Path
from PIL import Image, ImageOps

images = Path(__file__).resolve().parents[1] / 'assets' / 'img'
for filename in ('traditional-mobility.png', 'agentic-mobility.png', 'weigang-lu.jpg', 'zheng-liang.jpeg', 'zhiwen-zhang.jpg', 'hong-kam-lo.jpg', 'changyi-ma.jpg', 'qinggang-zhang.jpg'):
    source = images / filename
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        limit = 1600 if source.suffix == '.png' else 900
        image.thumbnail((limit, limit), Image.Resampling.LANCZOS)
        output = source.with_suffix('.webp')
        image.save(output, 'WEBP', quality=88, method=6)
        print(f'{output.name}: {image.width}x{image.height}, {output.stat().st_size:,} bytes')
