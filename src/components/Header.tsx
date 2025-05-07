import React, { useEffect, useState  } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const appName = import.meta.env.VITE_APP_NAME;

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
            <img 
                src={`${import.meta.env.BASE_URL}images/png/header_background.png`} 
                alt='Header background' 
                className='absolute object-cover object-center w-full h-full z-10 border-1'
                aria-hidden='true'
            />
            <div className='flex flex-col items-center justify-between w-full h-full px-4 md:flex-row sm:px-8 md:px-16 my-2'>
                {/* Logo à gauche */}
                <div className='md:left-[2.5vw] md:absolute md:top-1/2 md:-translate-y-1/2 w-auto max-w-32 sm:max-w-40 lg:max-w-48 h-auto z-50 rounded-full border-2 p-4'>
                    <img
                        onClick={handleLogoClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`w-full h-full object-contain object-center p-2 ${isHovered ? 'playing-animation' : 'paused-animation'}`}
                        src={`${import.meta.env.BASE_URL}images/png/dinodance.png`}
                        alt='Logo de dino'
                        aria-hidden='true'
                    />
                </div>

                {/* Titre centré sous le logo */}
                <div className='text-shadow-custom flex flex-col items-center justify-center w-full md:pt-24 pb-10 md:pb-16 leading-none text-black font-roboto uppercase text-[3em] z-10 mt-2'>
                    <h1>{appName}</h1>
                </div>
            </div>
        </header>
    );
};