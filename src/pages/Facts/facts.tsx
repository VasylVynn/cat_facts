
import { connect, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchFacts, fetchFactsSuccess } from "../../redux/facts/factsActions";
import { selectFacts, State } from "../../redux/facts/factReducer";


const Facts: React.FC = () => {

    const dispatch = useDispatch();

    const facts = useSelector(selectFacts)

    useEffect(() => {
        dispatch(fetchFacts())
    }, [])

    console.log(facts);

    return <div>
        <h2>Facts</h2>
        <button  >fact</button>
    </div>;
}

const mapStateToProps = (state: any) => {
    return {
        facts: state.facts
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchFacts: () => dispatch(fetchFacts())

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Facts);
