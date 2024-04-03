package service

import (
	"backend/internal/model"
	"backend/internal/repository/mariadb"
	"backend/internal/util"
	"errors"
)

// UserService provides user services.
type UserService struct {
	UserRepo *mariadb.UserRepository
}

// NewUserService creates a new UserService.
func NewUserService(userRepo *mariadb.UserRepository) *UserService {
	return &UserService{UserRepo: userRepo}
}

// Authenticate checks if the username and password are correct.
func (s *UserService) Authenticate(username, password string) (*model.BpUsers, error) {
	user, err := s.UserRepo.FindByUsername(username)
	if err != nil {
		return nil, err
	}

	if !util.CheckPasswordHash(password, user.Userpwd) {
		return nil, errors.New("invalid username or password")
	}

	return user, nil
}

// CreateUser creates a new user with encrypted password.
func (s *UserService) CreateUser(username, password, nickname, email string) (*model.BpUsers, error) {
	// Encrypt the password
	hashedPassword, err := util.HashPassword(password)
	if err != nil {
		return nil, err
	}

	// Construct the user model
	newUser := &model.BpUsers{
		Username: username,
		Userpwd:  hashedPassword,
		Nickname: nickname,
		Email:    email,
		// Ensure that you handle the UpdateDate field appropriately
		// depending on your application's requirements
	}

	// Save the user to the database
	err = s.UserRepo.Create(newUser)
	if err != nil {
		return nil, err
	}

	return newUser, nil
}
