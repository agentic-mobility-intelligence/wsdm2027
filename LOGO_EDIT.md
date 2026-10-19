# Logo background removal

## WSDM 2027

- Date: 18 October 2026
- Method: built-in image_gen image editing tool, with `transparent_background: true`.
- Edit target: `assets/img/wsdm-2027-logo.png` (original official asset retained).
- Website asset: `assets/img/wsdm-2027-logo-transparent.png`.
- Output: 2152 × 731 RGBA PNG; alpha range 0–255. Header styling uses no background fill or brightness filter.

### Final prompt

Use case: background-extraction.
Asset type: existing WSDM 2027 conference logo for a website header.
Input image 1 is the edit target, not a style reference.
Remove only the flat opaque light gray background (#d9d9d9), including the background inside letter counters and around the thin decorative strokes. Return a PNG with genuine alpha transparency, not a white fill or checkerboard drawn into the image.
Preserve the existing logo precisely: the dark blue lowercase 'wsdm', the dark blue '2027', the small red/brown curved decorative strokes and yellow/orange dots, their placement, typography, proportions and original colors. Text must remain exactly 'wsdm 2027'. Do not redraw, redesign, add details, alter letterforms, or add shadows. Preserve the original wide 165:56 canvas proportions and framing, with no extra padding. Clean antialiased transparent edges without gray or white halos.

## AMI’27

- Date: 18 October 2026
- Method: built-in image_gen image editing tool, with `transparent_background: true`.
- Edit target: the user's `AMI’27 横向徽标锁定.png`, retained as `assets/img/ami27-logo-original.png`.
- Website asset: `assets/img/ami27-logo-transparent.png`.
- Output: 2172 × 724 RGBA PNG; alpha range 0–255. The background is transparent; the robot face and lane markings retain their white design details.

### Final prompt

Use case: background-extraction.
Asset type: AMI’27 horizontal logo for the header of an academic workshop website.
Input image 1 is the edit target. Remove its off-white external background and deliver a PNG with genuine alpha transparency. This is a precise cutout, not a redesign.
Preserve the complete original lockup: the large stylized blue A, the curved blue-to-green loop arrows, the blue robot, the gradient road, the large navy AMI with blue/green ’27, and the subtitle. Keep the internal white robot face, white lane markings, and intended white separators as original design details. Remove surrounding background and negative space between letters, including letter counters; do not remove those intentional white design details.
Exact existing text: “AMI’27” and “Agentic Mobility Intelligence”. Preserve the typography, spelling, letter shapes, gradients, colors, proportions and arrangement. Do not change any element, add details, regenerate the text, invent a slogan, add shadows or make a new logo.
Keep the original 3:1 wide canvas and composition, with no additional padding. Clean antialiased transparent edges without a white or gray halo. No painted checkerboard or solid background.
