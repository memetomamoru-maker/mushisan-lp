// FAQ + CTA + Footer
const FAQ = () => {
  const items = [
    { q:'本当にずっと無料ですか？', a:'はい。完全無料で、アプリ内課金や有料プランは一切ありません。広告表示もありません。' },
    { q:'アプリのインストールは必要ですか？', a:'不要です。ブラウザからmushisan.vercel.appにアクセスするだけで遊べます。スマホ・タブレット・PCすべてに対応しています。' },
    { q:'個人情報の登録は必要ですか？', a:'ニックネーム（最大10文字）と学年の入力のみです。メールアドレスや氏名など個人情報は一切登録しません。ニックネームはお使いの端末にのみ保存されます。' },
    { q:'対象年齢は？', a:'小学校全学年（6〜12歳）を対象にしています。学年を選ぶと、その学年に合った問題が出題されます。' },
    { q:'外部サービスとの通信はありますか？', a:'「Wikipediaで くわしくみる」ボタンを押したときのみ、外部のWikipediaページへリンクします。それ以外の外部通信は行っていません。' },
    { q:'BGMや効果音はオフにできますか？', a:'はい。タイトル画面で「BGMなしではじめる」を選ぶとBGMなしでプレイできます。' },
    { q:'兄弟姉妹で1台を共有できますか？', a:'可能です。それぞれ別のニックネームでプレイすれば、図鑑やポイントは別々に管理されます。' },
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
          {items.map((it, i) => (
            <div key={i} className={"faq-item " + (open === i ? 'open' : '')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span><span className="faq-q-label">Q.</span>{it.q}</span>
                <span className="faq-toggle" dangerouslySetInnerHTML={{__html: window.ICONS.arrow}}/>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  // floating bugs
  const bugKeys = ['ageha','morpho','dragonfly','kabuto','firefly','lady'];
  const pos = [
    {top:'12%',left:'4%',size:80,rot:-20,delay:0},
    {top:'60%',left:'2%',size:60,rot:30,delay:2},
    {top:'20%',right:'5%',size:90,rot:15,delay:1},
    {bottom:'20%',right:'3%',size:70,rot:-15,delay:3},
    {top:'50%',right:'8%',size:55,rot:25,delay:1.5},
    {bottom:'10%',left:'8%',size:65,rot:-30,delay:0.5},
  ];
  return (
    <section className="final-cta" id="cta">
      <div className="bg-bugs">
        {bugKeys.map((k, i) => (
          <div key={k} className="bg-bug" style={{
            ...pos[i], width: pos[i].size, height: pos[i].size,
            '--r': pos[i].rot + 'deg',
            animationDelay: pos[i].delay + 's',
          }} dangerouslySetInnerHTML={{__html: window.INSECT_SVG[k]}}/>
        ))}
      </div>
      <div className="container" style={{position:'relative',zIndex:2}}>
        <span className="sec-label" style={{display:'block',textAlign:'center',marginBottom:12}}>さあ、森へ</span>
        <h2>むしをあつめながら、<br/><span className="hl">かしこくなろう。</span></h2>
        <p>インストール不要・登録不要。URLをひらけば、すぐに冒険がはじまります。</p>
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="btn-primary"
           style={{fontSize:18,padding:'18px 36px',margin:'0 auto',display:'inline-flex'}}>
          <span style={{width:20,height:20}} dangerouslySetInnerHTML={{__html: window.ICONS.arrow}}/>
          いますぐ無料で遊ぶ
        </a>
        <br/>
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="final-cta-url">
          mushisan.vercel.app
        </a>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer>
    <div className="container footer-inner">
      <div className="footer-logo">
        <div style={{width:30,height:30,background:'var(--bg-4)',borderRadius:8,padding:3,border:'1px solid var(--bg-6)'}}
             dangerouslySetInnerHTML={{__html: window.INSECT_SVG.kabuto}}/>
        <span>ムシ算</span>
      </div>
      <div className="footer-links">
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer">プライバシーポリシー</a>
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer">利用規約</a>
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer">免責事項</a>
      </div>
      <small>© 2026 ムシ算 — 本アプリは個人が開発した教育用ゲームです。</small>
    </div>
  </footer>
);

Object.assign(window, { FAQ, FinalCTA, Footer });
