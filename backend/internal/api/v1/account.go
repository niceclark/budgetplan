package v1

import (
	"backend/internal/service"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// GetAccount handles the request to get an account by ID.
func GetAccount(c *gin.Context, accountService *service.AccountService) {
	accountID := c.Param("id")
	id, err := strconv.ParseUint(accountID, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid account ID"})
		return
	}

	account, err := accountService.GetAccountByID(uint(id))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Account not found"})
		return
	}

	c.JSON(http.StatusOK, account)
}

// 其他CRUD函数（CreateAccount, UpdateAccount, DeleteAccount）类似实现
