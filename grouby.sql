create database grouby;

use grouby;

set charset utf8;
alter database grouby default character set utf8;
alter table grouby_user convert to character set utf8;
alter table grouby_group convert to character set utf8;
alter table grouby_groupmember convert to character set utf8;
alter table grouby_friend convert to character set utf8;

create table grouby_user (
	user_id varchar(50),
    user_name varchar(50),
    user_password varchar(50),
    user_phone varchar(50),
    reg_date datetime,
    mod_date datetime,
    primary key(user_id)
);

create table grouby_group (
	group_id int auto_increment,
    group_name varchar(50),
    reg_id varchar(50),
    reg_date datetime,
    mod_date datetime,
    primary key(group_id)
);

create table grouby_groupmember (
	group_id int,
    user_id varchar(50),
    reg_date datetime,
    primary key(group_id, user_id)
);

create table grouby_friend (
	user_id varchar(50),
    friend_id varchar(50),
    reg_date datetime,
    primary key(user_id, friend_id)
);

select * from grouby_user;
select * from grouby_friend;
select * from grouby_group as grp, grouby_groupmember as grpmember
where grp.group_id = grpmember.group_id and grp.group_id in (select group_id from grouby_groupmember where user_id = 'aaa');
select *
from grouby_user
where user_id not in (select friend_id from grouby_friend where user_id = 'qqq') and user_id != 'qqq';