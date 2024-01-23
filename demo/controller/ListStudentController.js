window.ListStudentController = function ($scope, $http){
    $scope.title = "Danh sách sinh viên";

    // Thực hiện việc call API
    const apistudents = "http://localhost:3000/student";

    // Tham số $http (là giao thức để thực hiện việc call api)
    // $http.phương thức sử dụng(link api).then()
    function getData() {
        $http.get(apistudents).then(function(response){
            console.log(response);

            // Truy cập vào dữ liệu
            console.log(response.data);
            if (response.status == 200 ){
                $scope.liststudents = response.data;
            }
        })
    }
    getData();
}