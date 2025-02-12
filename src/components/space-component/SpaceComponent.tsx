"use client";
import Spline from "@splinetool/react-spline";

const SpaceComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(bg/1.jpg)",
      }}
    >
      <Spline scene="https://prod.spline.design/cf9XbD1jY2ivnhOO/scene.splinecode" />
    </div>
  );
};

export default SpaceComponent;
