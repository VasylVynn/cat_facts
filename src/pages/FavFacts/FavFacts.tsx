
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { fetchFacts, addFavourite, removeFavourite } from "../../redux/facts/factsActions";
import { selectFavFacts, selectLoading } from "../../redux/facts/factReducer";
import { Card, CardText, FavButton, Grid } from "../../components/Card/styles";
import { Loader } from "../../components/Loader/Loader";


const Facts: React.FC = () => {

    const dispatch = useDispatch();

    const favFacts = useSelector(selectFavFacts);



    const FavFactsList = () => (
        favFacts.map((favfacts, index) =>
            <Card key={index}>
                <CardText >{favfacts.fact}</CardText>
                <FavButton onClick={() => dispatch(removeFavourite(favfacts.fact))}>Remove from favorite</FavButton>

            </Card>

        )
    );

    return <Grid>
        {FavFactsList()}
    </Grid>;
}

export default Facts;
