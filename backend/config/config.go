package config

import (
	"backend/pkg/logger"
	"fmt"
	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

func LoadConfig() {
	viper.AddConfigPath(".")           // 或者指定.env文件所在的具体目录
	viper.SetConfigName("config.conf") // 配置文件名称
	viper.SetConfigType("env")         // 设置配置文件类型为.env

	viper.AutomaticEnv() // 读取匹配的环境变量，自动覆盖环境变量

	// 尝试读取配置文件
	if err := viper.ReadInConfig(); err != nil {
		logger.Log.Fatalf("Error reading config file, %s", err) // 使用Logrus记录致命错误
	}

	// 开始监视配置文件
	viper.WatchConfig()
	// 配置变化后的执行
	viper.OnConfigChange(func(e fsnotify.Event) {
		// 配置文件发生变更之后会调用的回调函数

		// 当配置文件发生更改时，重新加载配置
		if err := viper.ReadInConfig(); err != nil {
			logger.Log.Warnf("Error re-reading config file after change: %s", err)
		} else {
			fmt.Println("Config reloaded successfully.")
			// 在这里执行根据新配置更新业务逻辑的代码
			updateBusinessLogicWithNewConfig()
		}
	})
}

func updateBusinessLogicWithNewConfig() {
	// 根据新配置更新你的业务逻辑
}
