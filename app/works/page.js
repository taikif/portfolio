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
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
                href="hogehoge"
                
              />
            </div>

        </main>



    )

}