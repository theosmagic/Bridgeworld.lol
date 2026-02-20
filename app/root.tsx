import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteLoaderData,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import { cookieToInitialState, type State } from 'wagmi';
import { getConfig } from '~/lib/wagmi';
import { Web3Provider } from './components/web3';
import { getEnv } from './env.server';
import { Layout as SiteLayout } from './components/layout';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap',
  },
];

export const loader = async ({ request }: Route.LoaderArgs) => {
  const initialState = cookieToInitialState(
    getConfig(),
    request.headers.get('Cookie'),
  );

  return {
    ENV: getEnv(),
    initialState,
  };
};

export const useRootLoaderData = () =>
  useRouteLoaderData<typeof loader>('root');

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B111C" />
        <link rel="icon" href="/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-dvh font-sans flex flex-col antialiased bg-night-1300 text-night-100">
        <div className="isolate flex-1 flex flex-col">{children}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data?.ENV)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App({ loaderData }: Route.ComponentProps) {
  return (
    <Web3Provider initialState={loaderData.initialState as State | undefined}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </Web3Provider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <SiteLayout>
      <main className="pt-32 pb-16 px-8 container mx-auto text-center">
        <h1 className="text-6xl font-bold text-ruby-500">{message}</h1>
        <p className="mt-4 text-xl text-night-300">{details}</p>
        {stack && (
          <pre className="mt-8 w-full p-4 overflow-x-auto text-left text-sm bg-night-900 rounded-lg">
            <code>{stack}</code>
          </pre>
        )}
      </main>
    </SiteLayout>
  );
}
