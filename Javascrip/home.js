var header = document.querySelector(".header-list");

// Xử lý sự kiện cuộn trang
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 5) {
    // Khi người dùng cuộn xuống đủ xa, hiển thị header
    header.style.position = "fixed"; // Đặt position thành fixed
    header.style.top = "0";
    header.style.left = "0";
    header.style.right = "0";
  } else {
    header.style.position = "";
  }
});

// header-list-item
function renderProducts(productlist, product) {
  // const productlist = document.querySelector('.list-brithday-2');
  product.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.classList.add("list-brithday__item");
    const productImage = document.createElement("a");
    productImage.textContent = product.name;
    productImage.href = product.link;
    productItem.appendChild(productImage);
    productlist.appendChild(productItem);
  });
}
//  list-brithday-1
const product = [
  {
    id: 1,
    name: "Hoa sinh nhật sang trọng ",
    link: "/html/product.html",
  },

  {
    id: 2,
    name: "Hoa sinh nhật giá rẻ",
    link: "/html/product.html",
  },

  {
    id: 3,
    name: "Hoa tặng sinh nhật người yêu  ",
    link: "/html/product.html",
  },

  {
    id: 4,
    name: "Hoa tặng sinh nhật mẹ",
    link: "/html/product.html",
  },

  {
    id: 5,
    name: "Hoa tặng sinh nhật bạn",
    link: "/html/product.html",
  },
  {
    id: 6,
    name: " lẵng Hoa tặng sinh nhật ",
    link: "/html/product.html",
  },
  {
    id: 7,
    name: "Hoa hồng tặng sinh nhật",
    link: "/html/product.html",
  },
  {
    id: 8,
    name: "giỏ hoa tặng sinh nhật",
    link: "/html/product.html",
  },
];
const productList_1 = document.querySelector(".list-brithday-1");
renderProducts(productList_1, product);

//  list-brithday-2

const product_2 = [
  {
    id: 1,
    name: "hoa khai trương để bàn",
    link: "/html/product.html",
  },

  {
    id: 2,
    name: "kệ hoa khai trương",
    link: "/html/product.html",
  },

  {
    id: 3,
    name: "kệ hoa khai trương hiện đại  ",
    link: "/html/product.html",
  },

  {
    id: 4,
    name: "hoa khai trương giá rẻ",
    link: "/html/product.html",
  },

  {
    id: 5,
    name: "lẵng hoa 2 tầng mừng khai trương",
    link: "/html/product.html",
  },
];
const productlist_2 = document.querySelector(".list-brithday-2");
renderProducts(productlist_2, product_2);

//  list-brithday-3
const product_3 = [
  {
    id: 1,
    name: "Hoa chúc mừng ",
    link: "/html/product.html",
  },

  {
    id: 2,
    name: "Hoa cưới cầm tay",
    link: "/html/product.html",
  },

  {
    id: 3,
    name: "Hoa tang lễ - hoa chia buồn  ",
    link: "/html/product.html",
  },

  {
    id: 4,
    name: "Hoa tình yêu",
    link: "/html/product.html",
  },

  {
    id: 5,
    name: "Hoa valentin",
    link: "/html/product.html",
  },
  {
    id: 6,
    name: " hoa kỉ niệm ngày cưới ",
    link: "/html/product.html",
  },
  {
    id: 7,
    name: "ngày của mẹ",
    link: "/html/product.html",
  },
  {
    id: 8,
    name: "hoa chúc mừng 8-3",
    link: "/html/product.html",
  },
  {
    id: 9,
    name: "hoa chúc mừng 20-10",
    link: "/html/product.html",
  },
  {
    id: 10,
    name: "ngày nhà giáo VN",
    link: "/html/product.html",
  },
  {
    id: 11,
    name: "giáng sinh",
    link: "/html/product.html",
  },
  {
    id: 12,
    name: "tết âm lịch",
    link: "/html/product.html",
  },
  {
    id: 13,
    name: "hoa tốt nghiệp",
    link: "/html/product.html",
  },
  {
    id: 14,
    name: "hoa định kỳ",
    link: "/html/product.html",
  },
];
const productList_3 = document.querySelector(".list-brithday-3");
renderProducts(productList_3, product_3);

//  list-brithday-4
const product_4 = [
  {
    id: 1,
    name: "bó hoa ",
    link: "/html/product.html",
  },

  {
    id: 2,
    name: "lẵng hoa",
    link: "/html/product.html",
  },

  {
    id: 3,
    name: "giỏ hoa  ",
    link: "/html/product.html",
  },

  {
    id: 4,
    name: "kệ hoa",
    link: "/html/product.html",
  },

  {
    id: 5,
    name: "hộp hoa",
    link: "/html/product.html",
  },
  {
    id: 6,
    name: " bình hoa",
    link: "/html/product.html",
  },
];

const productList_4 = document.querySelector(".list-brithday-4");
renderProducts(productList_4, product_4);

//  list-brithday-5
const product_5 = [
  {
    id: 1,
    name: "Hoa hồng ",
    link: "/html/product.html",
  },

  {
    id: 2,
    name: "Hoa baby",
    link: "/html/product.html",
  },

  {
    id: 3,
    name: "Hoa hướng dương  ",
    link: "/html/product.html",
  },

  {
    id: 4,
    name: "Hoa lan hồ điệp",
    link: "/html/product.html",
  },

  {
    id: 5,
    name: "Hoa tulip",
    link: "/html/product.html",
  },
  {
    id: 6,
    name: " hoa cúc tana ",
    link: "/html/product.html",
  },
  {
    id: 7,
    name: "hoa thạch thảo",
    link: "/html/product.html",
  },
  {
    id: 8,
    name: "hoa mẫu đơn",
    link: "/html/product.html",
  },
  {
    id: 9,
    name: "cúc mẫu đơn",
    link: "/html/product.html",
  },
  {
    id: 10,
    name: "hoa cẩm tú cầu",
    link: "/html/product.html",
  },
  {
    id: 11,
    name: "hoa ly",
    link: "/html/product.html",
  },
  {
    id: 12,
    name: "hoa sen",
    link: "/html/product.html",
  },
  {
    id: 13,
    name: "hoa đống tiền",
    link: "/html/product.html",
  },
  {
    id: 14,
    name: "hoa cẩm chướng",
    link: "/html/product.html",
  },
  {
    id: 14,
    name: "hoa cúc họa mi",
    link: "/html/product.html",
  },
];

const productList_5 = document.querySelector(".list-brithday-5");
renderProducts(productList_5, product_5);

//  list-brithday-6
const product_6 = [
  {
    id: 1,
    name: "gấu bông  ",
    link: "/html/product.html",
  },

  {
    id: 2,
    name: "Socola",
    link: "/html/product.html",
  },

  {
    id: 3,
    name: "bánh kem  ",
    link: "/html/product.html",
  },

  {
    id: 4,
    name: "giỏ trái cây",
    link: "/html/product.html",
  },

  {
    id: 5,
    name: "giỏ quà tặng",
    link: "/html/product.html",
  },
  {
    id: 6,
    name: " quà lưu niệm",
    link: "/html/product.html",
  },
];

const productList_6 = document.querySelector(".list-brithday-6");
renderProducts(productList_6, product_6);

///// responsive sản phẩm
const showButton = document.getElementById("list-responsi");
const hiddenDiv = document.getElementById("list-item__check");

// Thêm sự kiện onclick
showButton.addEventListener("click", function () {
  // Kiểm tra trạng thái hiển thị của thẻ
  if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
    // Nếu đang ẩn, hiển thị thẻ
    hiddenDiv.style.display = "block";
  } else {
    // Nếu đang hiển thị, ẩn đi
    hiddenDiv.style.display = "none";
  }
});

// sự kiện click mess online
const chatOnline1 = document.getElementById("chat_online");
const messOnline1 = document.getElementById("button-fixed");

// Thiết lập hiển thị sau 3000ms (3 giây)
setTimeout(function () {
  chatOnline1.style.display = "block"; // Hiển thị phần tử chat_online
  messOnline1.style.display = "block"; // Hiển thị phần tử chat_online
}, 3000);
// Lấy phần tử chat_online và mess-chat
const chatOnline = document.getElementById("chat_online");
const messChat = document.getElementById("mess-chat");

// Lấy phần tử icon_clear
const iconClear = document.getElementById("icon_clear");

// Bắt sự kiện click vào chat_online
chatOnline.addEventListener("click", function () {
  messChat.style.display = "block";
});

// Bắt sự kiện click vào icon_clear
iconClear.addEventListener("click", function () {
  // Ẩn mess-chat khi click vào icon_clear
  messChat.style.display = "none";
});

//    flower-list

// // Tạo một hàm để thêm một sản phẩm vào danh sách sản phẩm
function addProductToContainer(containerId, product_list) {
  const container = document.querySelector(`.${containerId}`);
  const productItem = document.createElement("div");
  productItem.classList.add("flower-items", "col", "l-3", "m-12", "c-6");
  // Tạo nội dung cho phần tử sản phẩm
  const productContent = `
      <div class="img-flower">
        <img class="img" src="${product_list.image}" alt="${product.name}">
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

// danh sách sản phẩm

// Định nghĩa nhiều sản phẩm
const product_sale = [
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
    salePrice: "300.000",
    link: "#",
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
  {
    id: 5,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/loi-yeu.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
  {
    id: 6,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/anh-mat-troi.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
  {
    id: 7,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-thach-thao-tim-hen-uoc.jpg.webp",
    price: "",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
  {
    id: 8,
    name: "Mặt trời của anh ",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-huong-duong-kinh-trong.jpg.webp",
    price: "",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
];
// duyệt qua vòng lặp để thêm sản phẩm
for (const product of product_sale) {
  addProductToContainer("flower-item", product);
}

//  đưa thông tin sản phẩm vào local

// sản phẩm đặt nhiều nhất
const product_sale_1 = [
  {
    id: 9,
    name: "Little Tana",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-baby-mix-hong-duy-nhat.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    // link: "/html/detail.html"
    link: "#",
  },
  {
    id: 10,
    name: "Baby nhỏ xinh",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cuc-tana-litle-tana.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "/html/detail.html",
  },

  {
    id: 11,
    name: "Simple",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/fairy-tale.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "/html/detail.html",
  },

  {
    id: 12,
    name: "Khoe Sắc",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-simple.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
  // {
  //   id: 13,
  //   name: "Khoe Sắc",
  //   image:
  //     "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-simple.jpg.webp",
  //   price: "500.000",
  //   salePrice: "300.000",
  //   link: "/html/detail.html",
  // },
  // {
  //   id: 14,
  //   name: "Khoe Sắc",
  //   image:
  //     "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-simple.jpg.webp",
  //   price: "500.000",
  //   salePrice: "300.000",
  //   link: "/html/detail.html",
  // },
  // {
  //   id: 15,
  //   name: "Khoe Sắc",
  //   image:
  //     "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-simple.jpg.webp",
  //   price: "500.000",
  //   salePrice: "300.000",
  //   link: "/html/detail.html",
  // },
  // {
  //   id: 16,
  //   name: "Khoe Sắc",
  //   image:
  //     "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-simple.jpg.webp",
  //   price: "500.000",
  //   salePrice: "300.000",
  //   link: "/html/detail.html",
  // },
];
for (const product of product_sale_1) {
  addProductToContainer("flower-item-1", product);
}

// sản phẩm mới
const product_sale_2 = [
  {
    id: 17,
    name: "Little Tana",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-sen-hong.jpg.webp",
    price: "500.000",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
  {
    id: 18,
    name: "Baby nhỏ xinh",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-thach-thao-tim-miracle.jpg.webp",
    price: "",
    salePrice: "300.000",
    link: "/html/detail.html",
  },

  {
    id: 19,
    name: "Simple",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/net-quy-phai-hoa-cam-chuong.jpg.webp",
    price: "",
    salePrice: "300.000",
    link: "/html/detail.html",
  },

  {
    id: 20,
    name: "Khoe Sắc",
    image:
      "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cam-chuong-hong-my-bae.jpg.webp",
    price: "",
    salePrice: "300.000",
    link: "/html/detail.html",
  },
];
for (const product of product_sale_2) {
  addProductToContainer("flower-item-2", product);
}

//    khách hàng đặt nhiều

// Chọn phần tử cha "flower-custom-icon"
const flowerCustomIcon = document.querySelector(".flower-custom-icon");

// Mảng chứa các đường dẫn hình ảnh
const imageSources = [
  "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp",
  "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/2-130x130.png.webp",
  "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/8-130x130.png.webp",
  "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/9-130x130.png.webp",
  "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/5-130x130.png.webp",
  "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/4-130x130.png.webp",
  "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/3-130x130.png.webp",
  "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/7-130x130.png.webp",
  "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/13-130x130.png.webp",
];

// Tạo các phần tử và gắn vào phần tử cha
for (const src of imageSources) {
  const customIcon = document.createElement("div");
  customIcon.classList.add("custom-icon", "l-2-4");

  const img = document.createElement("img");
  img.src = src;
  img.alt = "ảnh logo khách hàng mua nhiều nhất";

  customIcon.appendChild(img);
  flowerCustomIcon.appendChild(customIcon);
}

// sự kiện khách hàng tiêu biểu nhất

const customIcons = document.querySelectorAll(
  ".flower-custom-icon .custom-icon"
);
const iconWidth = customIcons[0].offsetWidth;
let currentPosition = 0;
const batchSize = 5; // Số lượng ảnh hiển thị mỗi lần

// Ẩn tất cả các ảnh
customIcons.forEach((icon) => {
  icon.style.display = "none";
});

// Hiển thị một lô ảnh (4 ảnh) và di chuyển qua từng lô sau mỗi khoảng thời gian
function showBatch() {
  for (let i = 0; i < batchSize; i++) {
    if (currentPosition >= customIcons.length) {
      currentPosition = 0; // Trở về đầu nếu đã hiển thị hết ảnh
    }
    customIcons[currentPosition].style.display = "block";
    currentPosition++;
  }
}

// Chạy hàm showBatch để hiển thị ảnh ban đầu
showBatch();
//  slider
function addSlider(containerId, product_list) {
  // Tìm đối tượng chứa sản phẩm bằng cách sử dụng containerId
  const container = document.querySelector(`.${containerId}`);

  // Tạo một phần tử sản phẩm mới
  const productItem = document.createElement("div");
  productItem.classList.add("slider-item");
  // Tạo nội dung cho phần tử sản phẩm
  const productContent = `
        <div class="slider-item">
            <a href="" class="link-slider">  
                <img class="home-slider" src="${product_list.srcimg}" alt="ảnh quảng cáo">
            </a>
        </div>
        `;
  productItem.innerHTML = productContent;
  // Thêm phần tử sản phẩm vào danh sách sản phẩm
  container.appendChild(productItem);
}

const slider = [
  {
    srcimg: "/assets/img/slider-1.webp",
  },
  {
    srcimg: "https://in.flowercorner.vn/uploads/P65801591b038a4.91404519.webp",
  },
  {
    srcimg: "https://in.flowercorner.vn/uploads/P657fd247737038.75342862.webp",
  },
  {
    srcimg: "https://in.flowercorner.vn/uploads/P657fdc70f2d4b0.34112627.webp",
  },
  {
    srcimg: "/assets/img/slider-2.webp",
  },
];
for (const product of slider) {
  addSlider("list-slider", product);
}
// Thiết lập interval để thực hiện chuyển động liên tục
const interval = setInterval(() => {
  // Ẩn tất cả ảnh trước khi hiển thị lô ảnh tiếp theo
  customIcons.forEach((icon) => {
    icon.style.display = "none";
  });

  showBatch(); // Hiển thị lô ảnh tiếp theo
}, 2000);
// slider

function toggleSlider() {
  const sliderItems = document.querySelectorAll(".slider-item");
  let currentIndex = 0;
  setInterval(() => {
    sliderItems[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 2) % sliderItems.length;
    sliderItems[currentIndex].style.display = "block";
  }, 2000);
}
toggleSlider();

//    sự kiện click button
const rightButton = document.querySelector(".button-right");
const leftButton = document.querySelector(".button-left");
const sliderItems = document.querySelectorAll(".slider-item");
let currentIndex = 0;

rightButton.addEventListener("click", function () {
  sliderItems[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 2) % sliderItems.length;
  sliderItems[currentIndex].style.display = "block";
});

leftButton.addEventListener("click", function () {
  sliderItems[currentIndex].style.display = "none";
  currentIndex = (currentIndex - 2 + sliderItems.length) % sliderItems.length;
  sliderItems[currentIndex].style.display = "block";
});
// });
