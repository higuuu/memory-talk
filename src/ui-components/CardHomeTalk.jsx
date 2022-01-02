/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function CardHomeTalk(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 23px 0px 23px"
      backgroundColor="rgba(255,255,255,1)"
      overflow="hidden"
      alignItems="flex-start"
      borderRadius="8px"
      gap="20px"
      width="289px"
      position="relative"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        overflow="hidden"
        shrink="0"
        width="60px"
        position="relative"
        height="100px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      >
        <View
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
          top="16px"
          borderRadius="8px"
          left="0px"
          width="60px"
          position="absolute"
          height="60px"
          {...getOverrideProps(overrides, "Flex.View[0].View[0]")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        overflow="hidden"
        shrink="0"
        width="185px"
        position="relative"
        height="100px"
        {...getOverrideProps(overrides, "Flex.View[1]")}
      >
        <Flex
          padding="16px 0px 0px 8px"
          alignItems="center"
          top="0px"
          left="0px"
          gap="10px"
          width="195px"
          position="absolute"
          direction="row"
          {...getOverrideProps(overrides, "Flex.View[1].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(0,0,0,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Roboto"
            fontSize="18px"
            lineHeight="21.09375px"
            position="relative"
            fontWeight="700"
            direction="column"
            children="Title"
            {...getOverrideProps(overrides, "Flex.View[1].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 8px"
          alignItems="flex-start"
          top="42px"
          left="0px"
          gap="8px"
          width="195px"
          position="absolute"
          direction="row"
          height="58px"
          {...getOverrideProps(overrides, "Flex.View[1].Flex[1]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(0,0,0,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Roboto"
            fontSize="12px"
            lineHeight="14.0625px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="text"
            {...getOverrideProps(overrides, "Flex.View[1].Flex[1].Text[0]")}
          ></Text>
        </Flex>
      </View>
    </Flex>
  );
}
