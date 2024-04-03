package service

import (
	"backend/internal/model"
	"backend/internal/repository/mariadb"
)

type AccountService struct {
	repo *mariadb.AccountRepository
}

func NewAccountService(repo *mariadb.AccountRepository) *AccountService {
	return &AccountService{repo: repo}
}

// 实现增删改查业务逻辑...

// GetAccountByID gets an account by its ID.
func (s *AccountService) GetAccountByID(id uint) (*model.BpAccount, error) {
	return s.repo.GetByID(id)
}
