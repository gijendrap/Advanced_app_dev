
const pricingData = [
  {
    name: 'Basic',
    price: 'FREE',
    description: 'The Basic Plan offers a perfect starting point for job seekers.',
    features: [
      'Limited access',
      'Apply to a limited number',
      'Standard email support'
    ]
  },
  {
    name: 'Premium',
    price: '€19 /mo',
    description: 'Elevate your job search experience with the Premium Plan.',
    features: [
      'Unlimited access',
      'Unlimited job applications',
      'Premium profile features',
      'chat support'
    ]
  },
  {
    name: 'Enterprise',
    price: '€39 /mo',
    description: 'For businesses and organizations with specific requirements and high-volume hiring needs.',
    features: [
      'Customized features',
      'Dedicated account manager',
      'API access'
    ]
  }
];

const PricingPanel = () => {
  return (
    <section>
      <div className="container max-w-full mx-auto py-28 px-6">
        <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
          Pricing
        </h1>
        <p className="text-center text-lg text-gray-700 mt-2 px-6">
          We offer flexible pricing plans designed to accommodate businesses of all sizes and budgets.
        </p>
        <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

        <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          {/* Pricing panels */}
          <div className="relative block flex flex-col md:flex-row items-center">
            {pricingData.map((plan, index) => (
              <div key={index} className={`w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-${index === 1 ? '10' : '0'} rounded-lg shadow-lg ${index === 1 ? 'md:-ml-4' : 'md:-mr-4'}`}>
                {index === 1 && <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                  Most Popular
                </div>}
                <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      {plan.name}
                    </h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">{plan.price}</h2>
                    <p>{plan.description}</p>
                  </div>
                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="rounded-full p-2 fill-current text-green-700">
                            <svg
                              className="w-6 h-6 align-middle"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg ml-3">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="block flex items-center p-8 uppercase">
                    <button className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPanel;
