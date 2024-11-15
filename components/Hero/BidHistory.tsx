import { Bid } from "@/services/nouns-builder/auction";
import { formatNumber } from "@/utils/formatNumber";
import { utils } from "ethers";
import ExternalLink from "../ExternalLink";
import Image from "next/image";
import { ETHERSCAN_BASEURL } from "constants/urls";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../Dialog";
import { twMerge } from "tailwind-merge";
import WalletInfo from "../WalletInfo";

function BidRow({ bid, tight }: { bid: Bid; tight: boolean }) {
  return (
    <div
      className={twMerge(
        "flex flex-row  justify-between items-center w-full text-[#182e6f]",
        !tight && "py-3 border-b-2 border-transparent/10"
      )}
    >
      <WalletInfo address={bid.bidder} size="sm" />
      <ExternalLink href={`${ETHERSCAN_BASEURL}/tx/${bid.transactionHash}`}>
        <div className="flex flex-row gap-2 items-center hover:opacity-70 transition-opacity">
          <div className="text-[#182e6f] text-lg font-semibold">
            Ξ {formatNumber(utils.formatEther(bid.bidAmount || "0"), 5)}
          </div>
          <Image
            src="/link.svg"
            width={24}
            height={24}
            alt="view"
            className=" "
          />
        </div>
      </ExternalLink>
    </div>
  );
}

export default function BidHistory({
  tokenId,
  tokenImage,
  bids,
  numToShow,
  title,
}: {
  tokenId: string;
  tokenImage?: string;
  bids?: Bid[];
  numToShow: number;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center">
      {bids?.slice(0, numToShow).map((bid, i) => {
        return <BidRow bid={bid} tight={false} key={i} />;
      })}
      {(bids?.length ?? 0) > numToShow && (
        <Dialog>
          <DialogTrigger>
            <h6 className="pt-3  text-[#182e6f] hover:text-primary/70">
              {title}
            </h6>
          </DialogTrigger>
          <DialogContent className="flex flex-col text-[#182e6f] max-h-[90vh] md:max-h-[70vh]">
            <DialogHeader>
              <div className="flex flex-row gap-4 items-center border-b-2 p-6">
                <Image
                  src={tokenImage ?? ""}
                  width={64}
                  height={64}
                  alt=""
                  className="rounded-xl border-transparent/10 border-2"
                />
                <div className="flex flex-col items-start">
                  <h6>Bids for</h6>
                  <h5>Based Dao #{parseInt(tokenId, 16)}</h5>
                </div>
              </div>
            </DialogHeader>
            <div className="flex flex-col text-[#182e6f] gap-6 p-6 overflow-y-auto">
              {bids?.map((bid, i) => <BidRow bid={bid} tight={true} key={i} />)}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
