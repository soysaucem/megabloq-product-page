create database [IF NOT EXISTS] megabloqlp;

use megabloqlp;

create table forms(
  id varchar(50) not null,
  firstName varchar(100) not null,
  lastName varchar(100) not null,
  email varchar(100) not null,
  message varchar(1000),
  createdAt timestamp,
  primary key(id));
