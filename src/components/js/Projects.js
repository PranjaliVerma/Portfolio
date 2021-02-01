import React from "react";
import '../css/Skills.scss'
import '../css/Project.scss'
import dashboard from "../../images/dashboard.jfif"
import tt from "../../images/tt.jpg"
const Projects= (props) => {

 let i=0
 let k=0;

  return (
    <section id='Project'>
        <div className=" Project skills">
            <div className="container1">
                <div>
                    <div className="common"> 
                      <h1 className='mydata pd projclr text-shadow'>PROJECTS</h1>
                    </div>
                    <div>
                    {props.data&&props.data.length&&props.data.map((mydata)=>(
                        <div key={++k}  className="col-4 bgMain shrinkdiv">
                             <div className="skills__box">
                                <div className='maindiv'>
                                    <div className='childofdiv'>
                                        <center>{++i===1?<img className='projimg box-shadow' src={dashboard} alt='projImg'/>:<img className='projimg' src={tt} alt='projImg'/>}</center>
                                        <center><div className="skills__box-header">{mydata.displayName}</div></center>
                                        <div className="skills__box-p align-centre">{mydata.summary}</div>
                                        <div className=' wrapping'>
                                         {mydata.languages&&mydata.languages.length&&mydata.languages.map((mydata1)=>(
                                          <div key={++k} className="technology">{mydata1}</div>
                                          ))}
                                          {mydata.libraries&&mydata.libraries.length&&mydata.libraries.map((mydata1)=>(
                                            <div key={++k} className="technology">{mydata1}</div>
                                          ))}
                                        </div>
                                     </div>  
                                </div>
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

 export default Projects;