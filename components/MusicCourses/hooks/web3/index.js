import { useHooks } from "@components/MusicCourses/providers/web3";

const enhanceHook = (swrRes) => {
  return {
    ...swrRes,
    hasInitialResponse: swrRes.data || swrRes.error,
  };
};

export const useNetwork = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useNetwork)());
  return {
    network: swrRes,
  };
};

export const useAccount = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useAccount)());
  return {
    account: swrRes,
  };
};

export const useOwnedCourses = (...args) => {
  const swrRes = enhanceHook(
    useHooks((hooks) => hooks.useOwnedCourses)(...args)
  );

  return {
    ownedCourses: swrRes,
  };
};

export const useWalletInfo = () => {
  const { account } = useAccount();
  const { network } = useNetwork();

  //web3 just changed output
  let networkData = network.network;

  return {
    account,
    networkData,
    canPurchaseCourse: !!(account.data && networkData.isSupported),
  };
};
