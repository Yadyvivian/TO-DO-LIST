const date = document.querySelector('#date')

const DATE = new Date ()
date.innerHTML = DATE.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})

let input = document.getElementById("inputText");
        let list= document.getElementById("list");
        let minimalValue = 3;
        let listNum = 0;
addList=()=>{
    // get
    let inputText = filterList(input.value);
    // set 
   if (inputText) {
    list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
                <div class="row">
                <div class="col-1">
                <input class="" type="checkbox" id="check${listNum}" onclick="done(${listNum})">
                </div>
                <div class="col-6">
                    <span class=" h4" id="text${listNum}"> ${inputText} </span>
                </div>
                <div class="col-4">
                     <button class=" btn btn-danger" onclick="deleteList(${listNum})"><i class="fas fa-trash de " data="eliminado" id="0"></i></i></button>
                     <button class=" btn btn-danger" onclick="editList(${listNum})"><i class="far fa-circle co " data="realizado" id="0"></i></button>
                </div>                  
                 </div>    
                </li> `;
        input.value=" ";
        listNum++;

   }
}

done=(listId)=>{ 
    let checkbox = document.getElementById(`check${listId}`);
    let current = document.getElementById(`text${listId}`);
    let classExit=current.classList.contains("text-decoration-line-through");
    if (classExit == true) {
        current.classList.remove("text-decoration-line-through");
    }else{
        current.classList.add("text-decoration-line-through");
    }
    
}

filterList=(x)=>{
       if (x) {
            if (x.length >= minimalValue) {
                return x;
            }
            else{
                alert("Please enter more than 3 words")
            }
       }
       else{
            return false;
       }
}

editList=(listId)=>{
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("¿Quieres cambiar esto de la lista?",currentText.innerHTML);
    if (filterList(newText)) {
        currentText.innerHTML = newText; 
    }
}

deleteList=(listId)=>{
    let current = document.getElementById(`text${listId}`).innerHTML;
       let deleteComfirm = confirm(`¿Estas seguro de eliminar esto? ${current}`);
    if (deleteComfirm) {
         let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
    }
    else{
        console.log("deleted");
    }
};

// Verificar si el usuario está autenticado
document.addEventListener('DOMContentLoaded', function() {
    const usuarioGuardado = localStorage.getItem('usuario');

    // Si no hay un usuario almacenado, redirigir a la página de inicio de sesión
    if (!usuarioGuardado) {
        window.location.href = 'index.html'; // Cambia 'index.html' por tu página de inicio de sesión
    }
});

// Función para cerrar la sesión
function cerrarSesion() {
    localStorage.removeItem('usuario');
    window.location.href = 'finish.html'; // Redirigir a la página de inicio de sesión
}