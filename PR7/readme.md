Практично-лабораторне заняття №7
Інтеграція клієнтської частини з RESTful API
Мета
Підключити користувацький інтерфейс до реального серверного API. Ознайомитися з підходами до організації HTTP-запитів через Axios, зберігання токенів доступу, обробки помилок, роботи з .env-змінними. Забезпечити повноцінну взаємодію клієнтської частини з бекендом.

Завдання
Використовуючи реалізовану у попередньому завданні клієнтську частину (інтерфейс для роботи з сутністю Post), внести такі зміни:
1. Налаштування змінних оточення:
У корені проєкту створити файл .env
Додати до нього такі змінні:

VITE_API_BASE_URL=http://localhost:4000/v1
VITE_API_AUTH_TOKEN=your_jwt_token_here

![image](https://github.com/user-attachments/assets/744c93a8-5722-4e2e-9a2d-a47408801d37)

Реалізувати використання цих змінних у конфігурації Axios

2. Створити конфігурацію Axios:
Створити окремий файл (наприклад, src/api/axios.ts)
Налаштувати базовий baseURL, заголовок Content-Type, токен авторизації:

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`;

![Screenshot_191](https://github.com/user-attachments/assets/99354273-a191-4796-af82-de021b006ebd)


Реалізувати обробку помилок через інтерцептор (наприклад, логування у консоль або показ повідомлення)

![Screenshot_192](https://github.com/user-attachments/assets/397516fc-3f0e-421a-9a4a-2b4b4c15bb85)

![Screenshot_193](https://github.com/user-attachments/assets/63489874-13c0-4fc1-be6f-5e8334bc4dc1)


3. Замінити мок-функції на реальні HTTP-запити:
У файлі з API-функціями (src/api/posts.ts або аналогічному) замінити реалізацію:
getAllEntities() → GET /posts
getEntityById(id) → GET /posts/:id
createEntity(data) → POST /posts
updateEntity(id, data) → PUT /posts/:id
deleteEntity(id) → DELETE /posts/:id


![image](https://github.com/user-attachments/assets/1e7fed07-883a-4741-98ac-faf640660e92)


![Screenshot_194](https://github.com/user-attachments/assets/c8bcd4ef-f2f5-4863-80a4-8aca62230ce2)




