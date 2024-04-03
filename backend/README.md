### Database

```bash
# mariadb
CREATE DATABASE bp_budgetplan;
CREATE USER 'budgetplan'@'%' IDENTIFIED BY 'v9oX8V9zeJf9EV';
GRANT ALL PRIVILEGES ON  bp_budgetplan.* TO 'budgetplan'@'%';
```
```bash
# mongodb
docker exec -it mongo mongosh
use admin
db.auth('root','YCveF9YuiaPWZ3')
use budgetplan
db.createUser({ user:'budgetplan',pwd:'v9oX8V9zeJf9EV',roles:[{role:'dbOwner', db: 'budgetplan'}]})
```
