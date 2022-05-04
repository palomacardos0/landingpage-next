import styles from './styles.module.scss';


export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://www.instagram.com/" target="_blank" className={styles.iconSocialMedia} rel="noreferrer">
          <img src="images/insta.svg" alt="instagram icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" className={styles.iconSocialMedia} rel="noreferrer">
          <img src="assets/facebook.svg" alt="facebook icon" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" className={styles.iconSocialMedia} rel="noreferrer">
          <img src="assets/youtube.svg" alt="youtube icon" />
        </a>
      </div>
      <div>
        <span>Copyright © 2020 - Loja  Comércio Eletrônico </span>
        <span>|</span>
        <span> CNPJ: 000.000.000/0001-00</span>
      </div>

    </footer>
  )
}