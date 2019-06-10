import { COUNT_NUMBER } from '../actions/type'

const initialState = {

    count_number : 0

}

export default (state = initialState , action) => {

    switch(action.type) {

        case COUNT_NUMBER : 
            return {
                ...state,
                count_number : action.number
            }


        default : return state

    }


} 