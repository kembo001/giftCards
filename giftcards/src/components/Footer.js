import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
       <footer class="footer" id="footer">

<span class="col">
  <h3 class="col-title">Info</h3>
  <nav class="col-list">
    <ul>
      <li><a href="#">Formats</a></li>
      <li><a href="#">Compression</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Status</a></li>
    </ul>
  </nav>
</span>

<span class="col">
  <h3 class="col-title">Resources</h3>
  <nav class="col-list">
    <ul>
      <li><a href="#">Developer API</a></li>
      <li><a href="#">Tools</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </nav>
</span>

<span class="col">
  <h3 class="col-title">Company</h3>
  <nav class="col-list">
    <ul>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Sustainability</a></li>
      <li><a href="#">Terms of Service</a></li>
      <li><a href="#">Privacy</a></li>
    </ul>
  </nav>
</span>



</footer>
    </div>
  )
}

export default Footer