$(document).ready(function () {

    $("#loadTime").text(new Date().toLocaleTimeString());

    $("#loadProducts").click(function () {
        loadProducts();
    });

    function loadProducts() {

        $.ajax({
            url: "https://dummyjson.com/products",
            method: "GET",
            dataType: "json",

            beforeSend: function () {
                $("#content").html("<p>Loading products...</p>");
            },

            success: function (data) {

                let output = "";

                data.products.forEach(function (product) {

                    output += `
                    <div class="product">

                        <h2>${product.title}</h2>

                        <img src="${product.thumbnail}" width="150">

                        <p><strong>ID:</strong> ${product.id}</p>
                        <p><strong>Description:</strong> ${product.description}</p>
                        <p><strong>Category:</strong> ${product.category}</p>
                        <p><strong>Price:</strong> $${product.price}</p>
                        <p><strong>Discount:</strong> ${product.discountPercentage}%</p>
                        <p><strong>Rating:</strong> ${product.rating}</p>
                        <p><strong>Stock:</strong> ${product.stock}</p>
                        <p><strong>Brand:</strong> ${product.brand}</p>

                        <p><strong>Tags:</strong> ${product.tags.join(", ")}</p>

                        <p><strong>Dimensions:</strong></p>
                        <ul>
                            <li>Width: ${product.dimensions.width}</li>
                            <li>Height: ${product.dimensions.height}</li>
                            <li>Depth: ${product.dimensions.depth}</li>
                        </ul>

                    </div>
                    `;
                });

                $("#content").html(output);

                $("#lastRefresh").text(new Date().toLocaleTimeString());
            },

            error: function () {
                $("#content").html("<p style='color:red'>Failed to load products.</p>");
            }

        });

    }

});