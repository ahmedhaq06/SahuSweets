/**
 * Sahu Bakery & Confectionery - Core JavaScript Application
 * Features: Product catalog, INR cart calculation, WhatsApp ordering,
 * quick view modal, discount coupons, and persistent storage.
 */

// ==========================================
// Product Catalog (Indian Rupees ₹)
// ==========================================
const PRODUCTS = [
  // Top Featured Products (Reference Design 6 Grid)
  {
    id: 'prod-1',
    name: 'Royal Butter Milk Toast (Rusk)',
    category: 'toast',
    price: 120,
    originalPrice: 150,
    unit: '400g Pack',
    image: 'images/toast-milk-rusk.png',
    tag: 'Best Seller',
    isVeg: true,
    rating: 4.9,
    shortDesc: 'Crisp, double-baked golden milk rusks infused with aromatic cardamom and pure butter.',
    fullDesc: 'Crafted with premium dairy milk and slow-baked to achieve a delicate honeycomb crunch. Perfect for dipping into morning Indian Chai or filter coffee. 100% Vegetarian and preservative-free.',
    ingredients: 'Wheat Flour, Milk Solids, Pure Butter, Cane Sugar, Cardamom, Yeast',
    shelfLife: '60 Days',
    isTop: true
  },
  {
    id: 'prod-2',
    name: 'Danish Berry Custard Pastry',
    category: 'croissant',
    price: 160,
    originalPrice: 190,
    unit: 'Single / 180g',
    image: 'images/danish-pastry.png',
    tag: 'Chef Special',
    isVeg: true,
    rating: 4.8,
    shortDesc: 'Flaky artisan puff pastry layered with silky vanilla custard and fresh wild berries.',
    fullDesc: 'Hand-laminated dough folded with premium butter, baked golden brown and topped with a luscious vanilla bean pastry cream, fresh raspberries, and blackberries.',
    ingredients: 'Flour, Pure Butter, Vanilla Custard Cream, Fresh Berries, Sugar Glaze',
    shelfLife: '2 Days (Refrigerate)',
    isTop: true
  },
  {
    id: 'prod-3',
    name: 'Multiseed Artisan Rustic Loaf',
    category: 'bread',
    price: 180,
    originalPrice: 220,
    unit: '450g Loaf',
    image: 'images/whole-grain-bread.png',
    tag: 'Healthy Pick',
    isVeg: true,
    rating: 4.9,
    shortDesc: 'Wholesome whole-wheat sourdough loaf encrusted with flax, pumpkin, and sesame seeds.',
    fullDesc: 'Naturally fermented for 24 hours for exceptional depth of flavor and easy digestion. Soft, airy crumb surrounded by a delightfully crunchy seed-crusted crust.',
    ingredients: 'Stone-ground Whole Wheat, Sourdough Starter, Flaxseeds, Pumpkin Seeds, Sesame, Sea Salt',
    shelfLife: '4 Days',
    isTop: true
  },
  {
    id: 'prod-4',
    name: 'Belgian Dark Truffle Cake (Eggless)',
    category: 'cake',
    price: 550,
    originalPrice: 650,
    unit: '500g (1.1 lbs)',
    image: 'images/chocolate-cake.png',
    tag: 'Celebration',
    isVeg: true,
    rating: 5.0,
    shortDesc: 'Decadent moist chocolate sponge drenched in 55% Belgian chocolate ganache with chocolate curls.',
    fullDesc: 'Our signature celebration cake. Ultra-soft eggless Dutch cocoa sponge filled with velvety dark chocolate ganache and finished with a mirror glaze, fresh raspberries, and edible gold leaf.',
    ingredients: 'Cocoa Solids, Belgian Dark Couverture, Wheat Flour, Condensed Milk, Butter, Berries',
    shelfLife: '3 Days (Refrigerate)',
    isTop: true
  },
  {
    id: 'prod-5',
    name: 'Garlic Herb Butter Toast Slices',
    category: 'toast',
    price: 140,
    originalPrice: 170,
    unit: '250g Pack',
    image: 'images/garlic-toast.png',
    tag: 'Crispy Snack',
    isVeg: true,
    rating: 4.7,
    shortDesc: 'Crunchy twice-baked toast batons generously glazed with roasted garlic butter and Italian herbs.',
    fullDesc: 'Infused with freshly crushed garlic, oregano, thyme, and sea salt. Enjoy as a savory tea snack or pair with warm soups and pasta dishes.',
    ingredients: 'Wheat Flour, Pure Butter, Roasted Garlic, Oregano, Thyme, Sea Salt',
    shelfLife: '45 Days',
    isTop: true
  },
  {
    id: 'prod-6',
    name: 'Fresh Berry Glaze Cheesecake',
    category: 'cake',
    price: 620,
    originalPrice: 750,
    unit: '500g Round',
    image: 'images/berry-cake.png',
    tag: 'Gourmet',
    isVeg: true,
    rating: 4.9,
    shortDesc: 'Creamy New York-style baked cheesecake crowned with fresh raspberry-blueberry compote.',
    fullDesc: 'Velvety cream cheese filling resting upon a buttery biscuit crumb base, topped with a tart homemade berry glaze and hand-picked forest berries.',
    ingredients: 'Philadelphia Cream Cheese, Biscuit Crumb, Butter, Fresh Blueberries, Raspberry Puree',
    shelfLife: '3 Days (Refrigerate)',
    isTop: true
  },

  // Explore More / Full Bakery Menu
  {
    id: 'prod-7',
    name: 'Wild Blueberry Streusel Muffins',
    category: 'muffins',
    price: 150,
    originalPrice: 180,
    unit: 'Pack of 2',
    image: 'images/muffins.png',
    tag: 'Breakfast',
    isVeg: true,
    rating: 4.8,
    shortDesc: 'Plump vanilla muffins bursting with real blueberries and a crispy golden cinnamon streusel crumb.',
    fullDesc: 'Tender, moist bakery muffins loaded with juicy blueberries. Baked fresh every morning with a crunchy spiced brown sugar topping.',
    ingredients: 'Flour, Farm Blueberries, Brown Sugar, Butter, Vanilla, Cinnamon',
    shelfLife: '3 Days',
    isTop: false
  },
  {
    id: 'prod-8',
    name: 'French Butter Croissants (2 Pcs)',
    category: 'croissant',
    price: 160,
    originalPrice: 200,
    unit: 'Pack of 2',
    image: 'images/croissant.png',
    tag: 'Pure Butter',
    isVeg: true,
    rating: 4.9,
    shortDesc: 'Classic flaky French croissants with airy honeycomb lamination and a rich buttery aroma.',
    fullDesc: 'Made using authentic European lamination techniques with 82% fat butter. Crisp and golden on the outside, feather-light and cloud-soft inside.',
    ingredients: 'Refined Flour, Lactic Butter, Yeast, Milk, Sugar, Salt',
    shelfLife: '2 Days (Warm before serving)',
    isTop: false
  },
  {
    id: 'prod-9',
    name: 'Fresh Berry Almond Rustic Tart',
    category: 'tart',
    price: 190,
    originalPrice: 230,
    unit: 'Single / 200g',
    image: 'images/berry-tart.png',
    tag: 'Artisan',
    isVeg: true,
    rating: 4.8,
    shortDesc: 'Buttery shortcrust pastry filled with almond frangipane cream and mixed berry compote.',
    fullDesc: 'Golden baked tart crust with toasted flaked almonds on top and a tart, fragrant berry center. A dessert lover’s dream.',
    ingredients: 'Almond Flour, Butter, Raspberries, Blackberries, Flaked Almonds, Sugar',
    shelfLife: '3 Days',
    isTop: false
  },
  {
    id: 'prod-10',
    name: 'Crispy Suji Elaichi Rusk',
    category: 'toast',
    price: 110,
    originalPrice: 135,
    unit: '400g Box',
    image: 'images/toast-milk-rusk.png',
    tag: 'Chai Favorite',
    isVeg: true,
    rating: 4.9,
    shortDesc: 'Traditional semolina (suji) tea toast with freshly ground cardamom seeds and light sweetness.',
    fullDesc: 'Baked with coarse semolina for that iconic crunchy crumb that absorbs milk chai perfectly without crumbling instantly.',
    ingredients: 'Semolina (Suji), Wheat Flour, Elaichi, Vegetable Fat, Sugar',
    shelfLife: '60 Days',
    isTop: false
  },
  {
    id: 'prod-11',
    name: 'Red Velvet Cream Cheese Cake',
    category: 'cake',
    price: 580,
    originalPrice: 690,
    unit: '500g Cake',
    image: 'images/chocolate-cake.png',
    tag: 'Romantic',
    isVeg: true,
    rating: 4.9,
    shortDesc: 'Crimson cocoa velvet sponge layered with silky Italian mascarpone & cream cheese frosting.',
    fullDesc: 'Vibrant red cake sponge paired with luxurious tangy-sweet cream cheese frosting, decorated with red velvet crumbs.',
    ingredients: 'Wheat Flour, Cream Cheese, Cocoa, Buttermilk, Pure Vanilla, Butter',
    shelfLife: '3 Days (Refrigerate)',
    isTop: false
  },
  {
    id: 'prod-12',
    name: 'Artisan Sourdough Country Boule',
    category: 'bread',
    price: 170,
    originalPrice: 210,
    unit: '500g Boule',
    image: 'images/whole-grain-bread.png',
    tag: 'Slow Ferment',
    isVeg: true,
    rating: 4.8,
    shortDesc: 'Traditional rustic round country loaf with blistered chewy crust and an open moist crumb.',
    fullDesc: 'Crafted with 100% natural wild yeast starter, water, flour and salt. No additives, no commercial yeast.',
    ingredients: 'Unbleached Wheat Flour, Sourdough Culture, Water, Sea Salt',
    shelfLife: '4 Days',
    isTop: false
  }
];

// ==========================================
// Application State & LocalStorage
// ==========================================
let cart = JSON.parse(localStorage.getItem('sahu_cart')) || [];
let activeCoupon = null;
let currentCategory = 'all';

// ==========================================
// DOM Elements
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderTopProducts();
  renderExploreMenu('all');
  updateCartUI();
  setupEventListeners();
  initHeaderScroll();
});

// ==========================================
// Render Top Products (Reference Match)
// ==========================================
function renderTopProducts() {
  const container = document.getElementById('top-products-grid');
  if (!container) return;

  const topItems = PRODUCTS.filter(item => item.isTop);
  container.innerHTML = topItems.map(product => `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image-box">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-tag">${product.tag}</span>
        <div class="product-veg-indicator" title="100% Pure Vegetarian"></div>
      </div>
      <div class="product-card-body">
        <div>
          <div class="product-price-row">
            <div class="product-price">
              ₹${product.price}
              <span class="product-original-price">₹${product.originalPrice}</span>
            </div>
            <button class="btn-info-circle" onclick="openQuickView('${product.id}')" title="Quick View & Ingredients" aria-label="Quick View">i</button>
          </div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-short-desc">${product.shortDesc}</p>
        </div>
        <div class="product-footer-action">
          <span class="product-pack-size">${product.unit}</span>
          <button class="btn-add-cart" onclick="addToCart('${product.id}', this)">
            <span>Add</span> +
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// ==========================================
// Render Explore Menu / Filterable Grid
// ==========================================
function renderExploreMenu(category) {
  const container = document.getElementById('explore-menu-grid');
  if (!container) return;

  currentCategory = category;
  const filtered = category === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(item => item.category.toLowerCase() === category.toLowerCase());

  container.innerHTML = filtered.map(product => `
    <article class="explore-card" data-id="${product.id}">
      <div class="explore-card-img-box">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="explore-card-content">
        <div>
          <span class="explore-card-category">${product.category.toUpperCase()} • ${product.unit}</span>
          <h4 class="explore-card-title">${product.name}</h4>
          <p class="explore-card-desc">${product.shortDesc}</p>
        </div>
        <div class="explore-card-bottom">
          <span class="explore-price">₹${product.price}</span>
          <button class="btn-add-mini" onclick="addToCart('${product.id}', this)">
            Add +
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// ==========================================
// Cart Operations
// ==========================================
function addToCart(productId, btnElement) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to cart! 🥖`);

  // Button micro-interaction
  if (btnElement) {
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = '✓ Added';
    btnElement.classList.add('added');
    setTimeout(() => {
      btnElement.innerHTML = originalText;
      btnElement.classList.remove('added');
    }, 1200);
  }
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
    showToast(`Item removed from cart`);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast(`Item removed from cart`);
}

function saveCart() {
  localStorage.setItem('sahu_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const badge = document.getElementById('nav-cart-badge');
  const amountEl = document.getElementById('nav-cart-amount');
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountRow = document.getElementById('cart-discount-row');
  const discountEl = document.getElementById('cart-discount-amount');
  const deliveryEl = document.getElementById('cart-delivery-fee');
  const totalEl = document.getElementById('cart-grand-total');
  const progressText = document.getElementById('cart-free-shipping-text');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (badge) badge.innerText = totalCount;
  if (amountEl) amountEl.innerText = `₹${subtotal}`;

  // Free shipping threshold ₹500
  const freeShippingThreshold = 500;
  if (progressText) {
    if (subtotal === 0) {
      progressText.innerHTML = `Add items worth <strong>₹${freeShippingThreshold}</strong> for <strong>Free Local Delivery</strong>!`;
    } else if (subtotal < freeShippingThreshold) {
      const remaining = freeShippingThreshold - subtotal;
      progressText.innerHTML = `Add <strong>₹${remaining}</strong> more for <strong>FREE Local Delivery</strong>! 🚚`;
    } else {
      progressText.innerHTML = `🎉 You have unlocked <strong>FREE Local Delivery</strong>!`;
    }
  }

  // Render items inside drawer
  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="icon">🛒</div>
          <h4>Your basket is empty</h4>
          <p>Treat yourself with our oven-fresh cakes, crispy toasts, and bakery specials!</p>
          <button class="btn-primary" onclick="toggleCartDrawer(false)">Browse Menu</button>
        </div>
      `;
      if (document.getElementById('cart-footer-box')) {
        document.getElementById('cart-footer-box').style.display = 'none';
      }
    } else {
      if (document.getElementById('cart-footer-box')) {
        document.getElementById('cart-footer-box').style.display = 'block';
      }
      itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <img class="cart-item-thumb" src="${item.image}" alt="${item.name}" />
          <div class="cart-item-details">
            <h5 class="cart-item-title">${item.name}</h5>
            <div class="cart-item-price">₹${item.price} <small style="color:#888; font-weight:normal;">(${item.unit})</small></div>
            <div class="cart-item-controls">
              <div class="qty-stepper">
                <button onclick="updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <button class="btn-remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Calculations
  let discountAmount = 0;
  if (activeCoupon === 'SAHU20' || activeCoupon === 'FIRST20') {
    discountAmount = Math.round(subtotal * 0.20);
    if (discountRow) discountRow.style.display = 'flex';
    if (discountEl) discountEl.innerText = `- ₹${discountAmount}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const deliveryFee = (subtotal >= freeShippingThreshold || subtotal === 0) ? 0 : 50;
  if (deliveryEl) deliveryEl.innerText = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;

  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);
  if (subtotalEl) subtotalEl.innerText = `₹${subtotal}`;
  if (totalEl) totalEl.innerText = `₹${grandTotal}`;
}

// ==========================================
// Coupon Code Logic
// ==========================================
function applyCoupon() {
  const input = document.getElementById('coupon-code-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'SAHU20' || code === 'FIRST20') {
    activeCoupon = code;
    showToast('🎉 Coupon SAHU20 applied! 20% discount added.');
    updateCartUI();
  } else if (code === '') {
    showToast('Please enter a coupon code.');
  } else {
    showToast('❌ Invalid coupon code. Try "SAHU20"');
  }
}

function claimPromoCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    activeCoupon = code;
    showToast(`Code "${code}" copied & applied! 20% OFF 🏷️`);
    updateCartUI();
    toggleCartDrawer(true);
  }).catch(() => {
    activeCoupon = code;
    showToast(`Code "${code}" applied!`);
    updateCartUI();
    toggleCartDrawer(true);
  });
}

// ==========================================
// Drawer & Modal Controls
// ==========================================
function toggleCartDrawer(show) {
  const overlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (!overlay || !drawer) return;

  if (show) {
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('quickview-modal-overlay');
  const modalImg = document.getElementById('qv-img');
  const modalTitle = document.getElementById('qv-title');
  const modalCategory = document.getElementById('qv-category');
  const modalPrice = document.getElementById('qv-price');
  const modalDesc = document.getElementById('qv-desc');
  const modalIngredients = document.getElementById('qv-ingredients');
  const modalShelfLife = document.getElementById('qv-shelf-life');
  const modalAddBtn = document.getElementById('qv-add-btn');

  if (modalImg) modalImg.src = product.image;
  if (modalTitle) modalTitle.innerText = product.name;
  if (modalCategory) modalCategory.innerText = `${product.category.toUpperCase()} • ${product.tag}`;
  if (modalPrice) modalPrice.innerText = `₹${product.price}`;
  if (modalDesc) modalDesc.innerText = product.fullDesc;
  if (modalIngredients) modalIngredients.innerText = product.ingredients;
  if (modalShelfLife) modalShelfLife.innerText = product.shelfLife;

  if (modalAddBtn) {
    modalAddBtn.onclick = () => {
      addToCart(product.id);
      closeQuickView();
    };
  }

  if (modalOverlay) {
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuickView() {
  const modalOverlay = document.getElementById('quickview-modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
// ==========================================
// WhatsApp Direct Ordering & Shop Configuration
// ==========================================
// Set your shop's WhatsApp phone number with country code (e.g. '919876543210' for India)
// If left empty (''), WhatsApp will open with the formatted message ready to send to any contact.
const SHOP_WHATSAPP_PHONE = '';

function openWhatsAppChat() {
  const defaultText = encodeURIComponent('Hello Sahu Namkeen Sweet and Cake Shop! I would like to inquire about your toasts, cakes, and sweets.');
  const url = SHOP_WHATSAPP_PHONE 
    ? `https://wa.me/${SHOP_WHATSAPP_PHONE}?text=${defaultText}` 
    : `https://wa.me/?text=${defaultText}`;
  window.open(url, '_blank');
}

function orderViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Your cart is empty. Add products first!');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = activeCoupon ? Math.round(subtotal * 0.20) : 0;
  const delivery = subtotal >= 500 ? 0 : 50;
  const total = subtotal - discount + delivery;

  let message = `*✨ New Order - Sahu Namkeen Sweet & Cake Shop ✨*\n\n`;
  message += `*Items Ordered:*\n`;
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (${item.unit}) x ${item.quantity} = ₹${item.price * item.quantity}\n`;
  });

  message += `\n*Subtotal:* ₹${subtotal}`;
  if (discount > 0) message += `\n*Coupon Discount (${activeCoupon}):* -₹${discount}`;
  message += `\n*Delivery Fee:* ${delivery === 0 ? 'FREE' : '₹' + delivery}`;
  message += `\n*Total Payable:* *₹${total}*`;
  message += `\n\n*Payment Mode:* UPI / Cash on Delivery\n`;
  message += `Please confirm my order and share estimated delivery time. Thank you!`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = SHOP_WHATSAPP_PHONE 
    ? `https://wa.me/${SHOP_WHATSAPP_PHONE}?text=${encoded}` 
    : `https://wa.me/?text=${encoded}`;
  window.open(whatsappUrl, '_blank');
}

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Please add items to your cart before checkout.');
    return;
  }
  const modal = document.getElementById('checkout-modal-overlay');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal-overlay');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('cust-name').value;
  const phone = document.getElementById('cust-phone').value;
  const address = document.getElementById('cust-address').value;
  const notes = document.getElementById('cust-notes').value;

  const total = document.getElementById('cart-grand-total').innerText;

  // Clear cart and display confirmation
  cart = [];
  saveCart();
  updateCartUI();
  closeCheckoutModal();
  toggleCartDrawer(false);

  alert(`🎉 Thank you ${name}! Your bakery order has been placed successfully.\n\nTotal: ${total}\nDelivery Address: ${address}\nWe have sent an SMS confirmation to ${phone}. Freshly baking your order now!`);
}

// ==========================================
// Toast Notification System
// ==========================================
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// ==========================================
// Event Listeners & Header Scroll
// ==========================================
function setupEventListeners() {
  // Category tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      renderExploreMenu(category);
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('main-nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Live search bar
  const searchInput = document.getElementById('site-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (!term) {
        renderExploreMenu(currentCategory);
        return;
      }
      const filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.category.toLowerCase().includes(term) ||
        p.shortDesc.toLowerCase().includes(term)
      );
      const container = document.getElementById('explore-menu-grid');
      if (container) {
        if (filtered.length === 0) {
          container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: #777;">No baked items found matching "${term}". Try "Toast" or "Cake".</div>`;
        } else {
          container.innerHTML = filtered.map(product => `
            <article class="explore-card" data-id="${product.id}">
              <div class="explore-card-img-box">
                <img src="${product.image}" alt="${product.name}" />
              </div>
              <div class="explore-card-content">
                <div>
                  <span class="explore-card-category">${product.category.toUpperCase()} • ${product.unit}</span>
                  <h4 class="explore-card-title">${product.name}</h4>
                  <p class="explore-card-desc">${product.shortDesc}</p>
                </div>
                <div class="explore-card-bottom">
                  <span class="explore-price">₹${product.price}</span>
                  <button class="btn-add-mini" onclick="addToCart('${product.id}', this)">Add +</button>
                </div>
              </div>
            </article>
          `).join('');
        }
      }
    });
  }
}

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}
