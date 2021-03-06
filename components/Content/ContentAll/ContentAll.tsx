import { Tabs } from "antd";

interface PropsContentAll {
  data: any;
}

const { TabPane } = Tabs;

const ContentAll = ({ data }: PropsContentAll) => {
  return (
    <div>
      <Tabs tabPosition="left">
        <TabPane tab="Tab 1" key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ContentAll;
