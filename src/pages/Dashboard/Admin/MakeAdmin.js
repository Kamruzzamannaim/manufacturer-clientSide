import React from 'react';
import UsersRow from './UsersRow';

import { useQuery } from "@tanstack/react-query";
import Loading from '../../Shared/Loading';
const MakeAdmin = () => {
    const { data: users, isLoading,refetch } = useQuery(["users"], () =>
    fetch("https://afternoon-hamlet-34240.herokuapp.com/user",{
      method:"GET",
      headers:{
          authorization:`bearer ${localStorage.getItem("accessToken")}`
      }
    }).then((res) => res.json())
  );
  if(isLoading){
    return <Loading></Loading>
  }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
    
    <tr>
        <th></th>
        <th>User</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      
     {
        users?.map((user,index)=><UsersRow key={user._id} user={user} refetch={refetch} index={index}></UsersRow>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MakeAdmin;