import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../action/userActions';
export const Pagination = () => {
    const dispatch = useDispatch()
    const paginationSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="pagination" >
            {paginationSize.map((item) => {
                return (
                    <a onClick={() => dispatch(getUsers(item))}>{item}</a>
                )
            })}
        </div >
    )
}
