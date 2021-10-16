import React from 'react';
import type { AppProps } from 'next/app';

import '@cryptopapers/ui/dist/cp-ui.css';

/**
 * Custom App component used to initialize Next.js pages.
 * @param props
 * @param props.Component - The active page.
 * @param props.pageProps - The initial page props preloaded by a Next.js data fetching method.
 * @see {@link https://nextjs.org/docs/advanced-features/custom-app|Next.js Custom App}
 */
const App: React.FC<AppProps> = ({
  Component, // eslint-disable-line @typescript-eslint/naming-convention
  pageProps,
}) => <Component {...pageProps} />;

App.displayName = 'App';

export default App;
