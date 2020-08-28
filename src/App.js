import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import GoogleBtn from "./GoogleBtn";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import Routes from "./components/Routes";
import SearchForm from "./SearchForm";
import "./App.css";

//code below pasted from github repo
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <Routes />
          </div>
        </div>
      </div>
      <Container className="my-4">
        <h2>
          <GoogleBtn />{" "}
        </h2>
        <h1 className="mb-4">GitHub Jobs</h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try Refreshing.</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
        ;
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
