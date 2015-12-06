(function () {
    var url = "http://localhost:6543";

    var constants = {
        SUCCESS: "SUCCESS",
        EXCEPTION: "EXCEPTION"
    };
    angular.module("login", ['ionic'])
        .controller("EmailCtrl", ["$scope", "$http", "$log", "$ionicPopup", function ($scope, $http, $log, $ionicPopup) {
            this.email = "max.meng@appartner.cn";
            this.login = function () {
                $http.get(url + "/generic/loginVerify/usernameIsValue")
                    .success(function (data) {
                        var status = data["status"],
                            result = data["data"];

                        $log.info("response status:" + status);
                        $log.info(result);
                        if (data["status"].toUpperCase().startsWith(constants.SUCCESS)) {
                            $log.info("SUCCESS");
                        }
                        else {
                            $log.info("ERROR");
                            $ionicPopup.alert({
                                title: "很抱歉，注册或登陆失败",
                                subTitle: "错误详情：" + result[0],
                                cssClass: "alert-pop",
                                okText: "确认",
                                okType: "button-positive"
                            });
                        }
                    })
                    .fail(function (data) {
                        alert('error');
                    });
            };
        }]);
})();