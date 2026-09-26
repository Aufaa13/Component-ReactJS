import React from "react";

const gallery = [
  { gambar: "/images__1_-removebg-preview.png", nama: "HTML" },
  { gambar: "/app-icon.png", nama: "VS Code" },
  { gambar: "/images__2_-removebg-preview.png", nama: "CSS" },
];

function Section() {
  return (
    <>
      <div className="profile" id="profile">
        <h1>ABOUT ME</h1>
        <div className="profile-content">
          <div className="profile-text">
            <h2>PROFILE</h2>
            <p>
              Perkenalkan nama saya aufaa prie adrianto mahasiswa pendidikan
              ilmu komputer di universitas pendidikan indonesia. Saya sedang
              belajar membuat website dengan css dan HTML.
            </p>
          </div>
          <img src="/IMG_7924.JPG" alt="foto sendiri" />
        </div>
      </div>

      <div className="bottom-content">
        <div className="edu-profile" id="education">
          <h2>Education</h2>
          <ul>
            <li>SDN PANARAGAN 1</li>
            <li>SMPN 6 BOGOR</li>
            <li>SMAN 10 BOGOR</li>
          </ul>
        </div>

        <div className="sosmed" id="sosmed">
          <h2>Sosmed</h2>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/13faaaa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aufaa-prie-adrianto-b4503437b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Aufaa13"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>

        <div className="contact" id="contact">
          <h2>Contact</h2>
          <p>aufaaadrianto7@gmail.com</p>
          <p>WhatsApp: 087813031688</p>
        </div>
      </div>

      <div className="galeri" id="galeri">
        <h2>Galery</h2>
        <div className="galeri-images">
          {gallery.map((item, index) => (
            <img key={index} src={item.gambar} alt={item.nama} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Section;