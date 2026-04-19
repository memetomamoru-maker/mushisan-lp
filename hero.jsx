// Nav + Hero
const Nav = () => (
  <nav className="nav">
    <div className="container nav-inner">
      <a href="#top" className="logo">
        <span className="logo-badge" dangerouslySetInnerHTML={{__html: window.INSECT_SVG.kabuto}} />
        <span>
          ムシ算
          <span className="logo-sub">MUSHISAN</span>
        </span>
      </a>
      <div className="nav-links">
        <a href="#flow">あそびかた</a>
        <a href="#features">とくちょう</a>
        <a href="#dex">虫図鑑</a>
        <a href="#parent">保護者の方へ</a>
        <a href="#faq">FAQ</a>
        <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="nav-cta">いますぐ遊ぶ</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero" id="top">
    {/* Bokeh light blobs */}
    <div className="bokeh" style={{width:500,height:500,background:'rgba(74,125,82,1)',top:'-10%',left:'55%',animationDelay:'0s'}}/>
    <div className="bokeh" style={{width:300,height:300,background:'rgba(93,148,101,1)',top:'40%',left:'5%',animationDelay:'2s'}}/>
    <div className="bokeh" style={{width:200,height:200,background:'rgba(232,192,80,1)',top:'10%',left:'72%',animationDelay:'1s'}}/>
    <div className="bokeh" style={{width:350,height:350,background:'rgba(30,50,32,1)',bottom:'-5%',right:'10%',animationDelay:'3s'}}/>
    <div className="container hero-grid">
      <div>
        <span className="hero-kicker">小学生むけ 無料算数ゲーム</span>
        <h1>
          むしをあつめながら、<br/>
          <span className="hl">さんすうをまなぼう！</span>
        </h1>
        <p className="hero-lead">
          算数の問題に正解するとポイントがもらえて、ガチャで虫のたまごをゲット。たまごを育てて図鑑をうめよう。小1〜小6、全学年対応。
        </p>
        <div className="hero-ctas">
          <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="btn-primary">
            <span dangerouslySetInnerHTML={{__html: window.ICONS.arrow}} style={{width:18,height:18}} />
            いますぐ無料で遊ぶ
          </a>
          <a href="#flow" className="btn-secondary">あそびかたを見る</a>
        </div>
        <div className="hero-meta">
          {[
            ['完全無料・課金なし', 'free'],
            ['広告なし', 'noAd'],
            ['インストール不要', 'check'],
            ['全100種の虫', 'book'],
          ].map(([label, icon]) => (
            <div key={label} className="hero-badge">
              <span className="ico" dangerouslySetInnerHTML={{__html: window.ICONS[icon]}} />
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="phone-wrap">
        <PhoneMock />
      </div>
    </div>
    {/* Wave bottom */}
    <div className="wave-divider" style={{position:'absolute',bottom:-1,left:0,right:0}}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{height:56}}>
        <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,56 L0,56 Z" fill="#111d12"/>
      </svg>
    </div>
  </section>
);

const PhoneMock = () => (
  <div className="phone">
    <div className="phone-screen">
      <div className="phone-notch" />
      {/* top bar */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px 8px',fontSize:12,fontWeight:700,color:'var(--text-2)'}}>
        <div style={{background:'var(--bg-4)',padding:'4px 10px',borderRadius:999,color:'var(--leaf-7)',fontSize:11}}>
          🌱 1ねんせいレベル
        </div>
        <div style={{display:'flex',alignItems:'center',gap:4,color:'var(--gold-7)'}}>
          <span style={{width:14,height:14,display:'inline-block'}} dangerouslySetInnerHTML={{__html: window.ICONS.point}}/>
          42 pt
        </div>
      </div>

      {/* question card */}
      <div style={{
        margin:'8px 14px',background:'var(--bg-4)',borderRadius:16,
        padding:'20px 16px',border:'1px solid var(--bg-6)'
      }}>
        <div style={{fontSize:10,color:'var(--text-3)',marginBottom:8,fontWeight:700,letterSpacing:'0.1em'}}>もんだい 3 / 10</div>
        <div style={{fontSize:32,fontWeight:900,color:'var(--text-0)',textAlign:'center',margin:'8px 0 16px'}}>
          8 + 5 = ?
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          {[['12',''], ['13','correct'], ['14',''], ['11','']].map(([n, cls])=>(
            <div key={n} style={{
              background: cls==='correct'?'var(--leaf-4)':'var(--bg-5)',
              borderRadius:10, padding:'10px', textAlign:'center',
              fontWeight:800, fontSize:17,
              color: cls==='correct'?'var(--bg-0)':'var(--text-1)',
              border: cls==='correct'?'1px solid var(--leaf-5)':'1px solid var(--bg-6)',
            }}>{n}</div>
          ))}
        </div>
      </div>

      {/* partner bug */}
      <div style={{
        margin:'8px 14px 0', padding:'12px 14px',
        background:'var(--bg-4)', borderRadius:14,
        border:'1px solid var(--bg-6)',
        display:'flex',alignItems:'center',gap:12
      }}>
        <div style={{width:52,height:52,flexShrink:0,background:'var(--bg-5)',borderRadius:50,padding:4}}
          dangerouslySetInnerHTML={{__html: window.INSECT_SVG.kabuto}}/>
        <div>
          <div style={{fontSize:10,color:'var(--leaf-6)',fontWeight:700,marginBottom:2}}>あいぼう</div>
          <div style={{fontWeight:800,color:'var(--text-0)',fontSize:14}}>カブトムシ</div>
          <div style={{fontSize:10,color:'var(--text-3)'}}>そだてちゅう…</div>
        </div>
      </div>

      {/* bottom nav */}
      <div style={{
        marginTop:'auto',padding:'10px 6px',
        background:'var(--bg-0)',
        display:'flex',justifyContent:'space-around',
        borderTop:'1px solid var(--bg-3)'
      }}>
        {[['ホーム','point'],['もんだい','math'],['ガチャ','gacha'],['ずかん','book']].map(([t,ic])=>(
          <div key={t} style={{textAlign:'center',fontSize:9,color: t==='もんだい'?'var(--leaf-6)':'var(--text-3)',fontWeight:700,width:52}}>
            <div style={{width:20,height:20,margin:'0 auto 3px'}} dangerouslySetInnerHTML={{__html: window.ICONS[ic]}}/>
            {t}
          </div>
        ))}
      </div>
    </div>
  </div>
);

Object.assign(window, { Nav, Hero });
