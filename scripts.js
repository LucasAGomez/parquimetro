class Parquimetro {
    constructor() {
        this.valorMinimo = 1;
        this.valorHora = 2;
    }

    resultado() {
        this.limparTextos()
        const selecao = document.getElementById("valor-horas");
        this.valorDeposito = parseFloat(document.getElementById("deposito").value);
        this.valorCobrado = parseInt(selecao.value);
        this.tempo = selecao.options[selecao.selectedIndex].text;
        this.troco = this.valorDeposito - this.valorCobrado;

        if (isNaN(this.valorDeposito) || isNaN(this.valorCobrado)) {
            document.getElementById("res-mensagem").textContent = "Preencha valor e tempo";
            this.limparCampos();
            return;
        }

        if (this.troco < 0 || this.valorDeposito < this.valorMinimo) {
            document.getElementById("res-mensagem").textContent = "Valor depositado insuficiente para estacionar";
        } else {
            document.getElementById("res-valor").textContent = `Valor depositado: R$${this.valorDeposito.toFixed(2)}`;
            document.getElementById("res-horas").textContent = `Tempo solicitado ${this.tempo}`;
            document.getElementById("res-troco").textContent = `Seu troco ${this.troco.toFixed(2)}`;
            this.limparCampos();
        }
    }
    
    limparTextos() {
        document.getElementById("res-valor").textContent = "";
        document.getElementById("res-horas").textContent = "";
        document.getElementById("res-troco").textContent = "";
        document.getElementById("res-mensagem").textContent = "";
    }
    
    limparCampos() {
        document.getElementById("deposito").value = "";
        document.getElementById("valor-horas").selectedIndex = 0;
    }
}

const parquimetro = new Parquimetro()