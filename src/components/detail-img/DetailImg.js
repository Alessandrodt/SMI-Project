import React, { useState, useEffect } from "react";
//Services
import imagesServices from "../../services/imagesServices";

export const DetailImg = ({ idImage }) => {
  const [imgDetail, setImgDetail] = useState({});

  useEffect(() => {
    imagesServices.loadImageDetail(idImage).then((imgDetail) => {
      console.log(imgDetail);
      setImgDetail(imgDetail);
    });
  }, [idImage]);

  return (
    <>
      <div className="inner-box">
        <div className="img-box">
          {/* <img
            img={"data:image/png;base64, " + imgDetail}
            image_id={imgDetail.id}
            key={imgDetail.id}
          /> */}
          <img
          img= { "data:image/png;base64," + imgDetail}
          image_id={imgDetail.id}
          key={imgDetail.id}
          />
        </div>
        <div className="info-external-box">
          <div className="tag-box">
            <div className="text-box">
              <div className="title-box">#Tag</div>
            </div>
          </div>
          <div className="description-box">
            <div className="text-box">
              <div className="title-box">Description</div>
            </div>
          </div>
          <div className="external-button-box">
            <button className="button-action">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};
