import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'

export default function SecondsCounter() {

  const[start, setStart] = useState(false)
  const[status, setStatus] = useState(false)
  const[counter, setCounter] = useState(0)

  let num1 = (counter % 10)
  let num2 =  Math.floor(counter /10) %10
  let num3 = Math.floor(counter /100) %10

  const handleButton = () => {
    if(start){
      setStart(false)
      setStatus(false)
    }
    else if(!start){
      setStart(true)
      setStatus(true)
    }
  }

  const handleReset = ()=> {
    setCounter(0);
    setStart(false)
    setStatus(false)
  }



  useEffect(()=>{
    if(start){
       const timer = setInterval(()=>{ setCounter( counter => counter + 1)}, 1000)
        return ()=> { clearInterval( timer )}
      };

      console.log(counter)
    },[start])


	return (
      <section className=" min-vh-100 bg-dark d-flex justify-content-center align-items-center">
        <div className="container text-center">

          <div className=" d-inline-block bg-black rounded p-5 m-2 text-white h1 fw-bolder" ><p><FontAwesomeIcon icon={faClock} /></p></div>
          <div className=" d-inline-block bg-black rounded p-5 m-2 text-white h1 fw-bolder" ><p>{num3}</p></div>
          <div className=" d-inline-block bg-black rounded p-5 m-2 text-white h1 fw-bolder"><p>{num2}</p></div>
          <div className=" d-inline-block bg-black rounded p-5 m-2 text-white h1 fw-bolder"><p>{num1}</p></div>
          <div className="p-4">

          {!status ? 
            (<button className="btn btn-success me-4" onClick={ handleButton} > START</button> ):
            (<button className="btn btn-danger me-4" onClick={ handleButton} > STOP</button>)
          }

            <button className="btn btn-light text-primary" onClick={handleReset} > RESET</button>
          </div>

        </div>
      </section>
	);


}




