let app = angular.module("myApp", []);
app.controller("Cntrl", function ($scope) {
    $scope.todos = [{ title: "Hello World", done: false }];
    $scope.count = $scope.todos.length;
    $scope.addItem = function () {
        if (!$scope.newItem) { return; }
        $scope.todos.push({ title: $scope.newItem, done: false });
        $scope.newItem = "";
    }

    $scope.edit = false;

    // Delete item
    $scope.deleteItem = function (ind) {
        $scope.todos.splice(ind, 1);
    }

    //Count items
    $scope.count = function () {
        return $scope.todos.filter(todo => !todo.done).length;
    }

    //Clear completed items
    $scope.clearComplited = function () {
        $scope.todos = $scope.todos.filter(todo => !todo.done);
    }

    //Check if are at least one item checked
    $scope.oneChecked = function () {
        return $scope.todos.filter(todo => todo.done).length > 0;
    }

    //Loop through all items and check them
    $scope.checkAll = function () {
        $scope.todos.forEach(todo => {
            // todo.done = !todo.done;
             todo.done = true;
        })
    }

   //Filters
    $scope.todosFiltered = function () {
        if ($scope.filter === 'all') {
            return $scope.todos;
        } else if ($scope.filter === 'active') {
            return $scope.todos.filter(todo => !todo.done);
        } else if ($scope.filter === 'completed') {
            return $scope.todos.filter(todo => todo.done);
        }
    }
})