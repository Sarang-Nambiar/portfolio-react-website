import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../Stylesheets/PicViewer.css";

const PicViewer = ({ viewPic, setViewPic }) => {
  return (
    <div className="viewer-backdrop">
      <div className="flex flex-row-reverse w-100 py-3 px-5">
        <CloseIcon
          className="cursor-pointer"
          onClick={() => setViewPic(null)}
          sx={{ color: "white" }}
        />
      </div>

      <img src={viewPic} alt="pic" className="pic" />
    </div>
  );
};

export default PicViewer;
