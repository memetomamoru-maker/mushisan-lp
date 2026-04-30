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
  <div className="forest-bg" style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none',zIndex:0}}>
    {/* Sky */}
    <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,#0a1e0a 0%,#0d2b0d 40%,#0a1e0a 100%)'}}/>
    {/* Moon */}
    <div style={{position:'absolute',top:'6%',left:'58%',width:180,height:180,borderRadius:'50%',background:'radial-gradient(circle,rgba(200,240,200,0.14) 0%,rgba(100,200,100,0.06) 40%,transparent 70%)'}}/>
    <div style={{position:'absolute',top:'9%',left:'63%',width:72,height:72,borderRadius:'50%',background:'radial-gradient(circle,rgba(220,255,220,0.18) 0%,rgba(180,240,180,0.08) 60%,transparent 100%)'}}/>
    {/* Stars */}
    <svg style={{position:'absolute',inset:0,width:'100%',height:'100%'}} viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
      {[[100,45],[280,28],[520,60],[760,18],[1020,42],[1300,30],[180,105],[420,88],[680,125],[920,72],[1160,110],[55,170],[310,148],[570,182],[800,155],[1040,170],[1260,158]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={i%5===0?1.8:1.1} fill="#a8d8a8" opacity={0.35+i%4*0.1}/>
      ))}
    </svg>
    {/* Left tall tree */}
    <svg style={{position:'absolute',left:-8,bottom:0,width:260,height:'100%'}} viewBox="0 0 180 600" preserveAspectRatio="xMinYMax meet">
      <rect x="76" y="300" width="22" height="300" rx="5" fill="#1a3a0a"/>
      <rect x="80" y="300" width="6" height="300" rx="3" fill="#2a5a12" opacity="0.5"/>
      <path d="M87 305 Q50 265 14 244" stroke="#1a3a0a" strokeWidth="10" fill="none" strokeLinecap="round"/>
      <path d="M87 350 Q38 315 6 305" stroke="#1a3a0a" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M87 280 Q130 245 164 226" stroke="#1a3a0a" strokeWidth="9" fill="none" strokeLinecap="round"/>
      <path d="M87 328 Q138 296 170 285" stroke="#1a3a0a" strokeWidth="7" fill="none" strokeLinecap="round"/>
      <ellipse cx="87" cy="218" rx="74" ry="88" fill="#142814"/>
      <ellipse cx="45" cy="244" rx="52" ry="68" fill="#0f1e0f"/>
      <ellipse cx="134" cy="230" rx="56" ry="72" fill="#142814"/>
      <ellipse cx="87" cy="165" rx="58" ry="64" fill="#1a3618"/>
      <ellipse cx="87" cy="124" rx="44" ry="50" fill="#1e4020"/>
      <ellipse cx="62" cy="170" rx="26" ry="20" fill="#2d7a2d" opacity="0.35"/>
      <ellipse cx="118" cy="188" rx="18" ry="14" fill="#2d7a2d" opacity="0.28"/>
      <ellipse cx="87" cy="116" rx="30" ry="24" fill="#4aaa4a" opacity="0.18"/>
    </svg>
    {/* Right tall tree */}
    <svg style={{position:'absolute',right:-8,bottom:0,width:300,height:'100%'}} viewBox="0 0 200 680" preserveAspectRatio="xMaxYMax meet">
      <rect x="88" y="320" width="24" height="360" rx="5" fill="#162e08"/>
      <rect x="92" y="320" width="7" height="360" rx="3" fill="#285010" opacity="0.5"/>
      <path d="M100 325 Q145 278 188 252" stroke="#162e08" strokeWidth="11" fill="none" strokeLinecap="round"/>
      <path d="M100 372 Q156 332 196 322" stroke="#162e08" strokeWidth="9" fill="none" strokeLinecap="round"/>
      <path d="M100 295 Q60 258 26 236" stroke="#162e08" strokeWidth="9" fill="none" strokeLinecap="round"/>
      <path d="M100 346 Q55 314 22 302" stroke="#162e08" strokeWidth="7" fill="none" strokeLinecap="round"/>
      <ellipse cx="100" cy="220" rx="88" ry="104" fill="#112212"/>
      <ellipse cx="152" cy="248" rx="60" ry="76" fill="#0e1c0e"/>
      <ellipse cx="50" cy="234" rx="64" ry="80" fill="#112212"/>
      <ellipse cx="100" cy="162" rx="64" ry="68" fill="#162e14"/>
      <ellipse cx="100" cy="118" rx="50" ry="56" fill="#1c3a1a"/>
      <ellipse cx="132" cy="172" rx="28" ry="22" fill="#2d7a2d" opacity="0.32"/>
      <ellipse cx="68" cy="194" rx="20" ry="16" fill="#2d7a2d" opacity="0.25"/>
      <ellipse cx="100" cy="110" rx="34" ry="26" fill="#4aaa4a" opacity="0.16"/>
    </svg>
    {/* Mid-distance tree left */}
    <svg style={{position:'absolute',left:'20%',bottom:0,width:110,opacity:0.7}} viewBox="0 0 75 380" preserveAspectRatio="xMidYMax meet">
      <rect x="32" y="210" width="9" height="170" rx="3" fill="#142814"/>
      <ellipse cx="36" cy="145" rx="34" ry="70" fill="#1a3618"/>
      <ellipse cx="36" cy="98" rx="26" ry="50" fill="#1e3e1c"/>
    </svg>
    {/* Mid-distance tree right */}
    <svg style={{position:'absolute',right:'20%',bottom:0,width:90,opacity:0.6}} viewBox="0 0 65 360" preserveAspectRatio="xMidYMax meet">
      <rect x="28" y="195" width="8" height="165" rx="3" fill="#112210"/>
      <ellipse cx="32" cy="132" rx="30" ry="65" fill="#162e14"/>
      <ellipse cx="32" cy="88" rx="22" ry="44" fill="#1a3618"/>
    </svg>
    {/* Ground */}
    <div style={{position:'absolute',bottom:0,left:0,right:0,height:80,background:'linear-gradient(to top,#0a1e0a 0%,rgba(10,30,10,0.7) 50%,transparent 100%)'}}/>
    {/* Firefly glows */}
    {[[28,52],[72,42],[15,68],[85,60],[45,75],[60,38]].map(([x,y],i)=>(
      <div key={i} style={{
        position:'absolute',left:`${x}%`,top:`${y}%`,
        width:4,height:4,borderRadius:'50%',
        background:'#a8d858',
        boxShadow:`0 0 ${6+i%3*4}px ${3+i%2*2}px rgba(100,220,60,0.5)`,
        animation:`fireflyPulse ${2+i*0.4}s ease-in-out ${i*0.5}s infinite`,
      }}/>
    ))}
    {/* Floating insect silhouettes */}
    {[
      {bug:'ageha',    x:'66%',y:'10%',size:60,rot:-15,delay:0,   op:0.28},
      {bug:'dragonfly',x:'14%',y:'24%',size:52,rot:20, delay:1.5, op:0.22},
      {bug:'morpho',   x:'78%',y:'50%',size:68,rot:-8, delay:0.8, op:0.25},
    ].map(({bug,x,y,size,rot,delay,op}) => (
      <div key={bug} style={{
        position:'absolute',left:x,top:y,width:size,height:size,
        transform:`rotate(${rot}deg)`,opacity:op,
        filter:'brightness(0) invert(0.35) sepia(1) hue-rotate(70deg)',
        animation:`silhouetteFloat 8s ease-in-out ${delay}s infinite`,
      }} dangerouslySetInnerHTML={{__html: window.getInsectSVG(bug, 'hero-float')}}/>
    ))}
    {/* Moonlight patches */}
    <div style={{position:'absolute',top:'8%',left:'38%',width:260,height:260,background:'radial-gradient(circle,rgba(168,216,168,0.07) 0%,transparent 70%)',borderRadius:'50%'}}/>
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
    <section className="hero" id="top">
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
                  <span className="hero-title-line">ゲームで算数が</span>
                  <span className="hero-title-line hl">好きになる。</span>
                </>}
          </h1>
          <p className="hero-lead">
            {mode === 'kid'
              ? 'さんすうのもんだいにこたえるとポイントがもらえて、ガチャでたまごをゲット。たまごをそだてて、ずかんをうめよう！'
              : '算数の問題を解くたびにポイントが貯まり、虫のたまごをゲット。ゲームへの自然な動機が、毎日の計算練習につながります。小学生向けの幅広い難易度・完全無料。'}
          </p>
          <div className="hero-ctas">
            <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="btn-primary">
              {mode==='kid' ? 'ゲームをはじめる' : 'いますぐ無料で遊ぶ'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#flow" className="btn-secondary">{mode==='kid' ? 'あそびかたをみる' : 'あそびかたを見る'}</a>
          </div>
          <div className="hero-meta">
            {(mode==='kid'
              ? [['すぐあそべる','check'],['ガチャができる','gacha'],['ずかんがふえる','book'],['むし100しゅ','sprout']]
              : [['完全無料','free'],['広告なし','noAd'],['アプリ不要','check'],['100種の虫','book']]
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
