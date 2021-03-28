import React from "react";
import Spinner from "../../components/progress/spinner/Spinner";

export default {
  title: "Progress/Spinner",
  component: Spinner,
};

export const Default = () => <Spinner />
export const Small = () => <Spinner small />
export const Inline = () => <Spinner inline >Spinning</Spinner>
