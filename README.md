# rtabs

A simple and minimal tab component for react.

![rtabs demo](https://i.imgur.com/jTJL422.png)

# Quickstart

To start using `rtabs`

**1. Install**

```bash
npm install rtabs
yarn add rtabs
```

**2. Import necessary components from `rtabs`**

```js
import { Tabs, Tab, TabTitle, TabContent } from "rtabs";
```

**3. Add `Tab` components inside `Tabs`**

```js
import React from "react";
import { Tabs, Tab, TabTitle, TabContent } from "rtabs";

function ReactTabs() {
  return (
    <div>
      <Tabs>
        <Tab>
          <TabTitle>Tab Title 01</TabTitle>
          <TabContent>Tab Content 01</TabContent>
        </Tab>
        <Tab>
          <TabTitle>Tab Title 02</TabTitle>
          <TabContent>Tab Content 02</TabContent>
        </Tab>
        <Tab>
          <TabTitle>Tab Title 03</TabTitle>
          <TabContent>Tab Content 03</TabContent>
        </Tab>
        <Tab>
          <TabTitle>Tab Title 04</TabTitle>
          <TabContent>Tab Content 04</TabContent>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ReactTabs;
```

# Configurations

A configuratio object can be passed to `<Tabs/>` component.

```js
<Tabs config={{}}>
  <Tab>
    <TabTitle>Tab Title 01</TabTitle>
    <TabContent>Tab Content 01</TabContent>
  </Tab>
</Tabs>
```

**Properties**

| Property    | Description                | Type   | Accepted Values                              | Default      |
| ----------- | -------------------------- | ------ | -------------------------------------------- | ------------ |
| layout      | Layout of tabs             | String | `horizontal`,`vertical`                      | `horizontal` |
| alignTitles | Alignment of Tab Titles    | String | `left`,`middle`,`right`                      | `left`       |
| activeColor | Active tab underline color | String | `black` , `#eee` (Any hex/rgb or rgba value) | `black`      |
