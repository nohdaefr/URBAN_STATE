"""
Generates elegant brand-toned placeholder images used ONLY as an onError
fallback when a remote (Unsplash) photo fails to load — e.g. offline dev,
or a network-restricted sandbox. Not used when remote images load fine.
"""
import os
import random
import math
from PIL import Image, ImageDraw, ImageFilter

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images", "ph")
os.makedirs(OUT, exist_ok=True)

PALETTES = [
    ((250, 247, 241), (233, 224, 208), (27, 26, 24)),   # ivory -> stone -> charcoal
    ((244, 238, 227), (166, 85, 47), (27, 26, 24)),     # ivory -> clay -> charcoal
    ((233, 224, 208), (92, 86, 76), (27, 26, 24)),      # stone -> muted -> charcoal
    ((250, 247, 241), (58, 68, 54), (27, 26, 24)),      # ivory -> forest -> charcoal
]

random.seed(7)

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def make_image(name, w, h, palette_idx, motif="skyline"):
    c1, c2, c3 = PALETTES[palette_idx % len(PALETTES)]
    img = Image.new("RGB", (w, h), c1)
    draw = ImageDraw.Draw(img)

    # diagonal gradient wash
    for y in range(h):
        t = y / h
        row_color = lerp(c1, c2, t * 0.55)
        draw.line([(0, y), (w, y)], fill=row_color)

    # soft vignette via blurred overlay
    overlay = Image.new("L", (w, h), 0)
    od = ImageDraw.Draw(overlay)
    od.ellipse([-w*0.3, -h*0.2, w*1.3, h*1.2], fill=60)
    overlay = overlay.filter(ImageFilter.GaussianBlur(w // 6))
    dark = Image.new("RGB", (w, h), c3)
    img = Image.composite(img, dark, overlay.point(lambda p: 255 - p))

    draw = ImageDraw.Draw(img, "RGBA")

    if motif == "skyline":
        base_y = int(h * random.uniform(0.55, 0.72))
        x = 0
        while x < w:
            bw = random.randint(int(w*0.05), int(w*0.12))
            bh = random.randint(int(h*0.08), int(h*0.42))
            draw.rectangle([x, base_y - bh, x + bw, base_y], fill=(*c3, 235))
            # windows
            wx = x + 6
            while wx < x + bw - 6:
                wy = base_y - bh + 8
                while wy < base_y - 8:
                    if random.random() > 0.35:
                        draw.rectangle([wx, wy, wx+4, wy+7], fill=(*lerp(c1,(255,255,255),0.2), 160))
                    wy += 14
                wx += 11
            x += bw + random.randint(4, 14)
        draw.line([(0, base_y), (w, base_y)], fill=(*c3, 200), width=2)

    elif motif == "lines":
        n = 7
        for i in range(n):
            yy = int(h * (0.15 + i * 0.62 / n))
            draw.line([(w*0.08, yy), (w*0.92, yy)], fill=(*c3, 60), width=1)
        draw.polygon([(w*0.18, h*0.78), (w*0.5, h*0.28), (w*0.82, h*0.78)],
                     outline=(*c3, 220), width=3)

    elif motif == "interior":
        # simple window + light shaft
        draw.rectangle([w*0.62, h*0.12, w*0.94, h*0.88], outline=(*c3, 200), width=3)
        draw.line([(w*0.78, h*0.12), (w*0.78, h*0.88)], fill=(*c3, 140), width=2)
        draw.line([(w*0.62, h*0.5), (w*0.94, h*0.5)], fill=(*c3, 140), width=2)
        for i in range(5):
            xx = w*0.02 + i * w*0.11
            draw.line([(xx, h*0.9), (xx + w*0.06, h*0.15)], fill=(*c2, 50), width=18)

    # brand mark, bottom-right small
    m = int(min(w, h) * 0.05)
    mx, my = w - m*2.4, h - m*2.0
    draw.line([(mx, my+m*0.7), (mx+m*0.6, my-m*0.5), (mx+m*1.2, my+m*0.7)], fill=(*c1, 210), width=3, joint="curve")
    draw.line([(mx, my+m*0.7), (mx+m*1.2, my+m*0.7)], fill=(166,85,47,220), width=3)

    img = img.filter(ImageFilter.GaussianBlur(0.4))
    img.save(os.path.join(OUT, f"{name}.jpg"), quality=82)

motifs = ["skyline", "lines", "interior"]
count = 0
for i in range(1, 25):
    make_image(f"wide-{i}", 1600, 1000, i, motifs[i % 3])
    count += 1
for i in range(1, 13):
    make_image(f"tall-{i}", 1200, 1500, i, motifs[(i+1) % 3])
    count += 1

# agent portrait placeholders (soft duotone silhouette-free abstraction)
def make_portrait(name, palette_idx):
    w, h = 800, 1000
    c1, c2, c3 = PALETTES[palette_idx % len(PALETTES)]
    img = Image.new("RGB", (w, h), c1)
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / h
        draw.line([(0, y), (w, y)], fill=lerp(c1, c2, t * 0.4))
    draw.ellipse([w*0.28, h*0.16, w*0.72, h*0.6], fill=(*c3, 235))
    draw.ellipse([w*0.12, h*0.62, w*0.88, h*1.15], fill=(*c3, 235))
    img.save(os.path.join(OUT, f"{name}.jpg"), quality=82)

for i, n in enumerate(["agent-1", "agent-2", "agent-3"]):
    make_portrait(n, i)

print("generated", count, "scene images + 3 portraits ->", OUT)
