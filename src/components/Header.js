import React from "react";
import "../styles/style.css";
import { Button } from "reactstrap";

export default function Header() {
  let myaudio = new Audio("/assets/music/tts.wav");
  const start = () => {
    myaudio.play();
  };
  let myaudio2 = new Audio("/assets/music/1.mp3");
  const start2 = () => {
    myaudio2.play();
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="text">
            <div className="bg">
              <h1>Text to Speech 2077</h1>
              <h5>
                The Most Powerful Text to Speech Software ever made. the most
                accurate, versatile and dynamic Text to Speech Software in the
                world!
              </h5>
              <i className="fa fa-medal text-center">
                <p className="text-left mx-5">
                  Most Accurate Text to Speech Software in the world <br />{" "}
                  <br /> - Microsoft
                </p>
              </i>
              <i className="fa fa-trophy">
                <p className="text-left mx-5">
                  It can Hack NASA using the "Darpax" Voice Recognition. <br />{" "}
                  <br /> - Google
                </p>
              </i>
              <div className="text-left pb-3 pl-5">
                {" "}
                <Button
                  onMouseEnter={start}
                  className="btn rounded-pill"
                  href="/text-to-speech"
                >
                  <strong>Start Now</strong>
                </Button>
              </div>
            </div>
          </div>
          <div onMouseEnter={start2} className="header-robot">
            <img src="/assets/image/robot2.png" alt="robot" />
            <img src="/assets/video/gif2.gif" alt="gif" className="thunder" />
            <img src="/assets/video/gif4.gif" alt="gif" className="thunder2" />
          </div>
        </div>
      </header>
    </>
  );
}
