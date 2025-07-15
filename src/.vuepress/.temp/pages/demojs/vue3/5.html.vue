<template><div><h1 id="vue-生命周期详解" tabindex="-1"><a class="header-anchor" href="#vue-生命周期详解"><span>Vue 生命周期详解</span></a></h1>
<h2 id="_1-vue-2-与-vue-3-生命周期对比" tabindex="-1"><a class="header-anchor" href="#_1-vue-2-与-vue-3-生命周期对比"><span>1. Vue 2 与 Vue 3 生命周期对比</span></a></h2>
<table>
<thead>
<tr>
<th>Vue 2.x</th>
<th>Vue 3.x</th>
<th>执行时机</th>
<th>使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>beforeCreate</td>
<td>setup()</td>
<td>组件实例被创建之前</td>
<td>无法访问组件实例，较少使用</td>
</tr>
<tr>
<td>created</td>
<td>setup()</td>
<td>组件实例创建完成</td>
<td>可以访问响应式数据，适合异步数据获取</td>
</tr>
<tr>
<td>beforeMount</td>
<td>onBeforeMount</td>
<td>组件挂载到 DOM 之前</td>
<td>访问不到 DOM，适合最后的数据准备</td>
</tr>
<tr>
<td>mounted</td>
<td>onMounted</td>
<td>组件挂载到 DOM 之后</td>
<td>可以访问 DOM，初始化第三方库，添加事件监听等</td>
</tr>
<tr>
<td>beforeUpdate</td>
<td>onBeforeUpdate</td>
<td>组件更新之前</td>
<td>可以获取更新前的 DOM 状态</td>
</tr>
<tr>
<td>updated</td>
<td>onUpdated</td>
<td>组件更新之后</td>
<td>可以访问更新后的 DOM</td>
</tr>
<tr>
<td>beforeDestroy</td>
<td>onBeforeUnmount</td>
<td>组件卸载之前</td>
<td>清理定时器、事件监听器等</td>
</tr>
<tr>
<td>destroyed</td>
<td>onUnmounted</td>
<td>组件卸载之后</td>
<td>组件完全销毁后的清理工作</td>
</tr>
</tbody>
</table>
<h2 id="_2-vue-3-生命周期示例" tabindex="-1"><a class="header-anchor" href="#_2-vue-3-生命周期示例"><span>2. Vue 3 生命周期示例</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Vue 3 生命周期示例&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">import </span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  onBeforeMount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  onMounted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  onBeforeUpdate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  onUpdated</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  onBeforeUnmount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  onUnmounted</span></span>
<span class="line"><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> from "vue"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">export default </span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 在组件被挂载之前调用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    onBeforeMount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#E5C07B">      console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'1. onBeforeMount: 组件挂载前'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // 适合进行数据的最后准备</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 组件挂载完成后调用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    onMounted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#E5C07B">      console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'2. onMounted: DOM可用'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // 适合进行：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // - DOM操作</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // - API调用</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // - 第三方库初始化</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 组件更新前调用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    onBeforeUpdate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#E5C07B">      console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'3. onBeforeUpdate: 可以获取更新前的DOM状态'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // 适合在更新前访问现有的DOM</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 组件更新后调用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    onUpdated</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#E5C07B">      console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'4. onUpdated: 可以访问更新后的DOM'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // 注意：避免在此处更改状态，可能导致无限循环</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 组件卸载前调用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    onBeforeUnmount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#E5C07B">      console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'5. onBeforeUnmount: 组件卸载前清理'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // 适合清理：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // - 定时器</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // - 事件监听</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // - 订阅</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 组件卸载后调用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    onUnmounted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#E5C07B">      console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'6. onUnmounted: 组件已完全卸载'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-vue-2-生命周期示例" tabindex="-1"><a class="header-anchor" href="#_3-vue-2-生命周期示例"><span>3. Vue 2 生命周期示例</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Vue 2 生命周期示例&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">export default </span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    return {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">      message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Hello Vue 2'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  beforeCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'1. beforeCreate: 实例创建前'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 无法访问 data 和 methods</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  created() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'2. created: 实例创建后'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 可以访问 data 和 methods</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 适合进行：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // - API调用</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // - 数据初始化</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  beforeMount() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'3. beforeMount: DOM挂载前'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // DOM还未挂载，$el不可用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  mounted() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'4. mounted: DOM挂载完成'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 适合进行：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // - DOM操作</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // - 第三方库初始化</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  beforeUpdate() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'5. beforeUpdate: 数据更新前'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 可以访问更新前的DOM</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  updated() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'6. updated: 数据更新后'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // DOM已更新</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  beforeDestroy() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'7. beforeDestroy: 实例销毁前'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 适合清理：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // - 定时器</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // - 事件监听</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // - eventBus</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  destroyed() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    console.log(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'8. destroyed: 实例已销毁'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-生命周期最佳实践" tabindex="-1"><a class="header-anchor" href="#_4-生命周期最佳实践"><span>4. 生命周期最佳实践</span></a></h2>
<ol>
<li>
<p><strong>创建阶段</strong>：</p>
<ul>
<li>Vue 3 中优先使用 <code v-pre>setup()</code> 代替 <code v-pre>beforeCreate</code> 和 <code v-pre>created</code></li>
<li>异步数据获取推荐在 <code v-pre>created</code>(Vue 2) 或 <code v-pre>setup</code>(Vue 3) 中进行</li>
</ul>
</li>
<li>
<p><strong>挂载阶段</strong>：</p>
<ul>
<li>DOM 操作必须在 <code v-pre>mounted</code> 之后进行</li>
<li>避免在 <code v-pre>mounted</code> 中直接修改数据，可能触发额外的渲染</li>
</ul>
</li>
<li>
<p><strong>更新阶段</strong>：</p>
<ul>
<li><code v-pre>updated</code> 钩子中要谨慎更改状态，防止死循环</li>
<li>需要访问更新前 DOM 状态时使用 <code v-pre>beforeUpdate</code></li>
</ul>
</li>
<li>
<p><strong>卸载阶段</strong>：</p>
<ul>
<li>必须在 <code v-pre>beforeDestroy/onBeforeUnmount</code> 中清理：
<ul>
<li>定时器</li>
<li>事件监听器</li>
<li>订阅</li>
<li>第三方库实例</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>性能优化</strong>：</p>
<ul>
<li>避免在 <code v-pre>mounted</code> 中进行大量计算</li>
<li>合理使用 <code v-pre>keep-alive</code> 缓存组件状态</li>
<li>及时清理组件资源避免内存泄漏</li>
</ul>
</li>
</ol>
</div></template>


