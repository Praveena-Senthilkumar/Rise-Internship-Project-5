const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Common Navbar (reuse in all pages)
const navbar = `
<nav>
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <a href="/cart">Cart</a>
  <a href="/contact">Contact</a>
</nav>
`;

// HOME PAGE
app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>FarmCare Store</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>

      ${navbar}

      <div class="container">
        <h1>🛒 FarmCare Store</h1>
        <p>Buy products for your cattle health</p>

        <div class="card">
          <h3>🐄 Nutrition Feed</h3>
          <p>₹500</p>
          <button>Add to Cart</button>
        </div>

        <div class="card">
          <h3>💊 Medicine Kit</h3>
          <p>₹1200</p>
          <button>Add to Cart</button>
        </div>

      </div>

    </body>
    </html>
  `);
});

// PRODUCTS PAGE
app.get("/products", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Products</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>

      ${navbar}

      <div class="container">
        <h1>🛍 Products</h1>

        <div class="card">
          <h3>🐄 Nutrition Feed</h3>
          <p>₹500</p>
          <button>Add to Cart</button>
        </div>

        <div class="card">
          <h3>💊 Medicine Kit</h3>
          <p>₹1200</p>
          <button>Add to Cart</button>
        </div>

        <div class="card">
          <h3>💉 Vaccination Pack</h3>
          <p>₹800</p>
          <button>Add to Cart</button>
        </div>

      </div>

    </body>
    </html>
  `);
});

// CART PAGE
app.get("/cart", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Cart</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>

      ${navbar}

      <div class="container">
        <h1>🛒 Your Cart</h1>

        <div class="card">
          <p>No items added yet</p>
        </div>

      </div>

    </body>
    </html>
  `);
});

// CONTACT PAGE
app.get("/contact", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Contact</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>

      ${navbar}

      <div class="container">
        <h1>📞 Contact Us</h1>

        <div class="card">
          <p>Email: farmcare@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

    </body>
    </html>
  `);
});

// SERVER
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});