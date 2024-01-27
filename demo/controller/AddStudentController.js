window.AddStudentController = function ($scope, $http, $location) {
    $scope.title = "Thêm mới nhân viên";

    $scope.addStudent = function () {
        // Call API
        const apiStudents = "http://localhost:3000/student";

        // tạo 1 biến để kiểm tra
        let flag = true;

        //Kiểm tra từng trường dữ liệu
        $scope.Kiemtra = {
            name: false,
            year: false,
            coure: false
        }
        if(!$scope.student || !$scope.student.name){
            flag = false,
            $scope.Kiemtra.name = true
        }
        if(flag) {
             // nhập dữ liệu từ input
        let newStudent = {
            ten: $scope.student.name,
            namsinh: $scope.student.year,
            chuyennganh: $scope.student.coure
        }
        //console.log(newStudent);
        $http.post(
            apiStudents,
            newStudent
        ).then(function (response) {
            if (response.status == 201) {
                $location.path("trang-chu");
            }
        })
        } else {
            alert('vui lòng nhập đầy đủ thông tin');
        }
       
    }

}