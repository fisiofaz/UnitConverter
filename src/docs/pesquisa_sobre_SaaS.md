## **1. Tendências de UI para Micro Ferramentas (2026)**

#### **Bento Grid Layout:** Organize as seções em "caixas" com bordas arredondadas e fundos suaves. Isso separa bem o seletor de categoria da área de cálculo.

#### **Neumorphism Suave:** Use sombras sutis para dar profundidade aos botões e campos de entrada, fazendo-os parecer "físicos" e clicáveis.

##### **Glassmorphism:** Aplique um efeito de desfoque no fundo (```backdrop-filter: blur()```) no contêiner principal, dando um ar de modernidade e leveza.

#### **Micro-interações:** Pequenas animações (como o resultado brilhando levemente ao mudar) aumentam a percepção de qualidade do software.

<hr>

## **2. Exemplos de Referência para Inspiração**
```bash
Tipo de Interface	Por que usar como inspiração?
Google Converter	A simplicidade máxima. Dois campos, um dropdown e nada mais. É o padrão ouro de     
                    eficiência.
Convertio	        Ótimo uso de ícones para representar categorias (balança para peso, régua para 
                    comprimento).
Stripe Dashboard	Referência em tipografia e espaçamento (respiro). Use o estilo de fontes deles para
                    um visual SaaS sério.
Raycast/Linear      Se você quer algo "Dev-focused", use um tema escuro (Dark Mode) com bordas finas e 
                    cores de destaque neon.
```
<hr>

## **3. Guia Visual Sugerido**

Para o seu código CSS, considere este padrão que mescla o minimalismo com a tecnologia atual:

**Paleta de Cores (Modern SaaS)**

#### **Primária:** ```#6366f1``` (Indigo Moderno) - Para botões e destaques.

#### **Fundo:** ```#f8fafc``` (Slate Light) - Para evitar o branco puro que cansa a vista.

#### **Texto:** ```#1e293b``` (Deep Slate) - Excelente legibilidade.

**Tipografia**

Utilize fontes sem serifa modernas como **Inter** ou **Geist** (a fonte da Vercel). Elas transmitem precisão técnica.

```bash
/* Exemplo de elevação moderna para o card do conversor */
.converter-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```
<hr>

## **4. O "Pulo do Gato" (UX de Micro SaaS)**

Interfaces modernas de 2026 estão removendo o botão "Converter".

        Ação: Implemente a função de conversão no evento ```input```. Assim que o usuário digita o número "1", o "100cm" já aparece do outro lado instantaneamente.