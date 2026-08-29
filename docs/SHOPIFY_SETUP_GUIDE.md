# BIOTHOMAS — Shopify Setup Guide

Complete these steps in Shopify Admin after uploading the theme.

## 1. Create / connect the store

1. Create a Shopify store (or use an existing one).  
2. Install [Shopify CLI](https://shopify.dev/docs/api/shopify-cli).  
3. From the repo root:

```bash
shopify theme dev --store djrgy9-x6.myshopify.com
```

4. Or upload a theme ZIP via **Online Store → Themes**.

**Shopify admin hostname:** `djrgy9-x6.myshopify.com`  
**Admin URL:** https://admin.shopify.com/store/djrgy9-x6

## 1b. Connect biothomas.com

**Production domain:** `biothomas.com` (already connected)

1. In Shopify Admin → **Settings → Domains**, add `biothomas.com` (and `www.biothomas.com` if used).  
2. At your DNS provider, point the domain to Shopify (A / CNAME records Shopify shows).  
3. Set **biothomas.com** as the primary domain.  
4. Enable HTTPS (Shopify provisions the certificate once DNS propagates).  
5. Prefer redirecting `www` → apex (or the reverse) so there is one canonical host.  
6. Update any marketing links from the prototype (`touysmith.com/dbro/`) to `https://biothomas.com`.  

Canonical URLs and Organization schema in the theme use the live shop URL automatically once this domain is primary.

## 2. Theme settings

**Online Store → Themes → Customize → Theme settings**

1. Upload **logo** (`assets/biothomas-logo.png` or SVG when available).  
2. Upload **favicon** (TODO: client asset).  
3. Confirm **BIOTHOMAS** color schemes (preset applied).  
4. Set cart type to **Drawer** (recommended).  
5. Add social links when available.  
6. Set brand headline: `Find Your Path. Build. Grow.`

## 3. Navigation

**Online Store → Navigation**

Suggested **Main menu**:

- Home → `/`  
- Shop → `/collections/all`  
- Services → `/pages/services`  
- Science → `/pages/science`  
- About → `/pages/about`  
- FAQ → `/pages/faq`  
- Contact → `/pages/contact`  

Suggested **Footer menu**:

- Compare → `/pages/compare`  
- Blog → `/blogs/news`  
- Privacy Policy → policy URL  
- Terms → policy URL  
- Refund Policy → policy URL  

## 4. Pages (assign templates)

Create pages and assign the matching template in the theme editor / page admin:

| Page title | Handle | Template |
| --- | --- | --- |
| About | `about` | `page.about` |
| Services | `services` | `page.services` |
| FAQ | `faq` | `page.faq` |
| Science & Benefits | `science` | `page.science` |
| Compare | `compare` | `page.compare` |
| Contact | `contact` | `page.contact` |

Policy pages: use **Settings → Policies** (Privacy, Terms, Refund, Shipping).

## 5. Collections

Create collections (manual or automated):

- All / Shop All  
- Machines  
- Accessories  
- Nasal Cannulas  
- Water Bubblers  
- Clinical Systems (optional)  
- Travel & Personal (optional)

Enable **Search & Discovery** filters for Category / Price / custom metafields (flow rate).

## 6. Products (from prototype catalog)

| Title | Suggested price | Type / tags |
| --- | --- | --- |
| BIO H₂-Lite | $1,299 | Machines |
| BIO OxyHydrogen Pro | $2,899 | Machines |
| BIO Hydro-Max 3000 | $5,499 | Machines |
| Nasal Cannula 5-Pack | $39 | Nasal Cannulas |
| Water Bubbler Chamber | $89 | Water Bubblers |
| Deionized Water Kit (6L) | $49 | Accessories |
| Travel Hard Case | $129 | Accessories |
| Dual-User Cannula Splitter | $59 | Nasal Cannulas |

**TODO:** Confirm prices, SKUs, inventory, variants (voltage/warranty), and photography before launch.

See [METAFIELDS.md](METAFIELDS.md) for product metafield setup.

## 7. Blog

1. Create blog `news` (or update Featured Articles section to your blog handle).  
2. Publish at least 3 articles for the home “Featured Articles” section (or hide the section until ready).

## 8. Apps (optional but recommended)

- Product reviews app  
- Instagram feed (optional; or link-only in footer)  
- SEO / redirects from the prototype at `touysmith.com/dbro/` → `https://biothomas.com`

## 9. Payments, shipping, taxes

Configure under **Settings** — required for real checkout (theme uses native Shopify cart/checkout).

## 10. Compliance

- Finalize medical/wellness disclaimer  
- Complete policy pages  
- Confirm “free global shipping” and warranty claims before publishing  
