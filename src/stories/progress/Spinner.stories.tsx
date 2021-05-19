import React from "react";
import Spinner, {
    SpinnerProps,
} from "../../components/progress/spinner/Spinner";

export default {
    title: "Progress/Spinner",
    component: Spinner,
};

export const Default = (args: SpinnerProps) => <Spinner {...args} />;
Default.args = { primaryColor: "blue", secondaryColor: "#D1D1D1" };

export const Small = () => <Spinner small />;
export const Inline = () => <Spinner inline>Spinning</Spinner>;
