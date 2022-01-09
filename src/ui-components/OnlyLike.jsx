/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function OnlyLike(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="80px"
      direction="row"
      width="608px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <View
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].View[0]")}
        >
          <Icon
            width="24px"
            height="24px"
            pathData=""
            viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
            position="absolute"
            left="0px"
            top="0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[0].Icon[0]")}
          ></Icon>
          <Icon
            width="20px"
            height="18.350000381469727px"
            pathData="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36L10.94 4.36C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 20,
              height: 18.349998474121094,
            }}
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            position="absolute"
            left="2px"
            top="3px"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[0].Icon[1]")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.010000000000000009px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="99"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
