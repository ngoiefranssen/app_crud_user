import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams} from "react-router-dom";


export const ListUser = () =>{

   const {id} = useParams();
   const [users, setUsers] = useState();

   
   useEffect(() => {
        fetchDataApi();
   },[]);

   const fetchDataApi = async () =>{
        const apiResultData = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(apiResultData.data);
   };

   // delete user
   const deleteUser = async (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    fetchDataApi();
   }

    return(
        <div className="container my-5">
            <NavLink to='/add_user' type="button" className="btn btn-outline-primary"
                    >Add User
            </NavLink>
            <table className="table border shadow my-4">
                <thead className="table table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        {/* <th scope="col">Street</th> */}
                        {/* <th scope="col">Suite</th> */}
                        <th scope="col">City</th>
                        {/* <th scope="col">Zipcode</th> */}
                        {/* <th scope="col">phone</th> */}
                        {/* <th scope="col">CatchPhrase</th> */}
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
                                {/* <td>{user.address.street}</td> */}
                                {/* <td>{user.address.suite}</td> */}
                                <td>{user.address.city} </td>
                                {/* <td>{user.address.zipcode}</td> */}
                                {/* <td>{user.phone}</td> */}
                                {/* <td>{user.company.catchPhrase}</td> */}
                                <td>
                                    <NavLink className="btn btn-dark btn-sm">
                                        <i className="fa fa-edit" ></i>
                                    </NavLink>
                                    <NavLink  to={`/edit_user/${user.id}`} 
                                              className="btn btn-success btn-sm ms-2">
                                        <i className="fa fa-eye"></i>
                                    </NavLink>
                                    <NavLink to={`/list_user/${user.id}`} className="btn btn-danger btn-sm ms-2">
                                        <i className="fa fa-trash"></i>
                                    </NavLink>  
                                    <NavLink className="btn btn-primary ms-2 btn-sm">
                                        <i className="fa fa-user-circle-o"></i>
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* <Routes>
                <Route path="" />
            </Routes> */}
        </div>
    )
};