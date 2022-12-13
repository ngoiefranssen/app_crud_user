import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const ListUser = () =>{

    const {user, setUser} = useState([]);

    useEffect(() => {
        fetchApiData();
    },[])

    const fetchApiData = async () =>{
        const apiData = 'https://jsonplaceholder.typicode.com/users'
        const resultData = await axios.get(apiData).then((res) =>{
            setUser(resultData.data);
        });
    }


    return(
        <div className="container my-5">
            <button className="btn btn-outline-primary">Add User</button>
            <table className="table my-4">
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Ngoie</td>
                        <td>julia</td>
                        <td>@mdo</td>
                        <td>Beta</td>
                        <td>cassandra</td>
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
                </tbody>
            </table>
        </div>
    )
};