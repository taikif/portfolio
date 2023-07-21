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
                    test
                </div>
                <div>
                    test
                </div>
                <div>
                    test
                </div>

            </div>
            
        </main>

    )

}