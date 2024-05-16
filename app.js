const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaLista = []


function addNovaTarefa() {
    minhaLista.push({
        tarefa: input.value,
        concluido: false
    
    })

    input.value = ''
   
    mostrarTarefas()
}




function mostrarTarefas() {
    
    let novaLi = ''

    minhaLista.forEach((item, index) => {

        novaLi = novaLi + 
        `
        
         <li class="task ${item.concluido && 'done'}">
                 <img src="ImagensWeb/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})"> 
                  <p>${item.tarefa}</p>
                 <img src="ImagensWeb/trash.png" alt="tarefa-para-lixeira" onclick="deletarItem(${index})">  
             </li>
        
        
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaLista))
}


function concluirTarefa(index) {
    minhaLista[index].concluido = !minhaLista[index].concluido
    
    mostrarTarefas()
    
}

function deletarItem(index) {
    minhaLista.splice(index, 1)
    
    mostrarTarefas()
}

function recarregarTarefa() {
    const tarefaDoLocalStorage = localStorage.getItem('lista')

    if(tarefaDoLocalStorage) {
        minhaLista = JSON.parse(tarefaDoLocalStorage)
    }

    minhaLista = JSON.parse(tarefaDoLocalStorage)
    console.log(tarefaDoLocalStorage)
    
    mostrarTarefas()
}

recarregarTarefa()
button.addEventListener('click', addNovaTarefa);

