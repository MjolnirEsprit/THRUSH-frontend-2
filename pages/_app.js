import "../public/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

const supportedChainIds = [4]; //Chain ID 4 represents Rinkeby network
const connectors = {
  injected: {}, //web3 connection method used by metamask here
};
const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <SessionProvider session={session}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </SessionProvider>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
