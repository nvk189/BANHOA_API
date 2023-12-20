function addProductToContainer(containerId, product_list) {
    // Tìm đối tượng chứa sản phẩm bằng cách sử dụng containerId
    const container = document.querySelector(`.${containerId}`);
  
    // Tạo một phần tử sản phẩm mới
    const productItem = document.createElement("div");
    productItem.classList.add("flower-items","col", "l-3", "m-12", "c-6");
  
    // product_sale.map((product) => {

    // })
    // Tạo nội dung cho phần tử sản phẩm 
    const productContent = `
      <div class="img-flower">
        <img class="img" src="${product_list.image}" alt="${product.name}">
      </div>
      <div class="text-flower">
        <p class="name-flower">${product_list.name}</p>
        <span class="price-sale">${product_list.salePrice}</span>
        <span class="price">${product_list.price}</span>
      </div>
      <div class="sub-item">
       
        <a href="${product_list.link}" class="order-btn" data-product='${JSON.stringify(product_list)}'>
          Đặt hàng
        </a>
      </div>
      <div class="number_sales" >
        15%
        </div>
    `;
    // Gán nội dung cho phần tử sản phẩm
    productItem.innerHTML = productContent;
    const priceElement = productItem.querySelector('.price');
    const numberSalesElement = productItem.querySelector('.number_sales');

    if (priceElement && priceElement.textContent.trim() == '') {
        numberSalesElement.style.display = 'none';
    }
    // Thêm phần tử sản phẩm vào danh sách sản phẩm
    container.appendChild(productItem);
  }


  const product_sale_2 = [
    {
       
        name: "Little Tana",
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-sen-hong.jpg.webp",
        price: "500,000VND",
        salePrice: "300,000VND",
        link: "/html/detail.html"

    },
    {
        
        name: "Baby nhỏ xinh",
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-thach-thao-tim-miracle.jpg.webp" ,
        price: "",
        salePrice: "300,000VND",
        link: "/html/detail.html"

    },

    {
        name: "Simple",
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/net-quy-phai-hoa-cam-chuong.jpg.webp" ,
        price: "",
        salePrice: "300,000VND",
        link: "/html/detail.html"

    },

    {
        name: "Khoe Sắc",
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cam-chuong-hong-my-bae.jpg.webp" ,
        price: "",
        salePrice: "300,000VND",
        link: "/html/detail.html"

    },
  ]
  for (const product of product_sale_2) {
    addProductToContainer("flower-item  flower_product", product);
  }