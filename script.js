const listaTarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(listaTarefas));
}

CarregarLista();

function CarregarLista() {
  let lista = document.getElementById('lista'); 
  lista.innerHTML = ""

listaTarefas.forEach((tarefa, indice) => {
    let item = document.createElement('li')
    item.textContent = tarefa
    item.classList.add('item-tarefa')

    let btnEditar = document.createElement('button')
    btnEditar.textContent = 'Editar'
    btnEditar.onclick = () => editar(indice)
    btnEditar.classList.add('botao-editar')

    let btnExcluir = document.createElement('button')
    btnExcluir.textContent = 'Excluir'
    btnExcluir.onclick = () => excluir(indice)
    btnExcluir.classList.add('botao-excluir')

    item.appendChild(btnEditar)
    item.appendChild(btnExcluir)
    lista.appendChild(item)
});
}

function adicionar() {
    let tarefa = document.getElementById('tarefa').value
    if (tarefa !== '') {
        listaTarefas.push(tarefa)
        document.getElementById('tarefa').value = ''
        salvarTarefas()
        CarregarLista()
    }   
}

function editar(indice){
    let novaTarefa = prompt('Digite a nova tarefa')
    if (novaTarefa !== null && novaTarefa !== '') {
        listaTarefas[indice] = novaTarefa
        salvarTarefas()
        CarregarLista()
    }
}

function excluir(indice) {
    listaTarefas.splice(indice, 1)
    salvarTarefas()
    CarregarLista()
}