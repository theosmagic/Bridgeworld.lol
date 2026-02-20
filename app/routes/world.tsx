import { Link } from 'react-router';

const LOCATIONS = [
  {
    name: 'Atlas Mine',
    lore: 'A network of tunnels so endless it\'s believed there is more surface area within the mine than on the surface of Bridgeworld itself. Ancient forests of stone spires, caverns of crystal and gems, ancient cities long abandoned lie hidden in the deep. Great beasts, silent killers, ancient traps and remnants of dark magic — all can be found here.',
    detail: 'Level by level, Questers clear a path for miners. The MAGIC emanating from the center of the Atlas Rift is imbued with six elemental powers: fire, earth, water, wind, light, and darkness.',
    color: 'magic',
  },
  {
    name: 'The Forge',
    lore: 'The crafting hub where Legions settled, built from scrap metal and Dragon wood around ancient abandoned tools. Here, items gathered through questing are combined into useful artifacts.',
    detail: 'Legions gain crafting experience the more they use the Forge, unlocking rarer recipes over time. Metabolic Boosters, Treasures, and Consumables are all forged here.',
    color: 'honey',
  },
  {
    name: 'Ivory Tower',
    lore: 'A watchtower that fell from the sky during a portal event long ago, spearing deeply into the earth and granting access to some of the lowest levels of the Atlas Mine. It sits between the Forge and the Atlas Rift.',
    detail: 'The Dispatcher, a being of unknown race, sends Legions on missions from within. Questing here yields Essence of Starlight, Prism Shards, and Treasure Fragments.',
    color: 'night',
  },
  {
    name: 'Harvesters',
    lore: 'Colossal creatures from Bridgeworld that bestow MAGIC to those who earn their favor. Ancient machinery that can be repaired to extract MAGIC at rapid pace, requiring greatly experienced crafters and metalworkers.',
    detail: 'Active Harvesters include Lupus Magus (Bridgeworld), Emerion (Beacon), Thundermane (KotE), and Emberwing (Zeeverse). Afarit, Asiterra, Shinoba, and Kameji were destroyed during the Harvester Doomsday event.',
    color: 'ruby',
  },
  {
    name: 'Summoner\'s Circle',
    lore: 'Where new Legions are summoned into existence through ancient rituals. A massive ethical debate arose: the newly summoned have no memories of their past, forced to survive with instincts alone.',
    detail: 'The discovery of summoning rituals is both a necessity for survival and a source of deep moral tension within Bridgeworld.',
    color: 'magic',
  },
  {
    name: 'Starlight Temple',
    lore: 'A place of mystery and power connected to the celestial forces that influence Bridgeworld. Constellations guide quests and shape the fortunes of those who pay attention.',
    detail: 'Constellation Quests and the patterns of starlight play a role in the deeper mechanics of the world.',
    color: 'honey',
  },
];

const COLOR_MAP: Record<string, string> = {
  magic: 'border-magic-600/30 hover:border-magic-500/50',
  honey: 'border-honey-500/30 hover:border-honey-400/50',
  night: 'border-night-500/30 hover:border-night-400/50',
  ruby: 'border-ruby-600/30 hover:border-ruby-500/50',
};

const ACCENT_MAP: Record<string, string> = {
  magic: 'text-magic-400',
  honey: 'text-honey-400',
  night: 'text-night-300',
  ruby: 'text-ruby-400',
};

export default function World() {
  return (
    <>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-magic-400 mb-3">The Atlas</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-night-100">
              The World of Bridgeworld
            </h1>
            <p className="mt-4 text-lg text-night-400 leading-relaxed">
              A continent shaped by cataclysm, portal events, and the
              ever-present flow of MAGIC. From the deepest tunnels of the Atlas
              Mine to the heights of the Ivory Tower, every corner holds
              ancient secrets.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className={`rounded-2xl border bg-night-900/30 p-8 transition-all ${COLOR_MAP[loc.color]}`}
              >
                <h3 className={`font-display text-2xl font-bold mb-3 ${ACCENT_MAP[loc.color]}`}>
                  {loc.name}
                </h3>
                <p className="text-sm text-night-300 leading-relaxed mb-4">{loc.lore}</p>
                <p className="text-sm text-night-500 leading-relaxed italic">{loc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corruption */}
      <section className="py-24 sm:py-32 border-t border-night-800/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ruby-400">
            The Corruption
          </h2>
          <p className="mt-4 text-night-300 leading-relaxed max-w-2xl mx-auto">
            A toxic substance continually seeping into Bridgeworld. It makes
            questing longer, increases break rates during crafting, and reduces
            the MAGIC that Harvesters can find. Legions can purge it from the
            Ivory Tower, Forge, and Harvesters — or harness it as a weapon
            against rival factions.
          </p>
          <div className="mt-8">
            <Link
              to="/gameplay"
              className="inline-flex h-11 items-center rounded-xl bg-ruby-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-ruby-700"
            >
              Learn the Gameplay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
