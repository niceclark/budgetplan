package middleware

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// CORSMiddleware creates a CORS middleware.
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 设置允许的源，这里为了示例，我们允许所有源
		// 在生产环境中，你应该设置为你的前端应用的域名
		//c.Writer.Header().Set("Access-Control-Allow-Origin", os.Getenv("CORS_ALLOW_ORIGIN"))
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		// 设置是否允许凭证
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		// 设置允许的头部
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		// 设置允许的HTTP方法
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")
		// 设置预检请求的缓存时间
		c.Writer.Header().Set("Access-Control-Max-Age", "86400") // Cache for 1 day

		// 检测是否为预检请求，并给出相应的响应
		if c.Request.Method == "OPTIONS" {
			//这个函数是Go语言中处理HTTP请求的一个函数。它用于向客户端发送一个状态码为204（NoContent）的响应，表示服务器成功处理了请求，但不需要返回任何实体内容。调用这个函数会终止当前的HTTP请求处理流程，并向客户端发送一个空的响应体。
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}
