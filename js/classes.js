import { calcularTroco } from './utils.js';

export class Parquimetro {
    constructor() {
        this.valorMinimo = 1;
    }

    validar(deposito, cobrado) {
        if (isNaN(deposito) || isNaN(cobrado)) {
            return { valido: false, mensagem: "Preencha valor e tempo" };
        }
        if (deposito < this.valorMinimo) {
            return { valido: false, mensagem: `Recarga mínima R$${this.valorMinimo.toFixed(2)}` };
        }
        const troco = calcularTroco(deposito, cobrado);
        if (troco < 0) {
            return { valido: false, mensagem: "Valor depositado insuficiente para estacionar" };
        }
        return { valido: true, troco };
    }

    calcularResultado(deposito, tarifa) {
        const validacao = this.validar(deposito, tarifa.valor);
        if (!validacao.valido) {
            return { sucesso: false, mensagem: validacao.mensagem };
        }
        return {
            sucesso: true,
            deposito,
            tempoTexto: tarifa.texto,
            troco: validacao.troco
        };
    }
}