import {useState} from "react";
import "@styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { StoreProvider } from "../utils/Store";
import { ToastContainer } from "react-toastify";
import {CartContext} from "../Helper/Context"

import "react-toastify/dist/ReactToastify.css";




const supportedChainIds = [4]; //Chain ID 4 represents Rinkeby network
const connectors = {
  injected: {}, //web3 connection method used by metamask here
};
const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.Layout ?? Noop;
  const [cartItems, setCartItems] = useState([]);

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <SessionProvider session={session}>
        <RecoilRoot>
          <Layout>
          <CartContext.Provider value={{cartItems, setCartItems}} >
              <ToastContainer />
              <Component {...pageProps} />
              </CartContext.Provider>
          </Layout>
        </RecoilRoot>
      </SessionProvider>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
/*
*/