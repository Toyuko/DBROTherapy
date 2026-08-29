# BIOTHOMAS — Phase 1 Migration Report

**Date:** 2026-07-31  
**Source repository:** https://github.com/Toyuko/DBROTherapy  
**Existing website (prototype):** https://touysmith.com/dbro/  
**Production domain:** https://biothomas.com  
**Target:** Shopify Online Store 2.0 theme (Dawn foundation)  
**Brand going forward:** BIOTHOMAS (legacy working name: DBROTherapy)

---

## 1. Executive summary

The repository is **not** a Shopify theme. It is a single-page HTML/JS **prototype storefront** that simulates navigation, cart, and checkout in the browser. The live URL hosts the same prototype.

**Migration path:** Archive the prototype, scaffold a Shopify CLI / Online Store 2.0 theme from Dawn, then re-implement BIOTHOMAS branding, IA, and commerce features as editable sections, JSON templates, and native Shopify functionality.

---

## 2. Current technology stack

| Layer | Technology | Notes |
| --- | --- | --- |
| Markup | Single `index.html` (~1,401 lines) | SPA-style tab switching |
| Styling | Tailwind CDN + inline `<style>` | Not production-buildable |
| Interactivity | Alpine.js 3.14.8 (CDN) | Cart, filters, checkout mock |
| Fonts | Google Fonts: Fraunces + DM Sans | External dependency |
| Media | Remote Pexels hero video | No local product photography |
| Local server | `serve.sh` → Python `http.server` | Prototype only |
| Commerce | Client-side mock | No Shopify, payments, or inventory |
| CMS / theme | None | No Liquid, sections, or metafields |

**Repo root inventory**

| Path | Role |
| --- | --- |
| `index.html` | Entire prototype app |
| `logo.png` | Current BIOTHOMAS wordmark (872×151 PNG) |
| `Gemini_Generated_Image_b3axzib3axzib3ax.png` | Legacy DBRO Therapy logo (unused in UI, 2816×1536) |
| `serve.sh` | Local static server |
| `.gitattributes` | Git metadata |

---

## 3. Asset inventory

### Logos

| Asset | Status | Notes |
| --- | --- | --- |
| `logo.png` | **In use** | BIOTHOMAS wordmark; German flag accent; metallic silver on black; alt text currently “BIOTHOMAS” |
| `Gemini_Generated_Image_*.png` | **Legacy / unused** | DBRO Therapy logo (teal + sage figures) + tagline “FIND YOUR PATH. HEAL. GROW.” |

### Images

| Asset | Status |
| --- | --- |
| Product photos | **Missing** — CSS gradients + abstract device placeholders |
| Lifestyle / clinical imagery | **Missing** |
| Gallery images | **Missing** — PDP gallery labels only: Front / Side / Controls / In use |
| Favicon / app icon | **Missing** |
| OG / social share image | **Missing** |
| Trust badge icons | **Missing** — text-only stats |

### Icons

Inline SVG only (menu, search, cart, play). No icon set or sprite.

### Fonts

| Family | Role | Source |
| --- | --- | --- |
| Fraunces | Display / headings | Google Fonts |
| DM Sans | Body / UI | Google Fonts |

No self-hosted font files in the repo.

### Videos

| Asset | Status |
| --- | --- |
| Hero background | External Pexels MP4 (`3129957-uhd_2560_1440_25fps.mp4`) |
| Clinical demo | **Placeholder only** — “Prototype placeholder for embedded clinical walkthrough” |

### Documents

No PDFs, manuals, compliance docs, or policies in the repository.

---

## 4. Existing website analysis (https://touysmith.com/dbro/)

Confirmed: live site matches the repository prototype (same title, nav, products, and mock checkout).

### Navigation

1. Home  
2. Shop All  
3. Science & Benefits  
4. Comparison Tool  
5. FAQ  

Header also includes search (“Search systems…”) and cart drawer. Footer repeats Shop / Science / Compare / FAQ.

### Page hierarchy (prototype tabs)

```
Home
├── Hero + trust badges
├── Featured Systems
└── Health Benefits (tabs)
Shop All (filters + grid)
Product Detail (gallery mock, warranty add-on, accordion)
Science & Benefits (+ clinical demo placeholder)
Comparison Tool (machines matrix)
FAQ
Cart drawer → Simulated checkout (Contact → Shipping → Payment)
```

**Not present today:** About, Services, Blog, Contact, Customer Account, Privacy, Terms, Refund Policy, 404, Instagram, Newsletter landing, Collections (as Shopify collections).

### Brand colors (prototype tokens)

| Token (code name) | Hex | Actual role |
| --- | --- | --- |
| `teal` / charcoal | `#3A3A3A` | Primary UI / buttons (misnamed “teal”) |
| `teal-dark` | `#1F1F1F` | Dark surfaces |
| `sage` | `#6E6E6E` | Secondary |
| `slatebody` | `#1E1E1E` | Body text |
| `soft` | `#F5F5F5` | Page background |
| `cyanaccent` | `#FFCC00` | Gold accent (German flag / highlights) |
| `germanred` | `#DD0000` | Accent (used sparingly) |

**Legacy DBRO palette (from unused Gemini logo):** deep teal ≈ `#205A67`, sage ≈ `#769466` — retain as archival reference only unless brand asks to merge.

### Typography

- **Display:** Fraunces (serif) — hero + section titles  
- **Sans:** DM Sans — nav, body, UI  
- Tagline: **Find Your Path. Heal. Grow.**

### Content themes

- Molecular hydrogen (H₂) and oxyhydrogen (Brown’s Gas) systems  
- Use cases: daily wellness, athletic recovery, clinical / professional care  
- Positioning: premium German-linked biotech / wellness hardware  

### Forms

| Form | Status |
| --- | --- |
| Search | Client-side filter of mock products |
| Checkout contact / shipping / payment | Simulated; no backend |
| Newsletter | Checkbox in mock checkout only |
| Contact page form | **Missing** |

### Products (prototype catalog)

| ID | Name | Category | Price (USD) | Featured |
| --- | --- | --- | --- | --- |
| `h2-lite` | BIO H₂-Lite | Machines | $1,299 | Yes |
| `oxy-pro` | BIO OxyHydrogen Pro | Machines | $2,899 | Yes |
| `hydro-max` | BIO Hydro-Max 3000 | Machines | $5,499 | Yes |
| `cannula-pack` | Nasal Cannula 5-Pack | Nasal Cannulas | $39 | No |
| `bubbler` | Water Bubbler Chamber | Water Bubblers | $89 | No |
| `di-water` | Deionized Water Kit (6L) | Accessories | $49 | No |
| `travel-case` | Travel Hard Case | Accessories | $129 | No |
| `dual-cannula` | Dual-User Cannula Splitter | Nasal Cannulas | $59 | No |

**Machine specs captured:** gas output, flow rate, purity (99.99%), dual-user, controls, ideal user.

**Warranty add-ons (prototype):** +1 yr $199 / +2 yr $349.

### Services

No dedicated services catalog. Implied offerings:

- Personal / travel H₂ hydration  
- Athletic recovery protocols  
- Clinical dual-user biohacking systems  
- Science education / protocol content  

### Calls to action

| CTA | Destination |
| --- | --- |
| Browse Systems | Shop All |
| Watch Clinical Demo | Science tab (no real video) |
| Add to Cart / View details | Cart / PDP |
| Read the Science | Science & Benefits |
| Proceed to Interactive Checkout | Mock checkout |

### Trust messaging

- 3000 ml/min Peak Flow Capacity  
- 99.99% Pure H₂ Output  
- Medical Warranty Coverage  
- Free Global Shipping  

---

## 5. Gap analysis vs production Shopify store

| Capability | Prototype | Target Shopify theme |
| --- | --- | --- |
| Theme architecture | Monolithic HTML | OS 2.0 `sections/` + JSON templates |
| Product data | Hardcoded JS | Shopify products + variants + metafields |
| Collections / filters | Client filters | Collections + Search & Discovery filters |
| Cart / checkout | Simulated | Native Shopify cart + checkout |
| Customer accounts | None | Native customer templates |
| Blog | None | Shopify blog |
| Policies | None | Privacy / Terms / Refund pages |
| SEO | Basic meta only | JSON-LD, OG, canonicals, semantic HTML |
| Theme Editor | N/A | Fully section/block configurable |
| Performance | CDN Tailwind + remote video | Optimized CSS/JS, responsive images |
| Accessibility | Partial | WCAG AA target |

---

## 6. Recommended Shopify information architecture

| Page | Shopify implementation |
| --- | --- |
| Home | `templates/index.json` + configurable sections |
| Shop | Collection `all` or custom “Shop All” |
| Collections | `collection.json` + filters |
| Product | `product.json` (gallery, sticky ATC, accordions, related) |
| Services | Custom page + sections (or metaobjects) |
| About | Custom page |
| FAQ | Page + FAQ section (JSON-LD) |
| Blog | `blog.json` / `article.json` |
| Contact | Page + contact form section |
| Search / Cart / Account | Native templates |
| Policies | Shopify policy pages |
| Comparison Tool | Custom page section (machines metafields) |
| Science & Benefits | Custom page (maps from prototype) |
| 404 | `404.json` |

**Primary nav (recommended):** Home · Shop · Services · Science · About · FAQ · Contact  

**Secondary / utility:** Compare · Blog · Account · Cart · Search  

---

## 7. Migration strategy

1. **Archive** prototype into `archive/prototype/` for reference.  
2. **Scaffold** Dawn-based Shopify theme via Shopify CLI / theme structure.  
3. **Brand** settings: colors, typography (Fraunces + DM Sans), logo, tagline.  
4. **Rebuild** home and core templates as Theme Editor sections/blocks.  
5. **Map** product catalog + metafields (flow rate, gas output, purity, dual-user, ideal user).  
6. **Add** missing pages, SEO schema, policies, QA docs.  
7. **Placeholder** missing photography/copy with clear `TODO` markers.  

**Theme foundation decision:** Dawn — free, Online Store 2.0–native, strong section/JSON support, maintainable for a healthcare/wellness brand. No other free theme is a clearer fit for this catalog + content mix.

---

## 8. Brand naming notes

| Context | Current state | Action |
| --- | --- | --- |
| Product brand | BIOTHOMAS | Use everywhere in theme/UI |
| Logo lockup | BIOTHOMAS | Keep asset; use **BIOTHOMAS** everywhere in copy |
| Legacy | DBROTherapy / DBRO Therapy | Archive only; keep repo/git remote names if needed |
| Alpine store fn | `dbroStore()` | Replace in Shopify migration (no Alpine store) |
| Color token `teal` | Actually charcoal | Rename in theme CSS variables for clarity |

---

## 9. Risks & blockers

| Risk | Impact | Mitigation |
| --- | --- | --- |
| No real product photography | Conversion + trust | Placeholders + TODO asset list for client |
| Clinical/medical claims | Legal / advertising compliance | Soften copy; add disclaimer; client legal review |
| Prices unverified | Catalog accuracy | Mark as prototype prices until confirmed |
| No Shopify store credentials in repo | Cannot push live theme yet | Provide setup guide; theme remains deployable |
| Hero video is stock Pexels | Licensing / brand fit | Replace with owned footage or still |

**No blocking issue prevents theme scaffolding.** Missing content will use clearly marked placeholders.

---

## 10. Phase 1 completion checklist

- [x] Repository inspected  
- [x] Technology stack identified  
- [x] Assets inventoried  
- [x] Existing website crawled/analyzed  
- [x] Navigation, IA, brand, content, products documented  
- [x] Migration report produced (`docs/PHASE1_MIGRATION_REPORT.md`)  
- [x] Missing assets report produced (`docs/MISSING_ASSETS_REPORT.md`)  
- [x] Missing content report produced (`docs/MISSING_CONTENT_REPORT.md`)  
- [ ] Implementation begins in Phase 2  

---

*Next: Phase 2 — Shopify Online Store 2.0 theme scaffolding (Dawn foundation).*
