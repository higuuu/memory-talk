/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { TalkBoradThread } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardHomeTalk from "./CardHomeTalk";
import { Collection } from "@aws-amplify/ui-react";
export default function CardHomeTalkCollection(props) {
  const {
    cardTitle,
    items: itemsProp,
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: TalkBoradThread,
        }).items;
  return (
    <Collection
      type="list"
      justifyContent="stretch"
      direction="column"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardHomeTalk
          width="auto"
          margin="0 0 1rem 0"
          cardTitle={item}
          height="auto"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardHomeTalk[0]")}
        ></CardHomeTalk>
      )}
    </Collection>
  );
}
