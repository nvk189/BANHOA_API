var app = angular.module("AppBanHoa", []);

app.controller("Bill", function ($scope, $http) {
  $scope.products = [];
  $scope.Nhap = [];
  $scope.nhasx = [];
  $scope.nhasx1 = [];
  $scope.nhanvien = [];
  var existingData = JSON.parse(localStorage.getItem("hdnhap")) || [];
  $scope.nhasx1 = JSON.parse(localStorage.getItem("nhasx")) || [];
  console.log($scope.nhasx1);
  var manhanvien = JSON.parse(localStorage.getItem("taikhoan")) || [];

  function filterNhanvienByMaLoaiTaiKhoan2() {
    $scope.nhanvien = manhanvien.filter(function (item) {
      return item.maLoaiTaiKhoan === "2";
    });
  }

  filterNhanvienByMaLoaiTaiKhoan2();
  console.log($scope.nhanvien);
  console.log(manhanvien);

  var currentDate = new Date();
  var formattedDate = currentDate.toISOString().split("T")[0];
  document.getElementById("datetimeInput").value = formattedDate;

  // Nhập mới
  $scope.F5 = function () {
    $scope.products = [];
    document.getElementById("mahd").value = "";
    document.getElementById("nhacungcap").value = "choose";
    document.getElementById("datetimeInput").value = formattedDate;
    document.getElementById("tongtien").value = "";
    document.getElementById("nhanviennhap").value = "choose";
    document.getElementById("search-import").value = "";
  };

  //   // load data  chưa làm được
  $scope.loadData = function (selectedItem) {
    $scope.products = [];
    $scope.mahdn = selectedItem.mahdn;
    $scope.ngaynhap = new Date(selectedItem.ngayNhap);
    $scope.tongTien = selectedItem.tongTien;

    for (var i = 0; i < $scope.nhanvien.length; i++) {
      if (selectedItem.maTaiKhoan === $scope.nhanvien[i].maTaiKhoan) {
        $scope.NVkho = $scope.nhanvien[i].maTaiKhoan;
        NVkhoFound = true;
        break;
      }
    }
    for (var i = 0; i < $scope.nhasx1.length; i++) {
      if (selectedItem.maNhaCungCap === $scope.nhasx1[i].maNhaCungCap) {
        $scope.NhaSX = $scope.nhasx1[i].maNhaCungCap;
        nhasxFound = true;
        break;
      }
    }
    for (var i = 0; i < selectedItem.list_json_chitiethoadonnhap.length; i++) {
      $scope.products[i] = selectedItem.list_json_chitiethoadonnhap[i];
    }
  };

  // hàm xóa sản phẩm nhập
  $scope.removeProduct = function (index) {
    $scope.products.splice(index, 1);
  };
  $scope.removeProduct1 = function (index) {
    $scope.Nhap.splice(index, 1);
    localStorage.setItem("hdnhap", JSON.stringify($scope.Nhap));
    alert("Xóa thành công");
  };

  //danh sách sản phẩm nhập
  $scope.addProduct = function () {
    $scope.products.push({
      tenSanPham: "",
      soLuong: 0,
      giaNhap: 0,
    });
  };

  // tính tổng tiền
  $scope.Total = function () {
    $scope.total = 0;
    for (var i = 0; i < $scope.products.length; i++) {
      var product = $scope.products[i];
      product.tongTien = product.soLuong * product.giaNhap;
      $scope.total += product.tongTien;
    }

    return $scope.total;
  };

  $scope.Gethdnhap = function () {
    $scope.Nhap = JSON.parse(localStorage.getItem("hdnhap"));
    updatePagination($scope.Nhap);
  };
  $scope.Gethdnhap();
  // // thêm xóa đơn
  $scope.them = function () {
    $scope.Total();
    var data = {
      mahdn: $scope.mahdn,
      maNhaCungCap: $scope.NhaSX,
      ngayNhap: $scope.ngaynhap,
      tongTien: $scope.Total(),
      maTaiKhoan: $scope.NVkho,
      list_json_chitiethoadonnhap: $scope.products,
    };
    existingData.push(data);
    localStorage.setItem("hdnhap", JSON.stringify(existingData));
    alert("thêm thành công");
  };

  // // sửa hóa đơn nhập
  $scope.Sua = function () {
    if ($scope.mahdn !== "") {
      for (let i = 0; i < $scope.Nhap.length; i++) {
        if ($scope.Nhap[i].mahdn === $scope.mahdn) {
          $scope.Nhap[i].maNhaCungCap = $scope.NhaSX;
          $scope.Nhap[i].ngayNhap = $scope.ngaynhap;
          $scope.Nhap[i].tongTien = $scope.Total();
          $scope.Nhap[i].maTaiKhoan = $scope.NVkho;
          $scope.Nhap[i].list_json_chitiethoadonnhap = $scope.products;
          localStorage.setItem("hdnhap", JSON.stringify($scope.Nhap));
          break;
        }
      }
      alert("Cập nhật thành công");
    } else {
      alert("Chọn thông tin cần sửa");
    }
  };

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
      $scope.Nhap = maloaisp.slice(begin, end);
    };
    $scope.setPage = function (page) {
      $scope.currentPage = page;
      $scope.getData();
    };
    $scope.getData();
  }
});
