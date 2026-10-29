AMI’27 网站源码 — 中文快速入口
文档版本：v20
更新日期：2026 年 10 月 29 日

详细使用与维护指南已统一整理到同目录的 README.md。
请用支持 Markdown 的编辑器查看；普通文本编辑器也可以打开。
本文件只保留快速操作，避免与详细指南形成两套不同的维护说明。

一、只查看网站
进入包含 index.html、assets 和 scripts 的目录，双击 index.html。

二、本地预览
在项目根目录打开 PowerShell：
node --version
node scripts/serve.mjs
访问 http://127.0.0.1:4173/；终端保持运行，Ctrl+C 停止。
无需 npm install，项目没有 package.json。

如果端口被占用：
$env:PORT = "4174"
node scripts/serve.mjs
访问 http://127.0.0.1:4174/。

三、修改内容
scripts/content.mjs：日期、主题、首页文案、组织者、嘉宾资料和议程。
scripts/home.mjs：首页模板。
scripts/build.mjs：其他页面、页眉页脚、投稿规则及日历生成。
修改这些文件后运行：
node scripts/build.mjs
再刷新浏览器。
不要只修改生成的 HTML，否则下次生成会覆盖。

四、修改外观
assets/css/refinements.css：字体、间距、导航及响应式规则。
assets/css/images.css：About 图文布局、照片裁切和图片放大窗口。
修改 CSS 或同名图片后直接刷新即可。

五、特别需要同步的内容
1. Topics 分为首页 summaryTopics 与投稿页 topics。
2. 组织者姓名与 organizerProfiles 中的键需要一致。
3. Speakers 页嘉宾资料在 invitedSpeaker 中维护；布局在 build.mjs 的 speakers() 中。
4. 改活动时间或场地后，必须同步修改 build.mjs 中的日历内容。
5. Workshop 已接收，status 为 confirmed；日程仍暂定。论文统一最多 5 页（含参考文献），使用英文及 ACM sigconf 模板；出版和注册要求见 README.md 第 4 节。
6. 透明 Logo 使用文件名带 -transparent 的 PNG；不要加白底或亮度滤镜。

六、部署与完整说明
发布生成后的五个 HTML、assets 文件夹及第三方说明，保持目录结构。
本地预览不会自动更新线上网站。
运行环境、文件结构、逐项修改方法、图片脚本、GitHub Pages 部署、
常见问题和待确认事项均见 README.md。
Logo 处理记录见 LOGO_EDIT.md；第三方说明见 THIRD_PARTY_NOTICES.txt。
