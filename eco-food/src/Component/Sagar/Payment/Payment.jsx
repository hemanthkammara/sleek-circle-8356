import { FormControl,InputLabel,Input,FormHelperText } from '@mui/material';
import React, { memo, useEffect, useMemo, useReducer, useState } from 'react';
import { styled } from 'styled-components';
import ProgressBar from './ProgressBar';
import PaymentButton from './PaymentButton';



const initialState= {

    name:"",
    surname:"",
    email:"",
    mobileNumber:"",
    address1:"",
    address2:"",
    city:"",
    postcode:"",
    country:"India",
    state:"",
}


const reducer = (state,{type,payload})=>{


    switch(type){
       
        case "name": 
            return {...state,name:payload}; 
        case "surname":
            return {...state,surname:payload};
        case "email":
            return {...state,email:payload}; 
        case "mobileNumber":
            return {...state,mobileNumber:payload};
        case "address1":
            return {...state,address1:payload};
        case "address2":
            return {...state,address2:payload};  
        case "city":
            return {...state,city:payload};  
        case "postcode":
            return {...state,postcode:payload};  
        case "country":
            return {...state,country:payload};
        case "state":
            return {...state,state:payload};
        default:
            return state;                                      
    }
}


const Payment = () => {

    const [page,setPage] = useState(0);
    const [state,dispatch] = useReducer(reducer,initialState);

    const handleNext = ()=>{

        setPage((prev)=>prev+1);
    }

    const handleBack = ()=>{

        setPage((prev)=>prev-1);
    }

    const updateState = (e)=>{
       console.log(e);
          console.log(e.target.value,e.target.name);
       let {name,value}= e.target; 
        dispatch({type:name,payload:value});
    }

 
   





    return (
        <Div>
            <ProgressBar page={page}/>
          <div className={page==0?'addressDiv':"blockDiv"}>  
             <div className='two'>
                <div className='inputDiv'>
                   <label>First Name</label>
                   <input type='text' onChange={(e)=>updateState(e)} value={state.name}  name='name'/>
                </div> 
                <div className='inputDiv'>
                   <label htmlFor="my-input">Last Name</label>
                   <input type='text' name='surname'value={state.surname} onChange={updateState} />
                </div>
            </div>

            <div className='two' >
                <div className='inputDiv'>
                   <lable htmlFor="my-input">E-mail Address</lable>
                   <input type='email' name='email' value={state.email} onChange={updateState}/>
                </div>
                <div className='inputDiv'>
                   <lable htmlFor="my-input">Mobile Number</lable>
                   <input type='number' name='mobileNumber' value={state.mobileNumber} onChange={updateState} />
                </div>
            </div> 
  
            <div className='two'> 
                <div className='inputDiv'>
                   <lable htmlFor="my-input">City</lable>
                   <input type='text' name='city' value={state.city} onChange={updateState} />
                </div>
                <div className='inputDiv'>
                   <lable htmlFor="my-input">PostCode</lable>
                   <input type='number' name='postcode' value={state.postcode} onChange={updateState}/>
                </div> 
            </div>

            <div className='two'> 
                <div className='inputDiv'>
                   <lable htmlFor="my-input">Country</lable>
                   <input type='text' name='country' disabled value={"India"}/>
                </div> 
                <div className='inputDiv'>
                   <lable htmlFor="my-input">State</lable>
                   <input type='text' name='state' value={state.state} onChange={updateState} />
                </div> 
            </div>

            <div className='one'> 
                <div className='inputDiv'>
                   <label htmlFor="my-input">Adress Line 1</label>
                   <input type='text' name='address1' value={state.address1} onChange={updateState}/>
                </div> 
            </div>

            <div className='one'>
                <div className='inputDiv'>
                   <lable htmlFor="my-input">Adress Line 2</lable>
                  <input type='text' name='address2' value={state.address2} onChange={updateState} />
                </div> 
            </div>
          </div>    
 

 <div className={page==1?'confirmAddressDiv':"blockDiv"}>  
             <div className='two'>
                <div className='inputDiv'>
                   <label>First Name</label>
                   <input type='text' disabled value={state.name}  name='name'/>
                </div> 
                <div className='inputDiv'>
                   <label htmlFor="my-input">Last Name</label>
                   <input type='text' name='surname'value={state.surname} disabled />
                </div>
            </div>

            <div className='two' >
                <div className='inputDiv'>
                   <lable htmlFor="my-input">E-mail Address</lable>
                   <input type='email' name='email' value={state.email} disabled/>
                </div>
                <div className='inputDiv'>
                   <lable htmlFor="my-input">Mobile Number</lable>
                   <input type='number' name='mobileNumber' value={state.mobileNumber} disabled />
                </div>
            </div> 
  
            <div className='two'> 
                <div className='inputDiv'>
                   <lable htmlFor="my-input">City</lable>
                   <input type='text' name='city' value={state.city} disabled />
                </div>
                <div className='inputDiv'>
                   <lable htmlFor="my-input">PostCode</lable>
                   <input type='number' name='postcode' value={state.postcode} disabled/>
                </div> 
            </div>

            <div className='two'> 
                <div className='inputDiv'>
                   <lable htmlFor="my-input">Country</lable>
                   <input type='text' name='country' disabled value={"India"}/>
                </div> 
                <div className='inputDiv'>
                   <lable htmlFor="my-input">State</lable>
                   <input type='text' name='state' value={state.state} disabled />
                </div> 
            </div>

            <div className='one'> 
                <div className='inputDiv'>
                   <label htmlFor="my-input">Adress Line 1</label>
                   <input type='text' name='address1' value={state.address1} disabled/>
                </div> 
            </div>

            <div className='one'>
                <div className='inputDiv'>
                   <lable htmlFor="my-input">Adress Line 2</lable>
                  <input type='text' name='address2' value={state.address2} disabled />
                </div> 
            </div>
          </div>  
         
          <PaymentButton handleBack={handleBack} handleNext={handleNext} page={page}/>
      
        </Div>
    );
};
export default Payment;


const Div = styled.div`
 
display: flex;
flex-direction: column;
margin: auto;
justify-content: space-between;
align-items: center;
align-content: space-between;
width: fit-content;
padding-left: 40px;
padding-right: 40px;
padding-top: 10px;
margin-top: 20px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
.two{   
   display: flex;
   gap: 20px;
   margin-top: 15px;
 
}

.two input{
   background-color: white;
   width:300px;
   height: 35px;
  border: none;
   font-size: 15px;
   color: darkblue;
   /* border-radius: 10px; */
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.one input{
   background-color: white;
   width:620px;
   height: 35px;
   border:none;
   font-size: 15px;
   color: darkblue;
   /* border-radius: 10px; */
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.inputDiv{
 display:flex;
 flex-direction:column;
}


.blockDiv{
    display: none;
}

.confirmAddressDiv input{
     background-color: lightgray;
     transition: transform 0.5s ease-in;
     transform: rotate(20);
}

`


