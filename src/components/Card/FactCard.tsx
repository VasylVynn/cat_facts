import { FactCardProps } from "../../interfaces/interfaces";
import { Card, CardText, FavButton } from "./styles";

export const FactCard: React.FC<FactCardProps> = (props) => (
    <Card>
        <CardText >{props.fact.fact}</CardText>
        <FavButton disabled={props.favButtonDisabled} onClick={props.onClick}>{props.buttonText}</FavButton>
    </Card>
);
