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
                        Activities
                    </h1>
                </div>
                <div className={styles.card_activities}>
                <Image src="/blog.svg"
              alt="mail"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority/>

                    <p styles={p_activities}>
                        はてなブログを更新しました（2023/08/02）
                    </p>
                </div>
                <div className={styles.card_activities}>
                <Image src="/blog.svg"
              alt="mail"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority/>

                    <p styles={p_activities}>
                        はてなブログを更新しました（2023/07/20）
                    </p>
                </div>
            
        </main>

    )

}