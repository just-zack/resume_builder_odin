import React from "react";

export default function header({ info }) {
  return (
    <div className="header_container">
      <h1 className="header--name">{info.name}</h1>
      <h2 className="header--title">{info.title}</h2>
    </div>
  );
}
