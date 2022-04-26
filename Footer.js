import React from "react";

function Footer(){
    return(
<div className="footer">

<div className="footer1">
    <span>Start Bootstrap</span>
    <span>Free & premium UI tools to help you build better websites</span>
    <div className="images">
    <img className="img-footer" src="https://cdn-icons-png.flaticon.com/512/2111/2111738.png" alt="twittter"></img>
    <img className="img-footer" src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="github"></img>
    <img className="img-footer" src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="facebook"></img>
    </div>
    
</div>
   
    <div>
        <span>PRODUCTS</span>
        <ul className="ul-footer">
            <li>Themes</li>
            <li>Templates</li>
            <li>Snippets</li>
            <li>Guides</li>
        </ul>
    </div>

    
    <div>
        <span>RESOURCES</span>
        <ul className="ul-footer">
            <li>Blog</li>
            <li>bootstrap Resources</li>
            <li>SB Angular inspector</li>
        </ul>
    </div>

    <div>
        <span>SUPPORT</span>
        <ul className="ul-footer">
        <li>Knowledge Base</li>
        <li>Custom Development</li>
        </ul>
    </div>

    <div>
    <span>COMPANY</span>
    <ul className="ul-footer">
        <li>About US</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>Licenses</li>
    </ul>
    </div>

</div>
    );
}

export default Footer