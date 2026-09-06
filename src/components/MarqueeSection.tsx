import React, { useState, useEffect, useRef } from 'react';

interface CodeCard {
  filename: string;
  language: string;
  badgeColor: string;
  codeLines: { num: number; tokens: { text: string; color: string }[] }[];
}

const CODE_CARDS: CodeCard[] = [
  {
    filename: 'enrichment_engine.py',
    language: 'PYTHON / FASTAPI',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    codeLines: [
      { num: 1, tokens: [{ text: '@app.get', color: '#C792EA' }, { text: '("/api/v1/enrichment/{prop_id}")', color: '#ECC48D' }] },
      { num: 2, tokens: [{ text: 'async def', color: '#C792EA' }, { text: ' enrich_data', color: '#82AAFF' }, { text: '(prop_id: ', color: '#D7E2EA' }, { text: 'str', color: '#FF5370' }, { text: '):', color: '#D7E2EA' }] },
      { num: 3, tokens: [{ text: '    cached = ', color: '#D7E2EA' }, { text: 'await', color: '#C792EA' }, { text: ' redis.get(f"prop:{prop_id}")', color: '#ECC48D' }] },
      { num: 4, tokens: [{ text: '    if', color: '#C792EA' }, { text: ' cached:', color: '#D7E2EA' }, { text: ' return', color: '#C792EA' }, { text: ' json.loads(cached)', color: '#82AAFF' }] },
      { num: 5, tokens: [{ text: '    data = ', color: '#D7E2EA' }, { text: 'await', color: '#C792EA' }, { text: ' ai_pipeline.process(prop_id)', color: '#82AAFF' }] },
      { num: 6, tokens: [{ text: '    await', color: '#C792EA' }, { text: ' redis.set(f"prop:{prop_id}", data, ex=3600)', color: '#ECC48D' }] },
      { num: 7, tokens: [{ text: '    return', color: '#C792EA' }, { text: ' {"status": "ok", "result": data}', color: '#ECC48D' }] }
    ]
  },
  {
    filename: 'useRealtimeMetrics.ts',
    language: 'REACT / TYPESCRIPT',
    badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    codeLines: [
      { num: 1, tokens: [{ text: 'export const', color: '#C792EA' }, { text: ' useRealtimeMetrics = (', color: '#82AAFF' }, { text: 'streamId: string', color: '#F78C6C' }, { text: ') => {', color: '#D7E2EA' }] },
      { num: 2, tokens: [{ text: '  const', color: '#C792EA' }, { text: ' [data, setData] = ', color: '#D7E2EA' }, { text: 'useState', color: '#82AAFF' }, { text: '<Metrics>(null);', color: '#FF5370' }] },
      { num: 3, tokens: [{ text: '  useEffect', color: '#82AAFF' }, { text: '(() => {', color: '#D7E2EA' }] },
      { num: 4, tokens: [{ text: '    const', color: '#C792EA' }, { text: ' ws = ', color: '#D7E2EA' }, { text: 'new', color: '#C792EA' }, { text: ' WebSocket(`wss://api.mayur.dev/${streamId}`);', color: '#ECC48D' }] },
      { num: 5, tokens: [{ text: '    ws.onmessage = ', color: '#D7E2EA' }, { text: '(e) =>', color: '#C792EA' }, { text: ' setData(JSON.parse(e.data));', color: '#82AAFF' }] },
      { num: 6, tokens: [{ text: '    return', color: '#C792EA' }, { text: ' () => ws.close();', color: '#D7E2EA' }] },
      { num: 7, tokens: [{ text: '  }, [streamId]);', color: '#D7E2EA' }] }
    ]
  },
  {
    filename: 'optimize_views.sql',
    language: 'POSTGRESQL',
    badgeColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    codeLines: [
      { num: 1, tokens: [{ text: 'WITH', color: '#C792EA' }, { text: ' property_analytics ', color: '#82AAFF' }, { text: 'AS', color: '#C792EA' }, { text: ' (', color: '#D7E2EA' }] },
      { num: 2, tokens: [{ text: '  SELECT', color: '#C792EA' }, { text: ' p.id, ', color: '#D7E2EA' }, { text: 'COUNT', color: '#82AAFF' }, { text: '(v.id) ', color: '#D7E2EA' }, { text: 'AS', color: '#C792EA' }, { text: ' total_views', color: '#F78C6C' }] },
      { num: 3, tokens: [{ text: '  FROM', color: '#C792EA' }, { text: ' properties p ', color: '#D7E2EA' }] },
      { num: 4, tokens: [{ text: '  LEFT JOIN', color: '#C792EA' }, { text: ' property_views v ', color: '#D7E2EA' }, { text: 'ON', color: '#C792EA' }, { text: ' v.prop_id = p.id', color: '#D7E2EA' }] },
      { num: 5, tokens: [{ text: '  WHERE', color: '#C792EA' }, { text: ' p.status = ', color: '#D7E2EA' }, { text: '\'ACTIVE\'', color: '#ECC48D' }, { text: ' AND', color: '#C792EA' }, { text: ' p.created_at >= NOW() - INTERVAL \'30d\'', color: '#ECC48D' }] },
      { num: 6, tokens: [{ text: '  GROUP BY', color: '#C792EA' }, { text: ' p.id', color: '#D7E2EA' }] },
      { num: 7, tokens: [{ text: ') ', color: '#D7E2EA' }, { text: 'SELECT', color: '#C792EA' }, { text: ' * ', color: '#D7E2EA' }, { text: 'FROM', color: '#C792EA' }, { text: ' property_analytics ', color: '#82AAFF' }, { text: 'WHERE', color: '#C792EA' }, { text: ' total_views > 1000;', color: '#F78C6C' }] }
    ]
  },
  {
    filename: 'docker-compose.yml',
    language: 'DOCKER / DEVOPS',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    codeLines: [
      { num: 1, tokens: [{ text: 'services:', color: '#C792EA' }] },
      { num: 2, tokens: [{ text: '  api:', color: '#82AAFF' }] },
      { num: 3, tokens: [{ text: '    build:', color: '#D7E2EA' }, { text: ' .', color: '#ECC48D' }] },
      { num: 4, tokens: [{ text: '    ports:', color: '#D7E2EA' }, { text: ' ["8000:8000"]', color: '#ECC48D' }] },
      { num: 5, tokens: [{ text: '    environment:', color: '#D7E2EA' }] },
      { num: 6, tokens: [{ text: '      - REDIS_URL=redis://cache:6379/0', color: '#ECC48D' }] },
      { num: 7, tokens: [{ text: '    restart:', color: '#D7E2EA' }, { text: ' always', color: '#FF5370' }] }
    ]
  },
  {
    filename: 'RazorpayGateway.php',
    language: 'PHP / WOOCOMMERCE',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    codeLines: [
      { num: 1, tokens: [{ text: 'public function', color: '#C792EA' }, { text: ' handle_webhook', color: '#82AAFF' }, { text: '( $request ) {', color: '#D7E2EA' }] },
      { num: 2, tokens: [{ text: '    $payload = ', color: '#D7E2EA' }, { text: '$request', color: '#FF5370' }, { text: '->get_json_params();', color: '#82AAFF' }] },
      { num: 3, tokens: [{ text: '    $sig = ', color: '#D7E2EA' }, { text: '$request', color: '#FF5370' }, { text: '->get_header(', color: '#D7E2EA' }, { text: '\'x-razorpay-signature\'', color: '#ECC48D' }, { text: ');', color: '#D7E2EA' }] },
      { num: 4, tokens: [{ text: '    if', color: '#C792EA' }, { text: ' ( ', color: '#D7E2EA' }, { text: '$this', color: '#FF5370' }, { text: '->verify_sig($payload, $sig) ) {', color: '#82AAFF' }] },
      { num: 5, tokens: [{ text: '        $order = ', color: '#D7E2EA' }, { text: 'wc_get_order', color: '#82AAFF' }, { text: '($payload[\'order_id\']);', color: '#ECC48D' }] },
      { num: 6, tokens: [{ text: '        $order->payment_complete();', color: '#82AAFF' }] },
      { num: 7, tokens: [{ text: '        return', color: '#C792EA' }, { text: ' new', color: '#C792EA' }, { text: ' WP_REST_Response([\'status\' => 200]);', color: '#ECC48D' }] }
    ]
  },
  {
    filename: 'auth_middleware.py',
    language: 'PYTHON / JWT',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    codeLines: [
      { num: 1, tokens: [{ text: '@router.post', color: '#C792EA' }, { text: '("/auth/login")', color: '#ECC48D' }] },
      { num: 2, tokens: [{ text: 'async def', color: '#C792EA' }, { text: ' login', color: '#82AAFF' }, { text: '(form: ', color: '#D7E2EA' }, { text: 'OAuth2PasswordRequestForm', color: '#FF5370' }, { text: '):', color: '#D7E2EA' }] },
      { num: 3, tokens: [{ text: '    user = ', color: '#D7E2EA' }, { text: 'await', color: '#C792EA' }, { text: ' authenticate_user(form.username, form.password)', color: '#82AAFF' }] },
      { num: 4, tokens: [{ text: '    if', color: '#C792EA' }, { text: ' not', color: '#C792EA' }, { text: ' user: ', color: '#D7E2EA' }, { text: 'raise', color: '#C792EA' }, { text: ' HTTPException(status_code=401)', color: '#FF5370' }] },
      { num: 5, tokens: [{ text: '    token = create_access_token(data={"sub": user.email})', color: '#82AAFF' }] },
      { num: 6, tokens: [{ text: '    return', color: '#C792EA' }, { text: ' {"access_token": token, "token_type": "bearer"}', color: '#ECC48D' }] },
      { num: 7, tokens: [{ text: ' ', color: '#D7E2EA' }] }
    ]
  }
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const row1Cards = [...CODE_CARDS.slice(0, 3), ...CODE_CARDS.slice(0, 3), ...CODE_CARDS.slice(0, 3)];
  const row2Cards = [...CODE_CARDS.slice(3), ...CODE_CARDS.slice(3), ...CODE_CARDS.slice(3)];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderCodeCard = (card: CodeCard, idx: number) => (
    <div
      key={idx}
      className="flex-shrink-0 w-[300px] xs:w-[330px] sm:w-[440px] bg-[#11131a] border border-[#D7E2EA]/15 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 font-mono text-[10.5px] sm:text-xs shadow-xl hover:border-[#B600A8]/60 hover:shadow-[0_0_30px_rgba(182,0,168,0.2)] transition-all duration-300 group"
    >
      {/* Top Mac Window Controls & Tab Title */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3.5 mb-2.5 sm:mb-3 border-b border-[#D7E2EA]/10">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 flex-shrink-0"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 flex-shrink-0"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 flex-shrink-0"></span>
          <span className="text-[#D7E2EA]/80 font-mono text-[11px] sm:text-xs font-semibold ml-1.5 sm:ml-2 group-hover:text-white transition-colors truncate">
            {card.filename}
          </span>
        </div>
        <span className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full border flex-shrink-0 ml-2 ${card.badgeColor}`}>
          {card.language}
        </span>
      </div>

      {/* Code Syntax Highlighted Lines */}
      <div className="space-y-1 sm:space-y-1.5 leading-relaxed overflow-hidden select-none">
        {card.codeLines.map((line) => (
          <div key={line.num} className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#D7E2EA]/30 text-[10px] sm:text-[11px] w-3.5 sm:w-4 text-right flex-shrink-0 select-none">
              {line.num}
            </span>
            <div className="truncate">
              {line.tokens.map((tok, tIdx) => (
                <span key={tIdx} style={{ color: tok.color }}>
                  {tok.text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-20 sm:pt-32 pb-12 overflow-hidden border-t border-[#D7E2EA]/10">
      
      {/* Section Editorial Header Label */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="inline-block px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#151515] border border-[#D7E2EA]/15 text-[#B600A8] text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">
          SYSTEMS / CODE / ARCHITECTURE
        </span>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 sm:gap-4 whitespace-nowrap"
          style={{
            transform: `translateX(${scrollOffset - 180}px)`,
            willChange: 'transform'
          }}
        >
          {row1Cards.map((card, idx) => renderCodeCard(card, idx))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 sm:gap-4 whitespace-nowrap"
          style={{
            transform: `translateX(${-(scrollOffset - 180)}px)`,
            willChange: 'transform'
          }}
        >
          {row2Cards.map((card, idx) => renderCodeCard(card, idx))}
        </div>

      </div>
    </section>
  );
};
