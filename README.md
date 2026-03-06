# Droid7 - Framework7 Core Android Template

Este projeto é um template de aplicação mobile híbrida (PWA/TWA) focado na estética **Android (Material Design)**, utilizando a versão **Core (Vanilla JS)** do **Framework7 v9** com **TypeScript**, **Cordova** e **Codemagic**.

## 🚀 Estado Atual: Híbrido Cordova/PWA (TWA Style)

O app agora funciona como um wrapper Cordova que aponta diretamente para a VM (`163.176.132.233:3000`). O projeto foi convertido para CommonJS (removido `"type": "module"`) para garantir compatibilidade total com os scripts internos do Cordova CLI.

### ✅ Funcionalidades Implementadas:
- **Suporte Cordova:** Configurado via `config.xml` para conexão remota.
- **Compatibilidade CJS:** Removido o suporte nativo a ES Modules para rodar o `cordova-android` sem erros de API.
- **OTA Updates:** Mudanças feitas no código fonte da VM refletem instantaneamente no app mobile.
- **Workflow Codemagic:** Arquivo `codemagic.yaml` configurado para gerar APKs automaticamente.
- **Framework7 Core (v9):** Uso da versão Vanilla JS + TypeScript.
- **Modo Escuro (Dark Mode):** Suporte completo com alternância via toggle e persistência.

### 🛠️ Tecnologias Utilizadas:
- **Mobile Wrapper:** Cordova
- **CI/CD:** Codemagic
- **Build Tool:** Vite
- **Deploy:** Servidor de desenvolvimento acessível via IP público na porta `3000`.

---

## 🚦 Como Rodar e Compilar

### 🌐 Ambiente de Desenvolvimento (VM)
1. **Rodar o servidor web:**
   ```bash
   npm run dev
   ```
   *Mantenha este comando rodando para que o app mobile possa carregar o conteúdo.*

### 📱 Compilação do APK (Via Codemagic)
1. Conecte seu repositório Git ao **Codemagic**.
2. O arquivo `codemagic.yaml` será detectado automaticamente.
3. Inicie o workflow `android-debug-build` para gerar seu `app-debug.apk`.
4. O APK gerado sempre carregará o conteúdo atualizado da sua VM (`163.176.132.233:3000`).

---

## 📂 Arquivos de Configuração Mobile
- `config.xml`: Configurações do app Cordova e permissões de navegação.
- `codemagic.yaml`: Pipeline de compilação automatizada.

### 🎨 Ícones e Splash Screens
Por padrão, este template não inclui arquivos de imagem. Para adicionar ícones:
1. Crie o arquivo `www/res/icon/android/icon.png`.
2. Adicione a tag `<icon src="www/res/icon/android/icon.png" />` dentro de `<platform name="android">` no `config.xml`.


---
*Última atualização: 06 de Março de 2026*
