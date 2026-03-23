import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight,
  Workflow,
  Bot,
  Layers,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Truck,
  Stethoscope,
  TrendingUp,
  Globe,
  Rocket,
  Users
} from 'lucide-react';

import { ContactWidget } from './components/ContactWidget';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div 
      className={`flex items-center gap-2 cursor-pointer group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-10 h-10">
        {/* Chip Background */}
        <motion.div 
          className="absolute inset-0 bg-neon-blue rounded-xl flex items-center justify-center text-white neon-glow-blue group-hover:bg-neon-cyan transition-colors z-10"
          animate={{ 
            boxShadow: ["0 0 10px #2979ff", "0 0 25px #00f2ff", "0 0 10px #2979ff"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Cpu size={24} />
        </motion.div>
        
        {/* Chip Circuit Lines */}
        <svg className="absolute -inset-2 w-14 h-14 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
          <motion.path
            d="M 20 50 L 5 50 M 80 50 L 95 50 M 50 20 L 50 5 M 50 80 L 50 95"
            stroke="#00f2ff"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="50" cy="50" r="45"
            stroke="#2979ff"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5 5"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
      <span className="font-display font-bold text-xl tracking-tight text-white">Auto<span className="text-neon-cyan">flow</span></span>
    </motion.div>
  );
};

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000); // 3 seconds splash
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#2979ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <Logo className="scale-125 sm:scale-150" />
        
        {/* Scanning Effect */}
        <motion.div 
          className="absolute -inset-10 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent h-1 w-[200%] -left-1/2"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="h-1 w-[160px] sm:w-[200px] bg-neon-blue mt-12 rounded-full relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-neon-cyan"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      <p className="text-neutral-500 font-mono text-xs mt-4 tracking-widest uppercase animate-pulse">
        Preparando a experiencia...
      </p>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/Servicos', label: 'Serviços' },
    { path: '/Sobre', label: 'Sobre' },
    { path: '/Depoimentos', label: 'Depoimentos' },
    { path: '/Cases', label: 'Cases' },
    { path: '/Contato', label: 'Contato' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-2.5 sm:py-3 shadow-sm' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div key={item.path} className="relative">
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors ${isActive(item.path) ? 'text-neon-cyan' : 'text-neutral-400 hover:text-white'}`}
              >
                {item.label}
              </Link>
              {isActive(item.path) && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-cyan rounded-full shadow-[0_0_10px_#00f2ff]"
                />
              )}
            </motion.div>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(41, 121, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/Contato')}
            className="bg-neon-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neon-blue/80 transition-all"
          >
            Começar Agora
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 -mr-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 p-4 sm:p-6 flex flex-col gap-4 md:hidden shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-lg font-medium py-2 transition-colors ${isActive(item.path) ? 'text-neon-cyan' : 'text-neutral-400 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={() => {
                navigate('/Contato');
                setIsMobileMenuOpen(false);
              }}
              className="bg-neon-blue text-white px-5 py-4 rounded-2xl text-center font-bold mt-4 shadow-[0_0_15px_rgba(41,121,255,0.3)]"
            >
              Começar Agora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const LogoGrid = () => {
  const partners = [
    { name: "TechNova", icon: <Layers size={32} /> },
    { name: "LogiFast", icon: <Truck size={32} /> },
    { name: "InnovaBank", icon: <ShieldCheck size={32} /> },
    { name: "GlobalTrade", icon: <Globe size={32} /> },
    { name: "HealthCare+", icon: <Stethoscope size={32} /> },
    { name: "EcoFlow", icon: <Workflow size={32} /> },
  ];

  return (
    <section className="py-10 sm:py-12 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-neutral-600 mb-8 sm:mb-10">
          Empresas que confiam na Autoflow
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="flex items-center gap-2 text-white group cursor-pointer"
            >
              {p.icon}
              <span className="font-display font-bold text-lg hidden sm:block">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-neon-blue/5 blur-[120px] rounded-l-[100px] hidden lg:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} className="text-neon-cyan animate-pulse" />
            O Futuro da Eficiência
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 sm:mb-8 text-white">
            Automatize o seu <span className="text-gradient italic">Sucesso</span> Empresarial.
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 mb-8 sm:mb-10 max-w-lg leading-relaxed">
            Elimine tarefas repetitivas, reduza erros operacionais e foque no que realmente importa: o crescimento estratégico do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              onClick={() => navigate('/Servicos')}
              whileHover={{ scale: 1.05, gap: '1.5rem', boxShadow: '0 0 25px rgba(0, 242, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-neon-cyan text-neutral-950 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-neon-cyan/90 transition-all"
            >
              Explorar Soluções <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold border border-white/20 text-white transition-all w-full sm:w-auto"
            >
              Ver Demonstração
            </motion.button>
          </div>
          
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-5 gap-y-4 grayscale opacity-30">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Parceiros:</span>
            <div className="flex flex-wrap gap-6 sm:gap-8 items-center text-white">
              <Layers size={24} />
              <ShieldCheck size={24} />
              <Workflow size={24} />
              <Globe size={24} />
              <Rocket size={24} />
              <Users size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(41,121,255,0.3)] aspect-video bg-neutral-900 border border-white/10">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover opacity-60"
            >
              <source src="https://cdn.pixabay.com/video/2021/04/12/70860-537443831_large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-lg z-20 hidden sm:block neon-glow-cyan overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=200" alt="Stats" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-neon-cyan/20 text-neon-cyan rounded-full flex items-center justify-center backdrop-blur-md border border-neon-cyan/30">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-200 font-medium">Processos Otimizados</p>
                <p className="text-sm font-bold text-white">+85% Eficiência</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-lg z-20 hidden sm:block neon-glow-blue overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200" alt="ROI" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-neon-blue/20 text-neon-blue rounded-full flex items-center justify-center backdrop-blur-md border border-neon-blue/30">
                <BarChart3 size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-200 font-medium">ROI Mensal</p>
                <p className="text-sm font-bold text-white">R$ 12.4k Economizados</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Bot className="text-neon-cyan" />,
      title: "RPA & Automação de Rotinas",
      description: "Robôs que executam tarefas repetitivas em sistemas legados ou web com precisão cirúrgica.",
      glow: "neon-glow-cyan"
    },
    {
      icon: <Workflow className="text-neon-blue" />,
      title: "Orquestração de Fluxos",
      description: "Conecte todas as suas ferramentas (CRM, ERP, Slack) em um fluxo de trabalho unificado e automático.",
      glow: "neon-glow-blue"
    },
    {
      icon: <BarChart3 className="text-neon-purple" />,
      title: "Análise & Indicadores",
      description: "Transforme dados operacionais em indicadores claros para acompanhar desempenho e apoiar decisões.",
      glow: "neon-glow-purple"
    },
    {
      icon: <ShieldCheck className="text-neon-pink" />,
      title: "Segurança & Compliance",
      description: "Automação de auditorias e processos de segurança para garantir que sua empresa esteja sempre protegida.",
      glow: "neon-glow-pink"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white">Nossas Soluções</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Desenvolvemos tecnologias sob medida para transformar a maneira como sua empresa opera no dia a dia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 0 30px rgba(255, 255, 255, 0.05)" }}
              className={`p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group ${s.glow}`}
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <motion.button 
                whileHover={{ x: 5, color: '#00f2ff' }}
                className="text-neutral-300 font-bold text-xs flex items-center gap-1 transition-all"
              >
                SAIBA MAIS <ChevronRight size={14} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-20 sm:py-24 bg-neutral-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-neon-blue rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-neon-purple rounded-full blur-[150px]" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(41,121,255,0.2)] group">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
            alt="Inovação Tecnológica" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-transparent" />
        </div>
        <div className="relative sm:absolute mt-6 sm:mt-0 sm:-bottom-10 sm:-right-10 w-full sm:w-64 sm:h-64 bg-neutral-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-end border border-white/10 neon-glow-blue">
          <p className="text-4xl font-bold mb-2 text-neon-blue">10+</p>
          <p className="text-neutral-400 text-sm">Anos de experiência em inovação tecnológica e automação industrial.</p>
        </div>
      </div>
      
      <div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
          Transformando complexidade em <span className="text-neon-cyan">simplicidade.</span>
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg mb-8 leading-relaxed">
          A Autoflow apoia empresas na estruturacao de processos, integracao de sistemas e padronizacao operacional para reduzir retrabalho, ganhar previsibilidade e sustentar o crescimento com eficiencia.
        </p>
        
        <div className="space-y-6">
          {[
            "Foco total em resultados mensuráveis",
            "Suporte técnico especializado 24/7",
            "Integração nativa com +500 softwares",
            "Segurança de dados nível bancário"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4">
              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <CheckCircle2 size={14} className="text-neon-cyan" />
              </div>
              <span className="text-neutral-300 font-medium text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Ana Silva",
      role: "CEO da TechNova",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      quote: "A Autoflow reduziu nossos custos operacionais em 40% no primeiro semestre. A precisão dos bots é impressionante."
    },
    {
      name: "Carlos Mendes",
      role: "Diretor de Operações da LogiFast",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      quote: "A integração de fluxos foi um divisor de águas para nossa logística. Hoje temos visibilidade total em tempo real."
    },
    {
      name: "Juliana Costa",
      role: "Gerente de TI da InnovaBank",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      quote: "Segurança e eficiência andam juntas com as soluções da Autoflow. O suporte técnico é excepcional e proativo."
    },
    {
      name: "Roberto Oliveira",
      role: "CTO da GlobalTrade",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      quote: "Implementamos a orquestração de fluxos e o resultado foi imediato. Nossa equipe agora foca 100% em estratégia."
    },
    {
      name: "Fernanda Lima",
      role: "Head de Inovação da HealthCare+",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      quote: "A Autoflow nos ajudou a estruturar previsões de demanda com muito mais segurança. Um investimento que se pagou em 3 meses."
    },
    {
      name: "Ricardo Santos",
      role: "Fundador da EcoFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote: "A automação do atendimento transformou nossa operação. Reduzimos o tempo de espera de 15 minutos para segundos."
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 sm:py-24 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white">O que dizem nossos clientes</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Empresas de diversos setores já transformaram sua realidade com a nossa tecnologia.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden px-1 sm:px-4 py-10 sm:py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
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

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-2 sm:mt-4">
            <motion.button
              whileHover={{ scale: 1.1, x: -5, borderColor: '#00f2ff', color: '#00f2ff' }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 transition-all"
            >
              <ArrowRight size={20} className="rotate-180" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${currentIndex === i ? 'w-8 bg-neon-cyan shadow-[0_0_10px_#00f2ff]' : 'w-2 bg-white/10'}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 5, borderColor: '#00f2ff', color: '#00f2ff' }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 transition-all"
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SuccessCases = () => {
  const cases = [
    {
      company: "Global Logistics Co.",
      sector: "Logística",
      icon: <Truck size={24} className="text-neon-blue" />,
      challenge: "Rastreamento manual de mais de 5.000 remessas diárias, causando atrasos e erros de comunicação.",
      solution: "Implementação de bots RPA para rastreamento em tempo real e notificações automáticas aos clientes via WhatsApp e E-mail.",
      result: "Redução de 95% nos erros de rastreamento e atualizações de entrega 30% mais rápidas.",
      glow: "neon-glow-blue"
    },
    {
      company: "HealthTech Solutions",
      sector: "Saúde",
      icon: <Stethoscope size={24} className="text-neon-cyan" />,
      challenge: "Entrada manual de dados de pacientes consumindo 4 horas por turno da equipe de enfermagem.",
      solution: "Processamento de documentos com regras de conferência e preenchimento automático de formulários e prontuários.",
      result: "15.000 horas economizadas anualmente, permitindo mais tempo para o cuidado direto ao paciente.",
      glow: "neon-glow-cyan"
    },
    {
      company: "Financier Group",
      sector: "Finanças",
      icon: <TrendingUp size={24} className="text-neon-purple" />,
      challenge: "Detecção de fraudes lenta e reativa, resultando em perdas financeiras significativas.",
      solution: "Monitoramento de transações em tempo real com regras de negócio e alertas automáticos para detecção proativa de anomalias.",
      result: "Aumento de 60% na taxa de detecção de fraudes nos primeiros 3 meses de operação.",
      glow: "neon-glow-purple"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white">Cases de Sucesso</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Resultados reais alcançados através da nossa parceria com empresas líderes em seus setores.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col h-full transition-all group ${c.glow}`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {c.sector}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{c.company}</h3>

              <div className="space-y-6 flex-1">
                <div>
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Desafio</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Solução Autoflow</p>
                  <p className="text-sm text-neutral-300 leading-relaxed">{c.solution}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest mb-2">Resultado Alcançado</p>
                <p className="text-xl font-bold text-white leading-tight">{c.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="py-20 sm:py-24 bg-neutral-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white/5 rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 lg:p-16 shadow-xl border border-white/10 grid lg:grid-cols-2 gap-10 lg:gap-16 neon-glow-purple">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-white">Vamos conversar?</h2>
          <p className="text-neutral-400 mb-8 sm:mb-10">
            Nossa equipe de especialistas está pronta para analisar seus processos e propor a melhor estratégia de automação.
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
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Escritório</p>
                <p className="font-bold text-white">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
              <option className="bg-neutral-900">Consultoria de Automação</option>
              <option className="bg-neutral-900">Suporte Técnico</option>
              <option className="bg-neutral-900">Parcerias</option>
              <option className="bg-neutral-900">Outros</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-400">Mensagem</label>
            <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all" placeholder="Como podemos ajudar?"></textarea>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(188, 19, 254, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-neon-purple text-white py-4 sm:py-5 rounded-2xl font-bold hover:bg-neon-purple/90 transition-all"
          >
            Enviar Mensagem
          </motion.button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-neutral-950 pt-16 sm:pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/">
            <Logo />
          </Link>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Solucoes de automacao empresarial, integracao de sistemas e organizacao de fluxos para operacoes mais eficientes, confiaveis e escalaveis.
          </p>
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ y: -5, backgroundColor: '#2979ff', color: '#fff', boxShadow: '0 0 15px #2979ff' }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 transition-all"
            >
              <Linkedin size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ y: -5, backgroundColor: '#00f2ff', color: '#000', boxShadow: '0 0 15px #00f2ff' }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 transition-all"
            >
              <Twitter size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ y: -5, backgroundColor: '#bc13fe', color: '#fff', boxShadow: '0 0 15px #bc13fe' }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 transition-all"
            >
              <Instagram size={18} />
            </motion.button>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white">Links Rápidos</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/">Início</Link></li>
            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/Servicos">Serviços</Link></li>
            <li className="hover:text-neon-cyan cursor-pointer transition-colors"><Link to="/Sobre">Sobre Nós</Link></li>
            <li className="hover:text-neon-cyan cursor-pointer transition-colors">Blog</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white">Serviços</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li className="hover:text-neon-blue cursor-pointer transition-colors">RPA & Bots</li>
            <li className="hover:text-neon-blue cursor-pointer transition-colors">Fluxos de Trabalho</li>
            <li className="hover:text-neon-blue cursor-pointer transition-colors">Consultoria de Processos</li>
            <li className="hover:text-neon-blue cursor-pointer transition-colors">Integrações API</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-white">Newsletter</h4>
          <p className="text-sm text-neutral-500 mb-4">Receba insights sobre automação no seu e-mail.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
            <input type="email" placeholder="Seu e-mail" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-1 focus:ring-neon-cyan/30" />
            <button className="bg-neon-cyan text-neutral-950 p-3 rounded-xl hover:bg-neon-cyan/80 transition-all flex items-center justify-center">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-medium text-center md:text-left">
        <p>© 2026 Autoflow. Todos os direitos reservados.</p>
        <div className="flex items-center gap-2">
          <span>Projeto desenvolvido por</span>
          <a 
            href="https://github.com/GEDEON1708" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neon-cyan hover:text-white transition-colors font-bold"
          >
            Gedeon
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <span className="hover:text-white cursor-pointer">Termos de Uso</span>
          <span className="hover:text-white cursor-pointer">Privacidade</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen font-sans selection:bg-neutral-900 selection:text-white bg-neutral-950 text-white relative overflow-x-hidden">
      {/* Persistent Background Circuit Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(41, 121, 255, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated Circuit Paths */}
          <motion.path
            d="M 0 100 L 200 100 L 250 150 L 500 150 L 550 200 L 1000 200"
            stroke="rgba(0, 242, 255, 0.2)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 1000 800 L 800 800 L 750 750 L 500 750 L 450 700 L 0 700"
            stroke="rgba(188, 19, 254, 0.2)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
          />
        </svg>
      </div>

      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <ScrollToTop />
          <Navbar />
          
          <main className="relative z-10">
            <AnimatePresence mode="wait">
              <div key={location.pathname}>
                <Routes location={location}>
                  <Route path="/" element={<PageWrapper><Hero /><LogoGrid /></PageWrapper>} />
                  <Route path="/Servicos" element={<PageWrapper><Services /></PageWrapper>} />
                  <Route path="/Sobre" element={<PageWrapper><About /></PageWrapper>} />
                  <Route path="/Depoimentos" element={<PageWrapper><Testimonials /></PageWrapper>} />
                  <Route path="/Cases" element={<PageWrapper><SuccessCases /></PageWrapper>} />
                  <Route path="/Contato" element={<PageWrapper><Contact /></PageWrapper>} />
                  <Route path="*" element={<PageWrapper><Hero /><LogoGrid /></PageWrapper>} />
                </Routes>
              </div>
            </AnimatePresence>
          </main>
          
          <Footer />
          <ContactWidget />
        </>
      )}
    </div>
  );
}
