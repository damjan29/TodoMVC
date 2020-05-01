let app = angular.module("myApp", []);
app.controller("Cntrl", function ($scope) {
    $scope.todos = JSON.parse(localStorage.getItem('todos')) || [];
    $scope.count = $scope.todos.length;
    $scope.addItem = function () {
        if (!$scope.newItem) { return; }
        $scope.todos.push({ title: $scope.newItem, done: false });
        localStorage.setItem('todos', JSON.stringify($scope.todos))
        $scope.newItem = "";
    }

    $scope.edit = false;

    //Task done
    $scope.itemCompleted = function (ind) {
        $scope.todos[ind].done = !$scope.todos[ind].done;
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    }

    $scope.editItem = function (e, ind) {
        //$scope.edit = true;
        console.log($scope.todos[ind])
        console.log(e.target.textContent);
        $scope.todos[ind].title = e.target.textContent;
        localStorage.setItem('todos', JSON.stringify($scope.todos))
    }

    // Delete task
    $scope.deleteItem = function (ind) {
        $scope.todos.splice(ind, 1);
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    }

    //Count tasks
    $scope.count = function () {
        return $scope.todos.filter(todo => !todo.done).length;
    }

    //Clear completed tasks
    $scope.clearComplited = function () {
        $scope.todos = $scope.todos.filter(todo => !todo.done);
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    }

    //Check if are at least one task checked
    $scope.oneChecked = function () {
        return $scope.todos.filter(todo => todo.done).length > 0;
    }

    //Loop through all tasks and check them
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



