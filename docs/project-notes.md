# 项目学习笔记与面试讲解

## 1. 项目一句话介绍

这是一个基于 Playwright + TypeScript 的 Web E2E 自动化测试项目，测试对象是 SauceDemo 电商练习网站，覆盖登录、商品列表、商品详情、购物车和结账等核心业务流程。

## 2. 为什么选择这个项目

这个项目适合软测实习简历，原因是：

1. 场景通用：电商业务常见，面试官容易理解。
2. 流程完整：从登录到结账，覆盖一个比较完整的用户路径。
3. 技术实用：Playwright 是常见的 Web 自动化测试工具。
4. 代码不复杂：适合初学者理解和复盘。
5. 有交付物：包含自动化脚本、测试用例文档、缺陷报告模板和 HTML 测试报告。

## 3. 项目测试范围

本项目 V1 覆盖 4 个模块：

| 模块 | 覆盖内容 |
| --- | --- |
| 登录 | 正常用户登录、锁定用户登录失败 |
| 商品 | 商品列表、商品详情、商品排序 |
| 购物车 | 添加商品、购物车页面校验 |
| 结账 | 从购物车到订单完成 |

## 4. 自动化用例数量

当前共 12 条自动化测试用例：

| 编号 | 用例名称 | 文件 |
| --- | --- | --- |
| 1 | standard user can log in successfully | tests/login.spec.ts |
| 2 | locked out user should see error message | tests/login.spec.ts |
| 3 | product list should be visible after login | tests/product.spec.ts |
| 4 | user can open product detail page | tests/product.spec.ts |
| 5 | user can sort products by price from low to high | tests/product.spec.ts |
| 6 | user can add one product to cart | tests/cart.spec.ts |
| 7 | cart page should show added product | tests/cart.spec.ts |
| 8 | user can complete checkout flow | tests/checkout.spec.ts |`r`n| 9 | login should show error when username is empty | tests/error.spec.ts |`r`n| 10 | login should show error when password is empty | tests/error.spec.ts |`r`n| 11 | login should show error with wrong password | tests/error.spec.ts |`r`n| 12 | checkout should show error when first name is empty | tests/error.spec.ts |

## 5. 核心 Playwright 语法

### 打开页面

```ts
await page.goto('/');
```

项目配置了 baseURL，所以 `/` 代表：

```text
https://www.saucedemo.com/
```

### 输入内容

```ts
await page.getByPlaceholder('Username').fill('standard_user');
```

含义：找到 placeholder 是 Username 的输入框，然后输入 standard_user。

### 点击按钮

```ts
await page.getByRole('button', { name: 'Login' }).click();
```

含义：找到名字是 Login 的按钮，然后点击。

### 定位元素

```ts
await page.locator('[data-test="checkout"]').click();
```

含义：通过 data-test 属性定位元素。data-test 通常比较稳定，适合自动化测试。

### 断言

```ts
await expect(page.getByText('Products')).toBeVisible();
```

含义：检查页面上是否能看到 Products。

## 6. 项目配置说明

配置文件：playwright.config.ts

```ts
baseURL: 'https://www.saucedemo.com'
screenshot: 'only-on-failure'
trace: 'retain-on-failure'
```

含义：

| 配置 | 作用 |
| --- | --- |
| baseURL | 设置测试网站基础地址 |
| screenshot | 用例失败时自动截图 |
| trace | 用例失败时保留 Trace 调试文件 |
| reporter | 生成命令行报告和 HTML 报告 |

## 7. 如何运行项目

进入项目目录：

```bash
cd /d D:\playwright
```

运行全部测试：

```bash
npm.cmd test
```

打开浏览器看自动执行过程：

```bash
npm.cmd run test:headed
```

查看 HTML 报告：

```bash
npm.cmd run report
```

## 8. 测试结果说明

当前执行结果：

```text
8 passed
```

含义：8 条自动化测试全部通过。

如果测试失败，可以查看：

1. 终端错误信息
2. playwright-report HTML 报告
3. test-results 目录下的截图和 Trace 文件

## 9. 面试讲解版本

如果面试官问：你这个项目做了什么？

可以回答：

```text
我做了一个基于 Playwright + TypeScript 的 Web 自动化测试项目，测试对象是 SauceDemo 电商练习网站。项目围绕电商核心业务流程设计了 12 条 E2E 自动化测试用例，覆盖登录、商品列表、商品详情、商品排序、购物车和结账流程，并配置了 HTML 测试报告、失败截图和 Trace 调试，方便查看执行结果和定位失败原因。
```

如果面试官问：你怎么设计测试用例？

可以回答：

```text
我先按业务模块拆分测试范围，包括登录、商品、购物车和结账。然后针对每个模块设计正向和异常场景，比如登录模块既测试正常用户登录成功，也测试锁定用户登录失败；购物车模块既检查角标变化，也进入购物车页面确认商品确实存在。
```

如果面试官问：你怎么判断用例是否通过？

可以回答：

```text
每条用例都有明确断言，例如登录成功后检查 URL 是否进入 inventory 页面，商品列表检查商品数量是否为 6，购物车检查角标是否为 1，结账完成后检查页面是否出现 Thank you for your order。
```

如果面试官问：你遇到失败会怎么排查？

可以回答：

```text
我会先看终端报错，确认是定位失败、断言失败还是页面加载失败；然后打开 HTML 报告查看失败用例；如果还不清楚，会查看失败截图和 Trace，回放浏览器执行过程，定位是哪一步没有达到预期。
```

## 10. 简历描述

```text
基于 Playwright + TypeScript 搭建 Web E2E 自动化测试项目，围绕电商网站登录、商品列表、商品详情、商品排序、购物车和结账等核心业务流程设计并实现 12 条自动化测试用例，支持 HTML 测试报告、失败截图和 Trace 调试，并整理测试用例文档与缺陷报告模板。
```

## 11. 后续优化方向

V2 可以继续增加：

1. 更多异常场景，例如空用户名、错误密码、结账信息为空。
2. Page Object Model，把页面操作封装成页面类。
3. JSON 或 JUnit 报告，用于接入 CI。
4. GitHub Actions，实现自动运行测试。
5. 更完整的缺陷示例和测试总结报告。

