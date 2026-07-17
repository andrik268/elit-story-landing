import { useState } from "react";

const phoneDigits = "79965333801";
const phoneDisplay = "+7 996 533-38-01";
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
  hero: "/assets/photos/work/1776630894034.jpg",
  about: "/assets/photos/work/1779528643822.jpg",
  components: "/assets/photos/components/IMG_20260423_205622_871.jpg",
};

const works = [
  {
    src: "/assets/photos/work/1776630894034.jpg",
    title: "Мангальная зона под заказ",
    text: "Проект с рабочей поверхностью, мойкой и вытяжкой.",
    size: "wide",
  },
  {
    src: "/assets/photos/work/1776632973773.jpg",
    title: "Комплекс с печью",
    text: "Индивидуальная комплектация под участок заказчика.",
    size: "tall",
  },
  {
    src: "/assets/photos/work/1779454017808.jpg",
    title: "Гриль-зона с хранением",
    text: "Продуманная рабочая зона и места для инвентаря.",
    size: "standard",
  },
  {
    src: "/assets/photos/work/editing_result_94109d83366111f18bdf16670c5a10cb_1.jpg",
    title: "Уличная кухня",
    text: "Фактура дерева и металл в одном функциональном решении.",
    size: "standard",
  },
  {
    src: "/assets/photos/work/editing_result_40ea4cc643fb11f19b45f22bb2ed8277_1.jpg",
    title: "Проект для частного дома",
    text: "Зона встроена в архитектуру двора и террасы.",
    size: "standard",
  },
  {
    src: "/assets/photos/work/editing_result_d19edbe13c2c11f1bdbd9e3417dc834e_1.jpg",
    title: "Комплекс с большой рабочей зоной",
    text: "Место для готовки, сервировки и хранения в одном проекте.",
    size: "wide",
  },
];

const components = [
  {
    src: "/assets/photos/components/1777539341536.jpg",
    label: "Мойка",
    text: "Практичная рабочая поверхность для ежедневного использования.",
  },
  {
    src: "/assets/photos/components/1783768233977.jpg",
    label: "Мангал",
    text: "Центральный элемент зоны с индивидуальной конфигурацией.",
  },
  {
    src: "/assets/photos/components/1783770405176.jpg",
    label: "Печь",
    text: "Дополнительные элементы под привычный сценарий готовки.",
  },
  {
    src: "/assets/photos/components/IMG_20251230_113252_224.jpg",
    label: "Фасады и хранение",
    text: "Закрытые секции помогают держать всё необходимое под рукой.",
  },
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
    text: "Используем только проверенные материалы и комплектующие от надёжных поставщиков.",
  },
  {
    title: "Безупречное исполнение",
    text: "Каждая деталь проходит контроль, чтобы результат соответствовал ожиданиям.",
  },
  {
    title: "Прозрачность на всех этапах",
    text: "Вы всегда знаете, за что платите, и получаете именно то, что заказали.",
  },
];

const process = [
  { title: "Договор", text: "Фиксируем проект, комплектацию и условия работы." },
  { title: "Предоплата", text: "После согласования запускаем изготовление." },
  { title: "Остаток", text: "Окончательный расчёт после готовности проекта." },
  { title: "Доставка и установка", text: "Привозим и устанавливаем в Краснодарском крае." },
];

const directions = [
  {
    title: "Капсульные дома",
    src: "/assets/photos/sketches/1775458380507.jpg",
    alt: "Проект загородного пространства с мангальной зоной",
  },
  {
    title: "Модульные бани",
    src: "/assets/photos/sketches/1777137561438.jpg",
    alt: "Крытая мангальная зона с рабочей поверхностью",
  },
  {
    title: "Купели",
    src: "/assets/photos/work/1782584598939.jpg",
    alt: "Высокий мангал с печью для загородного участка",
  },
  {
    title: "Джакузи",
    src: "/assets/photos/work/1779455370766.jpg",
    alt: "Мангальная зона с вытяжным колпаком",
  },
  {
    title: "Мангальные зоны",
    src: "/assets/photos/work/1776630894034.jpg",
    alt: "Мангальная зона под заказ",
  },
  {
    title: "Садовая мебель",
    src: "/assets/photos/work/editing_result_aeb230d53a6a11f188c03e58e9dfdf7d_1.jpg",
    alt: "Уличная кухня с рабочей поверхностью",
  },
  {
    title: "Металлоконструкции",
    src: "/assets/photos/work/editing_result_bd129942725411f1a4fe6ab37608c299_1.jpg",
    alt: "Металлическая конструкция мангальной зоны",
  },
  {
    title: "Строительство и благоустройство",
    src: "/assets/photos/work/editing_result_5f032aaa725411f1bd855219c512ffb0_1.jpg",
    alt: "Проект благоустройства с мангальной зоной",
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
            <p className="hero-lead">Индивидуальный проект под ваш участок и бюджет. Изготовление, доставка и установка.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacts">Рассчитать стоимость</a>
              <button className="button button-ghost" type="button" onClick={requestCatalog}>Скачать каталог</button>
            </div>
            <div className="hero-note">
              <span>От 100 000 ₽</span>
              <span>Краснодарский край</span>
            </div>
          </div>
          <div className="hero-media">
            <img src={photos.hero} alt="Мангальная зона ЭлитСтори с рабочей поверхностью" fetchPriority="high" />
            <div className="hero-media-caption">
              <span>Проект под заказ</span>
              <span>ЭлитСтори</span>
            </div>
          </div>
        </section>

        <section className="section principles-section">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">Три принципа работы</p>
            <h2>Место для отдыха, которое работает на вас</h2>
            <p>Мы превращаем обычные участки в идеальные места для отдыха и душевных встреч.</p>
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
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">Наши работы</p>
            <h2>Каждый проект собирается под конкретный участок</h2>
            <p>Отдельная зона для готовки, общения и хранения. Размеры и наполнение подбираем индивидуально.</p>
          </div>
          <div className="works-grid">
            {works.map((work, index) => (
              <button
                className={`work-card work-card-${work.size}`}
                key={work.src}
                type="button"
                onClick={() => setSelectedImage({ src: work.src, title: work.title })}
              >
                <span className="work-image-wrap">
                  <img src={work.src} alt={work.title} loading={index < 2 ? "eager" : "lazy"} />
                  <span className="work-open">Открыть</span>
                </span>
                <span className="work-caption">
                  <strong>{work.title}</strong>
                  <span>{work.text}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section dark-section components-section" id="components">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">Комплектация</p>
            <h2>Всё необходимое в одной зоне</h2>
            <p>От планировки до выбора материалов. Учитываем, как вы будете готовить, хранить и отдыхать.</p>
          </div>
          <div className="components-layout">
            <div className="component-feature">
              <img src={photos.components} alt="Деревянные фасады и рабочая поверхность мангальной зоны" loading="lazy" />
              <div className="component-feature-copy">
                <span>Материалы и детали</span>
                <strong>Функциональность без лишнего</strong>
              </div>
            </div>
            <div className="component-list">
              {components.map((component) => (
                <button
                  className="component-row"
                  type="button"
                  key={component.label}
                  onClick={() => setSelectedImage({ src: component.src, title: component.label })}
                >
                  <img src={component.src} alt={component.label} loading="lazy" />
                  <span>
                    <strong>{component.label}</strong>
                    <small>{component.text}</small>
                  </span>
                  <b aria-hidden="true">↗</b>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-media">
            <img src={photos.about} alt="Мангальная зона ЭлитСтори в готовом интерьере" loading="lazy" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">О компании</p>
            <h2>Мы знаем, как сделать двор центром притяжения</h2>
            <p>«ЭлитСтори» лидер в создании стильных и функциональных мангальных зон. Мы команда профессионалов, которые превращают обычные участки в идеальные места для отдыха и душевных встреч.</p>
            <p>Входим в тройку лучших по Краснодарскому краю и в десятку по России. Изготавливаем не только мангальные зоны, но и занимаемся строительством и благоустройством.</p>
            <a className="text-link" href={vkUrl} target="_blank" rel="noreferrer">Посмотреть группу ВКонтакте <span>↗</span></a>
          </div>
        </section>

        <section className="section directions-section">
          <div className="directions-heading">
            <p className="eyebrow">Больше, чем мангальные зоны</p>
            <h2>Создаём пространства для загородной жизни</h2>
          </div>
          <div className="directions-grid">
            {directions.map((direction, index) => (
              <button
                className="direction-item"
                key={direction.title}
                type="button"
                onClick={() => setSelectedImage({ src: direction.src, title: direction.title })}
              >
                <span className="direction-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="direction-body">
                  <strong>{direction.title}</strong>
                  <span className="direction-photo">
                    <img src={direction.src} alt={direction.alt} loading="lazy" />
                    <span className="direction-photo-label">Фото</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
          <div className="sketch-strip">
            {sketches.map((src, index) => (
              <button type="button" key={src} onClick={() => setSelectedImage({ src, title: `Пример проекта ${index + 1}` })}>
                <img src={src} alt={`Пример мангальной зоны ${index + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">Порядок работы</p>
            <h2>Понятный процесс от идеи до установки</h2>
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
            <h2>Расскажите, какой должна быть ваша зона</h2>
            <p>Оставьте имя и телефон. Сообщение откроется в WhatsApp, где можно будет отправить фото участка и обсудить проект.</p>
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
