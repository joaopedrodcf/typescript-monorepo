import React from 'react';
import { Button as DogBookButton } from '@dogbook/button';

export interface ButtonProps {
    label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return <DogBookButton>{label}</DogBookButton>;
};
