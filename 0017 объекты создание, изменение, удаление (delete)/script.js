/*
Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.

Создайте пустой объект user.
Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей.
Удалите свойство name из объекта. 
*/

let user = {
	"name": "Вася",
	"surname": "Петров",
};

user["name"] = "Сергей"; //user.name = "Сергей"

alert(user["name"] );

delete user["name"];

alert(user["name"] );

