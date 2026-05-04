# 📱 Currículo App – Vinicius Miranda

App de portfólio desenvolvido com **React Native + Expo** para a disciplina de Dispositivos Móveis da UNICAP.

---

## 🚀 Como rodar

### 1. Instale as dependências
```bash
npm install
```

### 2. Configure a URL da API
Edite o arquivo `constants/api.js` e troque:
```js
const BASE_URL = 'https://SEU-PROJETO.vercel.app/api';
const PESSOA_ID = 2; // ID da sua pessoa no banco
```

### 3. Rode o app
```bash
npx expo start
```

Escaneie o QR Code com o **Expo Go** no celular ou pressione:
- `a` para Android
- `i` para iOS
- `w` para Web

---

## 📂 Estrutura

```
app/
├── _layout.jsx          ← Layout raiz (Provider de tema)
├── index.jsx            ← Redirect para tabs
└── (tabs)/
    ├── _layout.jsx      ← Navegação por abas
    ├── index.jsx        ← Home / Perfil
    ├── profissional.jsx ← Experiência Profissional
    ├── academico.jsx    ← Experiência Acadêmica
    ├── projetos.jsx     ← Projetos
    └── sobre.jsx        ← Sobre o App
constants/
├── theme.js             ← Temas claro e escuro
└── api.js               ← Serviço de API + dados locais
hooks/
└── useAppTheme.js       ← Context de tema
```

---

## 🎨 Design

- **Cores:** `#315a7b` (azul) + `#f7e7bd` (creme)
- **Biblioteca:** React Native Paper (Material Design 3)
- **Funcionalidade extra:** Modo escuro/claro global

## 🛠️ Tecnologias

- React Native + Expo ~51
- Expo Router ~3.5
- React Native Paper ^5.12
- Express.js (back-end)
- PostgreSQL + NeonDB
- Vercel (deploy)
