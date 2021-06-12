checkoutApp.controller("ItemDetailsController", 
    function ItemDetailsController($scope){
        $scope.message = "item details page";


        // $scope.items ={
        //     name: "toy",
        //     price:55
        // }
        $scope.items={
            firstItem : {
                name: "lego",
                price: 10.99,
                age: 4
            },
            secondItem : {
                name: "bouncy ball",
                price: 4,
                age:2
            },
            thirdItem : {
                name: "hotwheels car",
                price: 2,
                age:4
            },
            fourthItem : {
                name: "action man",
                price: 15.99,
                age:5
            }
        }
    })