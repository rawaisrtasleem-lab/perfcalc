import { BLOX_FRUITS_BY_ID } from "./fruit-data"


export const FAIR_TRADE_THRESHOLD = 3
export const MAX_TRADE_ITEMS = 4


export function getItemValue(item) {
    const fruit = BLOX_FRUITS_BY_ID[item.fruitId]

    if (!fruit) {
        return 0
    }

    return item.variant === "permanent"
        ? fruit.permanentValue
        : fruit.physicalValue
}


export function calculateTotal(items = []) {
    return items.reduce(
        (total, item) => total + getItemValue(item),
        0
    )
}


export function calculateAverageDemand(items = []) {
    if (!items.length) {
        return 0
    }

    const totalDemand = items.reduce((total, item) => {
        const fruit = BLOX_FRUITS_BY_ID[item.fruitId]

        return total + (fruit?.demand || 0)
    }, 0)

    return totalDemand / items.length
}


export function analyzeTrade(yourItems = [], theirItems = []) {
    const yourTotal = calculateTotal(yourItems)
    const theirTotal = calculateTotal(theirItems)

    const yourDemand = calculateAverageDemand(yourItems)
    const theirDemand = calculateAverageDemand(theirItems)

    if (!yourItems.length || !theirItems.length || yourTotal <= 0) {
        return {
            status: "incomplete",
            label: "Incomplete",
            yourTotal,
            theirTotal,
            difference: theirTotal - yourTotal,
            percentage: 0,
            yourDemand,
            theirDemand,
            demandDifference: theirDemand - yourDemand,
        }
    }

    const difference = theirTotal - yourTotal

    const percentage =
        (difference / yourTotal) * 100

    let status = "fair"
    let label = "Fair Trade"

    if (percentage > FAIR_TRADE_THRESHOLD) {
        status = "win"
        label = "Win"
    }

    if (percentage < -FAIR_TRADE_THRESHOLD) {
        status = "loss"
        label = "Loss"
    }

    return {
        status,
        label,
        yourTotal,
        theirTotal,
        difference,
        percentage,
        yourDemand,
        theirDemand,
        demandDifference: theirDemand - yourDemand,
    }
}


export function formatTradeValue(value = 0) {
    const absValue = Math.abs(value)

    if (absValue >= 1000000000) {
        return `${formatDecimal(value / 1000000000)}B`
    }

    if (absValue >= 1000000) {
        return `${formatDecimal(value / 1000000)}M`
    }

    if (absValue >= 1000) {
        return `${formatDecimal(value / 1000)}K`
    }

    return Math.round(value).toLocaleString("en-US")
}


function formatDecimal(value) {
    return Number(
        value.toFixed(2)
    ).toString()
}