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
    <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,#061508 0%,#08210c 20%,#0b2810 48%,#071707 100%)'}}/>
    <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 18% 36%, rgba(84,170,92,0.14) 0%, rgba(84,170,92,0.08) 18%, transparent 42%), radial-gradient(circle at 74% 18%, rgba(120,210,120,0.12) 0%, rgba(120,210,120,0.05) 20%, transparent 48%), radial-gradient(circle at 72% 50%, rgba(160,220,95,0.12) 0%, rgba(160,220,95,0.05) 16%, transparent 44%), linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 34%, rgba(0,0,0,0.18) 100%)'}}/>
    <div style={{position:'absolute',right:'10%',top:'16%',width:520,height:520,borderRadius:'50%',background:'radial-gradient(circle, rgba(118,214,108,0.16) 0%, rgba(118,214,108,0.08) 22%, rgba(118,214,108,0.03) 38%, transparent 68%)',filter:'blur(2px)'}}/>
    <div style={{position:'absolute',left:'-8%',top:'20%',width:420,height:420,borderRadius:'50%',background:'radial-gradient(circle, rgba(85,170,94,0.12) 0%, rgba(85,170,94,0.05) 32%, transparent 70%)'}}/>
    <div style={{position:'absolute',bottom:0,left:0,right:0,height:160,background:'linear-gradient(to top, rgba(6,18,8,0.96) 0%, rgba(6,18,8,0.62) 38%, transparent 100%)'}}/>

    <svg style={{position:'absolute',inset:0,width:'100%',height:'100%'}} viewBox="0 0 1440 780" preserveAspectRatio="none">
      {[[90,68,1.6,0.55],[220,40,1.4,0.42],[420,84,1.8,0.5],[590,58,1.5,0.36],[760,36,1.8,0.48],[948,66,1.5,0.4],[1160,42,1.8,0.48],[1312,90,1.4,0.34],[170,144,1.2,0.38],[342,118,1.4,0.36],[514,160,1.5,0.4],[714,132,1.2,0.34],[906,146,1.5,0.38],[1088,120,1.2,0.34],[1264,152,1.4,0.36]].map(([x,y,r,op],i)=>(
        <circle key={i} cx={x} cy={y} r={r} fill="#d8ffd1" opacity={op}/>
      ))}
    </svg>

    <svg style={{position:'absolute',inset:0,width:'100%',height:'100%'}} viewBox="0 0 1440 780" preserveAspectRatio="none">
      <defs>
        <linearGradient id="heroTrailGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9ee05e" stopOpacity="0"/>
          <stop offset="20%" stopColor="#9ee05e" stopOpacity="0.18"/>
          <stop offset="68%" stopColor="#9ee05e" stopOpacity="0.38"/>
          <stop offset="100%" stopColor="#ffdd62" stopOpacity="0.18"/>
        </linearGradient>
        <filter id="heroTrailGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
      </defs>
      <path d="M310 278 C470 234 624 236 780 270 C910 300 1006 340 1122 386" fill="none" stroke="url(#heroTrailGrad)" strokeWidth="10" strokeLinecap="round" filter="url(#heroTrailGlow)" opacity="0.55"/>
      <path d="M310 278 C470 234 624 236 780 270 C910 300 1006 340 1122 386" fill="none" stroke="#9ee05e" strokeWidth="2.8" strokeDasharray="3 14" strokeLinecap="round" opacity="0.72"/>
      {[ [434,252,6.5,'#cfff76'], [540,250,4.8,'#ffe86e'], [678,258,4.6,'#cfff76'], [860,306,4.4,'#b7ff6f'], [992,352,4.6,'#ffe86e'] ].map(([x,y,r,color],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r={r*2.4} fill={color} opacity="0.12"/>
          <circle cx={x} cy={y} r={r} fill={color} opacity="0.92"/>
        </g>
      ))}
    </svg>

    <svg style={{position:'absolute',left:'-1%',top:'2%',width:220,height:170,opacity:0.72}} viewBox="0 0 220 170">
      <g transform="translate(12 10)">
        <path d="M0 88 C28 20 72 6 134 10 C124 66 90 116 24 124 C10 118 2 106 0 88Z" fill="rgba(162,232,118,0.22)"/>
        <path d="M18 98 C58 70 92 38 132 12" fill="none" stroke="rgba(26,92,36,0.48)" strokeWidth="4" strokeLinecap="round"/>
      </g>
      <g transform="translate(110 0) rotate(24 44 56)">
        <path d="M0 88 C28 20 72 6 134 10 C124 66 90 116 24 124 C10 118 2 106 0 88Z" fill="rgba(196,255,122,0.18)"/>
        <path d="M18 98 C58 70 92 38 132 12" fill="none" stroke="rgba(26,92,36,0.42)" strokeWidth="4" strokeLinecap="round"/>
      </g>
    </svg>

    <svg style={{position:'absolute',right:'3%',bottom:'5%',width:250,height:180,opacity:0.6}} viewBox="0 0 250 180">
      <g transform="translate(76 26) rotate(-20 60 60)">
        <path d="M0 88 C28 20 72 6 134 10 C124 66 90 116 24 124 C10 118 2 106 0 88Z" fill="rgba(162,232,118,0.18)"/>
        <path d="M18 98 C58 70 92 38 132 12" fill="none" stroke="rgba(26,92,36,0.4)" strokeWidth="4" strokeLinecap="round"/>
      </g>
      <g transform="translate(0 68) rotate(8 60 60)">
        <path d="M0 88 C28 20 72 6 134 10 C124 66 90 116 24 124 C10 118 2 106 0 88Z" fill="rgba(196,255,122,0.14)"/>
        <path d="M18 98 C58 70 92 38 132 12" fill="none" stroke="rgba(26,92,36,0.36)" strokeWidth="4" strokeLinecap="round"/>
      </g>
    </svg>

    <svg style={{position:'absolute',left:0,right:0,bottom:0,width:'100%',height:'72%'}} viewBox="0 0 1440 540" preserveAspectRatio="none">
      <g opacity="0.32">
        {[[80,284,88,120],[170,260,64,90],[302,294,72,104],[418,258,54,78],[548,286,82,116],[700,246,70,100],[834,284,76,110],[948,254,58,86],[1116,286,86,118],[1264,264,70,96],[1368,296,76,104]].map(([x,y,rx,ry],i)=>(
          <ellipse key={i} cx={x} cy={y} rx={rx} ry={ry} fill={i%2===0?'#0d220e':'#112813'}/>
        ))}
        {[[80,302,20,220],[170,290,14,180],[302,318,18,190],[418,286,12,160],[548,312,22,208],[700,278,16,180],[834,312,18,196],[948,286,13,166],[1116,314,22,210],[1264,292,16,176],[1368,324,18,182]].map(([x,y,w,h],i)=>(
          <rect key={i} x={x} y={y} width={w} height={h} rx="7" fill="#122012"/>
        ))}
      </g>
      <g opacity="0.58">
        <path d="M0 420 C120 390 190 392 280 416 C370 440 458 434 550 408 C664 374 720 368 822 392 C930 418 1036 430 1134 410 C1238 390 1338 394 1440 428 L1440 540 L0 540 Z" fill="#081708"/>
      </g>
      <g opacity="0.24">
        {[20,96,170,246,322,398,474,550,626,702,780,856,932,1008,1084,1160,1238,1314,1390].map((x,i)=>(
          <path key={i} d={`M${x} 540 C${x+6} 474 ${x+4} 412 ${x+10} 350`} stroke="#2c5d23" strokeWidth={i%3===0?5:4} strokeLinecap="round"/>
        ))}
      </g>
    </svg>

    {[['4%','22%',150,0.18],['10%','74%',112,0.14],['88%','10%',136,0.16],['92%','62%',118,0.14]].map(([left,top,size,op],i)=>(
      <div key={i} style={{position:'absolute',left,top,width:size,height:size,borderRadius:'50%',background:`radial-gradient(circle, rgba(130,210,120,${op}) 0%, rgba(130,210,120,${op*0.55}) 32%, transparent 72%)`}}/>
    ))}

    {[
      {bug:'dragonfly',x:'11%',y:'20%',size:42,rot:-8,delay:0.6,op:0.12},
      {bug:'morpho',x:'78%',y:'12%',size:54,rot:12,delay:1.3,op:0.14},
      {bug:'ageha',x:'86%',y:'48%',size:48,rot:-14,delay:0.2,op:0.1},
    ].map(({bug,x,y,size,rot,delay,op}) => (
      <div key={bug} style={{
        position:'absolute',left:x,top:y,width:size,height:size,
        transform:`rotate(${rot}deg)`,opacity:op,
        filter:'brightness(0) invert(0.6) sepia(1) saturate(0.3) hue-rotate(36deg)',
        animation:`silhouetteFloat 9s ease-in-out ${delay}s infinite`,
      }} dangerouslySetInnerHTML={{__html: window.getInsectSVG(bug, 'hero-float')}}/>
    ))}

    {[[22,54,5,'rgba(180,255,120,0.48)','rgba(180,255,120,0.2)'],[34,44,4,'rgba(255,232,110,0.46)','rgba(255,232,110,0.18)'],[49,61,4,'rgba(180,255,120,0.42)','rgba(180,255,120,0.16)'],[62,48,5,'rgba(180,255,120,0.48)','rgba(180,255,120,0.2)'],[71,39,6,'rgba(255,232,110,0.45)','rgba(255,232,110,0.18)'],[82,59,5,'rgba(180,255,120,0.42)','rgba(180,255,120,0.16)']].map(([x,y,size,color,glowColor],i)=>(
      <div key={i} style={{
        position:'absolute',left:`${x}%`,top:`${y}%`,
        width:size,height:size,borderRadius:'50%',
        background:color,
        boxShadow:`0 0 ${size*3}px ${size}px ${glowColor}`,
        animation:`fireflyPulse ${2.4+i*0.45}s ease-in-out ${i*0.3}s infinite`,
      }}/>
    ))}
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
