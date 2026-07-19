# 🍞 Tshomani Bakery - Management Guide

## Quick Start Guide

This guide will help you manage your Bakery section with images and products.

---

## 📸 How to Add Your Images

### Step 1: Upload Your Images to GitHub

1. Go to: https://github.com/zondidalasile-netizen/ngcwanguba-megasave
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop your 4 bakery images:
   - `bakery-dining.jpg` (Dining area)
   - `bakery-storefront.jpg` (Storefront exterior)
   - `bakery-kitchen.jpg` (Professional kitchen)
   - `bakery-display.jpg` (Display & retail shelves)
4. Click **"Commit changes"**

### Step 2: Update CSS with Image URLs

1. Edit `style.css`
2. Find these sections (around line 275-298):

```css
/* Store Images - UPDATE WITH YOUR IMAGE URLS */
.store-image-1 {
    background-image: url('YOUR_IMAGE_URL_HERE');
}

.store-image-2 {
    background-image: url('YOUR_IMAGE_URL_HERE');
}

.store-image-3 {
    background-image: url('YOUR_IMAGE_URL_HERE');
}

.store-image-4 {
    background-image: url('YOUR_IMAGE_URL_HERE');
}
```

### Step 3: Get Your Image URLs

After uploading, your images will be at:
- `https://raw.githubusercontent.com/zondidalasile-netizen/ngcwanguba-megasave/main/bakery-dining.jpg`
- `https://raw.githubusercontent.com/zondidalasile-netizen/ngcwanguba-megasave/main/bakery-storefront.jpg`
- `https://raw.githubusercontent.com/zondidalasile-netizen/ngcwanguba-megasave/main/bakery-kitchen.jpg`
- `https://raw.githubusercontent.com/zondidalasile-netizen/ngcwanguba-megasave/main/bakery-display.jpg`

### Step 4: Update style.css

Replace the image URLs in style.css:

```css
.store-image-1 {
    background-image: url('https://raw.githubusercontent.com/zondidalasile-netizen/ngcwanguba-megasave/main/bakery-dining.jpg');
}

.store-image-2 {
    background-image: url('https://raw.githubusercontent.com/zondidalasile-netizen/ngcwanguba-megasave/main/bakery-storefront.jpg');
}

.store-image-3 {
    background-image: url('https://raw.githubusercontent.com/zondidalasile-netizen/ngcwanguba-megasave/main/bakery-kitchen.jpg');
}

.store-image-4 {
    background-image: url('https://raw.githubusercontent.com/zondidalasile-netizen/ngcwanguba-megasave/main/bakery-display.jpg');
}
```

---

## 🍰 How to Edit Products

### Location in index.html

Find the "Our Signature Products" section around line 300:

```html
<div class="bakery-products">
    <h4>Our Signature Products</h4>
    <div class="products-grid">
        <!-- Products here -->
    </div>
</div>
```

### Product Template

Here's a product card template:

```html
<div class="product-card">
    <div class="product-icon">
        <i class="fas fa-bread-slice"></i>
    </div>
    <h5>Product Name</h5>
    <p>Product description here</p>
    <span class="price">From R5</span>
</div>
```

### Product Icons Available

- `fa-bread-slice` - Bread
- `fa-baguette` - Baguette
- `fa-cookie` - Cookies
- `fa-muffin` - Muffins
- `fa-cupcake` - Cupcakes
- `fa-hamburger` - Burgers/Hot food
- `fa-cake-candles` - Birthday cakes
- `fa-croissant` - Croissants

### How to Add a New Product

1. Find the `<div class="products-grid">` section
2. Copy a product-card and paste it
3. Update:
   - **Product name** - Change the `<h5>` text
   - **Description** - Change the `<p>` text
   - **Price** - Change the `<span class="price">` text
   - **Icon** - Change the icon class (see list above)

Example:

```html
<div class="product-card">
    <div class="product-icon">
        <i class="fas fa-croissant"></i>
    </div>
    <h5>Croissants</h5>
    <p>Fresh French-style croissants baked daily</p>
    <span class="price">From R8</span>
</div>
```

---

## 📝 How to Edit Store Information

### Opening Hours

Find this section around line 420:

```html
<div class="info-card">
    <i class="fas fa-clock"></i>
    <h5>Opening Hours</h5>
    <p>Monday - Sunday<br>5:00 AM - 8:00 PM</p>
</div>
```

Update the times to your actual opening hours.

### Phone Number

Find this section around line 430:

```html
<div class="info-card">
    <i class="fas fa-phone-alt"></i>
    <h5>Order Ahead</h5>
    <p>Call or WhatsApp<br>+27 (0) 123 456 7890</p>
</div>
```

Replace with your actual phone number.

### Address

Find this section around line 440:

```html
<div class="info-card">
    <i class="fas fa-map-marker-alt"></i>
    <h5>Location</h5>
    <p>Main Street<br>Rural Township</p>
</div>
```

Update with your actual location.

---

## 🎨 Current Bakery Section Features

✅ **Professional Introduction**
- Welcome message
- 4 key features displayed

✅ **Store Gallery**
- 4 image placeholders
- Professional card design
- Hover animations

✅ **Product Showcase**
- 6 signature products (Gwinya, Bread, Pastries, Muffins, Custom Orders, Hot Food)
- Product icons
- Descriptions
- Pricing
- Easy to add more products

✅ **Store Information**
- Opening hours
- Phone/WhatsApp contact
- Location
- Customer ratings

---

## 📊 Bakery Section Location

The complete bakery section is in `index.html` starting at line 175:

```html
<!-- Tshomani Bakery Section -->
<section id="bakery" class="bakery-section">
```

All styling is in `style.css` (lines 261-430).

---

## 🚀 Next Steps

1. ✅ Upload your 4 bakery images to GitHub
2. ✅ Update the image URLs in style.css
3. ✅ Edit product names, descriptions, and prices
4. ✅ Update opening hours and contact information
5. ✅ View the updated website!

---

## 💡 Tips

- **Keep images consistent** - Use similar sizes and aspect ratios
- **Update frequently** - Change prices and products as needed
- **Add more products** - Just copy and paste product cards
- **Use real images** - Professional photos look better than placeholders
- **Mobile friendly** - The bakery section is fully responsive

---

## 🔗 Important Links

- **Website**: https://zondidalasile-netizen.github.io/ngcwanguba-megasave
- **Repository**: https://github.com/zondidalasile-netizen/ngcwanguba-megasave
- **Edit Files**: https://github.com/zondidalasile-netizen/ngcwanguba-megasave/edit/main/index.html

---

## ❓ FAQ

**Q: How do I add more than 6 products?**
A: Copy a product card and paste it. There's no limit!

**Q: Can I change product icons?**
A: Yes! Use any FontAwesome icon (see list above).

**Q: How do I remove a product?**
A: Delete the entire `<div class="product-card">...</div>` block.

**Q: Can I use different image sizes?**
A: Yes! The CSS automatically resizes them.

**Q: How do I add a product image?**
A: Follow the same process as store images - upload to GitHub and add the URL.

---

## 📞 Support

If you need help:
1. Check the HTML/CSS comments in the files
2. Review this guide again
3. Contact via GitHub

---

**Last Updated**: 2024
**Version**: 1.0.0
**Status**: Ready to use! 🎉