class Heroi {
    constructor(name, tipo, nivel, ranking) {
        this.name = name;
        this.tipo = tipo;
        this.nivel = nivel;
        // O construtor atribui o HP retornado pelo método
        this.hp = this.calcularHp();
        this.ranking = ranking;
    }

    // Este método agora retorna o valor de HP, em vez de atribuí-lo
    calcularHp() {
        if(this.tipo === "Mago") {
            return 90 + (this.nivel * 3);
        } else if(this.tipo === "Paladino") {
            return 150 + (this.nivel * 7);
        } else if(this.tipo === "Arqueiro") {
            return 70 + (this.nivel * 4);
        }
    }

    // O método de ataque agora retorna um objeto com mensagem e dano
    atacar() {
        let ataqueRoll = parseInt(Math.random() * 20) + 1;
        let ataqueDano;
        let tipoDeAtaque = "";
        
        // Corrigido para aspas duplas nos cases
        switch(this.tipo) {
            case "Mago":
                if(ataqueRoll >= 16) {
                    tipoDeAtaque = (`${this.name} invoca a Loucura de Karsus e utilizando o poder dos próprios Deuses, \n re-escreve a realidade, destruindo o monstro a sua frente!`);
                    ataqueDano = 50 + ataqueRoll + this.nivel;
                } else if(ataqueRoll > 10) {
                    tipoDeAtaque = (`${this.name} toca o véu oculto da magia e convoca uma esfera de fogo infernal`);
                    ataqueDano = 30 + ataqueRoll + this.nivel;
                } else if(ataqueRoll > 5) {
                    tipoDeAtaque = (`${this.name} se concentra e dispara um poderoso relampago`);
                    ataqueDano = 20 + ataqueRoll + this.nivel;
                } else {
                    tipoDeAtaque = (`${this.name} utilizou uma mágia simples`);
                    ataqueDano = 10 + ataqueRoll + this.nivel;
                }
                break;
            case "Paladino":
                if(ataqueRoll >= 16) {
                    tipoDeAtaque = (`${this.name} Usa Divine Smite, fazendo com que os céus se abram e se encham de luz, \n fazendo a própria luz se materializar e golpear o inimigo à sua frente`);
                    ataqueDano = 50 + ataqueRoll + this.nivel;
                } else if(ataqueRoll > 10) {
                    tipoDeAtaque = (`${this.name} Roga para os Deuses embuirem sua arma com habilidades divinas \n disparando um poderoso golpe`);
                    ataqueDano = 30 + ataqueRoll + this.nivel;
                } else if(ataqueRoll > 5) {
                    tipoDeAtaque = (`${this.name} Utilizando seu enormeescudo, avança como uma parede contra o inimigo`);
                    ataqueDano = 20 + ataqueRoll + this.nivel;
                } else {
                    tipoDeAtaque = (`${this.name} Ataca pesadamente com sua maça`);
                    ataqueDano = 10 + ataqueRoll + this.nivel;
                }
                break;
            case "Arqueiro":
                if(ataqueRoll >= 16) {
                    tipoDeAtaque = (`${this.name} Se torna um com o vento e desaparece, reaparecendo atrás do inimigo \n disparando uma flecha certeira no ponto vital do inimigo`);
                    ataqueDano = 50 + ataqueRoll + this.nivel;
                } else if(ataqueRoll > 10) {
                    tipoDeAtaque = (`${this.name} Pega várias flechas e dispara uma saraivada de flechas no inimigo`);
                    ataqueDano = 30 + ataqueRoll + this.nivel;
                } else if(ataqueRoll > 5) {
                    tipoDeAtaque = (`${this.name} Dispara uma flecha no inimigo`);
                    ataqueDano = 20 + ataqueRoll + this.nivel;
                } else {
                    tipoDeAtaque = (`${this.name} Utiliza um ataque a curta distância com sua adaga`);
                    ataqueDano = 10 + ataqueRoll + this.nivel;
                }
                break;
            default:
                tipoDeAtaque = (`${this.name} não possui um tipo válido de ataque`);
                ataqueDano = 0;
        }
        return { mensagem: tipoDeAtaque, dano: ataqueDano };
    }

    // Método para calcular o dano recebido
    receberDano(dano) {
        this.hp -= dano;
        if (this.hp <= 0) {
            this.hp = 0;
            console.log(`${this.name} foi derrotado!`);
        }
    }

    ranking() {
        if(this.ranking >= 0 && this.ranking < 10) {
            this.ranking = "Ferro";
        } else if(this.ranking >= 10 && this.ranking < 30) {
            this.ranking = "Bronze";
        } else if(this.ranking >= 30 && this.ranking < 50) {
            this.ranking = "Prata";
        } else if(this.ranking >= 50 && this.ranking < 80) {
            this.ranking = "Ouro";
        } else if(this.ranking >= 80 && this.ranking < 120) {
            this.ranking = "Platina";
        } else if(this.ranking >= 120 && this.ranking < 160) {
            this.ranking = "Diamante";
        } else {
            this.ranking = "Imortal";
        }
    }
}

//Criação da classe Monstro
class Monstro {
    constructor(nome, tipo, hp, danoBase) {
        this.name = nome;
        this.tipo = tipo;
        this.hp = hp;
        this.danoBase = danoBase;
    }

    atacar() {
        let ataqueRoll = parseInt(Math.random() * 80) + 1;
        let ataqueDano = this.danoBase + ataqueRoll; // Dano baseado no danoBase
        let tipoAtaque = "";

        switch(this.tipo) {
            case "Morto-Vivo":
                if(ataqueRoll >= 60) {
                    tipoAtaque = `se torna um com a escuridão e se torna um poderoso Lich, \n capaz de usar um toque gélido que congela o próprio espírito do herói!`;
                } else if(ataqueRoll > 40) {
                    tipoAtaque = `faz seu coração pulsar com energia necromântica, fortalecendo seus músculos, \n fazendo com que ele desfira um poderoso golpe`;
                } else if(ataqueRoll > 20) {
                    tipoAtaque = `projeta uma rajada de vomito ácido e venenoso`;
                } else {
                    tipoAtaque = `avançou contra o herói e o mordeu`;
                }
                break;
            case "Quimera":
                if(ataqueRoll >= 60) {
                    tipoAtaque = `usa sua cauda de serpente para envenenar o herói, injetando um veneno mortal \n que corrói a carne e o espírito do herói!`;
                } else if(ataqueRoll > 40) {
                    tipoAtaque = `abre suas asas e alça vôo, lançando uma chuva de fogo sobre o herói`;
                } else if(ataqueRoll > 20) {
                    tipoAtaque = `utilizando suas poderosas patas, salta em direção ao herói e o morde com sua cabeça de leão`;
                } else {
                    tipoAtaque = `investiu contra o herói utilizando seus chifres de bode`;
                }
                break;
            case "Drácula":
                if(ataqueRoll >= 60) {
                    tipoAtaque = `se transforma em uma criatura de sombra absoluta e ataca o herói com um golpe avassalador!`;
                } else if(ataqueRoll > 40) {
                    tipoAtaque = `abre sua capa e invocando as chamas infernais, dispara uma esfera de fogo`;
                } else if(ataqueRoll > 20) {
                    tipoAtaque = `agarra o herói e suga uma parcela do seu sangue, enfraquecendo-o`;
                } else {
                    tipoAtaque = `atacou o herói com suas garras afiadas e sedentas por sangue`;
                }
                break;
            default:
                    tipoAtaque = `não possui um tipo válido de ataque`;
        }
        return { mensagem: `O ${this.tipo} ${tipoAtaque}`, dano: ataqueDano };
    }
}

// Função auxiliar de ranking
let rankingTabela = {
    Ferro: 0,
    Bronze: 10,
    Prata: 30,
    Ouro: 50,
    Platina: 80,
    Diamante: 120,
    Imortal: 160,
};

function calculatePvpRanking(points) {
    let currentRanking = 'Ferro';
    for (let rank in rankingTabela) {
        if (points >= rankingTabela[rank]) {
            currentRanking = rank;
        }
    }
    return currentRanking;
}

//Função para gerar monstros baseados no ranking do herói.
function gerarMonstro(heroi) {
    let rankAtual = calculatePvpRanking(heroi.ranking);
    let nivelBase = rankingTabela[rankAtual];

    let hpMonstro = 100 + (nivelBase * 5);
    let danoMonstro = 5 + (nivelBase * 3);

    let monstroRank = {
        Ferro: ["Morto-Vivo", "Quimera"],
        Bronze: ["Morto-Vivo", "Quimera"],
        Prata: ["Quimera"],
        Ouro: ["Quimera"],
        Platina: ["Quimera"],
        Diamante: ["Quimera", "Drácula"],
        Imortal: ["Drácula"]
    };
    
    let tiposDisponiveis = monstroRank[rankAtual] || monstroRank["Ferro"];
    let tipoAleatorio = tiposDisponiveis[Math.floor(Math.random() * tiposDisponiveis.length)];

    return new Monstro(tipoAleatorio, tipoAleatorio, hpMonstro, danoMonstro);
}

//Método de combate
function iniciarCombate(heroi, monstro) {
    console.log(`--- Monstro encontrado, início de Combate! ---`);
    console.log(`O herói ${heroi.name}, um ${heroi.tipo}, se depara com um ${monstro.tipo}!`);

    let rodada = 1;
    while( heroi.hp > 0 && monstro.hp > 0) {
        console.log(`\n--- Rodada ${rodada} ---`);
        // Herói ataca
        let ataqueHeroi = heroi.atacar();
        monstro.hp -= ataqueHeroi.dano;
        console.log(`O herói atacou! \n ${ataqueHeroi.mensagem} \n${monstro.name} recebeu ${ataqueHeroi.dano} de dano e possui HP restante de: ${monstro.hp}`);

        if (monstro.hp <= 0) {
            console.log(`${monstro.name} foi derrotado!`);
            heroi.ranking += 10;
            // A sua função 'ranking()' não deve ser chamada assim, ela não retorna nada e muda o tipo do rank para string
            // O ideal é manter a pontuação em número e usar a função calculatePvpRanking para exibir
            return "vitoria";
        }

        // Monstro ataca
        let monstroAtaque = monstro.atacar();
        heroi.hp -= monstroAtaque.dano;
        console.log(`O monstro atacou! \n ${monstroAtaque.mensagem} \n${heroi.name} recebeu ${monstroAtaque.dano} de dano e possui HP restante de: ${heroi.hp}`);

        if (heroi.hp <= 0) {
            console.log(`${heroi.name} foi derrotado e as forças das trevas avançam sob a humanidade...`);
            return "derrota";
        }
        rodada++;
    }
}

//Lógica teste do jogo
const heroiAventureiro = new Heroi("Ostrak", "Arqueiro", 5, 40);
console.log(`Personagem criado: ${heroiAventureiro.name}, Classe: ${heroiAventureiro.tipo}, \nNivel: ${heroiAventureiro.nivel}, Hp: ${heroiAventureiro.hp}, Rank: ${calculatePvpRanking(heroiAventureiro.ranking)}`);

let aventuras = 5;
for (let i = 0; i < aventuras; i++) {
    heroiAventureiro.hp = heroiAventureiro.calcularHp(); // Restaura o HP do herói antes de cada encontro
    console.log(`\n--- Aventura ${i + 1} ---`);
    console.log(`O herói aventureiro está descansado e pronto para a próxima batalha!`);

    let monstroAtual = gerarMonstro(heroiAventureiro);

    let resultado = iniciarCombate(heroiAventureiro, monstroAtual);

    if (resultado === "vitoria") {
        console.log(`Após uma dura batalha, ${heroiAventureiro.name} saiu vitorioso!`);
        heroiAventureiro.ranking += 20; // Recompensa por vitória
    } else {
        console.log(`Sentindo o gosto metálico de sangue na boca e com a visão turva, a última coisa que \n${heroiAventureiro.name} vê, é a criatura ${monstroAtual.tipo} banqueteando-se de suas vísceras!`);
        heroiAventureiro.ranking -= 10; // Penalidade por derrota
    }

    console.log(`--- Fim da aventura ${i + 1} ---`);
    console.log(`Status do herói: Pontuação: ${heroiAventureiro.ranking}, Ranking: ${calculatePvpRanking(heroiAventureiro.ranking)}`);
}