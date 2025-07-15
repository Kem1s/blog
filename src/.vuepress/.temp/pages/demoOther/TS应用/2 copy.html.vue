<template><div><h1 id="vue3-ts-项目文件说明" tabindex="-1"><a class="header-anchor" href="#vue3-ts-项目文件说明"><span>vue3+ts 项目文件说明</span></a></h1>
<h3 id="项目根目录结构" tabindex="-1"><a class="header-anchor" href="#项目根目录结构"><span>项目根目录结构</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>vue3TsDemo</span></span>
<span class="line"><span>├── .vscode/                  # VS Code 编辑器配置</span></span>
<span class="line"><span>├───|   settings.json        # VS Code 工作区设置文件，用于配置编辑器行为、插件设置等</span></span>
<span class="line"><span>│   └── extensions.json      # 推荐的 VS Code 扩展</span></span>
<span class="line"><span>├── .gitattributes           # Git 属性配置文件，用于设置文件的行尾、文件对比、合并策略等</span></span>
<span class="line"><span>├── .gitignore               # Git 忽略文件配置</span></span>
<span class="line"><span>├── README.md                # 项目说明文档</span></span>
<span class="line"><span>├── components.d.ts         # 组件的类型声明文件（自动生成）</span></span>
<span class="line"><span>├── auto-imports.d.ts       # 自动导入的类型声明文件（自动生成）</span></span>
<span class="line"><span>├── env.d.ts                 # 环境变量的 TypeScript 类型声明</span></span>
<span class="line"><span>├── package.json             # 项目依赖和脚本配置</span></span>
<span class="line"><span>├──.prettierrc.json         # 代码美化设置</span></span>
<span class="line"><span>├── tsconfig.json           # TypeScript 主配置文件</span></span>
<span class="line"><span>├── tsconfig.app.json       # 应用程序的 TypeScript 配置</span></span>
<span class="line"><span>├── tsconfig.node.json      # Node.js 相关的 TypeScript 配置</span></span>
<span class="line"><span>├── vite.config.ts          # Vite 构建工具配置文件</span></span>
<span class="line"><span>└── yarn.lock               # Yarn 依赖版本锁定文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件说明" tabindex="-1"><a class="header-anchor" href="#文件说明"><span>文件说明</span></a></h3>
<ol>
<li>
<p><strong>配置文件</strong></p>
<ul>
<li><code v-pre>vite.config.ts</code>: Vite 构建工具的配置文件，包含插件配置、构建选项等</li>
<li><code v-pre>tsconfig.json</code>: TypeScript 的根配置文件，通常用于引用其他具体配置</li>
<li><code v-pre>tsconfig.app.json</code>: 应用代码的 TypeScript 配置，包含路径别名等</li>
<li><code v-pre>tsconfig.node.json</code>: Node.js 环境的 TypeScript 配置</li>
<li><code v-pre>package.json</code>: 项目依赖、脚本和基本信息配置</li>
</ul>
</li>
<li>
<p><strong>类型声明文件</strong></p>
<ul>
<li><code v-pre>env.d.ts</code>: 环境变量和特殊模块的类型声明</li>
<li><code v-pre>components.d.ts</code>: 自动生成的组件类型声明</li>
<li><code v-pre>auto-imports.d.ts</code>: 自动导入功能的类型声明</li>
</ul>
</li>
<li>
<p><strong>编辑器配置</strong></p>
<ul>
<li><code v-pre>.vscode/extensions.json</code>: 推荐的 VS Code 扩展列表</li>
</ul>
</li>
<li>
<p><strong>其他文件</strong></p>
<ul>
<li><code v-pre>.gitignore</code>: Git 版本控制忽略规则</li>
<li><code v-pre>README.md</code>: 项目说明文档</li>
<li><code v-pre>yarn.lock</code>: 依赖版本锁定文件（如果使用 npm，则为 package-lock.json）</li>
</ul>
</li>
</ol>
<h3 id="重要配置文件详解" tabindex="-1"><a class="header-anchor" href="#重要配置文件详解"><span>重要配置文件详解</span></a></h3>
<h3 id="typescript-配置文件详解" tabindex="-1"><a class="header-anchor" href="#typescript-配置文件详解"><span>TypeScript 配置文件详解</span></a></h3>
<h4 id="_1-tsconfig-json-根配置文件" tabindex="-1"><a class="header-anchor" href="#_1-tsconfig-json-根配置文件"><span>1. tsconfig.json（根配置文件）</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "files"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "references"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./tsconfig.node.json"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            "path"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./tsconfig.app.json"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是项目的根配置文件，主要用于：</p>
<ul>
<li>引用其他具体的 TypeScript 配置文件</li>
<li>使用项目引用（Project References）功能来分割不同环境的配置</li>
<li>不包含具体配置，只作为配置入口</li>
</ul>
<h4 id="_2-tsconfig-app-json-应用代码配置" tabindex="-1"><a class="header-anchor" href="#_2-tsconfig-app-json-应用代码配置"><span>2. tsconfig.app.json（应用代码配置）</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "extends"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"@vue/tsconfig/tsconfig.dom.json"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "include"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"env.d.ts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"src/**/*"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"src/**/*.vue"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "exclude"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"src/**/__tests__/*"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "compilerOptions"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "composite"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "baseUrl"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"."</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "paths"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            "@/*"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./src/*"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "module"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ESNext"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "moduleResolution"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bundler"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "strict"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "jsx"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"preserve"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "jsxImportSource"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vue"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "types"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"node"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vite/client"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "target"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ESNext"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "isolatedModules"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "esModuleInterop"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "lib"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ESNext"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"DOM"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"DOM.Iterable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "skipLibCheck"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "noEmit"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置说明：</p>
<ul>
<li><code v-pre>extends</code>: 继承 Vue 官方的 DOM 环境配置</li>
<li><code v-pre>include</code>: 指定需要编译的文件范围</li>
<li><code v-pre>exclude</code>: 排除测试文件</li>
<li><code v-pre>compilerOptions</code>:
<ul>
<li><code v-pre>composite</code>: 启用项目引用功能</li>
<li><code v-pre>baseUrl</code> 和 <code v-pre>paths</code>: 配置路径别名</li>
<li><code v-pre>module</code> 和 <code v-pre>moduleResolution</code>: 使用最新的模块系统和解析策略</li>
<li><code v-pre>strict</code>: 启用严格的类型检查</li>
<li><code v-pre>jsx</code> 和 <code v-pre>jsxImportSource</code>: Vue 3 的 JSX 支持</li>
<li><code v-pre>types</code>: 包含 Node.js 和 Vite 的类型定义</li>
<li><code v-pre>target</code>: 编译目标为最新 ECMAScript</li>
<li><code v-pre>isolatedModules</code>: 确保文件可以独立编译</li>
<li><code v-pre>lib</code>: 包含运行时需要的库定义</li>
</ul>
</li>
</ul>
<h4 id="_3-tsconfig-node-json-node-js-环境配置" tabindex="-1"><a class="header-anchor" href="#_3-tsconfig-node-json-node-js-环境配置"><span>3. tsconfig.node.json（Node.js 环境配置）</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "extends"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"@tsconfig/node18/tsconfig.json"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "include"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vite.config.*"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vitest.config.*"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"cypress.config.*"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"playwright.config.*"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "compilerOptions"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "composite"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "module"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ESNext"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "moduleResolution"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bundler"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "types"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"node"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "strict"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "noEmit"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "allowSyntheticDefaultImports"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置说明：</p>
<ul>
<li><code v-pre>extends</code>: 继承 Node.js 18 的标准配置</li>
<li><code v-pre>include</code>: 包含构建工具的配置文件</li>
<li><code v-pre>compilerOptions</code>:
<ul>
<li><code v-pre>composite</code>: 启用项目引用</li>
<li><code v-pre>module</code> 和 <code v-pre>moduleResolution</code>: 使用 ESM 模块系统</li>
<li><code v-pre>types</code>: 只包含 Node.js 类型定义</li>
<li><code v-pre>strict</code>: 启用严格模式</li>
<li><code v-pre>noEmit</code>: 不输出编译文件</li>
<li><code v-pre>allowSyntheticDefaultImports</code>: 允许导入没有默认导出的模块</li>
</ul>
</li>
</ul>
<h3 id="实际开发建议" tabindex="-1"><a class="header-anchor" href="#实际开发建议"><span>实际开发建议</span></a></h3>
<ol>
<li>
<p><strong>路径别名配置</strong>：</p>
<ul>
<li>在 <code v-pre>tsconfig.app.json</code> 中配置 <code v-pre>@</code> 别名指向 <code v-pre>src</code> 目录</li>
<li>确保 Vite 配置中也有相应的别名设置</li>
</ul>
</li>
<li>
<p><strong>类型检查严格度</strong>：</p>
<ul>
<li>建议开启 <code v-pre>strict: true</code></li>
<li>新项目建议开启 <code v-pre>noImplicitAny: true</code></li>
<li>迁移项目可以逐步开启严格检查</li>
</ul>
</li>
<li>
<p><strong>模块解析策略</strong>：</p>
<ul>
<li>使用 <code v-pre>&quot;moduleResolution&quot;: &quot;bundler&quot;</code> 以支持 Vite 的导入特性</li>
<li>确保 <code v-pre>types</code> 包含项目需要的类型定义</li>
</ul>
</li>
<li>
<p><strong>性能优化</strong>：</p>
<ul>
<li>使用 <code v-pre>skipLibCheck: true</code> 加快类型检查</li>
<li>合理使用 <code v-pre>include</code> 和 <code v-pre>exclude</code> 控制检查范围</li>
</ul>
</li>
</ol>
</div></template>


