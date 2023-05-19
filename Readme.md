# Intensive bootcamp training project «Six sities (simple)» 

* Student: [Rustam Arkharov](https://up.htmlacademy.ru/react/12/user/794021).
* Mentor: Aleksandr Timonovskiy.
* Provider of the training course: [HtmlAcademy](https://htmlacademy.ru/intensive/react)
* Title of the course: React. Development of complex frontend applications.

---

## Project headline

«Six sitites (simple)» — service for travelers who do not want to overpay for rental housing. Choose from six popular European travel destinations and get an up-to-date list of rental offers. Detailed information about housing, showing the object on the map, as well as a concise service interface will help you quickly choose the best offer.

---

## Training process and results

The course lasted 9 weeks from February 2023 to May 2023.

The project had technical specification and criteria (rules of cleaner code) — see below.

Every week, 1-2 online webinars were held on each topic, where the lecturer explained, showed examples of the code and answered questions.

Each lecture had its own tasks that needed to be completed in order to take a step forward to complete the project.

Students submitted their personal work to pull requests on GitHub.com. The group mentor commented on the code via weekly video conferences or/and on GitHub.com.

Results:

- I handed over the project on April 20, 2023.
- The tests coverage is 98%.

---

## Course program

- TypeScript (v. 4.8)
- Introduction to React (v. 18.2)
- JSX
- React Router (v. 6.4)
- React Hooks
- Redux Toolkit, Flux architecture
- Asynchrony and middleware (Redux Thunk), network access (Axios)
- Optimization, debugging (React DevTools, Redux DevTools)
- Testing (Jest, React Testing Library)

---

## Workflow

First, change the path to the `project/` subfolder. Then there are the following options:

- Run the project: `npm run start`
- Build the project: `npm run build`
- Run the tests: `npm run test`

> The rest of the document is the original description, requirements, and technical criteria of the project from the provider of the training course in Russian language.

---

> Не удаляйте и не изменяйте папки и файлы:
> `.editorconfig`, `.gitattributes`, `.gitignore`.

### 1. Создайте форк на Гитхабе

Откройте репозиторий и нажмите кнопку «Fork» в правом верхнем углу. Репозиторий из Академии будет скопирован в ваш аккаунт.

#### 2. Клонируйте репозиторий на свой компьютер

Нужно клонировать свой репозиторий (форк), а не репозиторий Академии. Клонировать нужно через SSH, а не через HTTPS.

Клонировать репозиторий через командную строку: `git clone SSH-адрес_вашего_форка`

---

## Техническое задание проекта

«Шесть городов (простой)» — упрощённая версия сервиса для путешественников, не желающих переплачивать за аренду жилья. Выбирайте один из шести популярных городов для путешествий и получайте актуальный список предложений по аренде. Подробная информация о жилье, показ объекта на карте, а также лаконичный интерфейс сервиса помогут быстро выбрать оптимальное предложение.

### 1. Описание функциональности

#### 1.1. Страницы приложения

Приложение состоит из нескольких страниц: `Main` (`/`), `Login` (`/login`), Room (`/offer/:id`).

Если пользователь авторизован, то при переходе на страницу `Login` выполняется перенаправление на главную страницу.

В шапке каждой страницы отображается ссылка на страницу «`Login`» (если пользователь не авторизован) или email пользователя и кнопка «`Log Out`» (если пользователь авторизован).

Клик по кнопке «`Log Out`» приводит к завершению сеанса работы — выходу из закрытой части приложения.

Обращение к несуществующей странице (например, через адресную строку) не приводит к появлению ошибок в приложении, а корректно обрабатывается маршрутизацией. Пользователь **перенаправляется** на страницу «404». Дизайн страницы остаётся на усмотрение студента. В самом простом случае это может быть страница с текстом `404 Not Found` и ссылкой для перехода на главную страницу приложения.

> Примечание исполнителя: я посчитал, что **переадресация** на страницу 404 не является клиентоориентированным решением вот почему:
>
> Представим, что пользователь ввел адрес `/offers/9123q`, где буква `q` ввелась ошибочно. Приложение сразу переадресуется на `/page-not-found`
>
> В этом случае пользователь не сможет понять, что ошибка была в адресе. Он не сможет отредактировать неверный адрес. Ему придется заново писать (и вспоминать) какой адрес был.
>
> Еще хуже, если приложение само сгенерировало неверный адрес и тут же переадресовалось на `/page-not-found`. Пользователь даже не поймет почему внезапно вместо информации он видит ее отсутствие.
>
> Поэтому: вместо **переадресации**, нужно отображать текст **Файл (или информация) не найдены**. При этом адрес должен отбражаться как есть — с ошибкой. У пользователя будет возможность исправить адрес.
>
> Итого: после успешной сдачи проекта, я переделал реализацию и соответствующий тест.

##### 1.1.1. Главная страница

На главной странице отображается список городов, для которых возможно запросить предложения по аренде: Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf.

Сервер всегда возвращает информацию только для этих шести городов.

После загрузки приложения всегда активен сразу первый город из списка на главной странице — Paris. По этому городу загружены предложения по аренде.

На карте предложения отображаются в виде синих маркеров.

При смене города выполняется обновление списка предложений и карта.

В заголовке списка предложений отображается количество доступных предложений. Пример корректного заголовка: 312 places to stay in Amsterdam.

1.1.1.1. Список предложений

Пользователь может менять сортировку списка предложений. Варианты сортировки:

- `Popular`. Вариант по умолчанию. Предложения отображаются в порядке, полученном с сервера.
- `Price: low to high`. От дешёвых к дорогим.
- `Price: high to low`. От дорогих к дешёвым.
- `Top rated first`. От высокого рейтинга к низкому.

По умолчанию выпадающее меню для выбора варианта сортировки закрыто. Открытие меню происходит при нажатии на выбранный пункт сортировки. Закрытие меню происходит при выборе варианта сортировки.
При смене варианта сортировки список предложений перерисовывается.

Каждая карточка в списке предложений содержит информацию:

- `Изображение`. Фотография жилья.
- `Премиальность`. Метка «Premium».
- `Стоимость за ночь`. Стоимость всегда отображается в евро.
- `Заголовок`. Краткое описание предложения. Например: «Beautiful & luxurious apartment at great location».
- `Тип жилья`. Одно из нескольких значений: apartment, room, house, hotel.
- `Рейтинг`. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5. Оценка округляется до ближайшего целого. Например, оценка 3.1 округляется до 3-х. Оценка 4.5 округляется до 5.

Клик по заголовку карточки выполняет переход на страницу с подробной информацией о предложении.

Адрес страницы с подробной информацией о предложении выглядит следующим образом: /offer/:id, где id идентификатор предложения. Например, /offer/1704.

Если предложения отсутствуют, то в списке отображается надпись «No places to stay available», а вместо карты отображается статичное изображение. См. пример соответствующей страницы макета.

1.1.1.2. Карта
Все предложения выбранного города отображаются на карте в виде синих маркеров.

При наведении курсора на карточку предложения, маркер, соответствующий объявлению, становится оранжевым. Пункт справедлив только для главной страницы, на странице предложения цвет маркера изменяться не должен.

##### 1.1.2. Страница предложения
На странице предложения (`/offer`) представлена расширенная информация об объекте для аренды:

- `Фотографии`. Выводится до 6-ти изображений.
- `Заголовок`. Краткое описание предложения, например: «Beautiful & luxurious studio at great location».
- `Подробное описание`.
- `Премиальность`.
- `Тип жилья`. Одно из предопределённых значений: `apartment` (Apartment), `room` (Private Room), `house` (House), `hotel` (Hotel).
- `Рейтинг`. Оценка предложения отображается в виде закрашенных звезд и среднего балла (например, 4.8). Максимальное количество звёзд — 5.
- `Количество спален`. Например, `3 Bedrooms`.
- `Максимальное количество гостей`. Например, `Max 4 adults`.
- `Стоимость аренды за ночь`. Сумма всегда отображается в евро.
- `Список бытовых предметов в квартире` (Wifi, Heating, Kitchen, Cable TV и т. д.);
- `Информация о хозяине`: аватарка, имя, отметка pro (звёздочка возле аватарки) и подпись `Pro` под именем хозяина.
- `Отзывы пользователей`. В заголовке блока отображается общее количество отзывов. Например: `Reviews 12`.
- Для авторизованных пользователей отображается `форма отправки нового отзыва`.

Под списком отзывов отображается карта с предложениями неподалёку. На карте отмечено 3 предложения неподалёку и маркер текущего предложения (итого 4 маркера). Маркеры предложений выделены синим. Маркер текущего предложения выделен оранжевым. Другая функциональность для карты с предложениями неподалёку не предусмотрена.

Карточки представленных предложений отображаются сразу под картой и содержат тот же набор информации, что и на главной странице.

1.1.2.1. Отзывы

Каждый отзыв содержит:

- `Аватар автора`.
- `Имя автора`.
- `Оценку`. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5.
- `Дата отзыва` в формате: Месяц Год. Например: `April 2019`.
- `Текст отзыва`.
- В заголовке блока отображается `общее количество отзывов`.

На страницу выводится не больше 10 отзывов.

Отзывы должны быть отсортированы от новых к старым (новые сверху).

1.1.2.2. Форма отправки отзыва

Форма отправки отзыва отображается только для авторизованных пользователей.

Пользователь должен выставить рейтинг. Рейтинг выставляется от 1 до 5.

Для выбора рейтинга пользователь отмечает соответствующее количество звёзд.

Текст отзыва должен содержать от 50 до 300 символов.

Пока пользователь не выбрал оценку и не ввёл текст допустимой длины, кнопка отправки отзыва не активна.

При нажатии кнопки «`Submit`» и отправке данных кнопка «`Submit`» и вся форма должны блокироваться. Разблокировка формы и кнопки происходит в случае успешной отправки или при возникновении ошибки.

В случае успешной отправки отзыва форма очищается.

В случае возникновения ошибки следует уведомить пользователя. Способ отображения ошибки остаётся на усмотрение разработчика.

Пользователь может оставить любое количество отзывов.

##### 1.1.3. Страница Login

Для входа в сервис пользователь вводит логин (`email`) и пароль. Поскольку у сервиса отсутствует возможность регистрации, логин и пароль могут быть любыми, но не пустыми.

В поле «логин» должен вводится корректный email (для проверки достаточно установить соответствующий `type` для поле ввода).

В поле «пароль» должен вводится валидный пароль. Под валидным паролем подразумевается пароль, который состоит минимум из одной буквы и цифры.

Страница доступна только неавторизованным пользователям. Авторизованных пользователей перенаправляет на главную страницу.

##### 1.1.4. Разное

В зависимости от состояния, некоторым элементам управления применяются соответствующие классы оформления. Например, активный фильтр и так далее. Примеры доступны в директории с вёрсткой (`markup`).

### 2. Взаимодействие с сервером

Все необходимые данные загружаются с сервера.

Сервер доступен по адресу: `https://12.react.pages.academy/six-cities-simple`.
Спецификация по взаимодействию с сервером в формате OpenAPI — `https://12.react.pages.academy/six-cities-simple/spec`.

В случае недоступности сервера отображается информационное сообщение. Дизайн сообщения остаётся на усмотрение разработчика.

Сервер принимает данные в виде JSON-объекта.

Авторизация на сервере происходит на основании токена. Токен передаётся с каждым запросом в заголовке X-Token.

### 3. Дополнительно

Покройте код проекта тестами. Напишите тесты для всех компонентов, редьюсеров, асинхронных операций.

В правой части страницы «Login» отображается кнопка для быстрого перехода к списку предложений по аренде в этом городе. Город для быстрого перехода определяется случайным образом. Клик по кнопке перенаправляет пользователя на главную страницу и устанавливает фильтр в соответствии с выбранным городом.

---

## Критерии

Подготовка и проверка личных проектов проводится по базовым и дополнительным критериям.

Базовые критерии охватывают наиболее важные требования к проекту и проверяют основные знания и навыки. Для успешной защиты личного проекта должны быть выполнены все базовые критерии.

Дополнительные критерии проверяют то, насколько студент внимателен к деталям, и оценивают проект с точки зрения шлифовки его качества и оптимизации. Выполнение этих критериев необходимо для защиты на 100%.

Во время финальной защиты баллы за выполнение дополнительных критериев добавляются только при выполнении всех базовых.

---

### Базовые критерии

#### Работоспособность

##### Б1. Код соответствует техническому заданию проекта

Все обязательные пункты технического задания выполнены

##### Б2. При выполнении кода не возникает необработанных ошибок

При открытии диалогов, загрузке данных и работе с сайтом не возникает ошибок, программа не ломается и не зависает. Сообщения о сетевых ошибках, появляющиеся в консоли не считаются

##### Б3. Код является кроссбраузерным и не вызывает ошибок в разных браузерах и разных операционных системах

При проверке этого критерия необходимо удостовериться в правильной работе и отсутствии сообщений об ошибках в выполняемых скриптах в последних двух версиях браузеров Chrome, Firefox, Safari, Microsoft Edge.

#### Стиль кода, читаемость, единообразие

##### Б4. Код проходит проверку ESLint

##### Б5. Название переменных, параметров, свойств и методов начинается со строчной буквы и записываются в нотации camelCase

##### Б6. Для названия значений используются английские существительные

Сокращения в словах запрещены. Сокращённые названия переменных можно использовать, только если такое название широко распространено. Допустимые сокращения:

- `xhr`, для объектов `XMLHttpRequest`, `evt` для объектов `Event` и его производных (`MouseEvent`, `KeyboardEvent` и подобные)
- `i`, `j`, `k`, `l`, `t` для счётчика в цикле, `j` для счётчика во вложенном цикле и так далее по алфавиту (если циклов два и более, то можно не переиспользовать переменную `i`)
- `cb` для единственного колбэка в параметрах функции

##### Б7. Названия констант (постоянных значений) написаны прописными (заглавными) буквами

Слова разделяются подчёркиваниями (UPPER_SNAKE_CASE), например:

```js
const MAX_HEIGHT = 400;
const EARTH_RADIUS = 6370;
```

##### Б9. Перечисления (Enum) названы английскими существительными и начинаются с прописной (заглавной) буквы

Перечисления именуются в формате CamelCase (начинаются с прописной буквы). Перечисления названы существительными в единственном числе. Для значений перечислений используется CamelCase. Для объявления перечислений используется ключевое слово enum или константные объекты (`as const`).

```js
// ⛔️ Неправильно:
// Обычный объект
const view = {
  ARTIST: 'Artist',
  GENRE: 'Genre',
}

// ⛔️ Неправильно:
// Имя значения начинается со строчной буквы
enum EndGameType {
  lives = 'lives',
  quests = 'quests',
}
```

```js
//  ✅ Правильно
// С использованием `enum`
enum View {
  Artist = 'Artist',
  Genre = 'Genre',
}

// ✅ Правильно
// Константный объект
const EndGameType = {
  Lives: 'lives',
  Quest: 'quests',
} as const;
```

##### Б10. Массивы названы существительными во множественном числе или с использованием венгерской нотации (указанием типа в названии)

```js
// ⛔️ Неправильно:
const age = [12, 40, 22, 7];
const name = ['Иван', 'Петр', 'Мария', 'Алексей'];

const wizard = {
  name: 'Гендальф',
  friend: ['Саурон', 'Фродо', 'Бильбо'],
};


// ✅ Правильно:
const ages = [12, 40, 22, 7];
const names = ['Иван', 'Петр', 'Мария', 'Алексей'];

const wizard = {
  name: 'Гендальф',
  friendsList: ['Саурон', 'Фродо', 'Бильбо'],
};
```

##### Б11. Название функции или метода содержит глагол

Название функции/метода должно быть глаголом и соответствовать действию, которое выполняет функция/метод. Например, можно использовать глагол get для функций/методов, которые что-то возвращают.

Исключения:

- Функции-конструкторы (см. критерий Конструкторы названы английскими существительными)
- Функции-обработчики/колбэки (см. соотв. критерий)
- Функции-редьюсеры. Для именования функций-редьюсеров применяются существительные (см. соотв. критерий)

```js
// ⛔️ Неправильно:
const function1 = (names) => {
  names.forEach((name) => {
    console.log(name);
  });
};

const wizard = {
  name: 'Гендальф',
  action() {
    console.log('Стреляю файрболлом!');
  },
};

const randomNumber = () => {
  return Math.random();
};
```

```js
// ✅ Правильно:
const printNames = (names) => {
  names.forEach((name) => {
    console.log(name);
  });
};

const wizard = {
  name: 'Гендальф',
  fire() {
    console.log('Стреляю файрболлом!');
  },
};

const getRandomNumber = () => {
  return Math.random();
};
```

#### Архитектура

##### Б12. Для работы с адресной строкой используется React Router и только он

Изменение адресной строки, чтение из неё и другая работа с её состоянием должна проводиться только через инструменты, которые предоставляет React Router. Альтернативные инструменты для решения этой задачи использоваться не должны

##### Б13. Для хранения глобального состояния используется Redux и только он

Критерий не касается компонентов, содержащих state. Вы по-прежнему можете использовать локальный стейт и соответствующие хуки. Этот критерий ограничивает использование паттерна `FLUX` только библиотекой `Redux` и дополнениями к ней, такими как `redux-thunk`. Использовать альтернативные решения, такие как `Mobx` не нужно

#### Проект и структура файлов

##### Б15. В итоговом коде проекта находятся только те файлы, которые были на момент создания репозитория, которые были получены в патчах и файлы, созданные по заданию

##### Б16. В коде проекта нет файлов, модулей и частей кода, которые не используются, включая закомментированные участки кода

Нет файлов скриптов, которые являются «мёртвым кодом», который никогда не выполняется

##### Б18. Все TS и TSX файлы хранятся в папке `src`

##### Б19. Все компоненты находятся в директории `src/components`. Структура директории components произвольная. Компоненты страниц хранятся в директории `src/pages`. Структура директории `pages` произвольная.

##### Б20. Все HOC находятся в папке `src/hocs`

##### Б21. В названии файлов не используется разный регистр, а применяется разделение слов дефисом. Исключение составляют файлы, которые были созданы автоматически во время создания проекта.

⛔️ Неправильно:

- `Button.tsx`
- `RedButton.tsx`

✅ Правильно

- `button.tsx`
- `red-button.tsx`
- Файл создан автоматически `setupTests.ts`

##### Б22. Главный файл в каждой директории, называется так же, как директория, например `app/app.tsx` или `index.ts` (если используется реэкспорт).

---

### Дополнительные критерии

#### Работоспособность

##### Д1. Техническое задание реализовано в полном объёме

Все обязательные и необязательные пункты технического задания выполнены

#### Стиль кода, читаемость, единообразие

##### Д2. Методы-обработчики классов названы через handle

handle + название объекта + название события Например:

- `handleFormSubmit`
- `handleInputChange`

##### Д3. Составные константы собираются в перечисления (Enum) или константный объект

Множества однотипных констант собираются в перечисления или константный объект.

```js
// ⛔️ Неправильно:
const EARTH_GRAVITY = 9.8;
const EARTH_RADIUS = 6370;
```

```js
// ✅ Правильно:
const enum Earth {
  Gravity = 9.8,
  Radius = 6370,
}

const AnotherEarth = {
  Gravity: 9.8,
  Radius: 6370,
} as const;
```

##### Д5. В коде не используются «магические значения», под каждое из них заведена отдельная переменная, названная как константа

```js
// ⛔️ Неправильно:
const getItems = (filterName) => {
  switch (filterName) {
    case 'all':
      return [];
    case 'new':
      return [];
    default:
      return [];
  }
};

getItems('all');
```

```js
// ✅ Правильно:
const enum Filter {
  All = 'all',
  New = 'new',
}

const getItems = (filterName) => {
  switch (filterName) {
    case Filter.All:
      return [];
    case Filter.New:
      return [];
    default:
      return [];
  }
};

getItems(Filter.All);
```

#### React

##### Д8. Структура каждого TSX-файла соблюдена

- Импорты
- Описание типа компонента (props)
- Код компонента
- Экспорты

Блоки кода не описанные в этой структуре могут быть расположены произвольно

##### Д9. Колбэки, переданные в `props` названы через `on`

##### Д11. Все дополнительные ресурсы компонента (например, стили) размещаются в директории с компонентом

#### Redux

##### Д12. Для создания `Actions` используется паттерн `Action Creators`

##### Д13. Для работы с асинхронными `actions` используется библиотека `redux-thunk`

##### Д14. Редьюсер не должен содержать побочных эффектов. Функция-редьюсер опирается только на `state`, `action` и чистые функции

##### Д15. Для именования функции-редьюсер используются только существительные

##### Д16. Логика изменения состояния описывается в редьюсере, а не в компоненте

##### Д17. Отсутствует «универсальный редьюсер». Редьюсеры разбиваются в соответствии с предметной областью и объединяются при помощи `Combine Reducer`

##### Д18. Для чтения состояния из хранилища применяются селекторы. Если требуется модифицировать результат при чтении (например, отфильтровать), студент может применить мемоизацию (пакет `reselect`).

##### Д19. Для именования типов действия (`action type`) применяется паттерн: домен/действие (`something/action`). Например: `list/addFavorite`, `user/login` и так далее

#### Hooks

##### Д20. При изменении состояния компонента в useEffect выполняется проверка на демонтирование компонента.

Проверка позволит избежать ошибок, когда обновление состояния происходит после отмонтирования компонента.

Пример:

```js
useEffect(() => {
  let isMounted = true;

  if (isMounted) {
    // Обновить состояние компонента
  }

  return () => {
    isMounted = false;
  };
}, [/* Зависимости */]);
```

##### Д21. Кастомные Hooks начинаются с префикса `use<HookName>` и располагаются в директории `hooks`. Например: `useUser`

#### Корректность кода и тесты

##### Д22. Существуют юнит-тесты на все состояния всех редьюсеров

##### Д23. Все компоненты в проекте покрыты тестами

##### Д24. Тестовые файлы лежат рядом с файлами, для которых написан тест. Все тесты используют в названии `*.test.ts`

##### Д26. Тесты разного вида написаны в разных файлах

##### Д27. Во всех видах тестовых файлов используются моковые данные для инициализации компонентов

##### Д28. В компонентах отсутствует прямое обращение к DOM-элементам (например, `document.querySelector`). Если требуется получить доступ к DOM-элементу, применяются ссылки (`ref`).

---

<a href="https://htmlacademy.ru/intensive/react"><img align="left" width="50" height="50" title="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/react/logo-for-github.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[React. Разработка сложных клиентских приложений](https://htmlacademy.ru/intensive/react)» от [HTML Academy](https://htmlacademy.ru).
