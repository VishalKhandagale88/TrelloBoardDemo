import { FC } from "react";

const NotificationLogo: FC = () => {
  return (
    <div>
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="-3 -2 24 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
        className="jam jam-bell"
        style={{
          width: "2rem",
          height: "2rem",
        }}
      >
        <path d="M13.666 11.782L13 11.186V6a4 4 0 1 0-8 0v5.186l-.666.596A6.987 6.987 0 0 0 2.29 15h13.42a6.987 6.987 0 0 0-2.044-3.218zM12 17a3 3 0 0 1-6 0H0a8.978 8.978 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.978 8.978 0 0 1 18 17h-6zm-3 1a1 1 0 0 0 1-1H8a1 1 0 0 0 1 1z" />
      </svg>
    </div>
  );
};

export default NotificationLogo;
