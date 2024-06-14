
function ToDoListConstructor(todo, complete = false) {
    this.todo = todo;
    this.complete = complete
}

function render() {
    const list = getToDoList();
    const listContainer = document.querySelector(".list");
    listContainer.querySelector("ul") !== null ? listContainer.querySelector("ul").remove() : "";

    const ul = document.createElement("ul");
    list.forEach((element, index) => {
        const li = document.createElement("li");
        const span1 = document.createElement("span");
        const _checkbox = document.createElement("input");
        const _button = document.createElement("button");
        _button.innerHTML = '삭제'
        _button.onclick = (e) => {
            delToDo(index)
        }
        _checkbox.type = "checkbox"
        _checkbox.checked = element.complete;
        _checkbox.onchange = (e) => {
            completeCheck(e.target);
        }
        if (element.complete) {
            span1.classList.add("is-complete");
        } else {
            span1.classList.remove("is-complete");
        }
        span1.innerHTML = element.todo;
        li.append(_checkbox, span1, _button);
        ul.append(li);

    });
    listContainer.append(ul);
}

function completeCheck(node) {
    if (node.checked === true) {
        node.nextSibling.classList.add("is-complete");
    } else {
        node.nextSibling.classList.remove("is-complete");
    }
}

function getToDoList() {
    let list = [];
    if (JSON.parse(localStorage.getItem("ToDoList")) !== null) {
        list = JSON.parse(localStorage.getItem("ToDoList"))
    }
    return list;
}

function addToDoList(obj) {
    const list = getToDoList();
    list.push(obj);
    localStorage.setItem("ToDoList", JSON.stringify(list));
}

function save() {
    const _input = document.querySelectorAll("li>input");
    const list = getToDoList();
    _input.forEach((el, index) => {
        list[index].complete = el.checked;
    });
    localStorage.setItem("ToDoList", JSON.stringify(list));
}

function delToDo(index) {
    const list = getToDoList();
    list.splice(index, 1);
    localStorage.setItem("ToDoList", JSON.stringify(list));
    render();
}

function main() {
    const form = document.querySelector("form");
    form.onsubmit = (e) => {
        e.preventDefault();
        const { todo } = e.target;
        if (todo.value === "") { alert("할일을 입력하세요"); return; }
        const obj = new ToDoListConstructor(todo.value);
        addToDoList(obj);
        render();
        todo.value = "";
    }
    render();
}
main();

