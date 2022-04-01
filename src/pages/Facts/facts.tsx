import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { fetchFacts } from "../../redux/facts/factsActions";
import { selectFacts, selectLoading } from "../../redux/facts/factReducer";
import { Grid } from "../../components/Card/styles";
import { Loader } from "../../components/Loader/Loader";
import { FactCard } from "../../components/Card/FactCard";
import { currentUser } from "../../components/Logout/Logout";
import { Fact } from "../../interfaces/interfaces";

const Facts: React.FC = () => {

    const dispatch = useDispatch();

    const facts = useSelector(selectFacts)

    const favFacts: Fact[] = localStorage.getItem(`userFacts-${currentUser}`) !== null ? JSON.parse(localStorage.getItem(`userFacts-${currentUser}`) as string) : [];

    const loading = useSelector(selectLoading)

    const stringFavFacts: String[] = favFacts.map(fact => fact.fact)

    useEffect(() => {
        dispatch(fetchFacts());
    }, [])

    const [removeClicked, SetRemoveClicked] = useState(false);

    useEffect(() => {
        if (removeClicked) {
            SetRemoveClicked(false);
        }
    }, [removeClicked])

    function MyFacts(facts: Fact) {
        const oldData: Fact[] = localStorage.getItem(`userFacts-${currentUser}`) !== null ? JSON.parse(localStorage.getItem(`userFacts-${currentUser}`) as string) : [];
        oldData.push(facts);
        localStorage.setItem(`userFacts-${currentUser}`, JSON.stringify(oldData))
    }

    return <Grid>
        {loading ? <Loader ></Loader> :
            facts.map((facts, index) =>
                <FactCard key={index} fact={facts} favButtonDisabled={stringFavFacts.includes(facts.fact)} onClick={() => { MyFacts(facts); SetRemoveClicked(true) }} buttonText={'Add to my facts'} />
            )}
    </Grid>;
}

export default Facts;
