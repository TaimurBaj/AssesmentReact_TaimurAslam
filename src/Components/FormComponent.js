import React, { useState } from "react";
import { onError } from "@apollo/client/link/error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormComponent.css";
import { useMutation } from "@apollo/client/";
import { POST_JOB } from "../GraphQL/Mutation";
/*
* form page with all the basic fields
*
* @return {*} 
*/
function FormComponent() {
  const [formData, setFormData] = useState({
    title: "",
    commitmentId: "cjtu8esth000z0824x00wtp1i",
    companyName: "Trimulabs",
    locationNames: "",
    userEmail: "",
    description: "",
    applyUrl: "",
  });

  const { title, description, locationNames, userEmail, applyUrl } = formData;

  // on change event handler 
  const onChange = (e) => {
    let value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  //posting the jobs using graphQL mutation
  const [postJob, { error }] = useMutation(POST_JOB)

  //On click of submit button, it calls a request to post a job
  const formSubmit = () => {
    postJob({
      variables: formData
    })
    alert("Job Added Successfully!");
  };

  return (
    <div className="container">
      <form className="jobFrom" action="/action_page.php">
        <div className="m-5">
          <h2 className="main-heading">Job Posting Form</h2>
          <div className="form-group">
            <label className="form-label" htmlFor="title">
              Job Title
              <br></br>
              <input
                type="text"
                className="form-control"
                name="title"
                value={formData.title}
                onChange={(e) => onChange(e)}
              />
            </label>
          </div>

          <br></br>

          <div className="form-group">
            <label htmlFor="commitmentId">
              Commitment ID
              <br></br>
              <input
                type="text"
                className="form-control"
                defaultValue="cjtu8esth000z0824x00wtp1i"
              />
            </label>
          </div>

          <br></br>

          <div className="form-group">
            <label htmlFor="companyName">
              Company Name
              <br></br>
              <input
                type="text"
                className="form-control"
                defaultValue="Trimu Labs"
              />
            </label>
          </div>

          <br></br>

          <div className="form-group">
            <label htmlFor="locationNames">
              Location
              <br></br>
              <input
                className="form-control"
                name="locationNames"
                value={formData.locationNames}
                onChange={(e) => onChange(e)}
              />
            </label>
          </div>

          <br></br>

          <div className="form-group">
            <label htmlFor="userEmail">
              Email
              <br></br>
              <input
                type="email"
                className="form-control"
                name="userEmail"
                value={formData.userEmail}
                onChange={(e) => onChange(e)}
              />
            </label>
          </div>

          <br></br>

          <div className="form-group">
            <label htmlFor="description">
              Job Description
              <br></br>
              <input
                className="form-control"
                name="description"
                value={formData.description}
                onChange={(e) => onChange(e)}
              />
            </label>
          </div>


          <br></br>

          <div className="form-group">
            <label htmlFor="applyUrl">
              Apply Url
              <br></br>
              <input
                className="form-control"
                name="applyUrl"
                value={formData.applyUrl}
                onChange={(e) => onChange(e)}
              />
            </label>
          </div>

          <br></br>
          <button
            type="submit"
            className="btn-btn btn-primary"
            onClick={formSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;