import React from "react";
import "./Card.css";
import { IoIosWarning } from "react-icons/io";
const Card = ({ id, title, tag, status }) => {
    const getStatusColor = (status) => {
        switch (status) {
          case "Backlog":
            return "red";
          case "In progress":
            return "green";
          default:
            return "silver";
        }
      };
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src="https://harsh-portfolio-three.vercel.app/static/media/harsh_photo.b360ad61a5d174f6226a.png"
            alt="UserImage"
          />
          <div
            className="showStatus"
            style={{ backgroundColor: getStatusColor({status}) }}
          ></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey">
          {" "}
          <IoIosWarning size={20} />{" "}
        </div>
        {tag?.map((elem, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
