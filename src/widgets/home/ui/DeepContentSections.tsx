export function DeepContentSections() {
  const calcLeft = [
    'Ціна на аукціоні + комісія майданчика',
    'Транспорт з місця аукціону до складу в США',
    'Обробка та зберігання авто на складі',
    'Морський фрахт до порту призначення',
    'Митне оформлення (єдиний платіж або повна ставка)',
    'Доставка з порту до вашого міста',
  ]

  const calcRight = [
    'Тип авто: Sedan, SUV, Truck, Minivan',
    'Рік випуску та обʼєм двигуна',
    'Порт відправки: NJ, FL, CA, TX, Корея',
    'Пункт призначення в Польщі',
    'Тип оформлення та супровід документів',
    'Ваш бюджет і бажані марки',
  ]

  const appFeatures = [
    'Всі аукціони в одному місці: Copart, IAAI, Manheim, Канада, Корея, Китай',
    'AI-аналіз ушкоджень, оцінка ремонту та рекомендація по максимальній ставці',
    'Перевірка історії через Carfax, статусу Title та даних продавця',
    'Tracking контейнера в реальному часі з прогнозом прибуття',
  ]

  const faqs = [
    {
      q: 'Скільки часу займає весь процес імпорту?',
      a: 'В середньому 45-60 днів: залежно від порту, митниці та фінальної доставки у ваше місто.',
    },
    {
      q: 'Чи можна оглянути авто перед купівлею?',
      a: 'Так, надаємо детальний фотоогляд і попередню оцінку. Для авто в дорозі доступне бронювання.',
    },
    {
      q: 'Чи страхується авто під час перевезення?',
      a: 'Так, автомобілі страхуються на етапі морської логістики згідно обраного маршруту.',
    },
    {
      q: 'Що таке «Авто в дорозі»?',
      a: 'Це авто, які вже викуплені та прямують до Європи. Ви отримуєте швидшу доставку з фіксованою ціною.',
    },
  ]

  return (
    <>
      <section className="homex-section homex-calculator reveal" id="calculator">
        <div className="homex-head">
          <p className="homex-kicker">Калькулятор</p>
          <h2>Розрахуйте точну вартість імпорту за лічені секунди</h2>
          <p>Заздалегідь знайте, до якої суми торгуватися на аукціоні. У розрахунку враховані всі ключові витрати.</p>
        </div>

        <div className="homex-calc-grid">
          <article className="homex-calc-card">
            <h3>Комплексна оцінка включає</h3>
            <ul>
              {calcLeft.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </article>

          <article className="homex-calc-card">
            <h3>Персоналізація розрахунку</h3>
            <ul>
              {calcRight.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </article>
        </div>

        <div className="homex-calc-steps">
          <div>
            <h3>Як отримати доступ до калькулятора</h3>
            <ol>
              <li>Звʼяжіться з менеджером BIDBIDERS</li>
              <li>Отримайте доступ до кабінету</li>
              <li>Заповніть параметри авто і маршрут</li>
              <li>Отримайте повний кошторис імпорту</li>
            </ol>
          </div>
          <div className="homex-calc-actions">
            <a href="/catalog">Відкрити каталог</a>
            <a href="tel:+48784890644">Зателефонувати: +48 784 890 644</a>
          </div>
        </div>
      </section>

      <section className="homex-section homex-video reveal">
        <div className="homex-head">
          <p className="homex-kicker">Як це працює</p>
          <h2>Подивіться, як працює наш застосунок</h2>
          <p>Коротка демонстрація шляху: від вибору лота до передачі авто клієнту.</p>
        </div>

        <div className="homex-video-card">
          <img src="/images/hero-main-banner.png" alt="Демонстрація BIDBIDERS" />
          <button type="button" aria-label="Play demo">▶</button>
        </div>
      </section>

      <section className="homex-section homex-app reveal" id="app">
        <div className="homex-app-grid">
          <div>
            <p className="homex-kicker">Мобільний застосунок</p>
            <h2>Всі імпортні дані під контролем на вашому телефоні</h2>
            <p className="homex-app-lead">Відстежуйте ставки, логістику та статуси доставки у будь-який момент.</p>
            <ul>
              {appFeatures.map((line) => <li key={line}>{line}</li>)}
            </ul>
            <div className="homex-store-buttons">
              <a href="#">App Store</a>
              <a href="#">Google Play</a>
            </div>
          </div>

          <aside className="homex-phone-mock">
            <div className="homex-phone-screen">
              <strong>BIDBIDERS</strong>
              <p>2024 Hummer EV SUV</p>
              <span>Статус: в морі</span>
              <span>Прогноз прибуття: 14 квітня</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="homex-section homex-desktop reveal">
        <div className="homex-head">
          <p className="homex-kicker">Вебплатформа</p>
          <h2>Всі дані під контролем на вашому компʼютері</h2>
          <p>Працює у браузері без встановлення: Chrome, Safari, Firefox, Edge.</p>
        </div>
        <div className="homex-desktop-actions">
          <a href="/catalog">Windows</a>
          <a href="/catalog">macOS</a>
        </div>
      </section>

      <section className="homex-section homex-feedback reveal" id="feedback">
        <div className="homex-head">
          <p className="homex-kicker">Відгуки</p>
          <h2>Що кажуть наші клієнти</h2>
        </div>

        <div className="homex-feedback-grid">
          <article>
            <p>Пригнали Jeep Grand Cherokee за 52 дні. Все прозоро, менеджер постійно на звʼязку.</p>
            <span>Олексій, Варшава</span>
          </article>
          <article>
            <p>Ford Escape Hybrid обійшовся суттєво дешевше аналогів у Польщі. Сервіс на рівні.</p>
            <span>Марина, Львів</span>
          </article>
          <article>
            <p>Третє авто через BIDBIDERS: стабільний результат, зрозумілий процес, хороша підтримка.</p>
            <span>Дмитро, Краків</span>
          </article>
        </div>
      </section>

      <section className="homex-section homex-faq reveal" id="faq">
        <div className="homex-head">
          <p className="homex-kicker">FAQ</p>
          <h2>Найчастіші запитання</h2>
        </div>

        <div className="homex-faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="homex-section homex-blog reveal" id="blog">
        <div className="homex-head">
          <p className="homex-kicker">Блог</p>
          <h2>Корисні матеріали</h2>
        </div>
        <div className="homex-blog-grid">
          <article>
            <h3>Як купити авто з Copart: покроково</h3>
            <a href="#">Читати</a>
          </article>
          <article>
            <h3>Розмитнення авто: нові ставки та правила</h3>
            <a href="#">Читати</a>
          </article>
          <article>
            <h3>ТОП авто до $20 000 на аукціонах США</h3>
            <a href="#">Читати</a>
          </article>
        </div>
      </section>
    </>
  )
}
