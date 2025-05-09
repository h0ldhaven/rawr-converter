import type React from 'react';
import type { ButtonProps } from '../../types/ButtonProps';

export const ButtonAction: React.FC<ButtonProps> = (button) => {
    const { onClick, disabled, className, label } = button;

    return(
        <div className='relative flex flex-wrap justify-baseline items-center'>
            <button
                onClick={onClick}
                disabled={disabled}
                className={`${
                    className ? className : 
                        `py-2 px-4 text-lg rounded-lg shadow transition-all duration-300 mb-4 ${
                            disabled
                                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                : 'bg-red-500 text-white hover:bg-red-600 hover:scale-105'
                        }`
                }`}
            >
                {label ||'Click Me !'}
            </button>
        </div>
    );
};