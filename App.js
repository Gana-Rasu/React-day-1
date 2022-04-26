import React from "react";

function Form(){
    return(
<div className="form">
    <div>
    <p>Want more Bootstrap themes, templates, and UI tools?</p>
    <p className="grey">Subscribe to get updated when new Bootstrap related products arrive!</p>
  
    <div className="email">
    <input type="email" class="form-control" placeholder="Enter email" id="email"></input><button className="myButton">subscribe!</button>
    </div>
    
    <p className="grey grey2">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    </div>
    <div>
        <img className="guy" src="https://startbootstrap.com/assets/img/freepik/wall-post-pana.svg" alt="img"></img>
    </div>
    
</div>
    );
}

export default Form;