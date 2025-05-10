import React, { useEffect  } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SwitchButton } from './reusable-ui/SwitchButton';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

export const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const appName = import.meta.env.VITE_APP_NAME;

    const { theme } = useTheme();

    useEffect(() => {
        // Modifier le titre de la page HTML
        document.title = appName;
    }, [appName]);

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.location.reload();
        } else {
            navigate('/');
        }
    };
    return(
        <header className='relative overflow-clip'>
            { theme === 'light' ? (
                <img 
                    src={`${import.meta.env.BASE_URL}images/png/header_background.png`} 
                    alt='Header background' 
                    className='absolute w-full h-full object-cover border-1 border-dotted z-10'
                    aria-hidden='true'
                />
            ): (
                <img 
                    src={`${import.meta.env.BASE_URL}images/png/header_background_black.png`} 
                    alt='Header background' 
                    className='absolute w-full h-full object-cover border-1 border-dotted z-10'
                    aria-hidden='true'
                />
            )}
            
            {/* Switch bouton en haut à droite */}
            <div className='absolute top-4 right-4 z-20'>
                <SwitchButton
                    firstIcon={FaMoon}
                    secondIcon={FaSun}
                />
            </div>

            <div className='flex flex-col items-center justify-center w-full h-full px-4 md:flex-row sm:px-8 md:px-16 my-2'>
                {/* Titre centré sous le logo */}
                <div className='text-shadow-custom flex flex-col items-center justify-start text-center w-full md:w-auto md:ml-16 md:pt-24 pb-10 md:pb-16 leading-none text-black font-roboto uppercase z-10 mt-6 sm:mt-10 md:mt-16'>
                    <h1 className='absolute top-4 text-black dark:text-white text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[3.5em]'>
                        {appName}
                    </h1>
                </div>

                {/* Logo à gauche */}
                <div className='flex justify-center md:justify-start md:absolute md:left-[2.5vw] md:top-1/2 md:-translate-y-1/2 w-auto max-w-32 sm:max-w-40 lg:max-w-48 h-auto z-50 rounded-full p-4 mt-10 md:mt-0 hover:scale-110 duration-300 ease-in-out'>
                    <img
                        onClick={handleLogoClick}
                        className='w-full h-full object-contain object-center p-2'
                        src={`${import.meta.env.BASE_URL}images/png/dinodance.png`}
                        alt='Logo de dino'
                        aria-hidden='true'
                    />
                </div>
            </div>
        </header>
    );
};