import React, { useState } from 'react';
import { dinoToHuman, humanToDino } from '../utils/translator';

export const Translator: React.FC = () => {
    const [humanText, setHumanText] = useState<string>('');
    const [dinoText, setDinoText] = useState<string>('');

    const translateToDino = (): void => {
        setDinoText(humanToDino(humanText));
    };

    const translateToHuman = (): void => {
        setHumanText(dinoToHuman(dinoText));
    };
  
    return(
        <div className='min-h-full flex flex-col items-center justify-center p-4 mt-50'>
            <h1 className='text-3xl font-bold mb-6'>Traducteur Dinosaure 🦖</h1>

            <div className='w-full max-w-2xl grid grid-cols-1 gap-4'>
                <textarea
                    value={humanText}
                    onChange={(e) => setHumanText(e.target.value)}
                    placeholder='Texte humain'
                    className='p-4 border rounded-lg w-full min-h-[100px]'
                />

                <div className='flex gap-2 justify-center'>
                    <button
                        onClick={translateToDino}
                        className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'
                    >
            ➔ Traduire en Dinosaure
                    </button>
                    <button
                        onClick={translateToHuman}
                        className='bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition'
                    >
            Traduire en Humain ➔
                    </button>
                </div>

                <textarea
                    value={dinoText}
                    onChange={(e) => setDinoText(e.target.value)}
                    placeholder='Texte dinosaure'
                    className='p-4 border rounded-lg w-full min-h-[100px]'
                />
            </div>
        </div>
    );
};