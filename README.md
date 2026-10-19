# AMI’27 网站源码使用与维护指南

> 文档版本：v18 · 更新日期：2026 年 10 月 18 日  
> 对应项目：AMI’27 — Agentic Mobility Intelligence  
> 网站内容为英文；本文件为中文维护说明。

本项目是 AMI’27 Workshop 的五页静态网站，基于 Learning with Knowledge Graphs WSDM2023 模板改造，内容来自 Workshop Proposal 和组织者确认的信息。

网站由 HTML、CSS、原生 JavaScript 和本地图片组成。Node.js 仅用于生成页面和本地预览；正式部署后的网页不需要运行 Node.js 服务，也没有数据库、登录系统或站内投稿后台。投稿按钮在配置后跳转到外部投稿系统。

**日常维护流程：修改源文件 → 生成 HTML → 本地查看 → 上传更新后的文件。**

## 目录

- [1. 快速开始](#section-1)
  - [1.1 只想查看网页](#section-1-1)
  - [1.2 用本地服务器预览](#section-1-2)
  - [1.3 修改内容后生成页面](#section-1-3)
- [2. 项目结构与页面分工](#section-2)
- [3. 常见修改去哪里找](#section-3)
- [4. 维护日期、投稿入口和活动状态](#section-4)
  - [4.1 当前采用的日期](#section-4-1)
  - [4.2 配置正式投稿链接](#section-4-2)
  - [4.3 Proposal 状态与正式确认](#section-4-3)
- [5. 维护首页、主题、人员和议程](#section-5)
  - [5.1 首页文案与图示](#section-5-1)
  - [5.2 Topics 的长短版本](#section-5-2)
  - [5.3 组织者资料与照片](#section-5-3)
  - [5.4 嘉宾信息](#section-5-4)
  - [5.5 Program 与日历必须一起维护](#section-5-5)
- [6. 字体、布局与响应式样式](#section-6)
- [7. 图片与 Logo 的维护](#section-7)
  - [7.1 正在使用的素材](#section-7-1)
  - [7.2 可选：重新生成照片与图示的 WebP](#section-7-2)
  - [7.3 浏览器标签图标（favicon）](#section-7-3)
- [8. 交互与修改后检查](#section-8)
- [9. 部署到静态托管服务](#section-9)
  - [9.1 发布文件与维护源码](#section-9-1)
  - [9.2 GitHub Pages 示例](#section-9-2)
- [10. 常见问题](#section-10)
- [11. 交接时仍需确认的信息](#section-11)
- [12. 来源与相关说明](#section-12)

<a id="section-1"></a>

## 1. 快速开始

<a id="section-1-1"></a>

### 1.1 只想查看网页

解压源码包，进入同时包含 `index.html`、`assets/` 和 `scripts/` 的目录，双击 `index.html` 即可查看。需要完整检查导航、图片放大和文件加载时，使用下面的本地预览方式。

源码包外层文件夹的名称不影响运行。

<a id="section-1-2"></a>

### 1.2 用本地服务器预览

在项目根目录打开 PowerShell 或终端，先检查 Node.js：

```powershell
node --version
```

构建与预览已在 Node.js `v24.19.0` 下验证。项目只使用 Node.js 内置模块，没有 `package.json`，无需执行 `npm install`、`npm run dev` 或 `npm run build`。

启动预览：

```powershell
node scripts/serve.mjs
```

浏览器访问 [本地首页](http://127.0.0.1:4173/)。终端保持运行；按 `Ctrl+C` 停止服务。

如果 4173 端口已经被其他项目占用，在 PowerShell 中指定另一个端口：

```powershell
$env:PORT = "4174"
node scripts/serve.mjs
```

此时访问 [4174 端口的首页](http://127.0.0.1:4174/)，以终端实际打印的地址为准。

`PORT` 设置会保留在当前终端会话中。停止服务后，如需恢复默认端口：

```powershell
Remove-Item Env:PORT -ErrorAction SilentlyContinue
```

预览服务仅监听 `127.0.0.1`，用于本机查看；它不会自动把网站发布到互联网，也不能直接用手机访问电脑上的这个地址。服务没有自动刷新功能，保存修改后需要手动刷新浏览器。

<a id="section-1-3"></a>

### 1.3 修改内容后生成页面

```powershell
node scripts/build.mjs
```

成功时会输出：

```text
Built 5 static pages and the tentative calendar event.
```

该命令覆盖生成五个 HTML 页面和 `assets/ami27-tentative.ics`。它不会修改照片、Logo、CSS 或 JavaScript 交互文件。

| 改动类型 | 操作 |
| --- | --- |
| 修改 `scripts/content.mjs`、`scripts/home.mjs` 或 `scripts/build.mjs` | 执行生成命令，再刷新网页 |
| 修改 CSS、`assets/js/site.js` 或同名图片文件 | 保存后刷新网页；通常不需要重新生成 HTML |
| 修改图片文件名、图片路径或 HTML 中的尺寸属性 | 修改对应模板，执行生成命令 |
| 修改 README 等说明文档 | 保存即可，不影响网页 |

**不要把生成后的 HTML 当作长期维护入口。** 直接改 `index.html` 等文件虽然会立即显示，但下一次生成会覆盖这些改动。

<a id="section-2"></a>

## 2. 项目结构与页面分工

```text
项目根目录/
├── index.html                  首页
├── cfp.html                    Call for Papers：投稿说明
├── schedule.html               Program：议程
├── speakers.html               Speakers：嘉宾信息
├── organizers.html             Organizers：组织者
├── scripts/
│   ├── content.mjs             共用内容与数据
│   ├── home.mjs                首页模板
│   ├── build.mjs               页面生成、其他页面模板、页眉页脚、日历
│   ├── serve.mjs               本地预览服务器
│   └── prepare_images.py       照片及图示的 WebP 转换脚本
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css   模板保留的 Bootstrap 基础样式
│   │   ├── site.css            全站基础样式
│   │   ├── proposal.css        Proposal 内容相关样式
│   │   ├── refinements.css     当前字体、间距、导航与布局细化
│   │   └── images.css          图示面板、人物照片和放大窗口
│   ├── js/site.js              手机菜单、图示切换和放大交互
│   ├── img/                   照片、两张图示、Logo 和 favicon
│   └── ami27-tentative.ics     可下载的暂定活动日历
├── README.md                   本维护指南
├── README_CN.txt               中文快速操作入口
├── LOGO_EDIT.md                两个 Logo 的透明处理记录与提示词
└── THIRD_PARTY_NOTICES.txt      模板来源、Bootstrap 许可及 WSDM 标识来源
```

本地可能另有 `.preview/`，其中是开发检查截图和记录，不是网站运行所需文件，也不应放入发布包。

| 页面 | 当前主要内容 | 维护入口 |
| --- | --- | --- |
| Home | Workshop 简介、三个研究问题、About、Objectives、图示、主题、重要日期 | `content.mjs` + `home.mjs` |
| Call for Papers | 完整 Topics、篇幅与格式、评审与发表说明、CMT 致谢、日期和投稿入口 | `content.mjs` + `build.mjs` 中的 `cfp()` |
| Program | 暂定半天议程、Panel、日历下载 | `content.mjs` 中的 `schedule` + `build.mjs` 中的 `program()` |
| Speakers | 嘉宾尚待公布的占位说明 | `build.mjs` 中的 `speakers()` |
| Organizers | 六位组织者、称谓、照片、单位、主页、邮箱及可展开简介 | `content.mjs` + `build.mjs` 中的 `committee()` |

<a id="section-3"></a>

## 3. 常见修改去哪里找

| 想修改的内容 | 文件与位置 |
| --- | --- |
| 投稿截止、通知日期、Workshop 日期和时间 | `scripts/content.mjs` → `event` |
| 投稿系统链接 | `scripts/content.mjs` → `event.submissionUrl` |
| 联系人和全站联系邮箱 | `scripts/content.mjs` → `event.contact` |
| 首页首屏介绍、三个研究问题、About、Objectives | `scripts/content.mjs` → `workshop` |
| 首页主标题、参会方式、场地占位文字 | `scripts/home.mjs` 中的相应模板 |
| 首页简短 Topics 和投稿页完整 Topics | `scripts/content.mjs` → `themes` |
| Topics 中强调显示的关键词 | `scripts/content.mjs` → `topicKeywords` |
| 老师姓名、单位、照片、邮箱、简介 | `scripts/content.mjs` → `organizers` |
| 老师称谓和主页链接 | `scripts/content.mjs` → `organizerProfiles` |
| 议程时间、标题、说明、类型 | `scripts/content.mjs` → `schedule` |
| 投稿篇幅、评审方式、发表政策、CMT 致谢 | `scripts/build.mjs` → `cfp()` |
| 嘉宾卡片、演讲题目、摘要 | `scripts/build.mjs` → `speakers()`，目前需要在模板中添加 |
| 全站导航、Logo 引用、页脚 | `scripts/build.mjs` → `header()` / `footer()` |
| 浏览器标题和分享描述 | `scripts/build.mjs` → `pages` 数组及 `shell()` |
| 字体、行高、标题大小、区块间距 | `assets/css/refinements.css` |
| About 图文比例、图示标签区、照片裁切 | `assets/css/images.css` |

部分内容直接写在模板里，修改一个共用字段不一定会更新所有相似表述。例如：首页主标题并不直接取自 `event.name`；场地文字目前也没有统一的 `venue` 配置字段。修改后应查看所有相关页面。

<a id="section-4"></a>

## 4. 维护日期、投稿入口和活动状态

<a id="section-4-1"></a>

### 4.1 当前采用的日期

| 项目 | 当前内容 | 说明 |
| --- | --- | --- |
| Paper submission | 30 November 2026 | 组织者决定采用 WSDM 允许的最晚投稿期限 |
| Author notification | 18 December 2026 | 组织者决定采用 WSDM 允许的最晚通知期限 |
| 两项论文期限的时间 | 23:59 Anywhere on Earth，AoE，UTC−12 | 首页和投稿页共用同一说明 |
| Workshop 日期 | 19 February 2027 | WSDM Workshop Day |
| Workshop 时段 | 13:30–17:00，香港时间 UTC+8 | 当前拟定半天时段，具体议程仍待确认 |

日期依据：[WSDM 2027 Call for Workshops](https://www.wsdm-conference.org/2027/cfworkshops.html)，已于 2026 年 10 月 18 日核对。

官方页面中 **20 December 2026** 的 Camera-ready 位于 **Workshop Proposals** 部分，不应直接填作投稿作者的论文终稿期限。当前网站尚未添加作者终稿截止日期。

维护入口如下。这里是现有 `event` 对象的字段摘录，应在原位置修改，不要重复声明一个新的对象：

```javascript
status: 'proposal',
date: '19 February 2027',
time: '13:30–17:00',
timezone: 'Hong Kong time (UTC+8)',
submissionDate: '30 November 2026',
notificationDate: '18 December 2026',
deadlinesSourceUrl: 'https://www.wsdm-conference.org/2027/cfworkshops.html',
submissionUrl: '',
```

这些日期字段是展示用字符串，不会自动计算截止时间、倒计时或时区转换。日期栏说明论文投稿与通知期限使用 AoE；Program 页说明议程时间使用香港时区。

<a id="section-4-2"></a>

### 4.2 配置正式投稿链接

取得实际投稿入口后，在 `event.submissionUrl` 中填写完整 HTTPS 地址，再生成页面。

- 为空字符串时：投稿页显示 `Submission link coming soon`。
- 有值时：投稿页显示 `Submit your paper` 按钮，链接到该地址。
- 本项目不会自动创建 Microsoft CMT 会议或投稿系统。

投稿页的 **Microsoft CMT acknowledgement** 位于 `cfp()` 的 `cmt-acknowledgement` 标题下，编辑时应保留完整原文。

<a id="section-4-3"></a>

### 4.3 Proposal 状态与正式确认

当前 `event.status` 仍为 `'proposal'`。只有值为 `'confirmed'` 时，生成逻辑中的部分状态文案才会改为正式 Workshop 表述。

部分 Proposal / Tentative 文案直接写在模板中，不受 `event.status` 控制。

在活动正式确认后，需要一起检查：

1. `event.status`，以及首页首屏、Workshop 日期标签和页脚。
2. `workshop.participation` 中的拟议活动描述。
3. `cfp()` 中的篇幅、双盲评审、评审数量、发表与现场展示要求。
4. `program()`、`speakers()` 中直接写入的 Tentative / Proposed 文案。
5. `pages` 数组中的页面描述，以及日历的标题、说明和状态。

目前稿件篇幅为 regular paper 最多 6 页、short / other contribution 最多 4 页，参考文献计入页数；这些属于当前草稿内容，后续应按组织者最终决定维护。

<a id="section-5"></a>

## 5. 维护首页、主题、人员和议程

<a id="section-5-1"></a>

### 5.1 首页文案与图示

在 `content.mjs` 的 `workshop` 对象中：

| 字段 | 用途 |
| --- | --- |
| `heroIntroduction` | 首屏简介 |
| `focusQuestions` | 首屏右侧的三个研究问题 |
| `introduction` | About 的两段文字 |
| `objectives` | 目标框中的三条目标；每项包含 `title` 和 `text` |
| `definition` | Agentic Mobility 图示下的说明 |
| `audience`、`participation` | Who Should Join 区域 |
| `speakerAnnouncement` | 首页与 Program 的嘉宾待公布说明 |

`loopDescription` 是保留的数据字段，目前没有在首页渲染；修改它不会改变现在的图示说明。Traditional Mobility 图注、两张图的替代文字和流程短语位于 `home.mjs` 的 `diagram()` 调用处。

当前 About 在桌面端采用左侧介绍与目标、右侧图示的布局；小于 992px 时上下排列。Objectives 使用浅绿色框、细边框和左侧强调线。右侧默认显示 Agentic Mobility，另一张图通过标签切换。

<a id="section-5-2"></a>

### 5.2 Topics 的长短版本

`themes` 中每个主题有两个列表：

- `summaryTopics`：首页展示的精简表述。
- `topics`：Call for Papers 页展示的完整范围。

修改研究范围时应同时核对两份列表。目前保留三个主题、每个主题三条方向。修改主题标题不会自动改写列表内容。

`topicKeywords` 用于匹配并加粗文字，依赖准确的短语和大小写。调整 Topics 文案后，检查对应关键词是否仍匹配。

<a id="section-5-3"></a>

### 5.3 组织者资料与照片

`organizers` 数组决定人员卡片的展示顺序，主要字段包括 `name`、`initials`、`image`、`institution`、`department`、`email`、`bio` 和 `contact`。

`organizerProfiles` 使用姓名作为键，补充 `honorific`、`homepage` 和 `homepageLabel`。修改姓名时必须同步修改这里的键，否则称谓和主页信息可能缺失。

- 称谓目前为 Zheng Liang 使用 `Dr.`，其余五位使用 `Prof.`；以后以组织者确认的信息为准。
- `image` 只填写文件名，例如 `qinggang-zhang.webp`，模板会自动加上 `assets/img/`。
- 简介通过 `Read biography` 展开。
- `contact: true` 控制卡片上的 Primary contact 标识；全站联系按钮则使用 `event.contact`，两处应保持一致。
- 页面有些人员字段直接进入模板，若文字包含 `&`、`<` 等特殊字符，修改后应检查最终显示。

<a id="section-5-4"></a>

### 5.4 嘉宾信息

目前没有已确认的 invited speakers 和 panelists。首页及 Program 的公共提示由 `workshop.speakerAnnouncement` 管理；Speakers 页的占位内容单独写在 `build.mjs` 的 `speakers()` 中。

取得确认信息后，需要在 `speakers()` 中加入嘉宾姓名、单位、照片、演讲题目和摘要，并同步更新首页提示和 `schedule` 中对应的演讲条目。仅修改 `speakerAnnouncement` 不会自动生成嘉宾卡片。

<a id="section-5-5"></a>

### 5.5 Program 与日历必须一起维护

`schedule` 中每项包括 `start`、`end`、`type`、`title`、`detail`，休息条目还可包含 `break: true`。时间按香港时间展示，列表不会自动排序或检查冲突，应手动保证首尾衔接。

Panel 区域的时段文字、预计 contributed talks 数量等在 `program()` 中另有固定文案。改议程后也要同步检查这些内容。

日历 `assets/ami27-tentative.ics` 由 `build.mjs` 底部的 `ics` 常量生成，**不会根据 `event.date`、`event.time` 或 `schedule` 自动更新**。

当前日历时间为：

```text
DTSTART:20270219T053000Z
DTEND:20270219T090000Z
```

这对应 2027 年 2 月 19 日香港时间 13:30–17:00，末尾 `Z` 表示 UTC。调整活动日期、时间或场地时，应在生成源中同步维护 `DTSTART`、`DTEND`、`DTSTAMP`、`SUMMARY`、`DESCRIPTION`、`LOCATION` 和适用的 `STATUS`。保留同一活动的 UID 可帮助日历软件识别更新。不要只修改生成的 `.ics` 文件。

<a id="section-6"></a>

## 6. 字体、布局与响应式样式

CSS 按以下顺序加载：

```text
bootstrap.min.css → site.css → proposal.css → refinements.css → images.css
```

后加载的规则在优先级相同时会覆盖前面的规则。常规排版修改优先放在 `refinements.css`，图示和照片展示优先放在 `images.css`，避免直接修改压缩的 Bootstrap 文件。

当前主要参数：

| 项目 | 当前设置 |
| --- | --- |
| 字体 | 系统无衬线字体；Windows 通常显示为 Segoe UI，没有加载 Inter 或外部字体 |
| 主要正文 | 桌面 17px、行高 1.6；手机 16px、行高 1.6 |
| 桌面首页主标题 | 40px；较窄屏幕按断点缩小 |
| 普通页面标题 | 桌面 36px，手机 30px |
| 章节标题 | 桌面通常 28px，手机通常 26px |
| 桌面 About 图文比例 | 约 1.6:1；1199px 以下调整为约 1.5:1 |
| 图文改为上下排列 | 991px 及以下 |
| 手机菜单 | 767px 及以下 |
| Program 简介 | 使用完整可用宽度；窄屏自然换行 |

相关选择器：

- `.workshop-objectives-section`：目标框底色、边线、内边距。
- `.about-grid`：About 图文比例与间距。
- `.about-diagrams`、`.diagram-tabs`、`.diagram-caption`：图示面板。
- `.wordmark img`、`.conference-brand img`：AMI 与 WSDM Logo 尺寸。
- `.organizer-photo > img`：人物照片裁切。
- `.page-schedule .page-lead`：Program 页简介宽度。

当前桌面 AMI Logo 宽 200px、WSDM Logo 宽 148px，窄屏有相应缩小规则。两者都使用透明 PNG；不要再给图片添加白底或亮度滤镜。

<a id="section-7"></a>

## 7. 图片与 Logo 的维护

<a id="section-7-1"></a>

### 7.1 正在使用的素材

| 用途 | 页面使用文件 | 原图 / 说明 |
| --- | --- | --- |
| AMI 页眉 Logo | `ami27-logo-transparent.png` | 原图：`ami27-logo-original.png` |
| WSDM 页眉 Logo | `wsdm-2027-logo-transparent.png` | 原始灰底图保留为 `wsdm-2027-logo.png` |
| Agentic 图示预览 | `agentic-mobility.webp` | 放大查看使用同名 `.png` |
| Traditional 图示预览 | `traditional-mobility.webp` | 放大查看使用同名 `.png` |
| 六位组织者照片 | 对应姓名的 `.webp` 文件 | JPG / JPEG 等原文件保留在同一目录 |
| 浏览器标签图标 | `favicon-16.png`、`favicon-32.png`、`apple-touch-icon.png`、根目录 `favicon.ico` | 从 `ami27-logo-transparent.png` 左侧图形裁切生成，见 7.3 |

以上文件均位于 `assets/img/`。替换图片时保持路径一致；如果改了文件名，要同步修改模板或 `organizers` 数据。替换为不同宽高比的图片时，也应检查 HTML 中的 `width`、`height` 属性。

透明 Logo 的处理方式和完整提示词见 [LOGO_EDIT.md](LOGO_EDIT.md)。需要真正含 Alpha 通道的 PNG；看起来像棋盘格的实色图片不是真正透明。

照片使用 CSS 在框内裁切。张志文老师照片的右侧黑边目前通过 `scale(1.02)` 隐藏；其他照片也有各自的定位规则。换新照片后应重新检查裁切，而不是直接沿用旧图的缩放数值。

<a id="section-7-2"></a>

### 7.2 可选：重新生成照片与图示的 WebP

现有展示图片已准备好，正常查看、修改文字和部署都不需要运行图片脚本。只有更新对应原图后，才需要重新生成展示副本。

脚本依赖 Python 和 Pillow：

```powershell
python -m pip install Pillow
python scripts/prepare_images.py
```

脚本处理固定列表中的两张图示和六位组织者原图，保留原图并覆盖同名 `.webp`：图示最长边上限 1600px，照片最长边上限 900px，WebP quality 为 88。新增图片不会被自动发现，需维护脚本中的文件列表。

该脚本会把输入转换为 RGB，**不用于透明 Logo**；现有列表也不包含 Logo。若某张原图缺失，脚本会报错，应先检查文件名和扩展名。

<a id="section-7-3"></a>

### 7.3 浏览器标签图标（favicon）

标签图标使用 `ami27-logo-transparent.png` 左侧的图形标记，而不是整条横向 Logo：完整 Logo 宽高比约 3:1，缩到 16–32 px 后文字无法辨认。`scripts/make_favicons.py` 会把左侧图形裁成正方形并生成：

- `assets/img/favicon-16.png`、`assets/img/favicon-32.png`：浏览器标签页
- `assets/img/apple-touch-icon.png`：iOS 主屏幕图标（180×180，品牌深蓝底）
- `favicon.ico`：放在根目录，包含 16/32/48 px，兼容旧浏览器

重新生成：

```powershell
python -m pip install Pillow
python scripts/make_favicons.py
```

对应 `<link>` 标签由 `scripts/build.mjs` 的页面模板统一输出，修改后需重新运行 `node scripts/build.mjs`。如果更换了 Logo 原图，需同步调整脚本中的 `EMBLEM_BOX` 裁切范围（当前基于 2172×724 原图）。浏览器会缓存 favicon，更新后可能需要强制刷新或用无痕窗口才能看到新图标。

<a id="section-8"></a>

## 8. 交互与修改后检查

`assets/js/site.js` 负责以下交互：

- 手机菜单展开、关闭，以及 `Escape` 关闭菜单。
- 图示标签点击切换；方向键、`Home` 和 `End` 切换并移动焦点。
- 点击图示打开大图；`Actual size` 与 `Fit to window` 切换；`Escape` 关闭后焦点返回原入口。

人物简介使用原生 `<details>`。正文和人员资料已经生成在 HTML 中，不依赖 JavaScript 动态加载。禁用 JavaScript 后，图示链接仍可直接打开原图，Traditional 图还提供备用链接；手机菜单和标签切换等交互则需要 JavaScript。

项目目前没有独立的自动化测试命令。修改后按实际范围检查即可：

1. 生成命令正常结束，五个页面可以打开。
2. 在电脑和手机宽度下没有横向滚动、遮挡或异常换行。
3. 日期、投稿入口、联系人等共用内容在相关页面一致。
4. 调整过交互或图片时，检查标签切换、图片放大、手机菜单、个人主页和简介展开。
5. 调整过时间或场地时，核对页面、议程和下载的日历一致。

修改布局后，建议检查 320、360、390、768、1024、1440px 等屏幕宽度。

<a id="section-9"></a>

## 9. 部署到静态托管服务

<a id="section-9-1"></a>

### 9.1 发布文件与维护源码

运行页面生成命令后，网站运行需要：

```text
index.html
cfp.html
schedule.html
speakers.html
organizers.html
assets/
```

发布包还应保留 `THIRD_PARTY_NOTICES.txt` 及第三方文件中的许可声明。保留完整 `assets/` 最容易避免漏掉大图、透明 Logo 或日历。原始素材和源码可以在维护仓库中完整保留。

`README.md`、`README_CN.txt`、`LOGO_EDIT.md` 和 `scripts/` 不参与浏览器运行；`.preview/`、日志和旧 ZIP 包不需要发布。

当前构建结果直接写在项目根目录，没有 `dist/` 目录。选择网站根目录时，应指向包含 `index.html` 的这一层，而不是源码 ZIP 或外层目录。

页面使用相对路径，适合部署在域名根目录或仓库子路径。不要把资源路径随意改成以 `/assets/` 开头的形式，否则仓库子路径部署时可能找不到文件。

<a id="section-9-2"></a>

### 9.2 GitHub Pages 示例

本项目可以直接发布已生成的静态文件：

1. 将上述页面和资源放在选定发布分支的根目录，或者统一放入 `docs/` 目录。
2. 在仓库的 **Settings → Pages** 中，选择 **Deploy from a branch**。
3. 选择实际存放网站文件的分支，以及对应的根目录或 `docs/`，保存配置。
4. 等待部署完成，使用 Pages 设置中显示的站点地址检查五个页面及资源加载。

GitHub Pages 的分支发布不会自动执行本项目的 `node scripts/build.mjs`；修改模板后，应先在本地生成并提交更新后的 HTML。具体入口及发布源配置见 [GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

当前源码未提供自定义部署工作流或域名配置。本地 `127.0.0.1` 预览地址与线上站点是两个环境；本地修改不会自动同步到已经发布的网站。

当前线上地址：

- 仓库：[github.com/agentic-mobility-intelligence/wsdm2027](https://github.com/agentic-mobility-intelligence/wsdm2027)
- 网站：[agentic-mobility-intelligence.github.io/wsdm2027](https://agentic-mobility-intelligence.github.io/wsdm2027/)

组织 `agentic-mobility-intelligence` 代表系列品牌，仓库名代表届次。以后举办新一届时，在同一组织下新建对应仓库（如 `wsdm2028`）即可，各届网站互不影响。

发布源已设为 `main` 分支根目录（`/`）。更新流程为：修改 `scripts/` 中的源文件 → 本地运行 `node scripts/build.mjs` → 提交生成的 HTML 与资源 → `git push`。推送后 GitHub Pages 会自动重新发布，无需手动上传文件。

<a id="section-10"></a>

## 10. 常见问题

| 问题 | 检查方法 |
| --- | --- |
| `node` 不是可识别命令 | 检查 Node.js 是否安装，并重新打开终端；用 `node --version` 确认 |
| 提示找不到 `scripts/serve.mjs` | 当前目录应包含 `scripts/`；先进入源码目录再运行命令 |
| `EADDRINUSE` / 端口占用 | 停止自己不再使用的预览服务，或通过 `PORT` 改用其他端口 |
| 改了文字但网页没变 | 是否修改源文件并执行生成？是否打开了正确端口或正确源码目录？ |
| 线上仍是旧内容 | 是否已上传新 HTML / CSS / 图片，部署是否完成？必要时强制刷新浏览器 |
| 修改 CSS 没有效果 | 检查选择器、媒体查询、后加载样式和缓存；`images.css` 最后加载 |
| Logo 又出现白色或灰色矩形底 | 检查是否引用了 `*-transparent.png`，以及是否额外添加了背景或滤镜 |
| 图示能预览但不能放大 | 检查同名完整 `.png` 是否也已上传，以及 `data-lightbox` 和 `site.js` 是否保留 |
| 老师称谓或主页丢失 | 检查 `organizers.name` 与 `organizerProfiles` 的键是否一致 |
| 投稿按钮仍未出现 | 确认 `event.submissionUrl` 非空，并重新生成页面 |
| 时间改了，但日历没有改 | 同步修改 `build.mjs` 中的日历常量后重新生成 |
| 新图片上传后不显示 | 检查文件名大小写、扩展名及相对路径；本地能打开不代表线上路径一定一致 |
| 本地打开 `/scripts/` 或隐藏目录提示 403 | 预览服务器主动限制了这些路径，正常网页预览不需要访问它们 |

<a id="section-11"></a>

## 11. 交接时仍需确认的信息

当前投稿截止和通知日期见第 4.1 节。交接时仍需确认：

- Workshop 接收状态，以及各页面对应的正式表述。
- 正式投稿系统地址。
- 具体场地、最终时段和议程。
- 已确认的 invited speakers、panelists、演讲题目和摘要。
- 论文篇幅、评审、发表及现场展示的最终要求。
- 如需公布，作者终稿期限与注册入口。

正式发布前，组织者还应核对人员姓名、职称、单位、联系方式和简介。

<a id="section-12"></a>

## 12. 来源与相关说明

- 主题、动机、目标、人员简介和初步议程：AMI’27 Proposal 及组织者确认的信息。
- 日期依据：[WSDM 2027 Workshop 官方页面](https://www.wsdm-conference.org/2027/cfworkshops.html)。
- 原始网站模板：Learning with Knowledge Graphs WSDM2023。
- Bootstrap v3.3.5 的 MIT 许可及模板说明：[THIRD_PARTY_NOTICES.txt](THIRD_PARTY_NOTICES.txt)。
- AMI Logo：项目横向徽标；WSDM Logo 来源见第三方说明；透明处理记录见 [LOGO_EDIT.md](LOGO_EDIT.md)。

本指南描述当前项目的实际结构与维护方式。以后修改模板或生成逻辑时，应同步维护对应说明。
