function addProductToContainer1(containerId, product_list) {
  const container = document.querySelector(`.${containerId}`);
  const productItem = document.createElement("div");
  productItem.classList.add("flower-items", "col", "l-3", "m-12", "c-6");
  // Tạo nội dung cho phần tử sản phẩm
  const productContent = `
        <div class="img-flower">
          <img class="img" src="${product_list.image}" alt="${
    product_list.name
  }">
        </div>
        <div class="text-flower">
          <p class="name-flower">${product_list.name}</p>
          <span class="price-sale">${product_list.salePrice}</span>
          <span class="price-sale1">VND</span>
          <span class="price">${product_list.price}</span>
          <span class="price1">VND</span>
        </div>
        <div class="sub-item">
  
          <a href="${
            product_list.link
          }" class="order-btn" data-product='${JSON.stringify(product_list)}'>
            Đặt hàng
          </a>
        </div>
        <div class="number_sales" >
          15%
        </div>
      `;
  // Gán nội dung cho phần tử sản phẩm
  productItem.innerHTML = productContent;
  const priceElement = productItem.querySelector(".price");
  const priceElement1 = productItem.querySelector(".price1");
  const numberSalesElement = productItem.querySelector(".number_sales");

  if (priceElement && priceElement.textContent.trim() == "") {
    numberSalesElement.style.display = "none";
    priceElement.style.display = "none";
    priceElement1.style.display = "none";
  }
  // lấy thông tin sản phẩm
  const orderBtn = productItem.querySelector(".order-btn");
  if (orderBtn) {
    orderBtn.addEventListener("click", function (event) {
      // Lấy thông tin sản phẩm từ thuộc tính "data-product"
      const productInfo = JSON.parse(orderBtn.getAttribute("data-product"));
      // localStorage.clear();
      // Lưu thông tin sản phẩm vào local storage
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.push(productInfo);
      localStorage.setItem("detail", JSON.stringify(cartItems));
      console.log(localStorage.getItem("detail"));
    });
  }
  // Thêm phần tử sản phẩm vào danh sách sản phẩm
  container.appendChild(productItem);
}

const product_sale1 = [
  {
    id: 1,
    name: "Hoa test",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-endless-love.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
  {
    id: 2,
    name: "Hoa hồng  ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-scented-love.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "/html/detail.html",
  },

  {
    id: 3,
    name: "Mặt trời hoa hồng  ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-thau-cam.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
  {
    id: 4,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-do-red-rose.jpg.webp",
    price: "",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
];
// duyệt qua vòng lặp để thêm sản phẩm
for (const product of product_sale1) {
  addProductToContainer1("flower-lq ", product);
}
