import { useState } from "react";

/* ============================================================
   BUBBA TECH — Site institucional + catálogo
   Stack alvo: React (drop-in para projeto Vite existente)
   Edição rápida: altere WHATSAPP, SERVICOS e PRODUTOS abaixo.
   ============================================================ */

const WHATSAPP = "5551994731964";
const INSTAGRAM = "https://instagram.com/bubba.tech";

// Coloque logo-bubba-tech.png na pasta public/ do projeto Vite (usado no footer)
const LOGO_URL = "/logo-bubba-tech.png";

// Versão compacta do logo embutida no código — o header nunca fica sem a marca
const LOGO_DATA = "data:image/webp;base64,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";

const zap = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const SERVICOS = [
  {
    t: "Limpeza técnica e pasta térmica",
    d: "PCs, notebooks e consoles. Poeira removida, fluxo de ar corrigido e temperaturas de volta ao normal.",
    p: "a partir de R$ 120",
  },
  {
    t: "Limpeza química ultrassônica",
    d: "Banho ultrassônico para placas e componentes. Remove oxidação, corrosão e resíduos de líquido que a limpeza comum não alcança.",
    p: "sob avaliação",
  },
  {
    t: "Formatação e otimização",
    d: "Sistema limpo, drivers atualizados e backup dos seus arquivos antes de qualquer coisa.",
    p: "sob avaliação",
  },
  {
    t: "Upgrade de hardware",
    d: "SSD, memória RAM, placa de vídeo, fonte. Mais desempenho investindo no que faz diferença na sua máquina.",
    p: "sob avaliação",
  },
  {
    t: "Consultoria de projeto de PC",
    d: "Vai comprar computador? A gente levanta sua necessidade e orçamento e indica exatamente o que comprar — peça por peça ou máquina pronta, sem gastar com o que você não vai usar.",
    p: "sob avaliação",
  },
  {
    t: "Montagem e reforma de PCs",
    d: "Do projeto à bancada: montagem completa, organização de cabos e teste de estabilidade.",
    p: "sob avaliação",
  },
  {
    t: "Manutenção de celulares",
    d: "Troca de tela e bateria, recuperação por contato com líquido e diagnóstico técnico completo.",
    p: "sob avaliação",
  },
  {
    t: "Suporte remoto",
    d: "Atendimento via AnyDesk para todo o Brasil. Diagnóstico e correção de software sem sair de casa.",
    p: "sob avaliação",
  },
];

const PRODUTOS = [
  {
    nome: "Gigabyte RTX 2060 OC 6GB",
    cat: "Placa de vídeo",
    estado: "Usado",
    specs: ["6GB GDDR6 · Ray Tracing · DLSS", "Windforce OC · acompanha caixa"],
    preco: "R$ 1.200",
    obs: "Envio para todo o Brasil",
    esgotado: true,
  },
  {
    nome: "Teclado Aula Win 68",
    cat: "Periférico",
    estado: "Novo",
    specs: ["Switches magnéticos", "Layout compacto 65%"],
    preco: "R$ 400",
    obs: "Garantia de 3 meses",
    esgotado: true,
  },
  {
    nome: "Combo Win68 Pro + DeathAdder V3",
    cat: "Periféricos",
    estado: "Usado",
    specs: ["Teclado magnético + mouse Razer", "Mousepad grande incluso"],
    preco: "R$ 599,90",
    obs: "Excelente estado",
    esgotado: true,
  },
  {
    nome: "Controle GameSir Nova",
    cat: "Periférico",
    estado: "Novo",
    specs: ["Bluetooth · Switch, Android, iPhone, PC", "Analógicos Hall effect, sem drift"],
    preco: "R$ 219,90",
    obs: "Até 3x sem juros",
    esgotado: true,
  },
  {
    nome: "RAM Crucial 8GB DDR4",
    cat: "Memória",
    estado: "Usado",
    specs: ["2666MHz · desktop", "Garantia Bubba Tech"],
    preco: "R$ 230",
    obs: "Retirada ou entrega a combinar",
    esgotado: true,
  },
  {
    nome: "SSD Netac 240GB",
    cat: "Armazenamento",
    estado: "Usado",
    specs: ['SATA 2.5" · saúde verificada'],
    preco: "R$ 150",
    obs: "Instalação à parte",
    esgotado: true,
  },
  {
    nome: "SSD Patriot P210 128GB",
    cat: "Armazenamento",
    estado: "Usado",
    specs: ['SATA 2.5" · saúde verificada'],
    preco: "R$ 100",
    obs: "Ideal para segunda máquina",
    esgotado: true,
  },
  {
    nome: "HD 1TB WD / Seagate",
    cat: "Armazenamento",
    estado: "Usado",
    specs: ["3 unidades · 7200 RPM", "Backup, DVR ou RAID"],
    preco: "R$ 120 cada",
    obs: "Dois Barracuda idênticos, prontos para RAID",
    esgotado: true,
  },
];

const READOUT = [
  ["CPU TEMP", "38°C", "OK"],
  ["SMART SSD", "100%", "OK"],
  ["FLUXO DE AR", "LIMPO", "OK"],
  ["PASTA TÉRMICA", "NOVA", "OK"],
  ["ESTABILIDADE", "1h STRESS", "OK"],
];

export default function BubbaTechSite() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  return (
    <div className="bt-root">
      <style>{CSS}</style>

      {/* ===================== HEADER ===================== */}
      <header className="bt-header">
        <a href="#inicio" className="bt-logo" aria-label="Bubba Tech — início">
          <img src={LOGO_DATA} alt="" className="bt-logo-img" />
          <span className="bt-logo-text">
            BUBBA<em>TECH</em>
          </span>
        </a>

        <nav className={"bt-nav" + (menuAberto ? " aberta" : "")}>
          <a href="#servicos" onClick={() => setMenuAberto(false)}>Serviços</a>
          <a href="#produtos" onClick={() => setMenuAberto(false)}>Produtos</a>
          <a href="#compramos" onClick={() => setMenuAberto(false)}>Vendemos e compramos</a>
          <a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a>
        </nav>

        <div className="bt-header-acoes">
          <a
            className="bt-btn bt-btn-primaria bt-btn-compacto"
            href={zap("Olá! Vim pelo site da Bubba Tech.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <button
            className="bt-menu-btn"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="bt-hero" id="inicio">
        <div className="bt-hero-texto">
          <p className="bt-eyebrow">Porto Alegre · RS — remoto para todo o Brasil</p>
          <h1>
            Seu equipamento
            <br />
            rápido de novo<span className="bt-cursor">_</span>
          </h1>
          <p className="bt-hero-sub">
            Manutenção de PCs, notebooks e celulares, com diagnóstico honesto e
            teste de bancada antes da entrega. Hardware usado à venda, sempre
            testado.
          </p>
          <div className="bt-hero-ctas">
            <a
              className="bt-btn bt-btn-primaria"
              href={zap("Olá! Quero um orçamento para manutenção.")}
              target="_blank"
              rel="noreferrer"
            >
              Pedir orçamento no WhatsApp
            </a>
            <a className="bt-btn bt-btn-fantasma" href="#produtos">
              Ver produtos disponíveis
            </a>
          </div>
        </div>

        <div className="bt-readout" role="img" aria-label="Painel de diagnóstico da bancada: todos os testes aprovados">
          <div className="bt-readout-topo">
            <span>BANCADA BUBBA TECH</span>
            <span className="bt-readout-id">DIAGNÓSTICO</span>
          </div>
          {READOUT.map(([nome, valor, status]) => (
            <div className="bt-readout-linha" key={nome}>
              <span className="bt-readout-nome">{nome}</span>
              <span className="bt-readout-pontos" aria-hidden="true" />
              <span className="bt-readout-valor">{valor}</span>
              <span className="bt-readout-ok">{status}</span>
            </div>
          ))}
          <div className="bt-readout-rodape">STATUS: PRONTO PARA USO</div>
        </div>
      </section>

      {/* ===================== FAIXA DE CONFIANÇA ===================== */}
      <div className="bt-faixa">
        <span>Tudo testado na bancada</span>
        <span>Cartão, PIX ou dinheiro</span>
        <span>Envio via Correios</span>
        <span>Garantia nos produtos</span>
      </div>

      {/* ===================== SERVIÇOS (ordem de serviço) ===================== */}
      <section className="bt-secao" id="servicos">
        <div className="bt-secao-cab">
          <h2>Serviços</h2>
          <p>
            O que a sua máquina precisa, sem empurrar o que ela não precisa.
            Valores confirmados após avaliação do equipamento.
          </p>
        </div>

        <div className="bt-os">
          <div className="bt-os-topo">
            <span className="bt-os-titulo">ORDEM DE SERVIÇO</span>
            <span className="bt-os-num">Nº ____</span>
          </div>
          <div className="bt-os-campos">
            <span><b>CLIENTE:</b> você</span>
            <span><b>EQUIPAMENTO:</b> PC · notebook · celular · console</span>
            <span><b>LOCAL:</b> Porto Alegre ou remoto</span>
          </div>

          <ul className="bt-os-lista">
            {SERVICOS.map((s) => (
              <li key={s.t}>
                <span className="bt-os-check" aria-hidden="true" />
                <div className="bt-os-info">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
                <span className="bt-os-preco">{s.p}</span>
              </li>
            ))}
          </ul>

          <div className="bt-os-rodape">
            <span>Aprovação do orçamento antes de qualquer execução.</span>
            <a
              className="bt-btn bt-btn-primaria bt-btn-compacto"
              href={zap("Olá! Quero abrir uma ordem de serviço.")}
              target="_blank"
              rel="noreferrer"
            >
              Abrir minha OS
            </a>
          </div>
        </div>
      </section>

      {/* ===================== PROCESSO ===================== */}
      <section className="bt-secao bt-secao-escura">
        <div className="bt-secao-cab">
          <h2>Como funciona</h2>
        </div>
        <ol className="bt-passos">
          {[
            ["Diagnóstico", "Você descreve o problema, a gente identifica a causa. Presencial ou por acesso remoto."],
            ["Orçamento", "Valor fechado e explicado antes de começar. Sem surpresa na entrega."],
            ["Execução", "Serviço feito com peças testadas e produtos de qualidade."],
            ["Teste de bancada", "Temperatura, estabilidade e desempenho verificados antes de devolver."],
          ].map(([t, d], i) => (
            <li key={t}>
              <span className="bt-passo-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ===================== CATÁLOGO ===================== */}
      <section className="bt-secao" id="produtos">
        <div className="bt-secao-cab">
          <h2>Produtos disponíveis</h2>
          <p>
            Estoque de usados gira rápido — tudo o que entra é testado na
            bancada antes de anunciar. Item esgotado? Peça o aviso pelo
            WhatsApp e seja o primeiro a saber quando chegar outro.
          </p>
        </div>

        <div className="bt-grade">
          {PRODUTOS.map((p) => (
            <article
              className={"bt-card" + (p.esgotado ? " bt-card-esgotado" : "")}
              key={p.nome}
            >
              <div className="bt-card-chips">
                <span className={"bt-chip" + (p.estado === "Novo" ? " bt-chip-novo" : "")}>
                  {p.estado}
                </span>
                {p.esgotado ? (
                  <span className="bt-chip bt-chip-esgotado">Esgotado</span>
                ) : (
                  <span className="bt-chip bt-chip-ok">Testado</span>
                )}
              </div>
              <p className="bt-card-cat">{p.cat}</p>
              <h3>{p.nome}</h3>
              <ul className="bt-card-specs">
                {p.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="bt-card-base">
                <div>
                  <span className="bt-card-preco">{p.preco}</span>
                  <span className="bt-card-obs">{p.obs}</span>
                </div>
                <a
                  className="bt-card-cta"
                  href={zap(
                    p.esgotado
                      ? `Olá! Vi que o produto ${p.nome} esgotou. Pode me avisar quando chegar outro?`
                      : `Olá! Tenho interesse no produto: ${p.nome} (${p.preco}). Ainda está disponível?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.esgotado ? "Avisar quando chegar →" : "Reservar →"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== COMPRAMOS ===================== */}
      <section className="bt-banner" id="compramos">
        <div>
          <h2>Tem hardware parado? A gente compra.</h2>
          <p>
            Placas de vídeo, processadores, memórias, SSDs, fontes e máquinas
            completas. Avaliação rápida e pagamento seguro por PIX ou OLX Pay,
            em todo o Brasil.
          </p>
        </div>
        <a
          className="bt-btn bt-btn-clara"
          href={zap("Olá! Quero vender um hardware. Segue a descrição:")}
          target="_blank"
          rel="noreferrer"
        >
          Avaliar meu hardware
        </a>
      </section>

      {/* ===================== CONTATO / FOOTER ===================== */}
      <footer className="bt-footer" id="contato">
        <div className="bt-footer-grade">
          <div>
            {logoOk ? (
              <img
                src={LOGO_URL}
                alt="Bubba Tech"
                className="bt-footer-logo"
                onError={() => setLogoOk(false)}
              />
            ) : (
              <span className="bt-logo-text bt-logo-footer">
                BUBBA<em>TECH</em>
              </span>
            )}
            <p>
              Manutenção e comércio de PCs, notebooks e celulares.
              <br />
              Porto Alegre · RS
            </p>
          </div>
          <div>
            <h3>Contato</h3>
            <a href={zap("Olá! Vim pelo site da Bubba Tech.")} target="_blank" rel="noreferrer">
              WhatsApp (51) 99473-1964
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              Instagram @bubba.tech
            </a>
          </div>
          <div>
            <h3>Atendimento</h3>
            <p>
              Presencial em Porto Alegre e região.
              <br />
              Suporte remoto via AnyDesk para todo o Brasil.
            </p>
          </div>
        </div>
        <p className="bt-footer-nota">
          Bubba Tech — todos os produtos usados são testados antes da venda.
        </p>
      </footer>
    </div>
  );
}

/* ============================================================
   DESIGN SYSTEM
   Paleta: grafite azulado + azul Bubba, papel técnico na OS.
   Tipos: Chakra Petch (display) · IBM Plex Sans (texto) ·
          IBM Plex Mono (dados, preços, etiquetas)
   ============================================================ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

.bt-root {
  --bg: #0A0E14;
  --superficie: #111823;
  --linha: #223042;
  --azul: #2F7DF6;
  --azul-escuro: #16294A;
  --gelo: #9FB2C8;
  --branco: #EEF3FA;
  --ok: #3ED598;
  --papel: #F3F6FB;
  --papel-linha: #C9D4E2;
  --papel-tinta: #101826;

  --display: 'Chakra Petch', sans-serif;
  --texto: 'IBM Plex Sans', sans-serif;
  --mono: 'IBM Plex Mono', monospace;

  background: var(--bg);
  color: var(--branco);
  font-family: var(--texto);
  font-size: 16px;
  line-height: 1.6;
  min-height: 100vh;
}
.bt-root * { box-sizing: border-box; margin: 0; }
.bt-root a { color: inherit; text-decoration: none; }
.bt-root :focus-visible { outline: 2px solid var(--azul); outline-offset: 3px; border-radius: 2px; }
.bt-root h1, .bt-root h2, .bt-root h3 { font-family: var(--display); line-height: 1.15; }

/* ---------- header ---------- */
.bt-header {
  position: sticky; top: 0; z-index: 50;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px clamp(20px, 5vw, 56px);
  background: rgba(10, 14, 20, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--linha);
}
.bt-logo { display: flex; align-items: center; gap: 10px; }
.bt-logo-img { height: 50px; width: auto; display: block; }
.bt-footer-logo { height: 130px; width: auto; display: block; margin-bottom: 14px; }
.bt-logo-text { font-family: var(--display); font-weight: 700; font-size: 19px; letter-spacing: 0.04em; }
.bt-logo-text em { font-style: normal; color: var(--azul); }
.bt-nav { display: flex; gap: 28px; font-size: 14.5px; color: var(--gelo); }
.bt-nav a:hover { color: var(--branco); }
.bt-header-acoes { display: flex; align-items: center; gap: 12px; }
.bt-menu-btn { display: none; }

/* ---------- botões ---------- */
.bt-btn {
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--display); font-weight: 600; font-size: 15px;
  letter-spacing: 0.02em; padding: 13px 22px; border-radius: 6px;
  border: 1px solid transparent; transition: transform .15s, background .15s, border-color .15s;
}
.bt-btn:hover { transform: translateY(-1px); }
.bt-btn-compacto { padding: 9px 16px; font-size: 13.5px; }
.bt-btn-primaria { background: var(--azul); color: #fff; }
.bt-btn-primaria:hover { background: #4A90F8; }
.bt-btn-fantasma { border-color: var(--linha); color: var(--branco); }
.bt-btn-fantasma:hover { border-color: var(--azul); }
.bt-btn-clara { background: var(--branco); color: var(--papel-tinta); }

/* ---------- hero ---------- */
.bt-hero {
  display: grid; grid-template-columns: 1.15fr 0.85fr; gap: clamp(32px, 6vw, 80px);
  align-items: center; padding: clamp(56px, 9vw, 110px) clamp(20px, 5vw, 56px);
  max-width: 1200px; margin: 0 auto;
}
.bt-eyebrow {
  font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--azul); margin-bottom: 18px;
}
.bt-hero h1 { font-size: clamp(38px, 6vw, 64px); font-weight: 700; text-transform: uppercase; letter-spacing: 0.01em; }
.bt-cursor { color: var(--azul); animation: bt-blink 1.1s steps(1) infinite; }
@keyframes bt-blink { 50% { opacity: 0; } }
.bt-hero-sub { color: var(--gelo); font-size: 17.5px; max-width: 46ch; margin: 22px 0 30px; }
.bt-hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; }

/* painel de diagnóstico */
.bt-readout {
  font-family: var(--mono); font-size: 13.5px;
  background: var(--superficie); border: 1px solid var(--linha); border-radius: 10px;
  padding: 22px 22px 0; box-shadow: 0 24px 60px rgba(0,0,0,0.35);
}
.bt-readout-topo {
  display: flex; justify-content: space-between; color: var(--gelo);
  font-size: 11.5px; letter-spacing: 0.1em; padding-bottom: 14px;
  border-bottom: 1px solid var(--linha); margin-bottom: 6px;
}
.bt-readout-id { color: var(--azul); }
.bt-readout-linha { display: flex; align-items: baseline; gap: 10px; padding: 9px 0; }
.bt-readout-nome { color: var(--gelo); white-space: nowrap; }
.bt-readout-pontos { flex: 1; border-bottom: 1px dotted var(--linha); transform: translateY(-4px); }
.bt-readout-valor { color: var(--branco); }
.bt-readout-ok { color: var(--ok); font-weight: 600; }
.bt-readout-rodape {
  margin: 8px -22px 0; padding: 13px 22px; border-top: 1px solid var(--linha);
  color: var(--ok); font-size: 12.5px; letter-spacing: 0.08em;
}

/* ---------- faixa ---------- */
.bt-faixa {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 40px;
  padding: 16px clamp(20px, 5vw, 56px);
  border-top: 1px solid var(--linha); border-bottom: 1px solid var(--linha);
  font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--gelo);
}

/* ---------- seções ---------- */
.bt-secao { max-width: 1200px; margin: 0 auto; padding: clamp(56px, 8vw, 96px) clamp(20px, 5vw, 56px); }
.bt-secao-escura { max-width: none; background: var(--superficie); border-top: 1px solid var(--linha); border-bottom: 1px solid var(--linha); }
.bt-secao-escura > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
.bt-secao-cab { max-width: 640px; margin-bottom: 40px; }
.bt-secao-cab h2 { font-size: clamp(26px, 3.4vw, 36px); text-transform: uppercase; margin-bottom: 12px; }
.bt-secao-cab p { color: var(--gelo); }

/* ---------- ordem de serviço (papel) ---------- */
.bt-os {
  background: var(--papel); color: var(--papel-tinta);
  border-radius: 10px; padding: clamp(22px, 4vw, 40px);
  box-shadow: 0 30px 70px rgba(0,0,0,0.45);
}
.bt-os-topo {
  display: flex; justify-content: space-between; align-items: baseline;
  font-family: var(--mono); letter-spacing: 0.1em;
  border-bottom: 2px solid var(--papel-tinta); padding-bottom: 12px;
}
.bt-os-titulo { font-weight: 600; font-size: 14px; }
.bt-os-num { color: #5B6B80; font-size: 13px; }
.bt-os-campos {
  display: flex; flex-wrap: wrap; gap: 8px 28px; padding: 14px 0;
  font-family: var(--mono); font-size: 12.5px; color: #44536A;
  border-bottom: 1px solid var(--papel-linha);
}
.bt-os-campos b { color: var(--papel-tinta); font-weight: 600; }
.bt-os-lista { list-style: none; padding: 0; }
.bt-os-lista li {
  display: flex; align-items: flex-start; gap: 16px;
  padding: 20px 0; border-bottom: 1px dashed var(--papel-linha);
}
.bt-os-check {
  width: 17px; height: 17px; margin-top: 4px; flex-shrink: 0;
  border: 2px solid var(--papel-tinta); border-radius: 3px;
}
.bt-os-info { flex: 1; }
.bt-os-info h3 { font-size: 17.5px; margin-bottom: 4px; }
.bt-os-info p { color: #44536A; font-size: 14.5px; max-width: 56ch; }
.bt-os-preco { font-family: var(--mono); font-size: 13.5px; font-weight: 600; white-space: nowrap; padding-top: 3px; }
.bt-os-rodape {
  display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;
  gap: 14px; padding-top: 22px; font-size: 13.5px; color: #44536A;
}

/* ---------- processo ---------- */
.bt-passos {
  list-style: none; padding: 0;
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px;
}
.bt-passos li { border-top: 2px solid var(--linha); padding-top: 18px; }
.bt-passo-num { font-family: var(--mono); color: var(--azul); font-size: 13px; letter-spacing: 0.1em; }
.bt-passos h3 { font-size: 18px; margin: 10px 0 8px; }
.bt-passos p { color: var(--gelo); font-size: 14.5px; }

/* ---------- catálogo ---------- */
.bt-grade { display: grid; grid-template-columns: repeat(auto-fill, minmax(265px, 1fr)); gap: 20px; }
.bt-card {
  display: flex; flex-direction: column;
  background: var(--superficie); border: 1px solid var(--linha); border-radius: 10px;
  padding: 20px; transition: border-color .15s, transform .15s;
}
.bt-card:hover { border-color: var(--azul); transform: translateY(-3px); }
.bt-card-chips { display: flex; gap: 8px; margin-bottom: 14px; }
.bt-chip {
  font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 4px 9px; border-radius: 4px; border: 1px solid var(--linha); color: var(--gelo);
}
.bt-chip-novo { border-color: var(--azul); color: var(--azul); }
.bt-chip-ok { border-color: rgba(62, 213, 152, 0.4); color: var(--ok); }
.bt-chip-esgotado { border-color: rgba(240, 177, 90, 0.5); color: #F0B15A; }
.bt-card-esgotado h3, .bt-card-esgotado .bt-card-preco { color: var(--gelo); }
.bt-card-esgotado .bt-card-specs li { color: #64778F; }
.bt-card-esgotado:hover { border-color: #33445C; }
.bt-card-cat { font-family: var(--mono); font-size: 11.5px; color: var(--gelo); text-transform: uppercase; letter-spacing: 0.08em; }
.bt-card h3 { font-size: 18.5px; margin: 6px 0 12px; }
.bt-card-specs { list-style: none; padding: 0; margin-bottom: 18px; flex: 1; }
.bt-card-specs li {
  font-family: var(--mono); font-size: 12.5px; color: var(--gelo);
  padding: 6px 0; border-top: 1px dotted var(--linha);
}
.bt-card-base { display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; }
.bt-card-preco { display: block; font-family: var(--mono); font-weight: 600; font-size: 19px; }
.bt-card-obs { display: block; font-size: 12px; color: var(--gelo); margin-top: 3px; }
.bt-card-cta { font-family: var(--display); font-weight: 600; font-size: 14px; color: var(--azul); white-space: nowrap; }
.bt-card-cta:hover { text-decoration: underline; }

/* ---------- banner compra ---------- */
.bt-banner {
  max-width: 1200px; margin: 0 auto clamp(56px, 8vw, 96px);
  padding: clamp(28px, 5vw, 48px); border-radius: 12px;
  background: linear-gradient(135deg, var(--azul-escuro), #0E1B33);
  border: 1px solid rgba(47, 125, 246, 0.35);
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px;
}
.bt-banner h2 { font-size: clamp(22px, 3vw, 30px); text-transform: uppercase; margin-bottom: 10px; }
.bt-banner p { color: var(--gelo); max-width: 52ch; }

/* ---------- footer ---------- */
.bt-footer { border-top: 1px solid var(--linha); padding: 56px clamp(20px, 5vw, 56px) 32px; }
.bt-footer-grade {
  max-width: 1200px; margin: 0 auto 40px;
  display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 36px;
}
.bt-logo-footer { font-size: 22px; display: inline-block; margin-bottom: 12px; }
.bt-footer p, .bt-footer a { color: var(--gelo); font-size: 14.5px; }
.bt-footer a { display: block; margin-bottom: 8px; }
.bt-footer a:hover { color: var(--branco); }
.bt-footer h3 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 14px; color: var(--branco); }
.bt-footer-nota {
  max-width: 1200px; margin: 0 auto; padding-top: 24px;
  border-top: 1px solid var(--linha);
  font-family: var(--mono); font-size: 12px; color: var(--gelo);
}

/* ---------- responsivo ---------- */
@media (max-width: 900px) {
  .bt-hero { grid-template-columns: 1fr; }
  .bt-passos { grid-template-columns: repeat(2, 1fr); }
  .bt-footer-grade { grid-template-columns: 1fr; gap: 28px; }
}
@media (max-width: 700px) {
  .bt-nav {
    position: fixed; inset: 61px 0 auto 0; flex-direction: column; gap: 0;
    background: var(--bg); border-bottom: 1px solid var(--linha);
    transform: translateY(-130%); transition: transform .2s ease;
  }
  .bt-nav.aberta { transform: translateY(0); }
  .bt-nav a { padding: 16px clamp(20px, 5vw, 56px); border-top: 1px solid var(--linha); }
  .bt-menu-btn {
    display: grid; gap: 4px; background: none; border: 1px solid var(--linha);
    border-radius: 6px; padding: 10px 9px; cursor: pointer;
  }
  .bt-menu-btn span { width: 18px; height: 2px; background: var(--branco); }
  .bt-passos { grid-template-columns: 1fr; }
  .bt-os-lista li { flex-wrap: wrap; }
  .bt-os-preco { padding-left: 33px; }
}
@media (prefers-reduced-motion: reduce) {
  .bt-cursor { animation: none; }
  .bt-btn, .bt-card, .bt-nav { transition: none; }
}
`;
