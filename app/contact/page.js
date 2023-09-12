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
                        Contact
                    </h1>
            </div>
            <div className={styles.card_contact}>
              <Image src="/mail_pic.svg"
              alt="mail"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority/>

              <h3 className={styles.h3_contact}>xxxtaikif@gmail.com</h3>
            </div>
            <div className={styles.card_contact}>
            <Image src="/discord.svg"
              alt="mail"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority/>

              <h3 className={styles.h3_contact}>taikif</h3>
            </div>
            <div className={styles.card_contact}>
            <Image src="/twitter.svg"
              alt="twitter(x)"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority/>

              <h3 className={styles.h3_contact}>@enjoy_ctf</h3>
            </div>
            


        </main>
    )

}