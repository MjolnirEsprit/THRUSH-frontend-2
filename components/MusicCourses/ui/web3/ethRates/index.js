import {
  useEthPrice,
  COURSE_PRICE,
} from "@components/MusicCourses/hooks/useEthPrice";
import { Loader } from "@components/common";
import Image from "next/image";

export default function EthRates() {
  const { eth } = useEthPrice();

  return (
    <div className="xs:flex-row flex flex-col text-center">
      <div className="mr-2 rounded-md border p-6 drop-shadow">
        <div className="flex items-center justify-center">
          {eth.data ? (
            <>
              <Image
                layout="fixed"
                height="35"
                width="35"
                src="/small-eth.webp"
              />
              <span className="text-xl font-bold">= {eth.data}$</span>
            </>
          ) : (
            <div className="flex w-full justify-center">
              <Loader size="md" />
            </div>
          )}
        </div>
        <p className="text-lg text-gray-500">Current eth Price</p>
      </div>
      <div className="rounded-md border p-6 drop-shadow">
        <div className="flex items-center justify-center">
          {eth.data ? (
            <>
              <span className="text-xl font-bold">{eth.perItem}</span>
              <Image
                layout="fixed"
                height="35"
                width="35"
                src="/small-eth.webp"
              />
              <span className="text-xl font-bold">= {COURSE_PRICE}$</span>
            </>
          ) : (
            <div className="flex w-full justify-center">
              <Loader size="md" />
            </div>
          )}
        </div>
        <p className="text-lg text-gray-500">Price per course</p>
      </div>
    </div>
  );
}
