import { rubik } from "@/app/ui/fonts";
import clsx from "clsx";
import Image from "next/image";

export default function PriceCard() {
  const cardData = [
    {
      id: 1,
      title: "STARTER",
      price: "19",
      list: [
        { icon: "tick", label: "Commercial License" },
        { icon: "tick", label: "100+ HTML UI Elements" },
        { icon: "tick", label: "01 Domain Supreme" },
        { icon: "cross", label: "6 Month Premium" },
        { icon: "cross", label: "Lifetime Updates" },
      ],
      button: "light",
    },
    {
      id: 2,
      title: "STANDARD",
      price: "49",
      list: [
        { icon: "tick", label: "Commercial License" },
        { icon: "tick", label: "100+ HTML UI Elements" },
        { icon: "tick", label: "Unlimited Domains" },
        { icon: "tick", label: "6 Month Premium" },
        { icon: "cross", label: "Lifetime Updates" },
      ],
      button: "dark",
    },
    {
      id: 3,
      title: "PREMIUM",
      price: "99",
      list: [
        { icon: "tick", label: "Commercial License" },
        { icon: "tick", label: "100+ HTML UI Elements" },
        { icon: "tick", label: "Unlimited Domain" },
        { icon: "tick", label: "6 Month Premium" },
        { icon: "tick", label: "Lifetime Updates" },
      ],
      button: "light",
    },
  ];

  return (
    <div className="flex w-full justify-center gap-[31px]">
      {cardData.map((card) => {
        return (
          <article
            key={card.id}
            className="px-[48px] py-[37px] border rounded-md border-grey w-[350px]"
          >
            <h4 className="p-small-blue m-0 tracking-wider">{card.title}</h4>
            <p className="p-normal my-[40px]">
              <span className="font-bold text-[30px]">$</span>
              <span className="h1">{card.price}</span>
              <span className={`${rubik.className}`}>/ month</span>
              <span className="p-grey block">billed monthly</span>
            </p>
            <ul className="flex flex-col gap-[15px] mb-10">
              {card.list.map((item) => {
                return (
                  <li
                    className={clsx(
                      "flex gap-2 p-normal items-center",
                      {
                        "p-normal": item.icon === "tick",
                      },
                      { "p-normal-grey": item.icon === "cross" }
                    )}
                  >
                    <Image
                      src={
                        item.icon === "tick"
                          ? "icons/tick.svg"
                          : "icons/cross.svg"
                      }
                      alt={item.icon}
                      height={16}
                      width={16}
                    />
                    {item.label}
                  </li>
                );
              })}
            </ul>
            <button
              className={clsx(
                "rounded-md flex justify-between gap-8 items-center font-bold p-4 bg-blue",
                { "bg-opacity-[8%] text-blue": card.button === "light" },
                { "text-white": card.button === "dark" }
              )}
            >
              Start Free Trial
              <Image
                src={
                  card.button === "light"
                    ? "/icons/arrow-blue.svg"
                    : "/icons/arrow-white.svg"
                }
                height={16}
                width={16}
                alt="arrow"
              />
            </button>
            <p className="mt-[11px] mb-0 p-small-grey">
              No credit card required
            </p>
          </article>
        );
      })}
    </div>
  );
}
