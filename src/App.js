import React, { Component } from "react";
import image from "./image.jpg";
import ImagePreview from "./ImagePreview";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          maxWidth: "320px",
          margin: "auto"
        }}
      >
        <ImagePreview tagline={"This is the tagline"} handleColor={"#fd7065"} />
      </div>
    );
  }
}

export default App;
