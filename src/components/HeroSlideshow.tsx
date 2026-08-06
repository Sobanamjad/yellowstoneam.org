import { useState, useEffect, useCallback } from 'react'
import styles from './HeroSlideshow.module.css'

const SLIDES = [
  {
    id: 'slide1',
    bg: 'https://static.wixstatic.com/media/0ba5583727e04a07a2b0920b3359f2c0.jpg/v1/fill/w_1340,h_583,al_c,q_80,usm_0.66_1.00_0.01/0ba5583727e04a07a2b0920b3359f2c0.jpg',
    bgColor: '#03a3bd',
    title: '提升董事會治理效能 深化企業永續發展',
    subtitle: '臺灣董事會績效協進會提供專業、獨立的董事會績效評估服務\n協助企業落實公司治理，創造長期價值',
    btnLabel: '立即評估',
    btnHref: '#evaluation',
    label: '評估實績',
  },
  {
    id: 'slide2',
    bg: 'https://static.wixstatic.com/media/0ba5583727e04a07a2b0920b3359f2c0.jpg/v1/fill/w_1340,h_583,al_c,q_80/0ba5583727e04a07a2b0920b3359f2c0.jpg',
    bgColor: '#000',
    title: '最新消息 1',
    subtitle: '掌握最新公司治理動態，協助董事會與時俱進',
    btnLabel: '了解更多',
    btnHref: '#news',
    label: '最新消息1',
  },
  {
    id: 'slide3',
    bg: 'https://static.wixstatic.com/media/0ba5583727e04a07a2b0920b3359f2c0.jpg/v1/fill/w_1340,h_583,al_c,q_80/0ba5583727e04a07a2b0920b3359f2c0.jpg',
    bgColor: '#000',
    title: '最新消息 2',
    subtitle: '法規更新及學術研究，強化治理實踐',
    btnLabel: '了解更多',
    btnHref: '#news',
    label: '最新消息2',
  },
  {
    id: 'slide4',
    bg: 'https://static.wixstatic.com/media/0ba5583727e04a07a2b0920b3359f2c0.jpg/v1/fill/w_1340,h_583,al_c,q_80/0ba5583727e04a07a2b0920b3359f2c0.jpg',
    bgColor: '#000',
    title: '最新消息 3',
    subtitle: '歷屆董事會治理效能論壇及教育訓練課程',
    btnLabel: '了解更多',
    btnHref: '#activities',
    label: '最新消息3',
  },
  {
    id: 'slide5',
    bg: 'https://static.wixstatic.com/media/0ba5583727e04a07a2b0920b3359f2c0.jpg/v1/fill/w_1340,h_583,al_c,q_80/0ba5583727e04a07a2b0920b3359f2c0.jpg',
    bgColor: '#000',
    title: '最新消息 4',
    subtitle: '依據最新治理藍圖，全面性的董事會績效評估指標',
    btnLabel: '了解更多',
    btnHref: '#evaluation',
    label: '最新消息4',
  },
  {
    id: 'slide6',
    bg: 'https://static.wixstatic.com/media/0ba5583727e04a07a2b0920b3359f2c0.jpg/v1/fill/w_1340,h_583,al_c,q_80/0ba5583727e04a07a2b0920b3359f2c0.jpg',
    bgColor: '#000',
    title: '活動集錦',
    subtitle: '協助企業識別治理盲點、優化董事會運作',
    btnLabel: '查看活動',
    btnHref: '#activities',
    label: '活動集錦',
  },
]

const INTERVAL_MS = 5000

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() =>
    setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length), [])
  const next = useCallback(() =>
    setCurrent(c => (c + 1) % SLIDES.length), [])

  useEffect(() => {
    const t = setInterval(next, INTERVAL_MS)
    return () => clearInterval(t)
  }, [next])

  const slide = SLIDES[current]

  return (
    <section className={styles.slideshow} aria-label="投影片放映">
      {/* Background */}
      <div
        className={styles.bg}
        style={{ backgroundColor: slide.bgColor }}
      >
        <img src={slide.bg} alt="" className={styles.bgImg} />
        <div className={styles.bgOverlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>{slide.title}</h1>
        <p className={styles.subtitle}>
          {slide.subtitle.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
        <a href={slide.btnHref} className={styles.btn}>
          {slide.btnLabel}
        </a>
      </div>

      {/* Prev / Next arrows */}
      <button
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={prev}
        aria-label="返回"
      >
        <svg viewBox="0 0 21 41" width="21" height="41"><path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"/></svg>
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={next}
        aria-label="下一步"
      >
        <svg viewBox="0 0 21 41" width="21" height="41"><path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"/></svg>
      </button>

      {/* Dot navigation */}
      <nav className={styles.dots} aria-label="投影片">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={s.label}
            aria-current={i === current}
          />
        ))}
      </nav>
    </section>
  )
}
