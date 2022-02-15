import React, { useState, useEffect } from 'react'


import { ImageContainer, FactContainer, Image, FactContext } from './styles'
import cat from '../../images/cat.jpg'

interface Fact {
    fact: string,
    length: number
}

const Home: React.FC = () => {


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
