const receptor = document.getElementById("i_receptor");
const btn_form = document.getElementById("button_receptor");
const lista_tarefas = document.getElementById("lista");

// Função vai adicionar as tarefas na lista
const adicionar_tarefa = (event) => {
    event.preventDefault(); // Previnindo o reload da página

    // Cria li para dentro da lista com o valor do receptor
    const li = document.createElement("li");
    li.innerHTML = receptor.value;
    lista_tarefas.appendChild(li);

    // Limpa o campo receptor
    receptor.value = "";

};


// Escutando o evento de clique e chamando a função `adicionar_tarefa`
btn_form.addEventListener("click", adicionar_tarefa);
 