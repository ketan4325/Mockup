import Head from "next/head";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apnapaisa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Image src="logo.svg" alt="" />
            </a>
          </div>
        </nav>
        <div className="row mt-0 mx-3">
          <div className="col-12 col-md-6 px-0 px-md-5">
            <div className="mt-1 pt-1 mt-lg-5 pt-lg-5 d-flex flex-column justify-content-center">
              <h1 className="display-4 fw-bold">
                Your Credit Score is just a click away.
              </h1>
              <p className="display-6 fs-5 mt-2">
                A good credit score can help you get the best rates on loans. It
                can also help you get a new credit card with great deals and
                offers.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center px-0 px-md-5 ">
            <form className="border border-primary rounded p-3 px-md-5 mt-4 mt-md-0 mb-5 mb-md-5 form">
              <div className="">
                <label className="form-label mt-0" htmlFor="name">
                  Full Name*
                </label>
                <div className="input-group">
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                  />
                  <span className="input-group-text">
                    <CgProfile />
                  </span>
                </div>
              </div>
              <div className="">
                <label
                  className="form-label mt-0 mt-md-5"
                  htmlFor="phoneNumber"
                >
                  Phone Number*
                </label>
                <div className="input-group">
                  <span className="input-group-text">91+</span>
                  <input
                    required
                    className="form-control"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Mobile Number"
                  />
                  <span className="input-group-text">
                    <MdOutlineLocalPhone />
                  </span>
                </div>
              </div>

              <div className="mb-3 form-check mt-4 mt-md-5">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="consent1 "
                />
                <label
                  className="form-check-label"
                  htmlFor="consent1 "
                  style={{ fontSize: "10px" }}
                >
                  I confirm to send OTP to the customer as I have verified the
                  National Do Not Call (NDNC) registry for the above customer.
                  The NDNC waiver will be extended to Partners of Andromeda to
                  contact customer for this application.
                </label>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
