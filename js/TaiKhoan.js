var app = angular.module("AppBanHoa", []);

app.controller("TaiKhoan", function ($scope, $http) {
  $scope.taikhoan = [];
  $scope.upadatetk = [];
  var existingData = JSON.parse(localStorage.getItem("taikhoan")) || [];

  // hàm lấy mã chức mục

  $scope.GetTaiKhoan = function () {
    $scope.taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
    updatePagination($scope.taikhoan);
  };
  $scope.GetTaiKhoan();

  // loatdata
  $scope.loadData = function (selectedItem) {
    $scope.matk = selectedItem.maTaiKhoan;
    $scope.tentk = selectedItem.tenDangNhap;
    $scope.matkhau = selectedItem.matKhau;
    $scope.hoten = selectedItem.hoTen;
    $scope.email = selectedItem.email;
    $scope.sodt = selectedItem.dienThoai;
    $scope.diachi = selectedItem.diaChi;

    if (selectedItem.trangThai === "true") {
      $scope.live = "true";
    } else if (selectedItem.trangThai === "false") {
      $scope.live = "false";
    } else {
      $scope.live = "choose";
    }

    if (selectedItem.maLoaiTaiKhoan === "1") {
      $scope.level = "1";
    } else if (selectedItem.maLoaiTaiKhoan === "2") {
      $scope.level = "2";
    } else if (selectedItem.maLoaiTaiKhoan === "3") {
      $scope.level = "3";
    } else {
      $scope.level = "choose";
    }
  };

  // nhập mới
  $scope.LamMoi = function () {
    document.getElementById("hotentk").value = "";
    document.getElementById("matkhau").value = "";
    document.getElementById("emailtk").value = "";
    document.getElementById("sdttk").value = "";
    document.getElementById("diachi").value = "";
    document.getElementById("matk").value = "";
    document.getElementById("tentk").value = "";
    document.getElementById("chucvu").value = "choose";
    document.getElementById("trangthai").value = "choose";
  };

  // thêm tài khoản
  $scope.them = function () {
    var data = {
      maTaiKhoan: $scope.matk,
      tenDangNhap: $scope.tentk,
      matKhau: $scope.matkhau,
      maLoaiTaiKhoan: $scope.level,
      trangThai: $scope.live,
      hoTen: $scope.hoten,
      email: $scope.email,
      dienThoai: $scope.sodt,
      diaChi: $scope.diachi,
    };
    existingData.push(data);
    localStorage.setItem("taikhoan", JSON.stringify(existingData));
    alert("thêm thành công");
  };
  console.log($scope.taikhoan);

  //sửa trạng thái mà mã loại tài khoản

  $scope.sua = function () {
    for (let i = 0; i < $scope.taikhoan.length; i++) {
      if ($scope.taikhoan[i].maTaiKhoan === $scope.matk) {
        $scope.taikhoan[i].tenDangNhap = $scope.tentk;
        $scope.taikhoan[i].matKhau = $scope.matkhau;
        $scope.taikhoan[i].maLoaiTaiKhoan = $scope.level;
        $scope.taikhoan[i].trangThai = $scope.live;
        $scope.taikhoan[i].hoTen = $scope.hoten;
        $scope.taikhoan[i].email = $scope.email;
        $scope.taikhoan[i].dienThoai = $scope.sodt;
        $scope.taikhoan[i].diaChi = $scope.diachi;
        localStorage.setItem("taikhoan", JSON.stringify($scope.taikhoan));
        alert("cập nhật thành công");
        break;
      }
    }
  };

  // xóa
  $scope.removeProduct = function (index) {
    $scope.taikhoan.splice(index, 1);
    localStorage.setItem("taikhoan", JSON.stringify($scope.taikhoan));
  };
  // /// làm thêm chức năng tìm kiếm

  // $scope.SearchCM = function () {
  //   if (document.getElementById("searchStaff").value != "") {
  //     $http({
  //       method: "GET",
  //       url: `https://localhost:7261/api/ChuyenMuc/search/${$scope.searchcm}`,
  //     }).then(function (response) {
  //       $scope.maloaisp = response.data;
  //       updatePagination($scope.maloaisp);
  //     });
  //   } else alert("Nhập thông tin tìm kiếm");
  // };

  // phân trang
  function updatePagination(maloaisp) {
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;
    $scope.filteredMaloaisp = [];
    $scope.pages = [];
    $scope.totalPages = 0;
    $scope.about = maloaisp.length;
    $scope.totalPages = Math.ceil(maloaisp.length / $scope.itemsPerPage);
    for (var i = 1; i <= $scope.totalPages; i++) {
      $scope.pages.push(i);
    }
    $scope.getData = function () {
      var begin = ($scope.currentPage - 1) * $scope.itemsPerPage;
      var end = begin + $scope.itemsPerPage;
      $scope.taikhoan = maloaisp.slice(begin, end);
    };
    $scope.setPage = function (page) {
      $scope.currentPage = page;
      $scope.getData();
    };
    $scope.getData();
  }
});
