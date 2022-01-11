/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PostText(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="325px"
      height="160px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="325px"
        height="121px"
        overflow="hidden"
        position="absolute"
        left="0px"
        top="39px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <View
          width="288px"
          height="114px"
          position="absolute"
          left="19px"
          top="3px"
          border="2px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
          fontStyle="italic"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="254px"
          height="30px"
          position="absolute"
          left="31px"
          top="14px"
          padding="0px 0px 0px 0px"
          children="ここにテキストを入力"
          {...getOverrideProps(overrides, "View.View[0].Text[0]")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(32.67630100250244,39.74626623094082,64.81249898672104,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="246px"
        height="39px"
        position="absolute"
        left="24px"
        top="0px"
        padding="0px 0px 0px 0px"
        children="Label"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
