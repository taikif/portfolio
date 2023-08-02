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
            <div className={styles.card}>
              <h2>保有資格&#040;セキュリティ系&#041;</h2>
            </div>
            <div className={styles.grid}>
              <p className={styles.card}>
                情報処理安全確保支援士
              </p>
              <p className={styles.card}>
                SC-200
              </p>
              <p className={styles.card}>
                CompTIA CySA+
              </p>
              <p className={styles.card}>
                SG
              </p>
              <p className={styles.card}>
                SEA/J CIBM
              </p>
            </div>

            <div className={styles.card}>
              <h2>コーディングスキル</h2>
            </div>
            <div className={styles.grid}>
            <p className={styles.card}>
              Java
            </p>
            <p className={styles.card}>
              Python
            </p>
            <p className={styles.card}>
              C++
            </p>
            <p className={styles.card}>
              PHP
            </p>
            <p className={styles.card}>
              Rust
            </p>
            <p className={styles.card}>
              GO
            </p>
            <p className={styles.card}>
              HTML
            </p>
            <p className={styles.card}>
              CSS
            </p>
            <p className={styles.card}>
              JS
            </p>
            

            </div>
        </main>
    )

}