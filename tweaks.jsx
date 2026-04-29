// Tweaks panel
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "green"
}/*EDITMODE-END*/;

const TweaksPanel = ({ visible, tweaks, setTweak }) => {
  if (!visible) return null;
  return (
    <div className="tweaks-panel visible">
      <h4>Tweaks</h4>
      <div className="tweaks-row">
        <label>アクセントカラー</label>
        <div className="opts">
          {[['green','深緑（標準）'],['gold','ゴールド'],['teal','ティール']].map(([v,l])=>(
            <button type="button" key={v} className={tweaks.accent===v?'active':''} onClick={()=>setTweak('accent',v)}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;
window.TweaksPanel = TweaksPanel;
