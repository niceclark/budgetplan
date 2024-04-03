package model

import "time"

// BpUsers User represents the user model.
type BpUsers struct {
	Id         *int       `gorm:"column:id" json:"Id"`                        //type:*int         comment:序号        version:2024-02-22 22:48
	Username   string     `gorm:"column:username;primaryKey" json:"Username"` //type:string       comment:账号        version:2024-02-22 22:48
	Userpwd    string     `gorm:"column:userpwd" json:"Userpwd"`              //type:string       comment:密码        version:2024-02-22 22:48
	Nickname   string     `gorm:"column:nickname" json:"Nickname"`            //type:string       comment:昵称        version:2024-02-22 22:48
	Email      string     `gorm:"column:email" json:"Email"`                  //type:string       comment:邮箱        version:2024-02-22 22:48
	UpdateDate *time.Time `gorm:"column:update_date" json:"UpdateDate"`       //type:*time.Time   comment:更新日期    version:2024-02-22 22:48
}

// TableName specifies table name for BpUsers model.
func (BpUsers) TableName() string {
	return "bp_users"
}
