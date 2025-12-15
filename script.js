// Dicionário de Traduções
const translations = {
    pt: {
        hero_subtitle: "Desenvolvedora Backend | AI Trainer",
        nav_about: "Sobre",
        about_title: "ME CONHEÇA:",
        about_p1: "Sou a Mariana, uma profissional apaixonada por inovação e soluções que impactam usuários reais. Atualmente sou estudante da graduação em Análise e Desenvolvimento de Sistemas na Unisinos, onde busco sempre conhecimento amplo e viés humanizado em processos relacionados à tecnologia.",
        about_p2: "Ao longo da minha trajetória profissional prévia, desenvolvi habilidades como agilidade na resolução de problemas complexos e foco no cliente, além de pensamento estratégico para lidar com questões técnicas.",
        about_p3: "No meu momento de carreira atual, estou desenvolvendo habilidades relacionadas à Desenvolvimento Backend e soluções Cloud (como o mundo de DevOps).",
        education_title: "Formação Acadêmica",
        education_degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        lang_title: "idiomas",
        lang_en: "Inglês Avançado",
        lang_others: "Espanhol e Alemão em progresso",
        cert_title: "Certificações",
        cert_sap_desc: "Cursos e certificações no ecossistema SAP.",
        cert_coursera_desc: "Especializações e cursos técnicos diversos.",
        tools_title: "Ferramentas",
        tools_stack: "Stack Técnica",
        tools_cloud: "Ferramentas & Cloud",
        exp_title: "Experiência profissional",
        
        job1_title: "Maharudh AI – AI Trainer Specialist (Voice) | Índia – remoto | Setembro – presente",
        job1_desc: "Posição de trabalho freelancer (empresa India-based). Nesta posição, atuo como Trainer, onde gravo áudios em português e inglês para recursos de voz de LLMs, garantindo naturalidade para falantes nativos.",
        
        job2_title: "Invisible Technologies – Portuguese Language Specialist | EUA – remoto | Julho – Presente",
        job2_desc: "Posição de trabalho freelancer (empresa US-based). Nesta posição, atuo como Trainer e como QA, onde avalio se prompts e suas respostas atendem critérios linguísticos, como coerência com o contexto, naturalidade para um falante nativo, gramática correta, escrita, tom de voz, dentre outros aspectos - e como QA verifico se os demais agentes estão seguindo as diretrizes de cada campanha e se suas respostas são coerentes com os critérios mencionados acima. Já trabalhei em projetos para avaliar modelos da OpenAI e Google Gemini.",
        
        job3_title: "Brasil Distrib. de Lubrificantes – Estagiária em Suporte Técnico | presencial | Abril – Agosto 2025",
        job3_desc: "Nesta posição, prestei suporte no HESK garantindo agilidade e foco no cliente, atendi tickets internos e priorizei nível crítico de incidentes, diminuindo o índice de tempo de atendimento em 70%. Resolvi problemas relacionados a faturas, produtos e dados de funcionários no sistema TOTVS Protheus, criei documentação técnica em inglês para todos os casos e KBAs para resolução e desenvolvi habilidades em depuração de código e consultas no banco de dados SQL da empresa. Realizei manutenção básica e verificação de erros no Power BI da empresa. Além disso, colaborei com a equipe para sugerir melhorias no sistema e em processos relacionados à tecnologia.",
        
        job4_title: "BL BPO – Assistente de Atendimento iPlace Corp. | Abril 2024 – Abril 2024",
        job4_desc: "Atendimento ao cliente B2B e suporte técnico N1, resolução de tickets no CRM do setor, verificação fiscal, monitoramento de solicitações via Whatsapp e E-mail, Follow-up com clientes (Posição de trabalho temporária)",

        projects_title: "Projetos",
        proj_dev_title: "Projetos de Desenvolvimento",
        proj_dev_desc: "Confira meus repositórios e códigos no GitHub.",
        proj_ai_desc: "Colaboração em projetos através de rotulagem de dados, RLHF (Aprendizado por Reforço a partir de Feedback Humano) e garantia de qualidade para modelos de IA generativa.",
        
        contact_title: "Contato",
        footer_rights: "© 2024 Mariana Rocha. Todos os direitos reservados."
    },
    en: {
        hero_subtitle: "Backend Developer | AI Trainer",
        nav_about: "About",
        about_title: "GET TO KNOW ME:",
        about_p1: "I am Mariana, a professional passionate about innovation and solutions that impact real users. Currently, I am an undergraduate student in Systems Analysis and Development at Unisinos, where I always seek broad knowledge and a humanized approach in technology-related processes.",
        about_p2: "Throughout my previous professional trajectory, I developed skills such as agility in solving complex problems and customer focus, as well as strategic thinking to deal with technical issues.",
        about_p3: "In my current career moment, I am developing skills related to Backend Development and Cloud solutions (such as the world of DevOps).",
        education_title: "Education",
        education_degree: "Associate's in Systems Analysis and Development",
        lang_title: "languages",
        lang_en: "Advanced English",
        lang_others: "Spanish and German in progress",
        cert_title: "Certifications",
        cert_sap_desc: "Courses and certifications in the SAP ecosystem.",
        cert_coursera_desc: "Specializations and diverse technical courses.",
        tools_title: "Tools",
        tools_stack: "Tech Stack",
        tools_cloud: "Tools & Cloud",
        exp_title: "Professional Experience",

        job1_title: "Maharudh AI – AI Trainer Specialist (Voice) | India – remote | September – present",
        job1_desc: "Freelance position (India-based company). In this role, I act as a Trainer, recording audio in Portuguese and English for LLM voice resources, ensuring naturalness for native speakers.",

        job2_title: "Invisible Technologies – Portuguese Language Specialist | USA – remote | July – Present",
        job2_desc: "Freelance position (US-based company). In this role, I act as a Trainer and QA, assessing whether prompts and responses meet linguistic criteria such as contextual coherence, native-speaker naturalness, correct grammar, writing style, tone of voice, among other aspects. As QA, I verify if other agents are following campaign guidelines and if their responses align with the mentioned criteria. I have worked on projects evaluating OpenAI and Google Gemini models.",

        job3_title: "Brasil Distrib. de Lubrificantes – Tech Support Intern | On-site | April – August 2025",
        job3_desc: "In this position, I provided support on HESK ensuring agility and customer focus, handled internal tickets, and prioritized critical incidents, reducing service time by 70%. I resolved issues related to invoices, products, and employee data in the TOTVS Protheus system, created technical documentation in English for all cases and KBAs for resolution, and developed skills in code debugging and SQL database queries. I performed basic maintenance and error verification in the company's Power BI. Additionally, I collaborated with the team to suggest improvements in the system and technology-related processes.",

        job4_title: "BL BPO – iPlace Corp. Customer Service Assistant | April 2024 – April 2024",
        job4_desc: "B2B customer service and N1 technical support, ticket resolution in the sector's CRM, fiscal verification, monitoring of requests via WhatsApp and E-mail, Client Follow-up (Temporary position).",

        projects_title: "Projects",
        proj_dev_title: "Development Projects",
        proj_dev_desc: "Check out my repositories and code on GitHub.",
        proj_ai_desc: "Collaboration on projects through data labeling, RLHF (Reinforcement Learning from Human Feedback), and quality assurance for generative IA models.",

        contact_title: "Contact",
        footer_rights: "© 2024 Mariana Rocha. All rights reserved."
    }
};

// Imagens da Timeline
const timelineImages = {
    pt: "linhatempo.png",
    en: "linhatempo-en.png" // O script tentará buscar essa imagem
};

let currentLang = 'pt'; // Idioma inicial

function toggleLanguage() {
    const btn = document.querySelector('.lang-btn');
    
    // Alterna o estado do idioma
    if (currentLang === 'pt') {
        currentLang = 'en';
        btn.innerText = 'PT'; // Muda o texto do botão
    } else {
        currentLang = 'pt';
        btn.innerText = 'EN';
    }

    // Chama a função que atualiza a tela
    updateContent();
}

function updateContent() {
    // 1. Atualiza Textos
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });

    // 2. Atualiza Imagem da Timeline
    const timelineImg = document.getElementById('timeline-img');
    if (timelineImg) {
        if (currentLang === 'en') {
            timelineImg.src = timelineImages.en;
            // Se a imagem em inglês não existir, volta para a PT para não quebrar
            timelineImg.onerror = function() {
                this.src = timelineImages.pt;
                console.log("Imagem EN não encontrada, mantendo PT.");
            };
        } else {
            timelineImg.src = timelineImages.pt;
        }
    }
}

// 3. Event Listener (A parte mais importante para funcionar externamente)
// Isso garante que o JS só rode depois que o HTML (e o botão) existirem
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.lang-btn');
    
    if (btn) {
        btn.addEventListener('click', toggleLanguage);
        console.log("Botão de tradução carregado com sucesso!");
    } else {
        console.error("ERRO: Botão .lang-btn não encontrado no HTML.");
    }
});