import "../public/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.Layout ?? Noop;
  
  return (
      <SessionProvider session={session}>
          <RecoilRoot>
    <Layout>
      <Component {...pageProps} />
    </Layout>
          </RecoilRoot>
      </SessionProvider>
  );
}

export default MyApp;
