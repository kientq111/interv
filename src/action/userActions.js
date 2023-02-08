import axios from "axios";

export const getUsers = (page = 1) => async (dispatch) => {
    try {
        dispatch({
            type: 'GET_USER_REQUEST',
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const { data } = await axios.get(
            `https://randomuser.me/api/?page=${page}&results=10`,
            config
        );

        dispatch({
            type: 'GET_USER_SUCCESS',
            payload: data
        })
    } catch (error) {
        dispatch({
            type: 'GET_USER_FAIL',
            payload: error
        })
    }

}

export const sortByFirstName = (data) => (dispatch) => {
    dispatch({
        type: 'SORT_BY_FIRST_NAME',
        payload: data
    })
}

export const sortByLastName = (data) => (dispatch) => {
    dispatch({
        type: 'SORT_BY_LAST_NAME',
        payload: data
    })
}

