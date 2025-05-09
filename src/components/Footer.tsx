import type { JSX } from 'react';
import { faGithub, faTwitch, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconLink from './reusable-ui/IconLink';


export default function Footer(): JSX.Element {
    const appName = import.meta.env.VITE_APP_NAME;
    const currentYear = new Date().getFullYear();
    const initialYear: number = 2025;

    return(
        <footer className='w-full px-4 py-4 mt-auto text-center bg-lime-800/30 dark:bg-blue-900/90 transition-colors duration-300 ease-in-out border-1 border-dotted dark:border-indigo-600 border-lime-600'>
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-extrabold md:text-3xl font-roboto text-lime-700 dark:text-white uppercase'>
                    {appName}
                </h1>
            </div>

            <hr className='border-b-4 max-w-[75vw] w-auto mx-auto my-2 border-black/10 dark:border-neutral-200/20' />

            {/* Socials icons */}
            <div className='flex flex-wrap items-center justify-center mt-2 space-x-0 space-y-0'>
                {/* GitHub icon */}
                <IconLink 
                    icon={faGithub}
                    link='https://github.com/h0ldhaven'
                    className='hover:text-[#141414] text-lime-700 dark:text-white'
                    label='Bouton de redirection vers la page github'
                />

                {/* Twitch Icon */}
                <IconLink 
                    icon={faTwitch}
                    link='https://twitch.tv/h0ldhaven'
                    className='hover:text-[#9146FF] text-lime-700 dark:text-white'
                    label='Bouton de redirection vers la page twitch'
                />

                {/* TikTok Icon */}
                <IconLink 
                    icon={faTiktok}
                    link='https://tiktok.com/@h0ldhaven'
                    className='hover:text-[#D6004C] text-lime-700 dark:text-white'
                    label='Bouton de redirection vers la page TikTok'
                />

                {/* Instagram Icon */}
                <IconLink 
                    icon={faInstagram}
                    link='https://instagram.com/holdhaven/'
                    className='hover:text-[#E1306C] text-lime-700 dark:text-white'
                    label='Bouton de redirection vers la page Instagram'
                />

                {/* YouTube Icon */}
                <IconLink 
                    icon={faYoutube}
                    link='https://youtube.com/@h0ldhaven'
                    className='hover:text-[#FF0000] text-lime-700 dark:text-white'
                    label='Bouton de redirection vers la page YouTube'
                />
            </div>

            {/* Footer text */}
            <div className='flex flex-col flex-wrap'>
                <div className='flex flex-row flex-wrap justify-center items-center content-center font-roboto gap-2 mt-2 text-lime-700 dark:text-white'>
                    <p className='text-base md:text-lg' role='text'>
                        Copyright <span aria-hidden='true' >©</span> - {initialYear === currentYear ? currentYear : `${initialYear} - ${currentYear}`}
                    </p>
                    <p className='relative before:not-italic before:content-["|"] before:px-2 before:hidden md:before:inline-block text-sm italic md:text-base opacity-90'>
                        Tous droits réservés
                    </p>
                    <h3 className='md:text-base relative before:content-["|"] before:px-2 before:hidden md:before:inline-block'>
                        made with <FontAwesomeIcon className='text-red-600 animate-bounce duration-800 ease-out m-0 px-1' icon={faHeart} /> by h0ldhaven
                    </h3>
                </div>
            </div>
        </footer>
    );
};