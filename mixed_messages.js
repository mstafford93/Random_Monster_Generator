function getRandomNumber(num){
    return Math.floor(Math.random() * num)
}

const monsterVariables = {
    type: ['fire', 'ground', 'water', 'grass', 'electric', 'dark'],
    rarity: ['common', 'uncommon', 'rare'],
    level: ['1', '5', '10', '20']
}

let yourMonster = [] //stores the info from mosterVariables
let yourEncounter = []


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

    switch(monsterVariables.level[lIndex]){
        case '1':
            yourEncounter.push (`You hatched a level ${monsterVariables.level[lIndex]}, ${monsterVariables.rarity[rIndex]}, ${monsterVariables.type[tIndex]} type`)
            break
        case '5':
            yourEncounter.push (`Your starter monster is a level ${monsterVariables.level[lIndex]}, ${monsterVariables.rarity[rIndex]}, ${monsterVariables.type[tIndex]} type`)
            break
        case '10':
            yourEncounter.push (`You caught a level ${monsterVariables.level[lIndex]}, ${monsterVariables.rarity[rIndex]}, ${monsterVariables.type[tIndex]} type`)
            break
        case '20':
            yourEncounter.push (`You ran from a level ${monsterVariables.level[lIndex]}, ${monsterVariables.rarity[rIndex]}, ${monsterVariables.type[tIndex]} type`)
            break
        default:
            yourEncounter.push ('You wander around the wild looking for monsters')

    }

    console.log(yourEncounter)
