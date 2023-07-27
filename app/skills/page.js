import Image from 'next/image'
import styles from 'app/page.module.css'
import Link from 'next/link'

export default function Activities(){
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
                        Skills
                    </h1>
            </div>

            <div className={styles.grid}>
            <h2 className={styles.card}>
              Java
            </h2>
            <h2 className={styles.card}>
              Python
            </h2>
            <h2 className={styles.card}>
              C++
            </h2>
            <h2 className={styles.card}>
              PHP
            </h2>
            <h2 className={styles.card}>
              Rust
            </h2>
            <h2 className={styles.card}>
              GO
            </h2>
            <h2 className={styles.card}>
              HTML
            </h2>
            <h2 className={styles.card}>
              CSS
            </h2>
            <h2 className={styles.card}>
              JS
            </h2>
            

            </div>
        </main>
    )

}