import { Link } from "react-router-dom";

const gallery = [
  { gambar: "/images__1_-removebg-preview.png", nama: "HTML" },
  { gambar: "/app-icon.png", nama: "VS Code" },
  { gambar: "/images__2_-removebg-preview.png", nama: "CSS" },
];

const education = [
  { level: "Sekolah Dasar", school: "SDN Panaragan 1" },
  { level: "Sekolah Menengah Pertama", school: "SMPN 6 Bogor" },
  { level: "Sekolah Menengah Atas", school: "SMAN 10 Bogor" },
  {
    level: "Perguruan Tinggi",
    school: "Universitas Pendidikan Indonesia",
    detail: "Pendidikan Ilmu Komputer",
  },
];

function Section() {
  return (
    <section className="profile landing-profile">
      <div className="profile-content">
        <div className="profile-text">
          <p className="profile-kicker">MAHASISWA / WEB DEVELOPMENT LEARNER</p>
          <h1>
            Halo, saya <span className="profile-name">Aufaa Prie Adrianto.</span>
          </h1>
          <p className="profile-role">
            Mahasiswa Pendidikan Ilmu Komputer di Universitas Pendidikan
            Indonesia.
          </p>
          <p className="profile-copy">
            Saya sedang belajar membangun website dengan HTML dan CSS, sambil
            terus mengeksplorasi cara membuat pengalaman digital yang jelas dan
            mudah digunakan.
          </p>
          <div className="profile-actions">
            <Link className="profile-button" to="/contact">
              Hubungi saya <span aria-hidden="true">&#8599;</span>
            </Link>
            <Link className="profile-link" to="/gallery">
              Lihat galeri
            </Link>
          </div>
          <div className="learning-list" aria-label="Sedang dipelajari">
            <span>Sedang dipelajari</span>
            <span className="learning-tag">HTML</span>
            <span className="learning-tag">CSS</span>
            <span className="learning-tag">Web design</span>
          </div>
        </div>
        <img src="/IMG_7924.JPG" alt="Aufaa Prie Adrianto" />
      </div>
    </section>
  );
}

export function EducationPage() {
  return (
    <section className="education-page">
      <header className="section-heading">
        <p>RIWAYAT PENDIDIKAN</p>
        <h1>Pendidikan</h1>
        <span>Perjalanan belajar saya sejauh ini.</span>
      </header>
      <ol className="education-list">
        {education.map((item, index) => (
          <li className="education-row" key={item.school}>
            <span className="education-number">0{index + 1}</span>
            <span className="education-level">{item.level}</span>
            <div className="education-school">
              <h2>{item.school}</h2>
              {item.detail && <p>{item.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ContactPage() {
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/13faaaa/" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aufaa-prie-adrianto-b4503437b/",
    },
    { name: "GitHub", href: "https://github.com/Aufaa13" },
  ];

  return (
    <section className="contact-page">
      <header className="section-heading">
        <p>HUBUNGI SAYA</p>
        <h1>Contact</h1>
        <span>Terbuka untuk obrolan, ide, dan kolaborasi.</span>
      </header>
      <div className="contact-list">
        <a className="contact-row" href="mailto:aufaaadrianto7@gmail.com">
          <span className="contact-type">Email</span>
          <strong>aufaaadrianto7@gmail.com</strong>
          <span className="contact-arrow" aria-hidden="true">&#8599;</span>
        </a>
        <a className="contact-row" href="tel:+6287813031688">
          <span className="contact-type">WhatsApp</span>
          <strong>+62 878 1303 1688</strong>
          <span className="contact-arrow" aria-hidden="true">&#8599;</span>
        </a>
        {socialLinks.map((link) => (
          <a
            className="contact-row"
            href={link.href}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-type">Sosial media</span>
            <strong>{link.name}</strong>
            <span className="contact-arrow" aria-hidden="true">&#8599;</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function GalleryPage() {
  return (
    <section className="galeri">
      <h1>GALLERY</h1>
      <div className="galeri-images">
        {gallery.map((item) => (
          <img key={item.nama} src={item.gambar} alt={item.nama} />
        ))}
      </div>
    </section>
  );
}

export default Section;