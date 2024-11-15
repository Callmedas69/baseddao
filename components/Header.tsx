import Image from "next/image";
import { useDAOAddresses, useTreasuryBalance } from "hooks";
import Link from "next/link";
import { ETHERSCAN_BASEURL } from "constants/urls";
import CustomConnectButton from "./CustomConnectButton";
import { BASED_NOUNS_MULTISIG, TOKEN_CONTRACT } from "constants/addresses";
import Button from "./Button";
import { useBalance } from "wagmi";
import { formatNumber } from "@/utils/formatNumber";
import { BigNumber, ethers } from "ethers";

export default function Header() {
  const { data: addresses } = useDAOAddresses({
    tokenContract: TOKEN_CONTRACT,
  });
  const { data: treasury } = useTreasuryBalance({
    treasuryContract: addresses?.treasury,
  });

  const { data: multisigBalanceData } = useBalance({
    address: BASED_NOUNS_MULTISIG,
  });

  return (
    <div className="flex pt-10 items-center justify-between w-full px-4 md:px-10 h-[80px] gap-2">
      <div className="flex flex-row gap-4 md:gap-8 justify-start items-center">
        <Link href="/">
          <Image
            src="/noggles.svg"
            width={100}
            height={100}
            alt="Blue"
            className="drop-shadow-xl pt-5"
          />
        </Link>
        <Button variant="outline" size="tight">
          <Link
            href={`${ETHERSCAN_BASEURL}/tokenholdings?a=${addresses?.treasury}`}
            rel="noreferer noopener noreferrer"
            target="_blank"
          >
            <div className="text-lg font-semibold border-[3px] border-[#e5e3d9] rounded-lg px-5 py-2">
              Ξ{" "}
              {treasury
                ? formatNumber(ethers.utils.formatEther(treasury), 2)
                : "0"}
              {(multisigBalanceData?.value ?? BigNumber.from(0)) >
                BigNumber.from(1000) &&
                " + " + formatNumber(multisigBalanceData?.formatted, 2)}
            </div>
          </Link>
        </Button>
      </div>

      <CustomConnectButton className="bg-skin-backdrop px-6 h-10 rounded-xl border border-skin-stroke text-skin-base transition ease-in-out hover:scale-110" />
    </div>
  );
}
