import { style } from "framer-motion/client";
import React from "react";
export default function App1(){
    let a=10
    let b=20
    return(
        <div>{a+b}
        <p style={{backgroundColor:'pink'}}>hello</p>
        <p className={style.mystyle}>Good Morning</p>
        </div>

    )
}

