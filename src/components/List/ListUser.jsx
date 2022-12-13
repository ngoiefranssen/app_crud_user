import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const ListUser = () =>{

    const {id} = useParams();
    const {users, setUser} = useState([]);

    useEffect(() => {
        fetchApiData();
    },[]);

    const fetchApiData = async () =>{
        // const apiData = 'https://jsonplaceholder.typicode.com/users/user'
        const resultApiData = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUser(resultApiData.data);
            // console.log(resultApiData)
    };

    return(
        <div className="container my-5">
            <button className="btn btn-outline-primary">Add User</button>
            <table className="table border shadow my-4">
                <thead className="table table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">city</th>
                        <th scope="col">Name_company</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) =>(
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.company.name}</td>
                                <td>
                                    <NavLink className="btn btn-dark btn-sm">
                                        <i className="fa fa-edit" aria-hidden="true"></i>
                                    </NavLink>
                                    <NavLink className="btn btn-success btn-sm ms-2">
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                    </NavLink>
                                    <NavLink className="btn btn-danger btn-sm ms-2">
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </NavLink>  
                                    <NavLink className="btn btn-primary ms-2 btn-sm">
                                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};