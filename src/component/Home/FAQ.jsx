import FAQIMG from "../../assets/FAQ.svg";
import Container from "../sharedComponent/Container";

export default function FAQ() {
  // Medical camp FAQ questions and answers
  const faqData = [
    {
      question: "What medical services are available at the camp?",
      answer:
        "We offer basic health checkups, first-aid treatments, and consultation services for common medical conditions.",
    },
    {
      question: "Do I need to register in advance?",
      answer:
        "Yes, pre-registration is required to ensure a smooth process. Walk-ins may be accommodated based on availability.",
    },
    {
      question: "Are there specialists available for consultations?",
      answer:
        "Yes, specialists like general physicians, pediatricians, and gynecologists are available during scheduled hours.",
    },
    {
      question: "Is the camp open to all age groups?",
      answer:
        "Absolutely! We welcome individuals of all ages, from children to the elderly, to attend and receive care.",
    },
  ];

  return (
    <Container>
      <div className="text-center text-2xl font-semibold mb-8">
        <h3>Medical Camp FAQ</h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-20">
        {/* FAQ Section */}
        <div className="w-full flex items-center">
          <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white/50 flex-1">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="group p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="text-lg font-medium">{faq.question}</h2>
                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* FAQ Image */}
        <div className="h-[500px]">
          <img
            src={FAQIMG}
            alt="FAQ Illustration"
            className="h-full object-contain"
          />
        </div>
      </div>
    </Container>
  );
}
