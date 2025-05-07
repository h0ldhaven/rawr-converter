import React, { useState } from 'react';
import { dinoToHuman, humanToDino } from '../utils/translator';

export const Translator: React.FC = () => {
    const [input, setInput] = useState('');
    const [mode, setMode] = useState<'humanToDino' | 'dinoToHuman'>('humanToDino');

    const translated = mode === 'humanToDino' ? humanToDino(input) : dinoToHuman(input);
  
    return(
        <div className='p-4 max-w-lg mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Dino Translator 🦖</h1>
            <textarea
                className='w-full p-2 border rounded mb-4'
                rows={4}
                placeholder='Écris ton texte ici...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className='mb-4'>
                <label className='mr-4'>
                    <input
                        type='radio'
                        name='mode'
                        value='humanToDino'
                        checked={mode === 'humanToDino'}
                        onChange={() => setMode('humanToDino')}
                    />
                    Humain ➔ Dino
                </label>
                <label>
                    <input
                        type='radio'
                        name='mode'
                        value='dinoToHuman'
                        checked={mode === 'dinoToHuman'}
                        onChange={() => setMode('dinoToHuman')}
                    />
                    Dino ➔ Humain
                </label>
            </div>
            <div className='p-2 bg-gray-100 rounded'>
                <p className='whitespace-pre-wrap'>{translated}</p>
            </div>
        </div>
    );
};