import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUTPUT_DIR = r"c:\Users\Shree\Desktop\portfolio\src\assets\skills"
os.makedirs(OUTPUT_DIR, exist_ok=True)

SKILLS = [
    {"filename": "python.png", "title": "Python", "code": "PY", "color": "#3776AB", "accent": "#FFD43B", "glow": "#3776AB"},
    {"filename": "react.png", "title": "React.js", "code": "REACT", "color": "#61DAFB", "accent": "#00D8FF", "glow": "#61DAFB"},
    {"filename": "fastapi.png", "title": "FastAPI", "code": "FAST", "color": "#059669", "accent": "#10B981", "glow": "#10B981"},
    {"filename": "php.png", "title": "PHP 8", "code": "PHP", "color": "#777BB4", "accent": "#8892BF", "glow": "#777BB4"},
    {"filename": "typescript.png", "title": "TypeScript", "code": "TS", "color": "#3178C6", "accent": "#5092E6", "glow": "#3178C6"},
    {"filename": "javascript.png", "title": "JavaScript", "code": "JS", "color": "#F7DF1E", "accent": "#FFE52A", "glow": "#F7DF1E"},
    {"filename": "postgresql.png", "title": "PostgreSQL", "code": "PGSQL", "color": "#4169E1", "accent": "#6488EE", "glow": "#4169E1"},
    {"filename": "docker.png", "title": "Docker", "code": "DOCKER", "color": "#2496ED", "accent": "#4DB2FF", "glow": "#2496ED"},
    {"filename": "aws.png", "title": "AWS Cloud", "code": "AWS", "color": "#FF9900", "accent": "#FFB84D", "glow": "#FF9900"},
    {"filename": "woocommerce.png", "title": "WooCommerce", "code": "WOO", "color": "#96588A", "accent": "#B878AC", "glow": "#96588A"},
    {"filename": "tailwind.png", "title": "Tailwind", "code": "CSS", "color": "#06B6D4", "accent": "#38BDF8", "glow": "#06B6D4"},
    {"filename": "git.png", "title": "Git / GitHub", "code": "GIT", "color": "#F05032", "accent": "#FF6B4A", "glow": "#F05032"}
]

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))

W, H = 400, 400

for item in SKILLS:
    # 1. Base dark canvas
    img = Image.new("RGBA", (W, H), (12, 14, 20, 255))
    draw = ImageDraw.Draw(img)

    c_primary = hex_to_rgb(item["color"])
    c_accent = hex_to_rgb(item["accent"])

    # 2. Outer glowing ring effect
    glow_img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_img)
    glow_draw.ellipse([40, 40, W-40, H-40], fill=(c_primary[0], c_primary[1], c_primary[2], 90))
    glow_img = glow_img.filter(ImageFilter.GaussianBlur(35))
    img.paste(glow_img, (0, 0), glow_img)

    # 3. Glassmorphic Pill Shield Card
    card_draw = ImageDraw.Draw(img)
    # Rounded Card Background
    card_draw.rounded_rectangle([50, 50, W-50, H-50], radius=40, fill=(20, 24, 35, 230), outline=(c_primary[0], c_primary[1], c_primary[2], 180), width=3)

    # Inner decorative tech orbit ring
    card_draw.ellipse([80, 80, W-80, H-80], outline=(c_accent[0], c_accent[1], c_accent[2], 80), width=2)

    # 4. Central Badge Box
    card_draw.rounded_rectangle([130, 110, W-130, H-150], radius=25, fill=(c_primary[0], c_primary[1], c_primary[2], 50), outline=c_accent, width=2)

    # Text & Label
    try:
        font_large = ImageFont.truetype("arialbd.ttf", 44)
        font_label = ImageFont.truetype("arial.ttf", 26)
    except:
        font_large = ImageFont.load_default()
        font_label = ImageFont.load_default()

    # Draw Tech Code Icon Text
    code_text = item["code"]
    bbox = card_draw.textbbox((0, 0), code_text, font=font_large)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    card_draw.text(((W - tw) / 2, 145), code_text, fill=c_accent, font=font_large)

    # Draw Tech Title Label
    title_text = item["title"]
    bbox_t = card_draw.textbbox((0, 0), title_text, font=font_label)
    tw_t, th_t = bbox_t[2] - bbox_t[0], bbox_t[3] - bbox_t[1]
    card_draw.text(((W - tw_t) / 2, H - 110), title_text, fill=(215, 226, 234, 240), font=font_label)

    # Save PNG
    out_path = os.path.join(OUTPUT_DIR, item["filename"])
    img.save(out_path, "PNG")
    print(f"Generated: {out_path}")

print("All 12 skill images created successfully!")
