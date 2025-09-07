const receptor = document.getElementById("i_receptor");
const btn_form = document.getElementById("button_receptor");
const lista_tarefas = document.getElementById("lista");

// Função vai adicionar as tarefas na lista
const adicionar_tarefa = (event) => {
    event.preventDefault(); // Previnindo o reload da página
    
    // Cria li para dentro da lista com o valor do receptor
    const li = document.createElement("li");
    li.innerHTML = receptor.value;
    li.className = "pendente";
    
    // Cria o input para concluir tarefas
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const container_crud = document.createElement("div");
    container_crud.className = "container_crud";

    
    container_crud.appendChild(checkbox);
    li.appendChild(container_crud);
    lista_tarefas.appendChild(li);

    // Limpa o campo receptor
    receptor.value = "";
    
};

// Função vai concluir as tarefas
const conclui_tarefa =  (event) => {
    if(event.checked){
        event.parentElement.parentElement.className = "concluida"; // Pega a li pai do check selecionado e adiciona o estilo de conclusão
    } else {
        event.parentElement.parentElement.className = "pendente"; // Pega a li pai do check selecionado e adiciona o estilo de pendente
    } 
};

// Escutando o evento de clique e chamando a função `adicionar_tarefa`
btn_form.addEventListener("click", adicionar_tarefa);
lista_tarefas.addEventListener("change", (e) => {
    // Precisa de uma validação aqui, pois o checkbox é criado dinamicamente
    if(e.target.type === "checkbox"){        
        conclui_tarefa(e.target);
    }
});
