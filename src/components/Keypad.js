// Code Keypad Component Here
import React from "react";

function Keypad (){

    function typingPassword(){
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={typingPassword} />
        </div>
    )
}

export default Keypad;