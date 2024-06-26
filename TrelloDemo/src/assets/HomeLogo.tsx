import { FC } from "react";

const HomeLogo: FC = () => {
  return (
    <div>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
        enableBackground="new 0 0 32 32"
        xmlSpace="preserve"
        style={{
          width: "2rem",
          height: "2rem",
        }}
      >
        <polyline
          fill="none"
          stroke="#000000"
          strokeWidth={2}
          strokeMiterlimit={10}
          points="3,17 16,4 29,17 "
        />
        <polyline
          fill="none"
          stroke="#000000"
          strokeWidth={2}
          strokeMiterlimit={10}
          points="6,14 6,27 13,27 13,17 19,17 19,27 26,27  26,14 "
        />
      </svg>
    </div>
  );
};

export default HomeLogo;
