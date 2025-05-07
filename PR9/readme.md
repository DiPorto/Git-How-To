Завдання:
1. Створити Azure App Service у власній підписці Azure:
a. Створити ресурсну групу (resource group)
b. Створити всередині ресурсної групи App Servicе. При створенні
вибрати деплой контейнеру замість коду

![Screenshot_173](https://github.com/user-attachments/assets/afc16459-c530-492c-acf9-f6b6a1fa147f)


2. Створити у Azure Service principal, який буде використовуватись для доступу
GitHub до вашої підписки Azure:

![Screenshot_172](https://github.com/user-attachments/assets/6962dd10-5ee0-4ae1-b4df-94899742ba70)

3. Поверніться до вашого github-репозиторію. Перейдіть в settings -> secrets
and variables -> actions, та натисніть New Repository Secret. В полі Name
введіть AZURE_CREDENTIALS а в поле Secret скопіюйте повністю вивід
команди з пункту 2е. Слідкуйте за тим щоб в кінці секрету на було пробілу
або переходу рядка, натисніть Add Secret

![Screenshot_174](https://github.com/user-attachments/assets/15f43d28-8853-4996-a2b2-29bc65bff978)

4. Додати нову job в ваш github workflow, створений на попередньому занятті. В
неї додати наступні степи:

![Screenshot_170](https://github.com/user-attachments/assets/170d00cc-89b1-4e69-bfdb-1b9da5678dbc)

![Screenshot_171](https://github.com/user-attachments/assets/a3420146-4372-43f1-b62d-6cfc8e8e7b65)



5. Запустіть воркфлоу та пересвідчиться що він завершився успішно.
  
![Screenshot_169](https://github.com/user-attachments/assets/027f228d-b445-48c1-894f-35a9c4cd6bef)
