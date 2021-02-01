import React from "react";
import '../css/Skills.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import {
  buildStyles
} from "react-circular-progressbar";
import {
  FaGithub,
  FaFigma,
  FaHtml5,
  FaReact,
  FaCss3,
  FaJsSquare,
  FaShareAltSquare,
  FaSass,
  FaJava,
  FaDatabase,
  FaLaptop,
  FaBootstrap,
  FaBitbucket,
  FaCuttlefish
} from "react-icons/fa";
import { useState } from "react/cjs/react.development";

const Skills= (props) => {

  const [state] = useState([
                    {name:"HTML 5",level:"Expert", rating:9, yearsOfExperience:1,icon: <FaHtml5 className="commonIcons" />, },
                    {name:"React JS",level:"Advanced", rating:8,yearsOfExperience:1, icon: <FaReact className="commonIcons" />},
                    {name:"CSS 3",level:"Expert",rating:9,yearsOfExperience:1, icon: < FaCss3 className="commonIcons" />},
                    {name:"JavaScript",level:"Advanced",rating:9,yearsOfExperience:1, icon: <FaJsSquare className="commonIcons" />},
                    {name:"JQuery",level:"Advanced",rating:8.5,yearsOfExperience:1, icon: <FaShareAltSquare className="commonIcons" />},
                    {name:"Figma",level:"Expert",rating:9,yearsOfExperience:1, icon: <FaFigma className="commonIcons" />},
                    {name:"SASS / LESS",level:"Advanced",rating:8,yearsOfExperience:1, icon: <FaSass className="commonIcons" />},
                    {name:"Java",level:"Intermediate",rating:6.5,yearsOfExperience:1, icon: <FaJava className="commonIcons" />},
                    {name:"DBMS",level:"Expert",rating:9,yearsOfExperience:4, icon: <FaDatabase className="commonIcons" />},
                    {name:"MySQL",level:"Expert",rating:9.5,yearsOfExperience:4, icon: <FaLaptop className="commonIcons" />},
                    {name:"GitHub",level:"Advanced",rating:8,yearsOfExperience:1,  icon: <FaGithub className="commonIcons" />},
                    {name:"C/C++",level:"Advanced",rating:8.5,yearsOfExperience:1,  icon: < FaCuttlefish  className="commonIcons" />},
                    {name:"Bootstrap",level:"Expert",rating:9,yearsOfExperience:1, icon: < FaBootstrap className="commonIcons" />},
                    {name:"Bitbuckit",level:"Advanced",rating:8,yearsOfExperience:1, icon: <FaBitbucket className="commonIcons" />},
                    {name:"Next JS",level:"Beginner",rating:6,yearsOfExperience:1, icon: <FaReact className="commonIcons" />}]);
   let k=0

  return (
    <section id='Skills'>
          <div className="skills">
              <div className="container1">
                  <div>
                      <div className="common">
                        <h1 className='mydata pd projclr text-shadows'>SKILLS</h1>
                      </div>
                      <div className="row bgMain" >
                          {state.map((mydata)=>(
                             <div key={++k} className="col-4 bgMain shrink">
                                  <div className="skills__box">
                                      <center>{mydata.icon}</center>
                                      <div className='maindiv'>
                                            <div className="skills__box-header">{mydata.name}</div><br/>
                                            <div className="progress-wrap progress">
                                                <AnimatedProgressProvider valueStart={0} valueEnd={mydata.rating*10}
                                                    duration={1.8} easingFunction={easeQuadInOut} repeat>
                                                    {value => {
                                                        return (
                                                          <CircularProgressbar value={value} text={mydata.rating*10+"%"} styles={buildStyles({ pathTransition: "none" })}/>
                                                        );
                                                    }}
                                                </AnimatedProgressProvider>
                                            </div>
                                      </div>
                                      <div className="skills__box-p">Level : {mydata.level}</div>
                                  </div>
                            </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
    </section>
  );
};

 export default Skills;
