import Container from './components/Container';
import ProjectCard from './components/project/ProjectCard';
import torres_image from './assets/torres.png';
import evertical_image from './assets/evertical.png';
import controller_image from './assets/controller.png';
import metro_image from './assets/metro.png';
import RedeSocial from './components/rede_social/RedeSocial';

function App() {
  const msg1 = `
    Durante o meu último emprego como Analista de Software, minhas principais responsabilidades envolviam o desenvolvimento de telas no Desigo CC da Siemens e a criação de soluções de automação e gerenciamento de processos utilizando o Power Apps e Power Automate da Microsoft.

    Desenvolvimento de Telas no Desigo CC da Siemens: Fui responsável por programar telas utilizando o Desigo CC da Siemens. Isso envolveu a criação de interfaces de usuário eficientes e intuitivas para sistemas de automação farmacêutica.

    Escritório Inteligente com Power Apps e Power Automate: Também tive a oportunidade de desenvolver soluções de escritório inteligente utilizando o Power Apps e Power Automate da Microsoft. Isso incluiu a criação de aplicativos personalizados para automatizar processos de negócios e melhorar a eficiência operacional.

    Durante esse período, pude aprimorar minhas habilidades técnicas em programação e desenvolvimento de software, bem como ganhar experiência em trabalhar com ferramentas de automação de processos. Além disso, fui capaz de colaborar efetivamente com colegas de equipe e clientes para fornecer soluções de software de alta qualidade que atendessem às necessidades e expectativas do cliente.
  `;

  const msg2 = `
  Atuei como Técnico de Automação Predial Pleno com foco na implementação de soluções avançadas de automação para edifícios comerciais e industriais. Minha expertise se concentrou em sistemas de Gerenciamento de Edifícios (BMS) utilizando a plataforma Niagara. Principais Responsabilidades e Conquistas:

 Experiência com Controladores Johnson Controls e Honeywell: Liderei a programação e manutenção de controladores da Johnson Controls, incluindo PCA, PCG, CGM, UNT, VAV, XT9100 e DX, assim como os controladores Spyder da Honeywell. Esses sistemas foram fundamentais para o controle e monitoramento eficientes de sistemas de HVAC, iluminação e outros equipamentos em edifícios.

 Domínio em Sistemas BMS Niagara: Como especialista em sistemas BMS utilizando a plataforma Niagara, fui responsável pelo design, implementação e otimização de sistemas de automação predial. Isso incluiu a configuração de lógicas de controle avançadas e a integração de dispositivos de diferentes fabricantes para garantir a operação eficiente e econômica dos edifícios.

 Ampla Experiência em Diversos Sistemas de Automação Predial: Desenvolvi e executei programação e calibração de sensores ultrassônicos, sistemas de circuito de água gelada (CAG), Fan Coils, sistemas de VAV, sistemas de recalque de água, sistemas de exaustão, iluminação, subestações e controle de CO2. Minha experiência abrangente em uma variedade de sistemas me permitiu oferecer soluções adaptadas às necessidades específicas de cada projeto.

 Colaboração Efetiva e Gerenciamento de Projetos: Trabalhei em estreita colaboração com engenheiros, técnicos e clientes para garantir a entrega bem-sucedida de projetos de automação predial dentro do prazo e do orçamento estabelecidos. Meu compromisso com a excelência e minha capacidade de comunicação eficaz contribuíram para relacionamentos sólidos com clientes e colegas de equipe.
  `;

  const msg3 = `
  Como Auxiliar Técnico de Automação, fui responsável pela análise e operação de sistemas avançados de automação predial, proporcionando suporte essencial para garantir o funcionamento eficiente dos sistemas prediais.

Principais Responsabilidades:

 Análise e operação de sistemas de automação predial, incluindo controle de acesso utilizando plataformas como C-Cure e W-Acess, e sistemas de CFTV com Victor Player e IVMS 4000.
 Experiência na operação de sistemas de automação predial avançados, como Webstation Ax da Honeywell, que permite o controle e monitoramento remotos de HVAC, iluminação e outros sistemas prediais.
 Conhecimento em medição e gestão de energia utilizando a plataforma Gestal, contribuindo para a otimização do consumo de energia e a redução dos custos operacionais dos edifícios.

Com minha habilidade em operar e manter sistemas de automação predial avançados, estou preparado para enfrentar desafios e agregar valor como Auxiliar Técnico de Automação em futuras oportunidades.
  `;

  const msg4 = `
  Fui patrocinado pela Companhia do Metropolitano | METRO como Aprendiz de Eletrônica, onde tive a oportunidade de aprofundar meus conhecimentos em eletrônica analógica e digital, programação em C para Arduinos e outras habilidades essenciais para o campo da eletroeletrônica.

Fui introduzido ao Curso de Eletroeletrônica no SENAI ROBERTO SIMONSEN, onde adquiri uma sólida formação técnica em eletricidade e eletrônica. Durante o curso, concentrei-me em disciplinas fundamentais, como matemática básica e física, que forneceram uma base sólida para minha compreensão dos conceitos por trás da eletricidade.

Ao longo do curso, também fui introduzido às normas técnicas e regulamentos da indústria, garantindo que estivesse ciente das melhores práticas de segurança e qualidade. Combinando essas habilidades com o conhecimento em desenho técnico, pude interpretar e criar diagramas elétricos, esquemas de circuitos e planos de instalação, essenciais para a execução de projetos na área de eletroeletrônica.

Com uma formação abrangente em eletroeletrônica, estou preparado para ingressar no mercado de trabalho como um profissional qualificado em uma variedade de setores, incluindo automação industrial, telecomunicações, eletrônica de consumo, energia e muitos outros.
  `;

  return (
    <>
      <Container>
        <ProjectCard
          cargo="Analista de Software Jr. II"
          empresa="Torres CX"
          data="Setembro/2023 - maio/2024"
          more_info={msg1}
          src_img={torres_image}
        />
        <ProjectCard
          cargo="Técnico de Automação Predial Jr. III"
          empresa="Evertical Tecnologia"
          data="Março/2022 - Setembro/2024"
          more_info={msg2}
          src_img={evertical_image}
        />
        <ProjectCard
          cargo="Auxiliar Técnico de Automação Predial"
          empresa="Controller BMS"
          data="Outubro/2020 - Abril/2021"
          more_info={msg3}
          src_img={controller_image}
        />
        <ProjectCard
          cargo="Aprendiz de Eletrônica"
          empresa="METRÔ - Cia. del Metropolitano de São Paulo/SP"
          data="Jan/2016 - Dez/2017"
          more_info={msg4}
          src_img={metro_image}
        />
      </Container>
      <RedeSocial />
    </>
  );
}

export default App;
