import Image from "next/image";
import ExternalLink from "./ExternalLink";

export default function Description() {
  return (
    <div className="bg-[#305cde] w-full flex flex-col justify-center items-center gap-0">
      <div className="w-full h-[60px] relative translate-y-1">
        {/* <Image src="/white-drip.png" fill={true} alt="" /> */}
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-[1200px] mx-auto px-4 gap-8">
        {/* NOUNS 584 */}
        <div className="relative flex-shrink-0 flex flex-col items-center md:items-start">
          <Image
            src="/Nouns584.svg"
            alt="Nouns 584"
            width={250}
            height={250}
            className="rounded-full bg-amber-500 ring-offset-2 ring-4 ring-[#f9f9f7] hover:ring-8"
          />
          <h2 className="text-[#f9f9f7] py-5">NOUNS #584</h2>
        </div>

        {/* DESCRIPTION */}
        <div className="flex-1 flex justify-start text-[#f9f9f7]">
          <div className="max-w-[720px] px-6 flex flex-col gap-4 text-[#f9f9f7]">
            <h1>What Are Based Dao?</h1>
            <p>
              Welcome to the Based Dao brought to you by Based Nouns. A DAO
              built on the innovative Base chain. Our mission is to ignite
              identity, foster a vibrant community, establish effective
              governance, and cultivate a robust treasury that empowers and
              benefits our collective.
            </p>
            <p>
              The Based Dao is a pioneer onchain community on the Base Chain
              &#40;Ethereum L2 network&#41;, designed to support and empower
              builders, artists, and creatives in the Nouns and{" "}
              <ExternalLink href="https://docs.optimism.io/stack/explainer">
                Superchain
              </ExternalLink>{" "}
              ecosystems. One Based Noun will be auctioned off every day,
              forever.
            </p>
            <p>
              At Based Dao, we have taken inspiration from Nouns Dao&apos;s
              successful model and evolved it to suit the unique potential of
              the BASE network. Our DAO is a decentralized, community-driven
              initiative that strives to create a positive impact by actively
              supporting and financing groundbreaking ideas while promoting
              collaborative efforts across various fields.
            </p>
            <p className="font-bold">
              Minting a Based Noun is a signal to your network that you love
              Nouns, that you believe in the power of Superchain.
            </p>
            <h2 className="py-4">
              Nouns Made By the Community, For the Community
            </h2>
            <p className="pb-10">
              Discover the limitless possibilities that arise when diverse minds
              come together under a shared mission. Based Dao is not just
              another DAO; it&apos;s a thriving ecosystem driven by innovation,
              inclusivity, and a relentless pursuit of positive change.
              Together, let&apos;s forge a stronger and more connected future –
              one BASED NOGGLE at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
