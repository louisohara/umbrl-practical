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
      button: "light",
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
            <p className="p-normal my-[40px]"></p>
          </article>
        );
      })}
    </div>
  );
}
