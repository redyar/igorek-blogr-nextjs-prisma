import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';


// Для созранения авторизованности использовали SessionProvider 


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;