// FAQ + CTA + Footer
const FAQ = () => {
  const items = [
    { q:'料金はかかりますか？', a:'いいえ。利用料金、アプリ内課金、有料プランはありません。広告表示もありません。' },
    { q:'アプリのインストールは必要ですか？', a:'不要です。ブラウザからmushisan.vercel.appにアクセスするだけで遊べます。スマホ・タブレット・PCすべてに対応しています。' },
    { q:'個人情報の登録は必要ですか？', a:'ニックネーム（最大10文字）と学年の入力のみです。メールアドレスや氏名など個人情報は一切登録しません。ニックネームはお使いの端末にのみ保存されます。' },
    { q:'対象年齢は？', a:'小学生（6〜12歳）向けです。学年表示は目安で、お子さまの理解度に合わせて難易度を選べます。' },
    { q:'外部サービスとの通信はありますか？', a:'「Wikipediaで くわしくみる」ボタンを押したときのみ、外部のWikipediaページへリンクします。それ以外の外部通信は行っていません。' },
    { q:'BGMや効果音はオフにできますか？', a:'はい。タイトル画面で「BGMなしではじめる」を選ぶとBGMなしでプレイできます。' },
    { q:'兄弟姉妹で1台を共有できますか？', a:'現在は1端末につき1プレイヤーのデータが保存されます。兄弟姉妹で使いたい場合は、それぞれ別の端末でお楽しみください。' },
  ];
  const [open, setOpen] = React.useState(null);

  return (
    <section className="faq-sec" id="faq" style={{paddingTop:0}}>
      <div className="wave-divider">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{height:48}}>
          <path d="M0,48 C360,0 1080,48 1440,0 L1440,0 L0,0 Z" fill="#111d12"/>
        </svg>
      </div>
      <div className="container">
        <div className="sec-head center">
          <span className="sec-label">FAQ</span>
          <h2 className="sec-title">よくある質問</h2>
        </div>
        <div className="faq-list">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={"faq-item " + (isOpen ? 'open' : '')}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span><span className="faq-q-label">Q.</span>{it.q}</span>
                  <span className="faq-toggle" dangerouslySetInnerHTML={{__html: window.ICONS.arrow}}/>
                </button>
                <div className="faq-a">{it.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const { mode } = React.useContext(window.ModeContext);
  const rows = [
    ['kabuto','miyama','herc','atlas'],
    ['ageha','morpho','jewelbug','firefly'],
    ['mantis','dragonfly','lady','actaeon'],
  ];
  const rarColor = {
    kabuto:'#4aaa4a', miyama:'#4a8cc8', herc:'#e8a030', atlas:'#a060d0',
    ageha:'#4a8cc8', morpho:'#a060d0', jewelbug:'#a060d0', firefly:'#4a8cc8',
    mantis:'#4aaa4a', dragonfly:'#4a8cc8', lady:'#4aaa4a', actaeon:'#e8a030',
  };

  return (
    <section className="final-cta" id="cta">
      <div className="final-cta-glow" />
      <div className="container">
        <div className="cta-inner">
          <div className="cta-copy">
            {mode === 'kid' ? <>
              <span className="sec-label">むしを、あつめよう</span>
              <h2>さんすうにこたえて、<br/><span className="hl">ずかんをうめよう！</span></h2>
              <p>URLをひらくと、すぐにぼうけんがはじまるよ。むしをあつめて、ずかんをいっぱいにしよう。</p>
            </> : <>
              <span className="sec-label">今すぐ始める</span>
              <h2>無料で、今日から<br/><span className="hl">始められます。</span></h2>
              <p>インストール不要・登録不要。お子さまにURLを渡すだけで、すぐに始められます。</p>
            </>}
            <div className="cta-actions">
              <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="btn-primary cta-main-btn">
                {mode === 'kid' ? 'ゲームをはじめる' : 'いますぐ無料で遊ぶ'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="cta-url">mushisan.vercel.app</a>
            </div>
          </div>

          <div className="collection-preview" aria-hidden="true">
            <div className="collection-caption">{mode === 'kid' ? 'ゲームであつめる ごほうび' : 'ゲーム内の図鑑イメージ'}</div>
            <div className="collection-card">
              <div className="collection-head">
                <span className="collection-title">
                  <span className="collection-title-icon" dangerouslySetInnerHTML={{__html: window.ICONS.book}}/>
                  むしずかん
                </span>
                <span>12 / 100 しゅ</span>
              </div>
              <div className="collection-body">
                {rows.map((row, ri) => (
                  <div key={ri} className="collection-row">
                    {row.map((k, ci) => {
                      return (
                        <div
                          key={k}
                          className="collection-cell"
                          style={{'--cell-accent': rarColor[k] || '#4aaa4a', '--cell-glow': (rarColor[k] || '#4aaa4a') + '33'}}
                        >
                          <div className="collection-bug" dangerouslySetInnerHTML={{__html: window.INSECT_SVG[k]}} />
                        </div>
                      );
                    })}
                  </div>
                ))}
                <div className="collection-locked-row">
                  {['?','?','?','?'].map((q,i) => <div key={i} className="collection-locked">{q}</div>)}
                </div>
                <div className="collection-note">まだ 88しゅるい が まってるよ！</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer>
    <div className="container footer-inner">
      <div className="footer-logo">
        <div className="footer-logo-bug" dangerouslySetInnerHTML={{__html: window.INSECT_SVG.kabuto}}/>
        <span>ムシ算</span>
      </div>
      <div className="footer-links">
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer">プライバシーポリシー</a>
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer">利用規約</a>
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer">免責事項</a>
        <a href="https://note.com/memetomamoru" target="_blank" rel="noreferrer">運営者note</a>
      </div>
      <small>© 2026 <a href="https://note.com/memetomamoru" target="_blank" rel="noreferrer" className="footer-note-link">memetomamoru</a> ｜ ムシ算</small>
    </div>
  </footer>
);

Object.assign(window, { FAQ, FinalCTA, Footer });
