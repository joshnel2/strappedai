# Strapped AI - Enterprise Website

A high-impact, conversion-focused website for Strapped AI LLC - an enterprise AI implementation agency.

## 🚀 Features

- **Modern, Dark Design**: Intense, professional aesthetic that communicates power and results
- **Enterprise Focus**: Messaging and design tailored for 8-figure+ businesses
- **Qualification Form**: Pre-screens leads by collecting revenue, business details, and AI vision
- **Responsive**: Fully mobile-optimized for all devices
- **Smooth Animations**: Engaging scroll effects and transitions
- **Conversion-Optimized**: Strategic CTAs and clear value proposition

## 📁 Files

- `index.html` - Main website structure
- `styles.css` - Complete styling with dark theme and animations
- `script.js` - Form handling, animations, and interactivity

## 🎨 Design Highlights

### Color Scheme
- Primary: Neon green (#00ff88) - "Strapped" intensity
- Background: Deep blacks (#0a0a0a, #111111) - Professional, focused
- Text: White with gray hierarchy for readability

### Key Sections
1. **Hero**: Powerful headline with "Deploy & Multiply ROI" messaging
2. **Approach**: 3-step process (Target → Deploy → Snowball)
3. **Services**: Full AI arsenal including agents, automation, LLM integration, training
4. **Social Proof**: Testimonials from law firms, VCs, tech companies
5. **Qualification Form**: Enterprise-focused lead capture

## 🛠️ Deployment

### Option 1: Static Hosting (Fastest)
Deploy to **Netlify**, **Vercel**, or **GitHub Pages**:

1. Push files to a GitHub repository
2. Connect to hosting platform
3. Deploy in one click

### Option 2: Custom Server
Upload files to any web server with static hosting:
```bash
# Example: Upload via FTP/SFTP
scp -r * user@yourserver.com:/var/www/html/
```

### Option 3: Local Testing
```bash
# Simple Python server
python -m http.server 8000

# Or Node.js
npx http-server
```

Then visit `http://localhost:8000`

## 📧 Form Integration

The form currently logs submissions to the console. To capture real leads:

### Quick Setup: Form Services
Replace the form handling in `script.js` with one of these:

**Formspree** (Easiest):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Netlify Forms** (If using Netlify):
```html
<form name="contact" netlify>
```

### Advanced: Custom Backend
Uncomment the fetch code in `script.js` and set up an endpoint:

```javascript
fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Recommended: Connect to CRM
Send form data directly to:
- **HubSpot**: Use HubSpot Forms API
- **Salesforce**: Use Web-to-Lead
- **Pipedrive**: Use Pipedrive API
- **Microsoft Dynamics**: Use Dynamics Web API

## 🔗 Microsoft Teams Integration

To schedule calls via Teams, you have several options:

### Option 1: Calendly + Teams
1. Create a Calendly account
2. Connect Microsoft Teams for meetings
3. Replace form success with Calendly redirect:
```javascript
window.location.href = 'https://calendly.com/your-link';
```

### Option 2: Microsoft Bookings
1. Set up Microsoft Bookings
2. Add booking link to success message
3. Configure Teams as meeting provider

### Option 3: Custom Calendar API
Integrate directly with Microsoft Graph API for automated Teams meeting creation.

## 🎯 Customization

### Update Company Info
Edit in `index.html`:
- Company name, messaging, testimonials
- Services and offerings
- Contact information

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #00ff88;  /* Change brand color */
    --bg-dark: #0a0a0a;  /* Change background */
}
```

### Add Analytics
Add to `<head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Social Media

Add social links in footer section of `index.html`:
```html
<div class="footer-social">
    <a href="https://linkedin.com/company/strapped-ai">LinkedIn</a>
    <a href="https://twitter.com/strappedai">Twitter</a>
</div>
```

## 🔒 Security Notes

- Form validation is client-side only - add server-side validation
- Implement CAPTCHA (reCAPTCHA) to prevent spam
- Use HTTPS in production (automatic with Netlify/Vercel)
- Sanitize all form inputs on your backend

## 📈 SEO Optimization

The site includes:
- Semantic HTML structure
- Meta descriptions
- Proper heading hierarchy
- Fast load times

To improve SEO further:
1. Add sitemap.xml
2. Create robots.txt
3. Add Open Graph tags for social sharing
4. Submit to Google Search Console

## 🎭 A/B Testing Ideas

Test these elements to optimize conversions:
- Headline variations
- CTA button copy ("Deploy AI Now" vs "Schedule Call")
- Form field requirements
- Testimonial placement
- Color scheme intensity

## 📞 Support & Updates

### Making Updates
Edit files directly and redeploy. Changes are instant with modern hosting.

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Track conversion rates in analytics

## 🚨 Important Notes

1. **Form Submissions**: Set up proper form handling before going live
2. **Teams Calendar**: Configure booking system for call scheduling
3. **Legal**: Add privacy policy and terms of service pages
4. **Domain**: Point your domain (e.g., strappedai.com) to hosting
5. **SSL**: Ensure HTTPS is enabled (free with most hosts)

## 📝 Next Steps

1. ✅ Deploy to hosting platform
2. ✅ Configure form submission endpoint
3. ✅ Set up Microsoft Teams booking
4. ✅ Add analytics tracking
5. ✅ Point custom domain
6. ✅ Test on mobile devices
7. ✅ Set up email notifications for form submissions
8. ✅ Add privacy policy page
9. ✅ Submit to search engines

---

**Strapped AI LLC © 2025** - Enterprise AI Transformation
