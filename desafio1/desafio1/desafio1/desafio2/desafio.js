let hero = {
  name: "Arali",
  class: "rogue",
  level:15,
  hp:200,
  pvpRounds: parseInt(Math.random() * 100),
  rankingPvp: 80
}

let ranking = {
  Ferro: 0,
    Bronze: 10,
    Prata: 30,
    Ouro: 50,
    Platina: 80,
    Diamante: 120,
    Imortal: 160
}

let battlePvp ={
  xpReward: 20,
  defeat: parseInt(Math.random() * 10)
}

// Criação de um sistema de cálculo de ranking Pvp
function calculatePvpRanking(points) {
  let currentRanking = "Ferro";
  for (let rank in ranking) {
    if (points >= ranking[rank]) {
      currentRanking = rank;
    }
  }
  return currentRanking;
}

let contadorDeRodadasPvP = 10;

for (let i = 0; i <= contadorDeRodadasPvP; i++) {
  
  console.log(`rodada ${i + 1} !`);
  battlePvp.defeat = parseInt(Math.random() * 10);

    if (battlePvp.defeat >= 7) {
    console.log (`${hero.name} venceu a batalha PvP e ganhou um total de ${battlePvp.xpReward} pontos de experiência!`);
    hero.rankingPvp += battlePvp.xpReward;
    console.log(`Agora ${hero.name} possui ${hero.rankingPvp} pontos de experiência totais`);
    console.log(`O atual ranking de ${hero.name} é ${calculatePvpRanking(hero.rankingPvp)}!`);
  } else  {
  console.log(`${hero.name} foi derrotado em batalha!`);
  hero.ranjkingPvp -= battlePvp.xpReward; 
  console.log(`Após sua derrota, a pontuação de ranking de ${hero.name} é de ${hero.rankingPvp} pontos!`);
  console.log(`A atual colocação de ${hero.name} no leaderboard é ${calculatePvpRanking(hero.rankingPvp)}!`);
  }
}