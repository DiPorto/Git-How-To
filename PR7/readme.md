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

![image](https://github.com/user-attachments/assets/fd0d221f-218c-49e5-b790-19a84c3b5ae5)


Реалізувати обробку помилок через інтерцептор (наприклад, логування у консоль або показ повідомлення)


![image](https://github.com/user-attachments/assets/a1f3dd6f-9542-4ba7-82f0-83b092b3a8d7)


3. Замінити мок-функції на реальні HTTP-запити:
У файлі з API-функціями (src/api/posts.ts або аналогічному) замінити реалізацію:
getAllEntities() → GET /posts
getEntityById(id) → GET /posts/:id
createEntity(data) → POST /posts
updateEntity(id, data) → PUT /posts/:id
deleteEntity(id) → DELETE /posts/:id


![image](https://github.com/user-attachments/assets/1e7fed07-883a-4741-98ac-faf640660e92)


![image](https://github.com/user-attachments/assets/7564821f-cf99-4a87-a4fd-8f6db5e5dd6b)

![image](https://github.com/user-attachments/assets/428ddb46-abbe-4063-bbd1-c64e9a39f984)





