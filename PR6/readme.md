Практично-лабораторне заняття №6
Розробка UI для реалізації CRUD-операцій
Мета
Створити користувацький інтерфейс для взаємодії з реалізованим RESTful API, що надає можливість перегляду, створення, редагування та видалення екземплярів певної сутності. Розробка ведеться на базі React з використанням TanStack Router для реалізації маршрутизації.
Завдання
Використовуючи boilerplate-проєкт vite-react-boilerplate, для сутності Post, яка була створена в роботі “Реалізація нової сутності, створення CRUD-операцій та відповідного RESTful API”, необхідно:

Сторінка колекції екземплярів сутності (/posts)
Реалізувати рендеринг списку всіх доступних екземплярів сутності.
Для кожного елемента відображати основну інформацію (ключові поля).
Передбачити можливість переходу на сторінку конкретного екземпляра (/posts/:id).
Додати кнопку "Створити новий екземпляр", яка веде на маршрут /posts/new.
Реалізувати можливість видалення елемента з колекції (з підтвердженням дії).

![Screenshot_180](https://github.com/user-attachments/assets/0eff6030-babb-464c-857b-161928a5e93b)

![Screenshot_181](https://github.com/user-attachments/assets/827d5c04-e7f1-4028-9041-f74609212040)

![Screenshot_182](https://github.com/user-attachments/assets/0ce774f5-cd66-4552-a0ce-1e57538c6214)

![Screenshot_183](https://github.com/user-attachments/assets/6b434bac-26aa-4f82-a2ab-f0bcf89b78fa)

![Screenshot_184](https://github.com/user-attachments/assets/c1bc80bd-94be-4fd9-bcbe-dc008c5c7560)

![Screenshot_187](https://github.com/user-attachments/assets/d23cfb72-0372-491b-9f47-3ddf457fc11b)

![Screenshot_188](https://github.com/user-attachments/assets/8af6f9ca-aa40-4ab8-bd3f-88f1f27e1cda)


Сторінка окремого екземпляра сутності (/posts/:id або /posts/new)
У режимі перегляду (/posts/:id) реалізувати:
відображення повної інформації про екземпляр;
можливість редагування (форма з полями);
кнопку для збереження змін (Update).
У режимі створення (/posts/new) реалізувати:
форму з порожніми полями для введення нових даних;
кнопку для збереження нового екземпляра (Create).

![Screenshot_185](https://github.com/user-attachments/assets/be03c335-9fa6-48cc-96b5-1c12e41814b2)

![Screenshot_186](https://github.com/user-attachments/assets/e24e93b8-0aa5-4e73-a7a4-44cfb1a4331b)

# Результат:

![Screenshot_179](https://github.com/user-attachments/assets/4577a101-7309-404f-a544-1d3c9a05fbbe)

![Screenshot_178](https://github.com/user-attachments/assets/db47ac14-1fb1-4a5f-a16f-54569e023377)

![Screenshot_177](https://github.com/user-attachments/assets/3e77717c-f3f9-4362-9595-22e2574dc539)

![Screenshot_176](https://github.com/user-attachments/assets/6c22ecc3-a62c-40da-946d-e30e5b827633)

![Screenshot_175](https://github.com/user-attachments/assets/89f7e9b7-601d-4d54-9338-74b74156caec)

