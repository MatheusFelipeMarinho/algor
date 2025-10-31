# Visualização do Grafo - Algoritmo de Dijkstra

Este documento apresenta a visualização do grafo usado no exemplo prático de otimização de rotas de entrega do arquivo `dijkstra.js`.

## 📍 Mapa da Cidade - Grafo Completo

```mermaid
graph TB
    CD[Centro de Distribuição<br/>CD]
    PC[Posto de Combustível<br/>PC]
    R1[Residência 1<br/>Bairro Norte]
    R2[Residência 2<br/>Bairro Sul]
    R3[Residência 3<br/>Centro]
    R4[Residência 4<br/>Bairro Leste]
    R5[Residência 5<br/>Bairro Oeste]
    SM[Supermercado<br/>SM]
    HO[Hospital<br/>HO]

    CD ---|5 min| PC
    CD ---|8 min| R3
    CD ---|10 min| SM

    PC ---|7 min| R1
    PC ---|6 min| R3

    R1 ---|9 min| R4
    R1 ---|12 min| HO

    R3 ---|4 min| R2
    R3 ---|7 min| SM

    R2 ---|6 min| R5
    R2 ---|8 min| SM

    R4 ---|5 min| HO
    R4 ---|11 min| R5

    SM ---|9 min| R5
    SM ---|15 min| HO

    R5 ---|10 min| HO

    style CD fill:#4CAF50,stroke:#2E7D32,color:#fff
    style HO fill:#f44336,stroke:#c62828,color:#fff
```

## 🚚 Exemplo 1: Rota Otimizada (CD → Hospital)

Caminho mais curto: **CD → PC → R1 → HO** (24 minutos)

```mermaid
graph TB
    CD[🏁 Centro de Distribuição<br/>CD<br/>Distância: 0]
    PC[📍 Posto de Combustível<br/>PC<br/>Distância: 5]
    R1[📍 Residência 1<br/>Bairro Norte<br/>Distância: 12]
    R2[Residência 2<br/>Bairro Sul]
    R3[Residência 3<br/>Centro]
    R4[Residência 4<br/>Bairro Leste]
    R5[Residência 5<br/>Bairro Oeste]
    SM[Supermercado<br/>SM]
    HO[🎯 Hospital<br/>HO<br/>Distância: 24]

    CD ===|✅ 5 min| PC
    CD ---|8 min| R3
    CD ---|10 min| SM

    PC ===|✅ 7 min| R1
    PC ---|6 min| R3

    R1 ===|✅ 12 min| HO
    R1 ---|9 min| R4

    R3 ---|4 min| R2
    R3 ---|7 min| SM

    R2 ---|6 min| R5
    R2 ---|8 min| SM

    R4 ---|5 min| HO
    R4 ---|11 min| R5

    SM ---|9 min| R5
    SM ---|15 min| HO

    R5 ---|10 min| HO

    style CD fill:#4CAF50,stroke:#2E7D32,stroke-width:4px,color:#fff
    style PC fill:#2196F3,stroke:#1565C0,stroke-width:4px,color:#fff
    style R1 fill:#2196F3,stroke:#1565C0,stroke-width:4px,color:#fff
    style HO fill:#f44336,stroke:#c62828,stroke-width:4px,color:#fff
```

## 🎯 Exemplo 2: Rota Otimizada (CD → R4)

Caminho mais curto: **CD → PC → R1 → R4** (21 minutos)

```mermaid
graph TB
    CD[🏁 Centro de Distribuição<br/>CD<br/>Distância: 0]
    PC[📍 Posto de Combustível<br/>PC<br/>Distância: 5]
    R1[📍 Residência 1<br/>Bairro Norte<br/>Distância: 12]
    R2[Residência 2<br/>Bairro Sul]
    R3[Residência 3<br/>Centro]
    R4[🎯 Residência 4<br/>Bairro Leste<br/>Distância: 21]
    R5[Residência 5<br/>Bairro Oeste]
    SM[Supermercado<br/>SM]
    HO[Hospital<br/>HO]

    CD ===|✅ 5 min| PC
    CD ---|8 min| R3
    CD ---|10 min| SM

    PC ===|✅ 7 min| R1
    PC ---|6 min| R3

    R1 ===|✅ 9 min| R4
    R1 ---|12 min| HO

    R3 ---|4 min| R2
    R3 ---|7 min| SM

    R2 ---|6 min| R5
    R2 ---|8 min| SM

    R4 ---|5 min| HO
    R4 ---|11 min| R5

    SM ---|9 min| R5
    SM ---|15 min| HO

    R5 ---|10 min| HO

    style CD fill:#4CAF50,stroke:#2E7D32,stroke-width:4px,color:#fff
    style PC fill:#2196F3,stroke:#1565C0,stroke-width:4px,color:#fff
    style R1 fill:#2196F3,stroke:#1565C0,stroke-width:4px,color:#fff
    style R4 fill:#f44336,stroke:#c62828,stroke-width:4px,color:#fff
```

## 📊 Tabela de Distâncias Mínimas

A partir do **Centro de Distribuição (CD)**:

| Destino | Tempo (min) | Caminho |
|---------|-------------|---------|
| Posto de Combustível (PC) | 5 | CD → PC |
| Residência 3 - Centro (R3) | 8 | CD → R3 |
| Supermercado (SM) | 10 | CD → SM |
| Residência 1 - Bairro Norte (R1) | 12 | CD → PC → R1 |
| Residência 2 - Bairro Sul (R2) | 12 | CD → R3 → R2 |
| Residência 5 - Bairro Oeste (R5) | 18 | CD → R3 → R2 → R5 |
| Residência 4 - Bairro Leste (R4) | 21 | CD → PC → R1 → R4 |
| Hospital (HO) | 24 | CD → PC → R1 → HO |

## 🎨 Exemplo 3: Múltiplas Rotas Visualizadas

Visualização de todas as rotas a partir do Centro de Distribuição:

```mermaid
graph TB
    CD[🏁 Centro de Distribuição<br/>CD]

    subgraph "Zona Norte"
        PC[Posto de Combustível<br/>5 min]
        R1[Residência 1<br/>12 min]
    end

    subgraph "Zona Centro"
        R3[Residência 3<br/>8 min]
        SM[Supermercado<br/>10 min]
    end

    subgraph "Zona Sul"
        R2[Residência 2<br/>12 min]
        R5[Residência 5<br/>18 min]
    end

    subgraph "Zona Leste"
        R4[Residência 4<br/>21 min]
        HO[Hospital<br/>24 min]
    end

    CD --> PC
    CD --> R3
    CD --> SM

    PC --> R1
    R1 --> R4
    R1 --> HO

    R3 --> R2
    R2 --> R5

    R4 --> HO

    style CD fill:#4CAF50,stroke:#2E7D32,color:#fff
    style PC fill:#FFD700,stroke:#FFA500,color:#000
    style R1 fill:#FFD700,stroke:#FFA500,color:#000
    style R3 fill:#87CEEB,stroke:#4682B4,color:#000
    style SM fill:#87CEEB,stroke:#4682B4,color:#000
    style R2 fill:#FF69B4,stroke:#FF1493,color:#fff
    style R5 fill:#FF69B4,stroke:#FF1493,color:#fff
    style R4 fill:#DDA0DD,stroke:#BA55D3,color:#000
    style HO fill:#DDA0DD,stroke:#BA55D3,color:#000
```

## 📈 Grafo de Exemplo Simples

Este é o grafo usado no exemplo básico do código:

```mermaid
graph LR
    A[Ponto A]
    B[Ponto B]
    C[Ponto C]
    D[Ponto D]
    E[Ponto E]

    A ---|4| B
    A ---|2| C
    B ---|1| C
    B ---|5| D
    C ---|8| D
    C ---|10| E
    D ---|2| E

    style A fill:#4CAF50,stroke:#2E7D32,color:#fff
    style E fill:#f44336,stroke:#c62828,color:#fff
```

**Caminho mais curto de A até E**: A → C → B → D → E (10 unidades)

```mermaid
graph LR
    A[🏁 Ponto A<br/>Dist: 0]
    B[📍 Ponto B<br/>Dist: 3]
    C[📍 Ponto C<br/>Dist: 2]
    D[📍 Ponto D<br/>Dist: 8]
    E[🎯 Ponto E<br/>Dist: 10]

    A ---|4| B
    A ===|✅ 2| C
    B ---|1| C
    B ===|✅ 5| D
    C ===|✅ 1| B
    C ---|8| D
    C ---|10| E
    D ===|✅ 2| E

    style A fill:#4CAF50,stroke:#2E7D32,stroke-width:4px,color:#fff
    style B fill:#2196F3,stroke:#1565C0,stroke-width:4px,color:#fff
    style C fill:#2196F3,stroke:#1565C0,stroke-width:4px,color:#fff
    style D fill:#2196F3,stroke:#1565C0,stroke-width:4px,color:#fff
    style E fill:#f44336,stroke:#c62828,stroke-width:4px,color:#fff
```

## 🔍 Legenda

- **🏁** = Ponto de partida (origem)
- **🎯** = Destino
- **📍** = Ponto intermediário na rota ótima
- **===** = Aresta usada no caminho mais curto
- **---** = Aresta não usada no caminho ótimo
- **Verde** = Nó inicial
- **Vermelho** = Nó destino
- **Azul** = Nós no caminho ótimo

## 💡 Como Usar

Para visualizar estes diagramas:

1. **GitHub**: Os diagramas Mermaid são renderizados automaticamente no GitHub
2. **VS Code**: Instale a extensão "Markdown Preview Mermaid Support"
3. **Online**: Use o [Mermaid Live Editor](https://mermaid.live)
4. **Obsidian**: Suporte nativo para Mermaid
5. **Notion**: Suporte nativo para Mermaid

## 📝 Estrutura do Código

O grafo é criado no arquivo `dijkstra.js` usando:

```javascript
const cidade = new Graph();

// Adiciona locais
cidade.addNode("CD", "Centro de Distribuição");
cidade.addNode("PC", "Posto de Combustível");
// ... outros nós

// Adiciona rotas com tempos
cidade.addEdge("CD", "PC", 5);   // CD ↔ PC: 5 minutos
cidade.addEdge("CD", "R3", 8);   // CD ↔ R3: 8 minutos
// ... outras arestas
```

## 🎓 Complexidade

- **Temporal**: O(V²) com array simples, O((V + E) log V) com priority queue
- **Espacial**: O(V) para armazenar distâncias e caminhos

Onde:

- V = Número de vértices (9 no exemplo da cidade)
- E = Número de arestas (16 no exemplo da cidade)

---

**Gerado a partir de**: `dijkstra.js`
**Algoritmo**: Dijkstra - Caminho Mais Curto em Grafos
**Use Case**: Sistema de Otimização de Rotas de Entrega
