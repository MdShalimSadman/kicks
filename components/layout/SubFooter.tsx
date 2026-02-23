import { ReactNode } from 'react';
import Link from 'next/link'; 
import Image from 'next/image'; 
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import TiktokIcon from '../icons/TiktokIcon';

interface SocialItem {
  name: string;
  icon: ReactNode;
  href: string;
}

const SubFooter = () => {
  const categories = ["Runners", "Sneakers", "Basketball", "Outdoor", "Golf", "Hiking"];
  const companyLinks = ["About", "Contact", "Blogs"];
  
  const socials: SocialItem[] = [
    { name: "Facebook", icon: <FacebookIcon />, href: "#" },
    { name: "Instagram", icon: <InstagramIcon />, href: "#" },
    { name: "Twitter", icon: <TwitterIcon />, href: "#" },
    { name: "TikTok", icon: <TiktokIcon />, href: "#" },
  ];

  return (
    <section className="rounded-3xl lg:rounded-[48px] bg-textColor pt-6 lg:pt-10 overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row justify-between gap-7 mb-11 lg:mb-16 px-4 lg:px-10">
        <div className="flex flex-col gap-1 lg:gap-4">
          <h3 className="text-accent text-2xl lg:text-4xl font-semibold tracking-wider">About us</h3>
          <p className="text-gray text-base lg:text-lg font-sans max-w-xs">
            We are the biggest hyperstore in the universe. 
            We got you all cover with our exclusive collections and latest drops.
          </p>
        </div>

        <SubFooterList title="Categories" items={categories} />

        <SubFooterList title="Company" items={companyLinks} />

        <div className="flex flex-col gap-4">
          <h3 className="text-accent text-[20px] lg:text-2xl font-semibold tracking-wider">Follow us</h3>
          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <Link 
                key={social.name} 
                href={social.href} 
                className="text-gray hover:text-accent transition-all duration-300"
                aria-label={social.name}
              >
                <div className="w-5 h-5">
                   {social.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-1 lg:px-7.25 relative w-full h-auto mt-auto">
        <Image 
          src="/images/bottom-logo.svg"
          alt="Bottom logo"
          width={1400} 
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
};

const SubFooterList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-accent text-[20px] md:text-2xl font-semibold tracking-wider">{title}</h3>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item}>
          <Link 
            href={`/`} 
            className="text-gray text-base lg:text-lg font-normal hover:text-accent transition-colors duration-200"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default SubFooter;