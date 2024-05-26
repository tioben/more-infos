import Container from './components/Container';
import ProjectCard from './components/project/ProjectCard';
import torres_image from './assets/torres.png';
import evertical_image from './assets/evertical.png';
import controller_image from './assets/controller.png';
import metro_image from './assets/metro.png';
import fatec_image from './assets/fatec.png';
import etec_image from './assets/etec.png';
import senai_image from './assets/senai.png';

import RedeSocial from './components/rede_social/RedeSocial';
import Title from './components/title/Title';

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

  const msg5 = `1. Fundamentos de Eletricidade e Eletrônica

  Teoria e Prática de Circuitos Elétricos: Estudo de circuitos resistivos, capacitivos e indutivos, com aplicação prática em montagens de circuitos.
  Análise de Componentes Eletrônicos: Identificação e uso de resistores, capacitores, diodos, transistores e outros componentes básicos em projetos eletrônicos.

2. Programação e Automação

  Programação em C para Arduino: Desenvolvimento de projetos utilizando a plataforma Arduino, com ênfase na programação em linguagem C para controle de hardware.
  Automação Predial: Introdução a sistemas de automação predial, incluindo programação de controladores lógicos programáveis (CLPs) e integração com sistemas de gerenciamento predial.

3. Desenho Técnico e Interpretação de Esquemas

  Desenho Técnico Eletrônico: Criação e interpretação de diagramas elétricos e esquemas de circuitos, utilizando ferramentas de desenho técnico.
  Normas Técnicas e Regulamentações: Estudo das normas e regulamentações técnicas aplicáveis ao setor de eletroeletrônica, garantindo conformidade com padrões de segurança e qualidade.

4. Projetos Práticos e Montagens

  Montagem de Circuitos Eletrônicos: Desenvolvimento de projetos práticos envolvendo a montagem e teste de circuitos eletrônicos, como fontes de alimentação, amplificadores e controladores.
  Calibração e Manutenção de Equipamentos: Práticas de calibração e manutenção de equipamentos eletrônicos, garantindo o funcionamento correto e eficiente dos dispositivos.

5. Energia e Sustentabilidade

  Gestão e Medição de Energia: Utilização de plataformas como Gestal para medição e gestão de energia, visando a otimização do consumo energético e a redução de custos operacionais.
  Soluções Sustentáveis em Eletrônica: Implementação de soluções eletrônicas voltadas para a sustentabilidade, como sistemas de energia renovável e tecnologias de eficiência energética.

6. Projeto Final e Integração de Conhecimentos

  Desenvolvimento de um Projeto Integrador: Realização de um projeto final que integra os conhecimentos adquiridos ao longo do curso, envolvendo desde a concepção e desenho até a montagem e programação de um sistema eletrônico completo.
  Trabalho em Equipe e Gestão de Projetos: Colaboração com colegas em projetos de grupo, aplicando técnicas de gestão de projetos para garantir a entrega eficiente e dentro dos prazos estabelecidos.

Destaque em Programação

A programação foi um dos focos principais durante o curso, especialmente no desenvolvimento de projetos utilizando Arduino. A programação em C permitiu a criação de soluções customizadas para diversas aplicações, desde automação residencial até projetos de eficiência energética, consolidando habilidades essenciais para o mercado de trabalho na área de eletroeletrônica.`;
  const msg6 = `1. Fundamentos de Eletrônica:

  Eletrônica Analógica: Estudo dos componentes eletrônicos básicos como resistores, capacitores, indutores, diodos e transistores. Montagem e análise de circuitos eletrônicos analógicos, como amplificadores e filtros.
  Eletrônica Digital: Compreensão de lógica digital, portas lógicas, flip-flops, contadores e registradores. Projetos e implementação de circuitos digitais utilizando circuitos integrados.

2. Programação:

  Programação em C para Microcontroladores: Desenvolvimento de habilidades em programação utilizando a linguagem C para microcontroladores, permitindo a criação de sistemas embarcados e controle de hardware.
  Desenvolvimento com Arduino: Projetos práticos utilizando a plataforma Arduino, envolvendo a programação de sensores, atuadores e interfaces de comunicação.
  Programação de Interfaces Gráficas: Criação de interfaces gráficas para interação com sistemas eletrônicos, utilizando ferramentas e bibliotecas apropriadas.

3. Sistemas Embarcados:

  Desenvolvimento de Sistemas Embarcados: Projeto e implementação de sistemas embarcados para diversas aplicações, como automação residencial, controle industrial e dispositivos IoT.
  Interface Homem-Máquina (IHM): Desenvolvimento de interfaces de usuário para a interação com sistemas eletrônicos e monitoramento de processos.

4. Projeto e Montagem de Circuitos:

  Design de PCB (Placas de Circuito Impresso): Desenvolvimento de habilidades no design de PCBs utilizando software especializado, montagem e testes de protótipos.
  Soldagem e Montagem de Circuitos: Técnicas de soldagem de componentes eletrônicos e montagem de circuitos em placas de prototipagem e PCBs.

5. Automação e Controle:

  Sistemas de Automação: Estudo e implementação de sistemas de automação utilizando controladores lógicos programáveis (CLPs) e microcontroladores.
  Sensores e Atuadores: Integração de sensores e atuadores em sistemas de controle, incluindo sensores de temperatura, umidade, luminosidade e motores.

6. Instrumentação e Medidas:

  Instrumentação Eletrônica: Utilização de instrumentos de medição eletrônica, como osciloscópios, multímetros e analisadores lógicos para testes e diagnósticos de circuitos.
  Calibração de Equipamentos: Procedimentos de calibração de equipamentos eletrônicos para garantir a precisão e confiabilidade das medições.

7. Projetos Práticos e Trabalhos em Equipe:

  Desenvolvimento de Projetos: Participação em projetos práticos que envolvem todas as etapas de desenvolvimento, desde a concepção até a implementação e testes.
  Trabalhos em Equipe: Colaboração com colegas em projetos e atividades práticas, desenvolvendo habilidades de comunicação e trabalho em equipe.

Esse curso proporcionou uma formação abrangente e sólida em eletrônica, preparando os alunos para atuar em diversas áreas da indústria eletrônica, desde o desenvolvimento de hardware e software até a automação e controle de sistemas.`;
  const msg7 = `1. Fundamentos de Programação:

  Lógica de Programação: Estudo dos conceitos fundamentais de lógica de programação, algoritmos, fluxogramas e pseudocódigo.
  Linguagens de Programação: Aprendizado de diversas linguagens de programação, como Java, C#, Python e JavaScript, com foco em práticas de codificação e boas práticas de desenvolvimento.

2. Desenvolvimento de Software:

  Desenvolvimento Web: Criação de aplicações web utilizando tecnologias como HTML, CSS, JavaScript, React e frameworks backend como Node.js e ASP.NET.
  Desenvolvimento Mobile: Construção de aplicações móveis para plataformas Android e iOS utilizando ferramentas como React Native e Kotlin.
  Desenvolvimento de Sistemas Desktop: Implementação de sistemas desktop utilizando linguagens como Java (Swing/JavaFX) e C# (WPF).

3. Análise de Sistemas:

  Análise de Requisitos: Técnicas de levantamento e documentação de requisitos, incluindo entrevistas, questionários e análise de documentos.
  Modelagem de Sistemas: Utilização de ferramentas de modelagem como UML (Unified Modeling Language) para criar diagramas de casos de uso, classes, sequência, entre outros.

4. Banco de Dados:

  Modelagem de Dados: Criação de modelos de dados conceituais, lógicos e físicos utilizando diagramas entidade-relacionamento.
  SGBDs: Experiência com sistemas de gerenciamento de banco de dados como MySQL, PostgreSQL e SQL Server, incluindo comandos SQL para criação, consulta e manipulação de dados.
  NoSQL: Introdução a bancos de dados NoSQL, como MongoDB, explorando suas características e aplicações.

5. Engenharia de Software:

  Metodologias Ágeis: Aprendizado de metodologias ágeis como Scrum e Kanban, incluindo a utilização de ferramentas como Jira e Trello para gestão de projetos.
  Qualidade de Software: Técnicas de garantia de qualidade de software, incluindo testes de software (unitários, de integração e de sistema) e uso de ferramentas como JUnit e Selenium.

6. Infraestrutura e Redes:

  Sistemas Operacionais: Estudo de sistemas operacionais como Windows e Linux, focando em administração e comandos básicos.
  Redes de Computadores: Conceitos de redes de computadores, incluindo topologias, protocolos, configuração de dispositivos de rede e segurança.

7. Projetos Práticos:

  Projetos Integradores: Desenvolvimento de projetos integradores que simulam situações reais de mercado, permitindo a aplicação prática dos conhecimentos adquiridos durante o curso.
  Trabalhos em Equipe: Colaboração com colegas em projetos e atividades práticas, desenvolvendo habilidades de comunicação, liderança e trabalho em equipe.

8. Estágio Supervisionado:

  Experiência Profissional: Realização de estágio supervisionado em empresas parceiras, proporcionando experiência prática no desenvolvimento de software e análise de sistemas em um ambiente corporativo.

Esse curso oferece uma formação completa e atualizada em Análise e Desenvolvimento de Sistemas, preparando os alunos para atuar em diversas áreas da tecnologia da informação, desde o desenvolvimento de aplicações web e móveis até a gestão de projetos e análise de sistemas.`;

  return (
    <>
      <Title msg="carreira profissional" fontcolor="#007acc" />
      <Container>
        <ProjectCard
          fontcolor="#007acc"
          cargo="Analista de Software Jr. II"
          empresa="Torres CX"
          data="Setembro/2023 - maio/2024"
          more_info={msg1}
          src_img={torres_image}
        />
        <ProjectCard
          fontcolor="#007acc"
          cargo="Técnico de Automação Predial Jr. III"
          empresa="Evertical Tecnologia"
          data="Março/2022 - Setembro/2024"
          more_info={msg2}
          src_img={evertical_image}
        />
        <ProjectCard
          fontcolor="#007acc"
          cargo="Auxiliar Técnico de Automação Predial"
          empresa="Controller BMS"
          data="Outubro/2020 - Abril/2021"
          more_info={msg3}
          src_img={controller_image}
        />
        <ProjectCard
          fontcolor="#007acc"
          cargo="Aprendiz de Eletrônica"
          empresa="METRÔ - Cia. del Metropolitano de São Paulo/SP"
          data="Jan/2016 - Dez/2017"
          more_info={msg4}
          src_img={metro_image}
        />
      </Container>
      <Title msg="carreira acadêmica" fontcolor="#d10c15" />
      <Container>
        <ProjectCard
          fontcolor="#d10c15"
          cargo="Análise e Desenvolvimento de Sistemas"
          empresa="FATEC-SP"
          data="1SEM/2022 - cursando"
          more_info={msg7}
          src_img={fatec_image}
        />
        <ProjectCard
          fontcolor="#d10c15"
          cargo="Técnico em Eletrônica"
          empresa="ETEC Prof. Aprígio Gonzaga"
          data="1SEM/2016 - 2SEM/2017"
          more_info={msg6}
          src_img={etec_image}
        />
        <ProjectCard
          fontcolor="#d10c15"
          cargo="Técnico em eletroeletrônica"
          empresa="SENAI Prof. Roberto Simonsen"
          data="1SEM/2016 - 2SEM/2017"
          more_info={msg5}
          src_img={senai_image}
        />
      </Container>
      <RedeSocial />
    </>
  );
}

export default App;
