import { ADD_FAV, FETCH_FACTS_FAILURE, FETCH_FACTS_REQUEST, FETCH_FACTS_SUCCESS, REMOVE_FAV,LOGIN,LOGOUT } from "./factsTypes"

export interface State  {
    loading:boolean;
    facts: Array<{ fact: string, length: number }>;
    error:string
    favFacts: Array<{ fact: string, length: number }>;
    isLoggedIn:boolean
} 

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
export const selectFavFacts = (state:State) => {
    return state.favFacts
}
export const selectLoading = (state:State) => {
    return state.loading
}
export const selectIsLoggedIn = (state:State) => {
    return state.isLoggedIn
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
        case ADD_FAV:
            return{
                ...state,
                favFacts: [...state.favFacts, action.payload] 
            }
        case REMOVE_FAV:
            const newFacts = [...state.favFacts].filter((key) => key.fact !== action.payload)
           return{
               ...state,
               favFacts: newFacts
           }
        case LOGIN:
            return{
                ...state,
                isLoggedIn:true
            }
        case LOGOUT:
            return{
                ...state,
                isLoggedIn:false
            }
        default: return state
    }
}

export default factReducer
