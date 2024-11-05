document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {id: 1, name: "swann-8-cctv-camera", price: 4200, image: "https://i.ibb.co/X2bRFrc/swann-8-cctv-camera-with-16-ch-1645928923-3968aa7e-progressive.jpg"  , description: "The Swann 8-CCTV Camera System is a comprehensive security solution designed to provide peace of mind. It features 8 high-resolution 1080p cameras with night vision up to 100 feet and heat and motion detection. The system includes a 1TB DVR for ample storage and allows for remote viewing via a smartphone app. It's perfect for both indoor and outdoor use, ensuring your property is protected around the clock"},
        {id: 2, name: "Progressive CCTV Camera", price: 4000, image: "https://i.ibb.co/Y0bbchs/cctv-1634471146-587bd9a3-progressive.jpg", description: "The CCTV-1634471146-587bd9a3 Progressive Camera is a high-definition surveillance device featuring 4 MP resolution for clear imaging. It boasts 120 dB Wide Dynamic Range (WDR) for excellent performance in varying lighting conditions and H.265+ compression technology for efficient video storage. The camera also includes advanced infrared technology with a long IR range, making it suitable for both day and night use. Additionally, it's water and dust resistant (IP67), ensuring durability in harsh environments"},
        {id: 3, name: "swann-camera-cctv-dvr44000", price: 2300, image: "https://i.ibb.co/SdY3tGh/swann-camera-cctv-dvr44000-1656657012-087a2566-progressive.jpg", description: "The Swann Camera CCTV DVR44000 is a robust security system featuring 4 high-definition 1080p cameras for clear video capture. It includes night vision, motion detection, and heat sensors to ensure comprehensive surveillance. The system comes with a 1TB hard drive for ample storage and supports remote viewing via a smartphone app. It's designed for both indoor and outdoor use, providing reliable security for homes and businesses"},
        {id: 4, name: "CCTV Camera Installation", price:550,image: "https://i.ibb.co/PTYmSxm/cctv-camera-installation-services-250x250.jpg", description: "collection reflects the brand's rich heritage and modern sensibilities"},
        {id: 5, name: "Full KIT Set 1000kg to 1800kg Electric Sliding Gate Motor", price: 7500, image: "https://i.ibb.co/x1JVFY2/Full-KIT-Set-1000kg-to-1800kg-Electric-Sliding-Gate-Motors-Automatic-Gate-Opener-Rolling-Ga-Automatic-Gate-Opener-Rolling-Gate-Operat.jpg", description: 
"The Full KIT Set 1000kg to 1800kg Electric Sliding Gate Motor is a comprehensive solution for automating heavy-duty sliding gates. It includes a powerful motor capable of handling gates weighing between 1000kg to 1800kg, ensuring smooth and reliable operation. The kit also comes with gear racks, infrared sensors, and a control unit for easy installation and operation. It supports remote control and smartphone access, making it convenient to open and close your gate from anywhere"},
        {id: 6, name: "Sliding Gate Motor", price: 6850, image: "https://i.ibb.co/3vgDV8g/gtr156-whats-in-the-box-05-05.jpg", description: "Electric Sliding Gate Motor is a comprehensive solution for automating heavy-duty sliding gates. It includes a powerful motor capable of handling gates weighing between 1000kg to 1800kg, ensuring smooth and reliable operation. The kit also comes with gear racks, infrared sensors, and a control unit for easy installation and operation. It supports remote control and smartphone access, making it convenient to open and close your gate from anywhere"},
        {id: 7, name: "Sliding gate motor setup", contact:0542853424, image: "https://i.ibb.co/MgfCn9X/38733902-Mz-Aw-LTQw-MC1k-YTIy-OGJh-NGIx.webp" , description: "This setup enables a sliding gate to be operated effortlessly, providing convenience and enhanced security"},
        {id: 8, name: "Sliding Gate​ Setup", contact: 320, image:"https://i.ibb.co/Dt1h7tt/IMG-20240814-WA0002.jpg", description: "This setup enables a sliding gate to be operated effortlessly, providing convenience and enhanced security"},
        {id: 9, name: "Sliding Gate​ Control Uint Setup", contact: 600, image: "https://i.ibb.co/BsHZ7QP/IMG-20240814-WA0001.jpg", description: "This setup enables a sliding gate to be operated effortlessly, providing convenience and enhanced security"},
        {id: 10, name: "Online Business website", price: 600, image: "https://i.ibb.co/zGhgB6j/IMG-20241105-WA0007.jpg", description: "An Online Business Website serves as a digital storefront for your business, allowing you to reach customers around the globe. It typically features a range of functionalities, including an attractive homepage, product or service listings, a secure shopping cart, and payment processing options. Additionally, it often includes essential pages such as About Us, Contact Information, and Customer Reviews. With the integration of SEO practices, an online business website helps improve visibility on search engines, driving more traffic and potential sales to your business"},
        {id: 11, name: "Online Business website", price: 620, image: "https://i.ibb.co/3zJhSnZ/IMG-20241105-WA0001.jpg", description: "An Online Business Website serves as a digital storefront for your business, allowing you to reach customers around the globe. It typically features a range of functionalities, including an attractive homepage, product or service listings, a secure shopping cart, and payment processing options. Additionally, it often includes essential pages such as About Us, Contact Information, and Customer Reviews. With the integration of SEO practices, an online business website helps improve visibility on search engines, driving more traffic and potential sales to your business"},
        {id: 12, name: "Online Business wesite", price: 620, image: "https://i.ibb.co/KrwWQDZ/IMG-20241105-WA0002.jpg", description: "An Online Business Website serves as a digital storefront for your business, allowing you to reach customers around the globe. It typically features a range of functionalities, including an attractive homepage, product or service listings, a secure shopping cart, and payment processing options. Additionally, it often includes essential pages such as About Us, Contact Information, and Customer Reviews. With the integration of SEO practices, an online business website helps improve visibility on search engines, driving more traffic and potential sales to your business"},
        {id: 13, name: "Online Business website", contact: 0, image: "https://i.ibb.co/TbnfJcW/IMG-20241105-WA0004.jpg", description: "An Online Business Website serves as a digital storefront for your business, allowing you to reach customers around the globe. It typically features a range of functionalities, including an attractive homepage, product or service listings, a secure shopping cart, and payment processing options. Additionally, it often includes essential pages such as About Us, Contact Information, and Customer Reviews. With the integration of SEO practices, an online business website helps improve visibility on search engines, driving more traffic and potential sales to your business"},
        {id: 14, name: "Online Business website", contact: 370, image: "https://i.ibb.co/cXqGQtw/IMG-20241105-WA0005.jpg", description: "An Online Business Website serves as a digital storefront for your business, allowing you to reach customers around the globe. It typically features a range of functionalities, including an attractive homepage, product or service listings, a secure shopping cart, and payment processing options. Additionally, it often includes essential pages such as About Us, Contact Information, and Customer Reviews. With the integration of SEO practices, an online business website helps improve visibility on search engines, driving more traffic and potential sales to your business"},
 
       ];
    const productGrid = document.getElementById('product-grid');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const EXPIRATION_TIME = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

    function checkExpiration(items) {
        const now = Date.now();
        return items.filter(item => now - item.timestamp < EXPIRATION_TIME);
    }

    cart = checkExpiration(cart);
    favorites = checkExpiration(favorites);

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('favorites', JSON.stringify(favorites));

    function renderProducts(products) {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image" data-id="${product.id}">
                <h3>${product.name}</h3>
                <p>Price: GH.${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="add-to-favorite" data-id="${product.id}">Add to Favorites</button>
                <button class="close-product" data-id="${product.id}" style="display: none;">Close</button>
            `;
            productGrid.appendChild(productElement);
        });
    }

    renderProducts(products);

    const cartModal = document.getElementById('cart-modal');
    const cartClose = document.getElementById('cart-close');
    const cartIcon = document.getElementById('cart-icon');

    const favoriteModal = document.getElementById('favorite-modal');
    const favoriteClose = document.getElementById('favorite-close');
    const favoriteIcon = document.getElementById('favorite-icon');

    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-close');
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    const productModal = document.getElementById('product-modal');
    const productClose = document.getElementById('product-close');
    const productDetails = document.getElementById('product-details');

    cartIcon.addEventListener('click', function() {
        cartModal.style.display = 'block';
        updateCart();
    });

    cartClose.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    favoriteIcon.addEventListener('click', function() {
        favoriteModal.style.display = 'block';
        updateFavorites();
    });

    favoriteClose.addEventListener('click', function() {
        favoriteModal.style.display = 'none';
    });

    searchIcon.addEventListener('click', function() {
        searchModal.style.display = 'block';
        searchInput.value = '';
        searchInput.focus();
    });

    searchClose.addEventListener('click', function() {
        searchModal.style.display = 'none';
    });

    productClose.addEventListener('click', function() {
        productModal.style.display = 'none';
    });

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );

        renderProducts(filteredProducts);
        searchModal.style.display = 'none';

        document.querySelectorAll('.close-product').forEach(button => {
            button.style.display = 'block';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        } else if (event.target === favoriteModal) {
            favoriteModal.style.display = 'none';
        } else if (event.target === searchModal) {
            searchModal.style.display = 'none';
        } else if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            cartItems.innerHTML = 'No items in cart.';
            cartTotal.innerText = 'Total: GH.0';
            return;
        }

        let total = 0;
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const cartItem = document.createElement('div');
            cartItem.innerText = `${product.name} - GH.${product.price}`;
            cartItems.appendChild(cartItem);
            total += product.price;
        });

        cartTotal.innerText = `Total: GH.${total}`;
     
    }

    function updateFavorites() {
        const favoriteItems = document.getElementById('favorite-items');
        favoriteItems.innerHTML = '';

        if (favorites.length === 0) {
            favoriteItems.innerHTML = 'No favorite items.';
            return;
        }

        favorites.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const favoriteItem = document.createElement('div');
            favoriteItem.innerText = `${product.name}`;
            favoriteItems.appendChild(favoriteItem);
        });
    }

    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.dataset.id);
            if (!cart.some(item => item.id === productId)) {
                cart.push({id: productId, timestamp: Date.now()});
                localStorage.setItem('cart', JSON.stringify(cart));
                document.getElementById('cart-count').innerText = cart.length;
                updateCart();
            }
        }

        if (event.target.classList.contains('add-to-favorite')) {
            const productId = parseInt(event.target.dataset.id);
            if (!favorites.some(item => item.id === productId)) {
                favorites.push({id: productId, timestamp: Date.now()});
                localStorage.setItem('favorites', JSON.stringify(favorites));
                document.getElementById('favorite-count').innerText = favorites.length;
                updateFavorites();
            }
        }

        if (event.target.classList.contains('product-image')) {
            const productId = parseInt(event.target.dataset.id);
            const product = products.find(p => p.id === productId);
            productDetails.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: GH.${product.price}</p>
            `;
            productModal.style.display = 'block';
        }

        if (event.target.classList.contains('close-product')) {
            const productId = parseInt(event.target.dataset.id);
            const productIndex = products.findIndex(p => p.id === productId);
            if (productIndex > -1) {
                products.splice(productIndex, 1);
                renderProducts(products);
            }
        }
    });

    // Update cart and favorite counts on page load
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('favorite-count').innerText = favorites.length;
});
