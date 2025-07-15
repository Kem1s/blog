<template><div><h1 id="vue3-script-setup-语法" tabindex="-1"><a class="header-anchor" href="#vue3-script-setup-语法"><span>vue3 script setup 语法</span></a></h1>
<h2 id="_4-vue3-script-setup-写法" tabindex="-1"><a class="header-anchor" href="#_4-vue3-script-setup-写法"><span>4. vue3 script setup 写法</span></a></h2>
<blockquote>
<p>script setup 是 Vue 4.2 中引入的一个新特性，它提供了一种更简洁的代码组织方式，可以让我们在单文件组件中更方便地使用 Composition API。<br>
这种写法的主要优点是：</p>
</blockquote>
<ul>
<li>不用写 setup 函数,不用写 return 语句。</li>
<li>组件只需要引入不需要注册。</li>
<li>不需要写组件名，自动根据文件名生成 name。</li>
<li>可以更方便的逻辑分块。</li>
</ul>
<h3 id="_4-1-基础用法" tabindex="-1"><a class="header-anchor" href="#_4-1-基础用法"><span>4.1 基础用法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">import </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">reactive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">computed</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> from 'vue'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 无需使用steup函数 */</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const count = ref(0)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const state = reactive(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'张三'</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const fullName = computed(() => state.name + '先生')</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 无需使用return变量 */</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Count: {{ count }}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Full Name: {{ fullName }}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-使用-props、emits、slots、expose-等" tabindex="-1"><a class="header-anchor" href="#_4-2-使用-props、emits、slots、expose-等"><span>4.2 使用 props、emits、slots、expose 等</span></a></h3>
<p>需要注意的是，如果要使用 props、emits、slots、Expose 等选项，仍然需要使用 Options API 的写法。 defineProps, defineEmits, defineSlots, defineExpose 在 script setup 中是全局可用的，无需导入。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// import </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> defineProps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">defineEmits</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">defineSlots</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">defineExpose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">h</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> from 'vue'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">import </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> }</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> from 'vue'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// defineProps用于获取父组件传递的属性</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const props = defineProps(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">String</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// defineEmits用于获取父组件传递的事件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const emit = defineEmits(['change'])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// defineSlots用于获取父组件传递的插槽,也可以如下生成插槽</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const slots = defineSlots(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'div'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Default Slot'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const fn = () => </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 导出给父组件用的方法 */</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// defineExpose用于导出给父组件用的方法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">defineExpose(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">   fn</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 导出方法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_4-3-生命周期钩子"><span>4.3 生命周期钩子</span></a></h3>
<p>在 <code v-pre>&lt;script setup&gt;</code> 中可以直接使用以下生命周期钩子，需要从 vue 中导入：</p>
<table>
<thead>
<tr>
<th>生命周期钩子</th>
<th>执行时机</th>
<th>使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>onBeforeMount</code></td>
<td>组件挂载到 DOM 之前</td>
<td>访问不到 DOM，适合最后的数据准备</td>
</tr>
<tr>
<td><code v-pre>onMounted</code></td>
<td>组件挂载到 DOM 后</td>
<td>访问/操作 DOM，调用 API，启动定时器</td>
</tr>
<tr>
<td><code v-pre>onBeforeUpdate</code></td>
<td>组件更新之前</td>
<td>获取更新前的 DOM 状态</td>
</tr>
<tr>
<td><code v-pre>onUpdated</code></td>
<td>组件更新之后</td>
<td>访问更新后的 DOM</td>
</tr>
<tr>
<td><code v-pre>onBeforeUnmount</code></td>
<td>组件卸载之前</td>
<td>清理定时器、事件监听器等</td>
</tr>
<tr>
<td><code v-pre>onUnmounted</code></td>
<td>组件卸载之后</td>
<td>做最终的清理工作</td>
</tr>
<tr>
<td><code v-pre>onActivated</code></td>
<td>keep-alive 组件激活时</td>
<td>重新获取数据，恢复状态</td>
</tr>
<tr>
<td><code v-pre>onDeactivated</code></td>
<td>keep-alive 组件停用时</td>
<td>暂存数据，暂停操作</td>
</tr>
<tr>
<td><code v-pre>onErrorCaptured</code></td>
<td>捕获后代组件错误时</td>
<td>错误处理，日志记录</td>
</tr>
<tr>
<td><code v-pre>onRenderTracked</code></td>
<td>组件渲染时追踪依赖</td>
<td>调试依赖收集（仅开发环境）</td>
</tr>
<tr>
<td><code v-pre>onRenderTriggered</code></td>
<td>组件重新渲染时触发</td>
<td>调试更新触发原因（仅开发环境）</td>
</tr>
</tbody>
</table>
<p>使用示例：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    import </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">onMounted</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> from 'vue' onMounted(() => </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"组件挂载到DOM后"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p>
<ol>
<li>生命周期钩子需要在 <code v-pre>setup</code> 内同步调用</li>
<li>可以在同一个钩子中注册多个回调函数，它们将按照注册顺序依次执行</li>
<li>与 Vue 2 的生命周期对应关系：
<ul>
<li><code v-pre>beforeCreate</code> -&gt; 使用 <code v-pre>setup()</code></li>
<li><code v-pre>created</code> -&gt; 使用 <code v-pre>setup()</code></li>
<li><code v-pre>beforeMount</code> -&gt; <code v-pre>onBeforeMount</code></li>
<li><code v-pre>mounted</code> -&gt; <code v-pre>onMounted</code></li>
<li><code v-pre>beforeUpdate</code> -&gt; <code v-pre>onBeforeUpdate</code></li>
<li><code v-pre>updated</code> -&gt; <code v-pre>onUpdated</code></li>
<li><code v-pre>beforeDestroy</code> -&gt; <code v-pre>onBeforeUnmount</code></li>
<li><code v-pre>destroyed</code> -&gt; <code v-pre>onUnmounted</code></li>
</ul>
</li>
</ol>
<h3 id="_4-4-常用的内置函数和-hooks" tabindex="-1"><a class="header-anchor" href="#_4-4-常用的内置函数和-hooks"><span>4.4 常用的内置函数和 Hooks</span></a></h3>
<p>在 <code v-pre>&lt;script setup&gt;</code> 中，以下是常用的内置函数和 Hooks，需要从 vue 中导入使用：</p>
<table>
<thead>
<tr>
<th>函数/Hook</th>
<th>说明</th>
<th>使用场景</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>watch</code></td>
<td>监听响应式数据变化</td>
<td>数据变化时执行副作用</td>
<td><code v-pre>watch(count, (new, old) =&gt; console.log(new))</code></td>
</tr>
<tr>
<td><code v-pre>watchEffect</code></td>
<td>自动收集依赖并监听</td>
<td>自动追踪响应式依赖</td>
<td><code v-pre>watchEffect(() =&gt; console.log(count.value))</code></td>
</tr>
<tr>
<td><code v-pre>useAttrs</code></td>
<td>访问组件的属性</td>
<td>获取未声明为 props 的属性</td>
<td><code v-pre>const attrs = useAttrs()</code></td>
</tr>
<tr>
<td><code v-pre>useSlots</code></td>
<td>访问组件的插槽</td>
<td>以编程方式访问插槽内容</td>
<td><code v-pre>const slots = useSlots()</code></td>
</tr>
<tr>
<td><code v-pre>h</code></td>
<td>创建虚拟 DOM</td>
<td>手动渲染函数场景</td>
<td><code v-pre>h('div', {}, ['Hello'])</code></td>
</tr>
<tr>
<td><code v-pre>render</code></td>
<td>自定义渲染函数</td>
<td>完全控制组件的渲染逻辑</td>
<td><code v-pre>render(() =&gt; h('div', {}, 'Hello'))</code></td>
</tr>
<tr>
<td><code v-pre>createApp</code></td>
<td>创建应用实例</td>
<td>应用初始化(封装插件)</td>
<td><code v-pre>createApp(App).mount('#app')</code></td>
</tr>
<tr>
<td><code v-pre>nextTick</code></td>
<td>等待下次 DOM 更新</td>
<td>DOM 更新后执行操作</td>
<td><code v-pre>await nextTick()</code></td>
</tr>
<tr>
<td><code v-pre>provide/inject</code></td>
<td>依赖注入</td>
<td>跨组件数据传递</td>
<td><code v-pre>provide('key', value)</code></td>
</tr>
</tbody>
</table>
<p>使用示例：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">import </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  watch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  watchEffect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  useAttrs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  useSlots</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  nextTick</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  provide</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  inject</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> from 'vue'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 1. watch 示例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const count = ref(0)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">watch(count, (newValue, oldValue) => </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`count从</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">oldValue</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">变为</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 2. watchEffect 示例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">watchEffect(() => </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`count当前值为: </span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">count</span><span style="--shiki-light:#50A14F;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 4. useAttrs &#x26; useSlots 示例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const attrs = useAttrs()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const slots = useSlots()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 4. 模板引用示例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const inputRef = ref(null)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 在 onMounted 中访问</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">onMounted(() => </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  inputRef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">focus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 5. provide/inject 示例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">provide('theme', 'dark')</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const theme = inject('theme', 'light') // 第二个参数为默认值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 6. nextTick 示例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const updateDOM = async () => </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">value</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">++</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  await</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> nextTick</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // DOM 已更新</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> ref</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"inputRef"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p>
<ol>
<li>
<p><code v-pre>watch</code> 和 <code v-pre>watchEffect</code> 的区别：</p>
<ul>
<li><code v-pre>watch</code> 需要明确指定要监听的数据源</li>
<li><code v-pre>watchEffect</code> 会自动收集依赖</li>
<li><code v-pre>watch</code> 可以访问到变化前后的值</li>
<li><code v-pre>watchEffect</code> 会立即执行一次</li>
</ul>
</li>
<li>
<p>模板引用 <code v-pre>ref</code> 的使用：</p>
<ul>
<li>在模板中使用 <code v-pre>ref</code> 属性</li>
<li>在 <code v-pre>onMounted</code> 之后才能访问到 DOM</li>
<li>可用于访问子组件的方法和属性</li>
</ul>
</li>
<li>
<p><code v-pre>provide/inject</code> 的使用建议：</p>
<ul>
<li>尽量在应用层级较高的组件中提供数据</li>
<li>考虑使用响应式数据</li>
<li>建议提供默认值</li>
</ul>
</li>
</ol>
<h3 id="_4-5-内置组件" tabindex="-1"><a class="header-anchor" href="#_4-5-内置组件"><span>4.5 内置组件</span></a></h3>
<p>Vue 3 提供了一些内置组件，主要有以下几类：</p>
<table>
<thead>
<tr>
<th>内置组件</th>
<th>说明</th>
<th>使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;component&gt;</code></td>
<td>动态组件</td>
<td>根据条件渲染不同组件</td>
</tr>
<tr>
<td><code v-pre>&lt;transition&gt;</code></td>
<td>单元素/组件的过渡效果</td>
<td>元素进入/离开的动画效果</td>
</tr>
<tr>
<td><code v-pre>&lt;transition-group&gt;</code></td>
<td>多元素/组件的过渡效果</td>
<td>列表项的动画效果</td>
</tr>
<tr>
<td><code v-pre>&lt;keep-alive&gt;</code></td>
<td>缓存组件</td>
<td>保持组件状态，避免重复渲染</td>
</tr>
<tr>
<td><code v-pre>&lt;teleport&gt;</code></td>
<td>内容传送</td>
<td>将内容渲染到指定 DOM 位置，如弹窗</td>
</tr>
</tbody>
</table>
<p>示例：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">transition</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"fade"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> v-if</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"show"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Hello World&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">transition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">transition-group</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"list"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> v-for</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"item in items"</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> :key="item">{{ item }}&#x3C;/div></span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">    &#x3C;/transition-group></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">    &#x3C;keep-alive</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> include</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">=['a',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'b'</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">]></span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">        &#x3C;component</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> :is="currentComponent">&#x3C;/component></span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">    &#x3C;/keep-alive></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">    &#x3C;teleport</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"body"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Teleported content&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">teleport</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-编译器宏-无需导入" tabindex="-1"><a class="header-anchor" href="#_4-6-编译器宏-无需导入"><span>4.6 编译器宏（无需导入）</span></a></h3>
<p>在 <code v-pre>&lt;script setup&gt;</code> 中，以下编译器宏（Compiler Macros）都是全局可用的，无需手动导入：</p>
<table>
<thead>
<tr>
<th>编译器宏</th>
<th>说明</th>
<th>使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>defineProps</code></td>
<td>声明组件 props</td>
<td>接收父组件传递的属性</td>
</tr>
<tr>
<td><code v-pre>defineEmits</code></td>
<td>声明组件事件</td>
<td>定义要触发的事件</td>
</tr>
<tr>
<td><code v-pre>defineExpose</code></td>
<td>暴露公共属性</td>
<td>向父组件暴露方法或属性</td>
</tr>
<tr>
<td><code v-pre>defineSlots</code></td>
<td>声明插槽</td>
<td>声明具名插槽或作用域插槽</td>
</tr>
<tr>
<td><code v-pre>defineOptions</code></td>
<td>声明组件选项</td>
<td>定义组件的 name、inheritAttrs 等选项</td>
</tr>
<tr>
<td><code v-pre>defineModel</code></td>
<td>声明双向绑定</td>
<td>简化 v-model 的使用（Vue 4.4+）</td>
</tr>
<tr>
<td><code v-pre>withDefaults</code></td>
<td>为 props 定义默认值</td>
<td>配合 TypeScript 使用</td>
</tr>
</tbody>
</table>
<h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 1. defineProps 的使用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const props = defineProps(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> Number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    default</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 2. defineEmits 的使用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const emit = defineEmits(['change', 'update'])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 4. defineExpose 的使用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const count = ref(0)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const increment = () => count.value++</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">defineExpose(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  increment</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 4. defineOptions 的使用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">defineOptions(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'MyComponent'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 组件名称（script steup默认文件名就是组件名）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  inheritAttrs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 禁用自动绑定非 props 属性到根元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 5. defineModel 的使用 (Vue 4.4+)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const model = defineModel(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">String</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 6. withDefaults 配合 TypeScript 使用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">interface Props </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  msg</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">?:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> string</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  labels</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">?:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const props = withDefaults(defineProps&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>(), </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hello'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  labels</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'one'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'two'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 7. defineSlots 的使用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">const slots = defineSlots(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'div'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Default Content'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  header</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'div'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-7-其他自动导入特性" tabindex="-1"><a class="header-anchor" href="#_4-7-其他自动导入特性"><span>4.7 其他自动导入特性</span></a></h3>
<p>除了编译器宏之外，在使用特定的构建工具配置时，还可以自动导入：</p>
<ol>
<li>
<p><strong>Vue 核心 API 自动导入</strong>：</p>
<ul>
<li>使用 <code v-pre>unplugin-auto-import</code> 插件后，可以自动导入：
<ul>
<li>ref, reactive, computed, watch 等响应式 API</li>
<li>onMounted, onUnmounted 等生命周期钩子</li>
<li>nextTick, provide, inject 等工具函数</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>组件自动导入</strong>：</p>
<ul>
<li>使用 <code v-pre>unplugin-vue-components</code> 插件后，可以自动导入：
<ul>
<li>Vue 组件</li>
<li>UI 库组件（如 Element Plus）</li>
</ul>
</li>
</ul>
</li>
</ol>
<p>配置示例：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> AutoImport</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "unplugin-auto-import/vite"</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> Components</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "unplugin-vue-components/vite"</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ElementPlusResolver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "unplugin-vue-components/resolvers"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 自动导入 Vue 核心 API</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        AutoImport</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            imports</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vue"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vue-router"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pinia"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            resolvers</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ElementPlusResolver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }),</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 自动导入组件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        Components</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            resolvers</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ElementPlusResolver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


