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

const photos = {
  hero: "/assets/photos/work/main-client.jpg",
  about: "/assets/photos/work/1779528643822.jpg",
  components: "/assets/photos/work/mkp.jpg",
};

const works = [
  {
    src: "/assets/photos/work/mkp.jpg",
    title: "Мангальная зона под заказ",
    text: "Мангал, печь, коптильня и вытяжка в едином комплексе.",
    size: "feature",
  },
  {
    src: "/assets/photos/work/1776632973773.jpg",
    title: "Комплекс с печью",
    text: "Индивидуальная комплектация под участок заказчика.",
    size: "standard",
  },
  {
    src: "/assets/photos/work/1779454017808.jpg",
    title: "Гриль-зона с хранением",
    text: "Рабочая зона и места для инвентаря.",
    size: "standard",
  },
  {
    src: "/assets/photos/work/editing_result_94109d83366111f18bdf16670c5a10cb_1.jpg",
    title: "Уличная кухня",
    text: "Дерево и металл в одном функциональном решении.",
    size: "standard",
  },
  {
    src: "/assets/photos/work/editing_result_40ea4cc643fb11f19b45f22bb2ed8277_1.jpg",
    title: "Проект для частного дома",
    text: "Зона встроена в архитектуру двора и террасы.",
    size: "standard",
  },
];

const components = [
  {
    src: "/assets/photos/components/brazier-kazan.jpg",
    label: "Мангал",
    text: "Жаровня с откидной крышкой и печкой для казана.",
  },
  {
    src: "/assets/photos/components/stove-cast-iron.jpg",
    label: "Печка",
    text: "Чугунные кольца, дверка для топки и поддувало.",
  },
  {
    src: "/assets/photos/components/smokehouse-hot.jpg",
    label: "Коптильня горячего копчения",
    text: "Отдельная секция для приготовления блюд.",
  },
  {
    src: "/assets/photos/components/tandoor-space.jpg",
    label: "Место под тандыр",
    text: "Продуманное место для дополнительного очага.",
  },
  {
    src: "/assets/photos/components/IMG_20260423_205622_871.jpg",
    label: "Рабочая зона",
    text: "Поверхность для подготовки продуктов и сервировки.",
  },
  {
    src: "/assets/photos/components/1777539341536.jpg",
    label: "Мойка",
    text: "Практичная рабочая поверхность на каждый день.",
  },
  {
    src: "/assets/photos/components/IMG_20251230_113252_224.jpg",
    label: "Рисунок лазерная резка по металлу",
    text: "Рисунок для фасадов и металлических деталей.",
  },
  {
    src: "/assets/photos/components/1783771132005.jpg",
    label: "Вентиляция",
    text: "Вытяжная система для комфортной готовки.",
  },
];

const equipment = [
  {
    src: "/assets/photos/equipment/grill-thermometer.jpg",
    title: "Жаровня с термодатчиком",
    text: "Контроль температуры во время приготовления.",
  },
  {
    src: "/assets/photos/equipment/hot-zone-frame.jpg",
    title: "Каркас горячей зоны",
    text: "Основа для индивидуальной комплектации.",
  },
  {
    src: "/assets/photos/equipment/stainless-countertop.jpg",
    title: "Столешница из нержавеющей стали",
    text: "Стойкая к нагреву рабочая поверхность.",
  },
  {
    src: "/assets/photos/equipment/oak-cabinet.jpg",
    title: "Тумба с дубовой столешницей",
    text: "Хранение и натуральная рабочая поверхность.",
  },
  {
    src: "/assets/photos/equipment/start-sandwich.jpg",
    title: "Старт-сэндвич",
    text: "Безопасный переход дымохода.",
  },
  {
    src: "/assets/photos/equipment/chimney-cap.jpg",
    title: "Труба сэндвич с зонтом",
    text: "Защита вентиляционного канала от осадков.",
  },
];

const projectBlocks = [
  {
    title: "Мангальные зоны под навес",
    text: "Комфортное место для готовки и отдыха, защищённое от солнца и дождя.",
    photos: [
      "/assets/photos/work/editing_result_aeb230d53a6a11f188c03e58e9dfdf7d_1.jpg",
      "/assets/photos/work/editing_result_40ea4cc643fb11f19b45f22bb2ed8277_1.jpg",
      "/assets/photos/work/1779528643822.jpg",
      "/assets/photos/work/1776630894034.jpg",
      "/assets/photos/work/editing_result_d19edbe13c2c11f1bdbd9e3417dc834e_1.jpg",
      "/assets/photos/work/editing_result_94109d83366111f18bdf16670c5a10cb_1.jpg",
    ],
  },
  {
    title: "Мангальные зоны с крышей",
    text: "Полноценная гриль-зона с вытяжкой, печью и рабочими поверхностями.",
    photos: [
      "/assets/photos/work/main-client.jpg",
      "/assets/photos/work/mkp.jpg",
      "/assets/photos/work/1779454017808.jpg",
      "/assets/photos/work/1776632973773.jpg",
      "/assets/photos/work/editing_result_252d379f719411f19b4ceed2a358ae6c_1.jpg",
      "/assets/photos/work/1782584598939.jpg",
    ],
  },
];

const reviews = [
  "/assets/photos/reviews/review-01.jpg",
  "/assets/photos/reviews/review-02.jpg",
  "/assets/photos/reviews/review-03.jpg",
  "/assets/photos/reviews/review-04.jpg",
  "/assets/photos/reviews/review-05.jpg",
  "/assets/photos/reviews/review-06.jpg",
];

const sketches = [
  "/assets/photos/sketches/1775458380507.jpg",
  "/assets/photos/sketches/1777137561438.jpg",
  "/assets/photos/sketches/editing_result_4bc42b5e4c9011f198467e168c9bf136_1.jpg",
  "/assets/photos/sketches/editing_result_54a713f738fe11f1a5c83e58e9dfdf7d_1.jpg",
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

const directions = [
  {
    title: "Капсульные дома",
    src: "/assets/photos/sketches/1775458380507.jpg",
    alt: "Проект капсульного дома",
  },
  {
    title: "Модульные бани",
    src: "/assets/photos/sketches/1777137561438.jpg",
    alt: "Проект модульной бани",
  },
  {
    title: "Купели",
    src: "/assets/photos/work/1782584598939.jpg",
    alt: "Купель для загородного участка",
  },
  {
    title: "Джакузи",
    src: "/assets/photos/work/1779455370766.jpg",
    alt: "Джакузи для загородного участка",
  },
  {
    title: "Мангальные зоны",
    src: "/assets/photos/work/mkp.jpg",
    alt: "Мангальная зона под заказ",
  },
  {
    title: "Садовая мебель",
    src: "/assets/photos/work/editing_result_aeb230d53a6a11f188c03e58e9dfdf7d_1.jpg",
    alt: "Садовая мебель для зоны отдыха",
  },
  {
    title: "Металлоконструкции",
    src: "/assets/photos/work/editing_result_bd129942725411f1a4fe6ab37608c299_1.jpg",
    alt: "Металлическая конструкция мангальной зоны",
  },
  {
    title: "Строительство и благоустройство",
    src: "/assets/photos/work/editing_result_5f032aaa725411f1bd855219c512ffb0_1.jpg",
    alt: "Проект благоустройства участка",
  },
];

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
  const [formState, setFormState] = useState("");

  const closeMenu = () => setMenuOpen(false);

  const openImage = (src, title) => {
    setSelectedImage({ src, title });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setFormState("Заполните имя и телефон");
      return;
    }

    const message = [
      "Здравствуйте! Хочу рассчитать стоимость мангальной зоны.",
      `Имя: ${form.name.trim()}`,
      `Телефон: ${form.phone.trim()}`,
    ].join("\n");

    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setFormState("Сообщение подготовлено в WhatsApp");
    setForm({ name: "", phone: "" });
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

        <section className="section equipment-section" id="equipment">
          <div className="section-heading compact-heading">
            <h2>Дополнительное оборудование</h2>
            <p>Элементы, которые расширяют возможности горячей зоны.</p>
          </div>
          <div className="equipment-track">
            {equipment.map((item) => (
              <button className="equipment-card" type="button" key={item.title} onClick={() => openImage(item.src, item.title)}>
                <img src={item.src} alt={item.title} loading="lazy" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </span>
              </button>
            ))}
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

        <section className="section directions-section">
          <div className="directions-heading">
            <p className="eyebrow">Больше, чем мангальные зоны</p>
            <h2>Пространства для загородной жизни</h2>
            <p>Нажмите на направление, чтобы посмотреть пример.</p>
          </div>
          <div className="directions-grid">
            {directions.map((direction, index) => (
              <button
                className="direction-item"
                key={direction.title}
                type="button"
                onClick={() => openImage(direction.src, direction.title)}
              >
                <span className="direction-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="direction-photo">
                  <img src={direction.src} alt={direction.alt} loading="lazy" />
                </span>
                <strong>{direction.title}</strong>
              </button>
            ))}
          </div>
          <div className="sketch-strip">
            {sketches.map((src, index) => (
              <button type="button" key={src} onClick={() => openImage(src, `Пример проекта ${index + 1}`)}>
                <img src={src} alt={`Пример проекта ${index + 1}`} loading="lazy" />
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
            <p>Оставьте имя и телефон. Сообщение откроется в WhatsApp, где можно отправить фото участка и уточнить детали.</p>
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
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              autoComplete="tel"
            />
            <button className="button button-primary" type="submit">Рассчитать стоимость</button>
            <small className={formState ? "form-state is-visible" : "form-state"} aria-live="polite">{formState}</small>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="footer-logo-link" href="#top" aria-label="ЭлитСтори, на главную">
            <img className="footer-symbol" src="/assets/brand/elit-story-mark.png" alt="" aria-hidden="true" />
            <img className="footer-wordmark" src="/assets/brand/elit-story-lockup.png" alt="ЭлитСтори. Создавай свою историю!" />
          </a>
          <p>Мангальные зоны под заказ. Краснодарский край.</p>
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
