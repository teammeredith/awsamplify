/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Homecard(props) {
  const { home, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <Flex
      gap="8.152711868286133px"
      direction="column"
      width="171px"
      height="204px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="8.152711868286133px 8.152711868286133px 10px 8.152711868286133px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Homecard")}
    >
      <Image
        height="116.5px"
        grow="1"
        basis="116.49752807617188px"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="13.044339179992676px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        lineHeight="16.305423736572266px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.address}
        {...getOverrideProps(overrides, "Description 123")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Book now"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
