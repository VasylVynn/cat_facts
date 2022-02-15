import { FETCH_FACTS_FAILURE, FETCH_FACTS_REQUEST, FETCH_FACTS_SUCCESS } from "./factsTypes"

export interface State  {
    loading:boolean;
    facts: {}[];
    error:string
} 

const initialState: State = {
    loading:false,
    facts: [],
    error: ''
}

export const selectFacts = (state:State) => {
    return state.facts
}

const factReducer = (state = initialState,action:any) => {
    switch (action.type) {
        case FETCH_FACTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_FACTS_SUCCESS:
            return {
                loading: false,
                facts: action.payload,
                error: ''
            }
        case FETCH_FACTS_FAILURE:
            return {
                loading:false,
                facts: [],
                error: action.payload
            }
        default: return state
    }
}

export default factReducer
