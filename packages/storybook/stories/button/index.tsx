import React from 'react';
import { Button as DogBookButton } from '@typescript-monorepo/button';

export interface ButtonProps {
    label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return <DogBookButton>{label}</DogBookButton>;
};
