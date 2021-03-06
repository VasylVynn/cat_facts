import { State } from "../../interfaces/interfaces"
import { FETCH_FACTS_FAILURE, FETCH_FACTS_REQUEST, FETCH_FACTS_SUCCESS} from "./factsTypes"

const initialState: State = {
    loading:false,
    facts: [],
    error: '',
    favFacts: [],
    isLoggedIn:false
}

export const selectFacts = (state:State) => {
    return state.facts
}
export const selectLoading = (state:State) => {
    return state.loading
}


const factReducer = (state = initialState,action:any) => {
    switch (action.type) {
        case FETCH_FACTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_FACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                facts: action.payload,
                error: '',
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
