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
                age: 4,
                upvoteCount:0
            },
            secondItem : {
                name: "bouncy ball",
                price: 4,
                age:2,
                upvoteCount:0
            },
            thirdItem : {
                name: "hotwheels car",
                price: 2,
                age:4,
                upvoteCount:0
            },
            fourthItem : {
                name: "action man",
                price: 15.99,
                age:5,
                upvoteCount:0
            }
        }
        $scope.upVote = function (item)
        {
            item.upvoteCount++;
        }
        $scope.downVote =function (item)
        {
            item.upvoteCount--;
        }
    })