import React from 'react';

function Page({ data }) {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome, {data.name}</h1>
      <div className="page-content">
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Password:</strong> {data.password}</p>
      </div>
    </div>
  );
}

export default Page;
