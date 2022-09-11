import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Shared/Loading";

const UserMessage = () => {
  const {
    data: userMessages,
    isLoading,
  } = useQuery(["usersMessages"], () =>
    fetch(`https://afternoon-hamlet-34240.herokuapp.com/usersMessages`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>users messages</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {userMessages.map((message, index) => (
              <tr key={message._id} message={message}>
                <th>{index + 1}</th>
                <td>{message.email}</td>
                <td>{message.subject}</td>
                <td>{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserMessage;
