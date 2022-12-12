import { NavLink } from "react-router-dom";


export const Home = () => {
    return (
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
                        <NavLink className="">
                            <i class="fa fa-edit" aria-hidden="true"></i>
                        </NavLink>
                        <NavLink className="ms-2">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </NavLink>
                        <NavLink className="btn btn-primary">

                        </NavLink>
                        <NavLink className="btn btn-primary">

                        </NavLink>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
     
    );
};