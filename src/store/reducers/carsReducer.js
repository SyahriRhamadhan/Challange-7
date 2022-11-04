import {GET_CARS, GET_ERROR} from '../types'

const initialState = {
    cars:false,
    loading:true
}

export default function car(state = initialState, action){

    switch(action.type){
        
        case GET_CARS:
            console.log("cek reducer", action)
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