import React, { useState } from "react";
import "./index.css";


const MyForm = () => {
    const [Mname, Setname] = useState({
        fname: "",
        lname: "",
        Email: "",
        phone: "",
        que : ""
    });



  
    const Mform = (e) => {
        const { name, value } = e.target;

        Setname((prev) => {
            console.log(prev)
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const OnmySubmit = (e) => {
       e.preventDefault();
        alert("shaik mohammed");
    }
    return (
        <>
            <form onSubmit={OnmySubmit}>
                <h1>ASALAMU ALAIKUM {Mname.fname} {Mname.lname} </h1>
                <p>📧  Email  : {Mname.Email} </p>
                <p>☎️   Phone  : {Mname.phone} </p>
                <p>🥇 Qualification : {Mname.que} </p>
                
                <input
                    type="text"
                    onChange={Mform}
                    value={Mname.fname}
                    name="fname"

                />
                <br />
                
                <label></label>
                <input
                    type="text"
                    onChange={Mform}
                    value={Mname.lname}
                    name="lname"

                />
                <br />
                
                <input
                    type="text"
                    onChange={Mform}
                    value={Mname.Email}
                    name="Email"

                />
                
                <br />
                 <input
                    type="number"
                    onChange={Mform}
                    value={Mname.phone}
                    name="phone"

                />
                <br />
                  <input
                    type="text"
                    onChange={Mform}
                    value={Mname.que}
                    name="que"

                />
                <br />

                <button type="submit">Click Me</button>
            </form>
        </>
    );
}
export default MyForm;