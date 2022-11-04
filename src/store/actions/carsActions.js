import {GET_CARS, GET_ERROR} from '../types'
import axios from 'axios'

export const getCars = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`)
        console.log("cek data",res.data)
        dispatch( {
            type: GET_CARS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: GET_ERROR,
            payload: error,
        })
    }

}