// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";
import { Type } from "../Badge/index.d.ts";

declare module "@kiwicom/orbit-components/lib/NotificationBadge";

export interface Props extends Common.Global {
  readonly children?: React.ReactNode;
  readonly type?: Type;
  readonly icon?: React.ReactNode;
  readonly ariaLabel?: string;
}

const NotificationBadge: React.FunctionComponent<Props>;
export { NotificationBadge, NotificationBadge as default };