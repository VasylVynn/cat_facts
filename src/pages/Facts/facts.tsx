
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { fetchFacts, addFavourite } from "../../redux/facts/factsActions";
import { selectFacts, selectLoading, selectFavFacts } from "../../redux/facts/factReducer";
import { Grid } from "../../components/Card/styles";
import { Loader } from "../../components/Loader/Loader";
import { FactCard } from "../../components/Card/FactCard";

const Facts: React.FC = () => {

    const dispatch = useDispatch();

    const facts = useSelector(selectFacts)

    const favFacts = useSelector(selectFavFacts);

    const loading = useSelector(selectLoading)

    const stringFavFacts: String[] = favFacts.map(fact => fact.fact)

    useEffect(() => {

        dispatch(fetchFacts());

    }, [])

    return <Grid>
        {loading ? <Loader ></Loader> :
            facts.map((facts, index) =>
                <FactCard key={index} fact={facts} favButtonDisabled={stringFavFacts.includes(facts.fact)} onClick={() => dispatch(addFavourite(facts))} buttonText={'Add to favourite'} />
            )}
    </Grid>;
}

export default Facts;
