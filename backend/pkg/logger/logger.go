package logger

import (
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
	"os"
)

var Log *logrus.Logger

func InitLogger() {
	Log = logrus.New()
	// 如果没有进一步的重定向或管道操作，日志将会显示在终端窗口上，如果是作为后台服务运行，则可能记录在系统的控制台日志或者守护进程的日志中
	Log.Out = os.Stdout

	// 将日志保存到指定位置
	//Logfile, _ = os.OpenFile("log/searchLaptop.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	//Log.SetOutput(Logfile)

	// 根据环境变量来设置日志级别
	logLevel, err := logrus.ParseLevel(viper.GetString("LOG_LEVEL"))
	if err != nil {
		Log.SetLevel(logrus.InfoLevel) // 默认级别
	} else {
		Log.SetLevel(logLevel)
	}
}
