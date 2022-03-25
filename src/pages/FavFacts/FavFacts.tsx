
import { useDispatch, useSelector } from "react-redux";
import React from "react";

import { removeFavourite } from "../../redux/facts/factsActions";
import { selectFavFacts } from "../../redux/facts/factReducer";
import { Grid } from "../../components/Card/styles";
import { FactCard } from "../../components/Card/FactCard";

const Facts: React.FC = () => {

    const dispatch = useDispatch();

    const favFacts = useSelector(selectFavFacts);

    const FavFactsList = () => (
        favFacts.map((favfacts, index) =>
            <FactCard key={index} fact={favfacts} onClick={() => dispatch(removeFavourite(favfacts.fact))} buttonText={'Remove'} />
        )
    );

    return <Grid>
        {FavFactsList()}
    </Grid>;
}

export default Facts;
