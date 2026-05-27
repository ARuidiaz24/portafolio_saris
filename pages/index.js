import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// 1. Importamos dynamic de Next.js
import dynamic from "next/dynamic";

// 2. Cargamos el componente de forma dinámica desactivando SSR (Server-Side Rendering)
const ParticlesBackground = dynamic(
  () => import("../components/ParticlesBackground"),
  { ssr: false }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [activeTab, setActiveTab] = useState("fotos");

  const images1 = [{ original: "https://i.ibb.co/STFvCdb/Avon8502-2.jpg" }, { original: "https://i.ibb.co/ycBxhmST/Avon8502.jpg" }];
  const images2 = [{ original: "https://i.ibb.co/fYH10xgJ/Color-Trend1253.jpg" }, { original: "https://i.ibb.co/ynX9TngR/Color-Trend1253-2.jpg" }];
  const images4 = [{ original: "https://i.ibb.co/prd8NzZ3/IMG-5347.jpg" }, { original: "https://i.ibb.co/DHhfhWvM/IMG-5347-2.jpg" }];
  const images5 = [{ original: "https://i.ibb.co/gLR7h62L/IMG-7349.jpg" }, { original: "https://i.ibb.co/Wp5jngvw/IMG-7349-2.jpg" }];
  const images6 = [{ original: "https://i.ibb.co/DHDyvWYm/ATYPICAL-C1-2021-3903.jpg" }];
  const images7 = [{ original: "https://i.ibb.co/KzrR3KKW/MG-1431.jpg" }];
  const images8 = [{ original: "https://i.ibb.co/twmrzYbw/C2-J-SAN-BALENTIN-0576.jpg" }];
  const images9 = [{ original: "https://i.ibb.co/xStbRCNy/INTERIOR-CAMP-5-1048.jpg" }];
  const images10 = [{ original: "https://i.ibb.co/7Jmz9frs/INTERIOR-CAMP-5-1076.jpg" }];
  const images11 = [{ original: "https://i.ibb.co/nqrgTrhB/INTERIOR-CAMP-3-0986.jpg" }];
  const images12 = [{ original: "https://i.ibb.co/gBmgWCp/INTERIOR-CAMP-3-1173.jpg" }];
  const images13 = [{ original: "https://i.ibb.co/35XLcsnv/SEXY-CAMP-1-2388.jpg" }];
  const images14 = [{ original: "https://i.ibb.co/YB9FMVz7/SEXY-CAMP-1-2562.jpg" }];
  const images15 = [{ original: "https://i.ibb.co/gLyxrtDj/IMG-0110-110.jpg" }];
  const images16 = [{ original: "https://i.ibb.co/YFrwByqs/HOME13757-2.jpg" }, { original: "https://i.ibb.co/99nbQFTm/HOME13757.jpg" }];
  const images17 = [{ original: "https://i.ibb.co/tMyWZv1p/ATYPICAL-C1-2021-2713.jpg" }];
  const images18 = [{ original: "https://i.ibb.co/fm97DkM/ATYPICAL-C1-2021-2738.jpg" }];
  const images19 = [{ original: "https://i.ibb.co/3yj2Xz1m/ATYPICAL-C1-2021-4035.jpg" }];
  const images20 = [{ original: "https://i.ibb.co/JF8pfT6T/HOME13528.jpg" }];
  const images21 = [{ original: "https://i.ibb.co/hJbTS33H/AVON-C182127.jpg" }, { original: "https://i.ibb.co/wZ4gTcpN/AVON-C182127-2.jpg" }];
  const images22 = [{ original: "https://i.ibb.co/kVssbbSr/MONTAJE-4.jpg" }, { original: "https://i.ibb.co/B57XDYXd/MONTAJE-4-2.jpg" }];
  const images23 = [{ original: "https://i.ibb.co/WW3HBZwY/MONTAJE-1.jpg" }, { original: "https://i.ibb.co/XkD2V6J8/MONTAJE-1-2.jpg" }];
  const images24 = [{ original: "https://i.ibb.co/GyfYc3y/AVON-C182627.jpg" }];
  const images25 = [{ original: "https://i.ibb.co/3mjBK6gV/AVON-C182542-2.jpg" }];
  const images26 = [{ original: "https://i.ibb.co/prJqJ3G7/2G5A7994.jpg" }];

  const video1 = [{ id: "1qFpOR7BTDeOZwuQV30RWhx12vreIxbEJ" }];
  const video2 = [{ id: "1inibBsj87We5Sf0-71bmAoQCBR1Hslq1" }];
  const video3 = [{ id: "1Y0nUpQRmKfNQMotxm9JSWDu8_2PiMozP" }];

  return (
    <>
      <Head>
        <title>Sara Alvarez Zapata</title>
        <link rel="icon" href="/corazon.ico" />
      </Head>

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>

          <main className={`${styles.main} relative z-10`}>
            <div className={styles.center}>
              <Image
                className={styles.logo}
                src="/perfil_Saris.jpg"
                alt="perfil Saris"
                width={300}
                height={300}
                priority
              />
              <h1 className={`${styles.title} ${styles.glow}`}>
                Sara Álvarez Zapata
              </h1>
              <div className={styles.aboutMe}>
                <h2 className={`${styles.title_H2}`}>Sobre mí</h2>
              </div>

              <div className={styles.aboutMeTextPresent}>
                <p className={`${styles.text_intro}`}>
                  Me llamo Sara Alvarez Zapata, tengo 24 años y soy de Medellín, Colombia.
                  Soy una apasionada por el arte y enfoqué mi camino profesional en el retoque fotográfico, el montaje y la finalización de archivos para impresión.
                  Cuento con 6 años de experiencia en la industria, trabajando para diferentes empresas donde he podido desarrollarme tanto en retoque como en finalización de catálogo. He formado parte de marcas y compañías como Marketing Personal, Avon en Colombia, Perú y Ecuador, y actualmente trabajo con Leonisa, participando en proyectos para 8 países de Latinoamérica y España.
                  Me caracterizo por ser una persona proactiva, responsable y con un buen desempeño en equipos de trabajo, siempre enfocada en el detalle y la calidad visual de cada proyecto.
                  En mi tiempo libre disfruto ver series y películas, leer y practicar deporte. Además, tengo dos gatos que se han convertido en mis compañeros de vida.
                  Si deseas conocer más sobre mi trabajo o ponerte en contacto conmigo, puedes encontrar mis enlaces al final de esta página.
                </p>
              </div>
            </div>

            <div className={styles.tabsContainer}>
              <button
                className={`${styles.tabButton} ${activeTab === "fotos" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("fotos")}
              ><p className={`${styles.titleGarelly}`}>Galería de Fotos</p>
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "videos" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("videos")}
              >
                <p className={`${styles.titleGarelly}`}>Galería de Videos</p>
              </button>
            </div>

            {activeTab === "fotos" && (
              <div className={styles.pageGarelly}>
                <main className={`${styles.main} relative z-10`}>
                  <h2 className={`${styles.title_H2}`}>Galería de Fotos</h2>
                  <section className={styles.gallery}>
                    <div className={styles.photoGrid}>
                      <ImageGallery items={images1} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images2} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images21} showPlayButton={false} showFullscreenButton={true} />
                    </div>
                  </section>
                  <section className={styles.gallery}>
                    <div className={styles.photoGrid_Horizontal}>
                      <ImageGallery items={images4} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images5} showPlayButton={false} showFullscreenButton={true} />
                    </div>
                  </section>
                  <section className={styles.gallery}>
                    <div className={styles.photoGrid}>
                      <ImageGallery items={images16} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images22} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images23} showPlayButton={false} showFullscreenButton={true} />
                    </div>
                  </section>
                  <section className={styles.gallery}>
                    <div className={styles.photoGrid}>
                      <ImageGallery items={images6} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images19} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images8} showPlayButton={false} showFullscreenButton={true} />
                    </div>
                  </section>
                  <section className={styles.gallery}>
                    <div className={styles.photoGrid_Horizontal}>
                      <ImageGallery items={images9} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images10} showPlayButton={false} showFullscreenButton={true} />
                    </div>
                  </section>
                  <section className={styles.gallery}>
                    <div className={styles.photoGrid}>
                      <ImageGallery items={images24} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images25} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images11} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images12} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images13} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images14} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images15} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images17} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images18} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images7} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images20} showPlayButton={false} showFullscreenButton={true} />
                      <ImageGallery items={images26} showPlayButton={false} showFullscreenButton={true} />
                    </div>
                  </section>
                </main>
              </div>
            )}

            {activeTab === "videos" && (
              <div className={`${styles.pageGarelly} ${styles.videoGallery}`}>
                <main className={`${styles.main} relative z-10`}>
                  <h2 className={`${styles.title_H2}`}>Galería de Videos</h2>
                  <section className={styles.gallery}>
                    <div className={styles.videoGrid}>
                      {video1.map((video, index) => (
                        <div key={index} className={styles.videoContainer}>
                          <div className={styles.videoWrapper}>
                            <iframe
                              src={`https://drive.google.com/file/d/${video.id}/preview`}
                              allow="autoplay"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      ))}

                      {video2.map((video, index) => (
                        <div key={index} className={styles.videoContainer}>
                          <div className={styles.videoWrapper}>
                            <iframe
                              src={`https://drive.google.com/file/d/${video.id}/preview`}
                              allow="autoplay"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      ))}

                      {video3.map((video, index) => (
                        <div key={index} className={styles.videoContainer}>
                          <div className={styles.videoWrapper}>
                            <iframe
                              src={`https://drive.google.com/file/d/${video.id}/preview`}
                              allow="autoplay"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </main>
              </div>
            )}

          </main>

          <footer className={`${styles.footer} relative z-10`}>
            <div className={styles.footerContent}>
              <div className={styles.contactInfo}>
                <h2 className={styles.contactTitle}>Contacto</h2>
                <ul className={styles.contactList}>
                  <li>
                    <Image src="/cellphone_797861.ico" alt="Teléfono" width={24} height={24} className={styles.contactIcon} />
                    <a href="tel:+573194579704" className={styles.contactLink}> +57 319 457 9704</a>
                  </li>
                  <li>
                    <Image src="/google_mail_gmail_logo_icon_159346.ico" alt="Mail" width={24} height={24} className={styles.contactIcon} />
                    <a href="mailto:zapataphoto2@gmail.com" className={styles.contactLink}>zapataphoto2@gmail.com</a>
                  </li>
                  <li>
                    <Image src="/Instagram_icon-icons.com_66804.ico" alt="Instagram" width={24} height={24} className={styles.contactIcon} />
                    <a href="https://www.instagram.com/_im_saris?igsh=YmdnYTRzeHphemkx" target="_blank" rel="noopener noreferrer" className={styles.contactLink}> @_im_saris</a>
                  </li>
                  <li>
                    <Image src="/linkedin_socialnetwork_17441.ico" alt="LinkedIn" width={24} height={24} className={styles.contactIcon} />
                    <a href="https://www.linkedin.com/in/sara-zapata-338659222/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}> Sara Alvarez Zapata</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerCopyright}>
                © 2025 - Portafolio
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
}