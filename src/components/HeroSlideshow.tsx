import { useState, useEffect, useCallback } from 'react'
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
const TRANSITION_DURATION = 600

type Slide = {
  id: string
  bg: string
  bgColor: string
  title: string
  subtitle: string
  btnLabel: string
  btnHref: string
  btnExternal: boolean
  label: string
}

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const prev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length)
  }, [isTransitioning])

  const next = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(c => (c + 1) % SLIDES.length)
  }, [isTransitioning])

  useEffect(() => {
    const t = setInterval(next, INTERVAL_MS)
    return () => clearInterval(t)
  }, [next])

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, TRANSITION_DURATION)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  const slide = SLIDES[current] as Slide
  const prevSlide = SLIDES[(current - 1 + SLIDES.length) % SLIDES.length] as Slide

  return (
    <section className={styles.slideshow} aria-label="投影片放映">
      {/* Background layers for smooth transition */}
      <div
        className={`${styles.bg} ${styles.bgLayer}`}
        style={{
          backgroundColor: prevSlide.bgColor,
          opacity: isTransitioning ? 1 : 0,
          zIndex: 1,
        }}
      >
        <img src={prevSlide.bg} alt="" className={styles.bgImg} />
        <div className={styles.bgOverlay} />
      </div>
      <div
        className={`${styles.bg} ${styles.bgLayer}`}
        style={{
          backgroundColor: slide.bgColor,
          opacity: isTransitioning ? 0 : 1,
          zIndex: 2,
        }}
      >
        <img src={slide.bg} alt="" className={styles.bgImg} />
        <div className={styles.bgOverlay} />
      </div>

      {/* Content with fade transition */}
      <div
        className={styles.content}
        style={{
          opacity: isTransitioning ? 0 : 1,
          transition: `opacity ${TRANSITION_DURATION}ms ease`,
        }}
      >
        <h1 className={styles.title}>
          {slide.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i < slide.title.split('\n').length - 1 && <br />}</span>
          ))}
        </h1>
        {slide.subtitle && (
          <p className={styles.subtitle}>
            {slide.subtitle.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
        )}
        <a
          href={slide.btnHref}
          className={styles.btn}
          {...(slide.btnExternal
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : { target: '_self' })}
        >
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
            onClick={() => {
              if (!isTransitioning && i !== current) {
                setIsTransitioning(true)
                setCurrent(i)
              }
            }}
            aria-label={s.label}
            aria-current={i === current}
          />
        ))}
      </nav>
    </section>
  )
}