var app = angular.module("AppBanHoa", []);
app.controller("NhaCungCap", function ($scope, $http) {
  $scope.nhasx = [];
  $scope.maloaisp = [];
  $scope.manhasx;
  var existingData = JSON.parse(localStorage.getItem("nhasx")) || [];

  $scope.loadData = function (selectedItem) {
    $scope.manhasx = selectedItem.maNhaCungCap;
    $scope.tennhasx = selectedItem.tenNhaCungCap;
    $scope.sodt = selectedItem.dienThoai;
    $scope.email = selectedItem.email;
    $scope.diachi = selectedItem.diaChi;
  };

  $scope.NhapMoi = function () {
    document.getElementById("mancc").value = "";
    document.getElementById("tenncc").value = "";
    document.getElementById("sdtncc").value = "";
    document.getElementById("emailncc").value = "";
    document.getElementById("diachincc").value = "";
  };
  $scope.GetNhaSX = function () {
    $scope.nhasx = JSON.parse(localStorage.getItem("nhasx"));
    updatePagination($scope.nhasx);
  };
  $scope.GetNhaSX();

  // thêm nhà cung cấp
  $scope.them = function () {
    var data = {
      maNhaCungCap: $scope.manhasx,
      tenNhaCungCap: $scope.tennhasx,
      dienThoai: $scope.sodt,
      email: $scope.email,
      diaChi: $scope.diachi,
    };
    existingData.push(data);
    localStorage.setItem("nhasx", JSON.stringify(existingData));
    alert("thêm thành công");
  };

  // sửa nhà cung cấp
  $scope.sua = function () {
    for (let i = 0; i < $scope.nhasx.length; i++) {
      if ($scope.nhasx[i].maNhaCungCap === $scope.manhasx) {
        $scope.nhasx[i].tenNhaCungCap = $scope.tennhasx;
        $scope.nhasx[i].dienThoai = $scope.sodt;
        $scope.nhasx[i].email = $scope.email;
        $scope.nhasx[i].diaChi = $scope.diachi;
        localStorage.setItem("nhasx", JSON.stringify($scope.nhasx));
        alert("cập nhật thành công");
        break;
      }
    }
  };

  // hàm xóa
  $scope.removeProduct = function (index) {
    $scope.nhasx.splice(index, 1);
    localStorage.setItem("nhasx", JSON.stringify($scope.nhasx));
  };
  // tìm kiếm

  // $scope.SearchSX = function () {
  //   if (document.getElementById("search-supplier").value != "") {
  //     $http({
  //       method: "POST",
  //       url: "https://localhost:7261/api/NhaCungCap/search",
  //       data: {
  //         page: $scope.page,
  //         pageSize: $scope.pageSize,
  //         tenNhaCungCap: $scope.searchnhasx,
  //       },
  //     }).then(function (response) {
  //       $scope.nhasx = response.data.data;
  //       updatePagination($scope.nhasx);
  //     });
  //   } else alert("Nhập thông tin tìm kiếm");
  // };

  //     /// phần trang tương ứng cho ds
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
      $scope.nhasx = maloaisp.slice(begin, end);
    };
    $scope.setPage = function (page) {
      $scope.currentPage = page;
      $scope.getData();
    };
    $scope.getData();
  }
});
