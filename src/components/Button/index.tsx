import React from "react";
import { Text, TouchableOpacity, ColorValue, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps &{
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
}

export const Button = (props: Props) => {
  const {title, color, backgroundColor, ...rest} = props;

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}]}
      {...rest}
    >
      <Text style={[styles.title, { color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}