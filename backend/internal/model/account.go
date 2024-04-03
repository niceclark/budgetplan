package model

import "time"

type BpAccount struct {
	Id                   *int       `gorm:"column:primaryKey;id" json:"Id"`                            //type:*int         comment:序号          version:2024-02-23 14:59
	AccountName          string     `gorm:"column:account_name" json:"AccountName"`                    //type:string       comment:账户名        version:2024-02-23 14:59
	AccountType          string     `gorm:"column:account_type" json:"AccountType"`                    //type:string       comment:账户类型      version:2024-02-23 14:59
	FixedCreditLimit     *float64   `gorm:"column:fixed_credit_limit" json:"FixedCreditLimit"`         //type:*float64     comment:信用额度      version:2024-02-23 14:59
	StatementEndDay      *int       `gorm:"column:statement_end_day" json:"StatementEndDay"`           //type:*int         comment:账单日        version:2024-02-23 14:59
	DueDay               *int       `gorm:"column:due_day" json:"DueDay"`                              //type:*int         comment:还款日        version:2024-02-23 14:59
	AccountNumber        string     `gorm:"column:account_number" json:"AccountNumber"`                //type:string       comment:账户号        version:2024-02-23 14:59
	AccountNetwork       string     `gorm:"column:account_network" json:"AccountNetwork"`              //type:string       comment:网络          version:2024-02-23 14:59
	AccountOwner         string     `gorm:"column:account_owner" json:"AccountOwner"`                  //type:string       comment:账户持有人    version:2024-02-23 14:59
	ExpirationDate       *time.Time `gorm:"column:expiration_date" json:"ExpirationDate"`              //type:*time.Time   comment:有效期        version:2024-02-23 14:59
	AccountPlatform      string     `gorm:"column:account_platform" json:"AccountPlatform"`            //type:string       comment:所属平台      version:2024-02-23 14:59
	TemporaryCreditLimit *float64   `gorm:"column:temporary_credit_limit" json:"TemporaryCreditLimit"` //type:*float64     comment:临时额度      version:2024-02-23 14:59
	DefaultCurrency      string     `gorm:"column:default_currency" json:"DefaultCurrency"`            //type:string       comment:默认货币      version:2024-02-23 14:59
	UpdateDate           *time.Time `gorm:"column:update_date" json:"UpdateDate"`                      //type:*time.Time   comment:更新日期      version:2024-02-23 14:59
}

// TableName 表名:bp_account，账户。
func (BpAccount) TableName() string {
	return "bp_account"
}
