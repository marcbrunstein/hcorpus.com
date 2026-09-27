"""Harmonise tous les portraits (core team + mosaïque extended team).

Traitement identique pour chaque visage : niveaux de gris, contraste et luminosité
normalisés, puis bichromie bleu marine de la charte.

Usage (depuis la racine du dépôt) : python tools/portraits.py
Sources attendues dans _source/ (non versionné) : marc.jpg, arnaud.jpg, jerome.png,
nathalie.jpg, extended.png (mosaïque d'origine 4 x 4).
"""
import math
import os
from PIL import Image, ImageOps

SRC = "_source"
OUT = os.path.join("static", "img", "team")

NAVY = (11, 46, 71)       # --navy
MID = (122, 142, 160)
LIGHT = (246, 244, 239)   # proche de --paper
TARGET_MEAN = 0.50        # luminosité moyenne visée (0-1)

# Portraits de l'extended team retirés : (rangée, colonne) dans la mosaïque d'origine
REMOVED = {(1, 2)}


def flatten(im):
    im = im.convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    bg.alpha_composite(im)
    return bg.convert("RGB")


def duotone(im):
    g = ImageOps.grayscale(im)
    g = ImageOps.autocontrast(g, cutoff=(1, 0.5))
    # ramène la luminosité moyenne vers la cible par une correction gamma
    mean = sum(i * n for i, n in enumerate(g.histogram())) / (g.width * g.height) / 255
    mean = min(max(mean, 0.05), 0.95)
    gamma = math.log(TARGET_MEAN) / math.log(mean)
    g = g.point(lambda v: round(255 * (v / 255) ** gamma))
    return ImageOps.colorize(g, black=NAVY, mid=MID, white=LIGHT)


# Portraits de la core team. Par défaut : carré centré en haut de l'image.
# Sinon "rotate" (degrés, sens antihoraire, autour de "center") puis "box" (carré de recadrage),
# pour aligner cadrage serré et légère inclinaison de la tête sur les autres portraits.
CORE = {
    "marc-brunstein": {"src": "marc.jpg"},
    "arnaud-huet": {"src": "arnaud-2026.jpg", "rotate": 6, "center": (420, 330), "box": (150, 80, 690, 620)},
    "jerome-ravet": {"src": "jerome.png"},
    "nathalie-blumberg": {"src": "nathalie.jpg"},
}


def core_team():
    for name, cfg in CORE.items():
        im = flatten(Image.open(os.path.join(SRC, cfg["src"])))
        if "box" in cfg:
            if cfg.get("rotate"):
                im = im.rotate(cfg["rotate"], resample=Image.BICUBIC, center=cfg["center"])
            im = im.crop(cfg["box"])
        else:
            side = min(im.size)
            left = (im.width - side) // 2
            im = im.crop((left, 0, left + side, side))
        im = im.resize((640, 640), Image.LANCZOS)
        duotone(im).save(os.path.join(OUT, name + ".jpg"), quality=84, optimize=True, progressive=True)
        print(name)


def extended_team():
    im = flatten(Image.open(os.path.join(SRC, "extended.png")))
    cols = [(4, 267), (271, 519), (523, 787), (793, 1055)]
    rows = [(4, 183), (187, 365), (369, 549), (553, 735)]
    tiles = []
    for r, (y0, y1) in enumerate(rows):
        for c, (x0, x1) in enumerate(cols):
            if (r, c) == (3, 3) or (r, c) in REMOVED:
                continue
            h = (y1 - y0) - 8
            w = round(h * 1.2)
            cx = (x0 + x1) // 2 - 4
            tile = im.crop((cx - w // 2, y0 + 1, cx - w // 2 + w, y0 + 1 + h)).resize((240, 200), Image.LANCZOS)
            tiles.append(duotone(tile))
    per_row, gap = 7, 6
    tw, th = 240, 200
    n_rows = math.ceil(len(tiles) / per_row)
    out = Image.new("RGB", (per_row * tw + (per_row - 1) * gap, n_rows * th + (n_rows - 1) * gap), (251, 250, 247))
    for i, t in enumerate(tiles):
        out.paste(t, ((i % per_row) * (tw + gap), (i // per_row) * (th + gap)))
    out.save(os.path.join(OUT, "extended-team.jpg"), quality=84, optimize=True, progressive=True)
    print("extended-team", len(tiles), out.size)


if __name__ == "__main__":
    core_team()
    extended_team()
