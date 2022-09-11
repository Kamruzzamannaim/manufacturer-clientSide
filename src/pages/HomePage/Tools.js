import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Shared/Loading";
import Tool from "./Tool";
const Tools = () => {
  const { data: tools, isLoading } = useQuery(["tools"], () =>
    fetch("https://afternoon-hamlet-34240.herokuapp.com/tools").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-5">
      <h2 className="text-primary text-center text-3xl font-bold">OUR TOOLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
