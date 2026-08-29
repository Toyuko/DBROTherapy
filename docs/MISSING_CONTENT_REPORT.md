# BIOTHOMAS — Missing Content Report

**Date:** 2026-07-31  
**Related:** `docs/PHASE1_MIGRATION_REPORT.md`

Editorial, legal, and commerce content required for launch that is incomplete, unverified, or absent in the prototype.

Priority: **P0** = required before go-live · **P1** = needed for conversion/SEO · **P2** = enrich later

Placeholder strategy: theme will ship with clearly marked `TODO` comments / Theme Editor defaults until client-approved copy is provided.

---

## 1. Brand & legal entity

| Content | Priority | Status |
| --- | --- | --- |
| Legal business name | P0 | Unknown (confirm legal entity name for BIOTHOMAS) |
| Registered address | P0 | Missing |
| Support email / phone | P0 | Missing |
| VAT / tax IDs | P1 | Missing |
| Country of operation / shipping origins | P0 | Prototype says “global” — unverified |
| Trademark guidance for BIOTHOMAS | P1 | Logo vs wordmark inconsistency |

---

## 2. Pages with no dedicated content today

| Page | Priority | Prototype coverage |
| --- | --- | --- |
| About BIOTHOMAS | P0 | None |
| Services | P0 | Implied only via benefits |
| Contact | P0 | None (checkout form only) |
| Blog / articles | P1 | None |
| Privacy Policy | P0 | None |
| Terms & Conditions | P0 | None |
| Refund / Returns Policy | P0 | None |
| Shipping Policy | P0 | “Free global shipping” claim only |
| Warranty Policy | P0 | “Medical warranty” claim only |
| 404 message | P2 | N/A |

---

## 3. Home page content gaps

| Section | Priority | Gap |
| --- | --- | --- |
| Hero | P1 | CTAs OK; clinical demo has no real destination |
| Featured Services | P0 | Section does not exist |
| About BIOTHOMAS teaser | P0 | Missing |
| Testimonials | P0 | Missing entirely |
| Gallery captions | P1 | Missing |
| Featured Articles | P1 | No blog content |
| FAQ Preview | P1 | Full FAQ exists; preview not split |
| Newsletter signup | P1 | Only checkout checkbox |
| Instagram feed | P2 | No handle / embed |
| Footer legal links | P0 | Missing |

---

## 4. Product content gaps

For each of the 8 prototype SKUs:

| Field | Priority | Status |
| --- | --- | --- |
| Long description (HTML) | P0 | Tagline only |
| Bullet highlights | P0 | Partial via specs |
| What’s in the box | P1 | Generic FAQ sentence only |
| Usage / protocol guidance | P1 | High-level benefits only |
| Safety warnings / contraindications | P0 | Missing |
| Variant options (voltage, color, bundle) | P1 | Not defined |
| SKU / barcode | P1 | Missing |
| Inventory / lead time | P0 | Missing |
| Confirmed retail price | P0 | Prototype prices — **unverified** |
| Compare-at / financing | P2 | Missing |
| SEO title / meta description | P1 | Missing |
| Alt text for images | P0 | N/A until photos exist |
| Reviews | P1 | Placeholder only planned |

**Warranty SKUs:** +1 yr / +2 yr pricing exists in prototype; needs product options or Shopify apps confirmation.

---

## 5. Collections & merchandising

| Content | Priority | Status |
| --- | --- | --- |
| Collection names & descriptions | P1 | Categories exist as filters only |
| Collection SEO copy | P1 | Missing |
| Merchandising order rules | P2 | Missing |
| “Shop All” vs Machines / Accessories strategy | P1 | Needs Shopify collection plan |

**Suggested collections**

- All Products  
- Machines  
- Accessories  
- Nasal Cannulas  
- Water Bubblers  
- Clinical Systems  
- Travel & Personal  

---

## 6. Science / benefits / services copy

| Content | Priority | Status |
| --- | --- | --- |
| Peer-reviewed citations / links | P0 | Prototype uses “peer-informed” without sources |
| Medical disclaimer | P0 | Missing — required for wellness claims |
| Protocol dosage / session length | P1 | Missing |
| Services page offerings & CTAs | P0 | Not written |
| Clinician vs consumer messaging split | P1 | Partial |

**Compliance note:** Do not present marketing claims as medical advice. Client/legal must approve final benefits language.

---

## 7. FAQ content

Prototype has 5 FAQs (including one meta FAQ about the prototype). Needed for production:

| Topic | Priority |
| --- | --- |
| Shipping times & regions | P0 |
| Returns / refunds window | P0 |
| Warranty claim process | P0 |
| Voltage / plug standards | P0 |
| Water purity requirements | P1 |
| Session length recommendations | P1 |
| Clinic bulk / B2B inquiry | P1 |
| Safety & who should not use | P0 |

Remove or rewrite: “Is this a live Shopify store?”

---

## 8. Social proof

| Content | Priority | Status |
| --- | --- | --- |
| Customer testimonials (name, role, quote) | P0 | Missing |
| Star ratings / review platform | P1 | Missing |
| Press logos / clinic partners | P2 | Missing |
| Case studies | P2 | Missing |

---

## 9. SEO & structured content

| Content | Priority | Status |
| --- | --- | --- |
| Unique meta titles/descriptions per page | P0 | Home only |
| Organization schema fields (logo, sameAs, contact) | P0 | Partial |
| Blog posts (min 3 for Featured Articles) | P1 | Missing |
| Internal linking plan | P2 | Missing |
| Redirect map from any old URLs | P2 | `/dbro/` prototype path only |

---

## 10. Contact & support

| Content | Priority | Status |
| --- | --- | --- |
| Contact form fields / routing email | P0 | Missing |
| Support hours / SLA | P1 | Missing |
| Sales inquiry vs support split | P1 | Missing |
| Map / showroom address | P2 | Missing |

---

## 11. Content that *can* be migrated from prototype

Reusable (with polish + legal review):

- Tagline: **Find Your Path. Heal. Grow.**  
- Hero headline & supporting sentence  
- Featured system names, taglines, flow badges, prices (prices pending confirmation)  
- Benefit tab copy (4 topics)  
- Science cards (4 topics)  
- Machine comparison matrix rows  
- Trust badge numbers (verify before launch)  
- Most FAQ answers (rewrite prototype-specific one)

---

## 12. Client content questionnaire (blocking for final launch)

Please confirm:

1. Final legal name, address, email, phone  
2. Confirmed product prices, SKUs, variants, inventory  
3. Shipping regions, rates, and “free shipping” rules  
4. Return / refund / warranty policy text  
5. Approved medical/wellness disclaimer  
6. About story (founder, mission, Germany/engineering angle)  
7. Services list (if selling services vs products only)  
8. At least 3 testimonials (or permission to omit until available)  
9. Social URLs + Instagram decision (feed vs link only)  
10. Blog: launch with placeholders or real posts?

---

## 13. Theme placeholder convention

In Liquid / section defaults:

```liquid
{% comment %} TODO: Replace with client-approved BIOTHOMAS copy {% endcomment %}
```

In visible UI (Theme Editor defaults only, never fake legal pages as final):

> *Placeholder content for BIOTHOMAS — replace before launch.*

Policy pages will use Shopify’s policy settings or clearly labeled draft copy.

---

*Phase 2+ will implement page templates and sections so this content can be dropped into the Theme Editor / Admin without code changes.*
