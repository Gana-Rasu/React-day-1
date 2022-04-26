import React from "react";

function Cards(){
    return (
<div class="card-group">
  
  <div className="block">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Free</h5>
      <p class="card-text">$0 / month</p>
    </div>
    <ul>
   <li>Single User</li>
   <li>5GB Storage</li>
   <li>Unlimited Public Projects</li>
   <li>Community Access</li>
   <li>Unlimited Private Projects</li>
   <li>Dedicated Phone Support</li>
   <li>Free Subdomain</li>
   <li>Monthly Status Reports</li>
    </ul>
    <div class="card-footer">
     <button className="btn">BUTTON</button>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Plus</h5>
      <p class="card-text">$9 / month</p>
    </div>
    <ul>
   <li>Single User</li>
   <li>5GB Storage</li>
   <li>Unlimited Public Projects</li>
   <li>Community Access</li>
   <li>Unlimited Private Projects</li>
   <li>Dedicated Phone Support</li>
   <li>Free Subdomain</li>
   <li>Monthly Status Reports</li>
    </ul>
    <div class="card-footer">
    <button className="btn" >BUTTON</button>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Pro</h5>
      <p class="card-text">$49 / month</p>
    </div>
    <ul>
   <li>Single User</li>
   <li>5GB Storage</li>
   <li>Unlimited Public Projects</li>
   <li>Community Access</li>
   <li>Unlimited Private Projects</li>
   <li>Dedicated Phone Support</li>
   <li>Free Subdomain</li>
   <li>Monthly Status Reports</li>
    </ul>
    <div class="card-footer">
    <button className="btn">BUTTON</button>
    </div>
  </div>

  </div>

  
</div>
    );
}

export default Cards