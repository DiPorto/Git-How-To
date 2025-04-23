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
![Screenshot_100](https://github.com/user-attachments/assets/4f9d25d9-faf9-483e-b913-6b109cd60106)

![Screenshot_101](https://github.com/user-attachments/assets/6aad88a7-d5bf-4eee-932c-b70b5755b256)

![Screenshot_102](https://github.com/user-attachments/assets/aba22859-0c27-40e0-9dd2-6045b6e6a074)

![Screenshot_104](https://github.com/user-attachments/assets/446803a6-2084-4f30-ae55-b0382012050a)

![Screenshot_103](https://github.com/user-attachments/assets/5eb7f55d-72b9-4bb6-b84c-58dcc8af5047)

Сторінка окремого екземпляра сутності (/posts/:id або /posts/new)
У режимі перегляду (/posts/:id) реалізувати:
відображення повної інформації про екземпляр;
можливість редагування (форма з полями);
кнопку для збереження змін (Update).
У режимі створення (/posts/new) реалізувати:
форму з порожніми полями для введення нових даних;
кнопку для збереження нового екземпляра (Create).

![Screenshot_99](https://github.com/user-attachments/assets/f3b87fa3-22a7-4892-8c63-ecc5b1a6ca56)

![Screenshot_105](https://github.com/user-attachments/assets/51b4e274-c023-4af0-b4d9-425c98529ad4)

Результат:
![Screenshot_111](https://github.com/user-attachments/assets/dc9666fb-77b1-4b2a-8707-2125b2dc78b0)

![Screenshot_110](https://github.com/user-attachments/assets/2b753aad-47b9-4000-9408-4aed08c074c0)

![Screenshot_109](https://github.com/user-attachments/assets/383c34de-c74b-4f5d-bd80-e2c8300f4ce6)

![Screenshot_108](https://github.com/user-attachments/assets/647381c0-16e6-4e3b-9081-7f06cfb9aecd)

![Screenshot_107](https://github.com/user-attachments/assets/82a3e11b-d7f6-4439-aeeb-1d80efde877d)

![Screenshot_106](https://github.com/user-attachments/assets/17bd9e8d-0c4d-4463-adad-8a95bc98b712)

