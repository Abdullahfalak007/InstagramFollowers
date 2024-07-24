import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { Button } from './styles/Button';
const Contact = () => {
  const Wrapper = styled.section`
    
  .whole-body{
    height: 600px;
    width: 1519px;
    color: ${({ theme }) => theme.colors.bg};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .containercontact{
    width: 80%;
    color: ${({ theme }) => theme.colors.bg};
    border-radius: 6px;
    padding: 30px 60px 40px 40px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  .containercontact .content{
     display: flex;
     align-items: center;
     justify-content: space-between;
  }
  .containercontact .content .left-side{
    width: 25%;
    height: 100%;
    margin-top: 15px;
    position: relative;
  }
  .content .left-side .details{
    margin: 14px;
    text-align: center;
  }
  .content .left-side .details span{
    font-size: 30px;
    color: #004AAD;
    margin-bottom: 10px;
  }
  .content .left-side .details .topic{
    font-size: 18px;
    font-weight: 500;
  }
  .content .left-side .details .text-two,
  .content .left-side .details .text-one{
    font-size: 14px;
    color:#afafb6;
   
  }
  
  
  .content .left-side::before{
    content:'';
    position: absolute;
    height: 70%;
    width: 2px;
    right:-15%;
    top: 50%;
    transform: translateY(-50%);
    background:#afafb6;
  
  
  
  }
  .containercontact .content .right-side{
    width: 75%;
    margin-left: 75px;
  }
  .containercontact .content .topic-text{
    font-size: 23px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.btn};
  }
  .right-side .input-box{
    height: 50%;
    width: 100%;
    margin: 12px 0;
  }
  .right-side .input-box input{
    height: 45px;
    width: 100%;
    border: none;
    border-radius: 6px;
    background: #f0f1f8;
    font-size: 16px;
    padding: 0 15px;
    resize: none;
  }
  .right-side .input-box textarea{
    height: 16vh;
    width: 100%;
    border: none;
    border-radius: 6px;
    background: #f0f1f8;
    font-size: 16px;
    padding: 0 15px;
    resize: none;
  }
  .right-side .button{
    display: inline;
    margin-top:12px ;
  }
  .right-side .message-box{
  min-height: 110px;
  margin-top: 6px;
  }
  .right-side .button input[name="button"]{
    color:#fff;
    font-size: 18px;
    background: ${({ theme }) => theme.colors.btn};
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 140px;
    height: 40px;
  
  }
  .button input[name="button"]:hover{
  background: rgb(157, 126, 243);
  }

  `

 
  return (
    <Wrapper>
<div className='whole-body'>
    <div className='containercontact'>
      <div className='content'>
        <div className='left-side'>
          <div className='Address details'>
            <span><FontAwesomeIcon icon={faLocationDot} /></span>
            <div className='topic'>Address</div>
            <div className='text-one'>Lahore , Techesthe</div>
            <div className='text-two'> 333 J1 Joher town</div>
        </div>
        <div className='phone details'>
        <span><FontAwesomeIcon icon={faPhone} /></span>
            <div className='topic'>Phone</div>
            <div className='text-one'>+92 308 4417 922</div>
          <div className='text-two'> +92 090 0786 011</div>
        
        </div>
        <div className='Email details'>
        <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <div className='topic'>Gmail</div>
            <div className='text-one'>haroonrasheed21f@gmail.com</div>
          <div className='text-two'>info.coding@gmail.com</div>
        
        </div>
      </div>
      <div className='right-side'>
        <div className='topic-text'>SEND US A MESSAGE</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. its my pleasure to help you.</p>
      
      <form action="https://formspree.io/f/myyqwpwr"
             method="POST"
            >
        <div className='input-box'>
          <input type='text' placeholder='enter your name' name="text" required
             autoComplete="off" />
        </div>
        <div className='input-box'>
          <input type='text' placeholder='enter your email' name='email' required
             autoComplete="off"/>
        </div>
        <div className='input-box message-box' name="textarea" required
             autoComplete="off">
         <textarea></textarea>
        </div>
        <Button className='button'>
          <input type='submit' value="Send Now" name='button'/>
        </Button>
      </form>
      </div>
    </div>
    </div>
    </div>
    </Wrapper>
  );
};

export default Contact;