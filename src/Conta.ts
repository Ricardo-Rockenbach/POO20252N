export class Conta {
    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("Dado invalido para saque");
        }
        this.saldo -= valor;
    }
    saldo: number = 0;
    
    depositar(valor: number): void {
        if (valor >= 0) {
            this.saldo += valor;
        }
    }

    extrato(): number {
        return this.saldo;
    }   
}

