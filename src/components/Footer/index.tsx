import styles from './styles.module.scss';


export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <button className={styles.button}>
          <img src="images/insta.svg" alt="instagram" />
        </button>
        <button className={styles.button}>
          <img src="images/facebook.svg" alt="facebook" />
        </button>
        <button className={styles.button}>
          <img src="images/youtube.svg" alt="youtube" />
        </button>
      </div>
      <div>
        <span>Copyright © 2020 - Loja  Comércio Eletrônico </span>
        <span>|</span>
        <span> CNPJ: 000.000.000/0001-00</span>
      </div>

    </footer>
  )
}