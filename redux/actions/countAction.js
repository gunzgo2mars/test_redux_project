import { COUNT_NUMBER } from './type'


const countNumber = (number) => dispatch => {

    console.warn('CountNumber Action!')

    dispatch({

        type : COUNT_NUMBER,
        number : number

    })

}


export {

    countNumber

}