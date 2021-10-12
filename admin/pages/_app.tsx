import React from 'react';
import type { AppProps } from 'next/app';

import '@cryptopapers/ui/dist/cp-ui.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
const App: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

App.displayName = 'App';

export default App;
