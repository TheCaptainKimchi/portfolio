import "./Banner.scss";
import ReactIcon from "../../Assets/Tech/React-icon.svg";
import NodeIcon from "../../Assets/Tech/Node.js_logo.svg";
import AWSIcon from "../../Assets/Tech/Amazon_Web_Services_Logo.svg";
import JiraIcon from "../../Assets/Tech/jira-icon.svg";
import GitIcon from "../../Assets/Tech/Git-Icon-1788C.svg";
import GitHubIcon from "../../Assets/Tech/github-mark/github-mark.svg";
import JestIcon from "../../Assets/Tech/jest-seeklogo.com.svg";

import Slider from "react-infinite-logo-slider";

const Banner = () => {
  return (
    <div className="banner">
      <Slider width="200px" duration={30}>
        <Slider.Slide>
          <img src={ReactIcon} alt="any" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={NodeIcon} alt="any" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={AWSIcon} alt="any" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={JiraIcon} alt="any" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={GitIcon} alt="any" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={GitHubIcon} alt="any" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={JestIcon} alt="any" className="w-36" />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default Banner;
