# BIOTHOMAS — QA Checklist

Test against an unpublished theme with sample products loaded.

## Functional

- [ ] Home sections render in Theme Editor and storefront  
- [ ] All nav links resolve (Home, Shop, Services, Science, About, FAQ, Contact, Compare)  
- [ ] Collection filters + sorting + pagination  
- [ ] Product gallery, variants, quantity, sticky ATC / buy buttons  
- [ ] Cart drawer add / update / remove  
- [ ] Checkout reaches Shopify checkout  
- [ ] Search returns products  
- [ ] Contact form submits  
- [ ] Newsletter signup works  
- [ ] Customer account login / register / order history  
- [ ] 404 page  
- [ ] Policy pages linked in footer  
- [ ] Comparison table keyboard-scrollable on mobile  
- [ ] Benefits tabs switch panels (keyboard + click)  
- [ ] FAQ accordion expands; FAQ JSON-LD present in page source  

## Content / placeholders

- [ ] No prototype-only FAQ (“Is this a live Shopify store?”) on live theme  
- [ ] TODO placeholders identified for client replacement  
- [ ] Logo assigned; light-background contrast acceptable  
- [ ] Product prices match approved catalog  

## Accessibility (WCAG AA target)

- [ ] Logical heading order on home / product / collection  
- [ ] Focus visible on interactive controls  
- [ ] Images have alt text (or decorative empty alt)  
- [ ] Color contrast for text / buttons  
- [ ] Forms have labels / errors announced  
- [ ] Prefers-reduced-motion respected for hero animations  

## SEO

- [ ] Unique title + meta description on key pages  
- [ ] Canonical URL present  
- [ ] Organization JSON-LD present  
- [ ] Product structured data on PDPs  
- [ ] Breadcrumb JSON-LD on inner pages  
- [ ] Open Graph / Twitter tags present  

## Performance

- [ ] Hero image uses priority loading; below-fold lazy  
- [ ] No broken remote video dependency required for first paint  
- [ ] Lighthouse (mobile): Performance / A11y / SEO / BP aspirational 95+  
- [ ] Fonts not blocking critically (swap)  

## Cross-device

- [ ] iPhone Safari  
- [ ] Android Chrome  
- [ ] Desktop Chrome / Safari / Firefox  
- [ ] Tablet breakpoint  
