import React, { useState } from 'react'
import axios from "axios";
import './Api.css'

function Api() {
    const [users, setUsers] = useState([])

    const button = document.getElementById("changeColorBtn");
    if (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault()
            // Generate random RGB values
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            // Apply the random color to the text
            const textElement = document.getElementById('text');
            textElement.style.color = `rgb(${r}, ${g}, ${b})`;
        });
    }

    const fetchData = async () => {
        try {
            let result = await axios.get("https://api.adviceslip.com/advice")
            setUsers(result.data.slip)
            console.log(result.data.slip.advice)
            console.log(result.data.slip.id)
            console.log(result.data)
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='block glow things-box text-center col-lg-6 col-md-8 col-sm-12  p-3' id="wrapper">
                    <h1 className=' text-primary fw-bold'><span className='fs-2'>😊 </span>GOOD THINGS</h1>
                    <p className='p-2 fs-4' id="text">{users.advice}</p>
                    <button id="changeColorBtn" className='btn btn-primary w-25' onClick={() => fetchData()}>Next <i className="fa-solid fa-forward"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Api;
