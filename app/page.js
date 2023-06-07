import Image from 'next/image'
import styles from 'app/page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome!!&nbsp;
          <code className={styles.code}>This is Top</code>
        </p>
        <div>
          <a
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/taikif_logo_text_2.svg"
              alt="Vercel Logo"
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
          Portfolio
        </h1>
      </div>

      <div className={styles.grid}>
        <a
          href="/works"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Works <span>-&gt;</span>
          </h2>
          <p>The work I have made so far.</p>
        </a>

        <a
          href="/activities"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Activities<span>-&gt;</span>
          </h2>
          <p>Activities carried out to date.</p>
        </a>

        <a
          href="/contact"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>You can contact me from here.</p>
        </a>

        <a
          href="skills"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Skills <span>-&gt;</span>
          </h2>
          <p>
            What I could do.
          </p>
        </a>
      </div>




    </main>
  )
}
