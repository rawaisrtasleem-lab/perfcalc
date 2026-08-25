"use client"

import { useMemo, useState } from "react"

import FruitSelector from "./FruitSelector"
import TradeResult from "./TradeResult"
import TradeSide from "./TradeSide"

import {
    BLOX_FRUITS,
    VALUE_UPDATED_AT,
} from "@/lib/blox-fruits/fruit-data"

import {
    analyzeTrade,
    MAX_TRADE_ITEMS,
} from "@/lib/blox-fruits/trade-calculator"


export default function BloxFruitsCalculator() {
    const [yourItems, setYourItems] = useState([])
    const [theirItems, setTheirItems] = useState([])

    const [pickerSide, setPickerSide] = useState(null)
    const [search, setSearch] = useState("")


    const analysis = useMemo(() => {
        return analyzeTrade(yourItems, theirItems)
    }, [yourItems, theirItems])


    const filteredFruits = useMemo(() => {
        const query = search.trim().toLowerCase()

        if (!query) {
            return BLOX_FRUITS
        }

        return BLOX_FRUITS.filter((fruit) => {
            return (
                fruit.name.toLowerCase().includes(query) ||
                fruit.rarity.toLowerCase().includes(query) ||
                fruit.type.toLowerCase().includes(query)
            )
        })
    }, [search])


    function openPicker(side) {
        const items =
            side === "your"
                ? yourItems
                : theirItems

        if (items.length >= MAX_TRADE_ITEMS) {
            return
        }

        setSearch("")
        setPickerSide(side)
    }


    function closePicker() {
        setPickerSide(null)
        setSearch("")
    }


    function addFruit(fruitId) {
        const newItem = {
            uid: `${fruitId}-${Date.now()}-${Math.random()}`,
            fruitId,
            variant: "physical",
        }

        if (pickerSide === "your") {
            setYourItems((current) => {
                if (current.length >= MAX_TRADE_ITEMS) {
                    return current
                }

                return [...current, newItem]
            })
        }


        if (pickerSide === "their") {
            setTheirItems((current) => {
                if (current.length >= MAX_TRADE_ITEMS) {
                    return current
                }

                return [...current, newItem]
            })
        }


        closePicker()
    }


    function removeItem(side, uid) {
        if (side === "your") {
            setYourItems((current) =>
                current.filter((item) => item.uid !== uid)
            )

            return
        }

        setTheirItems((current) =>
            current.filter((item) => item.uid !== uid)
        )
    }


    function changeVariant(side, uid, variant) {
        const updateItems = (items) =>
            items.map((item) =>
                item.uid === uid
                    ? {
                        ...item,
                        variant,
                    }
                    : item
            )


        if (side === "your") {
            setYourItems(updateItems)
            return
        }


        setTheirItems(updateItems)
    }


    function clearTrade() {
        setYourItems([])
        setTheirItems([])

        closePicker()
    }


    return (
        <>
            <div className="w-full">

                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 shadow-2xl shadow-black/20 backdrop-blur-sm">

                    {/* Top bar */}
                    <div className="flex flex-col gap-3 border-b border-slate-800 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                        <div>
                            <p className="text-sm font-medium text-slate-300">
                                Blox Fruits Trade Value Calculator
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                Community values • Updated {VALUE_UPDATED_AT}
                            </p>
                        </div>


                        <button
                            type="button"
                            onClick={clearTrade}
                            disabled={
                                yourItems.length === 0 &&
                                theirItems.length === 0
                            }
                            className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-4 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Clear Trade
                        </button>

                    </div>


                    {/* Horizontal on desktop */}
                    <div className="grid grid-cols-1 gap-5 p-4 sm:p-6 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-4 lg:gap-6">

                        <TradeSide
                            title="Your Offer"
                            subtitle="Items you're giving"
                            items={yourItems}
                            total={analysis.yourTotal}
                            averageDemand={analysis.yourDemand}
                            onAdd={() => openPicker("your")}
                            onRemove={(uid) =>
                                removeItem("your", uid)
                            }
                            onVariantChange={(uid, variant) =>
                                changeVariant(
                                    "your",
                                    uid,
                                    variant
                                )
                            }
                        />


                        {/* VS */}
                        <div className="flex items-center justify-center">

                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-bold text-cyan-400 shadow-lg shadow-cyan-950/20">
                                VS
                            </div>

                        </div>


                        <TradeSide
                            title="Their Offer"
                            subtitle="Items you're receiving"
                            items={theirItems}
                            total={analysis.theirTotal}
                            averageDemand={analysis.theirDemand}
                            onAdd={() => openPicker("their")}
                            onRemove={(uid) =>
                                removeItem("their", uid)
                            }
                            onVariantChange={(uid, variant) =>
                                changeVariant(
                                    "their",
                                    uid,
                                    variant
                                )
                            }
                        />

                    </div>


                    <TradeResult analysis={analysis} />

                </div>


                {/* Disclaimer */}
                <div className="mt-4 rounded-xl border border-amber-500/10 bg-amber-500/5 px-4 py-3">

                    <p className="text-xs leading-relaxed text-slate-400">
                        Trade values are community estimates and may
                        change after game updates, reworks, or market
                        shifts. Use the calculator as a trading guide,
                        not as an official Blox Fruits price list.
                    </p>

                </div>

            </div>


            {pickerSide && (
                <FruitSelector
                    side={pickerSide}
                    search={search}
                    setSearch={setSearch}
                    fruits={filteredFruits}
                    onAdd={addFruit}
                    onClose={closePicker}
                />
            )}

        </>
    )
}