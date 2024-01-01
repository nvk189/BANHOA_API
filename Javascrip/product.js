let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;
const btnNext = document.querySelector(".btn_next");
const btnNext_1 = document.querySelector(".btn_next-1");

function addProductToContainer1(containerId, product_list) {
  // Kiểm tra nếu index của sản phẩm nằm trong khoảng start và end thì mới thêm vào container
  if (
    product_list &&
    product_List.indexOf(product_list) >= start &&
    product_List.indexOf(product_list) < end
  ) {
    const container = document.querySelector(`.${containerId}`);
    const productItem = document.createElement("div");
    productItem.classList.add("flower-items", "col", "l-3", "m-12", "c-6");

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
        <div class="number_sales">
          15%
        </div>
      `;

    productItem.innerHTML = productContent;
    const priceElement = productItem.querySelector(".price");
    const priceElement1 = productItem.querySelector(".price1");
    const numberSalesElement = productItem.querySelector(".number_sales");

    if (priceElement && priceElement.textContent.trim() == "") {
      numberSalesElement.style.display = "none";
      priceElement.style.display = "none";
      priceElement1.style.display = "none";
    }

    const orderBtn = productItem.querySelector(".order-btn");

    if (orderBtn) {
      orderBtn.addEventListener("click", function (event) {
        const productInfo = JSON.parse(orderBtn.getAttribute("data-product"));
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push(productInfo);
        localStorage.setItem("detail", JSON.stringify(cartItems));
        console.log(localStorage.getItem("detail"));
      });
    }

    container.appendChild(productItem);
  }
}

// danh sách sản phẩm

const product_List = [
  {
    id: 1,
    name: "Hoa test",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-endless-love.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "#",
  },

  {
    id: 2,
    name: "Hoa hồng  ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-scented-love.jpg.webp",
    price: "500.000",
    salePrice: "400.000",
    link: "#",
  },

  {
    id: 3,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-thau-cam.jpg.webp",
    price: "500.000",
    salePrice: "450.000",
    link: "/html/detail.html",
  },
  {
    id: 4,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-do-red-rose.jpg.webp",
    price: "",
    salePrice: "500.000",
    link: "/html/detail.html",
  },
  {
    id: 5,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/loi-yeu.jpg.webp",
    price: "1.000.000",
    salePrice: "900.000",
    link: "/html/detail.html",
  },
  {
    id: 6,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/anh-mat-troi.jpg.webp",
    price: "400.000",
    salePrice: "350.000",
    link: "/html/detail.html",
  },
  {
    id: 7,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-thach-thao-tim-hen-uoc.jpg.webp",
    price: "",
    salePrice: "600.000",
    link: "/html/detail.html",
  },
  {
    id: 8,
    name: "Hoa kỉ niệm",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-huong-duong-kinh-trong.jpg.webp",
    price: "",
    salePrice: "800.000",
    link: "/html/detail.html",
  },
  {
    id: 9,
    name: "Ngát xanh",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-tinh-yeu-ngat-xanh-1.jpg.webp",
    price: "",
    salePrice: "600.000",
    link: "/html/detail.html",
  },
  {
    id: 10,
    name: "Tinh tế ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-mix-huong-duong.jpg.webp",
    price: "",
    salePrice: "500.000",
    link: "/html/detail.html",
  },
  {
    id: 11,
    name: "Tinh khôi",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/tinh-khoi.jpg.webp",
    price: "",
    salePrice: "500.000",
    link: "/html/detail.html",
  },
  {
    id: 12,
    name: "thắp lửa ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/thap-lua.jpg.webp",
    price: "800.000",
    salePrice: "600.000",
    link: "/html/detail.html",
  },
  {
    id: 13,
    name: "Thương hoài ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/thuong-hoai.jpg.webp",
    price: "",
    salePrice: "800.000",
    link: "/html/detail.html",
  },
  {
    id: 14,
    name: "Thẹn thùng ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-baby-hong-khong-lo.jpg.webp",
    price: "",
    salePrice: "800.000",
    link: "/html/detail.html",
  },
  {
    id: 15,
    name: "Pink",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-baby-hong-Mellow-Pink.jpg.webp",
    price: "",
    salePrice: "900.000",
    link: "/html/detail.html",
  },
  {
    id: 16,
    name: "Romance",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/romance.jpg.webp",
    price: "",
    salePrice: "500.000",
    link: "/html/detail.html",
  },
  {
    id: 17,
    name: "Điều ngọt ngào ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/dieu-ngot-ngao-nhat.jpg.webp",
    price: "",
    salePrice: "400.000",
    link: "/html/detail.html",
  },
  {
    id: 18,
    name: "Vươn cao ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/lang-hoa-vuon-cao.jpg.webp",
    price: "",
    salePrice: "500.000",
    link: "/html/detail.html",
  },
  {
    id: 19,
    name: "Đại hồng phát",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/lang-hoa-chuc-mung-dai-hong-phat.jpg.webp",
    price: "",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
  {
    id: 20,
    name: "Hướng dương",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-huong-duong-kinh-trong.jpg.webp",
    price: "",
    salePrice: "600.000",
    link: "/html/detail.html",
  },
  {
    id: 21,
    name: "Vòng tay ấm",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/lang-hoa-vong-tay-am.jpg.webp",
    price: "",
    salePrice: "500.000",
    link: "/html/detail.html",
  },
  {
    id: 22,
    name: "Xúc cảm ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-xuc-cam.jpg.webp",
    price: "",
    salePrice: "400.000",
    link: "/html/detail.html",
  },
  {
    id: 23,
    name: "101",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-do-tron-ven.jpg.webp",
    price: "",
    salePrice: "800.000",
    link: "/html/detail.html",
  },
];
// duyệt qua vòng lặp để thêm sản phẩm
for (const product of product_List) {
  addProductToContainer1("flower-ite", product);
}

// sắp xếp sản phẩm
function sapXepSanPham() {
  const sortOption = document.getElementById("input-sort").value;

  // Xóa sản phẩm hiện tại
  const container = document.querySelector(".flower-ite");
  container.innerHTML = "";

  // Sắp xếp danh sách sản phẩm theo quicksort
  switch (sortOption) {
    case "1":
      product_List.sort((a, b) => {
        const salePriceA = parseFloat(a.salePrice) || 0;
        const salePriceB = parseFloat(b.salePrice) || 0;
        return salePriceA - salePriceB;
      });
      break;
    case "2":
      product_List.sort((a, b) => {
        const salePriceA = parseFloat(a.salePrice) || 0;
        const salePriceB = parseFloat(b.salePrice) || 0;
        return salePriceB - salePriceA;
      });
      break;
    default:
      product_List.sort((a, b) => a.id - b.id);
      break;
  }

  // Hiển thị lại các sản phẩm đã sắp xếp
  for (const product of product_List) {
    addProductToContainer1("flower-ite", product);
  }

  // Đặt lại trang đầu tiên cho phân trang
  currentPage = 1;
  getCurrentPage(currentPage);
  updateButtonStyle(currentPage);
}

// phân trang
const totalPage = Math.ceil(product_List.length / perPage);
function getCurrentPage(currentPage) {
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
  console.log(start, end);
}

// hàm hiển thị style cho button
function updateButtonStyle(selectedPage) {
  const currentPages = document.querySelectorAll(".button_number button");
  currentPages.forEach((button, index) => {
    if (index + 1 === selectedPage) {
      button.style.backgroundColor = "#e91e63";
      button.style.color = "white";
    } else {
      button.style.backgroundColor = "white";
      button.style.color = "#e91e63";
    }
  });
}
btnNext.addEventListener("click", () => {
  // Ẩn các phần tử trước đó
  currentPage++;
  if (currentPage > totalPage) {
    currentPage = totalPage;
  }
  getCurrentPage(currentPage);
  updateButtonStyle(currentPage);
  for (const product of product_List) {
    addProductToContainer1("flower-ite", product);
  }
  const allItems = document.querySelectorAll(".flower-items");
  allItems.forEach((item, index) => {
    if (index < start || index >= end) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});

btnNext_1.addEventListener("click", () => {
  // Ẩn các phần tử trước đó
  currentPage--;
  if (currentPage <= 1) {
    currentPage = 1;
  }
  getCurrentPage(currentPage);
  updateButtonStyle(currentPage);
  for (const product of product_List) {
    addProductToContainer1("flower-ite", product);
  }
  const allItems = document.querySelectorAll(".flower-items");
  allItems.forEach((item, index) => {
    if (index < start || index >= end) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});

function renderlistpage() {
  let html = "";
  html += `<button id="btn_click" style="background-color: #e91e63; margin: 0 3px; border-color: #ccc; padding: 5px 10px; color: #fff;"   >${1} </button>`;
  for (let i = 2; i <= totalPage; i++) {
    html += `<button id="btn_click" style="background-color: #fff; margin: 0 3px; border-color: #ccc; padding: 5px 10px; color: #ed6b87;"   >${i} </button>`;
  }
  document.getElementById("button_number").innerHTML = html;
}
renderlistpage();

function changPage() {
  const currentPages = document.querySelectorAll(".button_number button");

  for (let i = 0; i < currentPages.length; i++) {
    currentPages[i].addEventListener("click", () => {
      let value = i + 1;
      currentPage = value;
      getCurrentPage(currentPage);
      updateButtonStyle(currentPage);
      for (const product of product_List) {
        addProductToContainer1("flower-ite", product);
      }
      const allItems = document.querySelectorAll(".flower-items");
      allItems.forEach((item, index) => {
        if (index < start || index >= end) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
    });
  }
}
changPage();

// tìm kiếm sản phẩm

const searchInput = document.getElementById("text-search1");
const searchbtn = document.getElementById("btn_search");
searchInput.addEventListener("keydown", function (event) {
  if (searchInput.value != "") {
    if (event.key === "Enter") {
      performSearch();
    }
  } else {
    for (const product of filteredProducts) {
      addProductToContainer1("flower-ite", product);
    }
  }
});
searchbtn.addEventListener("click", function () {
  if (searchInput.value != "") {
    performSearch();
  } else {
    alert("nhập thông tin tìm kiếm");
  }
});
// Hàm xử lý sự kiện tìm kiếm
function performSearch() {
  // Lấy giá trị từ ô input tìm kiếm
  const searchText = searchInput.value.toLowerCase();

  // Lọc danh sách sản phẩm dựa trên giá trị tìm kiếm
  const filteredProducts = product_List.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );

  // Hiển thị sản phẩm đã lọc
  const container = document.querySelector(".flower-ite");
  container.innerHTML = "";

  // Hiển thị sản phẩm đã lọc
  for (const product of filteredProducts) {
    addProductToContainer1("flower-ite", product);
  }

  // Cập nhật lại phân trang
  currentPage = 1;
  getCurrentPage(currentPage);
  updateButtonStyle(currentPage);
  renderlistpage();
  changPage();
}

// const inputField = document.getElementById("text-search");
// const submitButton = document.getElementById("submit-btn");
// const inputField1 = document.getElementById("text-search1");

// submitButton.addEventListener("click", function () {
//   inputField1.value = inputField.value;

//   performSearch();
// });
