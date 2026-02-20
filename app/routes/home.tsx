import { Link } from 'react-router';

const WORLD_LOCATIONS = [
  {
    name: 'Atlas Mine',
    description: 'An endless network of tunnels — more surface area underground than above. Ancient forests of stone, crystal caverns, abandoned cities. The source of all MAGIC.',
    icon: '⛏',
    color: 'from-magic-600 to-magic-400',
  },
  {
    name: 'The Forge',
    description: 'The crafting hub built from ancient tools and Dragon wood. Legions combine quest items into powerful artifacts that aid their journey.',
    icon: '🔨',
    color: 'from-honey-400 to-honey-300',
  },
  {
    name: 'Ivory Tower',
    description: 'A watchtower that fell from the sky during a portal event, spearing deep into the earth. The Dispatcher sends Legions on missions from within.',
    icon: '🗼',
    color: 'from-night-300 to-night-100',
  },
  {
    name: 'Harvesters',
    description: 'Colossal creatures that produce MAGIC. Tame them with the right tools, coordinate with other players, and earn your share of the flow.',
    icon: '🐉',
    color: 'from-ruby-500 to-ruby-400',
  },
];

const GAME_LOOPS = [
  { name: 'Quest', desc: 'Send Legions to the Ivory Tower to find Treasures, Essence of Starlight, Prism Shards, and Fragments.', link: '/gameplay' },
  { name: 'Craft', desc: 'Combine items at the Forge into powerful artifacts. Level up crafting to unlock rarer recipes.', link: '/gameplay' },
  { name: 'Harvest', desc: 'Stake MAGIC in Harvesters. Boost with Legions, Metabolic Boosters, and coordination.', link: '/gameplay' },
  { name: 'Fight', desc: 'Purge Corruption from the world. Craft it into weapons. Compete in guild vs guild Doomsday events.', link: '/gameplay' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-night-1300 via-night-1300/90 to-night-1300" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ruby-600/30 blur-[128px]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-magic-600/20 blur-[128px]" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-honey-400/15 blur-[96px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-24">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-ruby-400 mb-6">
            The Center of the Multiverse
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-night-100 leading-[1.05]">
            Bridge<span className="text-ruby-500">world</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-night-300 max-w-2xl mx-auto leading-relaxed">
            A world powered by MAGIC where Legions quest for Treasures, craft
            at the Forge, harvest from colossal creatures, and fight the
            Corruption that seeps through the land.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/world"
              className="inline-flex h-12 items-center rounded-xl bg-ruby-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-ruby-700"
            >
              Explore the World
            </Link>
            <Link
              to="/lore"
              className="inline-flex h-12 items-center rounded-xl border border-night-600 bg-night-900/50 px-8 text-sm font-semibold text-night-200 transition-colors hover:bg-night-800 hover:border-night-500"
            >
              Read the Tomes
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-night-1300 to-transparent" />
      </section>

      {/* What is Bridgeworld */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-night-100">
              A World of Portals, MAGIC &amp; Cycles
            </h2>
            <p className="mt-4 text-night-400 leading-relaxed">
              Long before the first Legion arrived, an ancient civilization built
              the original Harvesters to draw MAGIC from the depths. Portal
              events drop creatures and relics from other dimensions. Treasures
              fade when drained, then reappear in magic-rich places — the cycle
              continues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WORLD_LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className="group relative rounded-2xl border border-night-800/50 bg-night-900/30 p-8 transition-all hover:border-night-700 hover:bg-night-900/60"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${loc.color} text-xl mb-4`}>
                  {loc.icon}
                </div>
                <h3 className="text-xl font-bold text-night-100 mb-2">{loc.name}</h3>
                <p className="text-sm text-night-400 leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Game Loop */}
      <section className="relative py-24 sm:py-32 border-t border-night-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-honey-400 mb-3">Core Loop</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-night-100">
              Quest. Craft. Harvest. Fight.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GAME_LOOPS.map((loop, i) => (
              <Link
                key={loop.name}
                to={loop.link}
                className="group relative rounded-2xl border border-night-800/50 bg-night-900/20 p-6 transition-all hover:border-ruby-600/30 hover:bg-night-900/50"
              >
                <span className="text-xs font-bold text-night-600 mb-2 block">0{i + 1}</span>
                <h3 className="text-lg font-bold text-night-100 mb-2 group-hover:text-ruby-400 transition-colors">
                  {loop.name}
                </h3>
                <p className="text-sm text-night-400 leading-relaxed">{loop.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MAGIC Token */}
      <section className="relative py-24 sm:py-32 border-t border-night-800/30">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-magic-600/30 blur-[200px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-magic-600 to-ruby-600 text-2xl mb-6">
            ✦
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-night-100">
            Powered by MAGIC
          </h2>
          <p className="mt-4 text-night-300 leading-relaxed max-w-2xl mx-auto">
            MAGIC is the natural resource of the Treasure metaverse. It powers
            the ecosystem of games, fuels autonomous agents, and serves as the
            governance token. Fair-launched in 2021, increasingly scarce by
            design.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.treasure.lol/magic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-xl bg-magic-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-magic-500"
            >
              Learn About MAGIC
            </a>
            <Link
              to="/connect"
              className="inline-flex h-11 items-center rounded-xl border border-night-600 px-6 text-sm font-semibold text-night-200 transition-colors hover:bg-night-800"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
