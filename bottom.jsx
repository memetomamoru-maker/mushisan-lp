// FAQ + CTA + Footer
const FAQ = () => {
  const items = [
    { q:'本当にずっと無料ですか？', a:'はい。完全無料で、アプリ内課金や有料プランは一切ありません。広告表示もありません。' },
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
  const { mode } = React.useContext(window.ModeContext);
  const [hovered, setHovered] = React.useState(null);

  const rows = [
    ['kabuto','miyama','herc','atlas'],
    ['ageha','morpho','jewelbug','firefly'],
    ['mantis','dragonfly','lady','actaeon'],
  ];
  const rarColor = {'kabuto':'#4aaa4a','miyama':'#4a8cc8','herc':'#e8a030','atlas':'#a060d0','ageha':'#4a8cc8','morpho':'#a060d0','jewelbug':'#a060d0','firefly':'#4a8cc8','mantis':'#4aaa4a','dragonfly':'#4a8cc8','lady':'#4aaa4a','actaeon':'#e8a030'};
  const rar     = {'kabuto':'SR','miyama':'SR','herc':'SSR','atlas':'SR','ageha':'R','morpho':'SR','jewelbug':'SR','firefly':'R','mantis':'R','dragonfly':'N','lady':'N','actaeon':'SSR'};

  return (
    <section className="final-cta" id="cta" style={{background:'var(--bg-0)',borderTop:'1px solid var(--bg-3)',padding:'100px 0',position:'relative',overflow:'hidden'}}>
      {/* subtle green glow */}
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 600px 400px at 50% 50%, rgba(45,122,45,0.08), transparent)',pointerEvents:'none'}}/>
      <div className="container" style={{position:'relative',zIndex:1}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr minmax(0,480px)',gap:40,alignItems:'center'}}>
          {/* Left — copy */}
          <div>
            {mode === 'kid' ? <>
              <span className="sec-label">むしを、あつめよう</span>
              <h2 style={{fontSize:'clamp(32px,4vw,50px)',marginBottom:16}}>さんすうにこたえて、<br/><span style={{color:'var(--gold-7)'}}>ずかんをうめよう！</span></h2>
              <p style={{fontSize:16,color:'var(--text-2)',marginBottom:28,textWrap:'pretty',maxWidth:400}}>インストールなし・とうろくなし。URLをひらけばすぐにぼうけんがはじまるよ。</p>
            </> : <>
              <span className="sec-label">今すぐ始める</span>
              <h2 style={{fontSize:'clamp(32px,4vw,50px)',marginBottom:16}}>無料で、今日から<br/><span style={{color:'var(--gold-7)'}}>始められます。</span></h2>
              <p style={{fontSize:16,color:'var(--text-2)',marginBottom:28,textWrap:'pretty',maxWidth:400}}>インストール不要・登録不要。お子さまにURLを渡すだけで、すぐに始められます。</p>
            </>}
            <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="btn-primary" style={{fontSize:17,padding:'16px 32px'}}>
              いますぐ無料で遊ぶ
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <br/>
            <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" style={{display:'inline-block',fontFamily:'monospace',background:'var(--bg-4)',color:'var(--leaf-7)',padding:'8px 16px',borderRadius:8,marginTop:14,fontSize:14,border:'1px dashed var(--bg-6)',textDecoration:'none'}}>
              mushisan.vercel.app
            </a>
          </div>

          {/* Right — game collection UI */}
          <div style={{overflow:'hidden',minWidth:0,width:'100%'}}>
            {/* Header bar */}
            <div style={{
              background:'linear-gradient(180deg, #0f2010, #0a1a0b)',
              border:'1px solid rgba(45,122,45,0.4)',
              borderRadius:'20px 20px 0 0',
              padding:'12px 18px',
              display:'flex',justifyContent:'space-between',alignItems:'center',
            }}>
              <span style={{fontWeight:900,fontSize:14,color:'#a8d8a8',letterSpacing:'0.06em'}}>📖 むしずかん</span>
              <span style={{fontSize:12,fontWeight:700,color:'rgba(168,216,168,0.5)'}}>12 / 100 しゅ</span>
            </div>
            {/* Grid */}
            <div style={{
              background:'linear-gradient(180deg, #0a1e0a, #0d2b0d)',
              border:'1px solid rgba(45,122,45,0.3)',
              borderTop:'none',
              borderRadius:'0 0 20px 20px',
              padding:'16px',
            }}>
              {rows.map((row,ri) => (
                <div key={ri} style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8,marginBottom: ri < rows.length-1 ? 8 : 0}}>
                  {row.map((k,ci) => {
                    const idx = ri*4+ci;
                    const isH = hovered===idx;
                    const rCol = rarColor[k]||'#4aaa4a';
                    return (
                      <div key={k}
                        onMouseEnter={()=>setHovered(idx)}
                        onMouseLeave={()=>setHovered(null)}
                        style={{
                          aspectRatio:'1',
                          background: isH ? 'rgba(45,122,45,0.2)' : 'rgba(20,40,20,0.6)',
                          border: isH ? `2px solid ${rCol}` : '1px solid rgba(45,122,45,0.25)',
                          borderRadius:12,
                          padding:8,
                          cursor:'default',
                          transition:'all 0.15s',
                          transform: isH ? 'scale(1.08)' : 'scale(1)',
                          boxShadow: isH ? `0 4px 20px ${rCol}33` : 'none',
                          position:'relative',
                        }}
                        dangerouslySetInnerHTML={{__html: window.INSECT_SVG[k]}}
                      />
                    );
                  })}
                </div>
              ))}
              {/* Locked row preview */}
              <div style={{display:'flex',gap:10,marginTop:10,opacity:0.35}}>
                {['?','?','?','?'].map((q,i)=>(
                  <div key={i} style={{flex:1,aspectRatio:'1',background:'rgba(10,20,10,0.8)',border:'1px solid rgba(45,122,45,0.15)',borderRadius:14,display:'grid',placeItems:'center',color:'rgba(168,216,168,0.4)',fontWeight:900,fontSize:18}}>{q}</div>
                ))}
              </div>
              <div style={{textAlign:'center',marginTop:14,fontSize:12,color:'rgba(168,216,168,0.4)',fontWeight:700}}>
                まだ 88しゅるい が まってるよ！
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
        <div style={{width:30,height:30,background:'var(--bg-4)',borderRadius:8,padding:3,border:'1px solid var(--bg-6)'}}
             dangerouslySetInnerHTML={{__html: window.INSECT_SVG.kabuto}}/>
        <span>ムシ算</span>
      </div>
      <div className="footer-links">
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer">プライバシーポリシー</a>
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer">利用規約</a>
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer">免責事項</a>
        <a href="https://note.com/memetomamoru" target="_blank" rel="noreferrer">運営者note</a>
      </div>
      <small>© 2026 <a href="https://note.com/memetomamoru" target="_blank" rel="noreferrer" style={{color:'var(--leaf-6)',textDecoration:'none'}}>memetomamoru</a> — ムシ算</small>
    </div>
  </footer>
);

Object.assign(window, { FAQ, FinalCTA, Footer });
