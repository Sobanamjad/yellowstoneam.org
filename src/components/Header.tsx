import { useState } from 'react'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: '首頁', href: '/', children: [] },
  {
    label: '協進會簡介',
    href: '#',
    children: [
      { label: '本會章程', href: '#regulation' },
      { label: '組織架構', href: '#organization' },
      { label: '現任理事長', href: '#chairman' },
      { label: '歷任理事長', href: '#past-chairmen' },
      { label: '秘書長', href: '#secretary' },
      { label: '顧問', href: '#advisors' },
      { label: '理監事名單', href: '#directors' },
      { label: '何謂董事會治理', href: '#about-governance' },
    ],
  },
  {
    label: '服務專區',
    href: '#',
    children: [
      { label: '董事會績效評估', href: '#evaluation' },
      { label: '到府課程', href: '#on-site' },
    ],
  },
  {
    label: '新聞中心',
    href: '#',
    children: [
      { label: '最新消息', href: '#news' },
      { label: '學術新知', href: '#academic' },
      { label: '電子報', href: '#newsletter' },
      { label: '活動專區', href: '#activities' },
    ],
  },
  {
    label: '會員中心',
    href: '#',
    children: [
      { label: '會員註冊與登入', href: '#signup' },
      { label: '入會說明', href: '#join' },
      { label: '與我聯繫', href: '#contact' },
    ],
  },
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo + Site Name */}
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

        {/* Login button */}
        <a href="#login" className={styles.loginBtn}>登入</a>

        {/* Hamburger (mobile) */}
        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Navigation */}
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
    </header>
  )
}
