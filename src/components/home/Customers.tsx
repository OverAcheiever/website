const Customers = () => {
  const customers = [
    {
      image: "/images/customers/squads.jpg",
      twitter: "SquadsProtocol",
      soladex: "squads"
    },
    {
      image: "/images/customers/streamflow.jpg",
      twitter: "streamflow_fi",
      soladex: "streamflow-finance"
    },
    {
      image: "/images/customers/unique-vcs.jpg",
      twitter: "uniquevcs",
      soladex: "unique-vc"
    },
    {
      image: "/images/customers/guilder.jpg",
      twitter: "gilderxyz",
      soladex: "gilder"
    },
    {
      image: "/images/customers/strata-protocol.jpg",
      twitter: "StrataProtocol",
      soladex: "strata-protocol"
    },
    {
      image: "/images/customers/everlend-finance.png",
      twitter: "EverlendFinance",
      soladex: "everlend"
    },
  ];

  return (
    <div className="relative h-56 w-full border-y-4 border-white bg-[url('/images/customers/bg.png')] bg-cover" id="customers">
      <div className="flex h-full w-full items-center justify-center gap-x-10">
        {customers.map((customer, key) => (
          <div className="flex flex-col items-center gap-y-3 customer" key={key}>
            <a rel="noopener noreferrer" target="_blank" href={`https://soladex.io/project/${customer.soladex}/`}>
              <img
                src={customer.image}
                alt={customer.soladex}
                className="h-24 rounded-full border-4 border-white"
              />
            </a>
            <div className="font-space"><a href={`https://twitter.com/${customer.twitter}`}>@{customer.twitter}</a></div>
          </div>
        ))}
      </div>

      <div className="absolute -bottom-5 flex w-full items-center justify-center cursor: default hover:cursor-default">
        <button className="h-10 rounded-full bg-white px-8 font-space text-black cursor:default hover:cursor-default">
          Customers
        </button>
      </div>
    </div >
  );
};

export default Customers;
