// Khai báo 1 mảng dữ liệu nhân viên
// tên, ngày sinh, mức lương, giới tinh (0 là nam, 1 là nữ)
// sử dụng angularjs để hiển thị ra table

// định nghĩa cho vùng sử dụng
let myApp = angular.module("myApp", []);

// Khởi tạo controller

myApp.controller("demoController", function($scope){
    $scope.nhanVien = [
        {
            ten: "Đặng Vũ Lưu",
            ngaySinh: new Date("2005-12-20"),
            mucLuong: 10000000,
            gioiTinh: 0
        },
        {
            ten: "Đặng Vũ Lưu",
            ngaySinh: new Date("1996-11-20"),
            mucLuong: 10000000,
            gioiTinh: 1
        },
        {
            ten: "Đặng Vũ Lưu 2",
            ngaySinh: new Date("1987-10-20"),
            mucLuong: 10000000,
            gioiTinh: 0
        }
    ]
    $scope.number = 2;
    $scope.hoTen = "Lưu";

    $scope.sayHello = function($name) {
        alert("Xin chào" + $name);
    }

    // sự kiến click
    // click chuột vào tên nhân viên
    // thì sẽ hiển thị thông báo
    // xin chào + Tên nhân viên
});