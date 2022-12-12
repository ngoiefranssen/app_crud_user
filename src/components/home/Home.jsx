
export const Home = () => {
    return (
        <div className="container my-5">
            <button className="btn btn-outline-primary ">Add User</button>
            <table className="table my-4">
                <thead>
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
                        <button className="btn btn-primary">

                        </button>
                        <button className="btn btn-primary">

                        </button>
                        <button className="btn btn-primary">

                        </button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
     
    );
};