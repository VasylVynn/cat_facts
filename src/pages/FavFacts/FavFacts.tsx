
import { useDispatch, useSelector } from "react-redux";
import React from "react";

import { removeFavourite } from "../../redux/facts/factsActions";
import { selectFavFacts } from "../../redux/facts/factReducer";
import { Card, CardText, FavButton, Grid } from "../../components/Card/styles";


const Facts: React.FC = () => {

    const dispatch = useDispatch();

    const favFacts = useSelector(selectFavFacts);



    const FavFactsList = () => (
        favFacts.map((favfacts, index) =>
            <Card key={index}>
                <CardText >{favfacts.fact}</CardText>
                <FavButton onClick={() => dispatch(removeFavourite(favfacts.fact))}>Remove</FavButton>
            </Card>
        )
    );

    return <Grid>
        {FavFactsList()}
    </Grid>;
}

export default Facts;
