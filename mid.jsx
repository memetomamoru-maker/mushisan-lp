// Dex preview — real content
const Dex = () => {
  const showcase = window.BUG_SHOWCASE.slice(0, 15);
  return (
    <section className="dex" id="dex">
      <div className="container">
        <div className="sec-head center">
          <span className="sec-label">Bug Zukan</span>
          <h2 className="sec-title">全100種の虫・いきものを<br/>図鑑にあつめよう。</h2>
          <p className="sec-lead">身近な虫から世界の珍しい甲虫まで。図鑑をうめると「ふしぎなひみつ」が読めるようになる。</p>
        </div>
        <div className="dex-book">
          <div className="dex-divider"/>
          <div className="dex-pages">
            {/* Left page — featured bug */}
            <div className="dex-page">
              <div className="dex-page-title">No. 042 — 図鑑ページ</div>
              <div className="dex-featured">
                <div className="dex-featured-img" dangerouslySetInnerHTML={{__html: window.INSECT_SVG.herc}}/>
                <h4>ヘラクレスオオカブト</h4>
                <div className="sub">Dynastes hercules</div>
                <div className="rarity-line">SSR ★★★★★★（排出率 3%）</div>
                <div className="dex-fields">
                  <div className="dex-field"><span className="dex-field-k">すみか</span><span className="dex-field-v">熱帯雨林（中南米）</span></div>
                  <div className="dex-field"><span className="dex-field-k">大きさ</span><span className="dex-field-v">15〜18 cm</span></div>
                  <div className="dex-field"><span className="dex-field-k">みられる季節</span><span className="dex-field-v">通年（熱帯）</span></div>
                  <div className="dex-field"><span className="dex-field-k">入手条件</span><span className="dex-field-v">ガチャ（SSR）</span></div>
                </div>
              </div>
            </div>
            {/* Right page — mini grid */}
            <div className="dex-page">
              <div className="dex-page-title">コレクション — 15 / 100しゅ</div>
              <div className="dex-grid-label">ゲットずみの虫</div>
              <div className="dex-mini-grid">
                {showcase.map((k, i) => (
                  <div key={k} className={"dex-mini " + (i > 10 ? 'locked' : '')}>
                    {i <= 10 && <div style={{width:'88%'}} dangerouslySetInnerHTML={{__html: window.INSECT_SVG[k]}}/>}
                    {i > 10 && '?'}
                  </div>
                ))}
              </div>
              <div style={{marginTop:16,background:'var(--bg-4)',padding:12,borderRadius:'var(--radius-sm)',fontSize:12,color:'var(--text-2)'}}>
                <strong style={{color:'var(--gold-6)'}}>★ ふしぎなひみつ</strong><br/>
                せいちゅうになった虫は図鑑に登録され、その虫だけのひみつのメモが読めるようになるよ！
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parent section — real content from mushisan.vercel.app
const ParentSection = () => {
  const subjects = [
    'たしざん・ひきざん', 'かけざん・わりざん',
    '小数の計算', '分数の計算',
    '速さの文章題', '昆虫の生態知識',
  ];
  return (
    <section className="parent-sec" id="parent">
      <div className="container">
        <div className="sec-head">
          <span className="sec-label">For Parents</span>
          <h2 className="sec-title">保護者の方へ</h2>
          <p className="sec-lead">小学校全学年（6〜12歳）を対象とした算数学習アプリです。ゲームを通じて計算力を楽しく練習できます。</p>
        </div>
        <div className="parent-grid">
          <div className="parent-card">
            <div className="parent-card-icon">
              <div dangerouslySetInnerHTML={{__html: window.ICONS.book}}/>
            </div>
            <h4>学習内容</h4>
            <p>出題するたびにランダムに問題が変化するため、繰り返し遊ぶほど計算力が身につきます。</p>
            <div className="subject-chips">
              {subjects.map(s => (
                <span key={s} className="subject-chip">
                  <div style={{width:14,height:14}} dangerouslySetInnerHTML={{__html: window.ICONS.check}}/>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="parent-card">
            <div className="parent-card-icon">
              <div dangerouslySetInnerHTML={{__html: window.ICONS.shield}}/>
            </div>
            <h4>安心・安全について</h4>
            <ul className="parent-list">
              {[
                '課金・購入要素はありません（完全無料）',
                '広告は一切表示されません',
                '外部通信は行いません（Wikipedia除く）',
                '個人情報の収集はありません',
                'ニックネームはお使いの端末にのみ保存されます',
                '暴力・暗い表現は含みません',
              ].map(t => (
                <li key={t}>
                  <span className="ck" dangerouslySetInnerHTML={{__html: window.ICONS.check}}/>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="parent-card">
            <div className="parent-card-icon">
              <div dangerouslySetInnerHTML={{__html: window.ICONS.sprout}}/>
            </div>
            <h4>遊び方のながれ</h4>
            <ul className="parent-list">
              {[
                '算数問題に正解すると「ポイント」がもらえます',
                '30ポイントで「ガチャ」を1回引けます',
                'ガチャで100種の昆虫が当たります（N / R / SR / SSR）',
                '当たった昆虫を育てて成虫になったら図鑑に登録',
                '図鑑に登録すると生態情報が読めます',
              ].map((t,i) => (
                <li key={i}>
                  <span className="ck" dangerouslySetInnerHTML={{__html: window.ICONS.check}}/>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="parent-card">
            <div className="parent-card-icon">
              <div dangerouslySetInnerHTML={{__html: window.ICONS.family}}/>
            </div>
            <h4>保護者の方へのヒント</h4>
            <ul className="parent-list">
              {[
                '問題に詰まったときは一緒に考えてあげてください',
                '図鑑の説明（ひらがな）をお子さまと読み合わせると効果的です',
                '「Wikipediaで くわしくみる」ボタンで本物の情報も確認できます',
                'プレイ時間の管理はご家庭でお願いします',
              ].map(t => (
                <li key={t}>
                  <span className="ck" dangerouslySetInnerHTML={{__html: window.ICONS.check}}/>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Dex, ParentSection });
