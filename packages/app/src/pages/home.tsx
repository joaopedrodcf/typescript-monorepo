import { Button } from '@typescript-monorepo/button';
import React from 'react';

export const Home: React.FC = () => {
    return (
        <div>
            Home
            <div>
                <Button>my monorepo button</Button>

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/English_Cocker_Spaniel_black_portrait.jpg/600px-English_Cocker_Spaniel_black_portrait.jpg"
                    alt="test"
                />
            </div>
        </div>
    );
};

export default Home;
