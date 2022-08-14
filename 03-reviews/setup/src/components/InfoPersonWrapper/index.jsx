import React, { useState } from 'react';


export const InfoPersonWrapper = ({ name, job, info }) => {

  return (
    <>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{info}</p>
    </>
  );

};
