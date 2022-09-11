import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({user,refetch,index}) => {
    const{email}=user;
    const handleAdmin=()=>{
        fetch(`https://afternoon-hamlet-34240.herokuapp.com/user/admin/${email}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                toast.success('successfully made an admin.')
            }
            else{
                toast.error('failed to made an admin')
            }
        })

    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{user.role!=='admin'?<button onClick={handleAdmin} className='btn btn-xs btn-secondary'>Admin</button>:<button onClick={handleAdmin} disabled className='btn btn-xs btn-secondary'>Admin</button>}</td>
        
      </tr>
    );
};

export default UsersRow;