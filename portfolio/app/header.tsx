"use client";

const Header = () => {
  return (
    <header className="w-full bg-[#1f1f1f] text-white py-7 overflow-x-hidden overflow-y-hidden">
      <div className=" mx-auto flex justify-between px-5 items-center">
        <div className="text-1xl ml-2 font-bold">MAR.AI</div>

        <button className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
          Hello
          <span className="text-slate-300/85"> ─ work with Maria</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
