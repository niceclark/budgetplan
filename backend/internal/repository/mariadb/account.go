package mariadb

import (
	"backend/internal/model"
	"gorm.io/gorm"
)

type AccountRepository struct {
	DB *gorm.DB
}

func NewAccountRepository(db *gorm.DB) *AccountRepository {
	return &AccountRepository{DB: db}
}

// 实现增删改查方法...

// GetByID returns an account by its ID.
func (repo *AccountRepository) GetByID(id uint) (*model.BpAccount, error) {
	var account model.BpAccount
	result := repo.DB.First(&account, id)
	return &account, result.Error
}

// Create saves a new account in the database.
func (repo *AccountRepository) Create(account *model.BpAccount) error {
	return repo.DB.Create(account).Error
}

// Update modifies an existing account.
func (repo *AccountRepository) Update(account *model.BpAccount) error {
	return repo.DB.Save(account).Error
}

// Delete removes an account from the database.
func (repo *AccountRepository) Delete(id uint) error {
	return repo.DB.Delete(&model.BpAccount{}, id).Error
}

// List returns a list of accounts.
func (repo *AccountRepository) List() ([]model.BpAccount, error) {
	var accounts []model.BpAccount
	result := repo.DB.Find(&accounts)
	return accounts, result.Error
}
