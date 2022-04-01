import { FETCH_FACTS_REQUEST, FETCH_FACTS_SUCCESS, FETCH_FACTS_FAILURE } from "./factsTypes"
import axios from "axios"
import { BASE_URL } from "./factsTypes"
import { Fact } from "../../interfaces/interfaces"

export const fetchFactsRequest = () =>( {
    type: FETCH_FACTS_REQUEST
})

export const fetchFactsSuccess = (facts:Fact[]) =>( { 
    type: FETCH_FACTS_SUCCESS,
    payload: facts
})

export const fetchFactsFailure = (error:string) =>( {
    type: FETCH_FACTS_FAILURE,
    payload: error
})

export const fetchFacts = () => {
    return (dispatch:any) =>{
        dispatch(fetchFactsRequest());
        axios.get(BASE_URL+'facts?page=1&max_length=150&limit=20')
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