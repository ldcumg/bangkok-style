import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  padding: 6px;
  transition: all 0.3s;

  &:hover {
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.04);
    transform: scale(1.2);
  }
`;

const LikeActive = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 41.95L21.95 40.1C18.4243 36.8627 15.5097 34.07 13.206 31.722C10.902 29.374 9.06667 27.275 7.7 25.425C6.33333 23.575 5.375 21.9 4.825 20.4C4.275 18.9 4 17.3833 4 15.85C4 12.845 5.00833 10.3353 7.025 8.32099C9.04167 6.30699 11.5333 5.29999 14.5 5.29999C16.4 5.29999 18.1583 5.74999 19.775 6.64999C21.3917 7.54999 22.8 8.84999 24 10.55C25.4 8.74999 26.8833 7.42499 28.45 6.57499C30.0167 5.72499 31.7 5.29999 33.5 5.29999C36.4667 5.29999 38.9583 6.30699 40.975 8.32099C42.9917 10.3353 44 12.845 44 15.85C44 17.3833 43.725 18.9 43.175 20.4C42.625 21.9 41.6667 23.575 40.3 25.425C38.9333 27.275 37.098 29.374 34.794 31.722C32.4903 34.07 29.5757 36.8627 26.05 40.1L24 41.95ZM23.975 14.3C27.3497 11.2 28.8207 9.71667 31 7.5C33.1793 5.28333 40.7167 12.6667 42 11C43.2833 9.33333 40.9833 15.3047 41.5 14C42.0167 12.6957 41 17.2863 41 16C41 13.7953 39.9 11.9167 38.5 10.5C37.1 9.08333 35.7037 8.29999 33.511 8.29999C31.7937 8.29999 30.4617 8.95 29 10C27.5383 11.05 26.1 12.4 25.2 14.3H22.75C21.8833 12.4333 19.9617 11.5667 18.5 10.5C17.0383 9.43333 16.2063 8.29999 14.489 8.29999C12.2963 8.29999 11.4 9.58333 10 11C8.6 12.4167 7 13.6553 7 15.866C7 17.1553 7.25833 18.4583 7.775 19.775C8.29167 21.0917 4.21667 11.3167 5.5 13C6.78333 14.6833 13.3 4.44999 15.5 6.64999C17.7 8.84999 20.6417 11.2333 23.975 14.3Z"
        fill="#FF0000"
      />
    </Svg>
  );
};

export default LikeActive;
