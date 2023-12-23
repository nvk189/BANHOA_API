app;

app.controller("ListProduct", function ($scope, $http) {
  $scope.listItem1 = [];
  $scope.maloaisp = [];
  $scope.imgProduct = "";
  $scope.searchtensp = "";
  var existingData = JSON.parse(localStorage.getItem("sanpham1")) || [];

  $scope.NhapMoi = function () {
    document.getElementById("masanpham").value = " ";
    document.getElementById("tensanpham").value = " ";
    document.getElementById("imgproduct").src = "";
    document.getElementById("viewimg").src = " ";
    document.getElementById("slsp").value = " ";
    document.getElementById("giaban").value = " ";
    document.getElementById("giagiam").value = " ";
  };

  // hàm reload
  var image = document.getElementById("viewimg");
  // hàm click
  $scope.loaiData = function (selectedItem) {
    // console.log(selectedItem.moTa)

    $scope.masanpham = selectedItem.maSanPham;
    $scope.tensanpham = selectedItem.tenSanPham;
    // $scope.loaisp = selectedItem.maChuyenMuc;
    image.src = selectedItem.anhDaiDien;
    $scope.soluong = selectedItem.soLuong;
    $scope.gia = selectedItem.gia;
    $scope.giagiam = selectedItem.giaGiam;
  };
  // hàm thêm
  $scope.themsp = function () {
    var data = {
      maSanPham: $scope.masanpham,
      tenSanPham: $scope.tensanpham,
      anhDaiDien: image.src,
      gia: $scope.gia,
      giaGiam: $scope.giagiam,
      soLuong: $scope.soluong,
    };
    existingData.push(data);
    localStorage.setItem("sanpham1", JSON.stringify(existingData));
    alert("thêm thành công");
  };
  // hàm sửa
  $scope.suasp = function () {
    for (let i = 0; i < $scope.listItem1.length; i++) {
      if ($scope.listItem1[i].maSanPham === $scope.masanpham) {
        // $scope.listItem[i].maChuyenMuc = $scope.loaisp;
        $scope.listItem1[i].tenSanPham = $scope.tensanpham;
        $scope.listItem1[i].anhDaiDien = image.src;
        $scope.listItem1[i].soLuong = $scope.soluong;
        $scope.listItem1[i].gia = $scope.gia;
        $scope.listItem1[i].giaGiam = $scope.giagiam;
        localStorage.setItem("sanpham1", JSON.stringify($scope.listItem1));
        alert("cập nhật thành công");
        break;
      }
    }
  };
  // xoa
  $scope.removeProduct = function (index) {
    $scope.listItem1.splice(index, 1);
    localStorage.setItem("sanpham1", JSON.stringify($scope.listItem1));
  };
  $scope.GetProduct = function () {
    $scope.listItem1 = JSON.parse(localStorage.getItem("sanpham1"));
    updatePagination($scope.listItem1);
  };
  $scope.GetProduct();
  /// phần trang tương ứng cho ds
  function updatePagination(maloaisp) {
    $scope.currentPage = 1;
    $scope.itemsPerPage = 6;
    $scope.about = maloaisp.length;
    $scope.pages = [];
    $scope.totalPages = 0;
    $scope.totalPages = Math.ceil(maloaisp.length / $scope.itemsPerPage);
    for (var i = 1; i <= $scope.totalPages; i++) {
      $scope.pages.push(i);
    }
    $scope.getData = function () {
      var begin = ($scope.currentPage - 1) * $scope.itemsPerPage;
      var end = begin + $scope.itemsPerPage;
      $scope.listItem1 = maloaisp.slice(begin, end);
    };
    $scope.setPage = function (page) {
      $scope.currentPage = page;
      $scope.getData();
    };
    $scope.getData();
  }
});
