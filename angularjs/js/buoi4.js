// Khơi tạo module
// set angular cho vùng

let myApp = angular.module("demo", []);
// 2 tham số: tên vùng và thành phần phụ thuộc

// Khai báo controller
myApp.controller("demoController", myFunction);
// 2 tham số : tên controller và hàm

function myFunction($scope){
// tham số scope luôn luôn phải có để render dữ liệu ra view

$scope.xinchao = "Hello cưng";
}

myApp.controller("infoController", function($scope){
$scope.ten = "Đặng Vũ Lưu";
$scope.namsinh = 2005;
$scope.chuyennganh = "CNTT";

// Khai báo mảng
$scope.students = [
    {
        ten: 'Đặng Vũ Lưu',
        namsinh: 2005,
        chuyennganh: "CNTT"
    },
    {
        ten: 'Luudv3',
        namsinh: 2005,
        chuyennganh: "CNTT"
    },
    {
        ten: 'Lê Trung Hiếu',
        namsinh: 2003,
        chuyennganh: "CNTT"
    },
    {
        ten: 'Nguyễn Mạnh Hiếu',
        namsinh: 2003,
        chuyennganh: "CNTT"
    },
    {
        ten: 'Phạm Quốc Hoàn',
        namsinh: 2003,
        chuyennganh: "CNTT"
    }
    
]

});