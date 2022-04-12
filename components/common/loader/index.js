import { ThreeBounce } from "better-react-spinkit";
import Image from "next/image";

export default function Loader() {
    return (
        <div>
            <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
              src="/public/vercel.svg"
              height={250}
              width={600}
              objectFit="contain"
              className="animate-pulse"
          />
        </span>
                <ThreeBounce size={23} color="#884115" />
            </div>
        </div>
    );
}


