var app = angular.module("AppBanHoa", []);

app.controller("LoaiSP", function ($scope, $http) {
  $scope.themloaisp = [];
  $scope.loaisp = [];
  var existingData = JSON.parse(localStorage.getItem("loaisp")) || [];

  // thêm
  $scope.them = function () {
    var newData = {
      maChuyenMuc: $scope.maChuyenMuc,
      tenChuyenMuc: $scope.tenloaisp,
    };

    existingData.push(newData);
    localStorage.setItem("loaisp", JSON.stringify(existingData));
  };

  // sửa
  $scope.sua = function () {
    if ($scope.tenloaisp !== "") {
      // Kiểm tra nếu $scope.tenloaisp không rỗng
      for (let i = 0; i < $scope.loaisp.length; i++) {
        if ($scope.loaisp[i].maChuyenMuc === $scope.maChuyenMuc) {
          $scope.loaisp[i].maChuyenMuc = $scope.maChuyenMuc;
          $scope.loaisp[i].tenChuyenMuc = $scope.tenloaisp;
          localStorage.setItem("loaisp", JSON.stringify($scope.loaisp)); // Lưu lại vào Local Storage
          break;
        }
      }
    } else {
      alert("Chọn thông tin cần sửa");
    }
  };

  $scope.loadData = function (selectedItem) {
    $scope.maChuyenMuc = selectedItem.maChuyenMuc;
    $scope.tenloaisp = selectedItem.tenChuyenMuc;
  };

  // hàm nhập mới
  $scope.NhapMoi = function () {
    document.getElementById("maloai").value = "";
    document.getElementById("tenloai").value = "";
    document.getElementById("search-product-type").value = "";
  };

  // xóa
  $scope.removeProduct = function (index) {
    $scope.loaisp.splice(index, 1);
    localStorage.setItem("loaisp", JSON.stringify($scope.loaisp));
  };
  // cập nhật thông tin
  $scope.GetLoaiSP = function () {
    $scope.loaisp = JSON.parse(localStorage.getItem("loaisp"));
    updatePagination($scope.loaisp);
  };
  // tìm kiếm

  // $scope.SearchCM = function () {
  //   if (document.getElementById("search-product-type").value != "") {
  //     $http({
  //       method: "GET",
  //       url: `https://localhost:7261/api/ChuyenMuc/search/${$scope.searchcm}`,
  //     }).then(function (response) {
  //       $scope.maloaisp = response.data;
  //       updatePagination($scope.maloaisp);
  //     });
  //   } else alert("Nhập thông tin tìm kiếm");
  // };

  $scope.GetLoaiSP();
  /// phần trang tương ứng cho ds
  function updatePagination(maloaisp) {
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;
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
      $scope.loaisp = maloaisp.slice(begin, end);
    };
    $scope.setPage = function (page) {
      $scope.currentPage = page;
      $scope.getData();
    };
    $scope.getData();
  }
});
