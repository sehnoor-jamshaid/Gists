import React from 'react'
import * as requestFromServer from "./home-axios";
import swal from 'sweetalert';


export const getGists = async ( username,setState,setSubmitLoading) => {
  setSubmitLoading(true)
  return requestFromServer
    .getAllListUser(username)
    .then((res) => {
        setSubmitLoading(false);
        console.log("res",res.status)
      if (res.status == 200) {
        console.log("res.data", JSON.stringify(res.data))
        {
       console.log("data",res.data)
       setState(res.data)
        }
        console.log("Success")
      }
      else
      { 
        setSubmitLoading(false)
        swal("Warning!", "Something Went Wrong!", "warning");

      }
    })
    .catch((err) => {console.log("error in api", err)
    setSubmitLoading(false)
    swal("Error!", "Network Error, Kindly Check you internet Connection", "error");});

};

export const getForksById = async ( id,setState,setSubmitLoading,setShow) => {
  
  setSubmitLoading(true)
  return requestFromServer
    .getForks(id)
    .then((res) => {
        setSubmitLoading(false);
        console.log("res",res.status)
      if (res.status == 200) {
        console.log("res.data", JSON.stringify(res.data))
        {
       console.log("fork data",res.data)
       setState(res.data)
       setShow(true)
        }
        console.log("Success")
      }
      else
      { 
        setSubmitLoading(false)
        swal("Warning!", "Something Went Wrong!", "warning");

      }
    })
    .catch((err) => {console.log("error in api", err)
    setSubmitLoading(false)
    swal("Error!", "Network Error, Kindly Check you internet Connection", "error");});

};
