// 1. create a new element using createElement function
// 2. insert required data in that element using either innerHTML or innerText
// 3. insert new element in parent container using appendChild method

let todos = [
    {
        id: 234234,
        title: "study at 9pm"
    },
    {
        id: 15254,
        title: "online meeting at 8pm"
    }
]

let todo = {
    id: 234234,
    title: "study at 9pm"
}

let todoContainer = document.querySelector(".todocontainer")
function addTodo(todo) {
    let li = document.createElement("li");
    li.innerHTML = `<div>
                <input type="checkbox" name="" id="">
                <h1>${todo.title}</h1>
                <div>
                    <button>❌</button>
                    <button>✏️</button>
                </div>
            </div>`
    todoContainer.appendChild(li);
}
addTodo(todo);

function showAllTodos(todos) {
    todos.forEach(todo => {
        addTodo(todo)
    });
}
showAllTodos(todos)