import { useEffect } from "react";
import useSWR from "swr";

const adminAdresses = {
  "0x3fced02305ce7ee2878c83326e20da33e684a50980c64b9cf2aa53cb8102f471": true,
};

export const handler = (web3, provider) => () => {
  //swr response
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),

    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    data,
    isAdmin: (data && adminAdresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
