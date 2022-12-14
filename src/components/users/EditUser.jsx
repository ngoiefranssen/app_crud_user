import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";


export const EditUser = () =>{
    
    const {id} = useParams();  
    let navigate = useNavigate();
  
    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      phone: "",
      // nameCompany:"",
      catchPrase: "",
  });
  
    const { name, username, 
            email, street, suite, city, zipcode, 
            phone, catchPrase } = user;
  
    // lors du changement d'entrée
    const onInputchange = (e) => {
      e.preventDefault();
      setUser({...user, [e.target.name] : e.target.value });
    };
  
    // 
    useEffect(() => {
      loadingUserData()
    }, []);
  
    // sur soumettre  
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
        navigate('/list_user');
    };

    // 
    const loadingUserData = async () =>{
        const resultApiDadta = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(resultApiDadta.data);
    }
  
    return (
  
  <section className="background-radial-gradient overflow-hidden">
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-12 mb-5 mb-lg-0 position-relative">
  
          <div className="card">
            <div className="card-body px-4 py-5">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="form-group">
                      <input type="text" className="form-control"
                              placeholder='Enter your name...' name='name'
                              value={name}
                              onChange={(e) => onInputchange(e)} />
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-group">
                      <input type="text"  className="form-control"
                              placeholder='Enter your username....' name='username'
                              value={username}
                              onChange={(e) => onInputchange(e)}/>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-group">
                      <input type="email" className="form-control" name='email'
                             placeholder='Enter your adress email...' 
                             value={email}
                             onChange={(e) => onInputchange(e)}/>
                    </div>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="form-group">
                      <input type="text" className="form-control" name='street'
                              placeholder='Enter your street .....'
                              value={street}
                              onChange={(e) => onInputchange(e)}/>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-group">
                      <input type="text"  className="form-control" name='suite'
                              placeholder='Enter your suite....'
                              value={suite}
                              onChange={(e) => onInputchange(e)}/>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-group">
                      <input type="text" className="form-control" name='city'
                             placeholder='Enter your adress city......'
                             value={city}
                             onChange={(e) => onInputchange(e)} />
                    </div>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="form-group">
                      <input type="text" className="form-control" name='zipcode'
                              placeholder='Enter your zipcode .....'
                              value={zipcode}
                              onChange={(e) => onInputchange(e)} />
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="form-group">
                      <input type="text"  className="form-control" name='phone'
                              placeholder='Enter your phone number....'
                              value={phone}
                              onChange={(e) => onInputchange(e)} />
                    </div>
                  </div>
                  {/* <div className="col-md-4 mb-4">
                    <div className="form-group">
                      <input type="text" className="form-control" name='name'
                             placeholder='Enter your name company......'
                             value={name}
                             onChange={(e) => onInputchange(e)} />
                    </div>
                  </div> */}
                  <div className="col-md-4 mb-4">
                    <div className="form-group mb-4">
                      <input type="text" className="form-control" name='catchPrase'
                             placeholder='Enter your catch phrase.........'
                             value={catchPrase}
                             onChange={(e) => onInputchange(e)} />
                    </div>
                  </div>
                </div>
  
                {/* <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="form-group mb-4">
                      <input type="text" className="form-control" name='catchPrase'
                             placeholder='Enter your catch phrase.........'
                             value={catchPrase}
                             onChange={(e) => onInputchange(e)} />
                    </div>
                  </div>
                </div> */}
                <NavLink to='/list_user' type="submit" className="btn btn-outline-dark">
                  Cancel
                </NavLink>
                <button type="submit" className="btn btn-outline-success ms-3">Edit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   );
}