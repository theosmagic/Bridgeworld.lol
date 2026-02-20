import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';

export default function Connect() {
  const { isConnected, address, chain } = useAccount();

  return (
    <>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-magic-400 mb-3">Wallet</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-night-100">Connect</h1>
          <p className="mt-4 text-lg text-night-400 leading-relaxed">
            Connect your wallet to interact with Bridgeworld on Arbitrum and
            the Treasure chain.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-night-800/50 bg-night-900/30 p-8 text-center">
            <div className="mb-8">
              <ConnectKitButton />
            </div>

            {isConnected && (
              <div className="space-y-4 text-left">
                <div className="rounded-xl bg-night-900/50 border border-night-800/30 p-4">
                  <p className="text-xs text-night-500 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-sm font-mono text-night-200 break-all">{address}</p>
                </div>
                <div className="rounded-xl bg-night-900/50 border border-night-800/30 p-4">
                  <p className="text-xs text-night-500 uppercase tracking-wider mb-1">Network</p>
                  <p className="text-sm text-night-200">{chain?.name || 'Unknown'} (ID: {chain?.id})</p>
                </div>
              </div>
            )}

            {!isConnected && (
              <p className="text-sm text-night-500 mt-4">
                Connect your wallet to view your status and interact with
                the Bridgeworld ecosystem.
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div className="mt-8 space-y-3">
            <h3 className="text-sm font-semibold text-night-300 uppercase tracking-wider">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              <a
                href="https://governance-staking.treasure.lol"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-night-800/50 bg-night-900/20 px-5 py-3 text-sm text-night-300 hover:text-night-100 hover:border-night-700 transition-colors"
              >
                Governance Staking (gMAGIC)
              </a>
              <a
                href="https://vote.treasure.lol"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-night-800/50 bg-night-900/20 px-5 py-3 text-sm text-night-300 hover:text-night-100 hover:border-night-700 transition-colors"
              >
                Snapshot Voting
              </a>
              <a
                href="https://app.treasure.lol/games/bridgeworld"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-night-800/50 bg-night-900/20 px-5 py-3 text-sm text-night-300 hover:text-night-100 hover:border-night-700 transition-colors"
              >
                Bridgeworld on Treasure App
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
