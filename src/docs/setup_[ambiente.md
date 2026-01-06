# 🛠 Setup do Ambiente e Configuração Inicial

Este documento descreve as etapas necessárias para configurar, executar e contribuir com o projeto **UnitConverter**.

## 1. Visão Geral do Projeto
O UnitConverter é uma ferramenta web minimalista projetada para converter unidades de medida (Comprimento, Temperatura, Massa) com foco em velocidade e facilidade de uso.

## 2. Pré-requisitos
Para desenvolver ou testar este projeto localmente, você precisará de:
* **Editor de Código:** Visual Studio Code (recomendado), Sublime Text ou Atom.
* **Navegador:** Google Chrome, Firefox ou Edge (versões atualizadas).
* **Git:** Para controle de versão e sincronização com o repositório.

## 3. Estrutura de Pastas
A estrutura inicial foi configurada da seguinte forma:
```text
UnitConverter/
├── docs/
│   └── setup_ambiente.md    # Este arquivo de documentação
├── css/
│   └── styles.css           # Estilização da interface
├── js/
│   └── main.js             # Lógica de conversão e eventos
├── .gitignore               # Arquivos ignorados pelo Git
├── index.html               # Ponto de entrada da aplicação
└── README.md                # Descrição geral do repositório`
```
## 4. Instalação e Execução

* **Clonar o Repositório:**
```bash
git clone [https://github.com/seu-usuario/UnitConverter.git](https://github.com/seu-usuario/UnitConverter.git)
cd UnitConverter
```
* **Abrir o Projeto:** Abra a pasta no seu editor de preferência. No VS Code, você pode usar:
```bash
code .
```
* **Executar Localmente:**
#### Recomenda-se o uso da extensão Live Server no VS Code.

#### Clique com o botão direito em index.html e selecione "Open with Live Server".

#### A ferramenta será aberta automaticamente no seu navegador padrão

## 5. Fluxo de Trabalho e Componentes

A interface foi construída integrando três pilares fundamentais:

#### **Entrada de Dados:** ```input``` do tipo numérico.

#### **Seleção de Contexto:** ```select``` (dropdown) para definir a categoria e as unidades.

#### **Exibição:** Área de resultado com atualização em tempo real via JavaScript.

<hr>

Documentação atualizada em Janeiro de 2026.