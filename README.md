# 📡 Monitor de Qualidade de Internet

Aplicativo mobile desenvolvido como projeto acadêmico para o curso de **Análise e Desenvolvimento de Sistemas**.

O app permite que o usuário selecione um modelo de Inteligência Artificial, visualize a previsão de qualidade da conexão de internet na sua região e verifique se a rede suporta atividades como chamadas de vídeo e streaming.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| [React Native](https://reactnative.dev/) | Framework para desenvolvimento mobile multiplataforma |
| [Expo SDK](https://docs.expo.dev/) | Plataforma de build e execução do app |
| [Expo Router](https://docs.expo.dev/router/introduction/) | Navegação entre telas baseada em arquivos |
| [Axios](https://axios-http.com/) | Cliente HTTP para requisições à API |
| [@expo/vector-icons](https://icons.expo.fyi/) | Biblioteca de ícones (Feather) |
| [@react-native-community/datetimepicker](https://github.com/react-native-datetimepicker/datetimepicker) | Seletor nativo de data e hora |
| TypeScript | Tipagem estática do código |

---

## 📱 Telas do Aplicativo

### Tela 1 — Seleção de Modelo (`/`)
- Lista todos os modelos de IA disponíveis na API.
- Exibe nome do modelo e tipo de algoritmo em cartões clicáveis.
- Ao clicar em um modelo, navega para a Tela de Previsão.

### Tela 2 — Previsão de Qualidade (`/forecast`)
- Exibe a qualidade esperada da conexão com uma pílula colorida:
  - 🟢 **Boa** — conexão estável
  - 🟡 **Moderada** — conexão com possíveis instabilidades
  - 🔴 **Instável** — conexão com problemas
- Mostra a latência prevista (ms) e a perda de pacotes (%).
- Exibe a distância do sensor de rede de referência.
- Botão para navegar à Tela de Atividades.

### Tela 3 — Verificar Atividade (`/activity`)
- O usuário escolhe a atividade que pretende realizar: **Chamada de Vídeo** ou **Assistir Streaming**.
- O usuário seleciona a **data e hora** desejada com um calendário nativo.
- O app faz uma requisição `POST` para a API e exibe um alerta nativo indicando se a rede suporta a atividade ou não.

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [Expo Go](https://expo.dev/go) instalado no celular (Android ou iOS)
- API do professor rodando na rede local

### Passo a Passo

**1. Clone o repositório e instale as dependências:**
```bash
git clone <url-do-repositorio>
cd net-status
npm install
```

**2. Configure a URL da API:**

Abra o arquivo `src/services/api.ts` e atualize o `baseURL` com o IP do servidor da API:
```typescript
baseURL: 'http://<IP-DA-API>:8000'
```

> ⚠️ O IP deve ser o endereço da máquina que está rodando a API **na mesma rede Wi-Fi** do celular. Nunca use `127.0.0.1` ou `localhost` em um dispositivo físico.

**3. Inicie o servidor da API (FastAPI) com o parâmetro de host:**
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

**4. Inicie o servidor do Expo:**
```bash
npx expo start
```

**5.** Abra o **Expo Go** no celular e escaneie o QR Code exibido no terminal.

---

## 📂 Estrutura de Arquivos

```
net-status/
├── src/
│   ├── app/                  # Telas (Expo Router)
│   │   ├── _layout.tsx       # Configuração do navegador
│   │   ├── index.tsx         # Tela 1: Seleção de Modelo
│   │   ├── forecast.tsx      # Tela 2: Previsão de Qualidade
│   │   └── activity.tsx      # Tela 3: Verificação de Atividade
│   ├── services/
│   │   └── api.ts            # Configuração do cliente HTTP (Axios)
│   └── styles/               # Arquivos de estilização
│       ├── HomeScreen.ts
│       ├── forecast.ts
│       └── activity.ts
├── app.json                  # Configurações do Expo
└── package.json
```

---

## 🔌 Métodos HTTP Utilizados

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/v1/models` | Lista todos os modelos disponíveis |
| `GET` | `/api/v1/forecasts/nearby` | Busca a previsão de qualidade por localização |
| `POST` | `/api/v1/activity/check` | Verifica se a rede suporta uma atividade específica |

---

## 👨‍💻 Desenvolvido por

Projeto acadêmico — Análise e Desenvolvimento de Sistemas
