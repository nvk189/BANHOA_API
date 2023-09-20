
// header-list

var header = document.querySelector(".header-list");

// Xử lý sự kiện cuộn trang
window.addEventListener("scroll", function() {
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
function renderProducts(productlist , product){
    // const productlist = document.querySelector('.list-brithday-2');
    product.forEach((product) =>{
    const productItem = document.createElement("li");
    productItem.classList.add("list-brithday__item");
    const productImage =document.createElement("a");
    productImage.textContent =product.name;
    productItem.appendChild(productImage);
    productlist.appendChild(productItem);
});
}
//  list-brithday-1
const product = [
    {
        id:1,
        name: "Hoa sinh nhật sang trọng",
    },

    {
        id:2,
        name: "Hoa sinh nhật giá rẻ",
    },

    {
        id:3,
        name: "Hoa tặng sinh nhật người yêu  ",
    },

    {
        id:4,
        name: "Hoa tặng sinh nhật mẹ",
    },

    {
        id:5,
        name: "Hoa tặng sinh nhật bạn",
    },
    {
        id:6,
        name: " lẵng Hoa tặng sinh nhật ",
    },
    {
        id:7,
        name: "Hoa hồng tặng sinh nhật",
    },
    {
        id:8,
        name: "giỏ hoa tặng sinh nhật",
    },
    
]
const productList_1 =document.querySelector(".list-brithday-1")
renderProducts(productList_1,product);

//  list-brithday-2

const product_2 = [
    {
        id:1,
        name: "hoa khai trương để bàn",
    },

    {
        id:2,
        name: "kệ hoa khai trương",
    },

    {
        id:3,
        name: "kệ hoa khai trương hiện đại  ",
    },

    {
        id:4,
        name: "hoa khai trương giá rẻ",
    },

    {
        id:5,
        name: "lẵng hoa 2 tầng mừng khai trương",
    },
    
]
const productlist_2 = document.querySelector('.list-brithday-2');
renderProducts(productlist_2 , product_2);

//  list-brithday-3
const product_3 = [
    {
        id:1,
        name: "Hoa chúc mừng ",
    },

    {
        id:2,
        name: "Hoa cưới cầm tay",
    },

    {
        id:3,
        name: "Hoa tang lễ - hoa chia buồn  ",
    },

    {
        id:4,
        name: "Hoa tình yêu",
    },

    {
        id:5,
        name: "Hoa valentin",
    },
    {
        id:6,
        name: " hoa kỉ niệm ngày cưới ",
    },
    {
        id:7,
        name: "ngày của mẹ",
    },
    {
        id:8,
        name: "hoa chúc mừng 8-3",
    },
    {
        id:9,
        name: "hoa chúc mừng 20-10",
    },
    {
        id:10,
        name: "ngày nhà giáo VN",
    },
    {
        id:11,
        name: "giáng sinh",
    },
    {
        id:12,
        name: "tết âm lịch",
    },
    {
        id:13,
        name: "hoa tốt nghiệp",
    },
    {
        id:14,
        name: "hoa định kỳ",
    },
    
]
const productList_3 =document.querySelector(".list-brithday-3")
renderProducts(productList_3,product_3);

//  list-brithday-4
const product_4 = [
    {
        id:1,
        name: "bó hoa ",
    },

    {
        id:2,
        name: "lẵng hoa",
    },

    {
        id:3,
        name: "giỏ hoa  ",
    },

    {
        id:4,
        name: "kệ hoa",
    },

    {
        id:5,
        name: "hộp hoa",
    },
    {
        id:6,
        name: " bình hoa",
    },
    
]

const productList_4 =document.querySelector(".list-brithday-4")
renderProducts(productList_4,product_4);

//  list-brithday-5
const product_5 = [
    {
        id:1,
        name: "Hoa hồng ",
    },

    {
        id:2,
        name: "Hoa baby",
    },

    {
        id:3,
        name: "Hoa hướng dương  ",
    },

    {
        id:4,
        name: "Hoa lan hồ điệp",
    },

    {
        id:5,
        name: "Hoa tulip",
    },
    {
        id:6,
        name: " hoa cúc tana ",
    },
    {
        id:7,
        name: "hoa thạch thảo",
    },
    {
        id:8,
        name: "hoa mẫu đơn",
    },
    {
        id:9,
        name: "cúc mẫu đơn",
    },
    {
        id:10,
        name: "hoa cẩm tú cầu",
    },
    {
        id:11,
        name: "hoa ly",
    },
    {
        id:12,
        name: "hoa sen",
    },
    {
        id:13,
        name: "hoa đống tiền",
    },
    {
        id:14,
        name: "hoa cẩm chướng",
    },
    {
        id:14,
        name: "hoa cúc họa mi",
    },
    
]

const productList_5 =document.querySelector(".list-brithday-5")
renderProducts(productList_5,product_5);

//  list-brithday-6
const product_6 = [
    {
        id:1,
        name: "gấu bông  ",
    },

    {
        id:2,
        name: "Socola",
    },

    {
        id:3,
        name: "bánh kem  ",
    },

    {
        id:4,
        name: "giỏ trái cây",
    },

    {
        id:5,
        name: "giỏ quà tặng",
    },
    {
        id:6,
        name: " quà lưu niệm",
    },
    
]

const productList_6 =document.querySelector(".list-brithday-6")
renderProducts(productList_6,product_6);




   
