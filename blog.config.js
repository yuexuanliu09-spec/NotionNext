// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', // API默认请求地址,可以配置成自己的地址例如：https://[xxxxx].notion.site/api/v3
  // Important page_id！！！Duplicate Template from  https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'next', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 claude,endspace,example,fukasawa,fuwari,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, // 更新缓存间隔 单位(秒)；即每个页面有60秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  REVALIDATION_TOKEN: process.env.REVALIDATION_TOKEN || '', // On-Demand Revalidation Token，设置后可通过 POST /api/revalidate 立即刷新页面缓存（解决 Notion 内容更新延迟问题）
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '小文化宇宙', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '记录世界第一的小猫小文化', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'liuyuexuan.com', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客', // 网站关键词 英文逗号隔开
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXX
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // 备案查询链接，如果用了萌备等备案请在这里填写
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', // 公安备案号，例如 '浙公网安备3xxxxxxxx8号'

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能

  // 其它复杂配置
  // 原配置文件过长，且并非所有人都会用到，故此将配置拆分到/conf/目录下, 按需找到对应文件并修改即可
  ...require('./conf/comment.config'), // 评论插件
  ...require('./conf/contact.config'), // 作者联系方式配置
  ...require('./conf/post.config'), // 文章与列表配置
  ...require('./conf/analytics.config'), // 站点访问统计
  ...require('./conf/image.config'), // 网站图片相关配置
  ...require('./conf/font.config'), // 网站字体
  ...require('./conf/right-click-menu'), // 自定义右键菜单相关配置
  ...require('./conf/code.config'), // 网站代码块样式
  ...require('./conf/animation.config'), // 动效美化效果
  ...require('./conf/widget.config'), // 悬浮在网页上的挂件，聊天客服、宠物挂件、音乐播放器等
  ...require('./conf/ad.config'), // 广告营收插件
  ...require('./conf/plugin.config'), // 其他第三方插件 algolia全文索引
  ...require('./conf/ai.config'), // AI 相关配置（AI摘要、AI聊天机器人等）
  ...require('./conf/performance.config'), // 性能优化配置
  ...require('./conf/top-tag.config'), // 置顶文章全局配置

  // 高级用法
  ...require('./conf/layout-map.config'), // 路由与布局映射自定义，例如自定义特定路由的页面布局
  ...require('./conf/notion.config'), // 读取notion数据库相关的扩展配置，例如自定义表头
  ...require('./conf/dev.config'), // 开发、调试时需要关注的配置

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: ['/* ========== 1. 宇宙梦幻星空背景 ========== */
body {
    background: linear-gradient(135deg, #0a0e27 0%, #1a1040 30%, #2d1b69 60%, #0a0e27 100%);
    position: relative;
    min-height: 100vh;
}

/* 星空闪烁粒子层 - 通过伪元素实现星星效果 */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 40px 70px, #f0e6ff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 130px 80px, #d4bfff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 160px 30px, #ffffff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 200px 60px, #e8d5ff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 250px 90px, #ffffff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 300px 20px, #c9b0ff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 350px 70px, #ffffff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 400px 50px, #f0e6ff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 450px 30px, #ffffff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 500px 80px, #d4bfff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 550px 40px, #ffffff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 600px 60px, #e8d5ff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 650px 20px, #ffffff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 700px 90px, #c9b0ff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 750px 50px, #ffffff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 800px 30px, #f0e6ff, rgba(0,0,0,0));
    background-size: 200px 100px;
    pointer-events: none;
    z-index: 0;
    animation: twinkle 4s ease-in-out infinite alternate;
}

/* 星星闪烁动画 */
@keyframes twinkle {
    0% { opacity: 0.6; }
    100% { opacity: 1; }
}

/* ========== 2. 梦幻星云光晕 ========== */
body::after {
    content: '';
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
        radial-gradient(ellipse at 20% 50%, rgba(138, 43, 226, 0.15) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, rgba(0, 191, 255, 0.10) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 80%, rgba(255, 105, 180, 0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
    animation: nebulaDrift 20s ease-in-out infinite alternate;
}

@keyframes nebulaDrift {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(30px, -20px) scale(1.05); }
}

/* ========== 3. 主内容区域 - 毛玻璃效果 ========== */
.notion-page-content,
.notion-page,
main,
article {
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.06) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-radius: 20px !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    padding: 30px !important;
    margin: 20px auto !important;
    max-width: 900px !important;
}

/* ========== 4. 标题 - 梦幻渐变 ========== */
h1, .notion-h1, .notion-heading-1 {
    background: linear-gradient(135deg, #f0e6ff 0%, #a78bfa 30%, #7c3aed 60%, #a78bfa 100%) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    color: transparent !important;
    font-weight: 700 !important;
    text-shadow: 0 0 40px rgba(124, 58, 237, 0.3) !important;
}

h2, .notion-h2, .notion-heading-2 {
    background: linear-gradient(135deg, #c4b5fd 0%, #818cf8 100%) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    color: transparent !important;
}

h3, .notion-h3, .notion-heading-3 {
    color: #c4b5fd !important;
}

/* ========== 5. 文字与链接 ========== */
p, .notion-text, .notion-paragraph {
    color: rgba(230, 220, 250, 0.92) !important;
    line-height: 1.8 !important;
}

a, .notion-link {
    color: #a78bfa !important;
    border-bottom: 1px solid rgba(167, 139, 250, 0.3) !important;
    transition: all 0.3s ease !important;
    text-decoration: none !important;
}

a:hover, .notion-link:hover {
    color: #c4b5fd !important;
    border-bottom-color: #a78bfa !important;
    text-shadow: 0 0 20px rgba(167, 139, 250, 0.4) !important;
}

/* ========== 6. 蓝眼睛小白猫装饰元素 ========== */
/* 在页面右上角添加一个小猫爪印或猫咪元素（可选） */
.notion-page-icon {
    filter: drop-shadow(0 0 20px rgba(167, 139, 250, 0.5)) !important;
}

/* 为网站添加猫爪印光标（趣味效果） */
/* 注意：如果不想改光标，可以删除下面两行 */
/* body { cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="%23a78bfa" opacity="0.6"/><circle cx="8" cy="8" r="3" fill="%23c4b5fd"/><circle cx="16" cy="8" r="3" fill="%23c4b5fd"/><circle cx="8" cy="16" r="3" fill="%23c4b5fd"/><circle cx="16" cy="16" r="3" fill="%23c4b5fd"/></svg>') 12 12, auto !important; } */

/* ========== 7. 代码块 - 星空主题 ========== */
.notion-code, pre, code {
    background: rgba(10, 14, 39, 0.7) !important;
    border: 1px solid rgba(167, 139, 250, 0.2) !important;
    border-radius: 12px !important;
    color: #e8d5ff !important;
}

/* ========== 8. 分割线 - 星光效果 ========== */
hr, .notion-divider {
    border: none !important;
    height: 2px !important;
    background: linear-gradient(90deg, transparent, #a78bfa, #7c3aed, #a78bfa, transparent) !important;
    margin: 30px 0 !important;
    box-shadow: 0 0 20px rgba(124, 58, 237, 0.3) !important;
}

/* ========== 9. 滚动条美化 ========== */
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: rgba(10, 14, 39, 0.8);
}
::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #7c3aed, #a78bfa);
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #a78bfa, #c4b5fd);
}'], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu类型的菜单，替代了3.12版本前的Page类型

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容，默认允许；可被文章属性 CAN_COPY / ext.CAN_COPY 覆盖。

  ...require('./conf/techgrow.config'), // 公众号导流插件（TechGrow）

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 欢迎语打字效果,Hexo,Matery主题支持, 英文逗号隔开多个欢迎语。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，我是一个程序员, Hi，我是一个打工人,Hi，我是一个干饭人,欢迎来到我的博客🎉',

  // 欢迎语打字效果类型速度
  GREETING_WORDS_TYPE_SPEED:
    process.env.NEXT_PUBLIC_GREETING_WORDS_TYPE_SPEED || 200,

  // 欢迎语打字效果回退速度
  GREETING_WORDS_BACK_SPEED:
    process.env.NEXT_PUBLIC_GREETING_WORDS_BACK_SPEED || 100,

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
