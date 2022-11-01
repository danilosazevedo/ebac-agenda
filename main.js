const form = document.getElementById('input');
const tabela = document.querySelector('#table')
const nomes = [];
const tels = [];
const mails = [];

let linhas = '';


form.addEventListener('submit', function (e) {
    e.preventDefault();

    incluirContato();
    atualizaTabela();
});


function incluirContato() {

    const nome = document.getElementById('name');
    const tel = document.getElementById('tel');
    const mail = document.getElementById('email');

    if (nomes.includes(nome.value)) {
        alert('O nome já existe, verifique se já está na agenda ou inclua um sobrenome para diferenciá-lo dos outros contatos')
    } else {
        nomes.push(nome.value);
        tels.push(tel.value);
        mails.push(mail.value);


        let linha = '<tr id="linha">';
        linha += `<td> ${nome.value}</td>`;
        linha += `<td> ${tel.value}</td>`;
        linha += `<td> ${mail.value}</td>`;
        linha += '<td class="btn-del"><img src="./del.png" alt="lixeira" onclick="excluirContato(this.parentNode.parentNode.rowIndex)"></td>';
        linha += `</tr>`

        linhas += linha;
    }

    nome.value = '';
    tel.value = '';
    mail.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    const quant = document.querySelector('h2');
    corpoTabela.innerHTML = linhas;
    quant.innerHTML = nomes.length;
}


function excluirContato() {
    document.getElementById('linha').remove();

    const quant = document.querySelector('h2');
    nomes.shift();
    tels.shift();
    mails.shift();
    quant.innerHTML = nomes.length;
}