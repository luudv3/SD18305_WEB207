// Khai báo 1 mảng nhân viên
window.GioiThieuController = function ($scope, $routeParams){
    $scope.title = "Đây là trang giới thiệu";
    console.log($routeParams);


    // Khai báo 1 mảng nhân viên
    $scope.nhanVien = [
        {
            ten: 'Đặng Vũ Lưu',
            namSinh: 1996,
            chuyenNganh: 'CNTT',
        },
        {
            ten: 'Đặng Vũ Lưu 2',
            namSinh: 2005,
            chuyenNganh: 'CNTT',
        }
    ];
    $scope.createStudent = function(){
        let newStudent = {
            ten: $scope.student.name,
            namSinh: $scope.student.year,
            chuyenNganh: $scope.student.couse,
        }
        console.log(newStudent);
        $scope.nhanVien.push(newStudent)
    }

}