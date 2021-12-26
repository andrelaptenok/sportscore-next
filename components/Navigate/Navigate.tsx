import { useState } from "react";
import { Tabs, Radio } from "antd";
import { NavigateStyle } from "./styleNavigate";
import ContentAll from "../Content/ContentAll/ContentAll";

const { TabPane } = Tabs;

const Navigate = () => {
  return (
    <NavigateStyle>
      <Tabs defaultActiveKey="1" tabPosition="top" style={{ height: 220 }}>
        {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
          <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
            <ContentAll data={i} />
          </TabPane>
        ))}
      </Tabs>
    </NavigateStyle>
  );
};

export default Navigate;
