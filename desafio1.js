let hero = {
    name: "Ordek",
    class:"Druida",
    xp: 7388,
    hp: 200,
    spellSlots: 6,
}

let contador = 10;

let monster = {
  name: "Ozymand, The Lich",
  xpReward: 2000,
  defeat: parseInt(Math.random() * contador)
}

if (monster.defeat >= 5) {
  console.log(`${hero.name} derrotou ${monster.name} e ganhou ${monster.xpReward} pontos totais de experiência!`);
  hero.xp += monster.xpReward;
  console.log(`Agora ${hero.name} possui ${hero.xp} pontos totais de experiência! Alcançando assim o nível Imortal!`);
} else {
  console.log(`${hero.name} foi derrotado e se encontra afogando-se em uma poça de seu próprio sangue!`);
  console.log(`O herói ${hero.name} perdeu ${monster.xpReward} pontos totais de experiência!`);
  hero.xp -= monster.xpReward;
}