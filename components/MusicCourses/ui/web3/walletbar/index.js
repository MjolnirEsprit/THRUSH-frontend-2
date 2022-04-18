import { useWalletInfo } from "@components/MusicCourses/hooks/web3";
import { useWeb3 } from "@components/MusicCourses/providers";
import { Button } from "@components/MusicCourses/ui/common";

export default function WalletBar() {
  const { requireInstall } = useWeb3();
  const { account, networkData } = useWalletInfo();

  return (
    <section className="rounded-lg bg-orange-600 text-white">
      <div className="p-8">
        <h1 className="break-words text-base xs:text-xl">
          Hello, {account.data}
        </h1>
        <h2 className="subtitle mb-5 text-sm xs:text-base">
          I hope you are having a great day!
        </h2>
        <div className="flex items-center justify-between">
          <div className="sm:flex sm:justify-center lg:justify-start">
            <Button className="mr-2 p-2 text-sm xs:text-lg" variant="white">
              Learn how to purchase
            </Button>
          </div>
          <div>
            {networkData.hasInitialResponse && !networkData.isSupported && (
              <div className="rounded-lg bg-red-600 p-4">
                <div>Connected to wrong Network</div>
                <div>
                  Connect to : {` `}
                  <strong className="text-2xl">{networkData.target}</strong>
                </div>
              </div>
            )}
            {requireInstall && (
              <div className="rounded-lg bg-yellow-500 p-4">
                Cannot connect to network. Please install Metamask.
              </div>
            )}
            {networkData.data && (
              <div>
                <span>Currently on </span>
                <strong className="text-2xl">{networkData.data}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
