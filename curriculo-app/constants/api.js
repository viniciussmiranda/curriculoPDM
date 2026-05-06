export const PESSOA_ID = 7;
export const BASE_URL = 'https://curriculo-express-sigma.vercel.app/';

export const dadosLocais = {
  pessoa: {
    nome: 'Vinicius Miranda',
    cargo: 'Estagiário de Redes | Dev em formação',
    email: 'viniciusmiranda99@gmail.com',
    telefone: '81986103538',
    linkedin: 'linkedin.com/in/viniciussmiranda',
    github: 'github.com/viniciussmiranda',
    resumo: 'Estudante de Sistemas para Internet na UNICAP e Estagiário de Infraestrutura e Redes no Grupo Moura. Técnico em Eletrônica pelo IFPE com experiência sólida em IoT.',
  },
  experiencias: [
    { id: 1, empresa: 'Grupo Moura', cargo: 'Estagiário de Redes', descricao: 'Infraestrutura e redes na empresa.', data_inicio: '2025-03-01', data_fim: null, atual: true },
    { id: 2, empresa: 'Combogó UNICAP', cargo: 'Projeto de Extensão (Voluntário)', descricao: 'Desenvolvimento de aplicação web institucional com React.', data_inicio: '2025-03-01', data_fim: '2025-07-01', atual: false },
    { id: 3, empresa: 'Parlacom Telecom M2M & IoT', cargo: 'Técnico em Eletrônica', descricao: 'Desenvolvedor de soluções IoT, configurações e manutenções de dispositivos.', data_inicio: '2023-07-01', data_fim: '2024-10-01', atual: false },
    { id: 4, empresa: 'FACEPE', cargo: 'Bolsista Extensionista', descricao: 'Desenvolvimento de luva robótica com ESP32 para crianças com mobilidade reduzida.', data_inicio: '2022-12-01', data_fim: '2023-03-01', atual: false },
    { id: 5, empresa: 'Mobs2', cargo: 'Estagiário Técnico em Eletrônica', descricao: 'Configuração de módulos, confecção de cabos, manutenção e soldagem.', data_inicio: '2022-07-01', data_fim: '2022-10-01', atual: false },
  ],
  formacoes: [
    { id: 1, instituicao: 'UNICAP', curso: 'Sistemas para Internet', grau: 'Curso Superior', data_inicio: '2024-07-01', data_fim: '2026-12-01', atual: true },
    { id: 2, instituicao: 'IFPE Campus Recife', curso: 'Técnico Integrado em Eletrônica', grau: 'Técnico', data_inicio: '2018-01-01', data_fim: '2022-12-01', atual: false },
  ],
  habilidades: [
    { id: 1, nome: 'React', nivel: 'Intermediário', categoria: 'Front-end' },
    { id: 2, nome: 'React Native', nivel: 'Básico', categoria: 'Mobile' },
    { id: 3, nome: 'Node.js', nivel: 'Intermediário', categoria: 'Back-end' },
    { id: 4, nome: 'PostgreSQL', nivel: 'Intermediário', categoria: 'Banco de Dados' },
    { id: 5, nome: 'IoT / ESP32', nivel: 'Avançado', categoria: 'Hardware' },
    { id: 6, nome: 'Redes / Infraestrutura', nivel: 'Intermediário', categoria: 'Infra' },
    { id: 7, nome: 'JavaScript', nivel: 'Intermediário', categoria: 'Linguagem' },
  ],
  projetos: [
    { id: 1, nome: 'Luva Robótica Lúdica', descricao: 'Hardware com ESP32 para assistência de crianças com mobilidade reduzida. Projeto FACEPE.', url: null, repositorio: null },
    { id: 2, nome: 'Site Institucional Combogó', descricao: 'Portfólio institucional desenvolvido com React como projeto de extensão na UNICAP.', url: null, repositorio: null },
    { id: 3, nome: 'API Currículo', descricao: 'API REST com Express + PostgreSQL hospedada no Vercel + NeonDB.', url: null, repositorio: 'github.com/viniciussmiranda/curriculoExpress' },
  ],
  certificados: [
    { id: 1, nome: 'Certificação em LoRaWan', emissor: '' },
    { id: 2, nome: 'Fortinet Certified Fundamentals in Cybersecurity', emissor: 'Fortinet' },
    { id: 3, nome: 'Cisco Networking Basics', emissor: 'Cisco' },
    { id: 4, nome: 'Oracle Next Education F2 T7 Front-end', emissor: 'Oracle / Alura' },
  ],
  idiomas: [
    { id: 1, idioma: 'Português', nivel: 'Nativo' },
    { id: 2, idioma: 'Inglês', nivel: 'Intermediário' },
    { id: 3, idioma: 'Espanhol', nivel: 'Básico' },
  ],
};
