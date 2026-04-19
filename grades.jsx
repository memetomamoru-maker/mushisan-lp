// Grade curriculum tabs
const GRADES = [
  { g:'小1', level:'Grade 1', topics:['10までのたしざん','10までのひきざん','かずの大小','かたち','とけい(何時)'], bugs:['lady','ant','batta'] },
  { g:'小2', level:'Grade 2', topics:['くり上がりのたしざん','くり下がりのひきざん','九九（かけ算）','長さのはかり方','三角形と四角形'], bugs:['bee','dragonfly','snail'] },
  { g:'小3', level:'Grade 3', topics:['わり算','あまりのあるわり算','小数のたしひき','円と球','重さの単位'], bugs:['kabuto','firefly','mantis'] },
  { g:'小4', level:'Grade 4', topics:['わり算の筆算','分数','角の大きさ','垂直・平行','折れ線グラフ'], bugs:['miyama','ageha','cicada'] },
  { g:'小5', level:'Grade 5', topics:['小数のかけ算・わり算','分数のたしひき','割合','図形の面積','単位量あたり'], bugs:['morpho','jewelbug','hanmyo'] },
  { g:'小6', level:'Grade 6', topics:['分数のかけ算・わり算','比と比の値','比例と反比例','円の面積','場合の数'], bugs:['herc','atlas','actaeon'] },
];

const Grades = () => {
  const [idx, setIdx] = React.useState(0);
  return (
    <section className="grades" id="grades">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">〜 全学年対応カリキュラム 〜</div>
          <h2>小1から小6まで、<br/>学校の教科書に沿って。</h2>
          <p>学習指導要領に準拠した問題を、学年別に出題。難易度は自動で調整されます。</p>
        </div>
        <div className="grade-tabs">
          {GRADES.map((g,i)=>(
            <button key={i} className={"grade-tab " + (i===idx?'active':'')} onClick={()=>setIdx(i)}>
              {g.g}
            </button>
          ))}
        </div>
        {GRADES.map((g,i)=>(
          <div key={i} className={"grade-panel " + (i===idx?'active':'')}>
            <div className="grade-panel-head">
              <div className="level">{g.level}</div>
              <h3>{g.g}で学ぶこと</h3>
              <ul className="grade-topics">
                {g.topics.map(t=><li key={t}>{t}</li>)}
              </ul>
            </div>
            <div>
              <div style={{fontFamily:'Yusei Magic',color:'var(--earth-700)',fontSize:14,marginBottom:10,textAlign:'center'}}>
                この学年でゲットできる虫（一部）
              </div>
              <div className="grade-preview-bugs">
                {g.bugs.map(b=>(
                  <div key={b} className="grade-bug-card">
                    <div style={{width:'70%'}} dangerouslySetInnerHTML={{__html: window.INSECT_SVG[b]}}/>
                    <div style={{marginTop:4}}>{window.BUG_META[b]?.jp || b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { Grades });
