import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../../components/Button";
import TextField from "../../components/TextField";
import CenterView from "./CenterView";
// import Welcome from "./Welcome";
import App from "./App";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Primary", () => (
    <Button onPress={() => alert("Button Pressed")} type="primary">Button</Button>
  ))
  .add("Secondary", () => (
    <Button onPress={() => alert("Button Pressed")} type="secondary">Button</Button>
  ))
  .add("Disabled", () => (
    <Button onPress={() => alert("Button Pressed")} type="disabled">Button</Button>
  ))
  ;

storiesOf("Text Field", module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add("Active", () => (
  // <Button onPress={() => alert("Button Pressed")} type="disabled">Button</Button>
  <TextField/>
))
.add("Inactive", () => (
  // <Button onPress={() => alert("Button Pressed")} type="disabled">Button</Button>
  <TextField label="Inactive" disabled/>
));

storiesOf("App", module).add("Home", () => <App />);
