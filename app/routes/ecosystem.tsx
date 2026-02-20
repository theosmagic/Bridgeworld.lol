import { useState } from 'react';

type EcoApp = {
  name: string;
  url: string;
  type: string;
  description: string;
};

const ECOSYSTEM: EcoApp[] = [
  { name: 'Treasure App', url: 'app.treasure.lol', type: 'Platform', description: 'The destination for games. Discover, play, and collect rewards across the Treasure ecosystem.' },
  { name: 'Magicswap', url: 'magicswap.lol', type: 'DeFi', description: 'Permissionless AMM with universal token compatibility. Powering in-game exchanges, NFT memecoins, and more.' },
  { name: 'Treasure Market', url: 'market.treasure.lol', type: 'Marketplace', description: 'The ultimate marketplace to collect, trade, and sell NFTs and in-game items across the ecosystem.' },
  { name: 'Smolworld', url: 'docs.treasure.lol/smolworld', type: 'AI Companions', description: 'AI companion app based on the Smol Brains IP. Chat, collect, and trade weird Smols.' },
  { name: 'Agent Creator', url: 'docs.treasure.lol/agentcreator', type: 'AI', description: 'One-click autonomous agents. Create, deploy, and manage AI agents that play, trade, and form guilds.' },
  { name: 'wizAI', url: 'wizai.lol', type: 'AI', description: 'X-native token launcher for presales and NFT mints. No wallets required, built using autonomous AI.' },
  { name: 'Governance Staking', url: 'governance-staking.treasure.lol', type: 'Governance', description: 'Stake MAGIC for gMAGIC governance power. Shape the future of the Treasure ecosystem.' },
  { name: 'Governance Forum', url: 'forum.treasure.lol', type: 'Governance', description: 'Discuss proposals, review TIPs, and participate in the decentralized governance of Treasure DAO.' },
  { name: 'TreasureScan', url: 'treasurescan.io', type: 'Explorer', description: 'Block explorer for the Treasure chain. Track transactions, contracts, and network activity.' },
  { name: 'Treasure Docs', url: 'docs.treasure.lol', type: 'Developer', description: 'Official developer documentation. SDKs, APIs, contracts, and builder resources.' },
  { name: 'TDK (Dev Kit)', url: 'github.com/TreasureProject/tdk-js', type: 'Developer', description: 'TypeScript/React SDK for building on Treasure. Auth, wallet, launcher, and Tailwind config.' },
  { name: 'ConnectKit', url: 'github.com/TreasureProject/connectkit', type: 'Developer', description: 'Wallet connection UI library. Clean, customizable, and built for the Treasure ecosystem.' },
];

const TYPES = ['All', ...new Set(ECOSYSTEM.map((a) => a.type))];

const TYPE_COLORS: Record<string, string> = {
  Platform: 'bg-ruby-600/20 text-ruby-400',
  DeFi: 'bg-magic-600/20 text-magic-400',
  Marketplace: 'bg-honey-500/20 text-honey-400',
  'AI Companions': 'bg-magic-600/20 text-magic-400',
  AI: 'bg-magic-600/20 text-magic-400',
  Governance: 'bg-night-600/30 text-night-300',
  Explorer: 'bg-night-600/30 text-night-300',
  Developer: 'bg-night-600/30 text-night-300',
};

export default function Ecosystem() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = ECOSYSTEM.filter((app) => {
    const matchType = filter === 'All' || app.type === filter;
    const matchSearch = app.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-ruby-400 mb-3">Network</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-night-100">Ecosystem</h1>
            <p className="mt-4 text-lg text-night-400 leading-relaxed">
              The Treasure ecosystem — apps, games, DeFi, AI agents, and developer
              tools all connected by MAGIC.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full sm:w-64 rounded-xl border border-night-700 bg-night-900/50 px-4 text-sm text-night-100 placeholder:text-night-500 focus:border-ruby-600 focus:outline-none"
            />
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFilter(t)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    filter === t
                      ? 'bg-ruby-600 text-white'
                      : 'bg-night-800/50 text-night-400 hover:text-night-200 hover:bg-night-700/50'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-night-500 mb-6">{filtered.length} projects</p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((app) => (
                <a
                  key={app.name}
                  href={`https://${app.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-night-800/50 bg-night-900/20 p-6 transition-all hover:border-night-700 hover:bg-night-900/50 hover:scale-[1.01]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-night-100 group-hover:text-ruby-400 transition-colors">
                      {app.name}
                    </h3>
                    <span className={`rounded-lg px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${TYPE_COLORS[app.type] || 'bg-night-800 text-night-400'}`}>
                      {app.type}
                    </span>
                  </div>
                  <p className="text-xs text-night-500 mb-2 font-mono">{app.url}</p>
                  <p className="text-sm text-night-400 leading-relaxed">{app.description}</p>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-night-500">No projects found</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
