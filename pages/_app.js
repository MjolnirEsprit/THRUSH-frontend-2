import "@styles/globals.css";
import {SessionProvider, useSession} from "next-auth/react";
import { RecoilRoot } from "recoil";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { StoreProvider } from "../utils/Store";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userService } from 'services';

import "react-toastify/dist/ReactToastify.css";

const supportedChainIds = [4]; //Chain ID 4 represents Rinkeby network
const connectors = {
  injected: {}, //web3 connection method used by metamask here
};
const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  const Layout = Component.Layout ?? Noop;

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    const publicPaths = ['/account/login', '/account/register'];
    const path = url.split('?')[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/account/login',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
        <RecoilRoot>
          <Layout>
            <StoreProvider>
              <ToastContainer />
              {authorized &&
                  <Component {...pageProps} />
              }
            </StoreProvider>
          </Layout>
        </RecoilRoot>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
