create database grouby;

use grouby;

set charset utf8;
alter database grouby default character set utf8;
alter table grouby_user convert to character set utf8;
alter table grouby_group convert to character set utf8;
alter table grouby_groupmember convert to character set utf8;
alter table grouby_friend convert to character set utf8;
alter table grouby_spot convert to character set utf8;
alter table grouby_rank convert to character set utf8;
alter table grouby_rank_comp convert to character set utf8;
alter table grouby_tag convert to character set utf8;
alter table grouby_spot_rank convert to character set utf8;
alter table grouby_item convert to character set utf8;
alter table grouby_heart convert to character set utf8;
alter table grouby_upload_file convert to character set utf8;
alter table grouby_comment convert to character set utf8;

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

create table grouby_spot (
	spot_id int auto_increment,
    group_id int,
    spot_name varchar(200),
    reg_id varchar(50),
    reg_date datetime,
    mod_date datetime,
    primary key(spot_id)
);

create table grouby_rank (
	rank_id int,
	spot_id int,
    reg_id varchar(50),
    rank_comp_id int,
    rank_score int,
    reg_date datetime,
    mod_date datetime,
    primary key(rank_id, spot_id, reg_id, rank_comp_id)
);

create table grouby_rank_comp (
	rank_comp_id int,
    rank_comp_name varchar(50),
    reg_date datetime,
    mod_date datetime,
    primary key(rank_comp_id)
);

create table grouby_tag (
	spot_id int,
    tag_name varchar(200),
    primary key(spot_id, tag_name)
);

create table grouby_spot_rank (
	spot_id int,
    rank_comp_id int,
    reg_id varchar(50),
    reg_date datetime,
    mod_date datetime,
    primary key(spot_id, rank_comp_id)
);

create table grouby_item (
	item_id int auto_increment,
    group_id int,
    spot_id int,
    reg_id varchar(50),
    contents varchar(500),
    reg_date datetime,
    mod_date datetime,
    primary key(item_id)
);

create table grouby_heart (
	item_id int,
    reg_id varchar(50),
    reg_date datetime,
    primary key(item_id, reg_id)
);

create table grouby_upload_file (
	item_id int,
    file_id varchar(100),
    origin_name varchar(300),
    file_size int,
    file_type varchar(50),
    primary key(item_id, file_id)
);

create table grouby_comment (
	comment_id int auto_increment,
    item_id int,
    reg_id varchar(50),
    comments varchar(2000),
    reg_date datetime,
    mod_date datetime,
    primary key(comment_id)
);

insert into grouby_spot_rank values (1, 1, 'qqq', current_timestamp(), current_timestamp());
insert into grouby_spot_rank values (1, 2, 'qqq', current_timestamp(), current_timestamp());
insert into grouby_spot_rank values (1, 3, 'qqq', current_timestamp(), current_timestamp());

select * from grouby_user;
select * from grouby_friend;
select * from grouby_group;
select * from grouby_groupmember;
select * from grouby_spot;
select * from grouby_rank;
select * from grouby_rank_comp;
select * from grouby_tag;
select * from grouby_spot_rank;
select * from grouby_item;
select * from grouby_upload_file;
select * from grouby_heart;
select * from grouby_comment;

insert into grouby_rank_comp values (1, '음식', current_timestamp(), current_timestamp());
insert into grouby_rank_comp values (2, '가격', current_timestamp(), current_timestamp());
insert into grouby_rank_comp values (3, '화장실', current_timestamp(), current_timestamp());
insert into grouby_rank_comp values (4, '친절', current_timestamp(), current_timestamp());
insert into grouby_rank_comp values (5, '위치', current_timestamp(), current_timestamp());