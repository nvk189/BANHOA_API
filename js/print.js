app;

app.controller("print", function ($scope) {
  $scope.Print = JSON.parse(localStorage.getItem("invoiceData"));
});
