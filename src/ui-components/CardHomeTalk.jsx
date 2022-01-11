/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardHomeTalk(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="20px"
        direction="row"
        width="289px"
        alignItems="flex-start"
        shrink="0"
        height="100px"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="8px"
        padding="0px 23px 0px 23px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <View
          width="60px"
          height="100px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].View[0]")}
        >
          <Image
            width="60px"
            height="60px"
            position="absolute"
            left="0px"
            top="16px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[0].Image[0]")}
          ></Image>
        </View>
        <View
          width="185px"
          height="100px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].View[1]")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="195px"
            alignItems="center"
            position="absolute"
            left="0px"
            top="0px"
            padding="16px 0px 0px 8px"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[1].Flex[0]")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="18px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="21.09375px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Title"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].View[1].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="195px"
            height="58px"
            alignItems="flex-start"
            position="absolute"
            left="0px"
            top="42px"
            padding="0px 0px 0px 8px"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[1].Flex[1]")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="14.0625px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="text"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].View[1].Flex[1].Text[0]"
              )}
            ></Text>
          </Flex>
        </View>
      </Flex>
    </Flex>
  );
}
