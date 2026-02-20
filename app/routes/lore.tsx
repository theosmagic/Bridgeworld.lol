const CHAPTERS = [
  {
    title: 'Foundations',
    author: 'Rickard',
    excerpt: 'Long before the first Legion arrived there was an ancient advanced civilization. They built the original Harvesters which drew MAGIC from the depths of the Atlas Mine. No one knows where they\'ve gone or how they were destroyed.',
    body: 'Portal events are the spontaneous appearance of a portal, which drop something from a different world into Bridgeworld. Living creatures who come through lose their memories and identity — forced to survive with instincts and skills alone. A cataclysmic event in the past nearly tore the continent in half, creating the Atlas Rift. A few months before the game begins, a widespread portal event brought the Genesis Legions. They built a city from scrap metal and Dragon wood around the Forge.',
  },
  {
    title: 'The Atlas Mine',
    author: 'Rickard',
    excerpt: 'There are a great many wonders on Bridgeworld — flaming monsters of machines that can level mountains, beasts of unimaginable strength, great forges and temples. But none is equal to the Atlas Mine.',
    body: 'Thousands upon thousands of entrances with vast canyons and underground rivers. Ancient forests of stone spires, caverns of crystal and gems, ancient cities long abandoned. Great beasts of immense strength, silent killers, ancient traps and remnants of dark magic. Level by level, Questers clear a path for the miners. The MAGIC is imbued with six powers: fire, earth, water, wind, light, and darkness.',
  },
  {
    title: 'World Treasury',
    author: 'Rickard',
    excerpt: 'Cycles lie at the very heart of Bridgeworld. One of these cycles is among the greatest mysteries — the cycle of Treasure.',
    body: 'There are a great many Treasures in the world and within each there is MAGIC. Once the MAGIC is drained and the item used, the Treasure fades from the world like a ghost who\'s found its peace. But when the Treasure has faded, it will eventually appear again — seemingly at random, usually in MAGIC-rich environments. Find a treasure, use the treasure, and the treasure will reappear somewhere, at some point.',
  },
  {
    title: 'The Providers',
    author: 'Lore Community',
    excerpt: 'On the nature of Legions — those who provide for the survival of the settlement, the quiet backbone of civilization.',
    body: 'While the Origin Legions and the great warriors claim the glory, it is the common Legions — the Providers — who ensure Bridgeworld persists. They farm, they build, they maintain the forges. Without them, the settlement crumbles.',
  },
];

const SEASON_ONE = {
  title: 'Season 1: Aliya\'s Ascent',
  chapters: [
    'Prologue: Migration',
    'Chapter 1: Landing',
    'Chapter 2: A New Home',
    'Chapter 3: Induction',
    'Chapter 4: Anton',
    'Chapter 5: Cataclysm',
    'Chapter 6: Excursion',
  ],
};

export default function Lore() {
  return (
    <>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-honey-400 mb-3">The Old Tomes</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-night-100">Lore</h1>
          <div className="mt-8 rounded-2xl border border-honey-500/20 bg-night-900/30 p-8">
            <p className="text-night-300 leading-relaxed italic font-display text-lg">
              "Dear Reader — if you're reading this, you're one of those people
              in search of answers. Whether you found yourself in a field, in the
              sea, on a boat — you've woken up in this land and there's no way
              back. But there is a way forward."
            </p>
            <p className="mt-4 text-sm text-night-500">
              — The Eminently Dignified Society of Bards, Writers and Artists
            </p>
            <p className="mt-1 text-xs text-night-600">
              1st Edition, drafted at Arbitrum Block 4643318
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Stories */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {CHAPTERS.map((ch) => (
            <article key={ch.title} className="rounded-2xl border border-night-800/50 bg-night-900/20 p-8">
              <div className="flex items-baseline gap-3 mb-4">
                <h2 className="font-display text-2xl font-bold text-night-100">{ch.title}</h2>
                <span className="text-xs text-night-600">by {ch.author}</span>
              </div>
              <p className="text-night-300 leading-relaxed mb-4 italic">{ch.excerpt}</p>
              <p className="text-sm text-night-400 leading-relaxed">{ch.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Season 1 */}
      <section className="pb-24 sm:pb-32 border-t border-night-800/30 pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-night-100 mb-2">{SEASON_ONE.title}</h2>
          <p className="text-night-400 mb-8">The first serialized narrative of Bridgeworld, following Aliya's journey from the portal event through the cataclysm.</p>
          <div className="space-y-3">
            {SEASON_ONE.chapters.map((ch, i) => (
              <div
                key={ch}
                className="flex items-center gap-4 rounded-xl border border-night-800/30 bg-night-900/20 px-6 py-4 hover:border-night-700 transition-colors"
              >
                <span className="text-xs font-mono text-night-600 w-6">{String(i).padStart(2, '0')}</span>
                <span className="text-sm font-medium text-night-200">{ch}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-night-500 italic">
            Audio book available. Full text preserved in the bridgeworld-docs repository.
          </p>
        </div>
      </section>

      {/* The Sacrifice */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-ruby-600/20 bg-night-900/30 p-8 text-center">
            <h3 className="font-display text-xl font-bold text-ruby-400 mb-4">The Western Mountains</h3>
            <p className="text-sm text-night-400 leading-relaxed max-w-2xl mx-auto">
              Those who refused to accept having lost their identity sought
              solace at the end. Venturing up the mountains framing the Western
              Borders, they constructed a sacrificial altar — a beautiful stone
              monument overlooking Bridgeworld. Torn between knowing they are
              needed for survival and resenting the loss of their old world,
              they find solace in knowing they need not belong to either...
              and so spill their blood. A blood brimming with power.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
