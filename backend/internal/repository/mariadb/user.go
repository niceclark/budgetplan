package mariadb

import (
	"backend/internal/model"
	"gorm.io/gorm"
)

// UserRepository handles the user operations with the database.
type UserRepository struct {
	DB *gorm.DB
}

// NewUserRepository creates a new UserRepository.
func NewUserRepository(db *gorm.DB) *UserRepository {
	return &UserRepository{DB: db}
}

// FindByUsername finds a user by username.
func (repo *UserRepository) FindByUsername(username string) (*model.BpUsers, error) {
	var user model.BpUsers
	result := repo.DB.Where("username = ?", username).First(&user)
	if result.Error != nil {
		return nil, result.Error
	}
	return &user, nil
}

// Create saves a new user to the database.
func (repo *UserRepository) Create(user *model.BpUsers) error {
	result := repo.DB.Create(user) // GORM's Create method automatically handles inserting records.
	return result.Error
}
