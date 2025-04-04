Лабораторна робота: Ознайомлення з TypeScript
Виконав: Почка Дмитро ІПЗ - 3.02
Завдання:

1. Типізація змінних
Оголосіть змінні наступних типів: string, number, boolean, array, object.
Створіть функцію, яка приймає як аргумент об'єкт із полями name (тип string) та age (тип number) і повертає рядок виду: "Name: John, Age: 30".
(![Screenshot_1.png](https://github.com/DiPorto/Git-How-To/blob/c4f8e4534e40b645645ab8209fb1e58ba4177d3b/LB1/screenshot/Screenshot_35.png))

2. Інтерфейси
Оголосіть інтерфейс Person, який містить поля:
name: string
age: number
address?: string (опціональне поле)
Реалізуйте функцію printPerson, яка приймає об'єкт типу Person та виводить його дані у консоль.
![Інтерфейси](https://github.com/DiPorto/Git-How-To/blob/main/LB1/screenshot/Screenshot_3.png)

3. Композитні типи
Оголосіть об'єднаний тип (union type), наприклад: 
type Status = 'success' | 'error' | 'loading';
Реалізуйте конструкцію (наприклад, функцію або умову), яка виводить повідомлення відповідно до значення Status.
![Композитні типи](https://github.com/DiPorto/Git-How-To/blob/main/LB1/screenshot/Screenshot_4.png)

4. Дженерики
Реалізуйте функцію identity<T>(value: T): T, яка повертає передане їй значення.
Використайте її для типів number, string та boolean.
![Дженерики](https://github.com/DiPorto/Git-How-To/blob/main/LB1/screenshot/Screenshot_5.png)

5. Класи
Реалізуйте клас Car, який містить поля:
model: string
year: number
Додайте метод getCarInfo(), який повертає рядок виду: "Model: Toyota, Year: 2020".

![Класи](https://github.com/DiPorto/Git-How-To/blob/f08b5e477fc4284475b22783357f0a3527285248/LB1/screenshot/Screenshot_6.png)
