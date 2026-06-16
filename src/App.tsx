import { useMemo, useState } from "react";
import LiveEditor from "./LiveEditor";

const WHATSAPP_NUMBER = "5519996514827";
const buildWhatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const whatsappLink = buildWhatsappUrl(
  "OlÃƒÂ¡, Renovera. Gostaria de avaliar a viabilidade de instalar um eletroposto. Meu local ÃƒÂ© [hotel / posto / empresa / condomÃƒÂ­nio / estacionamento / outro]."
);
const calculatorWhatsappLink = buildWhatsappUrl(
  "OlÃƒÂ¡, Renovera. Usei a calculadora de eletroposto e gostaria de transformar a simulaÃƒÂ§ÃƒÂ£o em um estudo real de viabilidade. Posso enviar os dados do meu projeto?"
);
const universalWhatsappLink = buildWhatsappUrl(
  "OlÃƒÂ¡, Renovera. Gostaria de receber uma anÃƒÂ¡lise tÃƒÂ©cnica pelo WhatsApp."
);
const logoSrc = `${import.meta.env.BASE_URL}logo-renovera.png`;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.6 28.8l6.6-1.5A12.7 12.7 0 1 0 16 3.2Zm0 22.9c-2 0-3.9-.6-5.6-1.7l-.4-.2-3.9.9.9-3.8-.2-.4a10.2 10.2 0 1 1 9.2 5.2Zm5.7-7.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.4 8.4 0 0 1-2.5-1.6 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.2-.2-.4-.3-.7-.5Z" />
    </svg>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(value);
}

function formatCurrencyDecimal(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 0
  }).format(value);
}

function App() {
  const [chargers, setChargers] = useState(2);
  const [sessions, setSessions] = useState(5);
  const [averageKwh, setAverageKwh] = useState(45);
  const [salePrice, setSalePrice] = useState(2.25);
  const [energyCost, setEnergyCost] = useState(0.85);
  const [investment, setInvestment] = useState(180000);

  const result = useMemo(() => {
    const monthlyKwh = chargers * sessions * averageKwh * 30;
    const grossRevenue = monthlyKwh * salePrice;
    const energyExpense = monthlyKwh * energyCost;
    const platformCost = grossRevenue * 0.02 + chargers * 120;
    const maintenance = chargers * 350;
    const netRevenue = grossRevenue - energyExpense - platformCost - maintenance;
    const annualNetRevenue = netRevenue * 12;
    const payback = netRevenue > 0 ? investment / netRevenue : 0;
    const margin = grossRevenue > 0 ? (netRevenue / grossRevenue) * 100 : 0;

    return {
      monthlyKwh,
      grossRevenue,
      energyExpense,
      platformCost,
      maintenance,
      netRevenue,
      annualNetRevenue,
      payback,
      margin
    };
  }, [chargers, sessions, averageKwh, salePrice, energyCost, investment]);

  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <a href="#inicio" className="brand">
            <img src={logoSrc} alt="Renovera" />
          </a>

          <nav className="nav">
            <a href="#roi">SimulaÃƒÂ§ÃƒÂ£o</a>
            <a href="#solucao">SoluÃƒÂ§ÃƒÂ£o</a>
            <a href="#aplicacoes">AplicaÃƒÂ§ÃƒÂµes</a>
            <a href="#potencias">PotÃƒÂªncias</a>
            <a href="#duvidas">DÃƒÂºvidas</a>
          </nav>

          <a className="headerButton" href={whatsappLink} target="_blank" rel="noreferrer">
            Solicitar estudo
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container heroGrid">
            <div className="heroContent">
              <span className="eyebrow">Renovera Charge</span>

              <h1>Estruture seu eletroposto com a Renovera.</h1>

              <p>
                A Renovera desenvolve estudos tÃƒÂ©cnicos e comerciais para
                implantaÃƒÂ§ÃƒÂ£o de infraestrutura de recarga elÃƒÂ©trica em rodovias,
                postos de combustÃƒÂ­veis, hotÃƒÂ©is, resorts, condomÃƒÂ­nios, empresas,
                shoppings e pontos estratÃƒÂ©gicos de alta circulaÃƒÂ§ÃƒÂ£o.
              </p>

              <div className="heroActions">
                <a className="primaryButton" href="#roi">
                  Simular retorno financeiro
                </a>
                <a className="secondaryButton" href={whatsappLink} target="_blank" rel="noreferrer">
                  Falar com a Renovera
                </a>
              </div>

              <div className="heroStats">
                <div>
                  <strong>11 a 240 kW</strong>
                  <span>carregadores AC e DC</span>
                </div>
                <div>
                  <strong>ROI</strong>
                  <span>receita, custo e margem</span>
                </div>
                <div>
                  <strong>Projeto completo</strong>
                  <span>viabilidade, elÃƒÂ©trica e implantaÃƒÂ§ÃƒÂ£o</span>
                </div>
              </div>
            </div>

            <div className="heroVisual">
              <div className="dashboardCard">
                <div className="dashboardTop">
                  <span>Renovera Energy Hub</span>
                  <strong>Online</strong>
                </div>

                <div className="dashboardMain">
                  <span>Receita estimada mensal</span>
                  <strong>R$ 30.375</strong>
                  <p>
                    Base: 5 recargas por dia, 2 carregadores e ticket mÃƒÂ©dio de
                    45 kWh.
                  </p>
                </div>

                <div className="dashboardList">
                  <div>
                    <span>Rodovia</span>
                    <strong>DC 120 kW</strong>
                  </div>
                  <div>
                    <span>Hotel ou resort</span>
                    <strong>AC 22 kW</strong>
                  </div>
                  <div>
                    <span>Posto de combustÃƒÂ­vel</span>
                    <strong>DC 60 kW</strong>
                  </div>
                </div>

                <div className="dashboardBars">
                  <span style={{ height: "34%" }}></span>
                  <span style={{ height: "52%" }}></span>
                  <span style={{ height: "68%" }}></span>
                  <span style={{ height: "82%" }}></span>
                  <span style={{ height: "61%" }}></span>
                </div>
              </div>

              <div className="floatingCard">
                <span>Cargas</span>
                <strong>11 a 240 kW</strong>
                <p>para residenciais, empresas e hubs de alta demanda</p>
              </div>
            </div>
          </div>
        </section>

        <section className="roi" id="roi">
          <div className="container">
            <div className="sectionHeader center">
              <span className="eyebrow light">Calculadora ROI</span>
              <h2>Simule receita, custos, margem e payback do eletroposto.</h2>
              <p>
                Esta simulaÃƒÂ§ÃƒÂ£o ÃƒÂ© preliminar e serve para apoiar a tomada de
                decisÃƒÂ£o. O estudo real deve considerar demanda contratada, tarifa
                local, obras elÃƒÂ©tricas, equipamento, manutenÃƒÂ§ÃƒÂ£o, plataforma,
                tributos e estratÃƒÂ©gia comercial.
              </p>
            </div>

            <div className="calculator">
              <div className="controls">
                <Control
                  label="Quantidade de carregadores"
                  value={chargers}
                  suffix="un."
                  min={1}
                  max={20}
                  step={1}
                  onChange={setChargers}
                />

                <Control
                  label="Recargas por carregador ao dia"
                  value={sessions}
                  suffix="recargas"
                  min={1}
                  max={30}
                  step={1}
                  onChange={setSessions}
                />

                <Control
                  label="Energia mÃƒÂ©dia por recarga"
                  value={averageKwh}
                  suffix="kWh"
                  min={10}
                  max={120}
                  step={5}
                  onChange={setAverageKwh}
                />

                <Control
                  label="PreÃƒÂ§o cobrado por kWh"
                  value={salePrice}
                  suffix="R$/kWh"
                  min={0.8}
                  max={5}
                  step={0.05}
                  onChange={setSalePrice}
                  currency
                />

                <Control
                  label="Custo de energia por kWh"
                  value={energyCost}
                  suffix="R$/kWh"
                  min={0.3}
                  max={2.5}
                  step={0.05}
                  onChange={setEnergyCost}
                  currency
                />

                <Control
                  label="Investimento estimado"
                  value={investment}
                  suffix="R$"
                  min={30000}
                  max={1500000}
                  step={10000}
                  onChange={setInvestment}
                  money
                />
              </div>

              <div className="results">
                <div className="resultCard">
                  <span>Energia mensal</span>
                  <strong>{formatNumber(result.monthlyKwh)} kWh</strong>
                </div>

                <div className="resultCard">
                  <span>Receita bruta mensal</span>
                  <strong>{formatCurrency(result.grossRevenue)}</strong>
                </div>

                <div className="resultCard">
                  <span>Custo mensal de energia</span>
                  <strong>{formatCurrency(result.energyExpense)}</strong>
                </div>

                <div className="resultCard">
                  <span>OperaÃƒÂ§ÃƒÂ£o e plataforma</span>
                  <strong>
                    {formatCurrency(result.platformCost + result.maintenance)}
                  </strong>
                </div>

                <div className="highlightResult">
                  <span>Margem lÃƒÂ­quida estimada</span>
                  <strong>{formatCurrency(result.netRevenue)}</strong>
                  <p>
                    Margem aproximada de{" "}
                    {result.margin.toFixed(1).replace(".", ",")}% sobre a
                    receita bruta mensal.
                  </p>
                </div>

                <div className="highlightResult secondary">
                  <span>Payback preliminar</span>
                  <strong>
                    {result.payback > 0
                      ? `${result.payback.toFixed(1).replace(".", ",")} meses`
                      : "Indefinido"}
                  </strong>
                  <p>
                    Receita lÃƒÂ­quida anual estimada em{" "}
                    {formatCurrency(result.annualNetRevenue)}.
                  </p>
                </div>

                <a className="primaryButton calculatorWhatsappButton" href={calculatorWhatsappLink} target="_blank" rel="noreferrer">
                  Receber anÃƒÂ¡lise do eletroposto no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="intro" id="solucao">
          <div className="container">
            <div className="sectionHeader center">
              <span className="eyebrow light">SoluÃƒÂ§ÃƒÂ£o Renovera</span>
              <h2>Da anÃƒÂ¡lise de viabilidade ao eletroposto pronto para operar.</h2>
              <p>
                O projeto de um eletroposto exige mais do que escolher um
                carregador. Ãƒâ€° necessÃƒÂ¡rio avaliar demanda disponÃƒÂ­vel, padrÃƒÂ£o de
                entrada, conexÃƒÂ£o elÃƒÂ©trica, obra civil, perfil de uso, modelo de
                cobranÃƒÂ§a, energia consumida, manutenÃƒÂ§ÃƒÂ£o e retorno sobre o
                investimento.
              </p>
            </div>

            <div className="introGrid">
              <div className="introCard">
                <span>01</span>
                <h3>Estudo tÃƒÂ©cnico e comercial</h3>
                <p>
                  AnÃƒÂ¡lise do local, perfil de circulaÃƒÂ§ÃƒÂ£o, tipo de usuÃƒÂ¡rio,
                  potÃƒÂªncia recomendada, consumo esperado e viabilidade econÃƒÂ´mica
                  preliminar.
                </p>
              </div>

              <div className="introCard">
                <span>02</span>
                <h3>Projeto elÃƒÂ©trico e infraestrutura</h3>
                <p>
                  Dimensionamento de cabos, proteÃƒÂ§ÃƒÂµes, quadros, eletrodutos,
                  padrÃƒÂ£o de entrada, demanda, aterramento e adequaÃƒÂ§ÃƒÂµes elÃƒÂ©tricas.
                </p>
              </div>

              <div className="introCard">
                <span>03</span>
                <h3>ImplantaÃƒÂ§ÃƒÂ£o e comissionamento</h3>
                <p>
                  Apoio tÃƒÂ©cnico para instalaÃƒÂ§ÃƒÂ£o, testes, parametrizaÃƒÂ§ÃƒÂ£o,
                  liberaÃƒÂ§ÃƒÂ£o operacional, validaÃƒÂ§ÃƒÂ£o de seguranÃƒÂ§a e entrega do
                  ponto de recarga.
                </p>
              </div>

              <div className="introCard">
                <span>04</span>
                <h3>ManutenÃƒÂ§ÃƒÂ£o e expansÃƒÂ£o</h3>
                <p>
                  Planejamento para operaÃƒÂ§ÃƒÂ£o contÃƒÂ­nua, inspeÃƒÂ§ÃƒÂµes, suporte
                  tÃƒÂ©cnico, aumento de potÃƒÂªncia e expansÃƒÂ£o gradual da rede.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="applications" id="aplicacoes">
          <div className="container">
            <div className="splitHeader">
              <div>
                <span className="eyebrow light">AplicaÃƒÂ§ÃƒÂµes</span>
                <h2>Uma soluÃƒÂ§ÃƒÂ£o para diferentes perfis de uso.</h2>
              </div>
              <p>
                Cada ponto possui uma estratÃƒÂ©gia distinta. Locais de permanÃƒÂªncia
                longa podem utilizar recarga AC. Pontos de passagem, rodovias e
                postos exigem carregamento DC mais rÃƒÂ¡pido, maior disponibilidade
                e operaÃƒÂ§ÃƒÂ£o mais estruturada.
              </p>
            </div>

            <div className="cardsGrid">
              <article className="useCard">
                <div className="icon">01</div>
                <h3>Postos de combustÃƒÂ­veis</h3>
                <p>
                  Transforme o posto em ponto de conveniÃƒÂªncia para veÃƒÂ­culos
                  elÃƒÂ©tricos, com carregadores DC, sinalizaÃƒÂ§ÃƒÂ£o, vaga dedicada e
                  estratÃƒÂ©gia de monetizaÃƒÂ§ÃƒÂ£o por kWh.
                </p>
              </article>

              <article className="useCard">
                <div className="icon">02</div>
                <h3>Rodovias e corredores</h3>
                <p>
                  Estruture pontos de recarga rÃƒÂ¡pida em rotas estratÃƒÂ©gicas,
                  reduzindo ansiedade de autonomia e agregando valor ao fluxo de
                  veÃƒÂ­culos.
                </p>
              </article>

              <article className="useCard">
                <div className="icon">03</div>
                <h3>HotÃƒÂ©is e resorts</h3>
                <p>
                  OfereÃƒÂ§a recarga como diferencial de experiÃƒÂªncia, retenÃƒÂ§ÃƒÂ£o e
                  conveniÃƒÂªncia para hÃƒÂ³spedes com veÃƒÂ­culos elÃƒÂ©tricos.
                </p>
              </article>

              <article className="useCard">
                <div className="icon">04</div>
                <h3>Shoppings e centros comerciais</h3>
                <p>
                  Aumente permanÃƒÂªncia, gere nova receita e associe o
                  empreendimento a inovaÃƒÂ§ÃƒÂ£o, sustentabilidade e mobilidade
                  elÃƒÂ©trica.
                </p>
              </article>

              <article className="useCard">
                <div className="icon">05</div>
                <h3>CondomÃƒÂ­nios</h3>
                <p>
                  Planeje infraestrutura coletiva, mediÃƒÂ§ÃƒÂ£o, rateio, seguranÃƒÂ§a
                  elÃƒÂ©trica e expansÃƒÂ£o organizada para moradores.
                </p>
              </article>

              <article className="useCard">
                <div className="icon">06</div>
                <h3>Empresas e frotas</h3>
                <p>
                  Apoie a eletrificaÃƒÂ§ÃƒÂ£o de frotas leves, veÃƒÂ­culos corporativos,
                  clientes, colaboradores e operaÃƒÂ§ÃƒÂµes internas.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="power" id="potencias">
          <div className="container powerGrid">
            <div className="sectionHeader">
              <span className="eyebrow light">PotÃƒÂªncias</span>
              <h2>Do carregador residencial ao hub de alta demanda.</h2>
              <p>
                A escolha da potÃƒÂªncia depende do tempo de permanÃƒÂªncia do usuÃƒÂ¡rio,
                da demanda elÃƒÂ©trica disponÃƒÂ­vel, do investimento previsto e do
                modelo de cobranÃƒÂ§a. A Renovera avalia o equilÃƒÂ­brio entre custo,
                velocidade de recarga e retorno financeiro.
              </p>
            </div>

            <div className="powerTable">
              <div className="powerRow">
                <strong>11 kW</strong>
                <span>ResidÃƒÂªncias, condomÃƒÂ­nios e empresas com baixa rotatividade.</span>
              </div>
              <div className="powerRow">
                <strong>22 kW</strong>
                <span>HotÃƒÂ©is, estacionamentos, resorts e pontos de permanÃƒÂªncia longa.</span>
              </div>
              <div className="powerRow">
                <strong>30 a 40 kW</strong>
                <span>OperaÃƒÂ§ÃƒÂµes de entrada em DC com investimento menor.</span>
              </div>
              <div className="powerRow">
                <strong>60 a 90 kW</strong>
                <span>Postos, comÃƒÂ©rcios e locais com necessidade de giro moderado.</span>
              </div>
              <div className="powerRow">
                <strong>120 kW</strong>
                <span>Rodovias, hubs e pontos de maior demanda operacional.</span>
              </div>
              <div className="powerRow">
                <strong>180 a 240 kW</strong>
                <span>Corredores estratÃƒÂ©gicos e alta rotatividade de veÃƒÂ­culos.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="faq" id="duvidas">
          <div className="container">
            <div className="sectionHeader center">
              <span className="eyebrow light">DÃƒÂºvidas frequentes</span>
              <h2>Pontos importantes antes de investir.</h2>
            </div>

            <div className="faqGrid">
              <Faq
                question="Qual carregador devo escolher?"
                answer="Depende do tipo de usuÃƒÂ¡rio, tempo mÃƒÂ©dio de permanÃƒÂªncia, demanda elÃƒÂ©trica disponÃƒÂ­vel e objetivo financeiro. ResidÃƒÂªncias e condomÃƒÂ­nios normalmente utilizam AC. Rodovias e postos tendem a exigir DC."
              />

              <Faq
                question="A calculadora substitui o estudo tÃƒÂ©cnico?"
                answer="NÃƒÂ£o. Ela entrega uma visÃƒÂ£o preliminar de viabilidade. O estudo tÃƒÂ©cnico completo considera instalaÃƒÂ§ÃƒÂ£o elÃƒÂ©trica, custos reais de obra, tarifa, demanda contratada, equipamento e operaÃƒÂ§ÃƒÂ£o."
              />

              <Faq
                question="Preciso aumentar a demanda de energia?"
                answer="Pode ser necessÃƒÂ¡rio. A Renovera avalia a carga existente, potÃƒÂªncia do carregador, simultaneidade, tensÃƒÂ£o de alimentaÃƒÂ§ÃƒÂ£o e exigÃƒÂªncias da concessionÃƒÂ¡ria."
              />

              <Faq
                question="O eletroposto pode ser integrado com energia solar?"
                answer="Sim. A geraÃƒÂ§ÃƒÂ£o solar pode reduzir custo energÃƒÂ©tico e melhorar a margem do projeto, mas deve ser analisada junto com o perfil de consumo e regras de conexÃƒÂ£o."
              />
            </div>
          </div>
        </section>

        <section className="finalCta">
          <div className="container finalCtaBox">
            <h2>Quer transformar a simulaÃƒÂ§ÃƒÂ£o em um estudo real?</h2>
            <p>
              A Renovera pode avaliar seu local, estimar o investimento,
              dimensionar a infraestrutura e indicar a melhor estratÃƒÂ©gia para o
              seu eletroposto.
            </p>
            <div className="finalActions">
              <a className="primaryButton" href={calculatorWhatsappLink} target="_blank" rel="noreferrer">
                Transformar simulaÃƒÂ§ÃƒÂ£o em estudo real
              </a>
              <a className="secondaryButton finalSecondaryButton" href={universalWhatsappLink} target="_blank" rel="noreferrer">
                Falar com especialista
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <img src={logoSrc} alt="Renovera" />
            <p>
              Engenharia, energia e mobilidade elÃƒÂ©trica para estruturar a nova
              infraestrutura de recarga no Brasil.
            </p>
          </div>

          <div>
            <h4>Menu</h4>
            <a href="#roi">SimulaÃ§Ã£o</a>
            <a href="#solucao">SoluÃ§Ã£o</a>
            <a href="#aplicacoes">AplicaÃ§Ãµes</a>
            <a href="#potencias">PotÃªncias</a>
          </div>

          <div>
            <h4>Contato</h4>
            <a href={whatsappLink} target="_blank">
              WhatsApp comercial
            </a>
            <a href="mailto:contato@renovera.com.br">contato@renovera.com.br</a>
          </div>

          <div>
            <h4>Compliance</h4>
            <p>
              Canal Ã©tico e confidencial para denÃºncias e comunicaÃ§Ãµes internas.
            </p>
            <a href="mailto:compliance@renovera.com.br">
              compliance@renovera.com.br
            </a>
          </div>

        </div>
        <div className="container copyright">
          Ã‚Â© 2026 Renovera. Todos os direitos reservados.
        </div>
      </footer>

      <a className="whatsappFloat" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com a Renovera no WhatsApp">
        <WhatsAppIcon />
      </a>
      <LiveEditor namespace="renovera-eletroposto" />
    </div>
  );
}

type ControlProps = {
  label: string;
  value: number;
  suffix: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  currency?: boolean;
  money?: boolean;
};

function Control({
  label,
  value,
  suffix,
  min,
  max,
  step,
  onChange,
  currency,
  money
}: ControlProps) {
  const progress = ((value - min) / (max - min)) * 100;

  let displayValue = `${value} ${suffix}`;

  if (currency) {
    displayValue = `${formatCurrencyDecimal(value)}/kWh`;
  }

  if (money) {
    displayValue = formatCurrency(value);
  }

  return (
    <div className="control">
      <div className="controlTop">
        <label>{label}</label>
        <strong>{displayValue}</strong>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ backgroundSize: `${progress}% 100%` }}
      />
    </div>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faqItem ${open ? "active" : ""}`}>
      <button onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <strong>{open ? "Ã¢Ë†â€™" : "+"}</strong>
      </button>

      {open && <p>{answer}</p>}
    </div>
  );
}

export default App;
