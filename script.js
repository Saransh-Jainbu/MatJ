const navDialog = document.getElementById('nav-dialog');
function handleMenu(){
    navDialog.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const sheetURL = 'https://script.google.com/macros/s/AKfycbyT1Dnl5AhmGm_hE61OYW2fnlF2rQHyp9ESKh1SMjKhSOrvu7LNG-HbZ0MxjN0nhIA03w/exec'; // Replace with your web app URL

    fetch(sheetURL)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product['Image URL']}" alt="${product.Name}">
                    </div>
                    <div class="product-info">
                        <div class="product-title">${product.Name}</div>
                        <div class="product-description">${product['Product Description']}</div>
                        <div class="product-links">
                            <a href="${product['PDF Link']}" target="_blank">View Brochure</a>
                            <a href="${product['More Images Links']}" target="_blank">View More Images</a>
                        </div>
                    </div>
                `;
                productList.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});
