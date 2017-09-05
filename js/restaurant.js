var mult = 0;
var total = 0;
var reset = document.getElementById('restart');
reset.addEventListener('click', restart, false);

(function products() {
    var addCategory = [];
    $.get('http://localhost:3000/food', function getType(response) {
        var type = 'food';
        var foodObj = response;
        categories(foodObj, type, addCategory);
    })
    $.get('http://localhost:3000/drink', function getType(response) {
        var type = 'drink';
        var foodObj = response;
        categories(foodObj, type, addCategory);
    })
}())

function categories(foodObj, type, addCategory) {
    var addCategory = [];
    for (var i = 0; i < foodObj.length; i++) {
        var category = foodObj[i].category;

        if (!addCategory.includes(category)) {
            addCategory.push(category);
        }
    }
    for (var i = 0; i < addCategory.length; i++) {
        foodCont(type, addCategory[i])
    }
}

function foodCont(type, cat) {
    $.get('http://localhost:3000/' + type + '/' + cat, function getType(response) {
        var cont = document.getElementById('content');
        var foodObj = response;
        var head;
        var ulFood;

        ulFood = foodTitles(head, cat, cont, ulFood);

        for (var i = 0; i < foodObj.length; i++) {
            var name = foodObj[i].description;
            var photo = foodObj[i].photo;
            var price = foodObj[i].price;
            var extension = 'Content'; //sirve para diferencia los id

            printList(name, price, ulFood, photo, extension);

        }

    });
}

function foodTitles(head, cat, cont, ulFood) { //crea los títulos de las categorías
    head = document.createElement('h2');
    head.innerText = cat.toUpperCase();
    cont.appendChild(head);
    ulFood = document.createElement('ul');
    ulFood.id = cat;
    cont.appendChild(ulFood);
    var line;
    line = document.createElement('hr');
    ulFood.appendChild(line);
    return ulFood;
}

function printList(name, price, ulFood, photo, extension) { //crea la lista de productos
    var foodList;
    foodList = document.createElement('li');
    foodList.id = name.replace(" ", "").replace(" ", "") + extension;
    foodList.setAttribute("price", parseFloat(price));
    foodList.innerText = name + ' ' + price + '€';

    if (foodList.id.indexOf('Content') !== -1) { //controla que el id contenga en su string 'Content'
        foodList.addEventListener('click', calculator, false);
        listStyle(name, photo);
        ulFood.appendChild(foodList);
    }

    return foodList;
}

function listStyle(name, photo) { //añade estilo
    var css = '#' + name.replace(" ", "").replace(" ", "") + 'Content' + ':hover{ font-size: 25px; background-image: url(' + photo + '); height: 110px; padding-top: 35px; border-radius:20px; background-size: cover; cursor: pointer;';
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function calculator() {
    var calculator = document.getElementById('calculator');
    calculator.style.display = 'block';
    var sum = document.getElementById('sum');
    var ulFood = document.getElementById('calcUlist');

    var name = this.id.replace("Content", "");
    var photo = this.photo;
    var price = this.getAttribute("price");
    var extension = 'Calc';
    
    var calcList = printList(name, price, ulFood, photo, extension);

    noRepeatFood(calcList, ulFood)

    var numbox = document.createElement('input');
    numbox.id = this.id + 'Box';
    numbox.type = 'number';
    calcList.appendChild(numbox);
    $('#' + numbox.id).bind('keyup mouseup', function() {
        $('#sum').empty();
        total = numbox.value * calcList.getAttribute("price");
        var result;
        result = document.createElement('h2');
        result.innerText = total + ' €';
        sum.appendChild(result);
    });
}

function noRepeatFood(calcList, ulFood) { //controla que en la parte de la lista de la izquierda no se repitan los mismo elementos

    var found = $("#calcUlist > li[id='" + calcList.id + "']");

    if (found.length == 0) {
        ulFood.appendChild(calcList);
    }
}

function restart() {
    $('#calcUlist').empty();
    $('#sum').empty();
    var totalNumber = document.getElementById('total');
    totalNumber.outerHTML = "";
    delete totalNumber;
}