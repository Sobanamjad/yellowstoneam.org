import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './HeroSlideshow.module.css'

const SLIDES = [
  {
    id: 'slide1',
    bg: '/0ba5583727e04a07a2b0920b3359f2c0.jpg',
    bgColor: '#03a3bd',
    title: '提升董事会治理效能 深化企业永续发展',
    subtitle: '台湾董事会绩效协进会提供专业、独立的董事会绩效评估服务\n协助企业落实公司治理，创造长期价值',
    btnLabel: '立即评估',
    btnHref: 'https://atbgtp.wixsite.com/atbg/applyonline',
    btnExternal: false,
    label: '评估实绩',
  },
  {
    id: 'slide2',
    bg: '/11062b_63b3263faa884e3d8f9e785cb8bd6eb5~mv2.jpg',
    bgColor: '#000',
    title: '最新消息',
    subtitle: '掌握最新公司治理动态，协助董事会与时俱进',
    btnLabel: '最新消息',
    btnHref: 'https://atbgtp.wixsite.com/atbg/copy-of-新闻中心-1',
    btnExternal: false,
    label: '最新消息1',
  },
  {
    id: 'slide3',
    bg: '/11062b_8a25f8d7e46a43a3b56c455904fdf053~mv2.jpeg',
    bgColor: '#000',
    title: '学术新知',
    subtitle: '法规更新及学术研究，强化治理实践',
    btnLabel: '最新消息',
    btnHref: 'https://atbgtp.wixsite.com/atbg/copy-of-新闻中心',
    btnExternal: false,
    label: '最新消息2',
  },
  {
    id: 'slide4',
    bg: '/11062b_a7fd41d75482484ca10a04dd7e5b0c63~mv2.jpg',
    bgColor: '#1a3a2a',
    title: '115 年报编制：\n首波上市柜需备齐气候信息',
    subtitle: '',
    btnLabel: '最新消息',
    btnHref: 'https://www.fsc.gov.tw/ch/home.jsp?id=2&parentpath=0&mcustomize=news_view.jsp&dataserno=202602130012&dtable=News',
    btnExternal: true,
    label: '最新消息3',
  },
  {
    id: 'slide5',
    bg: '/11062b_dc294fcebe9c4327adb6465476857d90~mv2.jpg',
    bgColor: '#000',
    title: '评量指标',
    subtitle: '依据最新治理蓝图，全面性的董事会绩效评估指标',
    btnLabel: '最新消息',
    btnHref: 'https://atbgtp.wixsite.com/atbg/blank-1',
    btnExternal: false,
    label: '最新消息4',
  },
  {
    id: 'slide6',
    bg: '/e205b0bda7104667b90d0c08a5576c4a.jpg',
    bgColor: '#000',
    title: '活动集锦',
    subtitle: '协助企业识别治理盲点、优化董事会运作',
    btnLabel: '活动专区',
    btnHref: 'https://atbgtp.wixsite.com/atbg/activities',
    btnExternal: false,
    label: '活动集锦',
  },
]

const INTERVAL_MS = 5000
const TRANSITION_MS = 700

export default function HeroSlideshow() {
  // current = slide currently fading IN (top layer)
  // prev    = slide underneath (stays until transition done)
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)
  // fadingIn: true  → top layer animates 0→1
  const [fadingIn, setFadingIn] = useState(false)
  const busyRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((next: number) => {
    if (busyRef.current) return
    busyRef.current = true

    // Step 1: lock in the "from" slide as prev, set next as current (invisible)
    setPrev(current)
    setCurrent(next)
    setFadingIn(false)

    // Step 2: one frame later, trigger fade-in so CSS transition fires
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFadingIn(true)
      })
    })

    // Step 3: after transition, unlock
    timerRef.current = setTimeout(() => {
      busyRef.current = false
      timerRef.current = null
    }, TRANSITION_MS + 50)
  }, [current])

  const nextSlide = useCallback(() => {
    goTo((current + 1) % SLIDES.length)
  }, [current, goTo])

  const prevSlide = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length)
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    const id = setInterval(nextSlide, INTERVAL_MS)
    return () => clearInterval(id)
  }, [nextSlide])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const slideData = SLIDES[current]
  const prevData = SLIDES[prev]

  return (
    <section className={styles.slideshow} aria-label="投影片放映">

      {/* Bottom layer: previous slide — always fully visible */}
      <div
        className={styles.bgLayer}
        style={{ backgroundColor: prevData.bgColor, opacity: 1, zIndex: 1 }}
      >
        <img src={prevData.bg} alt="" className={styles.bgImg} />
        <div className={styles.bgOverlay} />
      </div>

      {/* Top layer: new slide — fades in */}
      <div
        className={styles.bgLayer}
        style={{
          backgroundColor: slideData.bgColor,
          opacity: fadingIn ? 1 : 0,
          transition: fadingIn ? `opacity ${TRANSITION_MS}ms ease` : 'none',
          zIndex: 2,
        }}
      >
        <img src={slideData.bg} alt="" className={styles.bgImg} />
        <div className={styles.bgOverlay} />
      </div>

      {/* Text content — fades with image */}
      <div
        className={styles.content}
        style={{
          opacity: fadingIn ? 1 : 0,
          transition: fadingIn ? `opacity ${TRANSITION_MS}ms ease` : 'none',
          zIndex: 10,
        }}
      >
        <h1 className={styles.title}>
          {slideData.title.split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </h1>
        {slideData.subtitle && (
          <p className={styles.subtitle}>
            {slideData.subtitle.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
        )}
        <a
          href={slideData.btnHref}
          className={styles.btn}
          {...(slideData.btnExternal
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : { target: '_self' })}
        >
          {slideData.btnLabel}
        </a>
      </div>

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prevSlide} aria-label="返回">
        <svg viewBox="0 0 21 41" width="21" height="41"><path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"/></svg>
      </button>
      <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={nextSlide} aria-label="下一步">
        <svg viewBox="0 0 21 41" width="21" height="41"><path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"/></svg>
      </button>

      {/* Dots */}
      <nav className={styles.dots} aria-label="投影片">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => { if (i !== current) goTo(i) }}
            aria-label={s.label}
            aria-current={i === current}
          />
        ))}
      </nav>
    </section>
  )
}
