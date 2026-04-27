# PerfCalc - AdSense SEO Setup Guide

## ✅ SEO Implementation Checklist

### Meta Tags & Metadata
- [x] Proper page titles for all pages
- [x] Meta descriptions optimized for click-through
- [x] Open Graph tags for social sharing
- [x] Twitter Card integration
- [x] Canonical URLs to prevent duplicate content
- [x] Viewport meta tag for mobile responsiveness
- [x] Character encoding (UTF-8)

### Structured Data (Schema.org)
- [x] Organization schema
- [x] Website schema
- [x] Software Application schema for each tool
- [x] Proper JSON-LD implementation

### Technical SEO
- [x] Sitemap.xml generation
- [x] Robots.txt configuration
- [x] Mobile responsive design
- [x] Fast page load optimization
- [x] HTTPS ready
- [x] Proper heading hierarchy (H1, H2, H3)

### Content Quality
- [x] Unique, descriptive content on each page
- [x] Proper keyword usage
- [x] Clear call-to-actions
- [x] Internal linking structure
- [x] FAQs and guides for tools

### AdSense Requirements
- [ ] Google Analytics setup (Add your tracking ID)
- [ ] Google Search Console verification
- [ ] AdSense account creation
- [ ] AdSense code implementation
- [ ] Content policy compliance
- [ ] 30+ days of content history
- [ ] Original, high-quality content
- [ ] Unique domain name

## 🔧 Configuration Steps

### 1. Update Google Verification Code
Replace `your-google-verification-code` in:
- `src/lib/seo.js`
- `src/app/layout.js`

Get code from: https://search.google.com/search-console

### 2. Setup Google Analytics
Replace `G-XXXXXXXXXX` in:
- `src/app/layout.js`

Create account at: https://analytics.google.com

### 3. Add AdSense Code
Replace `ca-pub-xxxxxxxxxxxxxxxx` in:
- `src/app/layout.js`

Get code from: https://www.google.com/adsense

### 4. Update Domain Name
Replace all instances of `perfcalc.com` with your actual domain in:
- `src/lib/seo.js`

### 5. Add Favicons
Place favicon files in `public/`:
- favicon.ico
- apple-touch-icon.png
- og-image.png (1200x630px for social media)

## 📋 Pre-Launch Checklist

### Content Requirements
- [ ] Privacy Policy page (required for AdSense)
- [ ] Terms of Service page (recommended)
- [ ] About Us page with genuine information
- [ ] Contact page with support email
- [ ] At least 3-5 quality, original articles
- [ ] Clear, useful tool descriptions

### Quality Checks
- [ ] No grammatical errors
- [ ] All links working (internal and external)
- [ ] No broken images
- [ ] Fast load times (< 3 seconds)
- [ ] Mobile responsive on all devices
- [ ] No excessive ads (before AdSense approval)

### Security & Compliance
- [ ] SSL certificate installed (HTTPS)
- [ ] No malware or viruses
- [ ] No plagiarized content
- [ ] Original graphics/design
- [ ] GDPR compliant (if targeting EU)
- [ ] CCPA compliant (if targeting California)

## 🚀 Deployment Steps

### 1. Update Your Domain
```bash
# In src/lib/seo.js
SITE_URL = "https://yourdomain.com"
SITE_NAME = "Your Site Name"
```

### 2. Build & Test
```bash
npm run build
npm run start
```

### 3. Test SEO
- [ ] Check sitemap.xml loads
- [ ] Verify robots.txt is accessible
- [ ] Test with Google Mobile-Friendly Test
- [ ] Check with Google PageSpeed Insights

### 4. Submit to Google
1. Add site to Google Search Console
2. Submit sitemap
3. Request indexing for homepage
4. Monitor coverage and errors

### 5. Apply for AdSense
1. Create AdSense account
2. Add website to AdSense
3. Wait for approval (24-48 hours typically)
4. Add AdSense code once approved

## 📊 Performance Targets

- **Lighthouse Score:** 90+
- **Core Web Vitals:** All green
- **Mobile Usability:** No issues
- **SEO Score:** 100

## 🔍 Monitoring

### Regular Tasks
- Check Google Search Console weekly
- Review Analytics monthly
- Update content regularly
- Monitor for crawl errors
- Check rankings quarterly

### Tools to Use
- Google Search Console
- Google Analytics
- Google PageSpeed Insights
- Mobile-Friendly Test
- Lighthouse
- GTmetrix

## 💡 Tips for AdSense Approval

1. **Original Content:** Make sure all content is unique and valuable
2. **Regular Updates:** Post new content or update existing content regularly
3. **Proper Navigation:** Clear menu structure and internal linking
4. **Mobile First:** Ensure perfect mobile experience
5. **Loading Speed:** Optimize images and minimize CSS/JS
6. **User Experience:** No intrusive ads before AdSense approval
7. **Trust Signals:** Add About, Contact, Privacy Policy pages
8. **Engagement:** Encourage comments and user interaction

## ❓ Common Issues

### "Not enough content"
- Solution: Add at least 15-20 quality pages of content

### "Violated content policies"
- Solution: Ensure no copyrighted content, spam, or prohibited topics

### "Insufficient traffic"
- Solution: Promote site on social media and backlinks

### "Poor user experience"
- Solution: Optimize mobile design and page speed

---

**Last Updated:** April 2026
**Next Review:** May 2026
