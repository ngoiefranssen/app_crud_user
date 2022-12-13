import './style/userStyle.css';

export const AddUser = () => {

  return (
    // <section classNameName="text-center my-5">
    //   {/* <div classNameName="p-5 bg-image" style={{ backgroundImage: 
    //   "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
    //         height: "200px" }}>
    //   </div> */}

    //   <div classNameName="card mx-5 mx-md-5 shadow-5-strong" style={{
    //        padingTop:"-100px", background:"hsla(0, 0%, 100%, 0.8)",
    //        backdropFilter:"blur(20px)"
    //   }}>
    //     <div classNameName="card-body py-5 px-md-5">

    //       <div classNameName="row d-flex justify-content-center">
    //         <div classNameName="col-lg-6">
    //           <h2 classNameName="fw-bold mb-5">Sign up now</h2>
    //           <form>
    //             <div classNameName="row">
    //               <div classNameName="col-md-5 mb-4">
    //                 <div classNameName="form-outline">
    //                   <input type="text" classNameName="form-control" />
    //                 </div>
                    
    //               </div>
    //               <div classNameName="col-md-5 mb-4">
    //                 <div classNameName="form-outline">
    //                   <input type="text" classNameName="form-control" />
    //                 </div>
    //               </div>
    //               <div classNameName="col-md-5 mb-4">
    //                 <div classNameName="form-outline">
    //                   <input type="text" classNameName="form-control" />
    //                 </div>
    //               </div>
    //             </div>
    //             <div classNameName="row">
    //               <div classNameName="col-md-5 mb-4">
    //                 <div classNameName="form-outline">
    //                   <input type="text" classNameName="form-control" />
    //                 </div>
                    
    //               </div>
    //               <div classNameName="col-md-5 mb-4">
    //                 <div classNameName="form-outline">
    //                   <input type="text" classNameName="form-control" />
    //                 </div>
    //               </div>
    //               <div classNameName="col-md-5 mb-4">
    //                 <div classNameName="form-outline">
    //                   <input type="text" classNameName="form-control" />
    //                 </div>
    //               </div>
    //             </div>

    //             <button type="submit" classNameName="btn btn-primary btn-block mb-4">
    //               Sign up
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

<section className="background-radial-gradient overflow-hidden">
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      {/* <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex:"10px" }}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color:"hsl(218, 81%, 95%)" }}>
          The best offer <br />
          <span style={{ color:"hsl(218, 81%, 75%)" }}>for your business</span>
        </h1>
        <p className="mb-4 opacity-70" style={{ color:"hsl(218, 81%, 85%)" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div> */}

      <div className="col-lg-12 mb-5 mb-lg-0 position-relative">
        {/* <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div> */}
        {/* <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div> */}

        <div className="card">
          <div className="card-body px-4 py-5">
            <form>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="form-group">
                    <input type="text" className="form-control"
                            placeholder='Enter your name...' />
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="form-group">
                    <input type="text"  className="form-control"
                            placeholder='Enter your username....'/>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="form-group">
                    <input type="email" className="form-control"
                           placeholder='Enter your adress email...' />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="form-outline">
                    <input type="text" className="form-control"
                            placeholder='Enter your street .....' />
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="form-outline">
                    <input type="text"  className="form-control"
                            placeholder='Enter your suite....'/>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="form-outline">
                    <input type="text" className="form-control"
                           placeholder='Enter your adress city......' />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="form-outline">
                    <input type="number" className="form-control"
                            placeholder='Enter your zipcode .....' />
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="form-outline">
                    <input type="number"  className="form-control"
                            placeholder='Enter your phone number....'/>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="form-outline">
                    <input type="text" className="form-control"
                           placeholder='Enter your name company......' />
                  </div>
                </div>
              </div>

              
                <div className="col-md-12 mb-4">
                  <div className="form-group mb-4">
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group mb-4">
                    <input type="password" className="form-control" />
                  </div>
                </div>
              
              <button type="submit" className="btn btn-outline-dark">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 );
};