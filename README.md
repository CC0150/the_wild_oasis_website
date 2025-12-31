# The Wild Oasis - 豪华小屋预订网站

一个基于 Next.js 构建的现代化豪华小屋预订平台，坐落于浙江莫干山，为用户提供温馨而奢华的山间度假体验。

## 🏔️ 项目简介

The Wild Oasis 是一个专为豪华山间小屋预订而设计的网站。网站采用现代化设计，提供直观的用户界面，让用户可以轻松浏览和预订心仪的小屋。我们致力于为每位客人创造与自然重新连接、与家人共享简单快乐的难忘体验。

## ✨ 主要功能

### 核心功能

- **小屋浏览**: 浏览可预订的豪华小屋，查看详细信息
- **智能筛选**: 按容量筛选小屋，满足不同团体需求
- **在线预订**: 实时预订系统，支持日期选择和预订确认
- **用户账户**: 完整的用户注册、登录和账户管理
- **预订管理**: 查看、编辑和取消个人预订

### 用户体验

- **响应式设计**: 完美适配桌面端和移动端
- **实时更新**: 预订状态实时同步
- **优雅加载**: 流畅的页面切换和加载动画
- **直观导航**: 简洁清晰的导航结构

## 🛠️ 技术栈

### 前端框架

- **Next.js 14**: React 全栈框架，使用 App Router
- **React 18**: 用户界面库
- **JavaScript**: 主要编程语言

### 样式与 UI

- **Tailwind CSS**: 原子化 CSS 框架
- **Heroicons**: 精美图标库
- **自定义组件**: 模块化组件设计

### 后端服务

- **Supabase**: 数据库和身份验证服务
- **NextAuth.js**: 安全的身份验证解决方案

### 状态管理

- **Zustand**: 轻量级状态管理库

### 工具与依赖

- **React Day Picker**: 日期选择器组件
- **Date-fns**: 日期处理工具库
- **SweetAlert2**: 优雅的弹窗提示库
- **ESLint**: 代码质量检查

## 📦 项目结构

```
the_wild_oasis_website/
├── app/                    # Next.js App Router
│   ├── _components/        # 可复用组件
│   │   ├── cabin/         # 小屋相关组件
│   │   ├── filter/        # 筛选组件
│   │   ├── loader/        # 加载组件
│   │   ├── profile/       # 用户资料组件
│   │   ├── reservation/   # 预订相关组件
│   │   └── ...
│   ├── _lib/              # 工具库和配置
│   │   ├── actions.js     # 服务端操作
│   │   ├── auth.js        # 身份验证配置
│   │   ├── data-service.js # 数据服务
│   │   └── supabase.js    # Supabase客户端
│   ├── _styles/           # 全局样式
│   ├── cabins/            # 小屋页面
│   ├── account/           # 用户账户页面
│   ├── login/             # 登录页面
│   ├── about/             # 关于我们页面
│   └── ...
├── public/                # 静态资源
│   ├── about-1.jpg       # 关于页面图片
│   ├── about-2.jpg       # 关于页面图片
│   ├── bg.png            # 背景图片
│   └── logo.png          # 网站Logo
├── .env.production        # 生产环境配置
├── next.config.mjs       # Next.js配置
├── tailwind.config.js    # Tailwind CSS配置
└── package.json          # 项目依赖
```

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 环境配置

创建 `.env.local` 文件并配置以下环境变量：

```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# NextAuth 配置
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# 数据库配置 (如果需要)
DATABASE_URL=your_database_url
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 生产环境构建

```bash
npm run build
npm run start
# 或
yarn build
yarn start
```

## 📱 页面功能

### 主要页面

- **首页** (`/`): 欢迎页面，展示网站主题
- **小屋列表** (`/cabins`): 浏览所有可预订小屋
- **小屋详情** (`/cabins/[cabinId]`): 查看特定小屋详情
- **用户账户** (`/account`): 账户管理和预订历史
- **登录页面** (`/login`): 用户身份验证
- **关于我们** (`/about`): 公司历史和理念介绍

### 用户功能

- **预订管理**: 查看、编辑、取消预订
- **个人资料**: 更新用户信息和偏好
- **预订提醒**: 智能提醒即将到来的预订

## 🎨 设计特色

### 视觉设计

- **自然色调**: 以大地色系为主，营造温馨氛围
- **优雅字体**: 使用 Josefin Sans 字体，增强视觉体验
- **高质量图片**: 精选的实拍图片展示小屋美景

### 交互体验

- **流畅动画**: 平滑的页面过渡效果
- **直观操作**: 简单明了的用户操作流程
- **即时反馈**: 实时的操作反馈和状态提示

## 🔒 安全性

- **身份验证**: 使用 NextAuth.js 确保用户安全
- **数据保护**: Supabase 提供企业级安全保障
- **权限控制**: 严格的用户权限管理系统
- **数据验证**: 前后端双重数据验证

## 🌟 项目亮点

1. **现代化架构**: 基于 Next.js 14 的最新特性
2. **响应式设计**: 完美适配各种设备
3. **组件化开发**: 高度模块化的组件结构
4. **性能优化**: 图片优化、代码分割等性能优化
5. **用户体验**: 注重细节的用户界面设计
6. **可维护性**: 清晰的代码结构和文档

## 📈 未来规划

- [ ] 多语言支持
- [ ] 移动端 APP
- [ ] 在线支付集成
- [ ] 评价系统
- [ ] 社交分享功能
- [ ] 地图集成
- [ ] 天气信息

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- **项目地址**: [GitHub Repository]
- **问题反馈**: [Issues]
- **邮箱**: contact@thewildoasis.com

---

**The Wild Oasis** - 您的山间度假首选，体验自然与舒适的完美融合。

_自 1962 年起，由我们家族精心经营，为您创造难忘的度假回忆。_
