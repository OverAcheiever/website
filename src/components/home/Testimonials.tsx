import Link from 'next/link';

const Testimonials = () => {
  const testimonials = [
    {
      message:
        "Shout out to @GrapeDeansList for creating a fantastic service, great output so far! Thank you all for the amazing review!",
      author: "streamflow_fi",
    },
    {
      message:
        "Impressed with the amount of feedback there and in this channel. We have either fixed or planning to fix most of these issues reported, and incorporating your feedback in our future roadmap",
      author: "Restuta",
    },
    {
      message:
        "Better link now. Don't sleep on @grapeprotocol and @GrapeDeansList",
      author: "redacted_noah",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center bg-[url('/images/testimonials/bg.png')] bg-cover pt-40">
      <div className="text-center font-tt text-7xl ">
      GET BETTER WITH <br /> FEEDBACK
      </div>
      <div className="mt-10 text-center font-space text-xl">
        Dean&apos;s List is a Service DAO consisting of Web3 power users, <br />{" "}
        who provide valuable feedback sessions to projects
      </div>
      <div className="mt-10 text-left font-space text-xl mw50">
      The Dean&apos;s List feedback platform provides a reliable and trustworthy space for you to receive valuable insights and suggestions from a diverse community of experts and users. By leveraging the power of the Web3 ecosystem, you can be confident that your feedback is secure, transparent, and protected against tampering. Whether you are a developer, entrepreneur, or simply looking to improve your project, the Dean&apos;s List provides the tools and resources you need to succeed. So why wait? <Link href="https://coinablepay.com/store/deans-list">Get started today</Link> and bring your project to the next level with the Dean&apos;s List! <br />{" "}
      </div>

      <div className="grid grid-cols-3 gap-5 py-20 font-space">
        {testimonials.map((testimonial, key) => (
          <div
            key={key}
            className="border-[rgba(255,255,255, 0.5)] flex max-w-xs flex-col justify-between rounded border-[1px] bg-[rgba(255,255,255,0.1)] p-5 text-gray-200"
          >
            {testimonial.message}

            <div className="pt-5 text-white">@{testimonial.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
