# BIOTHOMAS — Metafields & Metaobjects

Configure in **Settings → Custom data**.

## Product metafields (`custom` namespace)

| Key | Type | Used for |
| --- | --- | --- |
| `flow_rate` | Single line text | Product highlights + filters |
| `gas_output` | Single line text | H₂ vs oxyhydrogen |
| `purity` | Single line text | e.g. `99.99%` |
| `dual_user` | Single line text | `Yes` / `No` |
| `ideal_user` | Single line text | Personal / Athlete / Professional |
| `flow_tier` | Single line text | Entry / Pro / Professional |
| `whats_in_the_box` | Multi-line text | PDP accordion content |
| `usage_notes` | Multi-line text | Product usage guidance (no health claims) |

Theme section `biothomas-product-details` reads the first five automatically when present.

## Suggested metaobjects (optional)

### `benefit_topic`

- `title` (text)  
- `summary` (rich text)  
- `image` (file)  
- `related_products` (list of products)  

### `testimonial`

- `quote` (multi-line)  
- `author` (text)  
- `role` (text)  
- `product` (product reference, optional)  

Use Theme Editor blocks first; migrate to metaobjects when merchandisers need Admin-only content reuse.

## Dynamic sources

In Theme Editor, bind section settings/blocks to:

- Product metafields on PDP sections  
- Collection description for SEO bands  
- Shop brand fields for footer about blurb  

## Search & Discovery filters

Expose `custom.flow_rate` and product type/tags as storefront filters for the Shop All experience from the prototype.
