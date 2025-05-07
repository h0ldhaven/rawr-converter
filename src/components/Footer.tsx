import type { JSX } from 'react';


export default function Footer(): JSX.Element {
    const appName = import.meta.env.DEV;
    const currentYear = new Date().getFullYear();
    const initialYear: number = 2025;

    return(
        <footer className='w-full px-4 py-4 mt-auto text-center text-white dark:bg-cyan-800/90 bg-blue-800/80 transition-colors duration-300 ease-in-out border-1 border-black'>
            <h1 className='text-2xl font-extrabold md:text-3xl font-roboto'>
                {appName}
            </h1>

            {/* Socials icons */}
            <div className='flex flex-wrap items-center justify-center mt-2 space-x-0 space-y-0'>

            </div>

            <hr className='border-b-4 max-w-[75vw] w-auto mx-auto my-2 border-black/10' />

            {/* Footer text */}
            <p className='mt-1 text-base md:text-lg font-roboto' role='text'>
                Copyright <span aria-hidden='true' >©</span> - {initialYear === currentYear ? currentYear : `${initialYear} - ${currentYear}`}
            </p>
            <p className='mt-1 text-sm italic md:text-base font- opacity-90'>
                Tous droits réservés
            </p>
        </footer>
    );
};