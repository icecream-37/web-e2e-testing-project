# Web E2E Testing Project

这是一个面向软测实习的 Web 自动化测试练习项目。

项目使用 Playwright + TypeScript，对电商练习网站 SauceDemo 的核心业务流程进行 E2E 自动化测试，覆盖登录、商品列表、商品详情、购物车、结账流程和关键异常场景。

## 技术栈

- Playwright
- TypeScript
- npm

## 测试网站

```text
https://www.saucedemo.com
```

常用测试账号：

```text
standard_user / secret_sauce
locked_out_user / secret_sauce
```

## 安装依赖

```bash
npm.cmd install
```

## 运行测试

```bash
npm.cmd test
```

有界面运行：

```bash
npm.cmd run test:headed
```

打开 Playwright UI：

```bash
npm.cmd run test:ui
```

打开 HTML 报告：

```bash
npm.cmd run report
```

## 项目结构

```text
D:\playwright
├─ tests
│  ├─ login.spec.ts
│  ├─ product.spec.ts
│  ├─ cart.spec.ts
│  ├─ checkout.spec.ts
│  └─ error.spec.ts
├─ test-cases
│  └─ test-cases.md
├─ bug-reports
│  ├─ bug-report-template.md
│  └─ BUG-001-concurrent-connection-closed.md
├─ docs
│  ├─ project-notes.md
│  └─ test-summary-report.md
├─ playwright.config.ts
├─ package.json
└─ README.md
```

## 测试范围

- 登录成功
- 锁定用户登录失败
- 用户名为空提示
- 密码为空提示
- 错误密码提示
- 商品列表展示
- 商品详情页展示
- 商品排序
- 添加商品到购物车
- 购物车商品校验
- 完成结账流程
- 结账必填项为空提示

## 项目文档

- 测试用例设计：test-cases/test-cases.md
- 测试总结报告：docs/test-summary-report.md
- 缺陷报告模板：bug-reports/bug-report-template.md
- 缺陷报告示例：bug-reports/BUG-001-concurrent-connection-closed.md
- 项目学习笔记与面试讲解：docs/project-notes.md

## 项目亮点

- 基于 Playwright + TypeScript 编写 12 条 Web E2E 自动化测试用例，覆盖登录、商品列表、商品详情、商品排序、购物车、结账及异常输入场景。
- 配置 HTML 测试报告、失败截图和 Trace 调试，支持测试失败后的问题定位。
- 编写测试用例文档、缺陷报告模板、缺陷报告示例和测试总结报告，模拟完整测试交付流程。

