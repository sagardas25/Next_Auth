/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";


export default function UserProfile({params} : any ) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-5xl">Profile page :  {params.id}</p>
    </div>
  );
}


