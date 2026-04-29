// Dex ｜ redesigned: every unlocked bug is clickable
const Dex = () => {
  const { mode } = React.useContext(window.ModeContext);
  const showcase = window.BUG_SHOWCASE.slice(0, 20);
  const LOCKED_AFTER = 12; // bugs beyond index 12 are locked

  // Extended meta for all showcase bugs
  const allMeta = {
    ...window.BUG_META,
    bee:       { jp:'ミツバチ',       en:'Apis mellifera',            rar:'N', habitat:'花畑',       size:'1.5cm', cond:'ガチャ（N）' },
    lady:      { jp:'テントウムシ',   en:'Coccinella septempunctata', rar:'N', habitat:'草むら',     size:'0.7cm', cond:'ガチャ（N）' },
    dragonfly: { jp:'トンボ',         en:'Sympetrum frequens',        rar:'N', habitat:'池のそば',   size:'4cm',   cond:'ガチャ（N）' },
    firefly:   { jp:'ホタル',         en:'Luciola cruciata',          rar:'R', habitat:'清流のそば', size:'1.2cm', cond:'ガチャ（R）' },
    mantis:    { jp:'カマキリ',       en:'Tenodera sinensis',         rar:'R', habitat:'草むら',     size:'7cm',   cond:'ガチャ（R）' },
    batta:     { jp:'バッタ',         en:'Acrida cinerea',            rar:'N', habitat:'草むら',     size:'5cm',   cond:'ガチャ（N）' },
    cicada:    { jp:'セミ',           en:'Graptopsaltria nigrofuscata',rar:'N', habitat:'木の幹',    size:'5cm',   cond:'ガチャ（N）' },
    ant:       { jp:'アリ',           en:'Formica japonica',          rar:'N', habitat:'どこでも',   size:'0.5cm', cond:'ガチャ（N）' },
    dango:     { jp:'ダンゴムシ',     en:'Armadillidium vulgare',     rar:'N', habitat:'落ち葉の下', size:'1.5cm', cond:'ガチャ（N）' },
    snail:     { jp:'カタツムリ',     en:'Euhadra peliomphala',       rar:'N', habitat:'葉っぱ',     size:'2cm',   cond:'ガチャ（N）' },
    kok:       { jp:'コオロギ',       en:'Gryllus bimaculatus',       rar:'R', habitat:'草むら',     size:'3cm',   cond:'ガチャ（R）' },
    cricket:   { jp:'スズムシ',       en:'Meloimorpha japonica',      rar:'R', habitat:'草むら',     size:'2cm',   cond:'ガチャ（R）' },
    kabuto:    { jp:'カブトムシ',     en:'Trypoxylus dichotomus',     rar:'SR', habitat:'クヌギ林',  size:'8cm',   cond:'ガチャ（SR）' },
    miyama:    { jp:'ミヤマクワガタ', en:'Lucanus maculifemoratus',   rar:'SR', habitat:'山の雑木林', size:'7cm',  cond:'ガチャ（SR）' },
    herc:      { jp:'ヘラクレスオオカブト', en:'Dynastes hercules',   rar:'SSR', habitat:'熱帯雨林（中南米）', size:'17cm', cond:'ガチャ（SSR）' },
    ageha:     { jp:'アゲハチョウ',   en:'Papilio xuthus',            rar:'N', habitat:'花畑・公園', size:'翅長6cm', cond:'ガチャ（N）' },
    morpho:    { jp:'モルフォチョウ', en:'Morpho menelaus',           rar:'SR', habitat:'熱帯雨林（南米）', size:'翅長10cm', cond:'ガチャ（SR）' },
    jewelbug:  { jp:'タマムシ',       en:'Chrysochroa fulgidissima',  rar:'R', habitat:'エノキのある森', size:'3.5cm', cond:'ガチャ（R）' },
    atlas:     { jp:'アトラスオオカブト', en:'Chalcosoma atlas',      rar:'SR', habitat:'東南アジア', size:'10cm', cond:'ガチャ（SR）' },
    actaeon:   { jp:'アクタエオンゾウカブト', en:'Megasoma actaeon',  rar:'SSR', habitat:'南アメリカ', size:'14cm', cond:'ガチャ（SSR）' },
  };

  const rarColor = {N:'var(--rar-n)',R:'var(--rar-r)',SR:'var(--rar-sr)',SSR:'var(--rar-ssr)'};
  const [selectedIdx, setSelectedIdx] = React.useState(2); // herc default (index 2 = herc in showcase)
  const [fading, setFading] = React.useState(false);
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  const kidCond = (cond) => mode === 'kid'
    ? String(cond).replace('ガチャ', 'ガチャでゲット')
    : cond;

  const selectBug = (i) => {
    if (i === selectedIdx || i > LOCKED_AFTER) return;
    setFading(true);
    setTimeout(() => { setSelectedIdx(i); setFading(false); }, 220);
  };

  const selKey = showcase[selectedIdx];
  const meta = allMeta[selKey] || { jp: selKey, en: selKey, rar:'N', habitat:'｜', size:'｜', cond:'ガチャ（N）' };

  return (
    <section className="dex" id="dex">
      <div className="container">
        <div className="sec-head center">
          <h2 className="sec-title">{mode==='kid'
            ? 'ぜんぶで100しゅるいの むし・いきものを ずかんにあつめよう。'
            : '全100種の虫・いきものを\n図鑑にあつめよう。'}</h2>
          <p className="sec-lead">{mode==='kid'
            ? 'みぢかなむしから、せかいのめずらしいむしまで。ずかんをうめると「ふしぎなひみつ」がよめるよ。'
            : '身近な虫から世界の珍しい甲虫まで。図鑑をうめると「ふしぎなひみつ」が読めるようになる。'}</p>
        </div>
        <div className="dex-book">
          <div className="dex-divider"/>
          <div className="dex-pages">

            {/*  Left page: selected bug detail  */}
            <div className="dex-page">
              <div className="dex-page-title">No.{String(selectedIdx+1).padStart(3,'0')} ｜ {mode==='kid' ? 'ずかんページ' : '図鑑ページ'}</div>
              <div className="dex-featured" style={{opacity:fading?0:1,transition:'opacity 0.22s'}}>
                <div className="dex-featured-img" dangerouslySetInnerHTML={{__html: window.INSECT_SVG[selKey]}}/>
                <h4>{meta.jp}</h4>
                <div className="sub">{meta.en}</div>
                <div className="rarity-line" style={{color:rarColor[meta.rar]||'var(--rar-n)'}}>
                  {meta.rar}&nbsp;{'★'.repeat(meta.rar==='SSR'?6:meta.rar==='SR'?5:meta.rar==='R'?4:3)}
                </div>
                <div className="dex-fields">
                  <div className="dex-field"><span className="dex-field-k">すみか</span><span className="dex-field-v">{meta.habitat}</span></div>
                  <div className="dex-field"><span className="dex-field-k">{mode==='kid' ? 'おおきさ' : '大きさ'}</span><span className="dex-field-v">{meta.size}</span></div>
                  <div className="dex-field"><span className="dex-field-k">{mode==='kid' ? 'あつめかた' : '入手条件'}</span><span className="dex-field-v">{kidCond(meta.cond)}</span></div>
                </div>
              </div>
              <div style={{marginTop:12,fontSize:11,color:'var(--text-3)',textAlign:'center'}}>
                {mode==='kid' ? 'むしをえらぶと、ページがかわるよ' : '虫をクリックで切り替え'}
              </div>
            </div>

            {/*  Right page: collection grid  */}
            <div className="dex-page">
              <div className="dex-page-title">{mode==='kid' ? 'あつめたむし' : 'コレクション'} ｜ {LOCKED_AFTER+1} / 100しゅ</div>
              <div className="dex-mini-grid" style={{gridTemplateColumns:'repeat(5,1fr)'}}>
                {showcase.map((k, i) => {
                  const locked = i > LOCKED_AFTER;
                  const isSelected = i === selectedIdx;
                  const isHov = hoveredIdx === i;
                  const rCol = rarColor[(allMeta[k]?.rar)||'N'];
                  return (
                    <button key={k}
                      type="button"
                      className={"dex-mini" + (locked?' locked':'') + (isSelected ? ' selected' : '')}
                      onMouseEnter={() => !locked && setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onClick={() => selectBug(i)}
                      disabled={locked}
                      aria-label={locked ? 'まだあつめていないむし' : (allMeta[k]?.jp || k) + 'をみる'}
                      aria-pressed={!locked && isSelected}
                      style={{
                        position:'relative',
                        transform: isHov ? 'scale(1.14)' : 'scale(1)',
                        transition:'all 0.15s',
                        zIndex: isHov ? 2 : 1,
                        border: isSelected
                          ? `2px solid ${rCol}`
                          : isHov ? '1px solid var(--leaf-5)' : undefined,
                        boxShadow: isSelected ? `0 0 14px ${rCol}55` : 'none',
                        cursor: locked ? 'default' : 'pointer',
                        outline: 'none',
                      }}
                    >
                      {locked
                        ? <span style={{color:'var(--text-3)',fontWeight:900,fontSize:16}}>?</span>
                        : <div style={{width:'88%'}} dangerouslySetInnerHTML={{__html: window.INSECT_SVG[k]}}/>
                      }
                      {isSelected && !locked && (
                        <span className="dex-mini-selected-label">{mode==='kid' ? 'みてる' : '選択中'}</span>
                      )}
                      {isHov && !locked && (
                        <div style={{
                          position:'absolute',bottom:'108%',left:'50%',transform:'translateX(-50%)',
                          background:'var(--bg-0)',color:'var(--text-0)',
                          padding:'3px 8px',borderRadius:6,fontSize:10,fontWeight:700,
                          whiteSpace:'nowrap',border:'1px solid var(--bg-5)',
                          zIndex:10,pointerEvents:'none',
                          boxShadow:'0 2px 8px rgba(0,0,0,0.4)',
                        }}>
                          {allMeta[k]?.jp || k}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <div key={selKey} className={"dex-mobile-result" + (fading ? ' is-changing' : '')} aria-live="polite">
                <div className="dex-mobile-result-bug" dangerouslySetInnerHTML={{__html: window.INSECT_SVG[selKey]}}/>
                <div>
                  <strong>{mode==='kid' ? 'いまのページ' : '現在のページ'}</strong>
                  <span>{meta.jp}</span>
                </div>
              </div>
              <div style={{marginTop:14,background:'var(--bg-4)',padding:'10px 14px',borderRadius:'var(--radius-sm)',fontSize:12,color:'var(--text-2)',lineHeight:1.6}}>
                <strong style={{color:'var(--gold-6)'}}>★ ふしぎなひみつ</strong><br/>
                {mode==='kid'
                  ? 'おとなになったむしはずかんにのって、そのむしだけのひみつメモがよめるよ！'
                  : 'せいちゅうになった虫は図鑑に登録され、その虫だけのひみつのメモが読めるようになるよ！'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent section
const ParentSection = () => {
  const { mode } = React.useContext(window.ModeContext);
  const subjects = ['たしざん・ひきざん','かけざん・わりざん','小数の計算','分数の計算','速さの文章題','昆虫の生態知識'];
  return (
    <section className="parent-sec" id="parent">
      <div className="container">
        <div className="sec-head">
          <span className="sec-label">For Parents</span>          <h2 className="sec-title">保護者の方へ</h2>
          <p className="sec-lead">小学生（6〜12歳）向けの算数学習アプリです。学年表示は目安で、お子さまの理解度に合わせて難易度を選べます。ゲームを通じて計算力を楽しく練習できます。</p>
        </div>
        <div className="parent-grid">
          <div className="parent-card">
            <div className="parent-card-icon"><div dangerouslySetInnerHTML={{__html: window.ICONS.book}}/></div>
            <h4>学習内容</h4>
            <p>出題するたびにランダムに問題が変化するため、繰り返し遊ぶほど計算力が身につきます。</p>
            <div className="subject-chips">
              {subjects.map(s=>(
                <span key={s} className="subject-chip">
                  <div style={{width:14,height:14}} dangerouslySetInnerHTML={{__html: window.ICONS.check}}/>{s}
                </span>
              ))}
            </div>
          </div>
          <div className="parent-card">
            <div className="parent-card-icon"><div dangerouslySetInnerHTML={{__html: window.ICONS.shield}}/></div>
            <h4>安心・安全について</h4>
            <ul className="parent-list">
              {['課金・購入要素はありません（完全無料）','広告は一切表示されません','外部通信は行いません（Wikipedia除く）','個人情報の収集はありません','ニックネームはお使いの端末にのみ保存されます','暴力・暗い表現は含みません'].map(t=>(
                <li key={t}><span className="ck" dangerouslySetInnerHTML={{__html: window.ICONS.check}}/>{t}</li>
              ))}
            </ul>
          </div>
          <div className="parent-card">
            <div className="parent-card-icon"><div dangerouslySetInnerHTML={{__html: window.ICONS.sprout}}/></div>
            <h4>遊び方のながれ</h4>
            <ul className="parent-list">
              {['算数問題に正解すると「ポイント」がもらえます','30ポイントで「ガチャ」を1回引けます','ガチャで100種の昆虫が当たります（N / R / SR / SSR）','当たった昆虫を育てて成虫になったら図鑑に登録','図鑑に登録すると生態情報が読めます'].map((t,i)=>(
                <li key={i}><span className="ck" dangerouslySetInnerHTML={{__html: window.ICONS.check}}/>{t}</li>
              ))}
            </ul>
          </div>
          <div className="parent-card">
            <div className="parent-card-icon"><div dangerouslySetInnerHTML={{__html: window.ICONS.family}}/></div>
            <h4>保護者の方へのヒント</h4>
            <ul className="parent-list">
              {['問題に詰まったときは一緒に考えてあげてください','図鑑の説明（ひらがな）をお子さまと読み合わせると効果的です','「Wikipediaで くわしくみる」ボタンで本物の情報も確認できます','プレイ時間の管理はご家庭でお願いします'].map(t=>(
                <li key={t}><span className="ck" dangerouslySetInnerHTML={{__html: window.ICONS.check}}/>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Dex, ParentSection });
