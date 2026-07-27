import { useState } from "react";

const phoneDigits = "79965333801";
const phoneDisplay = "+7 996 533 38 01";
const whatsappUrl = `https://wa.me/${phoneDigits}`;
const telegramUrl = `https://t.me/+${phoneDigits}`;
const vkUrl = "https://vk.com/estorykrd";
const maxUrl = "https://max.ru/";

const socialLinks = [
  { label: "ВКонтакте", href: vkUrl, icon: "/assets/social/vk-official.svg" },
  { label: "WhatsApp", href: whatsappUrl, icon: "/assets/social/whatsapp-filled.svg" },
  { label: "Telegram", href: telegramUrl, icon: "/assets/social/telegram-official-white.svg" },
  { label: "MAX", href: maxUrl, icon: "/assets/social/max-official-icon.svg" },
];

const messengerOptions = [
  { value: "whatsapp", label: "WhatsApp", href: whatsappUrl, icon: "/assets/social/whatsapp-filled.svg" },
  { value: "telegram", label: "Telegram", href: telegramUrl, icon: "/assets/social/telegram-official-white.svg" },
  { value: "max", label: "MAX", href: maxUrl, icon: "/assets/social/max-official-icon.svg" },
];

const photos = {
  hero: "/assets/photos/work/yandex/main-photo.jpg",
  about: "/assets/photos/work/yandex/mkp-photo.jpg",
  components: "/assets/photos/components/yandex/everything-zone.jpg",
};

const works = [
  {
    src: "/assets/photos/work/yandex/main-photo.jpg",
    title: "Мангальная зона с Коптильней, Жаровней, Печью.",
    text: "Мангал, печь, коптильня и вытяжка в едином комплексе.",
    size: "feature",
  },
  {
    src: "/assets/photos/projects/canopy-02.jpg",
    title: "Комплекс с Жаровней и Печью.",
    text: "Индивидуальная комплектация под участок заказчика.",
    size: "standard",
  },
  {
    src: "/assets/photos/projects/canopy-04.jpg",
    title: "Гриль зона с тандыром",
    text: "Рабочая зона и места для инвентаря.",
    size: "standard",
  },
  {
    src: "/assets/photos/projects/canopy-06.jpg",
    title: "Уличная кухня",
    text: "Дерево и металл в одном функциональном решении.",
    size: "standard",
  },
  {
    src: "/assets/photos/projects/roof-06.jpg",
    title: "Мангалы с крышей",
    text: "Зона встроена в архитектуру двора и террасы.",
    size: "standard",
  },
];

const components = [
  {
    src: "/assets/photos/components/yandex/brazier.jpg",
    label: "Мангал",
    text: "Жаровня с откидной крышкой и печкой для казана.",
  },
  {
    src: "/assets/photos/components/yandex/stove.jpg",
    label: "Печка",
    text: "Чугунные кольца, дверка для топки и поддувало.",
  },
  {
    src: "/assets/photos/components/yandex/smokehouse.jpg",
    label: "Коптильня горячего копчения",
    text: "Отдельная секция для приготовления блюд.",
  },
  {
    src: "/assets/photos/components/yandex/tandoor.jpg",
    label: "Место под тандыр",
    text: "Продуманное место для дополнительного очага.",
  },
  {
    src: "/assets/photos/components/yandex/workzone.jpg",
    label: "Рабочая зона",
    text: "Поверхность для подготовки продуктов и сервировки.",
  },
  {
    src: "/assets/photos/components/yandex/sink.jpg",
    label: "Мойка",
    text: "Практичная рабочая поверхность на каждый день.",
  },
  {
    src: "/assets/photos/components/yandex/laser.jpg",
    label: "Рисунок лазерная резка по металлу",
    text: "Рисунок для фасадов и металлических деталей.",
  },
  {
    src: "/assets/photos/components/yandex/ventilation.jpg",
    label: "Вентиляция",
    text: "Вытяжная система для комфортной готовки.",
  },
];

const projectBlocks = [
  {
    title: "Мангальные зоны под навес",
    text: "Комфортное место для готовки и отдыха, защищённое от солнца и дождя.",
    photos: [
      "/assets/photos/projects/canopy-01.jpg",
      "/assets/photos/projects/canopy-02.jpg",
      "/assets/photos/projects/canopy-03.jpg",
      "/assets/photos/projects/canopy-04.jpg",
      "/assets/photos/projects/canopy-05.jpg",
      "/assets/photos/projects/canopy-06.jpg",
    ],
  },
  {
    title: "Мангальные зоны с крышей",
    text: "Полноценная гриль-зона с вытяжкой, печью и рабочими поверхностями.",
    photos: [
      "/assets/photos/projects/roof-01.jpg",
      "/assets/photos/projects/roof-02.jpg",
      "/assets/photos/projects/roof-03.jpg",
      "/assets/photos/projects/roof-04.jpg",
      "/assets/photos/projects/roof-05.jpg",
      "/assets/photos/projects/roof-06.jpg",
    ],
  },
];

const reviews = [
  "/assets/photos/reviews/yandex/review-01.jpg",
  "/assets/photos/reviews/yandex/review-02.jpg",
  "/assets/photos/reviews/yandex/review-03.jpg",
  "/assets/photos/reviews/yandex/review-04.jpg",
  "/assets/photos/reviews/yandex/review-05.jpg",
  "/assets/photos/reviews/yandex/review-06.jpg",
  "/assets/photos/reviews/yandex/review-07.jpg",
  "/assets/photos/reviews/yandex/review-08.jpg",
  "/assets/photos/reviews/yandex/review-09.jpg",
  "/assets/photos/reviews/yandex/review-10.jpg",
  "/assets/photos/reviews/yandex/review-11.jpg",
  "/assets/photos/reviews/yandex/review-12.jpg",
  "/assets/photos/reviews/yandex/review-13.jpg",
  "/assets/photos/reviews/yandex/review-14.jpg",
  "/assets/photos/reviews/yandex/review-15.jpg",
  "/assets/photos/reviews/yandex/review-16.jpg",
  "/assets/photos/reviews/yandex/review-17.jpg",
  "/assets/photos/reviews/yandex/review-18.jpg",
  "/assets/photos/reviews/yandex/review-19.jpg",
  "/assets/photos/reviews/yandex/review-20.jpg",
  "/assets/photos/reviews/yandex/review-21.jpg",
  "/assets/photos/reviews/yandex/review-22.jpg",
  "/assets/photos/reviews/yandex/review-23.jpg",
  "/assets/photos/reviews/yandex/review-24.jpg",
  "/assets/photos/reviews/yandex/review-25.jpg",
  "/assets/photos/reviews/yandex/review-26.jpg",
  "/assets/photos/reviews/yandex/review-27.jpg",
  "/assets/photos/reviews/yandex/review-28.jpg",
  "/assets/photos/reviews/yandex/review-29.jpg",
];

const principles = [
  {
    title: "Гарантированное качество",
    text: "Проверенные материалы и комплектующие от надёжных поставщиков.",
  },
  {
    title: "Точная сборка",
    text: "Каждая деталь проходит контроль до отправки заказчику.",
  },
  {
    title: "Прозрачная работа",
    text: "Комплектация, стоимость и этапы фиксируются заранее.",
  },
];

const process = [
  { title: "Согласовываем проект", text: "Определяем размеры, материалы и комплектацию." },
  { title: "Заключаем договор", text: "Фиксируем стоимость и условия работы." },
  { title: "Изготавливаем", text: "Собираем проект и контролируем каждую деталь." },
  { title: "Доставляем и устанавливаем", text: "Привозим готовую зону и устанавливаем на участке." },
];

const getMessengerUrl = (value, message) => {
  const encodedMessage = encodeURIComponent(message);

  if (value === "whatsapp") return `${whatsappUrl}?text=${encodedMessage}`;
  if (value === "telegram") return `${telegramUrl}?text=${encodedMessage}`;
  return maxUrl;
};

function SocialIcon({ label, href, icon }) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      <img src={icon} alt="" aria-hidden="true" />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [messenger, setMessenger] = useState("");
  const [formState, setFormState] = useState({ message: "", type: "" });

  const closeMenu = () => setMenuOpen(false);

  const openImage = (src, title) => {
    setSelectedImage({ src, title });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setFormState({ message: "Заполните имя и телефон", type: "error" });
      return;
    }

    if (!messenger) {
      setFormState({ message: "Выберите мессенджер для связи", type: "error" });
      return;
    }

    const selectedMessenger = messengerOptions.find((option) => option.value === messenger);
    const message = [
      "Здравствуйте! Хочу рассчитать стоимость мангальной зоны.",
      `Имя: ${form.name.trim()}`,
      `Телефон: ${form.phone.trim()}`,
      `Мессенджер для связи: ${selectedMessenger.label}`,
    ].join("\n");

    window.open(getMessengerUrl(messenger, message), "_blank", "noopener,noreferrer");
    setFormState({ message: `Сообщение подготовлено в ${selectedMessenger.label}`, type: "success" });
    setForm({ name: "", phone: "" });
    setMessenger("");
  };

  const requestCatalog = () => {
    const message = "Здравствуйте! Пришлите, пожалуйста, каталог ЭлитСтори.";
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="ЭлитСтори, на главную">
          <img className="brand-symbol" src="/assets/brand/elit-story-mark.png" alt="" aria-hidden="true" />
          <img className="brand-wordmark" src="/assets/brand/elit-story-lockup.png" alt="ЭлитСтори" />
        </a>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </button>

        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`}>
          <a href="#works" onClick={closeMenu}>Проекты</a>
          <a href="#components" onClick={closeMenu}>Комплектация</a>
          <a href="#process" onClick={closeMenu}>Как работаем</a>
          <a href="#contacts" onClick={closeMenu}>Контакты</a>
          <a className="nav-cta" href="#contacts" onClick={closeMenu}>Рассчитать стоимость</a>
          <div className="menu-contact">
            <a className="menu-phone" href={`tel:+${phoneDigits}`} onClick={closeMenu}>{phoneDisplay}</a>
            <div className="menu-socials" aria-label="Социальные сети">
              {socialLinks.map((social) => <SocialIcon key={social.label} {...social} />)}
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">ЭлитСтори / мангальные зоны</p>
            <h1>Современные гриль-зоны с уникальным дизайном</h1>
            <p className="hero-lead">Индивидуальный проект, изготовление, доставка и установка.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacts">Рассчитать стоимость</a>
              <button className="button button-ghost" type="button" onClick={requestCatalog}>Получить каталог</button>
            </div>
            <div className="hero-note">
              <span>Проекты от 100 000 ₽</span>
              <span>Краснодарский край</span>
            </div>
          </div>
          <div className="hero-media">
            <img src={photos.hero} alt="Мангальная зона ЭлитСтори с мангалом и печью" fetchPriority="high" />
            <div className="hero-media-caption">
              <span>Индивидуальный проект</span>
              <span>Изготовлено ЭлитСтори</span>
              <strong>Производство мангальных зон г. Краснодар- Доставка по всей России</strong>
            </div>
          </div>
        </section>

        <section className="section principles-section" aria-label="Преимущества">
          <div className="principles-intro">
            <h2>От идеи до готовой зоны</h2>
            <p>Проектируем под участок и привычный сценарий готовки.</p>
          </div>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <article className="principle" key={principle.title}>
                <span className="principle-index">0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section works-section" id="works">
          <div className="section-heading">
            <p className="eyebrow">Наши работы</p>
            <h2>Проекты, собранные под конкретный участок</h2>
            <p>Размеры, наполнение и внешний вид подбираем индивидуально.</p>
          </div>
          <div className="works-grid">
            {works.map((work, index) => (
              <button
                className={`work-card work-card-${work.size}`}
                key={work.src}
                type="button"
                onClick={() => openImage(work.src, work.title)}
              >
                <span className="work-image-wrap">
                  <img src={work.src} alt={work.title} loading={index < 2 ? "eager" : "lazy"} />
                </span>
                <span className="work-caption">
                  <strong>{work.title}</strong>
                  <span>{work.text}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section components-section" id="components">
          <div className="section-heading compact-heading">
            <h2>Функциональность без лишнего</h2>
            <p>Соберите комплектацию под то, как вы привыкли готовить.</p>
          </div>
          <div className="component-stage">
            <button className="component-feature" type="button" onClick={() => openImage(photos.components, "Полная комплектация мангальной зоны")}>
              <img src={photos.components} alt="Полная комплектация мангальной зоны" loading="lazy" />
              <span>
                <small>Материалы и детали</small>
                <strong>Всё необходимое в одной зоне</strong>
              </span>
            </button>
            <div className="component-grid">
              {components.map((component, index) => (
                <button
                  className="component-card"
                  type="button"
                  key={component.label}
                  onClick={() => openImage(component.src, component.label)}
                >
                  <img src={component.src} alt={component.label} loading="lazy" />
                  <span className="component-card-copy">
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <strong>{component.label}</strong>
                    <span>{component.text}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-media">
            <img src={photos.about} alt="Готовая мангальная зона ЭлитСтори" loading="lazy" />
          </div>
          <div className="about-copy">
            <h2>Делаем двор центром притяжения</h2>
            <p>Компания «ЭлитСтори» создаёт стильные и функциональные мангальные зоны. Мы проектируем места для готовки, отдыха и встреч с близкими.</p>
            <a className="text-link" href={vkUrl} target="_blank" rel="noreferrer">Посмотреть группу ВКонтакте <span>↗</span></a>
          </div>
        </section>

        <section className="section project-types-section" id="project-types">
          <div className="section-heading">
            <p className="eyebrow">Дизайн-проекты</p>
            <h2>Мангальные зоны, которые мы выполняем</h2>
            <p>В каждой категории показываем по шесть проектов. Этого достаточно, чтобы увидеть разнообразие решений без перегрузки страницы.</p>
          </div>
          <div className="project-types-grid">
            {projectBlocks.map((project, projectIndex) => (
              <article className={`project-type${projectIndex % 2 ? " is-reversed" : ""}`} key={project.title}>
                <div className="project-type-heading">
                  <span className="project-type-number">0{projectIndex + 1}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
                <div className="project-type-gallery">
                  {project.photos.map((src, photoIndex) => (
                    <button
                      className={`project-type-photo project-type-photo-${photoIndex + 1}`}
                      type="button"
                      key={src}
                      onClick={() => openImage(src, project.title)}
                    >
                      <img src={src} alt={`${project.title}, пример ${photoIndex + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="reviews-heading">
            <h2>Отзывы клиентов</h2>
            <p>Реальные сообщения и оценки после получения заказа.</p>
          </div>
          <div className="reviews-track">
            {reviews.map((src, index) => (
              <button className="review-card" type="button" key={src} onClick={() => openImage(src, `Отзыв клиента ${index + 1}`)}>
                <img src={src} alt={`Отзыв клиента ${index + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading compact-heading">
            <h2>Понятный процесс работы</h2>
            <p>От первого обсуждения до установки на участке.</p>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <article className="process-item" key={item.title}>
                <span className="process-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contacts">
          <div className="contact-copy">
            <p className="eyebrow">Рассчитать стоимость</p>
            <h2>Обсудим вашу мангальную зону</h2>
            <p>Оставьте имя и телефон и выберите удобный мессенджер для связи с менеджером.</p>
            <div className="contact-links">
              <a className="contact-phone" href={`tel:+${phoneDigits}`}>{phoneDisplay}</a>
              <div className="contact-socials" aria-label="Социальные сети">
                {socialLinks.map((social) => <SocialIcon key={social.label} {...social} />)}
              </div>
            </div>
          </div>
          <form className="lead-form" onSubmit={handleFormSubmit} noValidate>
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              autoComplete="name"
            />
            <label htmlFor="phone">Номер тел.</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              autoComplete="tel"
            />
            <fieldset className="messenger-picker">
              <legend>Для связи с менеджером в мессенджере поставьте галочку</legend>
              <div className="messenger-options">
                {messengerOptions.map((option) => (
                  <label className={`messenger-option${messenger === option.value ? " is-selected" : ""}`} key={option.value}>
                    <input
                      className="messenger-option-control"
                      type="radio"
                      name="messenger"
                      value={option.value}
                      checked={messenger === option.value}
                      onChange={(event) => setMessenger(event.target.value)}
                    />
                    <span className="messenger-check" aria-hidden="true" />
                    <img src={option.icon} alt="" aria-hidden="true" />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <button className="button button-primary" type="submit">Рассчитать стоимость</button>
            <small className={`form-state${formState.message ? " is-visible" : ""}${formState.type ? ` is-${formState.type}` : ""}`} aria-live="polite">{formState.message}</small>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="footer-logo-link" href="#top" aria-label="ЭлитСтори, на главную">
            <img className="footer-symbol" src="/assets/brand/elit-story-mark.png" alt="" aria-hidden="true" />
            <img className="footer-wordmark" src="/assets/brand/elit-story-lockup.png" alt="ЭлитСтори. Создавай свою историю!" />
          </a>
          <p>Мангальные зоны под заказ. Доставка по всей России</p>
        </div>
        <div className="footer-right">
          <div className="footer-socials" aria-label="Социальные сети">
            {socialLinks.map((social) => <SocialIcon key={social.label} {...social} />)}
          </div>
          <small>Самозанятый, ИНН 231298496001</small>
        </div>
      </footer>

      {selectedImage && (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label={selectedImage.title}>
          <button className="modal-backdrop" type="button" aria-label="Закрыть просмотр" onClick={() => setSelectedImage(null)} />
          <div className="modal-content">
            <button className="modal-close" type="button" onClick={() => setSelectedImage(null)}>Закрыть</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
