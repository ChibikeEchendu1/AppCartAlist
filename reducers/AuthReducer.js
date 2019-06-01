const INITIAL_STATE = {email: '' ,password:'',name:'',EmailError:'',PasswordError:'',user:{},NameError:''};

export default (state = INITIAL_STATE, action) =>{
console.log(action);

    switch(action.type){
        case 'email_changed':
            return {...state, email:action.payload}

        case 'Password_changed':
            return {...state, password:action.payload}

        case 'Name_changed':
            return {...state, name:action.payload} 
            
        case 'Email_Error':
            return {...state, EmailError:action.payload}

        case 'Password_Error':
            return {...state, PasswordError:action.payload}

        case 'Name_Error':
            return {...state, NameError:action.payload}
        case 'Spinner':
            return {...state, Loader:action.payload}
        case 'Get_User':
            return {...state, user:action.payload}
        default:
            return state;
    }
}