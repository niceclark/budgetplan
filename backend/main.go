package main

import (
	"backend/config"
	v1 "backend/internal/api/v1"
	"backend/internal/middleware"
	"backend/internal/repository/mariadb"
	"backend/internal/service"
	"backend/pkg/logger"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"net/http"
)

func main() {
	// 初始化日志和配置
	logger.InitLogger()
	config.LoadConfig()

	// 创建数据库连接
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		viper.GetString("MARIADB_USER"), viper.GetString("MARIADB_PASSWORD"), viper.GetString("MARIADB_HOST"), viper.GetString("MARIADB_PORT"), viper.GetString("MARIADB_DB_NAME"))
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		logger.Log.Fatalf("failed to connect database, %s", err)
	}

	userRepo := mariadb.NewUserRepository(db)
	userService := service.NewUserService(userRepo)

	accountRepo := mariadb.NewAccountRepository(db)
	accountService := service.NewAccountService(accountRepo)

	r := gin.Default()

	r.Use(middleware.CORSMiddleware())

	// 公开路由
	r.POST("/api/login", func(c *gin.Context) {
		v1.Login(c, userService)
	})

	r.POST("/api/register", func(c *gin.Context) {
		v1.Register(c, userService)
	})

	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Budget Plan !")
	})

	// 受保护的路由
	authRoutes := r.Group("/")
	authRoutes.Use(middleware.AuthMiddleware())
	{
		authRoutes.GET("/api/account/:id", func(c *gin.Context) {
			v1.GetAccount(c, accountService)
		})

		// 添加其他受保护的路由
	}

	r.Run() // 在 localhost:8080 上监听
}
