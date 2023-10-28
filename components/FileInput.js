import React, { useRef } from "react";
import Button from "@mui/material/Button";

const FileInput = (props) => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      props.setFile(file);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        variant="contained"
        color={props.file ? "success" : "primary"}
        onClick={handleButtonClick}
      >
        {props.file ? props.file.name : "Selecione um arquivo"}
      </Button>
    </div>
  );
};

export default FileInput;
