import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>M3</title>
      </Head>

      <Header />

      <main>
        <img src="images/banner1.png" alt="" className={styles.banner} />
        <section className={styles.sectionOne}>
          <div>
            <h2>Lorem ipsum</h2>
            <h1>dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Curabitur ut tortor sed lacus egestas vulputate vel sit amet velit. Nulla suscipit magna dui. </p>
          </div>
          <img src="images/network.svg" alt="" />
        </section>

        <section className={styles.sectionTwo}>
          <div className={styles.sectionCards}>
            <div className={styles.cards}>
              <img src="images/shop.svg" alt="" />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. </span>
            </div>
            <div className={styles.cards}>
              <img src="images/shopping-bag.svg" alt="" />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. </span>
            </div>
            <div className={styles.cards}>
              <img src="images/coin.svg" alt="" />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. </span>
            </div>
          </div>
        </section>
        <img src="images/banner2.png" alt="" className={styles.banner2} />
        <section className={styles.sectionThree}>
          <div>
            <div className={styles.cards}>
              <img src="images/money.svg" alt="" />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.</span>
            </div>
            <div className={styles.cards}>
              <img src="images/laptop.svg" alt="" />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.</span>
            </div>
            <div className={styles.cards}>
              <img src="images/coin.svg" alt="" />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.</span>
            </div>
            <div className={styles.cards}>
              <img src="images/phone.svg" alt="" />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.</span>
            </div>

          </div>
        </section>
        <section className={styles.sectionFour}>
          <img src="images/banner3.png" alt="" />
          <div>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate sapien non libero faucibus interdum. In eget tincidunt ipsum.
              Quisque  a tellus at lectus blandit tempor. Ut tristique auctor mi eget hendrerit. Curabitur venenatis felis vitae sagittis venenatis.
              Donec finibus turpis vitae lectus interdum rutrum vitae sed augue.
            </p>
          </div>
        </section>
      </main>

      <Footer />

    </>
  )
}
