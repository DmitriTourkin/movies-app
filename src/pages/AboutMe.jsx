export default function AboutMe() {
  return (
    <div className="about-me-page">
      <div className="about-me-container">
        <div className="info">
          <p className="name">Туркин Дмитрий Олегович</p>
          <div>
          <p className="university">Финансовый университет при Правительстве РФ</p>
          </div>
        </div>
        <img></img>
      </div>
      <section className="my-stack">
        <div className="my-stack-container">
          <div>
            <p>Python, Java, JavaScript</p>
            <p>React</p>
            <p>Figma — экспорт фреймов, файлов. Создание UX/UI</p>
          </div>
        </div>
      </section>
      <section>
        <div className="my-projects">
        </div>
      </section>
    </div>
  )
}