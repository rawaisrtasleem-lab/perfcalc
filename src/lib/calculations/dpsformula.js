export function calculateDPS(
damage,
attackSpeed,
critChance,
critDamage
){

const base = damage * attackSpeed

const critMultiplier =
1 + (critChance/100) * (critDamage/100)

return base * critMultiplier

}