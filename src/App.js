import React from 'react'
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer";
import MiddleText from "./components/MiddleText";
import { CredentialsProvider } from "./context/CredContext";
import SinginForm from './components/SigninForm';
import SingupForm from './components/SignupForm';




function App() {
  return (
    <CredentialsProvider>
      <BrowserRouter>
        {/* navbar */}
        <Header />
        <div className="container-fluid" style={{ backgroundColor: "rgb(30,37,41)" }}>
          <Routes>
            <Route exact path='/' element={
              <div className='mx-auto ' style={{ width: "65%", paddingTop: "3%", paddingBottom: "3%" }}>
                <div className="py-5 row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <MiddleText />
                  </div>
                  <div className="d-none d-xs-none d-sm-block col-md-6 col-lg-6">
                    <SinginForm />
                  </div>
                  {/* button only visible for small screen */}
                  <div className='d-block d-sm-none mx-auto mt-3' style={{ width: "80%" }}>
                    <button className="btn btn-success" style={{ width: "100%" }} >Submit</button>
                  </div>
                </div>
              </div>
            } />
            {/* contains text and form */}
            <Route exact path='/signup' element={
              <div className='mx-auto ' style={{ width: "65%", paddingTop: "3%", paddingBottom: "3%" }}>
                <div className="py-5 row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <MiddleText />
                  </div>
                  <div className="d-none d-xs-none d-sm-block col-md-6 col-lg-6">
                    <SingupForm />
                  </div>
                  {/* button only visible for small screen */}
                  <div className='d-block d-sm-none mx-auto mt-3' style={{ width: "80%" }}>
                    <button className="btn btn-success" style={{ width: "100%" }} >Submit</button>
                  </div>
                </div>
              </div>
            } />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter >
    </CredentialsProvider>
  );
}

export default App;
