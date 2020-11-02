import React, { useState } from 'react';
import { Navbar,  Button, Form } from 'react-bootstrap';
import StepProgressBar from 'react-step-progress';

import 'react-step-progress/dist/index.css';

import './App.css';

const App = () => {
  
  // const [ profile, setProfile ]= useState(false);
  const step2Validator = () => {
    // return a boolean
  }
   
  const step5Validator = () => {
  
  }
   
  const onFormSubmit = () => {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  const profileDetails = (
    <div>
        <div className="text-center info">
            <h5>5. Profile Verification</h5>
            <small>Confirm your Identity</small>
        </div>
        <h5>Documents requirements</h5>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><small>1.Scanned Copy (or close up photo)of your photo ID(i.e passport,ID card,driver's license)</small></Form.Label>
            <Form.Control className="input-box" type="text" placeholder="Click or Drag here to upload Photo" />
          
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label><small>2.Photo of applicant holding the same photo ID with the person's photo and name clearly visible</small> </Form.Label>
            <Form.Control className="input-box" type="text" placeholder="Click or Drag here to upload photo" />
          </Form.Group>
        
         
        </Form>      
        <div className="info">
          <small>we don't store documents on our servers after verification is complete</small>
        </div>
      </div>
  )
   
return (
    <div>
      <Navbar className="navBar">
        <Navbar.Brand href="#home" className="navBar__link">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          tokatif
        </Navbar.Brand>
        <div className="auto-left">
          <Button className="navBar__cancelBtn">cancel</Button>
        </div>
      </Navbar>
      <div className="contentWrapper">
      <div className="content">
      <div>
            <StepProgressBar
                  startingStep={0}
                  onSubmit={onFormSubmit}
                  steps={[
                    {
                      label: 'Apply to Teach',
                      subtitle: '',
                      name: 'step 1',
                      // content: step1Content
                    },
                    {
                      label: 'Personal Information',
                      subtitle: '',
                      name: 'step 2',
                      // content: step2Content,
                      
                    },
                    {
                      label: 'Profile Description',
                      subtitle: '',
                      name: 'step 3',
                      // content: step3Content,
                     
                    },
                    {
                      label: 'Video Introduction',
                      subtitle: '',
                      name: 'step 3',
                      // content: step3Content,
                     
                    },
                    {
                      label: 'Profile Verification',
                      subtitle: '',
                      name: 'step 5',
                      content: profileDetails,
                      validator: step5Validator
                    },

                  ]}
      />
      </div>
        {/* { profile ? profileDetails : null } */}
       
    </div>
    <div className="buttonWrapper">
      <div>
          <Button className="back-btn">Back</Button>
      </div>   
      <div className="auto-left">  
          <Button className="reg-btn">Complete Registration</Button>
      </div> 
    </div>
    </div>
  
      
   
    </div> 
  )
}

export default App;
