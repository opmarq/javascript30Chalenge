const submitBtn = document.querySelector(".form-submit");
const todoText = document.querySelector(".todo-text");
const listItems = document.querySelector(".list-content");

var todoList = JSON.parse(localStorage.getItem("items")) || [];


var populateList = function (list) {

    let listElements = list.map((item, index) => {

        return `<div class="item">
                    <input data-index="${index}" type="checkbox" ${ item.status == true ? "checked" : '' } id="item${index}">
                    <label for="item${index}">${item.text}</label>
               </div>`
    }).join('');

    listItems.innerHTML = listElements;

};

populateList(todoList);

var addItem = function (e) {

    e.preventDefault();

    let item = {
        text: todoText.value,
        status: false
    };

    todoList.push(item);

    localStorage.setItem("items", JSON.stringify(todoList));

    populateList(todoList);

    this.reset();

};

var toggleCheck = function(e){

   // console.log("ok");

    if(!e.target.matches('input'))
        return;

    let currentTarget = e.target;
    let targetIndex = currentTarget.dataset.index;

    todoList[targetIndex].status = !todoList[targetIndex].status;

    localStorage.setItem("items",JSON.stringify(todoList));

    populateList(todoList);

};

submitBtn.addEventListener("submit", addItem);

listItems.addEventListener("click",toggleCheck);