
### 前端请求时携带令牌
前端存储令牌：前端在接收到令牌后，将其存储在某处，如localStorage、sessionStorage或cookies中。
前端每次发起请求时，将令牌添加到请求的Authorization头中：
```typescript
fetch('api_endpoint', {
method: 'GET', // or 'POST'
headers: {
'Authorization': `Bearer ${yourToken}`
}
})
```

如果不想暴露后端API地址，在配置nginx时可以添加如下
```nginx
location /api/ {
    proxy_pass http://backend-api-url/; # 你的后端API地址
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```