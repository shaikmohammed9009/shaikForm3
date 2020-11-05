import React, { useState } from "react";
import "./index.css";
const EventH = () => {
  // let color = "blue";
  // const [bg, setBg] = useState(color);
  // const [Name, Myname] = useState("click me");
  // const Myfun = () => {
  //     color = "green";
  //     setBg(color);
  //     Myname("asalam alaikum ");

  // }

  // const Cg = () => {
  //     setBg('yellow')
  //     Myname("Walekum salam")
  // }
  // const back = () => {
  //     setBg('blue')
  //     Myname("click me")
  // }

  const [Name, MyName] = useState({
    fname: "",
    lname: "",
    Email: "",
    Phone: ""
  });
  const Myform = (e) => {


    const { name, value } = e.target;

    MyName((pev) => {
      console.log(pev);
      return {
        ...pev,
        [name]:value,
      }
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: pev.lname,
      //     Email: pev.Email,
      //     Phone: pev.Phone

      //   };

      // } else if (name === "lname") {
      //   return {
      //     fname: pev.fname,
      //     lname: value,
      //     Email: pev.Email,
      //     Phone: pev.Phone

      //   }
      // } else if (name === "Email") {
      //   return {
      //     lname: pev.lname,
      //     fname: pev.fname,
      //     Email: value,
      //     Phone: pev.Phone,

      //   }
      // } else if (name === "Phone") {
      //   return {
      //     lname: pev.lname,
      //     fname: pev.fname,
      //     Email: pev.Email,
      //     Phone: value,

      //   }
      // }
      
    });

  }
  const fullname = (e) => {
    e.preventDefault();
    alert("https://shaikmohammed9009.github.io/product");
  }



  return (<>

    <form onSubmit={fullname}>
      <h1>Asalamu Alaikum {Name.fname} {Name.lname} </h1>
      <p>📧  Email  : {Name.Email} </p>
      <p>☎️   Phone  : {Name.Phone} </p>
      <input
        type="text"
        onChange={Myform}
        value={Name.fname}
        name="fname"
        placeholder="Enter Your First  Name"

      />
      <br />
      <input
        type="text"
        onChange={Myform}
        value={Name.lname}
        name="lname"
        placeholder="Enter Your Last Name"


      />
      <br />
      <input
        type="email"
        onChange={Myform}
        value={Name.Email}
        name="Email"
        placeholder="Enter Your Email"
        autoComplete="off"


      /> <br />
      <input
        type="number"
        onChange={Myform}
        value={Name.Phone}
        name="Phone"
        placeholder="Enter Your Number"


      /><br />
      <button type="submit">Click Me</button>
    </form>

    {/* <div style={{backgroundColor:bg}}>
            <button onClick={Myfun} onDoubleClick={Cg} onMouseEnter={back}>{Name}</button>
            </div> */}

  </>
  );
}

export default EventH;