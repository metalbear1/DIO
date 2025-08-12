let hero = {
    name: "Ordek",
    class:"Druida",
    xp: 7388,
    hp: 200,
    spellSlots: 6,
    dungeonRNG: parseInt(Math.random() * 10)
}

let contador = 10;

let monster = {
  name: "Ozymand, The Lich",
  xpReward: 2000,
  defeat: parseInt(Mathrandom() * contador)
}

if (monster.defeat >= 8) {
  console.log(`${hero.name} derrotou ${monster.name} e ganhou ${monster.xpReward} pontos totais de experiência!`);
  hero.xp += monster.xpReward;
  console.log(`Agora ${hero.name} possui ${hero.xp} pontos totais de experiência! Alcançando assim o nível Imortal!`);
}