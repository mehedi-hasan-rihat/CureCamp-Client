import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#F4F9FF] border-t border-slate-200">
    <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <a
          className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
          href="#MainContent"
        >
          <span className="sr-only">Back to top</span>
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
  
      <div className="lg:flex lg:items-end lg:justify-between">
        <div>
          <div className="flex justify-center items-center gap-2 lg:justify-start">
            <img
            src="https://i.ibb.co.com/t25qYcW/DALL-E-2025-01-14-10-50-58-A-sleek-and-modern-logo-design-with-no-text-featuring-a-minimalist-medica.webp"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <p className='text-2xl font-medium text-primary'>CureCamp</p>
          </div>
  
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed lg:text-left">
          Join us in our mission to bring accessible healthcare to everyone. Our medical camp offers professional health checkups, education, and essential medical support at affordable rates. Together, we can build a healthier and happier community. For inquiries or appointments, contact us today.
          </p>
        </div>
  
        <ul
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
        >
          <li>
            <a className=" transition hover:/75" href="#"> About </a>
          </li>
  
          <li>
            <a className=" transition hover:/75" href="#"> Services </a>
          </li>
  
          <li>
            <a className=" transition hover:/75" href="#"> Projects </a>
          </li>
  
          <li>
            <a className=" transition hover:/75" href="#"> Blog </a>
          </li>
        </ul>
      </div>
  
      <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </footer>
  )
}
