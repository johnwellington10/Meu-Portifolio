const botaoMensagem = document.querySelector('.mensagem');
const mascara = document.querySelector('.mascara-form');
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

function abrirFormulario() {
    botaoMensagem.style.left = "850px"
    botaoMensagem.style.top = "300px"
    mascara.style.visibility = "visible"
    mascara.style.right = "0px"
};

function sumirFormulario() {
    botaoMensagem.style.left = "-340px"
    mascara.style.visibility = "hidden"
};

botaoMostrarProjetos.addEventListener('click', () => {

    mostrarMaisProjetos();

    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

var btnB = document.getElementById("botao-s");

btnB.addEventListener("click", function () {

    var divR = document.getElementById("descricao");

    if (divR.style.display === "block") {
        divR.style.display = "none"

    } else {
        divR.style.display = "block"
    }

});
