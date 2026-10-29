export const opcoesTarifa = [
    { valor: 1, texto: "30 minutos" },
    { valor: 2, texto: "1 hora" },
    { valor: 3, texto: "1h 30 minutos" },
    { valor: 4, texto: "2 Horas" },
    { valor: 5, texto: "2hs 30 minutos" },
    { valor: 6, texto: "3 horas" }
];

export function calcularTroco(deposito, cobrado) {
    return deposito - cobrado;
}

export function formatarMoeda(valor) {
    return `R$${valor.toFixed(2)}`;
}

export function criarOptionsSelect(lista) {
    return lista.map(opcao => `<option value="${opcao.valor}">${opcao.texto}</option>`).join("");
}

export function buscarTarifaPorValor(lista, valorBuscado) {
    return lista.find(item => item.valor === valorBuscado);
}

export function limparCampos() {
    document.getElementById("deposito").value = "";
    document.getElementById("valor-horas").selectedIndex = 0;
}

export function limparTextos() {
    document.getElementById("res-valor").textContent = "";
    document.getElementById("res-horas").textContent = "";
    document.getElementById("res-troco").textContent = "";
    document.getElementById("res-mensagem").textContent = "";
}