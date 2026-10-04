export function calculateXP(currentLevel, targetLevel, xpPerAction, minutesPerAction = 1) {
  const current = Number(currentLevel)
  const target = Number(targetLevel)
  const xp = Number(xpPerAction)
  const minutes = Number(minutesPerAction)

  if (!Number.isInteger(current) || current < 1) {
    throw new RangeError("Current level must be a whole number of 1 or higher.")
  }

  if (!Number.isInteger(target) || target <= current) {
    throw new RangeError("Target level must be a whole number greater than current level.")
  }

  if (!Number.isFinite(xp) || xp <= 0 || !Number.isFinite(minutes) || minutes <= 0) {
    throw new RangeError("XP and minutes per action must both be greater than zero.")
  }

  let xpNeeded = 0

  for (let level = current; level < target; level++) {
    xpNeeded += 100 * Math.pow(level, 2)
  }

  const actionsRequired = Math.ceil(xpNeeded / xp)
  const estimatedMinutes = Math.ceil(actionsRequired * minutes)

  return {
    xpNeeded,
    actionsRequired,
    estimatedMinutes,
  }
}