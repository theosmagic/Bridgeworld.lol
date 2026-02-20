import { Link, useLocation } from 'react-router';
import { useState } from 'react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/world', label: 'The World' },
  { to: '/legions', label: 'Legions' },
  { to: '/gameplay', label: 'Gameplay' },
  { to: '/lore', label: 'Lore' },
  { to: '/ecosystem', label: 'Ecosystem' },
  { to: '/connect', label: 'Connect' },
];

const SOCIAL_LINKS = [
  { href: 'https://discord.gg/treasuredao', label: 'Discord' },
  { href: 'https://x.com/Treasure_DAO', label: 'X / Twitter' },
  { href: 'https://github.com/TreasureProject', label: 'GitHub' },
  { href: 'https://forum.treasure.lol', label: 'Governance Forum' },
];

function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-night-800/50 bg-night-1300/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-ruby-600 to-magic-600 flex items-center justify-center">
              <span className="text-sm font-bold text-white">B</span>
            </div>
            <span className="font-display text-lg font-bold tracking-wide text-night-100">
              Bridgeworld
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-ruby-400 bg-ruby-600/10'
                      : 'text-night-300 hover:text-night-100 hover:bg-night-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-night-300 hover:text-night-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-night-800/50 bg-night-1300/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-ruby-400 bg-ruby-600/10'
                      : 'text-night-300 hover:text-night-100 hover:bg-night-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-night-800/50 bg-night-1300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-ruby-600 to-magic-600 flex items-center justify-center">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="font-display text-lg font-bold tracking-wide text-night-100">
                Bridgeworld
              </span>
            </Link>
            <p className="text-sm text-night-400 leading-relaxed">
              The center of the Treasure multiverse. A world powered by MAGIC.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-night-200 uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.slice(1).map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-night-400 hover:text-night-100 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-night-200 uppercase tracking-wider mb-4">Community</h3>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-night-400 hover:text-night-100 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-night-200 uppercase tracking-wider mb-4">Treasure Platform</h3>
            <ul className="space-y-2.5">
              <li><a href="https://app.treasure.lol" target="_blank" rel="noopener noreferrer" className="text-sm text-night-400 hover:text-night-100 transition-colors">Launch App</a></li>
              <li><a href="https://market.treasure.lol" target="_blank" rel="noopener noreferrer" className="text-sm text-night-400 hover:text-night-100 transition-colors">Marketplace</a></li>
              <li><a href="https://magicswap.lol" target="_blank" rel="noopener noreferrer" className="text-sm text-night-400 hover:text-night-100 transition-colors">Magicswap</a></li>
              <li><a href="https://docs.treasure.lol" target="_blank" rel="noopener noreferrer" className="text-sm text-night-400 hover:text-night-100 transition-colors">Developer Docs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-night-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-night-500">
            Community-built on the TreasureProject open-source framework. Powered by MAGIC.
          </p>
          <p className="text-xs text-night-600">
            bridgeworld.lol
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
