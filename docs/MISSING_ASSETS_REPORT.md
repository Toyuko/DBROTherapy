# BIOThomas — Missing Assets Report

**Date:** 2026-07-31  
**Related:** `docs/PHASE1_MIGRATION_REPORT.md`

Assets required for a production-ready Shopify theme that are **not present** (or not production-ready) in the current repository / live prototype.

Priority: **P0** = blocks launch quality · **P1** = needed for strong conversion · **P2** = nice-to-have

---

## 1. Brand & identity

| Asset | Priority | Notes / TODO |
| --- | --- | --- |
| Production logo (SVG) | P0 | Have PNG only (`logo.png`). Need SVG + light/dark variants |
| Logo for light backgrounds | P0 | Current wordmark is metallic on black — may fail on `#F5F5F5` |
| Favicon (`.ico` / 32×32 PNG) | P0 | Missing |
| Apple touch icon (180×180) | P1 | Missing |
| Open Graph / Twitter share image (1200×630) | P0 | Missing |
| Email header logo | P2 | For Shopify notifications |
| Brand guidelines PDF | P2 | Colors, clear space, misuse |

**Available now**

- `logo.png` — BIOThomas / BIO₂Tech wordmark (use as interim)  
- `Gemini_Generated_Image_*.png` — legacy DBRO Therapy mark (archive only)

---

## 2. Product photography

Per SKU, recommended set (missing for all 8 products):

| Shot | Priority | Labels from prototype |
| --- | --- | --- |
| Hero / front packshot | P0 | “Front” |
| Side / 3/4 angle | P0 | “Side” |
| Controls / UI close-up | P1 | “Controls” |
| In-use lifestyle | P1 | “In use” |
| Detail / materials | P2 | — |
| Accessory flat-lays | P1 | Cannulas, bubbler, water kit, case, splitter |

**Machines needing full galleries**

1. BIO H₂-Lite  
2. BIO OxyHydrogen Pro  
3. BIO Hydro-Max 3000  

**Accessories needing at least 1–2 images each**

4. Nasal Cannula 5-Pack  
5. Water Bubbler Chamber  
6. Deionized Water Kit (6L)  
7. Travel Hard Case  
8. Dual-User Cannula Splitter  

**Current state:** CSS gradient placeholders only.

---

## 3. Marketing & page imagery

| Asset | Priority | Used on |
| --- | --- | --- |
| Owned hero still or video | P0 | Home hero (replace Pexels stock) |
| Clinical demo video | P0 | Science page / “Watch Clinical Demo” CTA |
| Benefits section imagery (×4) | P1 | Mitochondrial / Athletic / Neuro / Anti-Aging |
| About — founder / team / facility | P1 | About page |
| Services — lifestyle or clinical scenes | P1 | Services page |
| Gallery grid (6–12 images) | P1 | Home gallery section |
| Comparison tool device thumbnails | P1 | Compare page |
| Blog cover placeholders | P2 | Until real articles ship |
| 404 illustration | P2 | 404 template |
| Empty cart illustration | P2 | Cart |

---

## 4. Icons & UI graphics

| Asset | Priority | Notes |
| --- | --- | --- |
| Trust badge icons (shipping, warranty, purity, support) | P1 | Text-only today |
| Payment icons | P2 | Prefer Shopify native |
| Social icons set | P2 | Instagram / LinkedIn / YouTube / etc. |
| Benefit tab icons | P2 | Optional |

---

## 5. Fonts (self-hosted for performance)

| Font | Priority | Notes |
| --- | --- | --- |
| Fraunces (variable or woff2 subset) | P1 | Currently Google Fonts CDN |
| DM Sans (variable or woff2 subset) | P1 | Currently Google Fonts CDN |

Self-hosting improves privacy, CLS control, and Lighthouse Best Practices.

---

## 6. Documents & downloads

| Asset | Priority | Notes |
| --- | --- | --- |
| Product manuals (PDF) | P1 | Referenced conceptually; not in repo |
| Spec sheets | P1 | For machines |
| Safety / usage guidelines | P0 | Healthcare-adjacent category |
| Warranty terms PDF | P1 | Align with 1-yr + extended options |
| Compliance / certifications marks | P0 | If claimed (CE, etc.) — only use if verified |

---

## 7. Video production list

| Clip | Priority | Spec suggestion |
| --- | --- | --- |
| Hero loop (muted, 10–20s) | P0 | 1920×1080+, optimized MP4/WebM |
| Clinical protocol walkthrough | P0 | Captionable; embed or Shopify-hosted |
| Unboxing / setup | P1 | Per machine tier |
| Athlete recovery vignette | P2 | Benefits storytelling |

---

## 8. Interim strategy (until client delivers)

1. Use `logo.png` as primary logo; generate temporary light-background version if needed.  
2. Use tasteful abstract / gradient product placeholders labeled **TODO: replace with product photo**.  
3. Hero: prefer high-quality still over remote Pexels when possible; keep video optional in Theme Editor.  
4. Do **not** invent certification badges or clinical claims graphics.  
5. Archive legacy DBRO logo under `archive/` — do not use on storefront.

---

## 9. Client delivery checklist

Please provide (or commission):

- [ ] SVG logo + light/dark PNG  
- [ ] Favicon + touch icon + OG image  
- [ ] Product photo set for 3 machines + 5 accessories  
- [ ] Hero media (owned)  
- [ ] Clinical demo video  
- [ ] About / facility / team photos  
- [ ] Any real certification marks (verified)  
- [ ] Manuals / warranty PDF  
- [ ] Social profile URLs for footer  

---

*Assets marked missing will be scaffolded as Theme Editor image pickers with placeholder copy until uploaded in Shopify Admin.*
