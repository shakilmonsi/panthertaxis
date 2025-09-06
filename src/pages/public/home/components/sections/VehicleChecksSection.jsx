import React from "react";
import {
  MdOutlineCheckCircle,
  MdOutlineDocumentScanner,
  MdOutlineAccessTimeFilled,
  MdOutlineAlarm,
} from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const VehicleChecksSection = () => {
  const cardsData = [
    {
      title: "Daily Vehicle Checks",
      description:
        "Complete comprehensive vehicle inspections with our 8-point checklist system. Track everything from tyres to brakes.",
      listItems: [
        "8-point inspection checklist",
        "Photo attachments",
        "Digital signatures",
      ],
      colors: {
        bg: "bg-orange-50",
        border: "border-blue-600/10",
        iconBg: "bg-blue-600",
      },
      icon: <MdOutlineCheckCircle className="h-6 w-6 text-white" />,
    },
    {
      title: "Document Storage",
      description:
        "Securely store and manage all your important vehicle documents with automatic expiry reminders.",
      listItems: [
        "Insurance & MOT certificates",
        "Driver licenses & badges",
        "Email expiry alerts",
      ],
      colors: {
        bg: "bg-green-400/20",
        border: "border-green-100",
        iconBg: "bg-green-600",
      },
      icon: <MdOutlineDocumentScanner className="h-6 w-6 text-white" />,
    },
    {
      title: "Complete History",
      description:
        "Access your complete inspection history with powerful search, filtering, and export capabilities.",
      listItems: [
        "Unlimited history access",
        "CSV & PDF exports",
        "Advanced search & filters",
      ],
      colors: {
        bg: "bg-violet-500/20",
        border: "border-green-100",
        iconBg: "bg-violet-500",
      },
      icon: <MdOutlineAccessTimeFilled className="h-6 w-6 text-white" />,
    },
    {
      title: "Smart Reminders",
      description:
        "Never miss important deadlines with automated email reminders for document expiry and inspections.",
      listItems: [
        "90 & 30 day alerts",
        "Custom notifications",
        "Email & SMS options",
      ],
      colors: {
        bg: "bg-red-700/20",
        border: "border-green-100",
        iconBg: "bg-red-700",
      },
      icon: <MdOutlineAlarm className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div
      id="vehicle-checks"
      className="flex w-full flex-col items-center justify-center gap-10 bg-neutral-600/5 px-4 py-24 sm:px-12 md:px-14 lg:px-20"
    >
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-semibold text-neutral-800 sm:text-4xl md:text-5xl">
          Everything you need for compliant daily checks
        </h1>
        <p className="text-sm font-normal text-neutral-600 sm:text-base">
          Documents, Proofs, and Pro Tips for Seamless Certification.
        </p>
      </div>
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-5 md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`flex h-[400px] w-full max-w-sm flex-shrink-0 flex-col items-start justify-start gap-5 rounded-lg border p-6 sm:w-80 lg:w-72 ${card.colors.bg} ${card.colors.border}`}
          >
            <div
              className={`flex items-center justify-center rounded p-2.5 ${card.colors.iconBg}`}
            >
              {card.icon}
            </div>
            <div className="text-xl font-[600] text-neutral-800">
              {card.title}
            </div>
            <div className="text-base leading-7 font-normal text-neutral-600">
              {card.description}
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                {card.listItems.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="inline-flex w-full items-center gap-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center">
                      <AiOutlineCheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="text-base font-normal text-neutral-500">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleChecksSection;
