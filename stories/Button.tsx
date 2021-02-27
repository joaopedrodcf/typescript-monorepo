import React from 'react';
import './button.css';
import { Button as DogBookButton } from '@dogbook/button';

export interface ButtonProps {
    label: string;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ label }) => {
    return <DogBookButton label={label} />;
};
