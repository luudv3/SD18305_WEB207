window.ListStudentController = function ($scope, $http){
    $scope.title = "Danh sách sinh viên";

    // Call api
    const apistudents = "http://localhost:3000/student";
    function getData() {
        $http.get(apistudents).then(function(response){
            console.log(response);

            console.log(response.data);
            if (response.status == 200 ){
                $scope.liststudents = response.data;
            }
        })
    }
    getData();
}