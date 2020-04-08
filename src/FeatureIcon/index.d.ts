// @flow
/*
  DOCUMENTATION: https://orbit.kiwi/components/featureicon/
*/
import * as Common from "../common/common.d.ts";

type Name = "TicketFlexi" | "TicketSaver" | "TicketStandard";

export interface Props extends Common.Global {
  readonly name: Name;
}

const FeatureIcon: React.FunctionComponent<Props>;
export { FeatureIcon, FeatureIcon as default };
