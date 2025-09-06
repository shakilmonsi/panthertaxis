import React from "react";

const PricingSection = () => {
  const pricingData = [
    {
      title: "Monthly Subscription",
      price: "£5/monthly",
      period: "Per Month",
      trial: "10-Day FREE Trial",
      trialNote: "No payment required",
      features: [
        "Daily vehicle checks",
        "Full history & export",
        "Expiry date reminders",
        "Useful Link",
        "Cancel anytime.",
      ],
      isAnnual: false,
    },
    {
      title: "Annual Subscription",
      price: "£99/year",
      period: "Annual",
      trial: "10-Day FREE Trial",
      trialNote: "No payment required",
      features: [
        "Daily vehicle checks",
        "Full history & export",
        "Expiry date reminders",
        "Useful Link",
        "Cancel anytime.",
      ],
      isAnnual: true,
    },
  ];

  const CheckmarkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-green-500"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div
      id="pricing"
      className="flex w-full flex-col items-center justify-center gap-4 bg-blue-600/5 px-4 py-24 sm:px-12 md:px-16 lg:px-24"
    >
      {/* Section Header */}
      <div className="flex max-w-7xl flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-start gap-4 text-center">
          <h1 className="text-3xl font-semibold text-neutral-800 sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="text-sm font-normal text-neutral-600 sm:text-base">
            Start with a free trial, then choose the plan that works for you.
          </p>
        </div>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`w-full max-w-sm transform overflow-hidden rounded-2xl shadow-[20px_20px_36px_0px_rgba(18,118,249,0.20)] transition-all duration-300 md:w-96 lg:w-96 ${plan.isAnnual ? "bg-blue-600 text-white" : "bg-white text-zinc-700"}`}
          >
            {/* Price Header Section */}
            <div
              className={`flex w-full flex-col items-center justify-start gap-3 px-6 py-6 ${plan.isAnnual ? "bg-blue-600 text-white" : "bg-white text-zinc-700"}`}
            >
              <div className="flex flex-col items-center justify-start gap-3 self-stretch">
                <div className="text-xl font-[600]">{plan.title}</div>
                <div className="text-3xl font-[700]">{plan.price}</div>
              </div>
              <div className="text-base font-normal capitalize">
                {plan.period}
              </div>
              <div
                className={`flex flex-col items-center justify-start self-stretch rounded-lg p-2 font-[600] outline outline-1 outline-offset-[-1px] ${plan.isAnnual ? "bg-blue-500/20 outline-blue-500/10" : "bg-white outline-neutral-600/5"}`}
              >
                <div
                  className={`text-sm font-semibold ${plan.isAnnual ? "text-white" : "text-yellow-900"}`}
                >
                  {plan.trial}
                </div>
                <div
                  className={`text-xs font-normal ${plan.isAnnual ? "text-white" : "text-yellow-900"}`}
                >
                  {plan.trialNote}
                </div>
              </div>
            </div>

            {/* Features & Buttons Section */}
            <div className="flex flex-col items-center justify-start gap-6 bg-[#FFF] px-5 pb-8">
              <div className="flex w-full flex-col items-start justify-start gap-2 pt-6">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="inline-flex w-full items-center justify-start gap-3"
                  >
                    <CheckmarkIcon />
                    <div
                      className={`text-base font-normal ${plan.isAnnual ? "text-[#747474]" : "text-neutral-500"}`}
                    >
                      {feature}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col items-center justify-start gap-3 self-stretch">
                <button className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-lg bg-blue-600 p-2.5">
                  <span className="text-base font-[600] text-white">
                    Start Free Trial
                  </span>
                </button>
                <button className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-lg p-2.5 outline outline-1 outline-offset-[-1px] outline-blue-600">
                  <span className="text-base font-[600] text-blue-600">
                    Subscribe Now
                  </span>
                </button>
                <div className="w-full text-center text-xs leading-tight font-normal text-neutral-600">
                  Cancel anytime • No hidden fees • Secure payments
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
