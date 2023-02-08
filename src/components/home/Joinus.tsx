import Link from 'next/link';

const Joinus = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[url('/images/amazing.png')] bg-cover bg-no-repeat" id="joinus">
      <div className="flex h-full flex-col items-center justify-center ">
        <div className="text-center font-tt text-[7rem] leading-[1] " id="join_heading">
          Become One of Us <br />
        </div>
      <div className="mt-10 text-left font-space text-xl mw50 mb-24">
      The Dean&apos;s List DAO is looking for talented and passionate individuals to become one of us. <Link href="https://crew3.xyz/c/dldao/invite/mOPfotU3wcvr0euHSemO">Join us on Crew3</Link>, complete some quests and show us what you are made of. <br />{" "}
      </div>

        <Link href="https://crew3.xyz/c/dldao/invite/mOPfotU3wcvr0euHSemO_">
        <button className="group flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
          Start your journey today
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Joinus;

