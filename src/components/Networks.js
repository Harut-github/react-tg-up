import { useState } from "react";
import { Link } from "react-router-dom";

import network1 from "../assets/img/networks1.svg";
import network2 from "../assets/img/networks2.svg";
import network3 from "../assets/img/networks3.svg";
import network4 from "../assets/img/networks4.svg";
import network5 from "../assets/img/networks5.svg";
import network6 from "../assets/img/networks6.svg";
import network7 from "../assets/img/networks7.svg";
import network8 from "../assets/img/networks8.svg";
import network9 from "../assets/img/networks9.svg";
import network10 from "../assets/img/networks10.svg";
import network11 from "../assets/img/networks11.svg";
import network12 from "../assets/img/networks12.svg";
import network13 from "../assets/img/networks13.svg";
import network14 from "../assets/img/networks14.svg";

import network1Hover from "../assets/img/networkshover/networks1.svg";
import network2Hover from "../assets/img/networkshover/networks2.svg";
import network3Hover from "../assets/img/networkshover/networks3.svg";
import network4Hover from "../assets/img/networkshover/networks4.svg";
import network5Hover from "../assets/img/networkshover/networks5.svg";
import network6Hover from "../assets/img/networkshover/networks6.svg";
import network7Hover from "../assets/img/networkshover/networks7.svg";
import network8Hover from "../assets/img/networkshover/networks8.svg";
import network9Hover from "../assets/img/networkshover/networks9.svg";
import network10Hover from "../assets/img/networkshover/networks10.svg";
import network11Hover from "../assets/img/networkshover/networks11.svg";
import network12Hover from "../assets/img/networkshover/networks12.svg";
import network13Hover from "../assets/img/networkshover/networks13.svg";
import network14Hover from "../assets/img/networkshover/networks14.svg";

const icons = [
  { default: network1, hover: network1Hover },
  { default: network2, hover: network2Hover },
  { default: network3, hover: network3Hover },
  { default: network4, hover: network4Hover },
  { default: network5, hover: network5Hover },
  { default: network6, hover: network6Hover },
  { default: network7, hover: network7Hover },
  { default: network8, hover: network8Hover },
  { default: network9, hover: network9Hover },
  { default: network10, hover: network10Hover },
  { default: network11, hover: network11Hover },
  { default: network12, hover: network12Hover },
  { default: network13, hover: network13Hover },
  { default: network14, hover: network14Hover },
];


export default function Networks() {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
      <div className="content__box">
        <div className="content__box-bg">
          <div className="networks__title">
            <h1>Платформы продвижения</h1>
          </div>
          <div className="networks">
            {icons.map((icon, index) => (
              <Link
                key={index}
                className={`networks__item ${activeIndex === index ? "networks__item-active" : ""}`}
                to="/platform"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={activeIndex === index || hoveredIndex === index ? icon.hover : icon.default}
                  alt={`icon-${index}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
}
