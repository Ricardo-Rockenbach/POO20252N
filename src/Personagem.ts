import { Util } from "./Util";

export class Personagem{
    nome: string;
    classe: string;
    raca: string;
    nivel: number;
    arma: string;
    manaAtual: number;
    manaMaxima: number;
    vidaAtual: number;
    vidaMaxima: number;
    poderAtaque: number;


    constructor (nome:string) {
    this.nome = nome;
    this.classe = "";
    this.raca = "";
    this.nivel = 0;
    this.arma = "";
    this.manaAtual = 0;
    this.manaMaxima = 0;
    this.vidaAtual = 0;
    this.vidaMaxima = 0;
    this.poderAtaque = 0;
    }
    
    treinarPoderAtaque (): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5,15);
        this.poderAtaque += incrementoDoTreino + this.poderAtaque * 1.1;
    }   

    estaVivo() {
        return (this.vidaAtual > 0)
        }

    receberDano(tipoDano: string ): void {
        let danoGerado: number;

        switch (tipoDano) {
            case "LEVE":
                danoGerado = Util.gerarNumeroAleatorio(1, 18);
                break;
            case "MODERADO":
                danoGerado = Util.gerarNumeroAleatorio(19, 29); 
                break;
            case "PESADO":
                danoGerado = Util.gerarNumeroAleatorio(30, 45);
                break;
            default:
                console.log("Tipo de dano inválido!");
                return;
        }

        this.vidaAtual -= danoGerado;
        if (this.vidaAtual < 0) {
            this.vidaAtual = 0;
        }
        console.log(`O personagem ${this.nome} recebeu ${danoGerado} de dano (${tipoDano}). Vida atual: ${this.vidaAtual}/${this.vidaMaxima}`);
    } 
    
    encontrarEquipamento(): void {
        const equipamentosPossiveis: string[] = ["Espada Longa", "Arco Curto", "Cajado Mágico", "Adaga", "Machado de Batalha", "Mareta do Chapolin"];
        const equipamentoEncontrado: string = equipamentosPossiveis[Util.gerarNumeroAleatorio(0, equipamentosPossiveis.length - 1)]!;
        this.arma = equipamentoEncontrado;
        console.log(`O personagem ${this.nome} encontrou um novo equipamento: ${equipamentoEncontrado}`);
    }
    
}