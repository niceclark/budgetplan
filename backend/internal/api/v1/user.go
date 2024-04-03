package v1

import (
	"backend/internal/service"
	"backend/internal/util"
	"backend/pkg/logger"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"net/http"
)

// LoginRequest defines the request body for login.
type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type RegisterRequest struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
	Nickname string `json:"nickname" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
}

// Login handles the login request.
func Login(c *gin.Context, userService *service.UserService) {
	var req LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user, err := userService.Authenticate(req.Username, req.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid username or password"})
		return
	}

	// Check if the user.Id is not nil to avoid panic
	if user.Id == nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User ID is nil"})
		return
	}

	// 生成Token，Now that we've ensured user.Id is not nil, dereference it to get the value
	token, err := util.GenerateToken(*user.Id) // Dereference user.Id here
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
		return
	}

	logger.Log.Infof("Token: %s", token)
	// 返回Token和用户信息
	c.JSON(http.StatusOK, gin.H{
		"token":    token,
		"Id":       user.Id,
		"Username": user.Username,
		"Nickname": user.Nickname,
		"Email":    user.Email,
	})
}

// Register handles the user registration request.
func Register(c *gin.Context, userService *service.UserService) {
	// 检查是否允许注册
	if !viper.GetBool("REGISTER") {
		c.JSON(http.StatusForbidden, gin.H{"error": "Registration is disabled"})
		return
	}

	var req RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	_, err := userService.CreateUser(req.Username, req.Password, req.Nickname, req.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Registration failed"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Registration successful"})
}
