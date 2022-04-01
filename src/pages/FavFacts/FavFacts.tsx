import React, { useEffect, useState } from "react";

import { Grid } from "../../components/Card/styles";
import { FactCard } from "../../components/Card/FactCard";
import { currentUser } from "../../components/Logout/Logout";
import { Fact } from "../../interfaces/interfaces";

const Facts: React.FC = () => {
    const [removeClicked, SetRemoveClicked] = useState(false);

    useEffect(() => {
        if (removeClicked) {
            SetRemoveClicked(false);
        }
    }, [removeClicked])

    let favFacts: Fact[] = localStorage.getItem(`userFacts-${currentUser}`) !== null ? JSON.parse(localStorage.getItem(`userFacts-${currentUser}`) as string) : [];
    function fetchFacts() {
        favFacts = localStorage.getItem(`userFacts-${currentUser}`) !== null ? JSON.parse(localStorage.getItem(`userFacts-${currentUser}`) as string) : [];
    }

    function RemoveFav(fact: string) {
        const oldFacts: Fact[] = localStorage.getItem(`userFacts-${currentUser}`) !== null ? JSON.parse(localStorage.getItem(`userFacts-${currentUser}`) as string) : [];
        const newFacts = oldFacts.filter((key) => key.fact !== fact)
        localStorage.setItem(`userFacts-${currentUser}`, JSON.stringify(newFacts))
    }

    const FavFactsList = () => (
        favFacts.map((favfacts, index) =>
            <FactCard key={index} fact={favfacts} onClick={() => { RemoveFav(favfacts.fact); SetRemoveClicked(true) }} buttonText={'Remove'} />
        )
    );

    return <Grid>
        {FavFactsList()}
    </Grid>;
}

export default Facts;
