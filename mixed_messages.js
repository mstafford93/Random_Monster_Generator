function getRandomNumber(num){
    return Math.floor(Math.random() * num)
}

const monsterVariables = {
    type: ['fire', 'ground', 'water', 'grass'],
    rarity: ['common', 'uncommon', 'rare'],
    level: ['1', '5', '10']
}

let yourMonster = [] //stores the info from mosterVariables


    //pushes type to yourMonster
    let tIndex = getRandomNumber(monsterVariables.type.length)

    yourMonster.push(`Your monster is a ${monsterVariables.type[tIndex]} type`)

    //pushes rarity to yourMonster
    let rIndex = getRandomNumber(monsterVariables.rarity.length)

    yourMonster.push(`They are ${monsterVariables.rarity[rIndex]}`)

    //pushes level to yourMonster
    let lIndex = getRandomNumber(monsterVariables.level.length)

    yourMonster.push(`Your monster is level ${monsterVariables.level[lIndex]}`)


    console.log(yourMonster) //test works up to here

