import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

const LOGO_URL = "/logo.jpg";
const EXPERT_HERO_URL = "/hero.jpg";
const EXPERT_PHOTO_URL = "/expert.jpg";

const TESTIMONIAL_URLS = [
  "/depoimento-01.avif",
  "/depoimento-02.avif",
  "/depoimento-03.avif",
  "/depoimento-04.avif",
  "/depoimento-05.avif",
];

export default function Home() {
  const offerRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* ===== SEÇÃO HERO ===== */}
      <section className="relative flex items-center justify-center py-20 overflow-hidden">
        {/* Background com gradiente */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Conteúdo esquerdo */}
            <div className="space-y-8 animate-slide-up">
              {/* Logo */}
              <img
                src={LOGO_URL}
                alt="Forrozeiro do Zero"
                className="h-24 md:h-32 w-auto"
              />

              {/* Headline */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Esqueça a Academia de Dança: Aprenda Forró do Zero em Casa, sozinho, ainda nesta semana.
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-orange-300 font-semibold">
                Em 3 aulas rápidas, você aprende a conduzir qualquer mulher no forró.
              </p>

              <p className="text-lg text-gray-300">
                Sem parceira pra treinar, sem aula presencial.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={scrollToOffer}
                  className="btn-cta group flex items-center gap-2"
                >
                  QUERO APRENDER A DANÇAR FORRÓ AGORA
                  <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Imagem hero (desktop à direita, mobile acima no mobile) */}
            <div className="hidden lg:flex justify-center items-center">
              <img
                src={EXPERT_HERO_URL}
                alt="Expert dançando forró"
                className="w-full max-w-md rounded-2xl shadow-2xl shadow-orange-500/30"
              />
            </div>
          </div>

          {/* Mobile: imagem acima do botão */}
          <div className="lg:hidden flex justify-center mt-12">
            <img
              src={EXPERT_HERO_URL}
              alt="Expert dançando forró"
              className="w-full max-w-xs rounded-2xl shadow-2xl shadow-orange-500/30"
            />
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO PROBLEMA ===== */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="section-title text-center">
              Quantas vezes você perdeu a chance de conhecer alguém só porque não sabia dançar?
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                A música começa. Ela está do outro lado da pista.
              </p>

              <p>
                Você olha. Ela olha. E aí vem aquela travada.
              </p>

              <p className="text-orange-200 font-semibold">
                "Ela vai achar que sou ruim." "Não sei nem por onde começar." "Vou passar vergonha."
              </p>

              <p>
                Então você finge que não viu. Fica parado com um copo de bebida na mão esperando uma hora que nunca chega.
              </p>

              <p>
                E ela acaba dançando com outro.
              </p>

              <p className="text-xl font-bold text-orange-400">
                Não é falta de talento. É falta de saber o que fazer.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-8 md:p-12 mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Mas e se eu te dissesse que existe uma forma diferente de aprender a dançar forró?
              </h3>

              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Porque existe um método simples que funciona como um atalho pra sair do zero.
                </p>

                <p>
                  E te mostra exatamente o que fazer a cada passo - como um mapa.
                </p>

                <p>
                  É ele que vai te permitir conduzir qualquer mulher na pista, mesmo sem nunca ter dançado.
                </p>

                <p className="text-2xl font-bold text-orange-400 mt-6">
                  Essa solução é o MÉTODO FDZ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO TRANSIÇÃO ===== */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              e antes que você diga:
            </p>

            <p className="text-2xl md:text-3xl font-bold text-orange-300 italic">
              "É impossível eu aprender a dançar, sou todo duro.",
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              permita que eu me apresente.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO EXPERT ===== */}
      <section className="py-12 md:py-16 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Foto do expert */}
            <div className="flex justify-center">
              <img
                src={EXPERT_PHOTO_URL}
                alt="Matheus Casbri"
                className="w-full max-w-sm rounded-2xl shadow-2xl shadow-orange-500/30"
              />
            </div>

            {/* Conteúdo */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Meu nome é Matheus Casbri
              </h2>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Sou professor de forró. Ensino iniciantes, inclusive os que juram ter dois pés esquerdos.
                </p>

                <p>
                  Já formei mais de 3.000 alunos em todo o Brasil e tenho mais de 100 mil seguidores nas redes.
                </p>

                <p>
                  Criei o método FDZ porque vi a mesma cena se repetir centenas de vezes: o homem que ama forró, sonha em aprender a dançar, mas tem vergonha de se expor e nunca teve uma parceira pra treinar.
                </p>

                <p>
                  Essa vergonha e essa falta de parceira são o que mais afasta um homem de aprender a dançar forró de verdade.
                </p>

                <p>
                  Não é falta de talento, é falta de um jeito de aprender sem precisar de parceira e sem se expor antes de estar pronto.
                </p>

                <p>
                  O método FDZ existe pra resolver exatamente isso.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-xl p-6 mt-8">
                <p className="text-xl font-bold text-orange-300">
                  Forrozeiro do Zero: o método de 3 capítulos que te ensina a conduzir qualquer mulher na pista de forró, mesmo que você nunca tenha dançado uma música na vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO CONTEÚDO DO CURSO ===== */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-16">Conheça aqui as aulas</h2>

          <div className="space-y-8">
            {/* Capítulos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Capítulo 1: A Base Mais Importante do Forró",
                  desc: "O fundamento que 90% dos iniciantes pula. Sem isso, o resto não funciona. Aqui você constrói a estrutura certa desde o início.",
                },
                {
                  title: "Capítulo 2: O Que Todo Mundo Quer Fazer Quando Dança",
                  desc: "Os movimentos que toda mulher espera sentir. Você vai aprender a fazer isso sem precisar pensar muito.",
                },
                {
                  title: "Capítulo 3: Tem que ter o 'Algo a Mais'",
                  desc: "A diferença entre o homem que dança bem e o homem que as mulheres querem dançar de novo.",
                },
              ].map((chapter, idx) => (
                <Card
                  key={idx}
                  className="card-dark hover:border-orange-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-orange-300">
                      {chapter.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {chapter.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Bônus */}
            <div className="mt-12 pt-12 border-t border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-8">Bônus Exclusivos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Bônus 1: Aprenda a Dançar Introduções",
                    desc: "Como começar a dança sem aquele início travado. Os primeiros segundos definem tudo.",
                  },
                  {
                    title: "Bônus 2: Aprenda a Dançar no Ritmo",
                    desc: "Como seu corpo sincroniza com qualquer música de forró, inclusive as mais rápidas.",
                  },
                ].map((bonus, idx) => (
                  <Card
                    key={idx}
                    className="card-dark border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-yellow-300">
                        {bonus.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {bonus.desc}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button
              onClick={scrollToOffer}
              className="btn-cta"
            >
              QUERO APRENDER A DANÇAR FORRÓ AGORA
            </button>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO DEPOIMENTOS ===== */}
      <section className="py-12 md:py-16 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-4">Uma semana de método, e ele já estava dançando na pista.</h2>
          <p className="text-center text-gray-300 text-lg mb-8">Veja o vídeo.</p>

          {/* VÍDEO VSL */}
          <div className="flex justify-center mb-12">
            <div style={{ margin: "0 auto", width: "100%", maxWidth: "400px" }} dangerouslySetInnerHTML={{
              __html: `<div id="ifr_6a3dfe3eb0bc99b90d6fd1ab_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;"><div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_6a3dfe3eb0bc99b90d6fd1ab_aspect"><iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6a3dfe3eb0bc99b90d6fd1ab" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/ff253a86-28e2-448c-9671-4142ad206bd6/players/6a3dfe3eb0bc99b90d6fd1ab/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe></div></div>`,
            }} />
          </div>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"; s.async=true; document.head.appendChild(s);`,
          }} />

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">O que os alunos falam:</h3>

            {/* Mural de depoimentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {TESTIMONIAL_URLS.map((url, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-slate-800 rounded-lg border-2 border-dashed border-orange-500/50 flex items-center justify-center overflow-hidden hover:border-orange-500 transition-all duration-300"
                >
                  <img
                    src={url}
                    alt={`Depoimento ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="text-gray-400 text-center p-4">
                    <p className="text-sm">Depoimento {idx + 1}</p>
                    <p className="text-xs text-gray-500">Aguardando imagem</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Depoimentos */}
          <div className="flex justify-center">
            <button
              onClick={scrollToOffer}
              className="btn-cta"
            >
              quero ter resultados como esses
            </button>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO OFERTA + GARANTIA ===== */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-16">Faça sua inscrição agora mesmo</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card Oferta (Esquerda) */}
            <Card className="card-dark border-orange-500/50 hover:border-orange-500 transition-all duration-300">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-orange-300">
                  Método Forrozeiro do Zero
                </h3>

                <div className="space-y-2">
                  <p className="text-gray-400 line-through">De: R$ 297,00</p>
                  <p className="text-4xl font-black text-orange-400">
                    Por: R$ 47 à vista
                  </p>
                  <p className="text-lg text-gray-300">
                    ou 12x de R$ 3,91
                  </p>
                </div>

                <div className="space-y-3 border-t border-orange-500/30 pt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold text-xl">✓</span>
                    <span className="text-gray-300">Acesso completo (3 capítulos)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold text-xl">✓</span>
                    <span className="text-gray-300">Bônus: Dançando Introduções</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold text-xl">✓</span>
                    <span className="text-gray-300">Bônus: Dançando no Ritmo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold text-xl">✓</span>
                    <span className="text-gray-300">Acesso por 1 ano</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold text-xl">✓</span>
                    <span className="text-gray-300">Grupo Exclusivo de alunos</span>
                  </div>
                </div>

                <a
                  href="https://pay.hotmart.com/G95549884X?off=r6x4ivid&bid=1782503850929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="btn-cta w-full">
                    QUERO ACESSAR AGORA
                  </button>
                </a>
              </div>
            </Card>

            {/* Card Garantia (Direita) */}
            <Card className="card-dark border-green-500/50 hover:border-green-500 transition-all duration-300">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-400">
                  Risco Zero
                </h3>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Como temos certeza que este curso é da mais alta qualidade, estamos te oferecendo uma garantia.
                  </p>

                  <p>
                    É muito simples, basta nos enviar um e-mail dentro do prazo de 7 dias que realizaremos 100% do reembolso do valor investido.
                  </p>

                  <p className="text-xl font-bold text-green-300 pt-4">
                    Você não tem risco nenhum.
                  </p>
                </div>


              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO FAQ ===== */}
      <section className="py-12 md:py-16 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-16">Ainda está com dúvidas?</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Preciso ter paceira pra treinar?",
                a: "Não. Você treina sozinho, no seu quarto ou na sala, e chega na pista pronto pra conduzir.",
              },
              {
                q: "E se eu não tiver ritmo?",
                a: "Ritmo é ensinável. O Bônus 2 é dedicado exatamente a isso.",
              },
              {
                q: "Sou mais velho. Vale ainda tentar?",
                a: "Nossos alunos têm entre 25 e 45 anos. Forró não tem prazo de validade.",
              },
              {
                q: "É gravado ou ao vivo?",
                a: "Gravado. Você acessa quando quiser, no seu ritmo, por 1 ano a partir da matrícula.",
              },
              {
                q: "Como recebo o acesso?",
                a: "Após o pagamento confirmado, você recebe um e-mail com as instruções.",
              },
              {
                q: "Quais formas de pagamento?",
                a: "Cartão de crédito, boleto e Pix.",
              },
              {
                q: "E se não gostar?",
                a: "7 dias de garantia. Pediu, devolvemos 100%.",
              },
            ].map((faq, idx) => (
              <Card
                key={idx}
                className="card-dark hover:border-orange-500/60 transition-all duration-300"
              >
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-orange-300">
                    {faq.q}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Final */}
          <div className="flex justify-center mt-16">
            <a
              href="https://pay.hotmart.com/G95549884X?off=r6x4ivid&bid=1782503850929"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-cta">
                QUERO ACESSAR O FORROZEIRO DO ZERO AGORA
              </button>
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
