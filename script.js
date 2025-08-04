// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');
const counter = document.querySelector('.counter');
const progressBar = document.querySelector('.progress-bar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const cartCount = document.querySelector('.cart-count');
const categoriesContainer = document.getElementById('categories-container');
const featuredProducts = document.getElementById('featured-products');
const trendingProducts = document.getElementById('trending-products');
const newsletterForm = document.getElementById('newsletter-form');

// Sample Data
const categories = [
    { name: "Men's Fashion", image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", count: "40+" },
    { name: "Women's Fashion", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", count: "60+" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", count: "30+" },
    { name: "Footwear", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80", count: "25+" }
];

const products = [
    { 
        id: 1, 
        title: "Premium Denim Jacket", 
        price: 59.99, 
        oldPrice: 79.99, 
        image: "https://peplosjeans.in/cdn/shop/files/denimjacket2.jpg?v=1708153641&width=1080", 
        rating: 4.5,
        badge: "Sale"
    },
    { 
        id: 2, 
        title: "Organic Cotton T-Shirt", 
        price: 24.99, 
        oldPrice: null, 
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80", 
        rating: 4,
        badge: null
    },
    { 
        id: 3, 
        title: "Urban Casual Sneakers", 
        price: 89.99, 
        oldPrice: null, 
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80", 
        rating: 5,
        badge: "New"
    },
    { 
        id: 4, 
        title: "Winter Wool Beanie", 
        price: 19.99, 
        oldPrice: 24.99, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IaTj-GOn2KngKQy_84vxwMcxd9kjMwvjqA&s", 
        rating: 4,
        badge: null
    },
    { 
        id: 5, 
        title: "Slim Fit Chino Pants", 
        price: 49.99, 
        oldPrice: 59.99, 
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80", 
        rating: 4,
        badge: null
    },
    { 
        id: 6, 
        title: "Leather Crossbody Bag", 
        price: 79.99, 
        oldPrice: null, 
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80", 
        rating: 4.5,
        badge: null
    },
    { 
        id: 7, 
        title: "Classic Aviator Sunglasses", 
        price: 39.99, 
        oldPrice: 49.99, 
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80", 
        rating: 5,
        badge: "Best Seller"
    },
    { 
        id: 8, 
        title: "Knitted Sweater", 
        price: 44.99, 
        oldPrice: null, 
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80", 
        rating: 3.5,
        badge: null
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Loading Animation
window.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const interval = setInterval(() => {
        if (count < 100) {
            count++;
            counter.textContent = count.toString().padStart(3, '0');
            progressBar.style.width = `${count}%`;
            
            // Change progress bar color
            if (count < 30) {
                progressBar.style.background = 'linear-gradient(90deg, #ff4d4d, #f9cb28)';
            } else if (count < 70) {
                progressBar.style.background = 'linear-gradient(90deg, #f9cb28, #38ef7d)';
            } else {
                progressBar.style.background = 'linear-gradient(90deg, #38ef7d, #11998e)';
            }
        } else {
            clearInterval(interval);
            loadingScreen.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                mainContent.style.display = 'block';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1000);
            }, 2000);
        }
    }, 10);
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Render Categories
function renderCategories() {
    categoriesContainer.innerHTML = categories.map(category => `
        <div class="category-card">
            <img src="${category.image}" alt="${category.name}" class="category-img">
            <div class="category-overlay">
                <h3>${category.name}</h3>
                <p>${category.count} Products</p>
            </div>
        </div>
    `).join('');
}

// Render Products
function renderProducts(productsArray, container) {
    container.innerHTML = productsArray.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    ${renderRating(product.rating)}
                </div>
                <p class="product-price">$${product.price.toFixed(2)}${product.oldPrice ? ` <span>$${product.oldPrice.toFixed(2)}</span>` : ''}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `).join('');

    // Add event listeners to new buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Render Rating Stars
function renderRating(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars.push('<i class="fas fa-star"></i>');
    }
    
    if (hasHalfStar) {
        stars.push('<i class="fas fa-star-half-alt"></i>');
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push('<i class="far fa-star"></i>');
    }
    
    return stars.join('');
}

// Add to Cart Function
function addToCart(e) {
    const productId = parseInt(e.target.closest('.product-card').dataset.id);
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    
    // Button feedback
    const button = e.target;
    button.textContent = 'Added!';
    button.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.backgroundColor = '';
    }, 1000);
}

// Update Cart Count
function updateCart() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Newsletter Form Submission
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input');
    const email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address');
    }
});

// Email Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize Page
function init() {
    renderCategories();
    renderProducts(products.slice(0, 4), featuredProducts);
    renderProducts(products.slice(4, 8), trendingProducts);
    updateCart();
}

init();
