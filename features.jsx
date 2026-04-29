// Game flow + Features — mode-aware (kid = hiragana-heavy)
const GameFlow = () => {
  const { mode } = React.useContext(window.ModeContext);
  const steps = mode === 'kid' ? [
    { icon: 'math',  title: 'もんだいをとく',  desc: 'さんすうのもんだいにこたえると、ポイントがもらえるよ！' },
    { icon: 'point', title: 'ポイントをためる', desc: '5もんれんぞくせいかいでレベルアップ。むずかしさがかわるよ。' },
    { icon: 'gacha', title: 'ガチャをまわす',  desc: '30ポイントでたまごを1かいガチャ。なにがでるかな？' },
    { icon: 'egg',   title: 'たまごをそだてる', desc: 'たまご→ようちゅう→さなぎ→せいちゅうの4だんかいでそだつよ。' },
  ] : [
    { icon: 'math',  title: '算数に答える',    desc: '全学年対応の問題を解くと、正解ごとにポイントをゲット。' },
    { icon: 'point', title: 'ポイントをためる', desc: '5問連続正解でレベルアップ。難易度が自動調整される。' },
    { icon: 'gacha', title: 'ガチャを回す',    desc: '30ポイントで虫のたまごを1回ガチャ。N〜SSRのレアリティ。' },
    { icon: 'egg',   title: 'たまごを育てる',  desc: 'たまご→ようちゅう→さなぎ→せいちゅうの4段階で成長。' },
  ];
  return (
    <section className="flow" id="flow">
      <div className="container">
        <div className="sec-head">
          <h2 className="sec-title">{mode==='kid' ? 'こたえるたびに、むしがそだつ。' : '答えるたびに、虫が育つ。'}</h2>
          <p className="sec-lead">{mode==='kid'
            ? 'さんすうのもんだいをといてポイントをあつめよう。ガチャでたまごをゲットして、そだてたらずかんにのせよう。'
            : '算数の問題を解いてポイントを集め、ガチャで虫のたまごをゲット。育てたら図鑑に登録しよう。'}</p>
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
      <div className="wave-divider" style={{marginTop:40,marginBottom:-1}}>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{height:48}}>
          <path d="M0,0 C360,48 1080,0 1440,48 L1440,48 L0,48 Z" fill="#0d160e"/>
        </svg>
      </div>
    </section>
  );
};

const Features = () => {
  const { mode } = React.useContext(window.ModeContext);
  const [active, setActive] = React.useState(0);
  React.useEffect(() => { setActive(0); }, [mode]);

  const items = mode === 'kid' ? [
    {
      num: '01', icon: 'bug',
      title: 'あつめる',
      tagline: 'ゲットしたむしがふえていく！',
      desc: '100しゅるいのむし・いきものをゲットできるよ。ちかくにいるアリやバッタから、せかいのかっこいいカブトムシまで。ずかんがうまるとうれしいよ！',
      chips: ['100しゅるい','N / R / SR / SSR','ぜんぶあつめよう'],
      bug: 'kabuto',
    },
    {
      num: '02', icon: 'egg',
      title: 'そだてる',
      tagline: 'たまごからおおきくなろう！',
      desc: 'ガチャでゲットしたたまごをそだてよう。たまご→ようちゅう→さなぎ→せいちゅうの4だんかいでおおきくなるよ。せいちゅうになったらずかんにのれるよ！',
      chips: ['4だんかいでせいちょう','あいぼうシステム','ガチャでゲット'],
      bug: 'ageha',
    },
    {
      num: '03', icon: 'book',
      title: 'ずかんにのせる',
      tagline: 'むしのひみつがわかる！',
      desc: '100しゅるいのむしそれぞれに、すんでいるばしょやエサのせつめいと「ふしぎなひみつ」がよめるよ。むしのことが、もっとすきになるよ！',
      chips: ['せいたいメモ','ふしぎなひみつ','Wikipediaでくわしく'],
      bug: 'morpho',
    },
  ] : [
    {
      num: '01', icon: 'bug',
      title: '採集する',
      tagline: 'ゲットした虫がコレクションに',
      desc: '全100種の虫・いきものがゲットの対象。身近なアリやバッタから、世界の珍しい甲虫まで。問題を解くたびに図鑑がうまっていく達成感がくせになる。',
      chips: ['全100種','N / R / SR / SSR','コンプリート報酬'],
      bug: 'kabuto',
    },
    {
      num: '02', icon: 'egg',
      title: '育てる',
      tagline: 'たまごからせいちゅうへ',
      desc: 'ガチャで当てたたまごを育てよう。たまご→ようちゅう→さなぎ→せいちゅうの4段階で成長。せいちゅうになったら図鑑に登録される。',
      chips: ['4段階の成長','あいぼうシステム','ガチャで入手'],
      bug: 'ageha',
    },
    {
      num: '03', icon: 'book',
      title: '図鑑にのせる',
      tagline: '生態の知識も自然に身につく',
      desc: '100種の虫それぞれに生態の説明と「ふしぎなひみつ」が読める。虫のすみかや季節など、理科の知識も自然に身についていく。',
      chips: ['生態メモ','ふしぎなひみつ','Wikipedia連携'],
      bug: 'morpho',
    },
  ];

  const cur = items[active];
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="sec-head center">
          <h2 className="sec-title">{mode==='kid'
            ? 'あつめる・そだてる・ずかんの\n3つのたのしさ。'
            : '採集・育成・図鑑の\n3つのたのしさ。'}</h2>
          <p className="sec-lead">{mode==='kid'
            ? 'ゲームの3つのたのしさが、「もっとといてみたい！」という気もちをつくりだす。'
            : 'ゲームの3つの柱が、「もっと解きたい」という気持ちをつくりだす。'}</p>
        </div>
        <div className="feat-tabs">
          {items.map((it,i) => (
            <button key={i} className={"feat-tab" + (active===i?' active':'')} onClick={()=>setActive(i)}>
              <span className="feat-tab-num">{it.num}</span>
              {it.title}
            </button>
          ))}
        </div>
        <div className="feat-panel">
          <div className="feat-panel-visual">
            <div className="feat-bug-circle" dangerouslySetInnerHTML={{__html: window.INSECT_SVG[cur.bug]}}/>
            <div className="feat-chips">
              {cur.chips.map(c => <span key={c} className="chip">{c}</span>)}
            </div>
          </div>
          <div className="feat-panel-text">
            <div className="feat-panel-num">{cur.num}</div>
            <h3 className="feat-panel-title">{cur.title}</h3>
            <p className="feat-panel-tagline">{cur.tagline}</p>
            <p className="feat-panel-desc">{cur.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { GameFlow, Features });
