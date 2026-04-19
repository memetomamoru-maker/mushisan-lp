// Game flow + Features
const GameFlow = () => {
  const steps = [
    { icon: 'math',  title: '算数に答える',    desc: '全学年対応の問題を解くと、正解ごとにポイントをゲット。' },
    { icon: 'point', title: 'ポイントをためる', desc: '5問連続正解でレベルアップ。難易度が自動調整される。' },
    { icon: 'gacha', title: 'ガチャを回す',     desc: '30ポイントで虫のたまごを1回ガチャ。N〜SSRのレアリティ。' },
    { icon: 'egg',   title: 'たまごを育てる',   desc: 'たまご→ようちゅう→さなぎ→せいちゅうの4段階で成長。' },
  ];
  return (
    <section className="flow" id="flow">
      <div className="container">
        <div className="sec-head">
          <span className="sec-label">How to play</span>
          <h2 className="sec-title">答えるたびに、虫が育つ。</h2>
          <p className="sec-lead">算数の問題を解いてポイントを集め、ガチャで虫のたまごをゲット。育てたら図鑑に登録しよう。</p>
        </div>
        <div className="flow-steps">
          {steps.map((s,i) => (
            <React.Fragment key={i}>
              <div className="flow-step">
                <div className="flow-step-icon" style={{color:'var(--leaf-6)'}}>
                  <div style={{width:24,height:24}} dangerouslySetInnerHTML={{__html: window.ICONS[s.icon]}}/>
                </div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flow-arrow">
                  <div style={{width:20,height:20}} dangerouslySetInnerHTML={{__html: window.ICONS.arrow}}/>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* wave into features */}
      <div className="wave-divider" style={{marginTop:40,marginBottom:-1}}>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{height:48}}>
          <path d="M0,0 C360,48 1080,0 1440,48 L1440,48 L0,48 Z" fill="#0d160e"/>
        </svg>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    {
      num: '01', icon: 'bug', title: '採集する',
      desc: '全100種の虫・いきものがゲットの対象。身近なアリやバッタから、世界のカブトムシまで。図鑑をうめていくコレクション感がくせになる。',
      chips: ['全100種','N / R / SR / SSR','コンプリート報酬'],
      bug: 'kabuto',
    },
    {
      num: '02', icon: 'egg', title: '育てる',
      desc: 'たまご→ようちゅう→さなぎ→せいちゅうの4段階で成長。問題を解くたびに育っていく。せいちゅうになったら図鑑に登録される。',
      chips: ['4段階の成長','あいぼうシステム','ガチャで入手'],
      bug: 'ageha',
    },
    {
      num: '03', icon: 'book', title: '図鑑にのせる',
      desc: '100種の虫それぞれに生態の説明と「ふしぎなひみつ」が読める。虫のすみかや季節など、理科の知識も自然に身につく。',
      chips: ['生態メモ','ふしぎなひみつ','Wikipedia連携'],
      bug: 'morpho',
    },
  ];
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="sec-head center">
          <span className="sec-label">Features</span>
          <h2 className="sec-title">採集・育成・図鑑の<br/>3つのたのしさ。</h2>
          <p className="sec-lead">ゲームの3つの柱が、「もっと解きたい」という気持ちをつくりだす。</p>
        </div>
        <div className="feature-grid">
          {items.map((it) => (
            <div key={it.num} className="feature-card">
              <div className="feature-num">{it.num}</div>
              <div className="feature-icon">
                <div style={{width:30,height:30}} dangerouslySetInnerHTML={{__html: window.ICONS[it.icon]}}/>
              </div>
              <div style={{
                width:60,height:60,background:'var(--bg-5)',borderRadius:12,
                padding:6,marginBottom:16
              }} dangerouslySetInnerHTML={{__html: window.INSECT_SVG[it.bug]}}/>
              <h3>{it.title}</h3>
              <p style={{marginTop:8}}>{it.desc}</p>
              <div className="feature-chips">
                {it.chips.map(c => <span key={c} className="chip">{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { GameFlow, Features });
