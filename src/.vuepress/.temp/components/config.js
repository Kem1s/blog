import { hasGlobalComponent } from "D:/code/test_code/vuepress_vue3/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_008bee17e3ecb1b39ca4958c4044f293/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/code/test_code/vuepress_vue3/node_modules/.pnpm/vuepress-plugin-components@_d0a70791ff08054f9674e34253998220/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/code/test_code/vuepress_vue3/node_modules/.pnpm/vuepress-plugin-components@_d0a70791ff08054f9674e34253998220/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/code/test_code/vuepress_vue3/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_008bee17e3ecb1b39ca4958c4044f293/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
