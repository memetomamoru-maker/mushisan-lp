// FAQ + CTA + Footer
const FAQ = () => {
  const { mode } = React.useContext(window.ModeContext);
  const items = mode === 'kid' ? [
    { q:'おかねはかかる？', a:'かかりません。ゲームのなかでおかねをはらうところも、こうこくもありません。' },
    { q:'アプリをいれるの？', a:'いりません。ブラウザでページをひらくだけであそべます。' },
    { q:'ほんとうのなまえはいる？', a:'いりません。ニックネームだけであそべます。メールアドレスもいりません。' },
    { q:'べつのページにつながる？', a:'ずかんの「Wikipediaで くわしくみる」をおすと、Wikipediaがひらきます。ページをひらくためのつうしんはありますが、こうこくをだしたり、あそんだきろくをあつめたりするためのしくみはありません。' },
    { q:'どのくらいのこがあそべる？', a:'しょうがくせいむけです。かんたんなもんだいから、むずかしいもんだいまであります。' },
    { q:'おとはけせる？', a:'タイトルがめんで「BGMなしではじめる」をえらべます。' },
  ] : [
    { q:'料金はかかりますか？', a:'いいえ。利用料金、アプリ内課金、有料プランはありません。広告表示もありません。' },
    { q:'アプリのインストールは必要ですか？', a:'不要です。ブラウザからmushisan.vercel.appにアクセスするだけで遊べます。スマホ・タブレット・PCすべてに対応しています。' },
    { q:'個人情報の登録は必要ですか？', a:'ニックネーム（最大10文字）と学年の入力のみです。メールアドレスや氏名など個人情報は一切登録しません。ニックネームはお使いの端末にのみ保存されます。' },
    { q:'対象年齢は？', a:'小学生（6〜12歳）向けです。学年表示は目安で、お子さまの理解度に合わせて難易度を選べます。' },
    { q:'外部サービスへの送信はありますか？', a:'広告配信、アクセス解析、学習データ送信のための外部サービスは使っていません。図鑑の「Wikipediaで くわしくみる」を押した場合は、外部サイトのWikipediaを開きます。なお、ページ表示のためにホスティング先やフォントなどの読み込みは発生します。' },
    { q:'BGMや効果音はオフにできますか？', a:'はい。タイトル画面で「BGMなしではじめる」を選ぶとBGMなしでプレイできます。' },
    { q:'兄弟姉妹で1台を共有できますか？', a:'現在は1端末につき1プレイヤーのデータが保存されます。兄弟姉妹で使いたい場合は、それぞれ別の端末でお楽しみください。' },
  ];
  const [open, setOpen] = React.useState(null);

  return (
    <section className="faq-sec" id="faq" style={{paddingTop:0}}>
      <div className="wave-divider">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{height:48}}>
          <path d="M0,48 C360,0 1080,48 1440,0 L1440,0 L0,0 Z" fill="#111d12"/>
        </svg>
      </div>
      <div className="container">
        <div className="sec-head center">
          <span className="sec-label">FAQ</span>
          <h2 className="sec-title">{mode === 'kid' ? 'よくあるしつもん' : 'よくある質問'}</h2>
        </div>
        <div className="faq-list">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={"faq-item " + (isOpen ? 'open' : '')}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="faq-q-text"><span className="faq-q-label">Q.</span>{it.q}</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </button>
                <div className="faq-a" role="region" aria-hidden={!isOpen}>
                  <div className="faq-a-inner">
                    <div className="faq-a-content">{it.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const { mode } = React.useContext(window.ModeContext);
  const rows = [
    ['kabuto','miyama','herc','atlas'],
    ['ageha','morpho','jewelbug','firefly'],
    ['mantis','dragonfly','lady','actaeon'],
  ];
  const rarColor = {
    kabuto:'#4aaa4a', miyama:'#4a8cc8', herc:'#e8a030', atlas:'#a060d0',
    ageha:'#4a8cc8', morpho:'#a060d0', jewelbug:'#a060d0', firefly:'#4a8cc8',
    mantis:'#4aaa4a', dragonfly:'#4a8cc8', lady:'#4aaa4a', actaeon:'#e8a030',
  };

  return (
    <section className="final-cta" id="cta">
      <div className="final-cta-glow" />
      <div className="container">
        <div className="cta-inner">
          <div className="cta-copy">
            {mode === 'kid' ? <>
              <span className="sec-label">むしを、あつめよう</span>
              <h2>さんすうにこたえて、<br/><span className="hl">ずかんをうめよう！</span></h2>
              <p>URLをひらくと、すぐにぼうけんがはじまるよ。むしをあつめて、ずかんをいっぱいにしよう。</p>
            </> : <>
              <span className="sec-label">今すぐ始める</span>
              <h2>無料で、今日から<br/><span className="hl">始められます。</span></h2>
              <p>インストール不要・登録不要。お子さまにURLを渡すだけで、すぐに始められます。</p>
            </>}
            <div className="cta-actions">
              <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="btn-primary cta-main-btn">
                {mode === 'kid' ? 'ゲームをはじめる' : 'いますぐ無料で遊ぶ'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="https://mushisan.vercel.app" target="_blank" rel="noreferrer" className="cta-url">mushisan.vercel.app</a>
            </div>
          </div>

          <div className="collection-preview" aria-hidden="true">
            <div className="collection-caption">{mode === 'kid' ? 'ゲームであつめる ごほうび' : 'ゲーム内の図鑑イメージ'}</div>
            <div className="collection-card">
              <div className="collection-head">
                <span className="collection-title">
                  <span className="collection-title-icon" dangerouslySetInnerHTML={{__html: window.ICONS.book}}/>
                  むしずかん
                </span>
                <span>12 / 100 しゅ</span>
              </div>
              <div className="collection-body">
                {rows.map((row, ri) => (
                  <div key={ri} className="collection-row">
                    {row.map((k, ci) => {
                      return (
                        <div
                          key={k}
                          className="collection-cell"
                          style={{'--cell-accent': rarColor[k] || '#4aaa4a', '--cell-glow': (rarColor[k] || '#4aaa4a') + '33'}}
                        >
                          <div className="collection-bug" dangerouslySetInnerHTML={{__html: window.getInsectSVG(k, 'collection')}} />
                        </div>
                      );
                    })}
                  </div>
                ))}
                <div className="collection-locked-row">
                  {['?','?','?','?'].map((q,i) => <div key={i} className="collection-locked">{q}</div>)}
                </div>
                <div className="collection-note">まだ 88しゅるい が まってるよ！</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LEGAL_COPY = {
  pp: {
    title: 'プライバシーポリシー',
    sections: [
      ['収集する情報', '本サービスは、お客様の個人情報を収集しません。ゲームのセーブデータ（お名前・スコア・図鑑の進捗）は、お使いの端末内（ローカルストレージ）にのみ保存され、外部サーバーには送信されません。'],
      ['広告・解析ツール', '現在、本サービスに広告や外部解析ツールは組み込んでいません。'],
      ['子どものプライバシー', '本サービスは小学生のお子さまを主な対象としています。個人情報を収集しない設計のため、保護者の方にも安心してご利用いただけます。'],
      ['外部サイトについて', '図鑑の「Wikipediaで くわしくみる」を押した場合は、外部サイトのWikipediaを開きます。外部サイトでの情報の取り扱いについては、各サイトの方針をご確認ください。'],
      ['お問い合わせ', 'プライバシーに関するご質問は、運営者noteよりご連絡ください。'],
      ['最終更新日', '2026年']
    ]
  },
  terms: {
    title: '利用規約',
    sections: [
      ['利用許諾', '本サービスは、個人・教育目的での利用を無償で許可します。商用目的での再配布・販売は禁止します。'],
      ['知的財産権', '本サービスのコード・デザイン・コンテンツの著作権は開発者に帰属します。無断転載・改変・再配布を禁じます。'],
      ['対象年齢', '本サービスは小学生（6〜12歳）を主な対象としています。保護者の監督のもとでのご利用を推奨します。'],
      ['禁止事項', '本サービスのリバースエンジニアリング、不正な手段によるデータ改ざん、他のユーザーへの迷惑行為を禁止します。'],
      ['利用規約の変更', '本規約は予告なく変更される場合があります。'],
      ['最終更新日', '2026年']
    ]
  },
  disc: {
    title: '免責事項',
    sections: [
      ['教育内容について', '本サービスに掲載しているむし・小さないきものの生態・情報はできる限り正確を期していますが、内容の正確性・完全性を保証するものではありません。学術的な調査・研究にはご利用いただけません。'],
      ['学習効果について', '本サービスはゲームを通じた学習補助ツールです。特定の学習効果を保証するものではありません。'],
      ['損害について', '本サービスの利用により生じた損害について、開発者は一切の責任を負いません。'],
      ['動作環境', 'すべての端末・ブラウザでの動作を保証するものではありません。'],
      ['最終更新日', '2026年']
    ]
  }
};

const LegalModal = ({ type, onClose }) => {
  const data = type ? LEGAL_COPY[type] : null;
  React.useEffect(() => {
    if (!data) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [data, onClose]);
  if (!data) return null;

  return (
    <div className="legal-modal-ov" role="presentation" onClick={onClose}>
      <div className="legal-modal" role="dialog" aria-modal="true" aria-label={data.title} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="legal-modal-close" aria-label="閉じる" onClick={onClose}>×</button>
        <div className="legal-modal-kicker">ムシ算</div>
        <h2>{data.title}</h2>
        <div className="legal-modal-body">
          {data.sections.map(([heading, body]) => (
            <section key={heading}>
              <h3>{heading}</h3>
              <p>{body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [legalType, setLegalType] = React.useState(null);

  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-logo">
          <div className="footer-logo-bug" dangerouslySetInnerHTML={{__html: window.getInsectSVG('kabuto', 'footer')}}/>
          <span>ムシ算</span>
        </div>
        <div className="footer-links">
          <button type="button" onClick={() => setLegalType('pp')}>プライバシーポリシー</button>
          <button type="button" onClick={() => setLegalType('terms')}>利用規約</button>
          <button type="button" onClick={() => setLegalType('disc')}>免責事項</button>
          <a href="https://note.com/memetomamoru" target="_blank" rel="noreferrer">運営者note</a>
        </div>
        <small>© 2026 <a href="https://note.com/memetomamoru" target="_blank" rel="noreferrer" className="footer-note-link">memetomamoru</a> ｜ ムシ算</small>
      </div>
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </footer>
  );
};

Object.assign(window, { FAQ, FinalCTA, Footer });
