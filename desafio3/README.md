# RPG de Aventura em javaScript

Sobre o Projeto
Este é um projeto que representa o terceiro desafio proposto pelo Prof.Renato da DIO
em seu curso de Lógica da Programação. O projeto de jogo de RPG simples, cosntruido em JavaScript com auxílio do material da aula e correção através do Gemini, demonstra conceitos fundamentais de POO (Programação Orientada a Objetos). O jogo simula aventuras de um herói, que enfrenta mosntros cada vez mais desafiadores de acordo com seu ranking.

O código foi criado do zero, mas levando os outros dois desafios como molde inicial.

## Tecnologias utilizadas
* Classes e Objetos
* Métodos e Construtores
* Estruturas de decisão(if/else, switch)
* Estruturas de repetição (for, while)
* Funções e Lógicas de Jogo

## Funcionalidades Principais.

1. Classes de Herói e Monstro
  * A classe Herói define as propriedades (nome, tipo, nível, HP, rank) e comportamentos como atacar e receberDano do personagem jogável.
  * A classe monstro define as propriedades e comportamento do inimigo.
2. Geração Dinâmica de Monstros:
  * A função gerarMonstro() cria monstros com HP e dano que escalam automaticamente com base no ranking atual do herói. Isso garante que as batalhas se tornem mais desafiadoras, conforme o rank do herói aumente.
3. Sistema de combate por Turnos:
  * A função iniciarCombate() simula uma batalha completa, onde o herói e o monstro se revezam para atacar até que um deles seja derrotado.
  * Cada ataque possui um dano aleatório e uma descrição única, baseada no tipo de personagem
  * A lógica de dano e atualização do HP são calculadas a cada turno.
4. Sistema de Ranking
  * A pontuação de ranking do herói aumenta a cada vitória e diminui com a derrota
  * A função calculatePvPRanking() converte a pontuação numérica em um rank textual (Ferro, Bronze, Prata, etc...)

## Estrutura do Código
O projeto está contido em um único arquivo .js, que está divido em seções lógicas:
 * Classes: Herói e Monstro
 * Funções Auxiliares: Funções como calculatePvPRanking() e gerarMonstro() que ajudam a organizar a lógica do jogo
 * Lógica do jogo principal: O loop principal que cria o herói, simula as aventuras e exibe o progresso no console.

 # Como executar o código?
Para rodar este jogo, é necessário ter o Node.js instalado na máquina
 1. Salve o código em um arquivo chamado jogo.js
 2. Abra seu terminal ou prompt de comando.
 3. Navegue até o diretório onde você salvou o arquivo
 4. Execute o comando:
 ```
 Bash
 node jogo.js
 ```
 5. Acompanhe o desenrolar da aventura diretamente no console!
```
Personagem criado: Ostrak, Classe: Arqueiro, 
Nivel: 5, Hp: 90, Rank: Prata

--- Aventura 1 ---
O herói aventureiro está descansado e pronto para a próxima batalha!
--- Monstro encontrado, início de Combate! ---
O herói Ostrak, um Arqueiro, se depara com um Quimera Quimera!

--- Rodada 1 ---
O herói atacou! 
 Ostrak utiliza um ataque a curta distância com sua adaga
Quimera recebeu 15 de dano e possui HP restante de: 135
O monstro atacou! 
 O Quimera investiu contra o herói utilizando seus chifres de bode
Ostrak recebeu 20 de dano e possui HP restante de: 70
... (O combate continua) 
```

## Possiveis Melhorias
Este projeto pode ser expandido de várias formas para se tornar um jogo mais completo:
 * Sistema de nível XP: Adicionar pontos de experiência por vitória e fazer o herói subir de nível.
 * Inventário e Equipamentos: Criar classes para itens (armas, armaduras) que afetem as estatísticas do herói.
 * Interface Gráfica (GUI): Utilizar bibliotecas como p5.js ou frameworks tais como react para criar uma interface visual
 * REfatoração do Còdigo: Dividir o código em arquivos separados para cada classe e função, tornando o projeto modular!

 Feito por ***Marco Antônio***