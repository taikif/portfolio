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
              <h3 className={styles.card}>
                情報処理安全確保支援士
              </h3>
              <h3 className={styles.card}>
                SC-200
              </h3>
              <h3 className={styles.card}>
                CompTIA CySA+
              </h3>
              <h3 className={styles.card}>
                SG
              </h3>
              <h3 className={styles.card}>
                SEA/J CIBM
              </h3>
            </div>

            <div className={styles.grid}>
            <h3 className={styles.card} style="text-align:center">
              Java
            </h3>
            <h3 className={styles.card} style="text-align:center">
              Python
            </h3>
            <h3 className={styles.card} style="text-align:center">
              C++
            </h3>
            <h3 className={styles.card} style="text-align:center">
              PHP
            </h3>
            <h3 className={styles.card} style="text-align:center">
              Rust
            </h3>
            <h3 className={styles.card} style="text-align:center">
              GO
            </h3>
            <h3 className={styles.card} style="text-align:center">
              HTML
            </h3>
            <h3 className={styles.card} style="text-align:center">
              CSS
            </h3>
            <h3 className={styles.card} style="text-align:center">
              JS
            </h3>
            

            </div>
        </main>
    )

}