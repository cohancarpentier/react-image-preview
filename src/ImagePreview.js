import React, { Component } from "react";
import "./style.css";

class ImagePreview extends Component {
  render() {
    const { tagline, handleColor } = this.props;
    return (
      <div
        style={{
          transform: "translate(0px, 0px)",
          opacity: 1,
          width: "100%"
        }}
      >
        <div className="item-wrapper">
          <div className="img-wrapper">
            <a href="#" target="_blank" style={{ position: "relative" }}>
              <div className="spin-container">
                <div
                  className="img"
                  style={{
                    backgroundImage:
                      "url(https://gw.alipayobjects.com/zos/rmsportal/JhuPtNExKmpFjYKxBSZg.jpg)"
                  }}
                />
                <img
                  alt="img"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JhuPtNExKmpFjYKxBSZg.jpg"
                  style={{ display: "none" }}
                />
              </div>
            </a>
          </div>
          {tagline ? <p>{tagline}</p> : null}
          <div
            className="handle"
            style={{
              backgroundColor: handleColor ? handleColor : "#2f54eb"
            }}
          >
            <div className="col">
              <a href="#" target="_blank">
                <i>
                  <svg
                    viewBox="64 64 896 896"
                    className=""
                    data-icon="eye"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                  </svg>
                </i>
                <span>Preview</span>
              </a>
            </div>
            <div className="col">
              <a href="#" target="_blank">
                <i>
                  <svg
                    viewBox="64 64 896 896"
                    className=""
                    data-icon="download"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
                  </svg>
                </i>
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagePreview;
