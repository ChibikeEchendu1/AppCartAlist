import _ from 'lodash';
const INITIAL_STATE = {email: '' ,password:'',name:'',EmailError:'',PasswordError:'',user:{},NameError:'',items:[]};

export default (state = INITIAL_STATE, action) =>{
console.log(action);

    switch(action.type){
        case 'item_clered':
            return {...state, items: []}
        case 'Add_Item':
            return {...state, items: [action.payload,...state.items]}
        case 'return_Item':
            return {...state, items: [...state.items]}
        case 'Item_remove':
             return {...state, items: state.items.filter((item,i) => i != action.payload)}
        case 'Item_changed':
            return {...state, itemName:action.payload}
        case 'Quan_changed':
            return {...state, Quan:action.payload}
        case 'Size_changed':
            return {...state, Size:action.payload}
        case 'Size_Error':
            return {...state, SizeError:action.payload}
        case 'Quan_Error':
            return {...state, QuanError:action.payload}
        case 'Item_Error':
            return {...state, ItemError:action.payload}
        default:
            return state;
    }
}