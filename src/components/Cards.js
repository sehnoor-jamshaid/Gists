import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getForksById } from '../config/auth/home-service'
import Spinner from 'react-bootstrap/Spinner';
import Forks from './Forks';
import './../screens/index.style.css'
function Cards({ desp, files, linked, id, val }) {

    const [show, setShow] = useState(false)
    const [state, setState] = useState()
    const [loading, setloading] = useState(false)
    console.log("idddd", id)
    const APICALL2 = (id) => {
        if (id == "") {
        }
        else {

            console.log("APICALL")
            getForksById(id, setState, setloading, setShow)
        }

    }
    console.log("show", show)
    console.log("valll", Object.keys(files).map((val) => (val?.length?.length)
    ))
    const fileNo = Object.keys(files).length;
    return (
        <>
            <Card className="bg-dark text-white py-4 my-5 p-4">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className='text-white fw-bold fontList'>{desp || "No Description"}</p>
                    </div>

                    <Button className='btn-size' onClick={() => APICALL2(id)}>More</Button>

                </div>
                <h5 className="text-start mx-2 fontPara">{fileNo}{' '} {fileNo > 1 ? "Files" : "File"}</h5>

                {Object.values(files).map((val) =>
                (
                    <>
                        <div className="d-flex justify-content-start"><span className="mx-2 mb-2 paddingSpan p-2 text-start bg-info">{val?.language != null ? val?.language : "Plain Text"}</span> </div>
                        <a href={val.raw_url} target="_blank" rel="noreferrer" className="text-white text-start mx-2">
                            <Card.Text>
                                {val.filename}
                            </Card.Text>
                        </a>
                    </>))}

            </Card>
            <div>
                {loading ? <Spinner animation="border" variant="info" /> : ""}
            </div>
            {
                show ?
                    <Forks forks={state} />
                    : ""
            }
        </>
    );
}

export default Cards;