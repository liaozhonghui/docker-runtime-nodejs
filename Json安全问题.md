JSON 流行原因：

1. JSON 能够与 JavaScript 无缝对接
2. JSON 能够轻松的实现跨域

问题：

1. 为什么 XMLHttpRequest 需要遵循同源策略？如果不准守同源策略，用户在浏览网站时，黑客就可以发起请求，获取到内部网站数据。
2. XMLHttpRequest 请求会不会带 cookie? 同域情况下会，不同域情况下不会，如果服务端设置 Access-Control-Allow-Credential:true, 也是可以跨域带 cookie 的
3. `<script>`标签请求会不会带 cookie? 会
4. 向一个其他域名的网站提交 form，会不会带 cookie? 会
5. CORS 请求能不能带 cookie? 默认不带，但是服务器设置 access-control-allow-credentail:true 的时候，也会带 cookie

JSON 注入：

1. 字符串拼接, 拼接注入数据

```java
String.format("{user: %s, password: %s}", 'test', "12345',admin: 'true");
```

2. http parameters 参数字符串，拼接注入数据

解决方式： 浏览器使用 JSON.parse 而不是 eval 去执行 JSON 转化

JSONP callback 注入

总结：

- 禁止手动拼接 JSON 字符串，使用 JSON 库
- jsonp 请求的 callback 要严格过滤，只允许* 0-9, a-z, A-Z 即合法的 javascript 函数命名 `^[0-9a-zA-Z*.]+$`
- jsonp 也要判断合法性，判断用户是否登录，是否具有操作权限
- 设置好 ContentType 放置返回字符串数据解析成默认格式
- 以 jsonp 方式调用第三方的接口，实际相当于引入了第三方的 JS 代码，要慎重。
