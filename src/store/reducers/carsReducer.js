import {GET_CARS, GET_ERROR} from '../types'

const initialState = {
    cars:[],
    loading:true
}

export default function foo(state = initialState, action){

    switch(action.type){

        case GET_CARS:
        return {
            ...state,
            cars:action.payload,
            loading:false

        }
        case GET_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}