// Nav + Hero (clean rewrite)

const Nav = () => {
  const { mode, setMode } = React.useContext(window.ModeContext);
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-badge" dangerouslySetInnerHTML={{__html: window.getInsectSVG('kabuto', 'hero-logo')}} />
          <span className="logo-text">ムシ算</span>
        </a>
        <div className="audience-toggle">
          <button type="button" className={"aud-btn" + (mode==='kid'?' active':'')} onClick={()=>setMode('kid')}>こどもへ</button>
          <button type="button" className={"aud-btn" + (mode==='parent'?' active':'')} onClick={()=>setMode('parent')}>{mode==='kid' ? 'おうちのひとへ' : 'おうちの人へ'}</button>
        </div>
        <div className="nav-links">
          <a href="#flow">あそびかた</a>
          <a href="#features">とくちょう</a>
          <a href="#dex">{mode==='kid' ? 'むしずかん' : '虫図鑑'}</a>
          <a href="#parent">{mode==='kid' ? 'おうちのひとへ' : '保護者の方へ'}</a>
          <a href="#faq">{mode==='kid' ? 'しつもん' : 'FAQ'}</a>
          <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="nav-cta">{mode==='kid' ? 'いますぐあそぶ' : 'いますぐ遊ぶ'}</a>
        </div>
      </div>
    </nav>
  );
};

const ForestBg = () => (
  <div className="forest-bg" aria-hidden="true">
    <div className="forest-base" />
    <div className="forest-depth forest-depth-a" />
    <div className="forest-depth forest-depth-b" />
    <div className="forest-depth forest-depth-c" />

    <svg className="forest-canopy forest-canopy-back" viewBox="0 0 1440 760" preserveAspectRatio="none">
      <defs>
        <radialGradient id="canopyGlow" cx="60%" cy="38%" r="54%">
          <stop offset="0%" stopColor="#7be56f" stopOpacity="0.16" />
          <stop offset="48%" stopColor="#3f9a4d" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#071309" stopOpacity="0" />
        </radialGradient>
        <filter id="softBlur"><feGaussianBlur stdDeviation="2.4"/></filter>
      </defs>
      <rect width="1440" height="760" fill="url(#canopyGlow)" />
      <g className="forest-trunks">
        <path d="M58 760 C68 610 62 500 44 356 C36 288 58 218 114 166 C86 246 98 312 126 392 C166 508 150 632 134 760 Z" />
        <path d="M196 760 C206 594 196 466 168 318 C158 262 174 198 230 122 C220 244 260 320 286 430 C314 548 290 644 278 760 Z" />
        <path d="M1260 760 C1254 620 1268 498 1304 350 C1324 270 1294 202 1234 136 C1252 242 1218 330 1198 440 C1178 548 1192 648 1204 760 Z" />
        <path d="M1374 760 C1364 616 1374 504 1402 382 C1416 320 1398 242 1340 176 C1352 274 1324 340 1304 436 C1278 562 1300 660 1318 760 Z" />
      </g>
      <g className="forest-leaf-masses" filter="url(#softBlur)">
        <ellipse cx="188" cy="108" rx="210" ry="88" />
        <ellipse cx="390" cy="88" rx="270" ry="98" />
        <ellipse cx="730" cy="80" rx="330" ry="108" />
        <ellipse cx="1052" cy="106" rx="270" ry="94" />
        <ellipse cx="1284" cy="142" rx="220" ry="92" />
      </g>
      <g className="forest-leaf-dots">
        {[[114,92,34],[176,142,26],[244,80,22],[334,126,28],[438,76,20],[536,128,25],[640,76,22],[770,118,32],[864,70,20],[990,126,30],[1118,76,24],[1214,132,28],[1328,82,26]].map(([x,y,r],i)=>(
          <circle key={i} cx={x} cy={y} r={r} />
        ))}
      </g>
    </svg>

    <svg className="forest-canopy forest-canopy-mid" viewBox="0 0 1440 760" preserveAspectRatio="none">
      <g>
        {[
          [110,650,120,168],[270,620,90,132],[450,652,128,178],[642,602,96,138],[820,642,118,168],[1016,610,94,136],[1192,648,126,178],[1362,628,100,140]
        ].map(([x,y,rx,ry],i)=>(
          <ellipse key={i} cx={x} cy={y} rx={rx} ry={ry} />
        ))}
      </g>
    </svg>

    <svg className="forest-trail" viewBox="0 0 1440 760" preserveAspectRatio="none">
      <defs>
        <filter id="trailGlow"><feGaussianBlur stdDeviation="4"/></filter>
      </defs>
      <path className="trail-glow" d="M88 346 C224 300 352 310 500 332 C662 356 756 294 912 334 C1028 364 1096 424 1224 390" />
      <path className="trail-line" d="M88 346 C224 300 352 310 500 332 C662 356 756 294 912 334 C1028 364 1096 424 1224 390" />
      {[ [432,322,6,'gold'], [522,334,4,'green'], [624,336,5,'gold'], [776,310,4,'green'], [934,344,5,'green'], [1084,410,4,'gold'] ].map(([x,y,r,t],i)=>(
        <g key={i} className={t==='gold'?'trail-dot-gold':'trail-dot-green'}>
          <circle cx={x} cy={y} r={r*3} opacity="0.16" />
          <circle cx={x} cy={y} r={r} opacity="0.96" />
        </g>
      ))}
      <g className="trail-leaf" transform="translate(558 326) rotate(-8)">
        <path d="M0 12 C28 -10 68 -8 92 12 C68 32 28 34 0 12Z" />
        <path d="M16 12 C42 10 62 10 84 12" />
      </g>
      <g className="trail-leaf" transform="translate(748 302) rotate(11) scale(.8)">
        <path d="M0 12 C28 -10 68 -8 92 12 C68 32 28 34 0 12Z" />
        <path d="M16 12 C42 10 62 10 84 12" />
      </g>
    </svg>

    <div className="forest-fireflies">
      {[[5,18,10],[15,14,5],[27,32,3],[42,18,3],[54,68,5],[64,45,4],[72,18,4],[86,26,6],[94,58,5],[76,72,4],[36,78,3]].map(([x,y,s],i)=>(
        <i key={i} style={{left:`${x}%`, top:`${y}%`, width:s, height:s, animationDelay:`${i*.37}s`}} />
      ))}
    </div>

    <svg className="forest-frame forest-frame-left" viewBox="0 0 260 260">
      <g transform="translate(-34 28) rotate(-18)">
        <path d="M12 84 C50 18 118 0 214 18 C178 84 108 122 12 84Z" />
        <path d="M42 76 C94 60 142 40 198 20" />
      </g>
      <g transform="translate(68 70) rotate(10) scale(.74)">
        <path d="M12 84 C50 18 118 0 214 18 C178 84 108 122 12 84Z" />
        <path d="M42 76 C94 60 142 40 198 20" />
      </g>
    </svg>

    <svg className="forest-frame forest-frame-right" viewBox="0 0 260 320">
      <g transform="translate(102 0) rotate(16)">
        <path d="M12 84 C50 18 118 0 214 18 C178 84 108 122 12 84Z" />
        <path d="M42 76 C94 60 142 40 198 20" />
      </g>
      <g transform="translate(58 182) rotate(-18) scale(.8)">
        <path d="M12 84 C50 18 118 0 214 18 C178 84 108 122 12 84Z" />
        <path d="M42 76 C94 60 142 40 198 20" />
      </g>
    </svg>

    <div className="forest-vignette" />
  </div>
);


const HeroWordmark = () => (
  <div className="hero-wordmark-wrap" aria-label="ムシ算">
    <svg className="hero-wordmark" viewBox="0 0 560 170" role="img" aria-labelledby="heroWordmarkTitle" xmlns="http://www.w3.org/2000/svg">
      <title id="heroWordmarkTitle">ムシ算</title>
      <defs>
        <linearGradient id="mwGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9CFF5D"/>
          <stop offset="48%" stopColor="#32D04A"/>
          <stop offset="100%" stopColor="#087C2E"/>
        </linearGradient>
        <linearGradient id="mwGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF082"/>
          <stop offset="46%" stopColor="#FFC23A"/>
          <stop offset="100%" stopColor="#FF8D18"/>
        </linearGradient>
        <linearGradient id="mwLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D9FF78"/>
          <stop offset="100%" stopColor="#30B548"/>
        </linearGradient>
        <filter id="mwShadow" x="-18%" y="-28%" width="136%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000" floodOpacity="0.38"/>
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#A8FF64" floodOpacity="0.22"/>
        </filter>
        <filter id="mwSoftGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <path d="M22 122 C92 152 196 145 260 120 C337 90 436 98 526 124" fill="none" stroke="#95E55F" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 12" opacity="0.68"/>

      <g transform="translate(498 17) rotate(15)">
        <path d="M0 34 C34 8 56 8 80 18 C58 50 30 58 0 34Z" fill="url(#mwLeaf)"/>
        <path d="M12 33 C36 29 56 22 75 18" fill="none" stroke="#176D2A" strokeWidth="3" strokeLinecap="round" opacity="0.55"/>
      </g>
      <g transform="translate(38 21) rotate(-28) scale(.82)">
        <path d="M0 34 C34 8 56 8 80 18 C58 50 30 58 0 34Z" fill="url(#mwLeaf)"/>
        <path d="M12 33 C36 29 56 22 75 18" fill="none" stroke="#176D2A" strokeWidth="3" strokeLinecap="round" opacity="0.55"/>
      </g>

      <g className="hero-wordmark-bug" transform="translate(218 4) rotate(-6)">
        <path d="M33 40 C28 22 16 15 7 9" fill="none" stroke="#6D3E12" strokeWidth="4" strokeLinecap="round"/>
        <path d="M63 40 C69 22 81 15 90 9" fill="none" stroke="#6D3E12" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="5" cy="8" r="5" fill="#FF7C2D" stroke="#512300" strokeWidth="2"/>
        <circle cx="92" cy="8" r="5" fill="#FF7C2D" stroke="#512300" strokeWidth="2"/>
        <ellipse cx="31" cy="57" rx="28" ry="31" fill="#C6F07A" stroke="#15370D" strokeWidth="5"/>
        <ellipse cx="65" cy="57" rx="28" ry="31" fill="#9BE45E" stroke="#15370D" strokeWidth="5"/>
        <ellipse cx="48" cy="72" rx="26" ry="34" fill="#6FDA33" stroke="#15370D" strokeWidth="5"/>
        <circle cx="38" cy="48" r="9" fill="#10220B"/>
        <circle cx="59" cy="48" r="9" fill="#10220B"/>
        <circle cx="41" cy="45" r="3" fill="#fff"/>
        <circle cx="62" cy="45" r="3" fill="#fff"/>
        <path d="M36 79 C44 86 54 86 62 79" fill="none" stroke="#16340E" strokeWidth="4" strokeLinecap="round"/>
      </g>

      <g filter="url(#mwShadow)">
        <text x="20" y="118" fontFamily="'M PLUS Rounded 1c','Noto Sans JP',sans-serif" fontSize="94" fontWeight="900" letterSpacing="-8" stroke="#ffffff" strokeWidth="18" strokeLinejoin="round" paintOrder="stroke fill">ムシ</text>
        <text x="20" y="118" fontFamily="'M PLUS Rounded 1c','Noto Sans JP',sans-serif" fontSize="94" fontWeight="900" letterSpacing="-8" stroke="#092812" strokeWidth="8" strokeLinejoin="round" paintOrder="stroke fill" fill="url(#mwGreen)">ムシ</text>
        <text x="276" y="121" fontFamily="'M PLUS Rounded 1c','Noto Sans JP',sans-serif" fontSize="104" fontWeight="900" letterSpacing="-5" stroke="#ffffff" strokeWidth="18" strokeLinejoin="round" paintOrder="stroke fill">算</text>
        <text x="276" y="121" fontFamily="'M PLUS Rounded 1c','Noto Sans JP',sans-serif" fontSize="104" fontWeight="900" letterSpacing="-5" stroke="#4A2700" strokeWidth="8" strokeLinejoin="round" paintOrder="stroke fill" fill="url(#mwGold)">算</text>
      </g>

      <g filter="url(#mwSoftGlow)" opacity="0.95">
        <path d="M438 88 l9 19 20 7 -20 7 -9 19 -9 -19 -20 -7 20 -7Z" fill="#FFF35A"/>
        <path d="M488 112 l6 12 13 5 -13 5 -6 12 -6 -12 -13 -5 13 -5Z" fill="#B6FF6A"/>
        <circle cx="459" cy="39" r="6" fill="#FFEB55"/>
      </g>
    </svg>
  </div>
);

const Hero = () => {
  const { mode } = React.useContext(window.ModeContext);
  return (
    <section className={"hero hero-" + mode} id="top">
      <ForestBg />
      <div className="container hero-grid" style={{position:'relative',zIndex:1}}>
        <div>
          <span className="hero-kicker">{mode==='kid' ? 'しょうがくせいむけ さんすうゲーム' : '小学生向け 無料算数ゲーム'}</span>
          <HeroWordmark />
          <h1>
            {mode === 'kid'
              ? <>
                  <span className="hero-title-line">むしをあつめて、</span>
                  <span className="hero-title-line hl">さんすうをまなぼう！</span>
                </>
              : <>
                  <span className="hero-title-line">ゲーム感覚で、</span>
                  <span className="hero-title-line hl">計算練習を習慣に。</span>
                </>}
          </h1>
          <p className="hero-lead">
            {mode === 'kid'
              ? 'さんすうのもんだいにこたえるとポイントがもらえて、ガチャでたまごをゲット。たまごをそだてて、ずかんをうめよう！'
              : '問題に答えるとポイントがたまり、虫のたまごを育てて図鑑を埋めていく算数ゲームです。登録なし、広告なし、課金なしで、ブラウザからすぐに遊べます。'}
          </p>
          <div className="hero-ctas">
            <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="btn-primary">
              {mode==='kid' ? 'ゲームをはじめる' : 'いますぐ無料で遊ぶ'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#flow" className="btn-secondary">{mode==='kid' ? 'あそびかたをみる' : 'あんしん設計を見る'}</a>
          </div>
          <div className="hero-meta">
            {(mode==='kid'
              ? [['すぐあそべる','check'],['ガチャができる','gacha'],['ずかんがふえる','book'],['むし100しゅ','sprout']]
              : [['登録不要','check'],['広告なし','noAd'],['課金なし','free'],['外部解析なし','shield']]
            ).map(([label,icon])=>(
              <div key={label} className="hero-badge">
                <span className="ico" dangerouslySetInnerHTML={{__html: window.ICONS[icon]}}/>
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="phone-wrap">
          <PhoneMock />
          {[['-18px','30%'],['105%','20%'],['110%','65%'],['-22px','70%']].map(([l,t],i)=>(
            <div key={i} style={{
              position:'absolute',left:l,top:t,width:6,height:6,borderRadius:'50%',
              background:'#a8d858',boxShadow:'0 0 8px 3px rgba(100,220,60,0.6)',
              animation:`fireflyPulse 2s ease-in-out ${i*0.6}s infinite`,
            }}/>
          ))}
        </div>
      </div>
      <div className="wave-divider" style={{position:'absolute',bottom:-1,left:0,right:0}}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{height:56}}>
          <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,56 L0,56 Z" fill="#111d12"/>
        </svg>
      </div>
    </section>
  );
};

const PhoneMock = () => (
  <div className="phone">
    <div className="phone-screen" style={{
      background:'linear-gradient(180deg,#081828 0%,#102040 40%,#0A1830 100%)',
      position:'relative',overflow:'hidden',
    }}>
      {/* Stars */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0}}>
        {[[12,8],[35,5],[60,12],[80,4],[92,18],[5,35],[48,28],[75,32]].map(([x,y],i)=>(
          <div key={i} style={{position:'absolute',left:`${x}%`,top:`${y}%`,width:i%3===0?2:1.5,height:i%3===0?2:1.5,borderRadius:'50%',background:'rgba(255,255,200,0.8)'}}/>
        ))}
      </div>
      <div className="phone-notch" style={{background:'#030c14'}}/>
      {/* Top bar */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 14px 8px',position:'relative',zIndex:1}}>
        <div style={{background:'rgba(255,255,255,0.1)',border:'1.5px solid rgba(255,255,255,0.2)',borderRadius:40,padding:'5px 14px',fontSize:11,fontWeight:900,color:'#A0D0FF'}}>
          1ねんせいモード
        </div>
        <div style={{fontSize:12,fontWeight:900,color:'#FFE040',textShadow:'0 0 12px rgba(255,200,0,0.9)'}}>
          🔥 3れんぞく
        </div>
      </div>
      {/* Question card */}
      <div style={{
        margin:'4px 12px 14px',
        background:'linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))',
        border:'2px solid rgba(255,255,255,0.14)',
        borderRadius:26,padding:'32px 18px 28px',textAlign:'center',
        position:'relative',overflow:'hidden',zIndex:1,
        boxShadow:'0 8px 32px rgba(0,0,30,0.5)',
      }}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'50%',background:'linear-gradient(180deg,rgba(255,255,255,0.06),transparent)',pointerEvents:'none'}}/>
        <div style={{fontSize:10,fontWeight:700,color:'rgba(255,255,255,0.4)',marginBottom:8}}>もんだい 3 / 10</div>
        <div style={{fontSize:34,fontWeight:900,color:'#fff',textShadow:'0 4px 0 rgba(0,0,0,0.4),0 0 30px rgba(100,160,255,0.3)',lineHeight:1.2,position:'relative',zIndex:1}}>
          8 + 5 = ?
        </div>
      </div>
      {/* Answer grid */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,padding:'0 12px',position:'relative',zIndex:1}}>
        {[['12',''],['13','ok'],['14',''],['11','']].map(([n,cls])=>(
          <div key={n} style={{
            background:cls==='ok'?'linear-gradient(180deg,#90FF70,#30C820)':'linear-gradient(180deg,rgba(30,60,120,0.8),rgba(15,40,90,0.9))',
            border:cls==='ok'?'2px solid #60FF40':'2px solid rgba(100,160,255,0.3)',
            borderRadius:20,padding:'18px 8px',textAlign:'center',
            fontWeight:900,fontSize:22,
            color:cls==='ok'?'#004400':'#fff',
            textShadow:cls==='ok'?'none':'0 2px 0 rgba(0,0,0,0.4)',
            boxShadow:cls==='ok'?'0 5px 0 #006000,0 7px 20px rgba(0,200,0,0.5)':'0 5px 0 rgba(0,0,50,0.6)',
            position:'relative',overflow:'hidden',
          }}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:'50%',background:'linear-gradient(180deg,rgba(255,255,255,0.12),transparent)'}}/>
            {n}
          </div>
        ))}
      </div>
      {/* Partner bug */}
      <div style={{margin:'14px 12px 0',padding:'10px 12px',background:'rgba(255,255,255,0.06)',borderRadius:16,border:'1px solid rgba(255,255,255,0.1)',display:'flex',alignItems:'center',gap:10,position:'relative',zIndex:1}}>
        <div style={{width:44,height:44,flexShrink:0,background:'rgba(255,255,255,0.08)',borderRadius:'50%',padding:4}}
          dangerouslySetInnerHTML={{__html: window.getInsectSVG('kabuto', 'hero-phone')}}/>
        <div>
          <div style={{fontSize:9,color:'#FFD060',fontWeight:900,marginBottom:1}}>あいぼう</div>
          <div style={{fontWeight:900,color:'#fff',fontSize:13}}>カブトムシ</div>
          <div style={{fontSize:9,color:'rgba(168,216,168,0.6)',fontWeight:700}}>そだてちゅう…</div>
        </div>
      </div>
      {/* Bottom nav */}
      <div style={{marginTop:'auto',padding:'8px 4px',background:'linear-gradient(180deg,rgba(8,16,28,0.95),rgba(5,12,22,0.98))',display:'flex',justifyContent:'space-around',borderTop:'1px solid rgba(255,255,255,0.08)',position:'relative',zIndex:1}}>
        {[['ホーム','point'],['もんだい','math'],['ガチャ','gacha'],['ずかん','book']].map(([t,ic])=>(
          <div key={t} style={{textAlign:'center',fontSize:8,color:t==='もんだい'?'#FFD060':'rgba(168,216,168,0.5)',fontWeight:900,width:50}}>
            <div style={{width:18,height:18,margin:'0 auto 3px'}} dangerouslySetInnerHTML={{__html: window.ICONS[ic]}}/>
            {t}
          </div>
        ))}
      </div>
    </div>
  </div>
);

Object.assign(window, { Nav, Hero });
