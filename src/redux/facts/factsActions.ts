import { FETCH_FACTS_REQUEST, FETCH_FACTS_SUCCESS, FETCH_FACTS_FAILURE } from "./factsTypes"
import axios from "axios"
import {State} from "../../redux/facts/factReducer"

export const fetchFactsRequest = () =>( {
    
        type: FETCH_FACTS_REQUEST
    
})

export const fetchFactsSuccess = (users:{}[]) =>( {
    
    type: FETCH_FACTS_SUCCESS,
    payload: users

})

export const fetchFactsFailure = (error:string) =>( {
    
    type: FETCH_FACTS_FAILURE,
    payload: error

})




export const fetchFacts = () => {
    return (dispatch:any) =>{
        dispatch(fetchFactsRequest)
        axios.get('https://catfact.ninja/facts')
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