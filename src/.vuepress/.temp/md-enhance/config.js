import CodeDemo from "D:/code/test_code/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@_b03275a24b669b3ec9c511cd55fdef16/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/code/test_code/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@_b03275a24b669b3ec9c511cd55fdef16/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
