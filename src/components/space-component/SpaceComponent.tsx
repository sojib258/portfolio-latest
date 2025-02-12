"use client";
import Spline from "@splinetool/react-spline";

const SpaceComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "transparent",
        zIndex: "-1",
      }}
    >
      <Spline scene="https://prod.spline.design/JoYVCWmbwMowcWIn/scene.splinecode" />
    </div>
  );
};

export default SpaceComponent;
