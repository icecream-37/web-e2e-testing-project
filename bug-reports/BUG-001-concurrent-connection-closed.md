# BUG-001 并发执行时部分用例偶发连接关闭

## Bug 标题

Playwright 多 worker 并发执行时，部分用例访问 SauceDemo 首页偶发连接关闭。

## Bug 编号

BUG-001

## 所属模块

测试执行稳定性

## 严重程度

中

## 优先级

P1

## 测试环境

| 项目 | 内容 |
| --- | --- |
| 操作系统 | Windows |
| 测试工具 | Playwright |
| 浏览器 | Chromium |
| 测试网站 | https://www.saucedemo.com |
| 执行命令 | npm.cmd test |

## 前置条件

1. Playwright 项目依赖已安装。
2. 测试配置未限制 worker 数量。
3. 执行全部自动化测试用例。

## 复现步骤

1. 进入项目目录 `D:\playwright`。
2. 执行命令：

```bash
npm.cmd test
```

3. 观察测试执行结果。

## 实际结果

部分用例在访问 SauceDemo 首页时失败，错误信息类似：

```text
page.goto: net::ERR_CONNECTION_CLOSED at https://www.saucedemo.com/
```

失败用例集中出现在多个测试并发启动访问网站时。

## 预期结果

所有测试用例应稳定访问 SauceDemo 网站，并继续执行后续操作与断言。

## 初步分析

该问题更可能与第三方练习网站的网络连接稳定性或并发访问限制有关，不一定是被测业务功能缺陷。

由于本项目以学习和简历展示为目标，测试稳定性优先级高于执行速度，因此选择降低并发执行数量。

## 处理方案

在 `playwright.config.ts` 中增加：

```ts
workers: 1
```

使测试按顺序执行，避免短时间内多个浏览器上下文同时访问第三方练习网站。

## 修复后验证

重新执行：

```bash
npm.cmd test
```

验证结果：

```text
Running 12 tests using 1 worker
12 passed
```

## 当前状态

已处理。

## 附件

- HTML 报告：`playwright-report/index.html`
- Trace 文件：失败时可在 `test-results` 目录中查看
