function addProductToContainer_1(containerId, product_list) {
    // Tìm đối tượng chứa sản phẩm bằng cách sử dụng containerId
    const container = document.querySelector(`.${containerId}`);
  
    // Tạo một phần tử sản phẩm mới
    const productItem = document.createElement("div");
    productItem.classList.add("flower-items","col", "l-3", "m-4", "c-6");
  
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
        <a href="${product_list.link}">
          Đặt hàng
        </a>
      </div>
    `;
    // Gán nội dung cho phần tử sản phẩm
    productItem.innerHTML = productContent;
    // Thêm phần tử sản phẩm vào danh sách sản phẩm
    container.appendChild(productItem);
  }
  
  // Định nghĩa nhiều sản phẩm
  const product_sale = [
    {
       
        name: "Mặt trời của anh ",
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/New%20Sep/mat-troi-cua-anh-271x271.jpg.webp",
        price: "500,000VND",
        salePrice: "300,000VND",
        link: "/html/detail.html"

    },
    {
        
        name: "Mặt trời của anh ",
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/New%20Sep/mat-troi-cua-anh-271x271.jpg.webp" ,
        price: "500,000VND",
        salePrice: "300,000VND",
        link: "/html/detail.html"

    },

    {
        name: "Mặt trời của anh ",
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/New%20Sep/mat-troi-cua-anh-271x271.jpg.webp" ,
        price: "500,000VND",
        salePrice: "300,000VND",
        link: "/html/detail.html"

    },

    {
        
        name: "Mặt trời của anh ",
        image: "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/New%20Sep/mat-troi-cua-anh-271x271.jpg.webp" ,
        price: "500,000VND",
        salePrice: "300,000VND",
        link: "/html/detail.html"

    },
  ]
  // duyệt qua vòng lặp để thêm sản phẩm
 for (const product of product_sale) {
    addProductToContainer_1("List_detail", product);
  }
