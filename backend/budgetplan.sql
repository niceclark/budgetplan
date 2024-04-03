# DROP TABLE IF EXISTS bp_users;
CREATE TABLE bp_users(
                         `id` INT AUTO_INCREMENT COMMENT '序号' ,
                         `username` VARCHAR(255) NOT NULL  COMMENT '账号' ,
                         `userpwd` VARCHAR(255) NOT NULL  COMMENT '密码' ,
                         `nickname` VARCHAR(90)   COMMENT '昵称' ,
                         `email` VARCHAR(255)   COMMENT '邮箱' ,
                         `update_date` DATETIME   COMMENT '更新日期' ,
                         PRIMARY KEY (id) ,
                         UNIQUE KEY unique_username (username)
)  COMMENT = '用户;';

INSERT INTO bp_users (username, userpwd, nickname, email, update_date)
VALUES ('clark', '666666', 'niceclark', 'clark@clarkke.com', now());

# DROP TABLE IF EXISTS bp_account;
CREATE TABLE bp_account(
                           `id` INT AUTO_INCREMENT COMMENT '序号' ,
                           `account_name` VARCHAR(255) NOT NULL  COMMENT '账户名' ,
                           `account_type` VARCHAR(32) NOT NULL  COMMENT '账户类型' ,
                           `fixed_credit_limit` DECIMAL(24,6)  DEFAULT 0 COMMENT '信用额度' ,
                           `statement_end_day` INT   COMMENT '账单日' ,
                           `due_day` INT   COMMENT '还款日' ,
                           `account_number` VARCHAR(32) NOT NULL  COMMENT '账户号' ,
                           `account_network` VARCHAR(32)   COMMENT '网络' ,
                           `account_owner` VARCHAR(90)   COMMENT '账户持有人' ,
                           `expiration_date` DATETIME   COMMENT '有效期' ,
                           `account_platform` VARCHAR(90)   COMMENT '所属平台' ,
                           `temporary_credit_limit` DECIMAL(24,6)   COMMENT '临时额度' ,
                           `default_currency` VARCHAR(255)   COMMENT '默认货币' ,
                           `update_date` DATETIME   COMMENT '更新日期' ,
                           PRIMARY KEY (id)
)  COMMENT = '账户';
