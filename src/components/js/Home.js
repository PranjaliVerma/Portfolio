import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import '../css/Home.scss'
import logo from "../../images/banner.png"
import '../../App.css'

const Home = (props) => {

  return (
    <section id='Home'>
    <header>
        <div className='flexType'>
          <div  className='bannerData'>
            <div>
              <div>
                <ul className="header__ul">
                    <li> 
                      <a href={props.data.profiles[2].url}><FaLinkedinIn className="headerIcon" /></a>
                    </li>
                    <li>
                      <a href={props.data.website}><FaInstagram className="headerIcon"/></a>
                    </li>
                    <li> 
                      <a href={props.data.profiles[3].url}><FaFacebookF className="headerIcon" /></a>
                    </li>
                    <li> 
                      <a  href={'mailto:'+props.data.email}><i className="fa fa-envelope-o redfont headerIcon" aria-hidden="true"/></a>
                    </li>
                </ul> 
                <div className='redfont'>
                    <div  className='cursive' style={{fontSize:'190%'}}>I am {props.data.name}.</div>
                    <div className='cursive'>{props.data.headline}</div><br/>
                    <div style={{position:'absolute',top:'55%',right:'70%',opacity:'0.5',zIndex:'-44'}} id='move'></div>
                    <div style={{position:'absolute',top:'65%',right:'95%',opacity:'0.5',zIndex:'-44'}} id='move1'></div>
                    <div style={{position:'absolute',top:'40%',right:'30%',opacity:'0.5',zIndex:'-44'}} id='move2'></div>
                    <div style={{position:'absolute',top:'240px',right:'55%',opacity:'0.5',zIndex:'-44'}} id='move3'></div>
                    <div style={{position:'absolute',top:'60%',right:'43%',opacity:'0.5',zIndex:'-44'}} id='move4'></div>
                    <div style={{position:'absolute',top:'220px',right:'80%',opacity:'0.5',zIndex:'-44'}} id='move5'></div>
                    <div style={{marginTop: '10px'}}>
                        <a href="https://gitconnected.com/pranjaliverma/resume" className="btn btn-outline redfont">
                          My Portfolio
                        </a>
                        &nbsp;&nbsp;&nbsp;
                    </div>
                </div>
              </div>
            </div>
          </div>
         <div className='bannerimg'>
            <img style={{height:'100%',width:'100%'}} src={logo} alt="man"/></div>
        </div>
    </header>
    </section>
  );
};

export default Home;
