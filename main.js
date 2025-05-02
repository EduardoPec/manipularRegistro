const botaoAdicionar = document.getElementById("buttonAdicionar");
const botaoConsultar = document.getElementById("buttonConsultar");
const botaoExcluir = document.getElementById("buttonExcluir");
const botaoAlterar = document.getElementById("buttonAlterar");

let pessoas = [
    { nome: "João", idade: 30, profissao: "Desenvolvedor" },
];

let nomeInput = document.getElementById('nomeInput');
let idadeInput = document.getElementById('idadeInput');
let profissaoInput = document.getElementById('profissaoInput');
let infoElement = document.getElementById('info');

function adicionarPessoa() {
    let novoNome = nomeInput.value.trim();
    let novaIdade = parseInt(idadeInput.value);
    let novaProfissao = profissaoInput.value.trim();

    if (!novoNome || !novaProfissao || isNaN(novaIdade)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    if (novaIdade <= 0) {
        alert('A idade deve ser um número positivo.');
        return;
    }

    pessoas.push({ nome: novoNome, idade: novaIdade, profissao: novaProfissao });
    exibirPessoas();
    limparCampos();
    alert('Pessoa adicionada com sucesso!');
}

function consultarPessoa() {
    let nomeConsultado = nomeInput.value.trim();

    if (!nomeConsultado) {
        alert('Por favor, digite um nome para consultar.');
        return;
    }

    let pessoaEncontrada = pessoas.find(pessoa => pessoa.nome.toLowerCase() === nomeConsultado.toLowerCase());

    if (pessoaEncontrada) {
        idadeInput.value = pessoaEncontrada.idade;
        profissaoInput.value = pessoaEncontrada.profissao;
    } else {
        alert("Registro não encontrado!");
        limparCampos();
    }
}

function excluirPessoa() {
    let nomeConsultado = nomeInput.value.trim();

    if (!nomeConsultado) {
        alert("Por favor, digite um nome para excluir.");
        return;
    }

    let pessoaIndice = pessoas.findIndex(pessoa => pessoa.nome.toLowerCase() === nomeConsultado.toLowerCase());

    if (pessoaIndice >= 0) {
        pessoas.splice(pessoaIndice, 1);
        exibirPessoas();
        limparCampos();
        alert('Pessoa excluída com sucesso!');
    } else {
        alert("Registro não encontrado!");
    }
}

function alterarPessoa() {
    let nomeConsultado = nomeInput.value.trim();
    let novaIdade = parseInt(idadeInput.value);
    let novaProfissao = profissaoInput.value.trim();

    if (!nomeConsultado || !novaProfissao || isNaN(novaIdade)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    let pessoaIndice = pessoas.findIndex(pessoa => pessoa.nome.toLowerCase() === nomeConsultado.toLowerCase());

    if (pessoaIndice >= 0) {
        pessoas[pessoaIndice].idade = novaIdade;
        pessoas[pessoaIndice].profissao = novaProfissao;
        exibirPessoas();
        alert('Pessoa alterada com sucesso!');
    } else {
        alert("Registro não encontrado!");
    }
}

function exibirPessoas() {
    infoElement.innerHTML = '';

    if (pessoas.length === 0) {
        infoElement.innerHTML = '<p>Nenhuma pessoa cadastrada.</p>';
        return;
    }

    pessoas.forEach(pessoa => {
        let pessoaElement = document.createElement('div');
        pessoaElement.className = 'pessoa-item';
        pessoaElement.innerHTML = `
            <p><strong>Nome:</strong> ${pessoa.nome}</p>
            <p><strong>Idade:</strong> ${pessoa.idade}</p>
            <p><strong>Profissão:</strong> ${pessoa.profissao}</p>
            <hr>
        `;
        infoElement.appendChild(pessoaElement);
    });
}

function limparCampos() {
    nomeInput.value = '';
    idadeInput.value = '';
    profissaoInput.value = '';
}

exibirPessoas();

botaoAdicionar.addEventListener("click", adicionarPessoa);
botaoConsultar.addEventListener("click", consultarPessoa);
botaoExcluir.addEventListener("click", excluirPessoa);
botaoAlterar.addEventListener("click", alterarPessoa);