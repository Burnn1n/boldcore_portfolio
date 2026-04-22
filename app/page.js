import Image from "next/image";

export default function Home() {
  return (
    <div className="shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="site-header">
        <div className="container site-header-inner">
          <a className="brand" href="#top" aria-label="Bold Core LLC нүүр хуудас">
            <Image className="brand-mark" src="/yavii-logo.png" alt="Bold Core LLC одоогийн лого" width={56} height={56} />
            <div className="brand-copy">
              <div className="eyebrow">Bold Core LLC</div>
              <p className="brand-title">Дижитал бүтээгдэхүүн хөгжүүлэлт</p>
              <p className="brand-subtitle">Одоогийн брэнд тэмдэг нь Yavii логогоор явж байна</p>
            </div>
          </a>
          <nav className="nav" aria-label="Үндсэн цэс">
            <a href="#about">Танилцуулга</a>
            <a href="#work">Ажлууд</a>
            <a href="#process">Процесс</a>
            <a href="#contact">Холбоо барих</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <article className="hero-card">
              <div className="eyebrow">Бүтээгдэхүүн төвтэй студи</div>
              <h1>Bold Core LLC брэнд, код, бүтээгдэхүүнийг нэг дороос босгоно.</h1>
              <p className="hero-lead">
                Bold Core LLC нь санааг зөвхөн гоё танилцуулга биш, бодит ажилладаг бүтээгдэхүүн болгодог.
                Мобайл апп, backend систем, хэрэглэгчийн урсгал, реалтайм ажиллагаа, нэвтрэлт,
                төлбөрийн логик, удирдлагын бүтэц гээд хэрэглээнд ойр бүх давхаргыг нэг цул шийдэл болгон хөгжүүлж байна.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#work">Хийсэн ажлуудыг үзэх</a>
                <a className="btn btn-secondary" href="mailto:bold.core.soft@gmail.com">Имэйлээр холбогдох</a>
              </div>
              <div className="hero-metrics">
                <div className="metric">
                  <strong>2</strong>
                  <span>Нэг бүтээгдэхүүний мобайл болон backend хоёр цөмийг бүрэн босгосон туршлага</span>
                </div>
                <div className="metric">
                  <strong>Real-time</strong>
                  <span>Мессеж, мэдэгдэл, төлөвийн урсгалтай ажиллагаанд төвлөрсөн хөгжүүлэлт</span>
                </div>
                <div className="metric">
                  <strong>MN</strong>
                  <span>Монгол хэрэглэгчийн зан төлөв, хэл, хэрэглээний орчинд тааруулсан бүтээгдэхүүн</span>
                </div>
              </div>
            </article>

            <aside className="hero-side hero-card">
              <div className="logo-frame">
                <Image src="/yavii-logo.png" alt="Yavii логог ашигласан Bold Core LLC визуал" width={400} height={400} priority sizes="(max-width: 1024px) 90vw, 380px" />
              </div>
              <div className="side-note">
                <div className="side-note-item">
                  <strong>Одоогийн фокус</strong>
                  <p>Хурдан гарах MVP биш, урт хугацаанд ажиллах логик бүтэцтэй бүтээгдэхүүн хийх.</p>
                </div>
                <div className="side-note-item">
                  <strong>Хандлага</strong>
                  <p>Интерфэйс, backend, өгөгдлийн урсгал, хэрэглэгчийн ойлголт бүгд нэг систем гэж хардаг.</p>
                </div>
                <div className="side-note-item">
                  <strong>Брэндийн суурь</strong>
                  <p>Одоогоор Yavii логог компанийн тэмдэг болгон ашиглаж байгаа ч дараагийн шатанд өөрийн брэндийн систем рүү тэлэх боломжтой.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Юу хийдэг вэ</div>
                <h2>Санаанаас эхлээд хэрэглэгч хүрэх хүртэл.</h2>
              </div>
              <p>
                Bold Core LLC нь зөвхөн код бичихгүй. Бүтээгдэхүүний урсгал, бизнесийн логик,
                хэрэглэгчийн харилцаа, ажиллагааны найдвартай байдал, өсөхөд бэлэн архитектурыг хамтад нь шийддэг.
              </p>
            </div>
            <div className="capability-grid">
              <article className="panel">
                <div className="panel-number">01</div>
                <h3>Мобайл бүтээгдэхүүн</h3>
                <p>Expo дээр суурилсан React Native апп, олон дэлгэцтэй урсгал, auth, төлөвийн удирдлага, push мэдэгдэл, олон хэлний дэмжлэгтэй хэрэглээ бүтээнэ.</p>
              </article>
              <article className="panel">
                <div className="panel-number">02</div>
                <h3>Backend систем</h3>
                <p>API, өгөгдлийн бүтэц, realtime socket, файл upload, эрхийн шалгалт, rate limit, cron ажил, notification pipeline зэрэг арын цөмийг цэгцтэй босгоно.</p>
              </article>
              <article className="panel">
                <div className="panel-number">03</div>
                <h3>Бүтээгдэхүүний туршлага</h3>
                <p>Хэрэглэгч хаана эргэлзэх, ямар товч дарах, ямар мэдээлэл эхэнд харагдах ёстойг интерфэйс, текст, дарааллын түвшинд бодож шийднэ.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Хийсэн ажил</div>
                <h2>Одоогоор онцлох гол ажил нь Yavii экосистем.</h2>
              </div>
              <p>
                Нэг аппын цаана зөвхөн дэлгэц биш, жолооч-зорчигчийн харилцаа, аяллын урсгал,
                захиалга, баталгаажуулалт, рейтинг, wallet, realtime мессежийн цогц систем ажиллаж байна.
              </p>
            </div>
            <div className="projects">
              <article className="project-card">
                <div className="project-top">
                  <div className="project-brand">
                    <Image src="/yavii-logo.png" alt="Yavii апп лого" width={68} height={68} />
                    <div>
                      <div className="eyebrow">Онцлох төсөл</div>
                      <h3>Yavii мобайл апп</h3>
                    </div>
                  </div>
                  <span className="tag">Мобайл</span>
                </div>
                <p>Монголын хот хоорондын зорчих хэрэглээнд зориулсан мобайл апп. Жолооч аялал үүсгэж, зорчигч суудал хайж, хүсэлт илгээж, баталгаажуулалт авч, аяллын дараах үнэлгээг системтэйгээр өгөх боломжтой.</p>
                <div className="feature-list">
                  <div className="feature-item">Аялал үүсгэх, хайх, суудал сонгох, шууд баталгаажуулах болон хүсэлтээр батлуулах урсгал</div>
                  <div className="feature-item">Google, Facebook, имэйл нэвтрэлт, баталгаажуулалт, нууц үг сэргээх логик</div>
                  <div className="feature-item">Realtime чат, push notification, жолооч ба зорчигчийн хоёр талт үнэлгээ</div>
                  <div className="feature-item">Wallet, subscription, машин удирдлага, Монгол ба Англи хэлний орчуулгын бүтэц</div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-top">
                  <div className="project-brand">
                    <Image src="/yavii-logo.png" alt="Yavii backend тэмдэглэл" width={68} height={68} />
                    <div>
                      <div className="eyebrow">Системийн цөм</div>
                      <h3>Yavii backend платформ</h3>
                    </div>
                  </div>
                  <span className="tag">Backend</span>
                </div>
                <p>Fastify болон Prisma дээр босгосон backend давхарга. Энэ нь аппын бүх бизнес логик, өгөгдлийн урсгал, notification, websocket, upload, auth, rate limit, тохиргоо болон статик мэдээллийн суурь болж ажиллана.</p>
                <div className="feature-list">
                  <div className="feature-item">Аялал, хүсэлт, машин, хэрэглэгч, wallet, мессеж, үнэлгээний endpoint бүтэц</div>
                  <div className="feature-item">WebSocket болон push fallback ашигласан реалтайм харилцааны үндэс</div>
                  <div className="feature-item">Cron job, upload storage, security middleware, rate limiting зэрэг ажиллагааны суурь хамгаалалт</div>
                  <div className="feature-item">Апп дэлгүүр рүү гаргах түвшний цэгцтэй API ба хөгжүүлэлтийн бүтэц</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Ажиллах арга</div>
                <h2>Хурдан биш, зөв дарааллаар.</h2>
              </div>
              <p>Сайн landing page эсвэл аппын гоё дэлгэц дангаараа хангалтгүй. Дотор нь ямар логик урсах, хэрэглэгч ямар шийдвэр гаргах, дараа нь систем яаж тэлэхийг эхнээс нь тооцож хийдэг.</p>
            </div>
            <div className="timeline">
              <article className="timeline-step">
                <strong>Алхам 1</strong>
                <h3>Асуудлыг яг тодорхойлох</h3>
                <p>Хэнд зориулж байгаа, хэрэглэгч яг ямар мөчид энэ бүтээгдэхүүнийг хэрэглэх вэ, ямар үндсэн урсгал эхлээд ажиллах ёстойг тогтооно.</p>
              </article>
              <article className="timeline-step">
                <strong>Алхам 2</strong>
                <h3>Цөм логикийг босгох</h3>
                <p>Auth, өгөгдөл, API, дэлгэц хоорондын урсгал, realtime төлөв, permission, үндсэн бизнес дүрмийг найдвартайгаар төвлөрүүлж байгуулна.</p>
              </article>
              <article className="timeline-step">
                <strong>Алхам 3</strong>
                <h3>Туршлагыг сайжруулах</h3>
                <p>UI өнгөлөх, текстээ цэгцлэх, хэрэглэгчийн эргэлзэх цэгийг багасгах, deployment болон дараагийн өсөлтөд бэлдэх ажлыг дараагийн шатанд гүйцээнэ.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="contact-card">
              <div>
                <div className="eyebrow">Холбоо барих</div>
                <h2>Шинэ бүтээгдэхүүн, сайт, апп эсвэл backend систем ярилцахад бэлэн.</h2>
                <p>Хэрэв та санаагаа зөв бүтэцтэйгээр гаргах, эсвэл байгаа системээ илүү чанартай болгохыг хүсэж байвал холбогдоно уу. Bold Core LLC нь код, логик, хэрэглэгчийн туршлагыг нэгтгэсэн бодит шийдэл дээр ажиллана.</p>
              </div>
              <div className="contact-meta">
                <a href="mailto:bold.core.soft@gmail.com">bold.core.soft@gmail.com</a>
                <span>Имэйлээр санал, хамтын ажиллагааны хүсэлт илгээнэ үү</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© 2026 Bold Core LLC. Одоогийн таних тэмдэгт Yavii логог ашиглаж буй хувилбар.</div>
      </footer>
    </div>
  );
}
