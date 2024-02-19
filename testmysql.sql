-- Active: 1707420669911@@127.0.0.1@3306@auth_db_dev
show DATABASES;
use auth_db_dev;
show tables;

select * from users;
desc users;
 
select * from roles;

select * from user_roles;
insert into user_roles (createdAt,updatedAt,UserId, RoleId) values (2024-02-19 05:12:53,2024-02-19 05:12:53,1, 1);