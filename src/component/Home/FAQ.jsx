import FAQIMG from "../../assets/FAQ.svg";
import Container from "../sharedComponent/Container";

export default function FAQ() {
    const loop = [1,2,3,4]
  return (
    <Container>
        <div className="text-center text-2xl font-semibold">
            <h3>FAQ</h3>
        </div>
      <div className="flex justify-between  gap-20">
       

          <div className="w-full flex items-center">
          <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white/50 flex-1">
          {loop.map((data) => {
           return   <details key={data}
              className="group p-6 [&_summary::-webkit-details-marker]:hidden"
            
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

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

              <p className="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>

          })}
          </div>
          </div>
          <div className="h-[500px]">
          <img src={FAQIMG} alt="" className="h-full" />
        </div>
      </div>
    </Container>
  );
}
