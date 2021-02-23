import type React from 'react';
import { Button as ReakitButton } from 'reakit/Button';

export interface ButtonProps {
    text: string;
}

export const Button: React.VFC<ButtonProps> = ({ text }) => (
    <ReakitButton onClick={() => alert('clicked')}>{text}</ReakitButton>
);
