import React from "react";
// import * as users from "./services/users.service"
import './App.css';
import ScrapeTrendsHighChart from './ScrapeTrends.js'

 class MainPage extends React.Component {
  
 	constructor(props) {
	    super(props);
	
	    this.state = {
	      placeholder: 'ok'
	    }
	}
	
	render() {
		return (
			<React.Fragment>
			<body id="page-top">

<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
  <a className="navbar-brand js-scroll-trigger" href="#page-top">
    <span className="d-block d-lg-none">Clarence Taylor</span>
    <span className="d-none d-lg-block">
    <i class="fab fa-bitcoin fa-2x"></i>
          {/* <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""></img> */}
    </span>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#one">r/CryptoCurrency</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#two">/biz/</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#three">ccn.com</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#four">coindesk.com</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#five">coinmonks.com</a>
      </li>
    </ul>
  </div>
</nav>

<div className="container-fluid p-0">

  <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">
      <h1 className="mb-0">Crypto
        <span className="text-primary">Trends</span>
      </h1>
      <div className="subheading mb-5">
      <p className="lead text-bold mb-5">Click a site on the left to start.</p>
        {/* <a href="mailto:placeholder@email.com">placeholder@email.com</a> */}
      </div>
      <p className="lead mb-5">By finding the ratio of BTC vs altcoin (ETH,LTC,XMR) mentions per site and comparing this with BTC volume strength over time with can find the correlation coefficient r values and identify which site most accurately reflects or anticipates trends.</p>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  </section>

  <hr className="m-0"/>

  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="one">
    <div className="my-auto">
      <h2 className="mb-5">r/cryptocurrency <span className="d-block text-primary">78%</span></h2>

            <ScrapeTrendsHighChart/>

    </div>
  </section>

  <hr className="m-0"/>

  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="two">
    <div className="my-auto">
      <h2 className="mb-5">/biz/ <span className="d-block text-primary">78%</span></h2>

       <ScrapeTrendsHighChart/>

    </div>
  </section>

  <hr className="m-0"/>

  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="three">
    <div className="my-auto">
      <h2 className="mb-5">ccn.com <span className="d-block text-primary">78%</span> </h2>

            <ScrapeTrendsHighChart/>

    </div>
  </section>

  <hr className="m-0"/>

  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="four">
    <div className="my-auto">
      <h2 className="mb-5">coindesk.com  <span className="d-block text-primary">78%</span> </h2>
      <ScrapeTrendsHighChart/>

    </div>
  </section>

  <hr className="m-0"/> 

  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="five">
    <div className="my-auto">
      <h2 className="mb-5">coinmonks.com      <span className="d-block text-primary">78%</span> </h2>
      <ScrapeTrendsHighChart/>

    </div>
  </section>

</div>

<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<script src="vendor/jquery-easing/jquery.easing.min.js"></script>

<script src="js/resume.js"></script>

<script src="/css/resume.css"></script>

			</body>
			</React.Fragment>
		)
	}
}
 export default MainPage; 
