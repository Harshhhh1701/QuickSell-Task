import React from "react";
import { useSelector } from "react-redux";
import { HiChartBar } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import "./Dashboard.css";
import Card from "../Card/Card";

const Dashboard = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="CardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <HiChartBar />
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{
                            width: "15px",
                            height: "15px",
                            display: "inline-block",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://harsh-portfolio-three.vercel.app/static/media/harsh_photo.b360ad61a5d174f6226a.png"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} status={elem.status} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;
