import ArrowIcon from "/public/images/icon-arrow.svg";

export default function Header({ inputField }) {
  return (
    <header className="flex flex-col justify-center items-center pb-23 pt-5">
      <h1 className="text-5xl text-center mb-5 text-white">
        IP Address Tracker
      </h1>
      {/* INPUT-CONTAINER */}
      <div className="flex w-full max-w-[500px] relative">
        <input
          ref={inputField}
          className="bg-white text-black w-full h-10 rounded-xl px-4 pr-12 placeholder:text-[#D0D0D0] outline-none"
          type="text"
          placeholder="Search for any IP address or domain"
          id="inputField"
          name="inputField"
        />
        <button className="absolute top-0 right-0 h-full w-12 bg-black flex justify-center items-center rounded-r-xl cursor-pointer hover:bg-[#2f2e2e] duration-300 z-10">
          <img src={ArrowIcon} alt="ArrowIcon" />
        </button>
      </div>

      <p className="my-2 text-center text-[12px] text-white font-serif italic">
        See general info about any public IP —{" "}
        <a
          href="https://en.wikipedia.org/wiki/IP_address"
          target="_blank"
          className="text-black font-serif italic no-underline hover:underline"
        >
          Read more
        </a>
      </p>
    </header>
  );
}
