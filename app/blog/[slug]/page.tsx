import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, User, Sparkles } from "lucide-react";
import ArticleProgress from "@/components/ArticleProgress";
import ShareButtons from "@/components/ShareButtons";

// This would typically come from a CMS or database
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
  category: string;
  seoKeywords: string[];
  author: string;
  authorRole: string;
  date: string;
  image: string;
  imageAlt: string;
}> = {
  "yak-obrati-crm-systemu": {
    title: "Як обрати CRM для малого бізнесу у 2026: чекліст із 15 критеріїв",
    excerpt: "Практичний гайд для власників малого бізнесу: як вибрати CRM без переплат, швидко запустити процеси та не втрачати ліди.",
    seoTitle: "Як обрати CRM для малого бізнесу у 2026 | Flamingo CRM",
    seoDescription: "Покроковий гайд для малого бізнесу: як вибрати українську CRM-систему, уникнути помилок впровадження та автоматизувати продажі без зайвих витрат.",
    content: `

Коли власник малого бізнесу вперше замислюється про CRM, зазвичай це не через моду. Це відбувається в момент, коли заявок стає більше, менеджери починають вести клієнтів у різних таблицях, а керівник щовечора намагається зрозуміти, скільки угод реально «живі», а скільки вже давно втрачені. На цьому етапі рішення потрібне не «найкрутіше», а те, яке повертає відчуття контролю.

Саме тому попит на <a href="https://crm.flamingo-crm.com.ua/" target="_blank" rel="noopener noreferrer">CRM-системи</a> зростає: бізнесу потрібен практичний інструмент, який можна запустити швидко, без складного онбордингу і без відчуття, що команда працює «на систему», а не система — на команду.

У цьому матеріалі я поділюся підходом, який працює в реальному малому бізнесі: як обрати CRM спокійно, без хаосу, щоб уже в перші тижні побачити результат у продажах.

## Ключові критерії вибору

### 1) Відповідність вашим процесам

Найпоширеніша помилка — обирати CRM за красивою презентацією, а не за тим, як у вас реально відбувається продаж. Якщо у вашій команді є етап «перший контакт», «уточнення потреб», «комерційна пропозиція» і «дожим», то система має це підтримувати без костилів. Інакше менеджери швидко повернуться до таблиць, бо там їм «швидше». 

Хороша CRM відчувається просто: менеджер бачить, що робити зараз, керівник бачить, де гальмує воронка, а власник бачить, які угоди принесуть гроші цього місяця.

### 2) Простота впровадження

Коли інтерфейс складний, команда починає уникати системи. Тому під час вибору раджу дати тестовий доступ двом людям: досвідченому менеджеру і новачку. Якщо новачок за першу годину може створити контакт, поставити задачу і пересунути угоду етапом далі — це хороший знак. Якщо ж без інструкції нічого не працює, у щоденній роботі буде лише більше опору.

### 3) Автоматизація без складних сценаріїв

Автоматизація корисна тоді, коли вона забирає рутину, а не створює нову. Не потрібно одразу будувати десятки сценаріїв. Достатньо трьох базових: нагадування про наступний контакт, автоматична постановка задачі після зміни етапу та сигнал керівнику, якщо угода «зависла». Уже цього вистачає, щоб команда перестала втрачати ліди на рівному місці.

Як виглядає така логіка на практиці, можна подивитися на головній сторінці про <a href="https://crm.flamingo-crm.com.ua/" target="_blank" rel="noopener noreferrer">автоматизацію продажів у CRM</a>.

### 4) Інтеграції з вашими каналами

CRM має стати місцем, куди стікаються всі звернення: форма із сайту, листи, повідомлення з месенджерів, повторні заявки. Якщо частина даних лишається «поза системою», керівник ніколи не бачить повної картини. Тому на етапі вибору важливо перевірити не абстрактний список інтеграцій, а саме ваші робочі канали.

### 5) Прозора модель вартості

Ціна CRM — це не лише тариф на сайті. Реальна вартість складається з часу команди, швидкості запуску, підтримки та того, скільки грошей ви втрачаєте, поки процес не працює. Тому дивіться на економіку в цілому. Для багатьох малих компаній саме <a href="https://crm.flamingo-crm.com.ua/" target="_blank" rel="noopener noreferrer">CRM без абонплати</a> виявляється найспокійнішим і передбачуваним варіантом.

### 6) Аналітика, яка допомагає приймати рішення

Аналітика повинна відповідати на прості бізнес-питання: чому просіли продажі, на якому етапі губляться угоди, хто з менеджерів перевантажений, а хто недовантажений. Якщо для цього щоразу треба «вивантажити в Excel і порахувати вручну», значить CRM не виконує головну функцію — не дає вам керувати процесом вчасно.

### 7) Контроль якості даних

Будь-яка система руйнується, якщо в ній хаос у картках клієнтів. Тому одразу закладіть прості правила: які поля обов'язкові, як фіксуються причини відмови, хто перевіряє дублікати. Це звучить «не романтично», але саме ці речі найсильніше впливають на якість прогнозу та стабільність продажів.

## Чекліст із 15 критеріїв перед запуском

Щоб запуск пройшов спокійно, не намагайтеся охопити все одразу. Спершу погодьте структуру воронки, базові поля картки клієнта, правила для задач та ритм контролю з боку керівника. Потім підключайте канали заявок, наведіть порядок у шаблонах комунікації та домовтеся про прості KPI на перший місяць.

Далі дуже важливий етап, який часто пропускають: коротке навчання команди і перший аудит через 2-3 тижні після запуску. Саме в цей момент видно, де система допомагає, а де потрібно доточити процес.

Якщо говорити коротко, робочий чекліст складається з трьох блоків:
- процес (воронка, етапи, відповідальні)
- інструменти (інтеграції, задачі, дашборди)
- дисципліна (навчання, правила внесення даних, регулярний аудит)

## Типові помилки під час вибору CRM

Найчастіше бізнес помиляється не в самому виборі платформи, а в очікуваннях. CRM не вирішує проблеми сама по собі — вона підсилює ті процеси, які ви в неї закладаєте. Якщо етапи продажу нечіткі, ролі не визначені, а команда не розуміє, навіщо змінювати звичний підхід, навіть дорогий продукт не дасть результату.

Друга болюча помилка — запуск «на майбутнє», коли беруть перевантажене рішення з функціями, які зараз не потрібні. У підсумку команда тоне в інтерфейсі, а керівник не бачить обіцяної прозорості.

## Висновок

Якщо обирати CRM не емоційно, а через ваші щоденні задачі, рішення стає набагато простішим. Подивіться, чи система допомагає команді працювати швидше, а вам — бачити реальну картину по продажах. Якщо так, ви на правильному шляху.

**Хочете подивитися, як це виглядає в живому продукті?** Перейдіть на <a href="https://crm.flamingo-crm.com.ua/" target="_blank" rel="noopener noreferrer">головну сторінку CRM для малого бізнесу</a> та оцініть ключові сценарії для вашої команди.
    `,
    category: "CRM для малого бізнесу",
    seoKeywords: [
      "CRM для малого бізнесу",
      "CRM-системи",
      "як обрати CRM",
      "впровадження CRM",
      "автоматизація продажів",
      "картки клієнтів",
      "CRM без абонплати",
      "воронка продажів",
      "аналітика в CRM",
      "контроль якості даних",
      "інтеграції з вашими каналами",
    ],
    author: "Олександр Яремчук",
    authorRole: "CEO, Flamingo CRM",
    date: "2026-03-03",
    image: "/images/crm_2026.png",
    imageAlt: "Ілюстрація CRM для малого бізнесу",
  },
  "avtomatyzatsiya-prodazhiv": {
    title: "10 способів автоматизувати продажі з CRM",
    excerpt: "Дізнайтеся, як автоматизація може збільшити ефективність вашого відділу продажів та скоротити час на рутинні задачі.",
    seoTitle: "Автоматизація продажів у CRM: 10 практичних способів | Flamingo CRM",
    seoDescription: "Дізнайтесь, як автоматизувати продажі в CRM: від lead scoring і нагадувань до аналітики, щоб підвищити конверсію та швидкість роботи команди.",
    content: `
## Чому автоматизація важлива?

Автоматизація продажів — це не про «замінити людей роботами», а про те, щоб менеджери перестали витрачати півдня на механіку. Коли команда вручну переносить ліди між таблицями, згадує про follow-up «по пам'яті» і збирає звіти в останній момент, продажі втрачають темп.

У CRM ці речі можна поставити на рейки. І тоді менеджер концентрується на розмові з клієнтом, керівник бачить прогноз, а бізнес отримує стабільнішу конверсію.

## 10 способів автоматизації

### 1. Автоматичне введення даних
Контакт із форми сайту, листа чи месенджера одразу потрапляє в CRM-картку. Це прибирає дублікати, мінімізує людські помилки й прискорює перший дотик із клієнтом.

### 2. Автоматичні нагадування
Система сама нагадує, коли час писати, дзвонити або повертатися до угоди. Так команда не губить «теплі» ліди і не тримає важливі задачі в голові.

### 3. Шаблони листів
Типові відповіді, follow-up та комерційні повідомлення готуються за шаблонами з персоналізацією. Це дає єдиний стандарт комунікації й економить години щотижня.

### 4. Lead scoring
Ліди отримують пріоритет за поведінкою і профілем. Менеджер не витрачає час на «холодні» контакти в той момент, коли гарячі потребують швидкої реакції.

### 5. Воронка продажів
Угода рухається по етапах за тригерами, а не вручну. Так стає видно, де саме воронка просідає і який етап потребує посилення скриптів або процесу.

### 6. Звіти та аналітика
Звіти формуються автоматично: конверсія, швидкість проходження етапів, навантаження менеджерів. Керівник бачить картину щодня, а не «після дедлайну».

### 7. Синхронізація календаря
Автоматична синхронізація з Google Calendar та Outlook.

### 8. Email-кампанії
Налаштуйте автоматичні серії листів для різних сегментів клієнтів.

### 9. Інтеграція з телефонією
Автоматичне логування дзвінків та запис розмов.

### 10. Документообіг
Автоматичне створення документів з даних CRM.

## Результати автоматизації

У практиці малого бізнесу автоматизація дає три помітні ефекти: швидша реакція на запити, менше пропущених контактів і більше передбачуваності у щомісячному плані продажів. Навіть базові сценарії відчутно розвантажують команду вже в перші тижні.

Якщо хочете подивитися, як це реалізовано в продукті, відкрийте <a href="https://crm.flamingo-crm.com.ua/" target="_blank" rel="noopener noreferrer">головну сторінку CRM для автоматизації продажів</a>.

## Як почати?

Почніть не з десяти сценаріїв одразу, а з трьох: автоматичне створення задачі після нового ліда, нагадування про follow-up і сигнал керівнику, якщо угода зависла. Коли команда звикне до такого ритму, додавайте наступні рівні автоматизації — email-ланцюжки, сегментацію та глибшу аналітику.
    `,
    category: "Автоматизація продажів",
    seoKeywords: [
      "автоматизація продажів",
      "CRM для відділу продажів",
      "підвищення конверсії",
      "lead scoring",
      "воронка продажів у CRM",
      "нагадування в CRM",
      "аналітика",
      "управління угодами",
      "синхронізація календаря",
      "email-кампанії",
      "документообіг",
    ],
    author: "Олександр Яремчук",
    authorRole: "CEO, Flamingo CRM",
    date: "2026-02-08",
    image: "/images/automatozation.png",
    imageAlt: "Автоматизація продажів у CRM",
  },
  "analityka-v-crm": {
    title: "Аналітика в CRM: як приймати рішення на основі даних",
    excerpt: "Практичний розбір метрик CRM: які показники реально допомагають керувати продажами і збільшувати прибуток.",
    seoTitle: "Аналітика в CRM: ключові метрики для росту продажів | Flamingo CRM",
    seoDescription: "Розбираємо аналітику в CRM без складної теорії: конверсія, цикл угоди, активність менеджерів і джерела лідів для точних рішень.",
    content: `
## Чому бізнесу не вистачає «відчуття», а потрібні дані

На старті багато рішень приймаються інтуїтивно: «здається, менеджери завантажені», «ніби конверсія впала», «можливо, реклама працює гірше». Проблема в тому, що інтуїція без цифр часто веде до хаотичних дій. CRM-аналітика потрібна саме для того, щоб перетворити відчуття на керовані гіпотези.

Коли ви бачите в одному місці шлях ліда від першого контакту до закриття угоди, стає ясно, де бізнес реально втрачає гроші, а де — має потенціал росту.

## Які метрики дивитися в першу чергу

### Конверсія по етапах воронки

Це найшвидший спосіб знайти «вузьке горло». Якщо більшість заявок застрягають між кваліфікацією і пропозицією, проблема може бути не в рекламі, а в роботі скрипта чи темпі обробки.

### Середній цикл угоди

Коли цикл угоди починає рости, команда або перевантажена, або процес забюрократизований. Контроль цього показника дає змогу реагувати до того, як просідає каса.

### Активність менеджерів

Не кількість «кліків», а кількість осмислених дій: дзвінків, follow-up, переведених етапів, закритих задач. Це показує дисципліну роботи і допомагає об'єктивно балансувати навантаження.

### Якість джерел лідів

Джерела можуть давати однакову кількість заявок, але різну якість. Тому важливо дивитися не лише CPL, а й дохід на канал і конверсію в оплату.

## Як перетворити аналітику на дії

Звіт сам по собі нічого не змінює. Потрібен короткий ритм: щотижневий перегляд метрик, одна проблема — один експеримент — один висновок. Саме така послідовність дозволяє керівнику бачити, які зміни дійсно працюють, а не просто «виглядають правильно».

На практиці це може виглядати так: ви помітили падіння конверсії на етапі комерційної пропозиції, оновили шаблон аргументації, дали команді новий сценарій і через два тижні порівняли результат. Це і є data-driven керування без зайвої складності.

## Висновок

Аналітика в CRM — це не про красиві графіки, а про швидкі, точні рішення. Почніть з базових метрик, зробіть їх частиною щотижневого менеджменту й поступово будуйте систему, у якій кожне рішення має цифру під собою.

Щоб побачити приклади такої логіки в дії, перейдіть на <a href="https://crm.flamingo-crm.com.ua/" target="_blank" rel="noopener noreferrer">головну сторінку CRM</a>.
    `,
    category: "Аналітика в CRM",
    seoKeywords: [
      "аналітика в CRM",
      "конверсія по етапах",
      "середній цикл угоди",
      "активність менеджерів",
      "якість джерел лідів",
      "воронка продажів",
      "управління продажами",
      "CRM метрики",
      "data-driven рішення",
    ],
    author: "Олександр Яремчук",
    authorRole: "CEO, Flamingo CRM",
    date: "2026-02-05",
    image: "/images/analitics.png",
    imageAlt: "Дашборд аналітики в CRM",
  },
  "integratsiya-crm-z-inshymy-servisamy": {
    title: "Інтеграція CRM з іншими сервісами: повний гайд",
    excerpt: "Як підключити сайт, email, месенджери та телефонію до CRM, щоб не втрачати звернення і прискорити продажі.",
    seoTitle: "Інтеграція CRM з сайтом, email і месенджерами | Flamingo CRM",
    seoDescription: "Покроковий гайд з інтеграції CRM: форми сайту, пошта, месенджери, телефонія й UTM для повного контролю лідів.",
    content: `
## Навіщо взагалі інтегрувати CRM

Якщо заявки з сайту в одному місці, переписки в іншому, а дзвінки ще десь окремо — команда працює «всліпу». Інтеграція CRM потрібна не заради технічної краси, а щоб кожен контакт із клієнтом потрапляв у єдину картку без ручного копіювання.

Коли все зібрано в одному контурі, ви бачите повну історію комунікації та не втрачаєте угоди на стиках каналів.

## З чого почати підключення

### Форми сайту та лендінги

Перший крок — зробити так, щоб кожна заявка автоматично створювала лід у CRM. Це базовий рівень, без якого будь-яка подальша аналітика буде неповною.

### Корпоративна пошта

Email-листування має підтягуватись в картку клієнта. Тоді менеджер бачить контекст одразу і не витрачає час на пошук «де була остання розмова».

### Месенджери і телефонія

Telegram, Viber або IP-телефонія дають швидку комунікацію, але без інтеграції створюють фрагменти даних. Після підключення всі дотики фіксуються в CRM і не губляться під час зміни менеджера.

### UTM і джерела трафіку

Щоб не зливати бюджет, важливо бачити, які канали приносять не просто заявки, а оплату. UTM-мітки в CRM дають цю відповідь дуже швидко.

## Типові помилки під час інтеграції

Найчастіше компанії намагаються підключити «все і одразу», а потім не встигають стабілізувати процес. Краще йти поетапно: сайт, пошта, месенджери, телефонія, аналітика. Така послідовність дає результат без перевантаження команди.

Друга помилка — не прописати відповідального за якість даних. Інтеграція технічно працює, але в CRM накопичуються дублікати і «сміття», яке псує звіти.

## Висновок

Якісна інтеграція CRM — це фундамент для керованих продажів. Чим швидше звернення потрапляє в систему і чим повніша картка клієнта, тим вища ймовірність закриття угоди.

Перевірити, як це реалізовано на практиці, можна на <a href="https://crm.flamingo-crm.com.ua/" target="_blank" rel="noopener noreferrer">головній сторінці CRM</a>.
    `,
    category: "Інтеграції CRM",
    seoKeywords: [
      "інтеграція CRM",
      "форми сайту в CRM",
      "email інтеграція CRM",
      "месенджери і CRM",
      "телефонія в CRM",
      "UTM в CRM",
      "джерела лідів",
      "картка клієнта",
      "автоматизація обробки заявок",
    ],
    author: "Олександр Яремчук",
    authorRole: "CEO, Flamingo CRM",
    date: "2026-02-01",
    image: "/images/contact_card.png",
    imageAlt: "Інтеграції CRM з каналами комунікації",
  },
  "upravlinnya-komandoyu-v-crm": {
    title: "Ефективне управління командою через CRM",
    excerpt: "Практичні підходи до керування відділом продажів у CRM: задачі, дисципліна, контроль етапів і прогноз результату.",
    seoTitle: "Управління командою в CRM: контроль задач і результатів | Flamingo CRM",
    seoDescription: "Як керувати командою в CRM без мікроменеджменту: прозорі задачі, контроль воронки, звітність і стабільне виконання плану.",
    content: `
## Чому команда «просідає», навіть коли є хороші люди

У більшості випадків проблема не в людях, а в системі роботи. Коли немає прозорих задач, єдиних правил по етапах угоди і ритму контролю, навіть сильні менеджери працюють ривками. CRM дає керівнику можливість не тиснути, а будувати передбачуваний процес.

## Що має бути видно керівнику щодня

### Задачі і дедлайни

Керівник має бачити, які задачі прострочені, які потребують втручання і хто перевантажений. Це дає змогу швидко вирівнювати темп команди без зайвої бюрократії.

### Рух угод по етапах

Якщо угоди зависають, команда часто «вариться» в операційці замість закриття продажів. CRM показує, на якому етапі просадка, і дозволяє точково підсилити слабке місце.

### Реальна активність менеджерів

Не просто кількість дій, а їхня якість: follow-up, зустрічі, конверсія. Це допомагає керувати результатом, а не імітацією активності.

## Як вибудувати дисципліну без тиску

Найкраще працює короткий регулярний цикл: щоденні 10 хвилин на пріоритети і щотижневий розбір воронки. Коли вся команда працює в одному ритмі, CRM стає не «системою контролю», а робочою операційною панеллю.

Ще один важливий момент — чіткі правила внесення даних. Якщо картки клієнтів заповнюються по-різному, керівник втрачає довіру до звітів і повертається до ручної перевірки.

## Висновок

Управління командою через CRM працює тоді, коли система відображає реальні процеси, а не «ідеальну картинку». Почніть з прозорих задач, контролю етапів і короткого ритму зустрічей — і команда стане помітно стабільнішою в результаті.

Більше прикладів — на <a href="https://crm.flamingo-crm.com.ua/" target="_blank" rel="noopener noreferrer">головній сторінці CRM для відділу продажів</a>.
    `,
    category: "Менеджмент у CRM",
    seoKeywords: [
      "управління командою в CRM",
      "контроль задач менеджерів",
      "дедлайни в CRM",
      "контроль етапів угоди",
      "дисципліна відділу продажів",
      "продуктивність менеджерів",
      "керування воронкою продажів",
      "CRM для керівника",
    ],
    author: "Олександр Яремчук",
    authorRole: "CEO, Flamingo CRM",
    date: "2026-01-28",
    image: "/images/create_task.png",
    imageAlt: "Управління задачами команди в CRM",
  },
  "mobilnyy-crm": {
    title: "Мобільний CRM: працюйте звідусіль",
    excerpt: "Як мобільний доступ до CRM допомагає менеджерам швидко реагувати на ліди і закривати угоди навіть у дорозі.",
    seoTitle: "Мобільний CRM для продажів у полі | Flamingo CRM",
    seoDescription: "Дізнайтесь, як мобільний CRM прискорює роботу менеджерів: доступ до карток клієнтів, задач, дзвінків і угод у будь-який момент.",
    content: `
## Коли продажі виходять за межі офісу

Сучасний відділ продажів рідко працює тільки з ноутбука в офісі. Дзвінки, зустрічі, виїзди, переписки в месенджерах — усе це відбувається на ходу. Якщо CRM «живе» тільки в десктопі, менеджер відкладає оновлення даних на потім, а потім частина інформації просто губиться.

Мобільний CRM вирішує цю проблему: ключові дії виконуються в моменті, поки контакт із клієнтом ще «гарячий».

## Що дає мобільний доступ на практиці

### Швидка реакція на ліди

Менеджер бачить новий запит одразу і може відповісти за хвилини, а не години. У конкурентних нішах саме ця різниця часто вирішує, хто забере угоду.

### Актуальні картки клієнтів

Після дзвінка або зустрічі оновлення вноситься одразу: домовленості, наступний крок, дедлайн. Завдяки цьому команда працює з актуальними даними, а не з «версією вчорашнього дня».

### Контроль задач у русі

Коли завдання, нагадування і календар під рукою, менеджер тримає темп навіть у щільному графіку. Менше пропусків — більше закритих угод.

## На що звернути увагу при запуску

Мобільний сценарій має бути простим: мінімум полів для обов'язкового заповнення, зрозумілі статуси, швидке створення задачі в один-два кліки. Інакше команда не буде користуватися додатком регулярно.

Також важливо зберегти єдині правила внесення даних, щоб мобільний доступ підсилював дисципліну, а не створював різнобій у картках.

## Висновок

Мобільний CRM — це не «додаткова зручність», а фактор швидкості продажів. Чим ближче система до реального ритму роботи команди, тим вища конверсія і стабільніший результат.

Подивитися, як це працює в єдиній системі, можна на <a href="https://crm.flamingo-crm.com.ua/" target="_blank" rel="noopener noreferrer">головній сторінці CRM</a>.
    `,
    category: "Мобільний CRM",
    seoKeywords: [
      "мобільний CRM",
      "CRM для менеджерів у полі",
      "швидка реакція на ліди",
      "картки клієнтів у CRM",
      "задачі в CRM",
      "мобільні продажі",
      "CRM у дорозі",
      "контроль угод",
    ],
    author: "Олександр Яремчук",
    authorRole: "CEO, Flamingo CRM",
    date: "2026-01-25",
    image: "/images/hero.png",
    imageAlt: "Мобільний доступ до CRM",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Стаття не знайдена | Flamingo CRM",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: Array.from(new Set([
      ...post.seoKeywords,
      "Flamingo CRM",
      "CRM",
    ])),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
  .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

function formatInlineMarkdown(value: string): string {
  return value.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function renderArticleContent(markdown: string): { html: string; toc: TocItem[] } {
  const lines = markdown.trim().split("\n");
  const htmlParts: string[] = [];
  const toc: TocItem[] = [];

  let inList = false;
  let paragraphBuffer: string[] = [];
  let shouldUseLeadParagraph = false;

  const closeList = () => {
    if (inList) {
      htmlParts.push("</ul>");
      inList = false;
    }
  };

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) {
      return;
    }

    const paragraph = paragraphBuffer.join(" ");
    if (shouldUseLeadParagraph) {
      htmlParts.push(`<p class="lead-paragraph">${formatInlineMarkdown(paragraph)}</p>`);
      shouldUseLeadParagraph = false;
    } else {
      htmlParts.push(`<p>${formatInlineMarkdown(paragraph)}</p>`);
    }
    paragraphBuffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      closeList();
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      closeList();
      const title = line.replace(/^##\s+/, "").trim();
      const id = slugifyHeading(title);
      toc.push({ id, title, level: 2 });
      htmlParts.push(`<h2 id="${id}" class="scroll-mt-32">${formatInlineMarkdown(title)}</h2>`);
      shouldUseLeadParagraph = true;
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      closeList();
      const title = line.replace(/^###\s+/, "").trim();
      const id = slugifyHeading(title);
      toc.push({ id, title, level: 3 });
      htmlParts.push(`<h3 id="${id}" class="scroll-mt-32">${formatInlineMarkdown(title)}</h3>`);
      shouldUseLeadParagraph = false;
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      shouldUseLeadParagraph = false;
      if (!inList) {
        htmlParts.push('<ul class="not-prose my-8 space-y-3">');
        inList = true;
      }

      const item = line.replace(/^-\s+/, "").trim();
      htmlParts.push(`<li class="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[1.05rem] font-light text-gray-300 leading-8">${formatInlineMarkdown(item)}</li>`);
      continue;
    }

    closeList();
    paragraphBuffer.push(line);
  }

  flushParagraph();
  closeList();

  return {
    html: htmlParts.join("\n"),
    toc,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Стаття не знайдена</h1>
            <Link href="/blog" className="text-purple-400 hover:text-purple-300">
              Повернутися до блогу
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const { html, toc } = renderArticleContent(post.content);
  
  // Calculate read time (approx 200 words per minute)
  const wordCount = post.content.trim().split(/\s+/).length;
  const readTimeMin = Math.ceil(wordCount / 200);

  return (
    <>
      <Header />
      <ArticleProgress />
      <main className="min-h-screen bg-[#0a0a0f]">
        <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-36">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />
            <div className="absolute top-16 -left-20 h-72 w-72 rounded-full bg-pink-600/15 blur-[110px]" />
            <div className="absolute top-28 -right-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all hover:border-purple-400/40 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>До блогу</span>
            </Link>

            <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/15 px-4 py-1.5 text-sm font-medium text-purple-200">
                  <Sparkles className="h-4 w-4" />
                  {post.category}
                </span>
              </div>

              <h1 className="max-w-5xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <p className="mt-6 max-w-4xl text-base leading-relaxed text-gray-300 sm:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="inline-flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("uk-UA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{readTimeMin} хв читання</span>
                </div>
                
                {/* Desktop Share Buttons */}
                <div className="hidden sm:block ml-auto border-l border-white/10 pl-6">
                  <ShareButtons url={`https://flamingo-crm.com.ua/blog/${slug}`} title={post.title} />
                </div>
              </div>
              
              {/* Mobile Share Buttons */}
              <div className="mt-8 block sm:hidden pt-6 border-t border-white/10">
                <ShareButtons url={`https://flamingo-crm.com.ua/blog/${slug}`} title={post.title} />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-6 lg:pb-28 lg:pt-10">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
            <article className="lg:col-span-8">
              <div className="relative mb-8 h-72 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/35 via-purple-900/15 to-pink-900/20 shadow-2xl shadow-purple-900/30 sm:h-[26rem] lg:h-[30rem]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority={slug === "yak-obrati-crm-systemu"}
                  className="object-cover object-center opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 via-transparent to-transparent" />
              </div>

              <div className="glass-panel rounded-3xl p-6 shadow-2xl shadow-black/30 sm:p-10">
                <div
                  className="mx-auto max-w-[760px] text-gray-300 [&>h2]:mb-8 [&>h2]:mt-16 [&>h2]:border-b [&>h2]:border-white/10 [&>h2]:pb-4 [&>h2]:text-[1.95rem] [&>h2]:font-bold [&>h2]:leading-tight [&>h2]:text-white [&>h3]:mb-6 [&>h3]:mt-11 [&>h3]:text-[1.45rem] [&>h3]:font-bold [&>h3]:leading-snug [&>h3]:text-purple-100 [&>p]:mb-10 [&>p]:text-[1.14rem] [&>p]:font-light [&>p]:leading-9 [&>p]:tracking-[0.003em] [&>p]:text-gray-300 [&>p.lead-paragraph]:mb-11 [&>p.lead-paragraph]:text-[1.28rem] [&>p.lead-paragraph]:font-normal [&>p.lead-paragraph]:leading-10 [&>p.lead-paragraph]:text-gray-200 [&>ul]:my-8 [&_a]:font-medium [&_a]:text-purple-300 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-purple-200 [&_strong]:font-semibold [&_strong]:text-white"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>

              <div className="mt-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/20 to-pink-600/10 p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-white">Сподобалась стаття?</h3>
                <p className="mt-3 text-gray-300">
                  Перейдіть на головну та подивіться, як ці підходи реалізовані у Flamingo CRM на практиці.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="https://crm.flamingo-crm.com.ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white transition-all hover:from-purple-500 hover:to-pink-400"
                  >
                    Перейти на головну
                  </Link>
                  <Link
                    href="/blog"
                    className="rounded-xl border border-white/15 px-6 py-3 font-medium text-gray-200 transition-colors hover:text-white"
                  >
                    Читати ще статті
                  </Link>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="glass-panel p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Автор матеріалу</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-base font-semibold text-white">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{post.author}</p>
                      <p className="text-sm text-gray-400">{post.authorRole}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Навігація по статті</h3>
                  <nav className="space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5 hover:text-purple-200 ${item.level === 3 ? "pl-6 text-gray-400" : "text-gray-200"}`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="rounded-2xl border border-purple-400/20 bg-gradient-to-b from-purple-500/15 to-transparent p-6">
                  <h3 className="text-lg font-semibold text-white">Застосуйте ідеї відразу</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    Відкрийте головну сторінку, щоб переглянути сценарії автоматизації, структуру воронки та приклади для малого бізнесу.
                  </p>
                  <Link
                    href="https://crm.flamingo-crm.com.ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-purple-300 transition-colors hover:text-purple-200"
                  >
                    Переглянути CRM →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
