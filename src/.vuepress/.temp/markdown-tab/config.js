import { CodeTabs } from "D:/code/test_code/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_c6ec28fd247fb524af3f6cecb218685d/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/code/test_code/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_c6ec28fd247fb524af3f6cecb218685d/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/code/test_code/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_c6ec28fd247fb524af3f6cecb218685d/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
