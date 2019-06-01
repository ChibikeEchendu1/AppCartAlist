const emailvalid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordVaild = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
const IP = 'http://192.168.0.16:5000'
//const IP = 'http://localhost:5000'

import axios from 'axios'
export const emailChanged = (text) =>{
    return {
        type: 'email_changed',
        payload: text
    }
}



export const PasswordChanged = (text) =>{
    return {
        type: 'Password_changed',
        payload: text
    }
}

export const NameChanged = (text) =>{
    return {
        type: 'Name_changed',
        payload: text
    }
}

export const SignUpUser =  ({name,email,password}) =>{
    return async (dispatch) => {

        if(name == '' || typeof name == 'undefined'){
                    dispatch({type: 'Name_Error', payload: "Empty Field"});
                    dispatch({type: 'Password_Error', payload: ""});
                    dispatch({type: 'Email_Error', payload: ""});
                }
            
        else if(email == '' || typeof email == 'undefined'){
                    dispatch({type: 'Email_Error', payload: "Empty Field"});
                    dispatch({type: 'Password_Error', payload: ""});
                    dispatch({type: 'Name_Error', payload: ""});
                }
    
        else if(password == '' || typeof password == 'undefined'  ){
                    dispatch({type: 'Password_Error', payload: "Empty Field"});
                    dispatch({type: 'Email_Error', payload: ""});
            dispatch({type: 'Name_Error', payload: ""});
    
        }
         
    
       
        else if( emailvalid.test(email) == false){
                    dispatch({type: 'Email_Error', payload: "Enter an Email"});
                   dispatch({type: 'Password_Error', payload: ""});
                           dispatch({type: 'Name_Error', payload: ""});

    
                }
    
        else if(passwordVaild.test(password) == false){
                    dispatch({type: 'Password_Error', payload: "Must contain 8 charcters, uppercase, lowercase, digit"});
                    dispatch({type: 'Email_Error', payload: ""});
            dispatch({type: 'Name_Error', payload: ""});
        }
        else{
            dispatch({type: 'Email_Error', payload: ""});
            dispatch({type: 'Password_Error', payload: ""});
            dispatch({type: 'Name_Error', payload: ""});
            dispatch({type: 'Spinner', payload: true});
            const emailLower = email.toLowerCase()
            const res = await axios.post(IP+'/api/user/signupemail',{name,password,emailLower});

            console.log(res);
            
            if( typeof res.data.error != 'undefined'){
                       dispatch({type: 'Name_Error', payload: res.data.error});
                    }
                   else{
                      dispatch({type: 'Get_User', payload: res.data});
                    }
                dispatch({type: 'Spinner', payload: false});
            
        }
    
        }
        
}

export const loginUser = ({email, password}) =>{
    console.log('we here');

    return async (dispatch) => {
    if(email == '' || typeof email == 'undefined'){
                dispatch({type: 'Email_Error', payload: "Empty Field"});
                dispatch({type: 'Password_Error', payload: ""});
            }

    else if(password == '' || typeof password == 'undefined'  ){
                dispatch({type: 'Password_Error', payload: "Empty Field"});
                dispatch({type: 'Email_Error', payload: ""});

    }
    else if( emailvalid.test(email) == false){
                dispatch({type: 'Email_Error', payload: "Enter an Email"});
               dispatch({type: 'Password_Error', payload: ""});

            }

    else if(passwordVaild.test(password) == false){
                dispatch({type: 'Password_Error', payload: "Must contain 8 charcters, uppercase, lowercase, digit"});
                dispatch({type: 'Email_Error', payload: ""});
    }
    else{
        dispatch({type: 'Email_Error', payload: ""});
        dispatch({type: 'Password_Error', payload: ""});
        dispatch({type: 'Spinner', payload: true});
        const emailLower = email.toLowerCase()
        const res = await axios.post(IP+'/api/user/loginemail',{password,emailLower});

        console.log(res);
        
        if( typeof res.data.error != 'undefined'){
                   dispatch({type: 'Password_Error', payload: res.data.error});
                }
               else{
                  dispatch({type: 'Get_User', payload: res.data});
                }

            dispatch({type: 'Spinner', payload: false});
        
    }

    }
    
    
}