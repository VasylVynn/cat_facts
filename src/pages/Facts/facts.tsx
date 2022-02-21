
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { fetchFacts, addFavourite } from "../../redux/facts/factsActions";
import { selectFacts, selectLoading, selectFavFacts } from "../../redux/facts/factReducer";
import { Card, CardText, FavButton, Grid } from "../../components/Card/styles";
import { Loader } from "../../components/Loader/Loader";


const Facts: React.FC = () => {

    const dispatch = useDispatch();

    const facts = useSelector(selectFacts)

    const favFacts = useSelector(selectFavFacts);

    const loading = useSelector(selectLoading)

    const stringFavFacts = favFacts.map(fact => fact.fact)

    useEffect(() => {
        dispatch(fetchFacts())
    }, [])

    const FactsList = () => (
        facts.map((facts, index) =>
            <Card key={index}>
                <CardText >{facts.fact}</CardText>
                <FavButton disabled={stringFavFacts.includes(facts.fact)} onClick={() => dispatch(addFavourite(facts))}>Add to favorite</FavButton>
            </Card>

        )
    );

    return <Grid>
        {loading ? <Loader ></Loader> : FactsList()}
    </Grid>;
}

export default Facts;
