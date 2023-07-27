import Image from 'next/image'
import styles from 'app/page.module.css'
import Link from 'next/link'

export default function Works(){
    return(
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                   <code className={styles.code}><Link href="/" replace>Back to Top</Link></code> 
                </p>
                <div>
                  <a
                    href="https://github.com/taikif"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                    src="/taikif_logo_text_2.svg"
                    alt="Taikif Logo"
                    className={styles.vercelLogo}
                    width={200}
                    height={100}
                    priority
                    />
                  </a>
                </div>
            </div>

            <div className={styles.center}>
              <h1>
                Works
              </h1>
            </div>

            <div className={styles.grid}>
              <a
                href="https://my.prairie.cards/u/taikif"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <h2>
                  prairie-card<span>-&gt;</span>
                </h2>
                <p>
                  Degital business card.
                </p>
              </a>

                <a
                  href="https://taikif.hatenablog.com/"
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>
                    Blog<span>-&gt;</span>
                  </h2>
                  <p>
                    Hatena-Blog.
                  </p>
                </a>

                <a
                  href="https://github.com/taikif"
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>
                    Github<span>-&gt;</span>
                  </h2>
                  <p>
                    What I have made.
                  </p>
                </a>
              </div>

        </main>



    )

}