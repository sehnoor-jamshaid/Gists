import React from 'react'
import Card from 'react-bootstrap/Card';

function Forks({ forks }) {
    console.log("forkss", forks?.forks)
    return (
        <>

            {forks?.forks.length !== 0 ? forks?.forks.map((val) =>
            (
                < Card className="bg-info text-white p-4">
                    <Card.Title className="text-start mx-2">Forks</Card.Title>
                    <div className='d-flex'>
                    <img src={val.user.avatar_url} alt="avatar" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                    <div className='d-flex align-items-center mx-3'>
                    <a
                        href={val?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-start text-white"
                    >
                        <Card.Text className="text-start text-white">
                            {val.user.name}
                        </Card.Text>
                    </a>
                    </div>
                    </div> 
                </Card>
            ))
                : < Card className="bg-info text-white m-2 p-4">
                    <Card.Title className="text-start mx-2">Forks:</Card.Title>
                    <Card.Text className="text-start text-white ">
                        No Forks Available
                    </Card.Text>

                </Card>
            }
        </>
    );
}

export default Forks;