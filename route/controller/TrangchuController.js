window.TrangchuController = function ($scope){
    $scope.title = "Đây là trang chủ";

    $scope.themMoi = function (){
        // lấy toàn bộ dữ liệu từ form
        console.log($scope.inputValue);
        // lấy ra từng thuộc tính
        console.log($scope.inputValue.name);
        console.log($scope.inputValue.address);

    }
    $scope.tinhTong = function (){
        $scope.sum = parseFloat($scope.number.one) + parseFloat($scope.number.two);
    }
}