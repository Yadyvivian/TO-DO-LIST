const date = document.querySelector('#date');
const DATE = new Date();
date.innerHTML = DATE.toLocaleDateString('es-MX', { weekday: 'long', month: 'short', day: 'numeric' });

let input = document.getElementById("inputText");
let inputDescription = document.getElementById("inputDescription");
let list = document.getElementById("list");
let minimalValue = 3;
let listNum = 0;



const usuarioGuardado = localStorage.getItem('usuario');

if (!usuarioGuardado) {
    
    console.log('No se encontró un usuario guardado.');
} else {
    cargarTareas(); 
}


addList = () => {
    let inputText = filterList(input.value);
    let inputDesc = filterList(inputDescription.value);
    let priority = document.querySelector('input[name="priority"]:checked').value;

    if (inputText && inputDesc) {
        list.innerHTML += ` <li class="my-3 py-3 shadow list-group-item" id="list${listNum}">
            <div class="row">
                <div class="col-1">
                    <input class="" type="checkbox" id="check${listNum}" onclick="done(${listNum})">
                </div>
                <div class="col-6">
                    <span class="h4" id="text${listNum}">${inputText}</span>
                    <textarea class="my-2 py-2 form-control shadow" placeholder="Agregar descripción" id="description${listNum}" disabled>${inputDesc}</textarea>
                </div>
                <div class="col-3">
                    <span id="priority${listNum}">${priority}</span>
                </div>
                <div class="col-2">
                    <button class="btn btn-danger" onclick="deleteList(${listNum})">
                        <i class="fas fa-trash de" data="eliminado" id="0"></i>
                    </button>
                    <button class="btn btn-danger" onclick="editList(${listNum})">
                        <i class="far fa-circle co" data="realizado" id="0"></i>
                    </button>
                </div>
            </div>
        </li>`;
        input.value = "";
        inputDescription.value = "";
        listNum++;
        guardarTareas(); a
    }
}

done = (listId) => {
    let checkbox = document.getElementById(`check${listId}`);
    let current = document.getElementById(`text${listId}`);
    let classExit = current.classList.contains("text-decoration-line-through");
    if (classExit == true) {
        current.classList.remove("text-decoration-line-through");
    } else {
        current.classList.add("text-decoration-line-through");
    }
}

filterList = (x) => {
    if (x) {
        if (x.length >= minimalValue) {
            return x;
        } else {
            alert("Por favor ingresa mas de tres palabras")
        }
    } else {
        return false;
    }
}

editList = (listId) => {
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("¿Quieres cambiar esto de la lista?", currentText.innerHTML);
    if (filterList(newText)) {
        currentText.innerHTML = newText;
        guardarTareas();
    }
}

deleteList = (listId) => {
    let current = document.getElementById(`text${listId}`).innerHTML;
    let deleteComfirm = confirm(`¿Estas seguro de eliminar esto? ${current}`);
    if (deleteComfirm) {
        let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
        guardarTareas(); 
    } else {
        console.log("deleted");
    }
};

function mostrarCompletadas() {
    const tareas = document.querySelectorAll('.text-decoration-line-through');
    tareas.forEach(tarea => {
        tarea.closest('li').style.display = 'block';
    });
}

function mostrarPendientes() {
    const tareas = document.querySelectorAll('.text-decoration-line-through');
    tareas.forEach(tarea => {
        tarea.closest('li').style.display = 'none';
    });
}



function guardarTareas() {
    const usuario = localStorage.getItem('usuario');
    let usuariosTareas = JSON.parse(localStorage.getItem('usuariosTareas')) || {};

    const tareas = Array.from(list.children).map(li => {
        const tarea = li.querySelector('span').innerText;
        const descripcion = li.querySelector('textarea').value;
        const priority = li.querySelector(`#priority${li.id.slice(4)}`).innerText;
        const completada = li.querySelector('span').classList.contains('text-decoration-line-through');
        return { tarea, descripcion, priority, completada };
    });

    usuariosTareas[usuario] = tareas;
    localStorage.setItem('usuariosTareas', JSON.stringify(usuariosTareas));
}

function cargarTareas() {
    const usuario = localStorage.getItem('usuario');
    let usuariosTareas = JSON.parse(localStorage.getItem('usuariosTareas')) || {};

    if (usuariosTareas[usuario]) {
        const tareas = usuariosTareas[usuario];
        tareas.forEach(obj => {
            list.innerHTML += `<li class="my-3 py-3 shadow list-group-item" id="list${listNum}">
                <div class="row">
                    <div class="col-1">
                        <input class="" type="checkbox" id="check${listNum}" onclick="done(${listNum})">
                    </div>
                    <div class="col-6">
                        <span class="h4" id="text${listNum}">${obj.tarea}</span>
                        <textarea class="my-2 py-2 form-control shadow" placeholder="Agregar descripción" id="description${listNum}" disabled>${obj.descripcion}</textarea>
                    </div>
                    <div class="col-3">
                        <span id="priority${listNum}">${obj.priority}</span>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-danger" onclick="deleteList(${listNum})">
                            <i class="fas fa-trash de" data="eliminado" id="0"></i>
                        </button>
                        <button class="btn btn-danger" onclick="editList(${listNum})">
                            <i class="far fa-circle co" data="realizado" id="0"></i>
                        </button>
                    </div>
                </div>
            </li>`;
            listNum++;
        });
    }
}

function cerrarSesion() {
    guardarTareas(); 
    localStorage.removeItem('usuario');
    window.location.href = 'finish.html'; 
}

window.addEventListener('beforeunload', function(event) {
    guardarTareas();
});
