import React, { Component } from 'react'
import "./simpleweb.css" 

export default class simpleweb extends Component {
  render() {
    return (
      <div>
  <header>
   
      <div className="container">
        <a href="#">Logo</a>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>

    <main>
          <section className="banner-container">
            <div className="container">
            <div className="left-section">
                <h1>Welcome to WebQoder</h1>
                <p>We're all about consumer reviews. Get the real inside story  from shoppers like you.
                   Read, write and share reviews on Trustpilot today.  Write and share reviews on Trustpilot today.</p>
                   <button > Login</button>
            </div>
            <div className="right-section">
                <h4>Please fill the form</h4>
                <form action="" autocomplete="off">
                  <div className="input-group">
                    <input type="text" id="name" required/>
                    <label for="name">Name</label>
                  </div>
                  <div className="input-group">
                    <input type="text" id="email" required/>
                    <label for="email">Email</label>
                  </div>
                  <div className="input-group">
                    <input type="text" id="password" required/>
                    <label for="password">Password</label>
                  </div>
                  <div className="submit-section">
                    <input type="submit" value="Submit" className="submit-button"/>
                  </div>
                </form>
            </div>
            </div>
          </section>
          <section class="section-two">
          
          <div class="card-container">
        <div class="image-container">
          <img src="1.jpg" alt=""/>
        </div>
        <h4>Jasica</h4>
       </div>
       <div class="card-container">
        <div class="image-container">
          <img src="2.jpg" alt=""/>
        </div>
        <h4>Jasica</h4>
       </div>
       <div class="card-container">
        <div class="image-container">
          <img src="3.jpg" alt=""/>
        </div>
        <h4>Jasica</h4>
       </div>

</section>
<footer>
          Design and Developed by <span>Aswin Chandran</span>
      </footer>

    <div id="root"></div>
      </main>




    
      </div>
    )
  }
}

