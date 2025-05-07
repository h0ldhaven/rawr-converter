import type React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { Translator } from '../components/Translator';


const HomePage: React.FC = () => {
    return(
        <main className='flex flex-col h-full min-h-screen bg-green-100 z-1 border-1 border-black' role='main'>
            <Header />
            <Translator />
            <Footer />
        </main>
    );
};

export default HomePage;