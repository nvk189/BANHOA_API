app;
app.controller("Detail", function ($scope) {
  $scope.listdetail = [];
  $scope.listBill = [];
  $scope.productmoney = 0;
  $scope.numbersp = 1;

  $scope.list = [];

  var storedDetail = localStorage.getItem("detail");
  $scope.listdetail = storedDetail ? JSON.parse(storedDetail) : [];
  console.log($scope.listdetail);

  // giỏ hàng
  // lấy giá của sản phẩm
  if ($scope.listdetail[0].salePrice != "") {
    $scope.productmoney = $scope.listdetail[0].salePrice;
    console.log($scope.productmoney);
  } else {
    $scope.productmoney = $scope.listdetail[0].price;
    console.log($scope.productmoney);
  }

  // thêm sản phẩm vào giỏ hàng
  $scope.listCart = function () {
    var data = {
      maSanPham: $scope.listdetail[0].id,
      tenSanPham: $scope.listdetail[0].name,
      anhsp: $scope.listdetail[0].image,
      soLuong: $scope.numbersp,
      gia: $scope.productmoney,
    };
    console.log(data);
    updateCart(data);
  };

  // Hàm kiểm tra thông tin 1 sản phẩm
  function findCartItem(cart, productId) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].maSanPham === productId) {
        return cart[i];
      }
    }
    return null;
  }

  // Hàm cập nhật giỏ hàng
  function updateCart(data) {
    var cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];

    if (!Array.isArray(cartItems)) {
      cartItems = [];
    }

    var existingItem = findCartItem(cartItems, data.maSanPham);

    if (existingItem) {
      existingItem.soLuong += data.soLuong;
    } else {
      cartItems.push(data);
    }

    // lưu thông tin vào local
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
    $scope.list = cartItems;
    $scope.list = JSON.parse(localStorage.getItem("cartItem"));
    console.log($scope.list);
  }

  // hàm xóa
  $scope.removeItem = function (item) {
    // Tìm vị trí của sản phẩm trong danh sách
    var index = $scope.list.indexOf(item);

    // Nếu sản phẩm tồn tại trong danh sách, xóa nó
    if (index !== -1) {
      $scope.list.splice(index, 1);

      // Cập nhật lại localStorage sau khi xóa
      localStorage.setItem("cartItem", JSON.stringify($scope.list));
      $scope.list = JSON.parse(localStorage.getItem("cartItem"));
      // cập nhật lại tổng tiên fsau khi xóa
      // $scope.calculateTotalAllProducts();
    }
  };

  // trang giỏ hàng

  $scope.calculateTotal = function (item) {
    // Chuyển đổi chuỗi thành kiểu số, loại bỏ dấu phẩy nếu có
    var giaNumber = parseFloat(item.gia.replace(".", ""));

    // Kiểm tra xem giaNumber có phải là một số hợp lệ không
    if (!isNaN(giaNumber)) {
      var total = item.soLuong * giaNumber;

      // Định dạng giá trị thành chuỗi có dấu phẩy ngăn cách hàng nghìn
      return total.toLocaleString();
    } else {
      console.error("Giá trị không hợp lệ: " + item.gia);
      return "0"; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
    }
  };
  // update lại khi thay đổi số lượng
  $scope.updateQuantity = function (item, newQuantity) {
    // Tìm vị trí của sản phẩm trong danh sách
    var index = $scope.list.indexOf(item);

    // Nếu sản phẩm tồn tại trong danh sách, cập nhật số lượng mới
    if (index !== -1) {
      $scope.list[index].soLuong = newQuantity;

      // Cập nhật lại localStorage sau khi cập nhật số lượng
      localStorage.setItem("cartItem", JSON.stringify($scope.list));
    }
  };

  // tính tổng tiền khi sản phẩm được check box

  $scope.calculateSelectedTotal = function () {
    return $scope.list
      .filter((item) => item.isSelected) // Lọc ra các sản phẩm được chọn
      .reduce(
        (total, item) =>
          total + parseFloat(item.gia.replace(".", "")) * item.soLuong,
        0
      )
      .toLocaleString();
  };

  // hiển thị thông tin sau khi load lại trang

  if (localStorage.getItem("cartItem")) {
    $scope.list = JSON.parse(localStorage.getItem("cartItem"));
    var cartItems = localStorage.getItem("cartItem");
    var parsedCartItems = JSON.parse(cartItems) || [];
    $scope.sum = parsedCartItems.length;
  }
  console.log($scope.list);

  // lấy thông tin sản phẩm khki được checkbox
  $scope.selectedItems = [];
  $scope.toggleSelection = function (item) {
    if (item.isSelected) {
      $scope.selectedItems.push(item);
      // console.log($scope.selectedItems)
      localStorage.setItem("productbill", JSON.stringify($scope.selectedItems));
    } else {
      var index = $scope.selectedItems.indexOf(item);
      if (index !== -1) {
        $scope.selectedItems.splice(index, 1);
      }
      localStorage.setItem("productbill", JSON.stringify($scope.selectedItems));
    }
  };
  console.log(localStorage.getItem("productbill"));

  // trang đặt hàng
  var storedDetail = localStorage.getItem("productbill");
  $scope.listBill = storedDetail ? JSON.parse(storedDetail) : [];
  // xóa
  $scope.removeProduct = function (index) {
    $scope.listBill.splice(index, 1);
    localStorage.setItem("productbill", JSON.stringify($scope.listBill));
    $scope.totalbill = TotalBill();
  };
  // hàm tính tổng tiền
  function TotalBill() {
    var total = 0;

    for (var i = 0; i < $scope.listBill.length; i++) {
      var giaNumber = parseFloat($scope.listBill[i].gia.replace(".", ""));
      total += $scope.listBill[i].soLuong * giaNumber;
    }
    return total.toLocaleString();
  }
  $scope.totalbill = TotalBill();
});
