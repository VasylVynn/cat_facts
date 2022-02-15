
import { connect, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchFacts } from "../../redux/facts/factsActions";
import { selectFacts, selectLoading, State } from "../../redux/facts/factReducer";
import { Loader } from "./styles";


const Facts: React.FC = () => {

    const dispatch = useDispatch();

    const facts = useSelector(selectFacts)

    const loading = useSelector(selectLoading)

    useEffect(() => {
        dispatch(fetchFacts())
    }, [])

    console.log(loading);

    return <div>
        {loading ? <Loader ></Loader> : <></>}
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
