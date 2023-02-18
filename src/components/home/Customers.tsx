import Link from "next/link";

const Customers = () => {
  const customers = [
    {
      image: "/images/customers/squads.jpg",
      twitter: "SquadsProtocol",
      soladex: "squads",
    },
    {
      image: "/images/customers/streamflow.jpg",
      twitter: "streamflow_fi",
      soladex: "streamflow-finance",
    },
    {
      image: "/images/customers/unique-vcs.jpg",
      twitter: "uniquevcs",
      soladex: "unique-vc",
    },
    {
      image: "/images/customers/guilder.jpg",
      twitter: "gilderxyz",
      soladex: "gilder",
    },
    {
      image: "/images/customers/strata-protocol.jpg",
      twitter: "StrataProtocol",
      soladex: "strata-protocol",
    },
    {
      image: "/images/customers/everlend-finance.png",
      twitter: "EverlendFinance",
      soladex: "everlend",
    },
  ];

  return (
    <div
      className="relative h-56 w-full border-y-4 border-white bg-[url('/images/customers/bg.png')] bg-cover"
      id="customers"
    >
      <div className="flex h-full w-full items-center justify-center gap-x-10">
        {customers.map((customer, key) => (
          <div
            className="customer flex flex-col items-center gap-y-3"
            key={key}
          >
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={`https://soladex.io/project/${customer.soladex}/`}
            >
              <img
                src={customer.image}
                alt={customer.soladex}
                className="h-24 rounded-full border-4 border-white"
              />
            </Link>
            <div className="font-space">
              <Link href={`https://twitter.com/${customer.twitter}`}>
                @{customer.twitter}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="cursor: default absolute -bottom-5 flex w-full items-center justify-center hover:cursor-default">
        <button className="cursor:default h-10 rounded-full bg-white px-8 font-space text-black hover:cursor-default">
          Customers
        </button>
      </div>
    </div>
  );
};

export default Customers;
