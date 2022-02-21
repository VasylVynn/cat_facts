import { FETCH_FACTS_REQUEST, FETCH_FACTS_SUCCESS, FETCH_FACTS_FAILURE, ADD_FAV, REMOVE_FAV } from "./factsTypes"
import axios from "axios"

export const fetchFactsRequest = () =>( {
    
        type: FETCH_FACTS_REQUEST
    
})

export const fetchFactsSuccess = (facts:{}[]) =>( {
    
    type: FETCH_FACTS_SUCCESS,
    payload: facts

})

export const fetchFactsFailure = (error:string) =>( {
    
    type: FETCH_FACTS_FAILURE,
    payload: error

})

export const addFavourite = (facts:any) => ({
    type: ADD_FAV,
    payload: facts
})

export const removeFavourite = (key:string) => ({
    type: REMOVE_FAV,
    payload: key
})


export const fetchFacts = () => {
    return (dispatch:any) =>{
        dispatch(fetchFactsRequest());
        axios.get('https://catfact.ninja/facts?page=1&max_length=150&limit=20')
            .then(response => {
                const facts = response.data.data
                dispatch(fetchFactsSuccess(facts))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchFactsFailure(errorMsg))
            })
    }
}