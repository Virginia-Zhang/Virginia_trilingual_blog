<!-- Comments.vue - 支持多语言的Giscus评论组件 -->
<template>
  <div class="comments-container">
    <div class="giscus" ref="giscusContainer"></div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import { useData, useRoute } from "vitepress";

const { lang, isDark } = useData(); // 1. 获取 isDark 状态
const route = useRoute();
const giscusContainer = ref();

// 语言映射配置
const langMap = {
  "zh-CN": "zh-CN",
  zh: "zh-CN",
  "ja-JP": "ja",
  ja: "ja",
  "en-US": "en",
  en: "en",
};

// 获取Giscus支持的语言代码
const getGiscusLang = (vitepress_lang) => {
  return langMap[vitepress_lang] || "en"; // 默认英文
};

// 2. 更新 Giscus 主题的函数
const updateGiscusTheme = (theme) => {
  const iframe = document.querySelector("iframe.giscus-frame");
  if (iframe) {
    iframe.contentWindow.postMessage(
      { giscus: { setTheme: theme } },
      "https://giscus.app"
    );
  }
};

// 加载Giscus脚本的函数
const loadGiscus = (language, theme) => {
  // 清空容器
  if (giscusContainer.value) {
    giscusContainer.value.innerHTML = "";
  }

  // 创建新的Giscus脚本
  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.setAttribute("data-repo", "Virginia-Zhang/Virginia_trilingual_blog");
  script.setAttribute("data-repo-id", "R_kgDOPQkQUw");
  script.setAttribute("data-category", "Announcements");
  script.setAttribute("data-category-id", "DIC_kwDOPQkQU84CtQzs");
  script.setAttribute("data-mapping", "pathname");
  script.setAttribute("data-strict", "1"); // 3. 启用严格匹配，隔离评论
  script.setAttribute("data-reactions-enabled", "1");
  script.setAttribute("data-emit-metadata", "0");
  script.setAttribute("data-input-position", "top");
  script.setAttribute("data-theme", theme); // 4. 使用动态主题
  script.setAttribute("data-lang", language); // 动态语言
  script.crossOrigin = "anonymous";
  script.async = true;

  giscusContainer.value?.appendChild(script);
};

// 组件挂载时加载
onMounted(() => {
  const currentLang = getGiscusLang(lang.value);
  const currentTheme = isDark.value ? "transparent_dark" : "light"; // 5. 设置初始主题
  loadGiscus(currentLang, currentTheme);
});

// 监听语言和路由变化，重新加载Giscus
watch(
  [lang, () => route.path],
  ([newLangValue]) => {
    const giscusLang = getGiscusLang(newLangValue);
    const currentTheme = isDark.value ? "transparent_dark" : "light";
    loadGiscus(giscusLang, currentTheme);
  },
  { immediate: false }
);

// 6. 监听明暗模式切换，仅更新主题
watch(isDark, (dark) => {
  const newTheme = dark ? "transparent_dark" : "light";
  updateGiscusTheme(newTheme);
});
</script>

<style scoped>
.comments-container {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.giscus {
  min-height: 200px;
}

/* 加载时的占位样式 */
.giscus:empty::before {
  content: "评论加载中... / Loading comments... / コメントを読み込み中...";
  display: block;
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>
