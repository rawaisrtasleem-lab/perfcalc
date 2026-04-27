export function calculateXP(currentLevel,targetLevel,xpPerAction){

currentLevel = Number(currentLevel)
targetLevel = Number(targetLevel)

let xpNeeded = 0

for(let level=currentLevel; level<targetLevel; level++){

xpNeeded += 100 * Math.pow(level,2)

}

const actionsRequired = Math.ceil(xpNeeded / xpPerAction)

return {
xpNeeded,
actionsRequired
}

}