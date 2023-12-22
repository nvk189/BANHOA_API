// var header = document.querySelector(".header-list");

// // Xử lý sự kiện cuộn trang
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 5) {
//     // Khi người dùng cuộn xuống đủ xa, hiển thị header
//     header.style.position = "fixed"; // Đặt position thành fixed
//     header.style.top = "0";
//     header.style.left = "0";
//     header.style.right = "0";
//   } else {
//     header.style.position = "";
//   }
// });
// function toggleSlider() {
//   const sliderItems = document.querySelectorAll(".slider-item");
//   let currentIndex = 0;
//   setInterval(() => {
//     sliderItems[currentIndex].style.display = "none";
//     currentIndex = (currentIndex + 1) % sliderItems.length;
//     sliderItems[currentIndex].style.display = "block";
//   }, 2000);
// }
// toggleSlider();

// //    sự kiện click button
// const rightButton = document.querySelector(".button-right");
// const leftButton = document.querySelector(".button-left");
// const sliderItems = document.querySelectorAll(".slider-item");
// let currentIndex = 0;

// rightButton.addEventListener("click", function () {
//   sliderItems[currentIndex].style.display = "none";
//   currentIndex = (currentIndex + 1) % sliderItems.length;
//   sliderItems[currentIndex].style.display = "block";
// });

// leftButton.addEventListener("click", function () {
//   sliderItems[currentIndex].style.display = "none";
//   currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
//   sliderItems[currentIndex].style.display = "block";
// });

// const customIcons = document.querySelectorAll(
//   ".flower-custom-icon .custom-icon"
// );
// const iconWidth = customIcons[0].offsetWidth;
// let currentPosition = 0;
// const batchSize = 5; // Số lượng ảnh hiển thị mỗi lần

// // Ẩn tất cả các ảnh
// customIcons.forEach((icon) => {
//   icon.style.display = "none";
// });

// // Hiển thị một lô ảnh (4 ảnh) và di chuyển qua từng lô sau mỗi khoảng thời gian
// function showBatch() {
//   for (let i = 0; i < batchSize; i++) {
//     if (currentPosition >= customIcons.length) {
//       currentPosition = 0; // Trở về đầu nếu đã hiển thị hết ảnh
//     }
//     customIcons[currentPosition].style.display = "block";
//     currentPosition++;
//   }
// }

// // Chạy hàm showBatch để hiển thị ảnh ban đầu
// showBatch();

// // Thiết lập interval để thực hiện chuyển động liên tục
// const interval = setInterval(() => {
//   // Ẩn tất cả ảnh trước khi hiển thị lô ảnh tiếp theo
//   customIcons.forEach((icon) => {
//     icon.style.display = "none";
//   });

//   showBatch(); // Hiển thị lô ảnh tiếp theo
// }, 2000);

// function addProductToContainer(containerId, product_list) {
//   // Tìm đối tượng chứa sản phẩm bằng cách sử dụng containerId
//   const container = document.querySelector(`.${containerId}`);

//   // Tạo một phần tử sản phẩm mới
//   const productItem = document.createElement("div");
//   productItem.classList.add("flower-items", "col", "l-3", "m-12", "c-6");

//   // product_sale.map((product) => {

//   // })
//   // Tạo nội dung cho phần tử sản phẩm
//   const productContent = `
//       <div class="img-flower">
//         <img class="img" src="${product_list.image}" alt="${product.name}">
//       </div>
//       <div class="text-flower">
//         <p class="name-flower">${product_list.name}</p>
//         <span class="price-sale">${product_list.salePrice}</span>
//         <span class="price">${product_list.price}</span>
//       </div>
//       <div class="sub-item">

//         <a href="${
//           product_list.link
//         }" class="order-btn" data-product='${JSON.stringify(product_list)}'>
//           Đặt hàng
//         </a>
//       </div>
//     `;
//   // Gán nội dung cho phần tử sản phẩm
//   productItem.innerHTML = productContent;
//   // Thêm phần tử sản phẩm vào danh sách sản phẩm
//   container.appendChild(productItem);
// }

// // Định nghĩa nhiều sản phẩm
// const product_sale = [
//   {
//     name: "Hoa test",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-endless-love.jpg.webp",
//     price: "500,000VND",
//     salePrice: "300,000VND",
//     // link: "/html/detail.html"
//     link: "#",
//   },
//   {
//     name: "Hoa hồng  ",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-scented-love.jpg.webp",
//     price: "500,000VND",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },

//   {
//     name: "Mặt trời hoa hồng  ",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/khoe-sac.jpg.webp",
//     price: "500,000VND",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },
//   {
//     name: "Mặt trời của anh ",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/khoe-sac.jpg.webp",
//     price: "500,000VND",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },
// ];
// // duyệt qua vòng lặp để thêm sản phẩm
// for (const product of product_sale) {
//   addProductToContainer("flower-item", product);
// }

// //  đưa thông tin sản phẩm vào local

// // sản phẩm đặt nhiều nhất
// const product_sale_1 = [
//   {
//     name: "Little Tana",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-baby-mix-hong-duy-nhat.jpg.webp",
//     price: "500,000VND",
//     salePrice: "300,000VND",
//     // link: "/html/detail.html"
//     link: "#",
//   },
//   {
//     name: "Baby nhỏ xinh",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cuc-tana-litle-tana.jpg.webp",
//     price: "500,000VND",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },

//   {
//     name: "Simple",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/fairy-tale.jpg.webp",
//     price: "500,000VND",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },

//   {
//     name: "Khoe Sắc",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-hong-simple.jpg.webp",
//     price: "500,000VND",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },
// ];
// for (const product of product_sale_1) {
//   addProductToContainer("flower-item-1", product);
// }

// // sản phẩm mới
// const product_sale_2 = [
//   {
//     name: "Little Tana",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-sen-hong.jpg.webp",
//     price: "500,000VND",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },
//   {
//     name: "Baby nhỏ xinh",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-thach-thao-tim-miracle.jpg.webp",
//     price: "",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },

//   {
//     name: "Simple",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/net-quy-phai-hoa-cam-chuong.jpg.webp",
//     price: "",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },

//   {
//     name: "Khoe Sắc",
//     image:
//       "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/August%202023/bo-hoa-cam-chuong-hong-my-bae.jpg.webp",
//     price: "",
//     salePrice: "300,000VND",
//     link: "/html/detail.html",
//   },
// ];
// for (const product of product_sale_2) {
//   addProductToContainer("flower-item-2", product);
// }

// const flowerCustomIcon = document.querySelector(".flower-custom-icon");

// // Mảng chứa các đường dẫn hình ảnh
// const imageSources = [
//   "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/6-130x130.png.webp",
//   "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/2-130x130.png.webp",
//   "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/8-130x130.png.webp",
//   "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/9-130x130.png.webp",
//   "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/5-130x130.png.webp",
//   "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/4-130x130.png.webp",
//   "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/3-130x130.png.webp",
//   "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/7-130x130.png.webp",
//   "https://8384f55340.vws.vegacdn.vn/image/cache/catalog/common/partner/13-130x130.png.webp",
// ];

// // Tạo các phần tử và gắn vào phần tử cha
// for (const src of imageSources) {
//   const customIcon = document.createElement("div");
//   customIcon.classList.add("custom-icon", "l-2-4");

//   const img = document.createElement("img");
//   img.src = src;
//   img.alt = "ảnh logo khách hàng mua nhiều nhất";

//   customIcon.appendChild(img);
//   flowerCustomIcon.appendChild(customIcon);
// }

// const chatOnline1 = document.getElementById("chat_online");
// const messOnline1 = document.getElementById("button-fixed");

// // Thiết lập hiển thị sau 3000ms (3 giây)
// setTimeout(function () {
//   chatOnline1.style.display = "block"; // Hiển thị phần tử chat_online
//   messOnline1.style.display = "block"; // Hiển thị phần tử chat_online
// }, 3000);
// // Lấy phần tử chat_online và mess-chat
// const chatOnline = document.getElementById("chat_online");
// const messChat = document.getElementById("mess-chat");

// // Lấy phần tử icon_clear
// const iconClear = document.getElementById("icon_clear");

// // Bắt sự kiện click vào chat_online
// chatOnline.addEventListener("click", function () {
//   messChat.style.display = "block";
// });

// // Bắt sự kiện click vào icon_clear
// iconClear.addEventListener("click", function () {
//   // Ẩn mess-chat khi click vào icon_clear
//   messChat.style.display = "none";
// });
