export default function Hero() {
  return (
    <section className="mt-[97px] gap-[53px] mb-[115px]">
      <div className="text-center mb-[53px]">
        <h1 className="h1 mb-[44px]">Pricing & Plans</h1>
        <p className="p-subheader h-[93px]">
          With lots of unique blocks, you can easily build a page without
          coding. <br />
          Build your next consultancy website within few minutes.
        </p>
      </div>
      <div>
        <ul className="p-normal flex gap-4 items-center justify-center mb-[53px]">
          <li className="flex gap-4 items-center">
            Monthly
            <span className="bg-grey2 w-[72px] relative h-[33px] rounded-full">
              <span className="rounded-full absolute top-[6px] left-2 h-[21px] w-[21px] bg-white z-10"></span>
            </span>
          </li>
          <li className="flex gap-4">
            Yearly{" "}
            <span className="p-small-blue bg-blue bg-opacity-[8%] font-bold text-[13px] rounded-full w-[95px] h-[29px] text-center align-bottom">
              SAVE 25%
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
