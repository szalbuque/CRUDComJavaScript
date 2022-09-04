// neste arquivo está tudo que se relaciona à visualização e à API - faz a ligação

import { clienteService } from '../service/cliente-service.js'

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

// listaClientes vai devolver uma promessa, quando essa promessa for cumprida, executa a função que está dentro do then

clienteService.listaClientes()
.then( data => {
    // para cada elemento recebido da API de dados, cria uma linha na tabela
    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email))
    })
})