import { useTheme } from "@/hooks/useTheme";
import NavigationItemComponent from "./NavigationItem";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "./ExternalLink";

const navItems = [
  // {
  //   href: "https://www.tiktok.com/@thenounsquare",
  //   src: "/tiktok.svg",
  // },
  // {
  //   href: "https://www.instagram.com/thenounsquare",
  //   src: "/instagram.svg",
  // },
  {
    href: "https://twitter.com/basednouns",
    src: "/x.svg",
  },
  // {
  //   href: "https://www.youtube.com/channel/UC1Iqmi7SCEzWlWP-huyh9xw",
  //   src: "/youtube.svg",
  // },
  {
    href: "https://warpcast.com/~/channel/basednouns",
    src: "/farcaster.svg",
  },
  {
    href: "https://warpcast.com/~/channel/basednouns",
    src: "/discord.svg",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-row justify-between w-full items-center px-16 py-3 bg-[#182e6f]">
      <div className="flex flex-wrap items-center gap-4">
        {navItems.map((item, i) => (
          <Button variant="secondary" size="rounded" key={i}>
            <Link
              href={item.href}
              target="_blank"
              rel="noreferer noopener noreferrer"
            >
              <Image src={item.src} width={20} height={20} alt="" />
            </Link>
          </Button>
        ))}
      </div>
      <div className="caption text-secondary">0xD.⌐◨-◨</div>
    </div>
  );
}
