export function calculateDPS({
  damage,
  attacksPerSecond,
  critChance,
  critDamageBonus,
  magazineSize,
  reloadTime,
  targetHealth,
}) {
  const stats = {
    damage: Number(damage),
    attacksPerSecond: Number(attacksPerSecond),
    critChance: Number(critChance),
    critDamageBonus: Number(critDamageBonus),
    magazineSize: Number(magazineSize),
    reloadTime: Number(reloadTime),
  }

  if (Object.values(stats).some((value) => !Number.isFinite(value))) {
    throw new RangeError("Enter valid numbers for all weapon stats.")
  }

  if (stats.damage <= 0 || stats.attacksPerSecond <= 0 || stats.magazineSize < 1 || !Number.isInteger(stats.magazineSize)) {
    throw new RangeError("Damage, attack speed, and magazine size must be greater than zero; magazine size must be a whole number.")
  }

  if (stats.critChance < 0 || stats.critChance > 100 || stats.critDamageBonus < 0 || stats.reloadTime < 0) {
    throw new RangeError("Critical chance must be 0–100%; critical damage and reload time cannot be negative.")
  }

  const health = targetHealth === "" || targetHealth == null ? null : Number(targetHealth)
  if (health !== null && (!Number.isFinite(health) || health <= 0)) {
    throw new RangeError("Target health must be greater than zero, or left blank.")
  }

  const averageDamagePerHit =
    stats.damage * (1 + (stats.critChance / 100) * (stats.critDamageBonus / 100))
  const burstDPS = averageDamagePerHit * stats.attacksPerSecond
  const sustainedDPS =
    (averageDamagePerHit * stats.magazineSize) /
    (stats.magazineSize / stats.attacksPerSecond + stats.reloadTime)

  let timeToKill = null
  if (health !== null) {
    const hitsToKill = Math.ceil(health / averageDamagePerHit)
    const reloadsBeforeKill = Math.floor((hitsToKill - 1) / stats.magazineSize)
    const firingIntervals = hitsToKill - 1 - reloadsBeforeKill
    const firingTime = firingIntervals / stats.attacksPerSecond
    timeToKill = firingTime + reloadsBeforeKill * stats.reloadTime
  }

  return {
    burstDPS,
    sustainedDPS,
    averageDamagePerHit,
    timeToKill,
  }
}