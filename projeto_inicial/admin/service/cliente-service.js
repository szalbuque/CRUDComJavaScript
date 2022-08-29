

// Cria uma linha com os dados carregados
const linhaNovoCliente = document.createElement('tr')
const criaNovaLinha = (nome, email) => {
    const conteudo = `<td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
    `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

// buscar a tabela onde a linha do novo cliente será inserida
const tabela = document.querySelector('[data-tabela')

const listaClientes = () => {
    // Cria uma promise
    const promise = new Promise((resolve,reject) => {
         // Cria uma instância de objeto XMLHttpRequest
        const http = new XMLHttpRequest()
        // Abre a comunicação entre a aplicação e a API
        http.open('GET','http://localhost:3000/profile')
       
        // Executa uma função quando a página carregar
        http.onload = () => {
            // verificar se deu certo a chamada
            if (http.status >= 400) {
                reject(JSON.parse(http.response))
            } else {
                resolve(JSON.parse(http.response))
            }
        }
        // Envia a requisição
        http.send()
    })
    console.log(promise)
    return promise
}

// listaClientes vai devolver uma promessa, quando essa promessa for cumprida, executa a função que está dentro do then

listaClientes()
.then( data => {
    // para cada elemento recebido da API de dados, cria uma linha na tabela
    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email))
    })
})
    