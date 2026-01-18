# 李博洋 · 个人简历网站

高级软件测试工程师的个人品牌官网，展示测试工程化实践与职业经历。

## 特性

- 🎨 **现代设计** - 简洁、专业的视觉设计，支持深色/浅色主题切换
- 📱 **响应式布局** - 完美适配桌面、平板、手机多端设备
- ⚡ **高性能** - 静态站点生成，CDN 分发，极速加载
- 🔍 **SEO 友好** - 语义化 HTML，完善的元信息配置
- 🛠️ **易于维护** - 内容与展示分离，JSON 驱动

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS + CSS Variables
- **动效**: Framer Motion
- **图标**: Lucide React
- **部署**: Vercel

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

构建产物输出到 `out/` 目录，可直接部署到任意静态托管服务。

## 项目结构

```
src/
├── app/                    # 页面路由
│   ├── page.tsx           # 首页
│   ├── about/             # 关于页
│   ├── projects/          # 项目经历
│   ├── skills/            # 技能体系
│   └── contact/           # 联系方式
├── components/            # React 组件
│   ├── layout/           # 布局组件
│   └── ui/               # UI 组件
├── content/              # 内容数据
│   ├── profile.json      # 个人信息
│   ├── projects.json     # 项目经历
│   ├── skills.json       # 技能数据
│   └── education.json    # 教育背景
└── app/globals.css       # 全局样式与设计令牌
```

## 内容编辑

所有内容存储在 `src/content/` 目录的 JSON 文件中，修改后重新构建即可生效。

### 修改个人信息

编辑 `src/content/profile.json`：

```json
{
  "name": "你的姓名",
  "title": "你的职位",
  "location": "所在城市",
  ...
}
```

### 添加项目经历

编辑 `src/content/projects.json`，在 `projects` 数组中添加新项目。

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动构建部署

### 其他静态托管

运行 `npm run build` 后，将 `out/` 目录内容部署到任意静态文件服务器。

## 自定义主题

编辑 `src/app/globals.css` 中的 CSS 变量来自定义配色：

```css
:root {
  --color-accent: #0D9488;  /* 修改主题色 */
  ...
}
```

## License

MIT
