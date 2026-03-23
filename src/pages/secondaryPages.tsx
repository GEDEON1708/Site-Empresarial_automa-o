import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Layers,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Truck,
  Workflow,
} from 'lucide-react';

const viewportConfig = { once: true, amount: 0.2 };

const getRevealProps = (delay = 0, x = 0, y = 24) => ({
  initial: { opacity: 0, x, y },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: viewportConfig,
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const AmbientGlow = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`pointer-events-none absolute rounded-full blur-[110px] ${className}`}
    animate={{ x: [0, 18, 0], y: [0, -22, 0], scale: [1, 1.08, 1] }}
    transition={{ duration: 12, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

export function ServicesPage() {
  const services = [
    {
      icon: <Bot className="text-neon-cyan" />,
      title: 'RPA & Automacao de Rotinas',
      description:
        'Robos que executam tarefas repetitivas em sistemas legados ou web com precisao cirurgica.',
      glow: 'neon-glow-cyan',
    },
    {
      icon: <Workflow className="text-neon-blue" />,
      title: 'Orquestracao de Fluxos',
      description:
        'Conecte todas as suas ferramentas em um fluxo de trabalho unificado e automatico.',
      glow: 'neon-glow-blue',
    },
    {
      icon: <BarChart3 className="text-neon-purple" />,
      title: 'Analise & Indicadores',
      description:
        'Transforme dados operacionais em indicadores claros para acompanhar desempenho e apoiar decisoes.',
      glow: 'neon-glow-purple',
    },
    {
      icon: <ShieldCheck className="text-neon-pink" />,
      title: 'Seguranca & Compliance',
      description:
        'Automacao de auditorias e processos de seguranca para manter sua operacao protegida.',
      glow: 'neon-glow-pink',
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-neutral-950 overflow-hidden">
      <AmbientGlow className="-right-16 top-24 h-44 w-44 bg-neon-purple/10" delay={1.2} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div {...getRevealProps(0.05)} className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white">Nossas Solucoes</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Desenvolvemos tecnologias sob medida para transformar a maneira como sua empresa opera no dia a dia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              {...getRevealProps(index * 0.08)}
              whileHover={{ y: -10, scale: 1.01, boxShadow: '0 0 30px rgba(255, 255, 255, 0.05)' }}
              className={`p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group ${service.glow}`}
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">{service.description}</p>
              <motion.button whileHover={{ x: 5, color: '#00f2ff' }} className="text-neutral-300 font-bold text-xs flex items-center gap-1 transition-all">
                SAIBA MAIS <ChevronRight size={14} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  const bullets = [
    'Foco total em resultados mensuraveis',
    'Suporte tecnico especializado 24/7',
    'Integracao nativa com +500 softwares',
    'Seguranca de dados nivel bancario',
  ];

  return (
    <section className="py-20 sm:py-24 bg-neutral-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-neon-blue rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-neon-purple rounded-full blur-[150px]" />
      </div>
      <AmbientGlow className="left-0 top-16 h-40 w-40 bg-neon-blue/10" delay={0.8} />
      <AmbientGlow className="right-8 bottom-10 h-36 w-36 bg-neon-purple/10" delay={1.8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div {...getRevealProps(0.05, -28, 0)} className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(41,121,255,0.2)] group bg-neutral-950">
            <img
              src="/about-operations.svg"
              alt="Painel visual de operacoes, integracoes e automacao empresarial"
              className="w-full h-full object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/15 via-transparent to-neon-cyan/10" />
          </div>
          <div className="relative sm:absolute mt-5 sm:mt-0 sm:bottom-6 sm:left-6 w-full sm:max-w-[260px] rounded-[28px] bg-neutral-900/88 backdrop-blur-xl p-5 sm:p-6 border border-white/10 shadow-[0_0_28px_rgba(41,121,255,0.2)]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Experiencia aplicada</p>
            <p className="mt-3 text-4xl font-bold text-neon-blue">10+</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              Anos apoiando empresas na estruturacao de processos, integracao de sistemas e ganho de eficiencia operacional.
            </p>
          </div>
        </motion.div>

        <motion.div {...getRevealProps(0.12, 28, 0)}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            Transformando complexidade em <span className="text-neon-cyan">simplicidade.</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mb-8 leading-relaxed">
            A Autoflow apoia empresas na estruturacao de processos, integracao de sistemas e padronizacao operacional para reduzir retrabalho, ganhar previsibilidade e sustentar o crescimento com eficiencia.
          </p>

          <div className="space-y-6">
            {bullets.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.55, delay: 0.08 * index, ease: 'easeOut' }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <CheckCircle2 size={14} className="text-neon-cyan" />
                </div>
                <span className="text-neutral-300 font-medium text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'CEO da TechNova',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      quote: 'A Autoflow reduziu nossos custos operacionais em 40% no primeiro semestre. A precisao dos bots e impressionante.',
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor de Operacoes da LogiFast',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      quote: 'A integracao de fluxos foi um divisor de aguas para nossa logistica. Hoje temos visibilidade total em tempo real.',
    },
    {
      name: 'Juliana Costa',
      role: 'Gerente de TI da InnovaBank',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      quote: 'Seguranca e eficiencia andam juntas com as solucoes da Autoflow. O suporte tecnico e excepcional e proativo.',
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-20 sm:py-24 bg-neutral-950 overflow-hidden">
      <AmbientGlow className="left-12 top-20 h-36 w-36 bg-neon-blue/10" delay={0.7} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div {...getRevealProps(0.05)} className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white">O que dizem nossos clientes</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Empresas de diversos setores ja transformaram sua realidade com a nossa tecnologia.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden px-1 sm:px-4 py-10 sm:py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white/5 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-16 border border-white/10 shadow-sm relative neon-glow-blue"
              >
                <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-neon-blue text-white rounded-full flex items-center justify-center shadow-xl neon-glow-blue">
                  <Layers size={20} />
                </div>

                <div className="flex flex-col items-center text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-200 italic mb-8 sm:mb-10 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-neon-blue shadow-md"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="text-center sm:text-left">
                      <p className="font-bold text-white">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-neutral-400">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-2 sm:mt-4">
            <motion.button whileHover={{ scale: 1.1, x: -5, borderColor: '#00f2ff', color: '#00f2ff' }} whileTap={{ scale: 0.9 }} onClick={prev} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 transition-all">
              <ArrowRight size={20} className="rotate-180" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${currentIndex === index ? 'w-8 bg-neon-cyan shadow-[0_0_10px_#00f2ff]' : 'w-2 bg-white/10'}`}
                />
              ))}
            </div>

            <motion.button whileHover={{ scale: 1.1, x: 5, borderColor: '#00f2ff', color: '#00f2ff' }} whileTap={{ scale: 0.9 }} onClick={next} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 transition-all">
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SuccessCasesPage() {
  const cases = [
    {
      company: 'Global Logistics Co.',
      sector: 'Logistica',
      icon: <Truck size={24} className="text-neon-blue" />,
      challenge: 'Rastreamento manual de mais de 5.000 remessas diarias, causando atrasos e erros de comunicacao.',
      solution: 'Implementacao de bots RPA para rastreamento em tempo real e notificacoes automaticas aos clientes.',
      result: 'Reducao de 95% nos erros de rastreamento e atualizacoes de entrega 30% mais rapidas.',
      glow: 'neon-glow-blue',
    },
    {
      company: 'HealthTech Solutions',
      sector: 'Saude',
      icon: <Stethoscope size={24} className="text-neon-cyan" />,
      challenge: 'Entrada manual de dados de pacientes consumindo 4 horas por turno da equipe de enfermagem.',
      solution: 'Processamento de documentos com regras de conferencia e preenchimento automatico de formularios e prontuarios.',
      result: '15.000 horas economizadas anualmente, permitindo mais tempo para o cuidado direto ao paciente.',
      glow: 'neon-glow-cyan',
    },
    {
      company: 'Financier Group',
      sector: 'Financas',
      icon: <TrendingUp size={24} className="text-neon-purple" />,
      challenge: 'Deteccao de fraudes lenta e reativa, resultando em perdas financeiras significativas.',
      solution: 'Monitoramento de transacoes em tempo real com regras de negocio e alertas automaticos.',
      result: 'Aumento de 60% na taxa de deteccao de fraudes nos primeiros 3 meses de operacao.',
      glow: 'neon-glow-purple',
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-neutral-950 overflow-hidden">
      <AmbientGlow className="right-8 top-12 h-40 w-40 bg-neon-cyan/10" delay={1.3} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div {...getRevealProps(0.05)} className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white">Cases de Sucesso</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Resultados reais alcancados atraves da nossa parceria com empresas lideres em seus setores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.company}
              {...getRevealProps(index * 0.08)}
              whileHover={{ y: -10, scale: 1.01 }}
              className={`p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col h-full transition-all group ${item.glow}`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {item.sector}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{item.company}</h3>

              <div className="space-y-6 flex-1">
                <div>
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Desafio</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Solucao Autoflow</p>
                  <p className="text-sm text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest mb-2">Resultado Alcancado</p>
                <p className="text-xl font-bold text-white leading-tight">{item.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <section className="relative py-20 sm:py-24 bg-neutral-950 overflow-hidden">
      <AmbientGlow className="-left-10 bottom-0 h-44 w-44 bg-neon-purple/10" delay={1} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          {...getRevealProps(0.05)}
          className="bg-white/5 rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 lg:p-16 shadow-xl border border-white/10 grid lg:grid-cols-2 gap-10 lg:gap-16 neon-glow-purple"
        >
          <motion.div {...getRevealProps(0.12, -22, 0)}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-white">Vamos conversar?</h2>
            <p className="text-neutral-400 mb-8 sm:mb-10">
              Nossa equipe de especialistas esta pronta para analisar seus processos e propor a melhor estrategia de automacao.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">E-mail</p>
                  <p className="font-bold text-white break-all sm:break-normal">contato@autoflow.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Telefone</p>
                  <p className="font-bold text-white">+55 (11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Escritorio</p>
                  <p className="font-bold text-white">Av. Paulista, 1000 - Sao Paulo, SP</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form {...getRevealProps(0.18, 22, 0)} className="space-y-6" onSubmit={(event) => event.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-400">Nome Completo</label>
                <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-400">E-mail Corporativo</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all" placeholder="seu@empresa.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-400">Assunto</label>
              <select className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all appearance-none">
                <option className="bg-neutral-900">Consultoria de Automacao</option>
                <option className="bg-neutral-900">Suporte Tecnico</option>
                <option className="bg-neutral-900">Parcerias</option>
                <option className="bg-neutral-900">Outros</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-400">Mensagem</label>
              <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all" placeholder="Como podemos ajudar?" />
            </div>
            <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(188, 19, 254, 0.5)' }} whileTap={{ scale: 0.98 }} className="w-full bg-neon-purple text-white py-4 sm:py-5 rounded-2xl font-bold hover:bg-neon-purple/90 transition-all">
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
