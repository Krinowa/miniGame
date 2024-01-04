// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import classnames from "//cdn.skypack.dev/classnames";
import Constants from "../../utils/constants";
import "./styles.css";

// eslint-disable-next-line react/prop-types
const Balloon = ({ id, color, isActive, onClick }) => {
  const [isPopped, setIsPopped] = useState(false);

  const classNames = classnames("balloon", {
    "balloon--popping": isPopped,
    "balloon--active": isActive,
  });

  const clickHandler = () => {
    if (!isPopped) {
      setIsPopped(true);
      onClick();

      setTimeout(() => {
        setIsPopped(false);
      }, Constants.randomnessLimits.lower);
    }
  };

  const balloonWidth = Constants.balloonWidth;
  const balloonHeight = balloonWidth * 1.17;
  const threadHeight = Constants.threadHeight;

  return (
    <div className="balloon-cell">
      <div
        className={classNames}
        style={{ color: color }}
        onClick={clickHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}
        >
          <defs>
            <radialGradient
              id={`balloon-gradient-${id}`}
              cx="40%"
              cy="40%"
              r="50%"
              fx="30%"
              fy="30%"
            >
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="currentColor" />
            </radialGradient>
          </defs>

          <rect
            x={balloonWidth / 2}
            y={balloonHeight}
            width="1"
            height={threadHeight}
            fill="currentColor"
          />
          <polygon
            points={`${balloonWidth / 2},${balloonHeight - 3} ${
              balloonWidth / 2 + 8
            },${balloonHeight + 5} ${balloonWidth / 2 - 8},${
              balloonHeight + 5
            }`}
            fill="currentColor"
          />
          <ellipse
            cx={balloonWidth / 2}
            cy={balloonHeight / 2}
            rx={balloonWidth / 2}
            ry={balloonHeight / 2}
            fill={`url(#balloon-gradient-${id})`}
            filter={`url(#balloon-gradient-${id})`}
          />
        </svg>
      </div>
    </div>
  );
};

export default Balloon;
