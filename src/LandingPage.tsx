import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  PlusCircle, 
  ChevronDown, 
  Lock, 
  Zap, 
  Calendar, 
  MessageSquare, 
  Heart, 
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Hero = () => (
  <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#000000]">
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff0000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8 flex flex-col items-center"
      >
        <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <Flame className="text-primary-container w-4 h-4" />
          <span className="text-xs font-bold tracking-widest text-[#C8C0CC] uppercase">MAIS DE 12.000 CASAIS JÁ TRANSFORMARAM SUA RELAÇÃO</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline italic font-bold leading-tight text-white text-center">
          Chega de noites sem graça. Descubra o <span className="text-primary-container">Baralho da Ousadia.</span>
        </h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full mx-auto my-8 px-4 flex justify-center"
        >
          <div className="absolute inset-0 bg-primary-container/10 blur-3xl rounded-full scale-110"></div>
          <div className="relative z-10">
            <img 
              src="https://i.postimg.cc/GtL6wqFz/Mockups.png" 
              alt="Mockup Baralho da Ousadia"
              className="w-full max-w-[600px] h-auto object-contain block mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <p className="text-base sm:text-lg md:text-xl text-[#C8C0CC] max-w-2xl leading-relaxed mx-auto text-center">
          160 desafios quentes e exclusivos desenhados para reacender a chama e criar momentos inesquecíveis entre quatro paredes.
        </p>
        <div className="flex flex-col space-y-4 pt-4 w-full max-w-md">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#oferta" 
            className="group flex items-center justify-between bg-primary-container text-white px-8 py-6 rounded-lg font-bold text-sm tracking-widest glow-primary"
          >
            <span>🃏 QUERO JOGAR AGORA — A PARTIR DE R$5,90</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <p className="text-[0.7rem] text-secondary flex items-center space-x-2 justify-center">
            <ShieldCheck className="w-4 h-4" />
            <span className="uppercase tracking-widest font-bold">Acesso Imediato • Pagamento Seguro</span>
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-white/5 py-16 border-y border-white/10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {[
        { val: '+12.000', label: 'Casais Felizes' },
        { val: '160', label: 'Desafios Únicos' },
        { val: '98%', label: 'Taxa de Aprovação' }
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="space-y-2"
        >
          <div className="text-5xl font-numeric font-bold text-secondary">{stat.val}</div>
          <div className="text-sm font-bold uppercase tracking-widest text-[#C8C0CC]">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const PainPoints = () => (
  <section id="beneficios" className="py-24 bg-background">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-headline italic font-bold text-white text-center mb-16 leading-tight">
        Seja honesto com você mesmo... <br/>
        <span className="text-[#C8C0CC] text-xl italic font-normal">Sua relação caiu na rotina?</span>
      </h2>
      <div className="space-y-8 mb-16">
        {[
          'As noites de sexta-feira tornaram-se apenas "escolher um filme na Netflix".',
          'A conversa é sempre sobre boletos, trabalho ou problemas cotidianos.',
          'Vocês sentem que a "faísca" inicial está se apagando lentamente.'
        ].map((point, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start space-x-4 bg-white/5 p-6 rounded-xl border-l-4 border-primary-container"
          >
            <span className="text-primary-container text-2xl">❌</span>
            <p className="text-[#C8C0CC] font-medium">{point}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-headline italic font-bold text-primary-container animate-pulse">
          E se um simples baralho pudesse mudar tudo isso hoje à noite?
        </p>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-white/5 overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="space-y-10">
        <h2 className="text-5xl font-headline italic font-bold text-white">O que você vai receber</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto my-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.2)] bg-black">
            <video 
              src="https://files.catbox.moe/tnhjgy.mp4" 
              className="w-full h-auto object-contain"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Sparkles />, title: '160 desafios exclusivos', desc: 'Do leve ao intenso, divididos por níveis.' },
            { icon: <Zap />, title: 'Acesso digital imediato', desc: 'Receba no e-mail logo após o pagamento.' },
            { icon: <Calendar />, title: 'Acesso vitalício', desc: 'O material é seu para sempre, sem mensalidades.' }
          ].map((feat, i) => (
            <div key={i} className="flex flex-col items-center space-y-6 group p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-container transition-colors duration-500">
                <div className="text-primary-container group-hover:text-white">
                  {feat.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-[#C8C0CC] text-sm">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Categories = () => (
  <section id="categorias" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-headline italic font-bold text-white">Níveis de Intensidade</h2>
        <p className="text-[#C8C0CC]">Escolha o ritmo da sua noite com 4 categorias pensadas estrategicamente.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { level: '01', title: 'Modo Travessura', desc: 'Diversão, risadas e quebra de gelo. Perfeito para começar a noite de forma leve e instigante.', color: 'text-primary-container' },
          { level: '02', title: 'Modo Verdade', desc: 'Perguntas profundas que você nunca teve coragem de fazer. Conexão emocional extrema.', color: 'text-secondary' },
          { level: '03', title: 'Modo Ousadia', desc: 'Desafios físicos e sensoriais para testar os limites do casal. O clima começa a esquentar.', color: 'text-primary-container' },
          { level: '04', title: 'Modo Fogo', desc: 'A intensidade máxima. Intimidade profunda e prazer sem tabus para noites inesquecíveis.', color: 'text-primary-container' }
        ].map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="group relative bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10">
              <div className={`${cat.color} mb-4 font-bold tracking-widest uppercase text-xs`}>Nível {cat.level}</div>
              <h3 className="text-2xl font-headline italic font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-[#C8C0CC] text-sm leading-relaxed">{cat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Bonuses = () => (
  <section id="bonus" className="py-24 bg-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-headline italic font-bold text-secondary">Bônus Exclusivos para Hoje</h2>
        <p className="text-[#C8C0CC]">Ao garantir seu baralho agora, você leva esses 3 materiais complementares.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { id: 1, title: 'Guia de Reconexão', desc: 'Técnicas práticas para melhorar a comunicação e o carinho diário.', price: 'R$ 63,00' },
          { id: 2, title: 'Playlist Ousadia', desc: 'A curadoria perfeita de músicas para criar o ambiente sensual ideal.', price: 'R$ 27,00' },
          { id: 3, title: 'Diário Casal Ousado', desc: 'Template digital para registrar suas melhores noites e fantasias.', price: 'R$ 35,00' }
        ].map((bonus) => (
          <div key={bonus.id} className="bg-background p-8 rounded-xl border border-secondary/20 group hover:-translate-y-2 transition-transform duration-500">
            <div className="text-secondary text-sm font-bold uppercase tracking-widest mb-6">Bônus #{bonus.id}</div>
            <h3 className="text-xl font-bold text-white mb-4">{bonus.title}</h3>
            <p className="text-[#C8C0CC] text-sm mb-6">{bonus.desc}</p>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#C8C0CC] line-through">{bonus.price}</span>
              <span className="text-secondary">HOJE: GRÁTIS</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="depoimentos" className="py-24 bg-background overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-headline italic font-bold text-white text-center mb-16 italic">Quem já jogou, recomenda...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Juliana R.', text: 'Mudou completamente o clima lá em casa. Parecemos adolescentes de novo!' },
          { name: 'Marcos V.', text: 'Os desafios são muito criativos. Saímos da zona de conforto de um jeito maravilhoso.' },
          { name: 'Rodrigo e Ana C.', text: 'Melhor investimento que fizemos para o nosso casamento este ano. Recomendo muito.' },
          { name: 'Fernanda L.', text: 'A entrega foi imediata e o material é lindo. As categorias ajudam muito no clima.' }
        ].map((test, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-xl space-y-4">
            <div className="flex text-secondary">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-[#C8C0CC] text-sm italic">"{test.text}"</p>
            <div className="font-bold text-white text-xs uppercase tracking-widest">— {test.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="oferta" className="py-24 bg-white/5">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-headline italic font-bold text-white mb-4">Escolha sua experiência</h2>
        <p className="text-[#C8C0CC]">Oferta por tempo limitado. Aproveite o preço promocional.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-background p-10 rounded-xl border border-white/10 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">Plano Essencial</h3>
          <p className="text-[#C8C0CC] text-sm mb-8">Acesso aos 160 desafios digitais.</p>
          <div className="mb-8">
            <span className="text-[#C8C0CC] text-lg line-through">R$ 27,90</span>
            <div className="flex items-baseline">
              <span className="text-[#C8C0CC] text-xl">R$</span>
              <span className="text-5xl font-numeric font-bold text-white ml-2">5,90</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center space-x-3 text-sm">
              <CheckCircle2 className="text-secondary w-5 h-5" />
              <span>160 Desafios Digitais (PDF)</span>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <CheckCircle2 className="text-secondary w-5 h-5" />
              <span>Acesso Vitalício</span>
            </li>
          </ul>
          <button className="w-full py-4 text-center rounded-lg border-2 border-primary-container text-primary-container font-bold text-xs tracking-widest hover:bg-primary-container hover:text-white transition-all">
            QUERO O ESSENCIAL
          </button>
        </div>

        <motion.div 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 p-10 rounded-xl border-2 border-secondary relative flex flex-col glow-secondary"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-black font-bold text-[0.6rem] tracking-widest px-4 py-1 rounded-full uppercase">⭐ MAIS POPULAR</div>
          <h3 className="text-2xl font-bold text-white mb-2">Plano Premium</h3>
          <p className="text-[#C8C0CC] text-sm mb-8">Baralho + Todos os bônus exclusivos.</p>
          <div className="mb-8">
            <span className="text-[#C8C0CC] text-lg line-through">R$ 147,00</span>
            <div className="flex items-baseline text-secondary">
              <span className="text-xl">R$</span>
              <span className="text-5xl font-numeric font-bold ml-2">19,90</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center space-x-3 text-sm">
              <CheckCircle2 className="text-secondary w-5 h-5" />
              <span>160 Desafios Digitais (PDF)</span>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <CheckCircle2 className="text-secondary w-5 h-5" />
              <span>Acesso Vitalício</span>
            </li>
            {[
              'Bonus #1: Guia Reconexão',
              'Bonus #2: Playlist Ousadia',
              'Bonus #3: Diário do Casal'
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3 text-sm font-bold text-white">
                <PlusCircle className="text-secondary w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-5 text-center bg-primary-container text-white rounded-lg font-bold text-xs tracking-widest glow-primary animate-pulse-soft">
            🔥 QUERO O PLANO PREMIUM →
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

const Warranty = () => (
  <section className="py-16 bg-background border-t border-white/10">
    <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
      <div className="flex justify-center">
        <ShieldCheck className="text-secondary w-20 h-20" />
      </div>
      <h2 className="text-2xl font-headline italic font-bold text-white">Risco Zero: Garantia Incondicional de 7 Dias</h2>
      <p className="text-[#C8C0CC] text-sm leading-relaxed max-w-2xl mx-auto">
        Temos tanta certeza que o Baralho da Ousadia vai transformar suas noites que oferecemos uma garantia total. Se em até 7 dias você sentir que não é para você, devolvemos 100% do seu dinheiro. Sem perguntas.
      </p>
    </div>
  </section>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 47, s: 23 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#1a1a1a] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">🔥 ESSA OFERTA EXPIRA EM:</h3>
          <div className="flex items-center space-x-4">
            {[
              { val: timeLeft.h, unit: 'h' },
              { val: timeLeft.m, unit: 'm' },
              { val: timeLeft.s, unit: 's' }
            ].map((t, i) => (
              <React.Fragment key={i}>
                <div className="bg-white/10 px-4 py-2 rounded border border-secondary/30">
                  <span className="text-3xl font-numeric font-bold text-secondary">{t.val.toString().padStart(2, '0')}{t.unit}</span>
                </div>
                {i < 2 && <span className="text-white font-bold">:</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <a href="#oferta" className="bg-secondary text-black px-8 py-4 rounded-lg font-bold text-xs tracking-widest hover:scale-105 active:scale-95 transition-all uppercase glow-secondary">
          🃏 GARANTIR MINHA OFERTA AGORA →
        </a>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'Como recebo o acesso ao baralho?', a: 'O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com o link para baixar o material completo em formato PDF de alta qualidade.' },
    { q: 'Preciso imprimir as cartas?', a: 'Não necessariamente. Você pode usar diretamente do seu celular ou tablet, mas o material é formatado para impressão caso você prefira a experiência física.' },
    { q: 'O conteúdo é muito "pesado"?', a: 'O baralho é dividido em níveis. Você e seu parceiro decidem até onde querem ir, começando pelo nível leve e progredindo conforme o conforto de ambos.' },
    { q: 'E se eu não gostar?', a: 'Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, basta nos enviar um e-mail e devolvemos seu dinheiro.' },
    { q: 'O pagamento é seguro?', a: 'Sim, utilizamos as plataformas de pagamento mais seguras do Brasil, com criptografia de ponta a ponta.' },
    { q: 'Quanto tempo tenho de acesso?', a: 'O acesso é vitalício. Uma vez adquirido, o material é seu para sempre.' }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-headline italic font-bold text-white text-center mb-16 italic">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center group"
              >
                <span className="font-bold text-[#C8C0CC] group-hover:text-primary-container transition-colors">{faq.q}</span>
                <ChevronDown className={`text-[#C8C0CC] transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-sm text-[#C8C0CC]/80 border-t border-white/10 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden bg-gradient-to-tr from-primary-container via-[#ff0000] to-[#000000]">
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline italic font-bold text-white leading-tight">
        Dê o próximo passo em sua relação hoje.
      </h2>
      <p className="text-xl text-white/90 font-medium">Não deixe para amanhã a conexão que vocês podem viver hoje.</p>
      <div className="pt-6">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#oferta" 
          className="inline-block bg-white text-primary-container px-12 py-6 rounded-lg font-bold text-sm tracking-[0.2em] uppercase shadow-2xl"
        >
          🔥 QUERO MEU BARALHO DA OUSADIA AGORA
        </motion.a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#000000] w-full py-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="text-lg font-bold italic text-white font-headline">
        🃏 Baralho da Ousadia
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {['Termos de Uso', 'Políticas de Privacidade', 'Suporte', 'Afiliados'].map(link => (
          <a key={link} href="#" className="text-[0.75rem] text-[#C8C0CC] hover:text-secondary underline transition-all">{link}</a>
        ))}
      </div>
      <div className="text-[0.75rem] text-[#C8C0CC] opacity-80">
        © 2024 Baralho da Ousadia. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

const MobileStickyCTA = () => (
  <div className="fixed bottom-0 left-0 w-full p-2 z-[60] md:hidden">
    <motion.a 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      href="#oferta" 
      className="bg-gradient-to-r from-primary-container to-[#ff0000] py-4 w-full flex items-center justify-center rounded-xl shadow-[0px_-10px_30px_rgba(255,0,0,0.3)] animate-pulse"
    >
      <Zap className="text-white mr-2 w-5 h-5 fill-current" />
      <span className="font-bold tracking-widest uppercase text-white text-xs">APROVEITAR OFERTA AGORA</span>
    </motion.a>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <PainPoints />
      <Features />
      <Categories />
      <Bonuses />
      <Testimonials />
      <Pricing />
      <Warranty />
      <Countdown />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
