const TABLE_OF_CONTENTS = [
    {
        id: "overview",
        label: "Overview",
    },
    {
        id: "features",
        label: "Features",
    },
    {
        id: "how-to-use",
        label: "How to Use This Tool",
    },
    {
        id: "understanding-type-matchups",
        label: "Understanding Type Matchups",
    },
    {
        id: "complete-type-chart",
        label: "Complete Type Chart",
    },
    {
        id: "common-problems",
        label: "Common Problems & Solutions",
    },
    {
        id: "competitive-tips",
        label: "Advanced Tips for Competitive Play",
    },
    {
        id: "faq",
        label: "Frequently Asked Questions",
    },
]


const OFFENSIVE_TYPE_CHART = [
    ["Normal", "None"],
    ["Fire", "Grass, Ice, Bug, Steel"],
    ["Water", "Fire, Ground, Rock"],
    ["Electric", "Water, Flying"],
    ["Grass", "Water, Ground, Rock"],
    ["Ice", "Grass, Ground, Flying, Dragon"],
    ["Fighting", "Normal, Ice, Rock, Dark, Steel"],
    ["Poison", "Grass, Fairy"],
    ["Ground", "Fire, Electric, Poison, Rock, Steel"],
    ["Flying", "Grass, Fighting, Bug"],
    ["Psychic", "Fighting, Poison"],
    ["Bug", "Grass, Psychic, Dark"],
    ["Rock", "Fire, Ice, Flying, Bug"],
    ["Ghost", "Ghost, Psychic"],
    ["Dragon", "Dragon"],
    ["Dark", "Ghost, Psychic"],
    ["Steel", "Ice, Rock, Fairy"],
    ["Fairy", "Fighting, Dragon, Dark"],
]


const DEFENSIVE_TYPE_CHART = [
    {
        type: "Normal",
        weak: "Fighting",
        resists: "None",
        immune: "Ghost",
    },
    {
        type: "Fire",
        weak: "Water, Ground, Rock",
        resists: "Fire, Grass, Ice, Bug, Steel, Fairy",
        immune: "None",
    },
    {
        type: "Water",
        weak: "Electric, Grass",
        resists: "Fire, Water, Ice, Steel",
        immune: "None",
    },
    {
        type: "Electric",
        weak: "Ground",
        resists: "Electric, Flying, Steel",
        immune: "None",
    },
    {
        type: "Grass",
        weak: "Fire, Ice, Poison, Flying, Bug",
        resists: "Water, Electric, Grass, Ground",
        immune: "None",
    },
    {
        type: "Ice",
        weak: "Fire, Fighting, Rock, Steel",
        resists: "Ice",
        immune: "None",
    },
    {
        type: "Fighting",
        weak: "Flying, Psychic, Fairy",
        resists: "Bug, Rock, Dark",
        immune: "None",
    },
    {
        type: "Poison",
        weak: "Ground, Psychic",
        resists: "Grass, Fighting, Poison, Bug, Fairy",
        immune: "None",
    },
    {
        type: "Ground",
        weak: "Water, Grass, Ice",
        resists: "Poison, Rock",
        immune: "Electric",
    },
    {
        type: "Flying",
        weak: "Electric, Ice, Rock",
        resists: "Grass, Fighting, Bug",
        immune: "Ground",
    },
    {
        type: "Psychic",
        weak: "Bug, Ghost, Dark",
        resists: "Fighting, Psychic",
        immune: "None",
    },
    {
        type: "Bug",
        weak: "Fire, Flying, Rock",
        resists: "Grass, Fighting, Ground",
        immune: "None",
    },
    {
        type: "Rock",
        weak: "Water, Grass, Fighting, Ground, Steel",
        resists: "Normal, Fire, Poison, Flying",
        immune: "None",
    },
    {
        type: "Ghost",
        weak: "Ghost, Dark",
        resists: "Poison, Bug",
        immune: "Normal, Fighting",
    },
    {
        type: "Dragon",
        weak: "Ice, Dragon, Fairy",
        resists: "Fire, Water, Grass, Electric",
        immune: "None",
    },
    {
        type: "Dark",
        weak: "Fighting, Bug, Fairy",
        resists: "Ghost, Dark",
        immune: "Psychic",
    },
    {
        type: "Steel",
        weak: "Fire, Fighting, Ground",
        resists:
            "Normal, Grass, Ice, Flying, Psychic, Bug, Rock, Dragon, Steel, Fairy",
        immune: "Poison",
    },
    {
        type: "Fairy",
        weak: "Poison, Steel",
        resists: "Fighting, Bug, Dark",
        immune: "Dragon",
    },
]


const FAQ_ITEMS = [
    {
        question: "What is a dual-type Pokémon?",
        answer:
            "A dual-type Pokémon has two types at once, such as Fire and Flying. Its defensive weaknesses and resistances are calculated by multiplying the effectiveness of an incoming move against both types.",
    },
    {
        question: "How are 4× weaknesses calculated?",
        answer:
            "A 4× weakness happens when both defensive types are weak to the same attacking type. A 2× weakness against the first type multiplied by a 2× weakness against the second type results in 4× damage effectiveness.",
    },
    {
        question: "Can two type effects cancel each other out?",
        answer:
            "Yes. If one defensive type is weak to an attack at 2× while the other resists it at 0.5×, the two multipliers combine to produce neutral 1× effectiveness.",
    },
    {
        question: "Does this Pokémon type calculator work for Pokémon GO?",
        answer:
            "The calculator is designed primarily around the main-series Pokémon type chart. Pokémon GO uses different battle damage multipliers, so its exact damage percentages can differ.",
    },
    {
        question: "How does Terastallization affect weaknesses?",
        answer:
            "After Terastallization, defensive type effectiveness is based on the Pokémon's Tera Type rather than its original defensive typing. You can check that defensive profile here by selecting the Tera Type as a single type.",
    },
    {
        question: "Can abilities change type effectiveness?",
        answer:
            "Yes. Certain Pokémon abilities can add immunities or otherwise change how moves affect a Pokémon. This calculator shows the base type-chart interaction and does not apply ability-specific overrides.",
    },
]


function SectionHeading({ children }) {
    return (
        <h2 className="text-2xl md:text-3xl font-bold text-white ">
            {children}
        </h2>
    )
}


function SubHeading({ children }) {
    return (
        <h3 className="text-lg md:text-xl font-semibold text-cyan-300 mt-2 mb-2">
            {children}
        </h3>
    )
}


function Paragraph({ children }) {
    return (
        <p className="text-sm md:text-base text-gray-400 leading-7">
            {children}
        </p>
    )
}


export default function PokemonTypeCalculatorSeo() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    }


    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />


            <article className="text-gray-300">

                {/* Introduction */}
                <div className="mb-10">
                    <Paragraph>
                        Picking the wrong move in a Pokémon battle
                        can quickly turn a favorable matchup into a
                        disadvantage. Type interactions become more
                        complicated when two defensive types combine,
                        especially when weaknesses, resistances, and
                        immunities overlap.
                    </Paragraph>

                    <p className="text-sm md:text-base text-gray-400 leading-7 mt-4">
                        This{" "}
                        <strong className="text-gray-200">
                            Pokémon type calculator
                        </strong>{" "}
                        helps you check the defensive effectiveness of
                        any single-type or dual-type combination and
                        see exactly which attacks deal 4×, 2×, 1×,
                        ½×, ¼×, or 0× effectiveness.
                    </p>
                </div>


                {/* Table of contents */}
                <nav
                    aria-label="Table of contents"
                    className="mb-12 p-5 md:p-6 bg-slate-800/40 border border-slate-700/60 rounded-xl"
                >
                    <h2 className="text-lg font-bold text-white mb-4">
                        Table of Contents
                    </h2>

                    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-decimal list-inside">
                        {TABLE_OF_CONTENTS.map((item) => (
                            <li
                                key={item.id}
                                className="text-sm text-gray-400"
                            >
                                <a
                                    href={`#${item.id}`}
                                    className="hover:text-cyan-300 transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>


                {/* Overview */}
                <section
                    id="overview"
                    className="scroll-mt-8 mb-2"
                >
                    <SectionHeading>
                        Overview
                    </SectionHeading>

                    <Paragraph>
                        The Pokémon type system determines whether an
                        attacking move is super effective, resisted,
                        neutral, or completely ineffective against the
                        defending Pokémon. With 18 modern Pokémon
                        types, checking every possible combination by
                        memory can become difficult.
                    </Paragraph>

                    <p className="text-sm md:text-base text-gray-400 leading-7 mt-4">
                        This{" "}
                        <strong className="text-gray-200">
                            type calculator
                        </strong>{" "}
                        handles both single and dual defensive types.
                        Select the Pokémon&apos;s primary type and,
                        when needed, its secondary type to generate a
                        complete defensive profile.
                    </p>
                </section>


                {/* Features */}
                <section
                    id="features"
                    className="scroll-mt-8 mb-2"
                >
                    <SectionHeading>
                        Pokémon Type Calculator Features
                    </SectionHeading>


                    <SubHeading>
                        Dual-Type Support
                    </SubHeading>

                    <Paragraph>
                        Many Pokémon have two types at once, and their
                        final defensive matchup depends on both.
                        Instead of checking two charts separately, the
                        calculator automatically combines both
                        multipliers and displays the final result.
                    </Paragraph>


                    <SubHeading>
                        4× Weakness Detection
                    </SubHeading>

                    <Paragraph>
                        When both defensive types are weak to the same
                        attacking type, the weaknesses stack. Two 2×
                        modifiers multiply into a 4× weakness, making
                        that attack especially dangerous.
                    </Paragraph>


                    <SubHeading>
                        ¼× Resistance Detection
                    </SubHeading>

                    <Paragraph>
                        The reverse can also happen. When both types
                        resist the same attack, two 0.5× modifiers
                        combine into a 0.25×, or ¼×, resistance.
                    </Paragraph>


                    <SubHeading>
                        Immunity Checker
                    </SubHeading>

                    <Paragraph>
                        Some type interactions deal no damage at all.
                        For example, Ground attacks cannot normally
                        affect Flying types, while Normal and Fighting
                        attacks cannot normally affect Ghost types.
                        The calculator groups these matchups clearly
                        as 0× immunities.
                    </Paragraph>


                    <SubHeading>
                        Complete Defensive Profile
                    </SubHeading>

                    <Paragraph>
                        Results are grouped into weaknesses,
                        resistances, immunities, and neutral
                        matchups. This makes it easy to understand the
                        entire defensive profile of the selected type
                        combination at a glance.
                    </Paragraph>
                </section>


                {/* How to use */}
                <section
                    id="how-to-use"
                    className="scroll-mt-8 mb-2"
                >
                    <SectionHeading>
                        How to Use the Pokémon Type Calculator
                    </SectionHeading>


                    <SubHeading>
                        Step 1: Select the Primary Type
                    </SubHeading>

                    <Paragraph>
                        Choose the Pokémon&apos;s first defensive type
                        from the Primary Type selector.
                    </Paragraph>


                    <SubHeading>
                        Step 2: Add a Secondary Type
                    </SubHeading>

                    <Paragraph>
                        If the Pokémon has two types, choose its second
                        type from the Secondary Type selector. Leave
                        this option empty when checking a single-type
                        Pokémon.
                    </Paragraph>


                    <SubHeading>
                        Step 3: Calculate Type Effectiveness
                    </SubHeading>

                    <Paragraph>
                        Select Calculate Type Effectiveness to generate
                        the complete defensive matchup. The calculator
                        evaluates every attacking type against your
                        selected defensive combination.
                    </Paragraph>


                    <SubHeading>
                        Step 4: Review the Multipliers
                    </SubHeading>

                    <Paragraph>
                        Check the 4× and 2× weakness groups first, then
                        review ½× and ¼× resistances, immunities, and
                        neutral attacks. These groups show exactly how
                        incoming move types interact with the selected
                        Pokémon typing.
                    </Paragraph>
                </section>


                {/* Understanding matchups */}
                <section
                    id="understanding-type-matchups"
                    className="scroll-mt-8 mb-2"
                >
                    <SectionHeading>
                        Understanding Pokémon Type Matchups
                    </SectionHeading>


                    <SubHeading>
                        How Damage Multipliers Work
                    </SubHeading>

                    <Paragraph>
                        Type effectiveness uses multipliers rather than
                        adding or subtracting a fixed amount of
                        damage. A super-effective matchup normally
                        produces 2× effectiveness, a resisted matchup
                        produces 0.5×, and an immunity produces 0×.
                    </Paragraph>


                    <SubHeading>
                        Dual-Type Math Explained
                    </SubHeading>

                    <Paragraph>
                        Dual defensive types multiply their modifiers
                        together. For example, if a Water attack is
                        2× effective against the first type and 2×
                        effective against the second, the final
                        multiplier is 4×.
                    </Paragraph>

                    <div className="my-5 p-4 md:p-5 bg-slate-800/40 border border-cyan-500/20 rounded-lg">
                        <p className="text-sm md:text-base text-cyan-300 font-semibold">
                            2 × 2 = 4× effectiveness
                        </p>
                    </div>

                    <Paragraph>
                        If one defensive type is weak at 2× while the
                        other resists the same attack at 0.5×, the two
                        effects cancel each other out.
                    </Paragraph>

                    <div className="my-5 p-4 md:p-5 bg-slate-800/40 border border-cyan-500/20 rounded-lg">
                        <p className="text-sm md:text-base text-cyan-300 font-semibold">
                            2 × 0.5 = 1× effectiveness
                        </p>
                    </div>


                    <SubHeading>
                        What About STAB?
                    </SubHeading>

                    <Paragraph>
                        STAB means Same Type Attack Bonus. It is an
                        offensive damage bonus applied when a Pokémon
                        uses a move matching its own type. STAB is
                        separate from the defensive type chart shown
                        by this calculator, so it is not included in
                        these defensive multiplier results.
                    </Paragraph>
                </section>


                {/* Complete chart */}
                <section
                    id="complete-type-chart"
                    className="scroll-mt-8 mb-2"
                >
                    <SectionHeading>
                        Complete Pokémon Type Chart
                    </SectionHeading>

                    <Paragraph>
                        The following tables provide a quick reference
                        for all 18 modern Pokémon types.
                    </Paragraph>


                    <SubHeading>
                        Offensive Strengths by Type
                    </SubHeading>

                    <div className="overflow-x-auto mt-4 rounded-lg border border-slate-700/60">
                        <table className="w-full min-w-[560px] text-left text-sm">
                            <thead className="bg-slate-800/80">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-gray-200 font-semibold"
                                    >
                                        Attacking Type
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-gray-200 font-semibold"
                                    >
                                        Super Effective Against
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-700/50">
                                {OFFENSIVE_TYPE_CHART.map(
                                    ([type, effectiveAgainst]) => (
                                        <tr
                                            key={type}
                                            className="bg-slate-900/20"
                                        >
                                            <th
                                                scope="row"
                                                className="px-4 py-3 text-cyan-300 font-semibold whitespace-nowrap"
                                            >
                                                {type}
                                            </th>

                                            <td className="px-4 py-3 text-gray-400">
                                                {effectiveAgainst}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>


                    <SubHeading>
                        Defensive Weaknesses and Resistances
                    </SubHeading>

                    <div className="overflow-x-auto mt-4 rounded-lg border border-slate-700/60">
                        <table className="w-full min-w-[900px] text-left text-sm">
                            <thead className="bg-slate-800/80">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-gray-200 font-semibold"
                                    >
                                        Type
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-gray-200 font-semibold"
                                    >
                                        Weak To
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-gray-200 font-semibold"
                                    >
                                        Resists
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-gray-200 font-semibold"
                                    >
                                        Immune To
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-700/50">
                                {DEFENSIVE_TYPE_CHART.map(
                                    (item) => (
                                        <tr
                                            key={item.type}
                                            className="bg-slate-900/20 align-top"
                                        >
                                            <th
                                                scope="row"
                                                className="px-4 py-3 text-cyan-300 font-semibold whitespace-nowrap"
                                            >
                                                {item.type}
                                            </th>

                                            <td className="px-4 py-3 text-red-300/90">
                                                {item.weak}
                                            </td>

                                            <td className="px-4 py-3 text-green-300/90">
                                                {item.resists}
                                            </td>

                                            <td className="px-4 py-3 text-violet-300/90">
                                                {item.immune}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>


                {/* Best combinations */}
                <section className="mb-12">
                    <SectionHeading>
                        Defensive Type Combinations
                    </SectionHeading>

                    <Paragraph>
                        Dual typings can dramatically change a
                        Pokémon&apos;s defensive profile. A type that
                        covers another type&apos;s weakness can reduce
                        a dangerous 2× matchup to neutral 1×, while
                        overlapping resistances can create powerful
                        ¼× matchups.
                    </Paragraph>

                    <p className="text-sm md:text-base text-gray-400 leading-7 mt-4">
                        Steel/Fairy is a notable defensive
                        combination because the two types provide a
                        large number of resistances while leaving only
                        a small number of standard weaknesses.
                        However, defensive value in an actual battle
                        also depends on stats, abilities, moves,
                        items, and the opposing team.
                    </p>
                </section>


                {/* Common problems */}
                <section
                    id="common-problems"
                    className="scroll-mt-8 mb-2"
                >
                    <SectionHeading>
                        Common Pokémon Type Calculator Questions
                    </SectionHeading>


                    <SubHeading>
                        Why Is My 4× Weakness Not Showing?
                    </SubHeading>

                    <Paragraph>
                        Make sure both defensive types are selected.
                        A 4× weakness only appears when the attacking
                        type is 2× effective against both selected
                        defensive types.
                    </Paragraph>


                    <SubHeading>
                        Why Did a Weakness Become Neutral?
                    </SubHeading>

                    <Paragraph>
                        One type can resist an attack that the other
                        type is weak to. In that situation, 2× and
                        0.5× multiply together and produce a neutral
                        1× result.
                    </Paragraph>


                    <SubHeading>
                        Can Abilities Change These Results?
                    </SubHeading>

                    <Paragraph>
                        Yes. Abilities can sometimes override the base
                        type chart. For example, certain abilities
                        grant immunities to specific move types. This
                        calculator displays base type effectiveness
                        and does not currently apply ability-specific
                        effects.
                    </Paragraph>


                    <SubHeading>
                        How Do I Check a Tera Type?
                    </SubHeading>

                    <Paragraph>
                        For defensive type effectiveness after
                        Terastallization, select the Pokémon&apos;s
                        Tera Type as the primary type and leave the
                        secondary type empty. This gives you the
                        defensive profile of that single type.
                    </Paragraph>


                    <SubHeading>
                        Pokémon GO vs. Main-Series Games
                    </SubHeading>

                    <Paragraph>
                        Pokémon GO uses different numerical battle
                        multipliers from the main-series games. This
                        calculator is intended primarily as a
                        main-series type-chart reference rather than
                        an exact Pokémon GO damage calculator.
                    </Paragraph>
                </section>


                {/* Competitive tips */}
                <section
                    id="competitive-tips"
                    className="scroll-mt-8 mb-2"
                >
                    <SectionHeading>
                        Advanced Tips for Competitive Play
                    </SectionHeading>


                    <SubHeading>
                        Check Shared Team Weaknesses
                    </SubHeading>

                    <Paragraph>
                        When building a team, examine each
                        Pokémon&apos;s defensive profile and look for
                        repeated weaknesses. Several team members
                        sharing the same 2× or 4× weakness can make
                        the entire team vulnerable to one common
                        attacking type.
                    </Paragraph>


                    <SubHeading>
                        Choose Coverage Moves Carefully
                    </SubHeading>

                    <Paragraph>
                        Coverage moves help an attacker deal with
                        Pokémon that resist its main attacking types.
                        Check which types resist your primary attacks,
                        then consider a move type that pressures those
                        defensive answers.
                    </Paragraph>


                    <SubHeading>
                        Plan Around Opponent Switches
                    </SubHeading>

                    <Paragraph>
                        A strong type advantage often causes an
                        opponent to switch Pokémon. Understanding
                        weaknesses and resistances can help you
                        anticipate which defensive option may come in
                        next rather than evaluating only the current
                        matchup.
                    </Paragraph>
                </section>


                {/* FAQ */}
                <section
                    id="faq"
                    className="scroll-mt-8 mb-2"
                >
                    <SectionHeading>
                        Frequently Asked Questions
                    </SectionHeading>

                    <div className="space-y-4">
                        {FAQ_ITEMS.map((item) => (
                            <div
                                key={item.question}
                                className="p-5 md:p-6 bg-slate-800/30 border border-slate-700/60 rounded-lg"
                            >
                                <h3 className="text-base md:text-lg font-semibold text-white">
                                    {item.question}
                                </h3>

                                <p className="text-sm md:text-base text-gray-400 leading-7 mt-2">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Conclusion */}
                <section>
                    <SectionHeading>
                        Conclusion
                    </SectionHeading>

                    <Paragraph>
                        Type matchups are one of the most important
                        parts of Pokémon battling. Knowing whether an
                        incoming move deals 4×, 2×, neutral, resisted,
                        or zero effectiveness can influence team
                        building, move selection, and battle
                        decisions.
                    </Paragraph>

                    <p className="text-sm md:text-base text-gray-400 leading-7 mt-4">
                        Use the{" "}
                        <strong className="text-gray-200">
                            Pokémon type calculator
                        </strong>{" "}
                        above whenever you need to check the defensive
                        weaknesses, resistances, and immunities of a
                        single or dual Pokémon typing.
                    </p>
                </section>

            </article>
        </>
    )
}