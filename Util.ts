import { fakerPT_BR as faker } from '@faker-js/faker';

export class Util {
    
    static gerarNumeroAleatorio(minimo: number, maximo: number): number {
        return minimo + Math.round (Math.random() * (maximo - minimo))
    }

    static gerarNome(): string {
        const randomName = faker.person.firstName();
        return randomName;
    }
    
    static gerarEmail(nomeDoUsuario: string) {
        return faker.internet.email({firstName: nomeDoUsuario})
    }
}

for (let i = 0; i < 10; i++ ) {
    const nome = Util.gerarNome()
    const email = Util.gerarEmail(nome)
    console.log(nome, email)
}
