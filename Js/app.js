//criar a função para coletar o cep
function Coletar() {
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
}

//função para consumir API via cep 
async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)
}

//Função Inserir dados na tabela
function ExibirDados(dados) {
    document.querySelector('.Estado').value = dados.uf
    document.querySelector('.Cidade').value = dados.localidade
    document.querySelector('.Endereço').value = dados.logradouro
    document.querySelector('.DDD').value = dados.ddd

}

function BotaoLimpar(dados) {
    document.querySelector('.Estado').value = ""
    document.querySelector('.Cidade').value = ""
    document.querySelector('.Endereço').value = ""
    document.querySelector('.DDD').value = ""
}