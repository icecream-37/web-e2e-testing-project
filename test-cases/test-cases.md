# 测试用例设计

测试对象：SauceDemo 电商练习网站  
测试地址：https://www.saucedemo.com  
测试工具：Playwright + TypeScript  
浏览器：Chromium

## 测试用例表

| 用例编号 | 模块 | 类型 | 用例标题 | 前置条件 | 测试步骤 | 测试数据 | 预期结果 | 优先级 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TC-001 | 登录 | 正向 | 标准用户登录成功 | 用户进入登录页 | 1. 输入用户名<br>2. 输入密码<br>3. 点击 Login 按钮 | 用户名：standard_user<br>密码：secret_sauce | 成功进入商品列表页，页面显示 Products | P0 |
| TC-002 | 登录 | 异常 | 锁定用户登录失败 | 用户进入登录页 | 1. 输入锁定用户名<br>2. 输入密码<br>3. 点击 Login 按钮 | 用户名：locked_out_user<br>密码：secret_sauce | 页面显示 locked out 错误提示 | P1 |
| TC-003 | 登录 | 异常 | 用户名为空时登录失败 | 用户进入登录页 | 1. 不输入用户名<br>2. 输入密码<br>3. 点击 Login 按钮 | 用户名：空<br>密码：secret_sauce | 页面提示 Username is required | P0 |
| TC-004 | 登录 | 异常 | 密码为空时登录失败 | 用户进入登录页 | 1. 输入用户名<br>2. 不输入密码<br>3. 点击 Login 按钮 | 用户名：standard_user<br>密码：空 | 页面提示 Password is required | P0 |
| TC-005 | 登录 | 异常 | 密码错误时登录失败 | 用户进入登录页 | 1. 输入用户名<br>2. 输入错误密码<br>3. 点击 Login 按钮 | 用户名：standard_user<br>密码：wrong_password | 页面提示用户名和密码不匹配 | P1 |
| TC-006 | 商品 | 正向 | 商品列表展示正常 | 用户已成功登录 | 1. 进入商品列表页<br>2. 检查商品区域<br>3. 统计商品数量 | standard_user / secret_sauce | 页面显示 Products，并展示 6 个商品 | P0 |
| TC-007 | 商品 | 正向 | 商品详情页展示正常 | 用户已成功登录 | 1. 点击 Sauce Labs Backpack<br>2. 查看商品详情页 | 商品：Sauce Labs Backpack | 进入商品详情页，显示商品名和价格 $29.99 | P1 |
| TC-008 | 商品 | 正向 | 商品按价格升序排序 | 用户已成功登录 | 1. 打开排序下拉框<br>2. 选择 Price low to high<br>3. 检查第一个商品价格 | 排序方式：lohi | 第一个商品价格为 $7.99 | P1 |
| TC-009 | 购物车 | 正向 | 添加商品到购物车 | 用户已成功登录 | 1. 点击 Add to cart<br>2. 查看购物车角标 | 商品：Sauce Labs Backpack | 购物车角标显示 1 | P0 |
| TC-010 | 购物车 | 正向 | 购物车页面显示已添加商品 | 用户已成功登录且已添加商品 | 1. 点击购物车图标<br>2. 查看购物车页面商品 | 商品：Sauce Labs Backpack | 购物车页面显示 Your Cart 和 Sauce Labs Backpack | P0 |
| TC-011 | 结账 | 正向 | 用户完成结账流程 | 用户已成功登录且购物车已有商品 | 1. 进入购物车<br>2. 点击 Checkout<br>3. 填写姓名和邮编<br>4. 点击 Continue<br>5. 点击 Finish | First Name：Test<br>Last Name：User<br>Postal Code：100000 | 页面显示 Thank you for your order! | P0 |
| TC-012 | 结账 | 异常 | 结账时姓名为空提示错误 | 用户已成功登录且进入结账信息页 | 1. 添加商品到购物车<br>2. 点击 Checkout<br>3. 不填写 First Name<br>4. 点击 Continue | First Name：空 | 页面提示 First Name is required | P0 |

## 用例设计说明

本项目的测试用例按核心业务流程设计，并补充关键异常场景：

1. 登录模块包含正常登录、锁定用户、空用户名、空密码和错误密码。
2. 商品模块覆盖列表、详情和排序，验证用户浏览商品时的关键功能。
3. 购物车模块验证添加商品后的页面状态和业务结果。
4. 结账模块覆盖完整下单流程，并验证必填字段为空时的错误提示。

## 自动化覆盖关系

| 用例编号 | 自动化脚本 |
| --- | --- |
| TC-001 | tests/login.spec.ts |
| TC-002 | tests/login.spec.ts |
| TC-003 | tests/error.spec.ts |
| TC-004 | tests/error.spec.ts |
| TC-005 | tests/error.spec.ts |
| TC-006 | tests/product.spec.ts |
| TC-007 | tests/product.spec.ts |
| TC-008 | tests/product.spec.ts |
| TC-009 | tests/cart.spec.ts |
| TC-010 | tests/cart.spec.ts |
| TC-011 | tests/checkout.spec.ts |
| TC-012 | tests/error.spec.ts |
