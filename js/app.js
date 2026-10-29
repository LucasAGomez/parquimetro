import { Parquimetro } from './classes.js';
import { 
    opcoesTarifa, 
    buscarTarifaPorValor, 
    criarOptionsSelect,
    formatarMoeda,
    limparCampos, 
    limparTextos 
} from './utils.js';

const parquimetro = new Parquimetro();
const selectHoras = document.getElementById("valor-horas");
const btnCalcular = document.getElementById("btn-calcular");

function inicializarSelect() {
    const placeholder = '<option value="" disabled selected>Selecione</option>';
    selectHoras.innerHTML = placeholder + criarOptionsSelect(opcoesTarifa);
}

function configurarEventos() {
    btnCalcular.addEventListener("click", () => {
        limparTextos();
        const deposito = parseFloat(document.getElementById("deposito").value);
        const valorSelecionado = parseInt(selectHoras.value);
        const tarifa = buscarTarifaPorValor(opcoesTarifa, valorSelecionado);

        if (!tarifa) {
            document.getElementById("res-mensagem").textContent = "Preencha valor e tempo";
            limparCampos();
            return;
        }
        
        const resultado = parquimetro.calcularResultado(deposito, tarifa);
        
        if (!resultado.sucesso) {
            document.getElementById("res-mensagem").textContent = resultado.mensagem;
            limparCampos();
            return;
        }
        
        document.getElementById("res-valor").textContent = `Valor depositado: ${formatarMoeda(resultado.deposito)}`;
        document.getElementById("res-horas").textContent = `Tempo solicitado ${resultado.tempoTexto}`;
        document.getElementById("res-troco").textContent = `Seu troco ${formatarMoeda(resultado.troco)}`;
        limparCampos();
    });
}

inicializarSelect();
configurarEventos();