import React from "react";
import '../css/About.scss'
const About = (props) => {
 
  return (
    <section id='About' >
        <div className='about text text-center'>
              <img className="img mb-4" src={props.data.image} alt='avtar'></img>
              <div>
                  <h2 className="subheading">Hello I'm</h2>
                  <h1 className="mb-4">{props.data.name}</h1>
                  <p className="mydata cursive">{props.data.summary}</p><br/>
                    <div className="d-flex">
                      <div className="d-flex text highlightedDetails">
                        <div className='subinfo'>
                            <p>Date of birth : {props.dob[0].summary}</p>
                            <p>Address : {props.data.region}</p>
                            <p>Zip code : 302020</p>
                            <p>Email : {props.data.email}</p>
                            <p>Contact Number : {props.data.phone}</p>
                        </div>
                        </div>
                    </div>
              </div>
        </div>
    </section>
  );
};

export default About;
