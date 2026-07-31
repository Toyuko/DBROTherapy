# BIOThomas — Deployment Instructions

## Prerequisites

- Shopify store with theme upload permission  
- Shopify CLI (recommended) or Admin ZIP upload  
- Theme code from this repository  
- Production domain: **biothomas.com** (connected; storefront currently password-protected / “Opening soon”)  

## Option A — Shopify CLI (recommended)

```bash
cd /path/to/DBROTherapy

# Authenticate / select store
shopify theme dev --store YOUR-STORE.myshopify.com

# Push as unpublished theme
shopify theme push --unpublished --store YOUR-STORE.myshopify.com

# Or push to an existing theme ID
shopify theme push --theme THEME_ID --store YOUR-STORE.myshopify.com
```

Preview the unpublished theme in Admin → Online Store → Themes → Preview.

Publish only after QA:

```bash
shopify theme publish --theme THEME_ID --store YOUR-STORE.myshopify.com
```

## Option B — ZIP upload

1. Create a ZIP containing: `assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates` (and optional `shopify.theme.toml`).  
2. Do **not** include `.git`, `docs`, or `archive` in the production ZIP (optional to include docs for handoff).  
3. Admin → Online Store → Themes → Add theme → Upload zip file.  
4. Preview → Publish when ready.

## Environments

| Environment | Purpose |
| --- | --- |
| `shopify theme dev` | Local development with hot reload |
| Unpublished theme | Stakeholder preview |
| Published theme | Live storefront |

Configure stores in `shopify.theme.toml` after linking your shop.

## Post-deploy verification

1. `https://biothomas.com` resolves to the published theme (not a DNS/SSL error)  
2. Home hero + sections render  
3. Collections / products load  
4. Cart drawer + checkout path  
5. Contact form delivers email  
6. Policy links work  
7. Mobile nav + keyboard focus  
8. Lighthouse sample on home + product  
9. Canonical / OG URLs show `https://biothomas.com/...`

## Rollback

Admin → Themes → publish the previous theme, or:

```bash
shopify theme publish --theme PREVIOUS_THEME_ID
```
