import React from "react";
import { FoodDot } from "./SnakeFood.styled";

export default function SnakeFood({ dot }) {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };
  return <FoodDot style={style}></FoodDot>;
}
