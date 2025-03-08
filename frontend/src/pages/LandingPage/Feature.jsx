import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconBrain,
  IconChartBar,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconShieldCheck,
  IconTerminal2,
  IconTrophy,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Blockchain Coding Challenges",
      description:
        "Solve real-world blockchain coding problems with automated test execution on Ethereum, Polygon, and Aptos.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Smart Contract Deployment & Testing",
      description:
        "Deploy and test smart contracts in a sandboxed environment with gas estimation and security analysis.",
      icon: <IconEaseInOut />,
    },
    {
      title: "AI-Powered Course Generation",
      description:
        "Personalized AI-generated courses on blockchain development, cryptography, and smart contract security.",
      icon: <IconBrain />,
    },
    {
      title: "Blockchain Hackathons & Coding Contests",
      description:
        "Compete in blockchain-focused hackathons and coding contests with on-chain leaderboards and prize pools.",
      icon: <IconTrophy />,
    },
    {
      title: "Global Leaderboards & Rankings",
      description:
        "Climb the leaderboard by solving blockchain challenges and winning contests. Earn reputation points and rewards.",
      icon: <IconChartBar />,
    },
    {
      title: "AI-Powered Code Review & Security Analysis",
      description:
        "Get instant AI-driven feedback on your smart contracts, including gas optimizations and vulnerability detection.",
      icon: <IconShieldCheck />,
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-200">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
