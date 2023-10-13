create schema mercado;

create table mercado.post(
	id int not null auto_increment primary key,
	title text not null,
	content text not null,
	date timestamp default current_timestamp()
); 