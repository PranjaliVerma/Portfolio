
import React from "react";
import '../css/Contact.scss'
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const Contact = (props) => {
  const { register, handleSubmit, errors } = useForm(); 
  const onSubmit = values =>{

    emailjs.sendForm('service_fmlnlcd',  'template_061yjhs','#contact-form','user_fQHBMfLfSbMeaiqpyaPsf')
    .then(
      (result) => {
        confirmAlert({
          message: <center><i className="fa fa-check-circle iconSize success" aria-hidden="true" />
           <br/>
          Email sent successfully!</center>,
          buttons: [
            {
              label: 'Okay',
            },
            {
              label: 'Close',
            }
          ]
        });
        document.getElementById('contact-form').reset();
      },
      (error) => {
        confirmAlert({
          message: <center><i className="fa fa-exclamation-triangle iconSize failure" aria-hidden="true"/>
          <br/>
          Some error occured!</center>,
          buttons: [
            {
              label: 'Okay',
            },
            {
              label: 'Close',
            }
          ]
        });
      }
    );
    }
    
  return (
    <section id='Contact'>

             <div className='contact'>
             <h1 className='mydata pd text-shadow'>CONTACT</h1>
             <div className='displayflex'>
                <div className="left-c">
                    <div className="colorlib-feature colorlib-feature-sm  "   >
                        <div className="colorlib-icon  box-shadow">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        </div>
                        <div className="colorlib-text">
                             <p><a  href={'mailto:'+props.data.email}>{props.data.email}</a></p>
                        </div>
                    </div>
                   
                    <div className="colorlib-feature colorlib-feature-sm ">
                        <div className="colorlib-icon  box-shadow">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div className="colorlib-text">
                            <p><a href='/Map'>{props.data.region}</a></p>
                        </div>
                     </div>
                    <div className="colorlib-feature colorlib-feature-sm">
                        <div className="colorlib-icon  box-shadow">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="colorlib-text">
                            <p><a href={'tel://'+props.data.phone}>{props.data.phone}</a></p>
                        </div>
                    </div>
                </div>
               
          <div className="right-c">
          
                  <div>
                  <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" className="form-control" name='from_name' placeholder="Name" ref={register({ required: true })}/>
                              </div>
                              {errors.from_name && <div className='failure'>Name is required</div>}
                            <div className="form-group">
                                <input type="text" className="form-control" name='from_email_name' placeholder="Email" ref={register({ required: true })}/>
                              </div>
                              {errors.from_email_name && <div className='failure'>Email is required</div>}
                              <div className="form-group">
                                <input type="text" className="form-control" name='subject' placeholder="Subject" ref={register({ required: true })}/>
                              </div>
                              {errors.subject && <div className='failure'>Subject is required</div>}
                              <div className="form-group">
                                  <textarea id="message" cols="30" rows="7" name='message' className="form-control text" placeholder="Message" ref={register({ required: true })}></textarea>
                              </div>
                              {errors.message && <div className='failure'>Message is required</div>}
                              <div className="form-group">
                                  <input type="submit" className="btn btn-primary" />
                              </div>
                      </form>
                   </div>
           </div>
          </div>
          </div>
    </section>
  );
};

export default Contact;
