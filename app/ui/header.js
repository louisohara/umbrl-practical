import clsx from "clsx";

export default function Header() {
  const links = [
    { id: 1, link: "Demos" },
    { id: 2, link: "Pages" },
    { id: 3, link: "Support" },
    { id: 4, link: "Contact" },
    { id: 5, link: "Sign In" },
    { id: 6, link: "Sign Up" },
  ];
  return (
    <header className="my-4 flex flex-row justify-between items-center w-full">
      <p className="font-bold text-2xl cursor-pointer">Brainwave.io</p>

      <nav>
        <ul className="flex items-center">
          {links.map((link, i) => {
            return (
              <>
                <li
                  className={clsx("font-bold mx-[29px] cursor-pointer", {
                    "bg-blue text-white py-2 px-8 mx-0 rounded-md": i === 5,
                  })}
                  key={link.id}
                >
                  {link.link}
                </li>
                {i === 3 ? (
                  <div className="w-[1px] h-[26px] border-[1px] border-grey"></div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
