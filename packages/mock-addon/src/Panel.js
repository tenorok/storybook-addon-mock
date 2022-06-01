import React from "react";
import { useAddonState, useChannel, useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENTS } from "./utils/constants";
import { PanelContent } from "./components/PanelContent";

export const Panel = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setState] = useAddonState(ADDON_ID, {
    danger: [],
    warning: [],
  }); // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  console.log('hello');
  // const paramData = useParameter(PARAM_KEY, "");
  const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => setState(newResults),
  });
  return (
    <AddonPanel {...props}>
      <PanelContent
        results={results}
        fetchData={() => {
          emit(EVENTS.REQUEST);
        }}
        clearData={() => {
          emit(EVENTS.CLEAR);
        }}
      />
    </AddonPanel>
  );
};
