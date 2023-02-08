import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, sortByLastName } from "../action/userActions";
import { sortByFirstName } from "../action/userActions";
export const ListUserTable = () => {
    const dispatch = useDispatch();
    const { loading, data } = useSelector((state) => state.getUserData)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <>
            {loading === true && <div style={{ height: 400 }}><h2>....Loading</h2></div>}
            {loading === false &&
                <>
                    <div className="container">
                        <button onClick={() => dispatch(sortByFirstName(data.results))}>Sort by first name</button>
                        <button onClick={() => dispatch(sortByLastName(data.results))}>Sort by last name</button>
                    </div>
                    <table>
                        <tr>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Thumbnail Icon</th>
                        </tr>
                        {data?.results.map((item) => (
                            <tr>
                                <td>{item.name.title} {item.name.first} {item.name.last}</td>
                                <td>{item.login.username}</td>
                                <td><img src={item.picture.thumbnail} alt="thumbnail" /></td>
                            </tr>
                        ))}
                    </table>
                </>
            }
        </>
    )
}