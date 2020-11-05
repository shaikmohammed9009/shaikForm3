import React, { useState } from "react";
import "./index.css";
import MytoDoList from "./Mytolist";

const Cards = () => {
    const [myi, mystore] = useState("");
    const [myarr, setmyarr] = useState([])

    const Myitem = (e) => {

        mystore(e.target.value)
    }



    const btn = () => {
        setmyarr((mi) => {

            return [...mi, myi]
        });

        mystore("");

    }

    const mDelet =(id) =>{
        console.log("asalamu alaikum")
         setmyarr ((mi)=>{
             return  mi.filter((myarr,index)=>{
                   return index !==id;
             })
         })
      }

    return (
        <>
            <div className="m-div">
                <div className="c-div">

                    <h1 className="heading">Product</h1>
                    <br />
                    <input type="text" className=""
                        onChange={Myitem}
                        value={myi}
                        placeholder="Add You Item"

                    />
                    <button className="btn-m" onClick={btn}>+</button>
                    <ol>
                        {/* <li>{myi}</li> */}
                        {myarr.map((mymap,index) => {
                            return (<MytoDoList
                                text={mymap}
                                key={index}
                                id={index}
                                onSelect={mDelet}
                            />)
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Cards;