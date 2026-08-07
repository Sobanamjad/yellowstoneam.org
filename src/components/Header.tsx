import { useState } from 'react'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: '首頁', href: '#', children: [] },
  {
    label: '協進會簡介',
    href: '#',
    children: [
      { label: '本會章程', href: '#' },
      { label: '組織架構', href: '#' },
      { label: '現任理事長', href: '#' },
      { label: '歷任理事長', href: '#' },
      { label: '秘書長', href: '#' },
      { label: '顧問', href: '#' },
      { label: '理監事名單', href: '#' },
      { label: '何謂董事會治理', href: '#' },
    ],
  },
  {
    label: '服務專區',
    href: '#',
    children: [
      { label: '董事會績效評估', href: '#' },
      { label: '到府課程', href: '#' },
    ],
  },
  {
    label: '新聞中心',
    href: '#',
    children: [
      { label: '最新消息', href: '#' },
      { label: '學術新知', href: '#' },
      { label: '電子報', href: '#' },
      { label: '活動專區', href: '#' },
    ],
  },
  {
    label: '會員中心',
    href: '#',
    children: [
      { label: '會員註冊與登入', href: '#' },
      { label: '入會說明', href: '#' },
      { label: '與我聯繫', href: '#' },
    ],
  },
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* Logo + Site Name — LEFT (margin-right: auto pushes everything else right) */}
        <a href="/" className={styles.brand}>
          <img
            src="https://static.wixstatic.com/media/999e99_d112b416b4c94cf69ca7141f69ec8373~mv2.jpg/v1/fill/w_62,h_62,al_c,q_80/999e99_d112b416b4c94cf69ca7141f69ec8373~mv2.jpg"
            alt="TABG logo"
            className={styles.logo}
            width={62}
            height={62}
          />
          <div className={styles.brandText}>
            <span className={styles.brandZh}>臺灣董事會績效協進會</span>
            <span className={styles.brandEn}>Taiwan Association for Board Governance</span>
          </div>
        </a>

        {/* Nav — RIGHT */}
        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`} aria-label="主選單">
          <ul className={styles.navList}>
            {NAV_ITEMS.map(item => (
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => item.children.length > 0 && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <a
                  href={item.href}
                  className={`${styles.navLink} ${item.label === '首頁' ? styles.navLinkActive : ''}`}
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <svg className={styles.chevron} viewBox="0 0 16 11" width="10" height="7">
                      <path d="M8 10.5L16 1.86193L14.7387 0.5L8 7.77613L1.26133 0.499999L-5.95321e-08 1.86193L8 10.5Z" fill="currentColor"/>
                    </svg>
                  )}
                </a>
                {item.children.length > 0 && openMenu === item.label && (
                  <ul className={styles.dropdown}>
                    {item.children.map(child => (
                      <li key={child.label}>
                        <a href={child.href} className={styles.dropdownLink}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login — FAR RIGHT */}
        <button className={styles.loginBtn} aria-label="登入">
          <svg viewBox="0 0 50 50" width="26" height="26" className={styles.avatarIcon}>
            <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"/>
          </svg>
          <span className={styles.loginLabel}>登入</span>
        </button>

        {/* Hamburger (mobile) */}
        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(v => !v)}
        >
          <span /><span /><span />
        </button>

      </div>
    </header>
  )
}
