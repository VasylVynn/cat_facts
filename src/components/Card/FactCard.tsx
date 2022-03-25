import { Card, CardText, FavButton } from "./styles";

import { Fact } from "../../redux/facts/factReducer"
import { MouseEventHandler } from "react";

interface Props {
    fact: Fact;
    favButtonDisabled?: boolean;
    onClick: MouseEventHandler;
    buttonText: String;
}

export const FactCard: React.FC<Props> = (props) => (
    <Card>
        <CardText >{props.fact.fact}</CardText>
        <FavButton disabled={props.favButtonDisabled} onClick={props.onClick}>{props.buttonText}</FavButton>
    </Card>
);
