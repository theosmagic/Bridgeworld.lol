const STEPS = [
  {
    step: '1',
    title: 'Obtain MAGIC',
    content: 'MAGIC is the energy of the metaverse. Acquire it through the Treasure marketplace or earn it by playing. Bridgeworld operates on Arbitrum.',
  },
  {
    step: '2',
    title: 'Obtain Your Legion',
    content: 'Summon a Recruit in the Barracks for 10 MAGIC, or acquire an Auxiliary or Genesis Legion from the marketplace. Each type has different strengths.',
  },
  {
    step: '3',
    title: 'Embark on Adventures',
    content: 'Quest at the Ivory Tower, craft at the Forge, join a Harvester, or fight Corruption. Four paths, each feeding into the others.',
  },
];

const ACTIVITIES = [
  {
    name: 'Questing — Ivory Tower',
    desc: 'The primary way to find Treasures. Legions gain questing XP unlocking harder quests over time. Free to play.',
    items: ['Essence of Starlight', 'Prism Shards', 'Treasure Fragments'],
    sub: [
      { name: 'Constellation Quests', detail: 'Follow celestial patterns for rare rewards.' },
      { name: 'Treasure Triad', detail: 'A strategic card game within the Tower.' },
    ],
  },
  {
    name: 'Crafting — The Forge',
    desc: 'Combine quest items into Treasures, Consumables, and Metabolic Boosters. Crafting XP unlocks rarer recipes.',
    items: ['Treasures', 'Consumables', 'Metabolic Boosters (S/M/L/Special)'],
    sub: [],
  },
  {
    name: 'Harvesting',
    desc: 'Stake MAGIC in Harvesters to earn yields. Requires Ancient Permits and coordination with other players. Boost with Legions, Metabolic Boosters, and NFTs from across the Treasure ecosystem.',
    items: [],
    sub: [
      { name: 'Utilization Threshold', detail: 'Harvesters activate at 5% capacity, peak at 80%+.' },
      { name: 'Character Boosts', detail: 'Stake Legions, Moonfae Pets, Squires, or Zee for deposit multipliers.' },
      { name: 'Metabolic Boosters', detail: 'Temporary surges: Small (20%/3hr), Medium (25%/3hr), Large (30%/3hr), plus Specials.' },
    ],
  },
  {
    name: 'Fighting Corruption',
    desc: 'Corruption seeps into every corner of Bridgeworld. Purge it to keep the world healthy, or weaponize it against rival Harvesters.',
    items: [],
    sub: [
      { name: 'Purging', detail: 'Remove corruption from the Tower, Forge, and Harvesters.' },
      { name: 'Corruption Crypts', detail: 'Dangerous dungeons filled with concentrated corruption.' },
      { name: 'Crafting Corruption', detail: 'Forge corruption into weapons and throw it at opponents.' },
      { name: 'Doomsday', detail: 'Guild vs guild events that determine which Harvesters survive.' },
    ],
  },
];

const BOOSTERS = [
  { type: 'Small Metabolic', boost: '20%', duration: '3 hrs' },
  { type: 'Medium Metabolic', boost: '25%', duration: '3 hrs' },
  { type: 'Large Metabolic', boost: '30%', duration: '3 hrs' },
  { type: 'Durable', boost: '20%', duration: '4 hrs' },
  { type: 'Anabolic', boost: '40%', duration: '2 hrs' },
  { type: 'Overclocked', boost: '90%', duration: '1 hr' },
];

export default function Gameplay() {
  return (
    <>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-honey-400 mb-3">Guide</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-night-100">Gameplay</h1>
            <p className="mt-4 text-lg text-night-400 leading-relaxed">
              Everything you need to know to navigate Bridgeworld — from your
              first MAGIC to mastering the Harvesters.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-night-100 mb-8">Getting Started</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-night-800/50 bg-night-900/20 p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ruby-600/20 text-ruby-400 text-sm font-bold mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-night-100 mb-2">{s.title}</h3>
                <p className="text-sm text-night-400 leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="pb-24 sm:pb-32 border-t border-night-800/30 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {ACTIVITIES.map((act) => (
            <div key={act.name} className="rounded-2xl border border-night-800/50 bg-night-900/20 p-8">
              <h3 className="font-display text-xl font-bold text-night-100 mb-3">{act.name}</h3>
              <p className="text-night-400 leading-relaxed mb-4">{act.desc}</p>
              {act.items.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {act.items.map((item) => (
                    <span key={item} className="inline-block rounded-lg bg-night-800/50 px-3 py-1 text-xs font-medium text-night-300">
                      {item}
                    </span>
                  ))}
                </div>
              )}
              {act.sub.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {act.sub.map((s) => (
                    <div key={s.name} className="rounded-xl bg-night-900/40 border border-night-800/30 p-4">
                      <h4 className="text-sm font-semibold text-night-200 mb-1">{s.name}</h4>
                      <p className="text-xs text-night-500 leading-relaxed">{s.detail}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Boosters Table */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-night-100 mb-6">Metabolic Boosters</h2>
          <div className="overflow-x-auto rounded-xl border border-night-800/50">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-night-800/50 bg-night-900/50">
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-night-400">Type</th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-night-400">Boost</th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-night-400">Duration</th>
                </tr>
              </thead>
              <tbody>
                {BOOSTERS.map((b) => (
                  <tr key={b.type} className="border-b border-night-800/30 hover:bg-night-900/30">
                    <td className="px-6 py-3 text-sm font-medium text-night-100">{b.type}</td>
                    <td className="px-6 py-3 text-sm text-honey-400 font-mono">{b.boost}</td>
                    <td className="px-6 py-3 text-sm text-night-300 font-mono">{b.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
