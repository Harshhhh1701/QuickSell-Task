import React from "react";
import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
    </div>
  );
};

export default Loading;
