import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navButton = (): void => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="sticky top-2 px-5 max-sm:px-2">
        <div className="relative flex justify-between px-10 max-md:px-5 py-3 rounded-2xl my-2 shadow-lg w-full bg-white">
          <div className="flex font-semibold md:text-xl my-auto">
            <img src="public/favicon-32x32.png" alt="icons" /> <h1 className="my-auto"> Rice Disease Detection</h1>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={navButton}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <ul className={`space-x-5 font-normal md:flex ${isOpen ? 'absolute top-15 right-0 py-2 px-5 rounded-tl-2xl rounded-br-2xl space-y-3 shadow-lg bg-white' : 'hidden'}`} id="navbar-default">
            <li>
              <a href="#home" className="font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#predict">Predict</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="px-5 max-sm:px-2 w-full h-screen" id="home">
        <section className="bg-center bg-no-repeat grid h-8/9 bg-[url('/jum.png')] bg-gray-700 bg-blend-multiply rounded-2xl" >
          <div className="px-4 m-auto max-w-screen-xl text-center">
            <img src="/android-chrome-192x192.png" className='m-auto w-[50px]' loading='lazy' alt="icon" />
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl"> Rice Disease Detection with AI</h1>
            <p className="mb-8 text-sm md:text-lg font-normal text-gray-300 sm:px-16 lg:px-48">Empowering Farmers with AI – Identify rice plant diseases with precision and visualize insights using GradCAM!</p>
            <div className="flex flex-row space-y-4 justify-center">
              <a href="#predict" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:border-blue-300 focus:ring-2 focus:ring-gray-400">
                Get started
              </a>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
