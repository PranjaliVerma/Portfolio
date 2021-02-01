import '../css/Education.scss'
import logo from "../..//images/graduationImage.png"
import React from "react"
import '../css/frame.scss'

const Education = (props) => {

  let monthdata=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
  let i=0;
  return (
    <section id='Education' >
        <div className='education'>
            <h1 className='mydata pd clr text-shadow'>EDUCATION</h1>
            <div className='setflex'>
                <div className='gradphoto frame'>
                    <img className='graduationimg box-shadow' src={logo} alt='graduationphoto'/>
                </div>
                  <ul className="timeline">
                      {props.data&&props.data.length&&props.data.map((mydata)=>(
                          <li key={++i} className="timeline-inverted color1">
                              <div className="timeline-badge"></div>
                              <div className='shades'>
                                  <div className="timeline-panel">
                                      <h3 className="f-info">{mydata.institution}</h3>
                                      <div className="s-info">{mydata.studyType}
                                            <div style={{display:'inline-block',marginLeft:'10px'}}>-</div>
                                            <div style={{display:'inline-block',marginLeft:'10px'}}>{mydata.score} </div>
                                            <div>{mydata.area?<>{mydata.area}<div style={{display:'inline-block',marginLeft:'10px'}}>( {mydata.description} )</div></>:( mydata.description )}</div>
                                      </div>
                                      <p>{monthdata[mydata.start.month]} {mydata.start.year} to {monthdata[mydata.end.month]} {mydata.end.year}</p>
                                  </div>
                              </div>
                          </li>
                      ))}
                  </ul>
           </div>
       </div>
    </section>
  );
};

export default Education;
