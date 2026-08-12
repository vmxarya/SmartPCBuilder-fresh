import Link from "next/link";

export default function Home() {
  return <main className="shell"><section className="hero"><div className="eyebrow">SmartPCBuilder · Prototype</div><h1>Build your PC intelligently.</h1><p>Enter your budget and requirements. SmartPCBuilder researches compatible market offers and aims to return one strong recommendation.</p><Link className="primary" href="/builder">Start building →</Link></section><section className="grid"><div className="card"><strong>Compatibility first</strong><p className="muted">Socket, memory, physical clearance, connections and power are checked before recommendation.</p></div><div className="card"><strong>Market-aware</strong><p className="muted">Prices belong to retailer offers. Historical observations remain separate from the canonical product.</p></div></section></main>;
}
