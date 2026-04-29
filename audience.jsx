// Rarity system + Level system ｜ mode-aware
const Rarity = () => {
  const { mode } = React.useContext(window.ModeContext);
  const items = mode === 'kid' ? [
    { cls:'n',  badge:'N　ノーマル',      count:58, rate:'65%', examples:'アリ・バッタ・クモ・ダンゴムシなど、みぢかなむし。' },
    { cls:'r',  badge:'R　レア',          count:30, rate:'25%', examples:'アゲハチョウ・ホタル・タマムシなど、なかなかであえないむし。' },
    { cls:'sr', badge:'SR　スーパーレア', count:8,  rate:'7%',  examples:'カブトムシ・ヘラクレスなど、だいにんきのおおきなむし。' },
    { cls:'ssr',badge:'SSR　でんせつ',    count:4,  rate:'3%',  examples:'ヘラクレス・アトラスなど。すごくめずらしい！' },
  ] : [
    { cls:'n',  badge:'N　ノーマル',         count:58, rate:'65%', examples:'アリ・バッタ・クモ・ダンゴムシなど、身近な虫。' },
    { cls:'r',  badge:'R　レア',             count:30, rate:'25%', examples:'アゲハチョウ・ホタル・タマムシなど、なかなか出会えない虫。' },
    { cls:'sr', badge:'SR　スーパーレア',    count:8,  rate:'7%',  examples:'カブトムシ・ヘラクレスなど、大人気の大型甲虫。' },
    { cls:'ssr',badge:'SSR　でんせつ',       count:4,  rate:'3%',  examples:'ヘラクレス・アトラス・アレキサンドラなど。きわめてレア！' },
  ];

  return (
    <section className="rarity" id="rarity" style={{paddingTop:0}}>
      <div className="wave-divider">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{height:48}}>
          <path d="M0,48 C360,0 1080,48 1440,0 L1440,0 L0,0 Z" fill="#0d160e"/>
        </svg>
      </div>
      <div className="container">
        <div className="sec-head center">
          <h2 className="sec-title">{mode==='kid' ? '4つのレアリティ、ぜんぶで100しゅるい。' : '全100種、4つのレアリティ。'}</h2>
          <p className="sec-lead">{mode==='kid' ? '30ポイントためるとガチャが1かい。どのむしがでるかはおたのしみ！' : '30ポイントためるとガチャが1回。どの虫が出るかはお楽しみ。'}</p>
        </div>
        <div className="rarity-grid">
          {items.map(it => (
            <div key={it.cls} className={"rarity-card " + it.cls}>
              <div className="rarity-badge">{it.badge}</div>
              <div className="rarity-count">{it.count}</div>
              <div className="rarity-label">しゅるい</div>
              <div style={{display:'flex',justifyContent:'center',gap:4,marginBottom:12}}>
                {Array.from({length:Math.min(3,Math.floor(it.count/10)+1)}).map((_,i)=>(
                  <div key={i} style={{width:36,height:36,padding:3,background:'var(--bg-4)',borderRadius:8}}
                    dangerouslySetInnerHTML={{__html: window.getInsectSVG(
                      ['ant','batta','dango','ageha','lady','firefly','kabuto','herc','morpho','actaeon','atlas','herc'][it.cls==='n'?i:it.cls==='r'?i+3:it.cls==='sr'?i+6:i+9] || 'kabuto',
                      'rarity'
                    )}}/>
                ))}
              </div>
              <div className="rarity-examples">{it.examples}</div>
              {it.rate !== '｜' && <div style={{marginTop:8,fontSize:11,fontWeight:700,color:'var(--text-3)'}}>{mode==='kid' ? 'でやすさ' : '排出率'} {it.rate}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LevelSystem = () => {
  const { mode } = React.useContext(window.ModeContext);
  const grades = mode === 'kid' ? [
    { icon:'plant1', grade:'1ねんせいレベル（やさしい）', topics:'1けたのたしざん・ひきざん', pts:'+5pt / もん' },
    { icon:'plant1', grade:'2〜3ねんせいレベル',          topics:'かけざん・わりざん・2けたのけいさん', pts:'+7〜9pt / もん' },
    { icon:'plant1', grade:'こうがくねんレベル（むずかしい）', topics:'しょうすう・ぶんすう・はやさのもんだい', pts:'+11〜15pt / もん' },
  ] : [
    { icon:'plant1', grade:'1年生レベル（やさしい）',  topics:'1けたのたしざん・ひきざん',          pts:'+5pt / もん' },
    { icon:'plant1', grade:'2〜3年生レベル',           topics:'かけざん・わりざん・2けたの計算',    pts:'+7〜9pt / もん' },
    { icon:'plant1', grade:'高学年レベル（むずかしい）', topics:'しょうすう・ぶんすう・速さの文章題', pts:'+11〜15pt / もん' },
  ];

  const rules = mode === 'kid' ? [
    { icon:'chart', cls:'rule-up',   text:<><strong style={{color:'var(--leaf-6)'}}>5もんれんぞくせいかい</strong>でレベルアップ</> },
    { icon:'chart', cls:'rule-down', text:<><strong style={{color:'var(--red-6)'}}>3もんれんぞくふせいかい</strong>でレベルダウン</> },
    { icon:'point', cls:'',          text:<>むずかしいもんだいほど<strong style={{color:'var(--gold-6)'}}>ポイントがおおく</strong>もらえるよ</> },
    { icon:'bug',   cls:'',          text:<>「じどう」「じゆう」「おおきいかずチャレンジ」の3つのモードがあるよ</> },
  ] : [
    { icon:'chart', cls:'rule-up',   text:<><strong style={{color:'var(--leaf-6)'}}>5問連続正解</strong>でレベルアップ</> },
    { icon:'chart', cls:'rule-down', text:<><strong style={{color:'var(--red-6)'}}>3問連続不正解</strong>でレベルダウン</> },
    { icon:'point', cls:'',          text:<>難しい問題ほど<strong style={{color:'var(--gold-6)'}}>ポイントが多く</strong>もらえる</> },
    { icon:'bug',   cls:'',          text:<>モードは「自動」「自由選択」「大きい数チャレンジ」の3種</> },
  ];

  return (
    <section className="levels" id="levels">
      <div className="container">
        <div className="sec-head">
          <h2 className="sec-title">{mode==='kid'
            ? 'ちょうどいいむずかしさに、じどうでかわるよ。'
            : 'ちょうどいい難しさに、自動で調整される。'}</h2>
          <p className="sec-lead">{mode==='kid'
            ? 'しょうがくせいむけ。やさしいもんだいからむずかしいもんだいまで、じぶんでえらべるよ。'
            : '小学生向けの幅広い難易度に対応。理解度に合わせて問題を選べる。'}</p>
        </div>
        <div className="level-grid">
          <div className="level-cards">
            {grades.map((g,i) => (
              <div key={i} className="level-card">
                <div className="level-icon">
                  <div style={{width:22,height:22}} dangerouslySetInnerHTML={{__html: window.ICONS[g.icon]}}/>
                </div>
                <div>
                  <strong>{g.grade}</strong>
                  <span>{g.topics}</span>
                  <div className="level-points">{g.pts}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="level-chart">
            <h4>{mode==='kid' ? 'レベルアップのしくみ' : 'レベルアップのしくみ'}</h4>
            {rules.map((r,i) => (
              <div key={i} className="level-rule">
                <div className={"level-rule-icon " + r.cls}>
                  <div style={{width:16,height:16}} dangerouslySetInnerHTML={{__html: window.ICONS[r.icon]}}/>
                </div>
                <div>{r.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Rarity, LevelSystem });
