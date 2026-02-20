const LEGION_CLASSES = [
  {
    tier: 'Genesis',
    types: [
      { name: '1/1 Legends', boost: '600%', weight: '120 kg', desc: 'The most powerful beings in Bridgeworld. Singular entities of immense strength.' },
      { name: 'All-Class', boost: '200%', weight: '40 kg', desc: 'Versatile warriors who emerged shortly after the Origin Legions. Masters of all disciplines.' },
      { name: 'Uncommon', boost: '100%', weight: '21 kg', desc: 'Skilled fighters brought through the great portal event. Strong in combat and questing.' },
      { name: 'Special', boost: '75%', weight: '16 kg', desc: 'Legions with unique abilities that set them apart from their common kin.' },
      { name: 'Common', boost: '50%', weight: '11 kg', desc: 'The backbone of Bridgeworld\'s civilization. Numerous but capable.' },
    ],
  },
  {
    tier: 'Auxiliary',
    types: [
      { name: 'Rare', boost: '25%', weight: '5.5 kg', desc: 'Skilled Legions promoted through extensive questing and crafting achievement.' },
      { name: 'Uncommon', boost: '10%', weight: '4 kg', desc: 'Experienced Legions who have proven themselves through dedication.' },
      { name: 'Common', boost: '5%', weight: '2.5 kg', desc: 'Former Recruits who earned their Auxiliary status through hard work.' },
    ],
  },
];

const ORIGIN_LEGIONS = [
  { name: 'Bombmaker', desc: 'An explosive genius who arrived long before the great portal event. Their craft is destruction turned to purpose.' },
  { name: 'Dreamwinder', desc: 'A being who walks between waking and sleep. Three volumes chronicle their strange and shifting nature.' },
  { name: 'Clocksnatcher', desc: 'A temporal anomaly. Steals moments from the flow of time itself.' },
  { name: 'Fallen', desc: 'Once something greater, now reduced but not defeated. Their fall gave them a different kind of strength.' },
  { name: 'Warlock', desc: 'A wielder of dark magic drawn from the deep veins of the Atlas Mine. Power at a cost.' },
];

export default function Legions() {
  return (
    <>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-ruby-400 mb-3">Characters</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-night-100">Legions</h1>
            <p className="mt-4 text-lg text-night-400 leading-relaxed">
              The inhabitants of Bridgeworld. Brought here through portal events,
              stripped of memory and identity, they build a new civilization from
              nothing. From the legendary 1/1 Genesis to the humble Recruit,
              every Legion has a role.
            </p>
          </div>
        </div>
      </section>

      {/* Recruit Path */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-honey-500/30 bg-night-900/30 p-8">
            <h2 className="font-display text-2xl font-bold text-honey-400 mb-3">Recruits — The Starting Path</h2>
            <p className="text-night-300 leading-relaxed max-w-3xl">
              In the Barracks, anyone can summon a Recruit Legion for 10 MAGIC.
              Recruits have restrictions compared to Auxiliary and Genesis
              Legions, but with enough questing and crafting experience, a
              Recruit can be promoted to Auxiliary. The journey begins here.
            </p>
          </div>
        </div>
      </section>

      {/* Class Tables */}
      {LEGION_CLASSES.map((cls) => (
        <section key={cls.tier} className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-night-100 mb-6">
              {cls.tier} Legions
            </h2>
            <div className="overflow-x-auto rounded-xl border border-night-800/50">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-night-800/50 bg-night-900/50">
                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-night-400">Class</th>
                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-night-400">Harvester Boost</th>
                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-night-400">Weight</th>
                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-night-400 hidden sm:table-cell">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {cls.types.map((t) => (
                    <tr key={t.name} className="border-b border-night-800/30 hover:bg-night-900/30">
                      <td className="px-6 py-4 text-sm font-medium text-night-100">{t.name}</td>
                      <td className="px-6 py-4 text-sm text-magic-400 font-mono">{t.boost}</td>
                      <td className="px-6 py-4 text-sm text-night-300 font-mono">{t.weight}</td>
                      <td className="px-6 py-4 text-sm text-night-400 hidden sm:table-cell">{t.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* Origin Legions */}
      <section className="py-24 sm:py-32 border-t border-night-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-night-100 mb-4">
            The Five Origin Legions
          </h2>
          <p className="text-night-400 mb-10 max-w-2xl">
            Said to have arrived long before the great portal event that brought
            the Genesis Legions. Each is singular, each is legend.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ORIGIN_LEGIONS.map((leg) => (
              <div key={leg.name} className="rounded-2xl border border-night-800/50 bg-night-900/20 p-6 hover:border-night-700 transition-colors">
                <h3 className="font-display text-xl font-bold text-ruby-400 mb-2">{leg.name}</h3>
                <p className="text-sm text-night-400 leading-relaxed">{leg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Others */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-night-800/50 bg-night-900/20 p-8">
              <h3 className="font-display text-xl font-bold text-night-200 mb-2">The Riverman</h3>
              <p className="text-sm text-night-400 leading-relaxed">
                Mysterious figures found near Bridgeworld's waterways. Setsuko
                Kazuko, Osir, and others whose origins are chronicled across
                multiple volumes. They ferry knowledge between the known and
                unknown.
              </p>
            </div>
            <div className="rounded-2xl border border-night-800/50 bg-night-900/20 p-8">
              <h3 className="font-display text-xl font-bold text-night-200 mb-2">The Numeraire</h3>
              <p className="text-sm text-night-400 leading-relaxed">
                Beings who seem to embody the mathematical underpinnings of
                Bridgeworld itself. Their nature is debated in the Tomes — are
                they a force of balance or something stranger?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
