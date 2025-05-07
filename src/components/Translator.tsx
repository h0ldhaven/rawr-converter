import React, { useState } from 'react';
import { dinoToHuman, humanToDino } from '../utils/translator';
import { motion, AnimatePresence } from 'framer-motion';

export const Translator: React.FC = () => {
    const [text, setText] = useState('');
    const [mode, setMode] = useState<'humanToDino' | 'dinoToHuman'>('humanToDino');
    const [copied, setCopied] = useState(false);

    const translate = (input: string, direction: 'humanToDino' | 'dinoToHuman') => {
        return direction === 'humanToDino' ? humanToDino(input) : dinoToHuman(input);
    };

    const handleSwitch = () => {
        const newMode = mode === 'humanToDino' ? 'dinoToHuman' : 'humanToDino';
        const newText = translate(text, mode); // traduire dans le mode actuel avant d'inverser
        setText(newText);
        setMode(newMode);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(translated);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset après 2 sec
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const translated = translate(text, mode);
  
    return(
        <div className='flex items-stretch justify-center w-full h-full'>
            <div className='flex flex-col p-6 xs:p-10 sm:p-8 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl bg-white rounded-2xl shadow-lg my-10 mx-4 sm:my-12'>
                <h1 className='text-3xl font-bold mb-6 text-center'>Dino Translator 🦖</h1>

                <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
                    <span className='text-lg font-medium'>{mode === 'humanToDino' ? 'Humain' : 'Dino'}</span>
                    <button
                        onClick={handleSwitch}
                        className='p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-transform transform hover:rotate-180 text-lg font-semibold shadow'
                        aria-label='Switch translation direction'
                    >
                        ⇄
                    </button>
                    <span className='text-lg font-medium'>{mode === 'humanToDino' ? 'Dino' : 'Humain'}</span>
                </div>

                <textarea
                    className='w-full p-4 border rounded-lg mb-6 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400'
                    rows={4}
                    placeholder={mode === 'humanToDino' ? 'Écris ton texte humain ici...' : 'Écris ton texte Dino ici...'}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <h3 className='text-lg font-semibold mb-4'>Traduction :</h3>
                <div className='p-4 bg-gray-100 rounded-lg min-h-[100px] mb-4'>
                    <p className='whitespace-pre-wrap break-words text-gray-700'>{translated}</p>
                </div>

                <div className='relative flex flex-wrap justify-baseline items-center'>
                    <button
                        onClick={handleCopy}
                        disabled={translated.trim().length === 0}
                        className={`py-2 px-4 text-lg rounded-lg shadow transition-all duration-300 transform ${
                            copied
                                ? 'bg-green-500 text-white scale-105'
                                : translated.trim().length === 0
                                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                    : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'
                        } sm:w-auto w-full max-w-[150px]`}
                    >
                        {copied ? (
                            <span className='flex items-center justify-center gap-2'>
                                Copié <span className='animate-ping-slow'>✔️</span>
                            </span>
                        ) : (
                            <span className='flex items-center justify-center gap-2'>
                                Copier <span>📋</span>
                            </span>
                        )}
                    </button>

                    <AnimatePresence>
                        {copied && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9, rotate: -5 }}
                                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95, rotate: 3 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 25,
                                }}
                                className=' ml-4 mt-2 sm:max-w-[150px] w-auto bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl text-base font-semibold pointer-events-none z-50'
                            >
                                ✅ Copié !
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};