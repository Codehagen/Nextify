import { Balancer } from "react-wrap-balancer";
import { Icons } from "../Icons/icons";

export function Hero() {
  return (
    <section className="pt-24 bg-white">
      <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <a
            href="https://twitter.com/immoinulmoin/status/1661645764697919489"
            title="Follow Updates"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-2xl bg-muted text-sm font-medium px-7 py-2 transition-colors duration-300 ease-linear animate-in slide-in-from-top hover:bg-blue-200"
          >
            <Icons.twitter className="h-5 w-5 " />
            <p className="text-sm ">Introducing Nextify</p>
          </a>
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <Balancer>
              <span>Start</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                building a buzz
              </span>{" "}
              <span>around your product ?</span>
            </Balancer>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Start gaining the traction youve always wanted with our next-level
            templates and designs. Crafted to help you tell your story.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0"
            >
              Get Started
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
