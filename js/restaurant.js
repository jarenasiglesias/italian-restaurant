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
            foodList.id = name.replace(" ","").replace(" ","");
            foodList.innerText = name + ' ' + price + '€';
            ulFood.appendChild(foodList);
            var css = '#' + foodList.id + ':hover{ font-size: 25px; background-image: url(' + photo + '); height: 110px; padding-top: 35px; border-radius:20px; background-size: cover; cursor: pointer;';
            var style = document.createElement('style');

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            document.getElementsByTagName('head')[0].appendChild(style);
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
            foodList.id = name.replace(" ","").replace(" ","");
            foodList.innerText = name + ' ' + price + '€';
            ulFood.appendChild(foodList);
            var css = '#' + foodList.id + ':hover{ font-size: 20px; background-image: url(' + photo + '); height: 110px; padding-top: 35px; border-radius:20px; background-size: cover; cursor: pointer;';
            var style = document.createElement('style');

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            document.getElementsByTagName('head')[0].appendChild(style);
        }
        var bar;
        bar = document.createElement('hr');
        ulFood.appendChild(bar);

    });
}