(function categories() {
    var addCategory = []; //crea variable con array para almacenar cuantas marcas de cpu existen en la base de datos
    $.get('http://localhost:3000/food', function getType(response) {
        var foodObj = response;
        for (var i = 0; i < foodObj.length; i++) { //for que recorre el array de cpus existentes en la bbdd
            var category = foodObj[i].category; //recogemos el valor de las marcas existentes

            if (!addCategory.includes(category)) { //si la marca de cpu no se encuentra dentro del array lo incluye dentro, así podemos crear luego dos botones para cada marca
                addCategory.push(category);
            }
        }
        for (var i = 0; i < addCategory.length; i++) {
            foodCont(addCategory[i])
        }
    })
}())

function foodCont(cat) {
    $.get('http://localhost:3000/food/' + cat, function getType(response) {
        var cont = document.getElementById('content');
        var foodObj = response;
        var head;
        head = document.createElement('h2');
        head.innerText = cat.toUpperCase();
        cont.appendChild(head);
        var ulFood;
        ulFood = document.createElement('ul');
        ulFood.id = 'contList';
        cont.appendChild(ulFood);
        for (var i = 0; i < foodObj.length; i++) {
            var name = foodObj[i].description;
            var photo = foodObj[i].photo;
            var price = foodObj[i].price;
            var foodDbList;
            foodList = document.createElement('li');
            foodList.innerText = name + ' ' + price + '€';
            ulFood.appendChild(foodList);
        }
        var bar;
        bar = document.createElement('hr');
        ulFood.appendChild(bar);
    });
}


(function categories2() {
    var addCategory = []; //crea variable con array para almacenar cuantas marcas de cpu existen en la base de datos
    $.get('http://localhost:3000/drink', function getType(response) {
        var foodObj = response;
        for (var i = 0; i < foodObj.length; i++) { //for que recorre el array de cpus existentes en la bbdd
            var category = foodObj[i].category; //recogemos el valor de las marcas existentes

            if (!addCategory.includes(category)) { //si la marca de cpu no se encuentra dentro del array lo incluye dentro, así podemos crear luego dos botones para cada marca
                addCategory.push(category);
            }
        }
        for (var i = 0; i < addCategory.length; i++) {
            foodCont2(addCategory[i])
        }
    })
}())

function foodCont2(cat) {
    $.get('http://localhost:3000/drink/' + cat, function getType(response) {
        var cont = document.getElementById('content');
        var foodObj = response;
        var head;
        head = document.createElement('h2');
        head.innerText = cat.toUpperCase();
        cont.appendChild(head);
        var ulFood;
        ulFood = document.createElement('ul');
        ulFood.id = 'contList';
        cont.appendChild(ulFood);
        for (var i = 0; i < foodObj.length; i++) {
            var name = foodObj[i].description;
            var photo = foodObj[i].photo;
            var price = foodObj[i].price;
            var foodDbList;
            foodList = document.createElement('li');
            foodList.innerText = name + ' ' + price + '€';
            ulFood.appendChild(foodList);
        }
        var bar;
        bar = document.createElement('hr');
        ulFood.appendChild(bar);
    });
}