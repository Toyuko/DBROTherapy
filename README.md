# BIOThomas — Shopify Online Store 2.0 Theme

Premium Shopify theme for **BIOThomas** (formerly DBROTherapy): molecular hydrogen and oxyhydrogen systems.

**Production domain:** [biothomas.com](https://biothomas.com)

Built on [Dawn 15.5.0](https://github.com/Shopify/dawn) with a BIOThomas brand layer, configurable sections, and SEO foundations.

## Quick start

```bash
# Install Shopify CLI: https://shopify.dev/docs/api/shopify-cli
npm install -g @shopify/cli @shopify/theme

# From this repository root
shopify theme dev --store djrgy9-x6.myshopify.com
# or: shopify theme dev  (uses shopify.theme.toml)
```

**Store:** `djrgy9-x6.myshopify.com` · **Public domain:** [biothomas.com](https://biothomas.com)

Upload without CLI: zip the theme folders (`assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`) and upload via **Online Store → Themes → Add theme → Upload zip**.

## Documentation

| Document | Description |
| --- | --- |
| [Phase 1 Migration Report](docs/PHASE1_MIGRATION_REPORT.md) | Stack, IA, brand, migration plan |
| [Missing Assets](docs/MISSING_ASSETS_REPORT.md) | Photography, logos, video gaps |
| [Missing Content](docs/MISSING_CONTENT_REPORT.md) | Copy, legal, product content gaps |
| [Shopify Setup Guide](docs/SHOPIFY_SETUP_GUIDE.md) | Admin configuration checklist |
| [Deployment Instructions](docs/DEPLOYMENT_INSTRUCTIONS.md) | Dev → preview → live |
| [QA Checklist](docs/QA_CHECKLIST.md) | Functional / a11y / SEO QA |
| [Launch Checklist](docs/LAUNCH_CHECKLIST.md) | Go-live gates |
| [Metafields](docs/METAFIELDS.md) | Product metafield definitions |

## Theme structure

```
assets/          # CSS, JS, logo
config/          # settings_schema + settings_data (BIOThomas preset)
layout/          # theme.liquid (+ brand fonts/SEO)
locales/         # Dawn translations
sections/        # Dawn + biothomas-* sections
snippets/        # Reusable Liquid + biothomas-seo/fonts
templates/       # JSON templates (OS 2.0)
archive/prototype/  # Pre-Shopify HTML prototype (reference only)
docs/            # Project reports & guides
```

## Brand

- **Name:** BIOThomas  
- **Tagline:** Find Your Path. Build. Grow.  
- **Fonts:** Fraunces (display) + DM Sans (body)  
- **Colors:** Charcoal `#3A3A3A`, soft `#F5F5F5`, gold `#FFCC00`, ink `#1E1E1E`  
- **Logo asset:** `assets/biothomas-logo.png` (assign in Theme settings)

## Key custom sections

- BIOThomas Hero  
- Trust Badges  
- Featured Services  
- About  
- Capabilities (tabs)  
- Testimonials  
- Gallery  
- FAQ (+ FAQPage JSON-LD)  
- CTA  
- Comparison Tool  
- Product Details (highlights, trust, accordions, review placeholder)  
- Recently Viewed (localStorage stub)

## License

Dawn portions remain under Shopify’s [Dawn license](LICENSE.md). BIOThomas customizations are project-specific for Toyuko / BIOThomas.
