import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Left – logo + name */}
        <div className={styles.brand}>
          <a href="/" className={styles.logoLink}>
            <img
              src="https://static.wixstatic.com/media/999e99_d112b416b4c94cf69ca7141f69ec8373~mv2.jpg/v1/crop/x_129,y_0,w_774,h_823/fill/w_57,h_58,al_c,q_80/999e99_d112b416b4c94cf69ca7141f69ec8373~mv2.jpg"
              alt="TABG logo"
              width={57}
              height={58}
              className={styles.logo}
            />
          </a>
          <div className={styles.brandText}>
            <a href="/" className={styles.brandZh}>臺灣董事會績效協進會</a>
            <span className={styles.brandEn}>Taiwan Association for Board Governance</span>
          </div>
        </div>

        {/* Right – contact info */}
        <div className={styles.contact}>

          {/* Phone */}
          <div className={styles.contactRow}>
            <span className={styles.icon} aria-hidden="true">
              {/* phone icon */}
              <svg viewBox="0 0 200 200" width="16" height="16" fill="var(--color-dark-blue)">
                <path d="M174.754 137.015l-16.878-17.024c-7.055-7.116-18.563-7.186-25.705-.156l-.283.278-.803.794c-5.874 5.808-15.363 5.761-21.178-.105L78.719 89.344c-5.798-5.849-5.75-15.271.108-21.061l.001.001.283-.279c7.142-7.03 7.211-18.499.156-25.615L62.404 25.383c-7.061-7.122-18.581-7.185-25.72-.14l-.001-.001-11.238 11.11c-4.496 4.445-6.458 10.916-4.936 17.042 14.422 58.077 66.325 112.081 124.426 126.073 6.239 1.503 12.817-.21 17.377-4.711l12.003-11.848.284-.279c7.14-7.03 7.21-18.498.155-25.614z"/>
              </svg>
            </span>
            <p className={styles.contactText}>
              董事會績效評估業務洽詢專線：0963388991 徐副秘書長<br />
              董事會績效評估業務請留連絡資料：info@tabgtw.org
            </p>
          </div>

          {/* Address */}
          <div className={styles.contactRow}>
            <span className={styles.icon} aria-hidden="true">
              {/* location icon */}
              <svg viewBox="0 0 200 200" width="16" height="16" fill="var(--color-dark-blue)">
                <path d="M133.406 122.514c-1.964 3.418-.718 7.826 2.777 9.632 7.917 4.09 12.427 9.062 12.427 13.059 0 8.311-19.389 20.877-48.611 20.877-29.223 0-48.611-12.566-48.611-20.877 0-4.009 4.533-8.996 12.491-13.094 3.507-1.806 4.754-6.229 2.777-9.651a6.95 6.95 0 0 0-9.213-2.693C45.188 126.114 37.5 135.15 37.5 145.206 37.5 164.42 65.481 180 100 180s62.5-15.58 62.5-34.794c0-10.033-7.656-19.053-19.867-25.397a6.95 6.95 0 0 0-9.227 2.705zM100 20c-24.296 0-43.992 19.737-43.992 44.083a43.895 43.895 0 0 0 4.823 20.022c.11.216.231.427.359.633l32.923 53.004c2.716 4.372 9.057 4.372 11.773 0l32.923-53.004c.128-.206.249-.417.359-.633a43.898 43.898 0 0 0 4.823-20.022C143.992 39.737 124.296 20 100 20zm9.127 57.962c-14.009 9.714-29.286-5.595-19.592-19.632a5.329 5.329 0 0 1 1.338-1.341c14.009-9.717 29.288 5.594 19.593 19.632a5.382 5.382 0 0 1-1.339 1.341z"/>
              </svg>
            </span>
            <p className={styles.contactText}>
              100010台北市中正區忠孝東路二段100號7樓之1<br />
              <span className={styles.contactTextEn}>
                7F.-1, 100, Sec. 2, Zhongxiao E. Rd., Zhongzheng Dist., Taipei City 100010, Taiwan (R.O.C.)
              </span>
            </p>
          </div>

          {/* Facebook */}
          <div className={styles.contactRow}>
            <a
              href="https://www.facebook.com/tabgtw.org/?locale=zh_TW"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fbLink}
            >
              <img
                src="https://static.wixstatic.com/media/999e99_193204b8ffa94084a8b8dfec5298b88e~mv2.png/v1/crop/x_0,y_19,w_92,h_84/fill/w_27,h_27,al_c,q_85/FB.png"
                alt="Facebook"
                width={27}
                height={27}
                className={styles.fbIcon}
              />
              <span className={styles.contactText}>臺灣董事會績效協進會TABG</span>
            </a>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className={styles.copyright}>
        <p>© Taiwan Association of Board Governance All Rights Reserved</p>
      </div>
    </footer>
  )
}
