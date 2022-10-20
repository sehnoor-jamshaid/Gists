import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.style.css'
import Spinner from 'react-bootstrap/Spinner';
import { getGists } from '../../config/auth/home-service'
import Cards from '../../components/Cards'

export default function HomePage() {
  const [state, setState] = useState()
  const [loading, setloading] = useState()
  const [error, setError] = useState()
  const [errorBool, setErrorBool] = useState()
  const [username, setUsername] = useState()

const name=state?.map((val)=> val?.owner?.login)
if(name)
{
  var Name=name[0].toUpperCase()
}

  const APICALL = (username) => {

    if (username == "") {
      setUsername("")
      setError("!Search field is required")
      setErrorBool(true)
    }
    else {
      setUsername("")
      setError("")
      setErrorBool(false)
      getGists(username, setState, setloading)
    }
  }

  return (
 
    <Container fluid>
      <Row className="backgroundColor">
        <Col xs="12" className='col-lg-12 col-sm-12 col-md-12'>
          <div className="p-3 d-flex flex-column">
            <h2 className='py-2 gradient-text fontSize'>FORKS ASSOCIATED WITH GISTS SEARCH</h2>
            <p className='text-start text-white fontPara'>React Single Page Application demo that uses Github Gist API to show all public gists for an user.

              ReactJS Single Page App demo which has the following features:</p>
            <ul>
              {["Search: When a user enters a username, it should be able to get a full list of public gists by that user.", "Filetype: Convert the filetypes of the files in the gist into a tag/badge", "Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork."].map((val, index) =>
              (
                <li className='text-start text-white fontList'>
                  {val}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="backgroundColor">
        <Col xs="12" className='col-lg-12 col-sm-12 col-md-12 '>
        <div class="input-group px-3">
            <input type="search" className="form-control rounded padding-all" placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={username}
              onChange={(e) => {
                e.preventDefault()
                setUsername(e.target.value)
              }}
            />
            <button type="button" className="btn-size fw-bold" onClick={() => APICALL(username)}>Search</button>
          </div>
          {
            errorBool ? <p className="text-danger text-start mx-2">{error}</p> : ""
          }
           <div className="d-flex justify-content-center mt-5">
            {loading ? <Spinner animation="border" variant="info" /> : ""}
          </div>
          {<p className='text-white text-start px-3'>  {!state ? "" : `Total Gists of ${Name}: ${state?.length}`}</p>}
          <div className='p-3'>
            {state?.map((val, index) =>
            (<>
              <Cards key={val.id} val={val} desp={val.description} files={val.files} id={val.id} linked={val.git_push_url}></Cards>
            </>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
