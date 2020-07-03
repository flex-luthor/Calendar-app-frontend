import React, {useState} from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../../components/Button";
import TextField from "../../components/TextField";
import BannerImage from "../../components/BannerImage";
import CheckBox from '../../components/CheckBox'

import CenterView from "./CenterView";
// import Welcome from "./Welcome";
import App from "./App";
import placeholder from "../../assets/images/placeholder.png";

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
  .add("Sign Up", () => (
    <Button onPress={() => alert("Button Pressed")} type="white" icon="google">Join with google</Button>
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

storiesOf("Image", module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add("Banner", () => (
  <BannerImage source={placeholder} />
))

storiesOf("Checkbox", module)
.addDecorator((getStory => <CenterView>{getStory()}</CenterView>))
.add("Default", () => (
  <CheckBox state={true}/>
))

storiesOf("App", module).add("Home", () => <App />);
