import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, MessageSquare, Phone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openContactPage = () => {
    setIsOpen(false);
    navigate('/Contato');
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 z-[100] flex justify-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-full sm:w-[400px] h-[500px] max-h-[calc(100vh-7rem)] glass rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/10 neon-glow-blue"
          >
            <div className="bg-neutral-900 p-4 flex items-center justify-between text-white border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-neon-blue/20 text-neon-blue rounded-lg flex items-center justify-center neon-glow-blue">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-bold text-sm">Central <span className="text-neon-cyan">Autoflow</span></p>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Atendimento comercial</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-950/50">
              <div className="rounded-3xl border border-white/5 bg-white/5 p-5">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Fale com a nossa equipe para entender como automatizar processos, integrar ferramentas e acelerar a operação da sua empresa.
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-neon-cyan/10 text-neon-cyan rounded-2xl flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-1">E-mail</p>
                      <p className="text-sm font-semibold text-white break-all">contato@autoflow.com.br</p>
                      <p className="text-xs text-neutral-400 mt-1">Retorno comercial em horário útil.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-neon-blue/10 text-neon-blue rounded-2xl flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-1">Telefone</p>
                      <p className="text-sm font-semibold text-white">+55 (11) 98765-4321</p>
                      <p className="text-xs text-neutral-400 mt-1">Atendimento para novos projetos e suporte.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-neon-purple/10 text-neon-purple rounded-2xl flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-1">Escritório</p>
                      <p className="text-sm font-semibold text-white">Av. Paulista, 1000 - São Paulo, SP</p>
                      <p className="text-xs text-neutral-400 mt-1">Agende uma conversa com o nosso time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-neutral-900 border-t border-white/5">
              <button
                onClick={openContactPage}
                className="w-full bg-neon-cyan text-neutral-950 px-4 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-neon-cyan/80 transition-all"
              >
                Ir para contato <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 242, 255, 0.5)' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-neon-cyan text-neutral-950 rounded-full shadow-xl flex items-center justify-center hover:bg-neon-cyan/80 transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};
