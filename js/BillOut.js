var app = angular.module("AppBanHoa", []);

app.controller("BillOut", function ($scope) {
  $scope.products = [];
  // $scope.ban = [];
  $scope.createBan = [];

  var currentDate = new Date();
  var formattedDate = currentDate.toISOString().split("T")[0];
  document.getElementById("datetimeInput").value = formattedDate;

  // var existingData = JSON.parse(localStorage.getItem("hanghoa4")) || [];
  var storedData = localStorage.getItem("hanghoa4");
  var existingData = storedData ? JSON.parse(storedData) : [];
  // hiển thị thêm sản phẩm
  $scope.addProduct = function () {
    $scope.products.push({
      tenSanPham: "",
      soLuong: 0,
      gia: 0,
    });
  };

  // hàm xóa sản phẩm nhập

  // // hàm tính tổng tiền
  $scope.Total = function () {
    $scope.total = 0;
    for (var i = 0; i < $scope.products.length; i++) {
      var product = $scope.products[i];
      product.tongTien = product.soLuong * product.gia;
      $scope.total += product.tongTien;
    }

    return $scope.total;
  };

  // $scope.removeProduct = function (index) {
  //   $scope.products.splice(index, 1);
  // };
  $scope.load = function (selectedItem) {
    $scope.products = [];
    $scope.mahdb = selectedItem.mahd;
    $scope.tenkh = selectedItem.hoTen;
    $scope.sodt = selectedItem.dienThoai;
    $scope.diachi = selectedItem.diaChi;
    $scope.ngayban = new Date(selectedItem.ngayDatHang);
    $scope.tongtien = selectedItem.tongTien;
    for (var i = 0; i < selectedItem.list_json_chitiethoadon.length; i++) {
      $scope.products[i] = selectedItem.list_json_chitiethoadon[i];
    }
  };

  $scope.NhapMoi = function () {
    $scope.products = [];
    document.getElementById("mahd").value = "";
    document.getElementById("khachhang").value = "";
    document.getElementById("sdtkh").value = "";
    document.getElementById("diachikh").value = "";
    document.getElementById("datetimeInput").value = formattedDate;
    document.getElementById("tongtien").value = "";
  };
  // // thêm hóa đơn bán
  $scope.them = function () {
    var data = {
      mahd: $scope.mahdb,
      hoTen: $scope.tenkh,
      dienThoai: $scope.sodt,
      diaChi: $scope.diachi,
      ngayDatHang: $scope.ngayban,
      tongTien: $scope.Total(),
      list_json_chitiethoadon: $scope.products,
    };
    existingData.push(data);
    localStorage.setItem("hanghoa4", JSON.stringify(existingData));
    alert("Thêm thành công");
  };
  $scope.gethdban = function () {
    $scope.createBan = JSON.parse(localStorage.getItem("hanghoa4"));
    updatePagination($scope.createBan);
  };

  $scope.removeProduct = function (index) {
    $scope.createBan.splice(index, 1);
    localStorage.setItem("hanghoa4", JSON.stringify($scope.ban));
    alert("Xóa thành công");
  };
  $scope.removeProduct1 = function (index) {
    $scope.products.splice(index, 1);
    alert("Xóa thành công");
  };

  // hàm sửa
  $scope.sua = function () {
    if ($scope.mahdb !== "") {
      for (let i = 0; i < $scope.createBan.length; i++) {
        if ($scope.createBan[i].maChuyenMuc === $scope.maChuyenMuc) {
          $scope.createBan[i].mahd = $scope.mahdb;
          $scope.createBan[i].hoTen = $scope.tenkh;
          $scope.createBan[i].dienThoai = $scope.sodt;
          $scope.createBan[i].diaChi = $scope.diachi;
          $scope.createBan[i].ngayDatHang = $scope.ngayban;
          $scope.createBan[i].tongTien = $scope.Total();
          $scope.createBan[i].list_json_chitiethoadon = $scope.products;
          localStorage.setItem("hanghoa4", JSON.stringify($scope.createBan));
          break;
        }
      }
      alert("Cập nhật thành công");
    } else {
      alert("Chọn thông tin cần sửa");
    }
  };
  $scope.gethdban();
  // // phân trang
  function updatePagination(maloaisp) {
    $scope.currentPage = 1;
    $scope.itemsPerPage = 8;
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
      $scope.createBan = maloaisp.slice(begin, end);
    };
    $scope.setPage = function (page) {
      $scope.currentPage = page;
      $scope.getData();
    };
    $scope.getData();
  }

  // thống kê hóa đơn hiên jtiaj
});
