import React, { useState, useEffect } from 'react'

import { ImageContainer, FactContainer, Image, FactContext } from './styles'
import cat from '../../images/cat.jpg'
import { Fact } from '../../interfaces/interfaces'

const Home: React.FC = (replace: any, to: String) => {

    const [randomFact, setRandomFact] = useState<Fact>({ fact: "", length: 0 })

    const getMyData = async () => {
        const response = await fetch('https://catfact.ninja/fact')
        const data = await response.json()
        setRandomFact(data);
    }

    useEffect(() => {
        getMyData();
    }, []);

    return <div><ImageContainer><Image src={cat} alt="Cat" ></Image></ImageContainer>
        <FactContainer>
            <FactContext>{randomFact.fact}</FactContext>
        </FactContainer></div>;
}

export default Home;
