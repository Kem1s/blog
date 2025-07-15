<template><div><h3 id="_1、vue3的composition-api-和-vue2的-options-api有什么区别" tabindex="-1"><a class="header-anchor" href="#_1、vue3的composition-api-和-vue2的-options-api有什么区别"><span>1、Vue3的Composition Api 和 Vue2的 Options Api有什么区别？</span></a></h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>Vue2</th>
<th>Vue3</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td><strong>Composition Api（组合式）</strong></td>
<td><strong>Options Api（选项式）</strong></td>
</tr>
<tr>
<td><strong>逻辑组织</strong></td>
<td>自由度更高，数据和方法可以整合到一起，不用在<code v-pre>data</code>、<code v-pre>methods</code>之间来回切换</td>
<td>自由度更差，逻辑太分散，大型组件修改起来困难</td>
</tr>
<tr>
<td><strong>TS支持度</strong></td>
<td>完全支持</td>
<td>支持有限</td>
</tr>
<tr>
<td><strong>响应式数据</strong></td>
<td>通过<code v-pre>Object.defineProperty</code>，无法检测对象属性增减或数组索引变化</td>
<td>通过<code v-pre>Proxy</code> 代理，支持更全面的响应式操作</td>
</tr>
<tr>
<td><strong>逻辑复用</strong></td>
<td>需要用minxs,存在命名冲突、来源不透明等问题</td>
<td>通过自定义组合函数封装，不存在命名冲突</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2、vue3的设计目标是什么-做了哪些优化" tabindex="-1"><a class="header-anchor" href="#_2、vue3的设计目标是什么-做了哪些优化"><span>2、Vue3的设计目标是什么，做了哪些优化？</span></a></h3>
<ol>
<li><strong>设计目标</strong>：主要为了解决以下问题</li>
</ol>
<ul>
<li>随着功能增长，逻辑复杂的组件代码难以维护</li>
<li>缺少可靠的复用逻辑机制</li>
<li>类型推断不够友好</li>
</ul>
<ol start="2">
<li><strong>优化</strong></li>
</ol>
<ul>
<li>去掉不常用api，体积更小</li>
<li>优化diff算法和响应式实现原理，响应更快</li>
<li>TypeScript支持度更高</li>
<li>可维护性和自由度更高</li>
</ul>
<hr>
<h3 id="_3、vue3性能提升主要是从哪几个方面体现" tabindex="-1"><a class="header-anchor" href="#_3、vue3性能提升主要是从哪几个方面体现"><span>3、Vue3性能提升主要是从哪几个方面体现</span></a></h3>
<ol>
<li><strong>diff算法优化</strong>：新增静态节点标记，数据变化时，只对比动态节点。</li>
<li><strong>静态提升</strong>：静态节点只会被创建一次，数据变化时，免去了重新创建操作</li>
<li><strong>事件监听缓存</strong>：同上，数据变化时，免去重新绑定事件操作</li>
<li><strong>源码体积减小</strong>：去掉了不常用的api，且所有函数都支持Tree shanking，没用到的模块不会被打包</li>
<li><strong>响应式优化</strong>：用<code v-pre>proxy</code>重写响应式系统，对数据监听不需要深度遍历，可以监听动态添加的属性，可以监听数组索引和length，可以监听删除属性等</li>
</ol>
<hr>
<h3 id="_4、为什么要用-proxy-代替-defineproperty" tabindex="-1"><a class="header-anchor" href="#_4、为什么要用-proxy-代替-defineproperty"><span>4、为什么要用 Proxy 代替 defineProperty ？</span></a></h3>
<ul>
<li><strong>defineProperty</strong>：是Object的方法，一次只能劫持一个属性，多个属性劫持需要遍历。如果是嵌套对象，则需要递归遍历。性能开销较大，而且对对象新增属性、数组通过索引修改数据、数组修改length无法监听到。虽然vue2对数组的<code v-pre>push</code>、<code v-pre>pop</code>、<code v-pre>shift</code>、<code v-pre>unshift</code>、<code v-pre>splice</code>、<code v-pre>sort</code>、<code v-pre>reverse</code> 7个方法进行重写，但是其他数组api修改数组，依然无法监听到。</li>
<li><strong>Proxy</strong>：<code v-pre>Proxy</code>是对整个对象进行代理，而且是惰性的，只有当访问对象属性时才会触发，性能会更好。而且支持13种拦截方式，无需向vue2一样重写数组方法。</li>
</ul>
<hr>
<h3 id="_5、说说vue3的tree-shaking特性" tabindex="-1"><a class="header-anchor" href="#_5、说说vue3的tree-shaking特性"><span>5、说说Vue3的Tree Shaking特性</span></a></h3>
<ul>
<li><code v-pre>Tree Shaking</code>是一种通过清除多余代码，实现减少打包体积的技术。</li>
<li>vue3中所有的api都是模块化的，用什么api就引入什么api，没有用到的都不会打包。</li>
</ul>
<hr>
<h3 id="_6、说一下vue3新特性" tabindex="-1"><a class="header-anchor" href="#_6、说一下vue3新特性"><span>6、说一下Vue3新特性</span></a></h3>
<ol>
<li><strong>新增组合api</strong>： <code v-pre>setup</code>、<code v-pre>ref</code>、<code v-pre>reactive</code>、<code v-pre>toRefs</code>、<code v-pre>toRef</code>等</li>
<li><strong>生命周期变化</strong>：</li>
</ol>
<ul>
<li><strong>创建实例</strong> <code v-pre>setup</code>取代<code v-pre>beforeCreate</code>、<code v-pre>created</code>；</li>
<li><strong>挂载实例</strong> <code v-pre>onBeforeMount</code>、<code v-pre>onMounted</code></li>
<li><strong>更新实例</strong> <code v-pre>onBeforeUpdate</code>、<code v-pre>onUpdate</code></li>
<li><strong>销毁实例</strong> <code v-pre>onBeforeUnmount</code>、<code v-pre>Onmounted</code></li>
</ul>
<ol start="3">
<li><strong>响应式原理变化</strong>：<code v-pre>proxy</code>代理配合<code v-pre>Reflect</code>反射取代<code v-pre>Object.defindProperty</code></li>
<li><strong>更好的TS支持</strong>: 源码是TS写的</li>
<li><strong>新增内置组件</strong>：<code v-pre>Fragment</code>(片段)、<code v-pre>Teleport</code>(瞬移)、<code v-pre>Suspense</code>(不确定)</li>
<li><strong>新的脚手架</strong>: vite (虽然我还在用vue-cli5)</li>
<li><strong>多节点</strong>：一个组件可以设置多个根节点</li>
<li><strong>算法优化</strong>：重新diff算法、支持tree-shaking，渲染速度更快、打包体积更小</li>
<li><strong>取出冗余</strong>：去掉了过滤器filter，以及一些不常用的api</li>
</ol>
<hr>
<h3 id="_7、说一下reactive和ref的区别" tabindex="-1"><a class="header-anchor" href="#_7、说一下reactive和ref的区别"><span>7、说一下reactive和ref的区别？</span></a></h3>
<p><strong>1. 数据类型支持</strong></p>
<ul>
<li><code v-pre>ref</code>：支持所有类型数据（基础类型和引用类型）</li>
<li><code v-pre>reactive</code>：仅支持数组和对象<br>
<strong>2. 访问和修改</strong></li>
<li><code v-pre>ref</code>：需通过<code v-pre>.value</code>访问和修改（模板中自动解构，不需要<code v-pre>.value</code>）</li>
<li><code v-pre>reactive</code>：无需通过<code v-pre>.value</code>访问，直接可以访问和修改，（但是需要注意，直接替换会失去响应式，如果部分替换可以用<code v-pre>Object.assign</code>）<br>
<strong>3. 响应式原理</strong></li>
<li><code v-pre>ref</code>：通过<code v-pre>Object.defindproperty</code>实现，通过<code v-pre>getter/setter</code>拦截<code v-pre>.value</code>操作。基本类型被包装成<code v-pre>RefImpl</code>对象实现响应式</li>
<li><code v-pre>reactive</code>：通过<code v-pre>Proxy</code>代理整个对象，深度拦截属性的读、写、删等操作（支持13种拦截类型），嵌套对象自动递归代理。<br>
<strong>3. 深度响应式行为</strong></li>
<li><code v-pre>ref</code>：若是对象类型，则自动调用<code v-pre>reactive</code>转为深度响应式</li>
<li><code v-pre>reactive</code>：默认深度追踪所有嵌套属性</li>
</ul>
</div></template>


