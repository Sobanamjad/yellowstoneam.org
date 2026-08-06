import styles from './NewsSection.module.css'

const CARDS = [
  {
    id: 'news',
    heading: '最新消息',
    img: 'https://static.wixstatic.com/media/84770f_dec41f79f196959a09f9a7d88a507b86.jpg/v1/fill/w_301,h_164,al_c,q_80,usm_0.66_1.00_0.01/84770f_dec41f79f196959a09f9a7d88a507b86.jpg',
    imgAlt: '最新消息',
    lines: ['掌握最新公司治理動態、', '法規更新及學術研究', '協助董事會與時俱進'],
    btnLabel: '更多新聞',
    btnHref: '#news',
  },
  {
    id: 'activities',
    heading: '活動專區',
    img: 'https://static.wixstatic.com/media/84770f_733fea520ffa179f7dfc2cef2b302b64.jpg/v1/crop/x_78,y_0,w_329,h_180/fill/w_301,h_165,al_c,q_80/84770f_733fea520ffa179f7dfc2cef2b302b64.jpg',
    imgAlt: '活動專區',
    lines: ['歷屆董事會治理效能論壇', '及教育訓練課程', '提升董事職能、強化治理實踐'],
    btnLabel: '更多活動',
    btnHref: '#activities',
  },
  {
    id: 'metrics',
    heading: '評量指標',
    img: 'https://static.wixstatic.com/media/84770f_275b95cb82490089c48b49d3be07e990.jpg/v1/fill/w_301,h_164,al_c,q_80,usm_0.66_1.00_0.01/84770f_275b95cb82490089c48b49d3be07e990.jpg',
    imgAlt: '評量指標',
    lines: ['依據最新治理藍圖制定', '全面性的董事會績效評估指標', '協助企業識別治理盲點、', '優化董事會運作'],
    btnLabel: '更多評量指標',
    btnHref: '#evaluation',
  },
]

export default function NewsSection() {
  return (
    <section className={styles.section} id="news-section">
      <div className={styles.inner}>
        {CARDS.map(card => (
          <div key={card.id} className={styles.column}>
            <h2 className={styles.heading}>{card.heading}</h2>

            <div className={styles.card}>
              <img
                src={card.img}
                alt={card.imgAlt}
                className={styles.cardImg}
                width={301}
                height={165}
                loading="lazy"
              />
              <div className={styles.cardBody}>
                {card.lines.map((line, i) => (
                  <p key={i} className={styles.cardText}>{line}</p>
                ))}
              </div>
            </div>

            <a href={card.btnHref} className={styles.btn}>
              {card.btnLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
