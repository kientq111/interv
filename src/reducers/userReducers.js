
export const getUser = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return { loading: true }
        case 'GET_USER_SUCCESS':
            return { loading: false, data: action.payload }
        case 'GET_USER_FAIL':
            return { loading: false, error: action.payload }
        case 'SORT_BY_FIRST_NAME': action.payload.sort((a, b) => {
            if (a.name.first < b.name.first) {
                return -1;
            }
            if (a.name.first > b.name.first) {
                return 1;
            }
            return 0;
        })
            const first = { results: action.payload }
            return { loading: false, data: first }

        case 'SORT_BY_LAST_NAME': action.payload.sort((a, b) => {
            if (a.name.last < b.name.last) {
                return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            return 0;
        })
            const last = { results: action.payload }
            return { loading: false, data: last }
        default:
            return state
    }
}


