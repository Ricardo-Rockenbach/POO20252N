import { describe, expect, it } from "@jest/globals";
import { Conta } from "./Conta";

describe("Quando depositar", () => {
    it("Deve aceitar um depósito de um valor positivo", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 0;
        //Execução
        conta.depositar(100);
        //Validação
        expect(conta.saldo).toBe(100);
    })
    it("Não deve aceitar um depósito de um valor negativo", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 100;
        //Execução
        conta.depositar(-50);
        //Validação
        expect(conta.saldo).toBe(100);
    })     
})

describe("Quando sacar", () => {
    it("Não deve sacar valor negativo", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 100;
        
        //Validação
        expect(() => {conta.sacar(-50)}).toThrow("invalido");
    })
})