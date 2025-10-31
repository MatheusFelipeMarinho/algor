/**
 * ALGORITMO DE DIJKSTRA - Caminho Mais Curto em Grafos
 *
 * O Algoritmo de Dijkstra encontra o caminho mais curto entre um nó inicial
 * e todos os outros nós em um grafo ponderado com pesos não-negativos.
 * É amplamente usado em sistemas de GPS, roteamento de redes, jogos, etc.
 *
 * Complexidade:
 * - Com array simples: O(V²) onde V = número de vértices
 * - Com heap/priority queue: O((V + E) log V) onde E = número de arestas
 * - Espaço: O(V) para armazenar distâncias e caminhos
 *
 * USE CASE: Sistema de Otimização de Rotas de Entrega
 * Encontra a rota mais rápida para entregas em uma cidade
 */

/**
 * Classe para representar um grafo ponderado
 */
class Graph {
    constructor() {
        this.nodes = new Map(); // Map de nó -> Map de vizinhos e pesos
        this.nodeNames = new Map(); // Map de ID -> nome descritivo
    }

    /**
     * Adiciona um nó ao grafo
     * @param {string} node - Identificador do nó
     * @param {string} name - Nome descritivo do nó
     */
    addNode(node, name = null) {
        if (!this.nodes.has(node)) {
            this.nodes.set(node, new Map());
            this.nodeNames.set(node, name || node);
        }
    }

    /**
     * Adiciona uma aresta bidirecional ao grafo
     * @param {string} node1 - Primeiro nó
     * @param {string} node2 - Segundo nó
     * @param {number} weight - Peso da aresta (distância, tempo, custo)
     */
    addEdge(node1, node2, weight) {
        // Garante que os nós existem
        this.addNode(node1);
        this.addNode(node2);

        // Adiciona aresta bidirecional
        this.nodes.get(node1).set(node2, weight);
        this.nodes.get(node2).set(node1, weight);
    }

    /**
     * Adiciona uma aresta unidirecional ao grafo
     * @param {string} from - Nó de origem
     * @param {string} to - Nó de destino
     * @param {number} weight - Peso da aresta
     */
    addDirectedEdge(from, to, weight) {
        this.addNode(from);
        this.addNode(to);
        this.nodes.get(from).set(to, weight);
    }

    /**
     * Retorna os vizinhos de um nó
     * @param {string} node - Nó a consultar
     * @returns {Map} Map de vizinhos e seus pesos
     */
    getNeighbors(node) {
        return this.nodes.get(node) || new Map();
    }

    /**
     * Retorna todos os nós do grafo
     * @returns {Array} Array com todos os nós
     */
    getAllNodes() {
        return Array.from(this.nodes.keys());
    }

    /**
     * Retorna o nome descritivo de um nó
     * @param {string} node - ID do nó
     * @returns {string} Nome descritivo
     */
    getNodeName(node) {
        return this.nodeNames.get(node) || node;
    }
}

/**
 * Implementação do Algoritmo de Dijkstra
 * @param {Graph} graph - Grafo a ser analisado
 * @param {string} start - Nó inicial
 * @param {string} end - Nó destino (opcional)
 * @returns {Object} Objeto com distâncias e caminhos para todos os nós
 */
function dijkstra(graph, start, end = null) {
    // Inicialização
    const distances = new Map(); // Distâncias mínimas conhecidas
    const previous = new Map();  // Nó anterior no caminho ótimo
    const unvisited = new Set(); // Nós ainda não visitados

    // Inicializa todas as distâncias como infinito
    for (const node of graph.getAllNodes()) {
        distances.set(node, Infinity);
        previous.set(node, null);
        unvisited.add(node);
    }

    // Distância do nó inicial para ele mesmo é 0
    distances.set(start, 0);

    // Processa enquanto houver nós não visitados
    while (unvisited.size > 0) {
        // Encontra o nó não visitado com menor distância
        let currentNode = null;
        let minDistance = Infinity;

        for (const node of unvisited) {
            if (distances.get(node) < minDistance) {
                minDistance = distances.get(node);
                currentNode = node;
            }
        }

        // Se não há caminho possível, para
        if (currentNode === null || minDistance === Infinity) {
            break;
        }

        // Se chegamos ao destino (se especificado), podemos parar
        if (end && currentNode === end) {
            break;
        }

        // Remove o nó atual dos não visitados
        unvisited.delete(currentNode);

        // Examina todos os vizinhos do nó atual
        const neighbors = graph.getNeighbors(currentNode);
        for (const [neighbor, weight] of neighbors) {
            if (unvisited.has(neighbor)) {
                // Calcula a nova distância através do nó atual
                const newDistance = distances.get(currentNode) + weight;

                // Se encontramos um caminho mais curto, atualiza
                if (newDistance < distances.get(neighbor)) {
                    distances.set(neighbor, newDistance);
                    previous.set(neighbor, currentNode);
                }
            }
        }
    }

    return { distances, previous };
}

/**
 * Reconstrói o caminho mais curto do início ao fim
 * @param {Map} previous - Map de nós anteriores do Dijkstra
 * @param {string} start - Nó inicial
 * @param {string} end - Nó final
 * @returns {Array} Array com o caminho (ou array vazio se não há caminho)
 */
function getPath(previous, start, end) {
    const path = [];
    let current = end;

    // Reconstrói o caminho do fim ao início
    while (current !== null) {
        path.unshift(current);
        current = previous.get(current);
    }

    // Se o caminho não começa no início, não há caminho válido
    if (path[0] !== start) {
        return [];
    }

    return path;
}

/**
 * Dijkstra com visualização passo a passo
 * @param {Graph} graph - Grafo a ser analisado
 * @param {string} start - Nó inicial
 * @param {string} end - Nó destino
 */
function dijkstraVisualized(graph, start, end) {
    console.log("\n🔹 DIJKSTRA - VISUALIZAÇÃO PASSO A PASSO 🔹\n");
    console.log(`Origem: ${graph.getNodeName(start)} (${start})`);
    console.log(`Destino: ${graph.getNodeName(end)} (${end})`);
    console.log("━".repeat(70));

    const distances = new Map();
    const previous = new Map();
    const unvisited = new Set();
    let step = 1;

    // Inicialização
    console.log("\n📍 Inicialização:");
    for (const node of graph.getAllNodes()) {
        distances.set(node, Infinity);
        previous.set(node, null);
        unvisited.add(node);
    }
    distances.set(start, 0);
    console.log(`   Distância inicial de ${graph.getNodeName(start)}: 0`);
    console.log(`   Todas as outras distâncias: ∞`);

    // Processa os nós
    while (unvisited.size > 0) {
        // Encontra o nó não visitado com menor distância
        let currentNode = null;
        let minDistance = Infinity;

        for (const node of unvisited) {
            if (distances.get(node) < minDistance) {
                minDistance = distances.get(node);
                currentNode = node;
            }
        }

        if (currentNode === null || minDistance === Infinity) {
            console.log("\n⚠️  Não há mais nós alcançáveis.");
            break;
        }

        console.log(`\n${"─".repeat(70)}`);
        console.log(`🔄 Passo ${step++}: Visitando ${graph.getNodeName(currentNode)} (${currentNode})`);
        console.log(`   Distância acumulada: ${distances.get(currentNode)}`);

        if (currentNode === end) {
            console.log(`   🎯 Chegamos ao destino!`);
            break;
        }

        unvisited.delete(currentNode);

        // Examina vizinhos
        const neighbors = graph.getNeighbors(currentNode);
        console.log(`   Vizinhos: ${neighbors.size}`);

        for (const [neighbor, weight] of neighbors) {
            if (unvisited.has(neighbor)) {
                const oldDistance = distances.get(neighbor);
                const newDistance = distances.get(currentNode) + weight;

                console.log(`\n   → Analisando vizinho: ${graph.getNodeName(neighbor)} (${neighbor})`);
                console.log(`     Custo da aresta: ${weight}`);
                console.log(`     Distância atual: ${oldDistance === Infinity ? '∞' : oldDistance}`);
                console.log(`     Nova distância: ${newDistance}`);

                if (newDistance < oldDistance) {
                    distances.set(neighbor, newDistance);
                    previous.set(neighbor, currentNode);
                    console.log(`     ✅ Atualizado! (via ${graph.getNodeName(currentNode)})`);
                } else {
                    console.log(`     ❌ Não atualizado (caminho atual é melhor)`);
                }
            }
        }
    }

    // Mostra resultado final
    console.log("\n" + "━".repeat(70));
    console.log("📊 RESULTADO FINAL:");

    const path = getPath(previous, start, end);
    const totalDistance = distances.get(end);

    if (path.length === 0) {
        console.log(`❌ Não há caminho de ${graph.getNodeName(start)} para ${graph.getNodeName(end)}`);
    } else {
        console.log(`\n✅ Caminho mais curto encontrado!`);
        console.log(`   Distância total: ${totalDistance}`);
        console.log(`\n   Rota:`);

        for (let i = 0; i < path.length; i++) {
            const node = path[i];
            const nodeName = graph.getNodeName(node);

            if (i === 0) {
                console.log(`   🏁 ${nodeName} (${node})`);
            } else if (i === path.length - 1) {
                const prevNode = path[i - 1];
                const segmentDistance = graph.getNeighbors(prevNode).get(node);
                console.log(`   ${"   ↓"} ${segmentDistance} unidades`);
                console.log(`   🎯 ${nodeName} (${node})`);
            } else {
                const prevNode = path[i - 1];
                const segmentDistance = graph.getNeighbors(prevNode).get(node);
                console.log(`   ${"   ↓"} ${segmentDistance} unidades`);
                console.log(`   📍 ${nodeName} (${node})`);
            }
        }
    }

    return { distances, previous, path, totalDistance };
}

/**
 * ═══════════════════════════════════════════════════════════
 * USE CASE: SISTEMA DE OTIMIZAÇÃO DE ROTAS DE ENTREGA
 * ═══════════════════════════════════════════════════════════
 *
 * Cenário: Uma empresa de entregas precisa encontrar as rotas
 * mais rápidas em uma cidade para otimizar suas entregas.
 */

/**
 * Cria um grafo representando o mapa de uma cidade
 * Os pesos representam o tempo em minutos entre os locais
 */
function criarMapaCidade() {
    const cidade = new Graph();

    // Adiciona locais da cidade
    cidade.addNode("CD", "Centro de Distribuição");
    cidade.addNode("R1", "Residência 1 - Bairro Norte");
    cidade.addNode("R2", "Residência 2 - Bairro Sul");
    cidade.addNode("R3", "Residência 3 - Centro");
    cidade.addNode("R4", "Residência 4 - Bairro Leste");
    cidade.addNode("R5", "Residência 5 - Bairro Oeste");
    cidade.addNode("PC", "Posto de Combustível");
    cidade.addNode("SM", "Supermercado");
    cidade.addNode("HO", "Hospital");

    // Adiciona rotas (arestas) com tempo em minutos
    cidade.addEdge("CD", "PC", 5);   // CD -> Posto: 5min
    cidade.addEdge("CD", "R3", 8);   // CD -> R3: 8min
    cidade.addEdge("CD", "SM", 10);  // CD -> Supermercado: 10min

    cidade.addEdge("PC", "R1", 7);   // Posto -> R1: 7min
    cidade.addEdge("PC", "R3", 6);   // Posto -> R3: 6min

    cidade.addEdge("R1", "R4", 9);   // R1 -> R4: 9min
    cidade.addEdge("R1", "HO", 12);  // R1 -> Hospital: 12min

    cidade.addEdge("R3", "R2", 4);   // R3 -> R2: 4min
    cidade.addEdge("R3", "SM", 7);   // R3 -> Supermercado: 7min

    cidade.addEdge("R2", "R5", 6);   // R2 -> R5: 6min
    cidade.addEdge("R2", "SM", 8);   // R2 -> Supermercado: 8min

    cidade.addEdge("R4", "HO", 5);   // R4 -> Hospital: 5min
    cidade.addEdge("R4", "R5", 11);  // R4 -> R5: 11min

    cidade.addEdge("SM", "R5", 9);   // Supermercado -> R5: 9min
    cidade.addEdge("SM", "HO", 15);  // Supermercado -> Hospital: 15min

    cidade.addEdge("R5", "HO", 10);  // R5 -> Hospital: 10min

    return cidade;
}

/**
 * Otimiza uma rota de entrega
 * @param {Graph} cidade - Grafo da cidade
 * @param {string} origem - Ponto de partida
 * @param {string} destino - Ponto de chegada
 * @param {boolean} visualizar - Se deve mostrar visualização detalhada
 */
function otimizarRotaEntrega(cidade, origem, destino, visualizar = false) {
    console.log("\n" + "═".repeat(70));
    console.log("🚚 SISTEMA DE OTIMIZAÇÃO DE ROTAS DE ENTREGA");
    console.log("═".repeat(70));

    if (visualizar) {
        return dijkstraVisualized(cidade, origem, destino);
    } else {
        const result = dijkstra(cidade, origem, destino);
        const path = getPath(result.previous, origem, destino);
        const totalDistance = result.distances.get(destino);

        console.log(`\nOrigem: ${cidade.getNodeName(origem)}`);
        console.log(`Destino: ${cidade.getNodeName(destino)}`);
        console.log(`\n✅ Rota otimizada encontrada!`);
        console.log(`Tempo total: ${totalDistance} minutos`);
        console.log(`\nCaminho: ${path.map(n => cidade.getNodeName(n)).join(" → ")}`);

        return { ...result, path, totalDistance };
    }
}

/**
 * Calcula rotas otimizadas para múltiplas entregas
 * @param {Graph} cidade - Grafo da cidade
 * @param {string} origem - Ponto de partida (ex: Centro de Distribuição)
 * @param {Array} destinos - Lista de destinos para entrega
 */
function calcularRotasMultiplasEntregas(cidade, origem, destinos) {
    console.log("\n" + "═".repeat(70));
    console.log("📦 PLANEJAMENTO DE MÚLTIPLAS ENTREGAS");
    console.log("═".repeat(70));

    console.log(`\nPonto de partida: ${cidade.getNodeName(origem)}`);
    console.log(`Entregas pendentes: ${destinos.length}`);

    const result = dijkstra(cidade, origem);
    let tempoTotal = 0;

    console.log("\n📋 LISTA DE ENTREGAS OTIMIZADAS:\n");

    destinos.forEach((destino, index) => {
        const path = getPath(result.previous, origem, destino);
        const tempo = result.distances.get(destino);
        tempoTotal += tempo;

        console.log(`${index + 1}. ${cidade.getNodeName(destino)}`);
        console.log(`   Tempo: ${tempo} minutos`);
        console.log(`   Rota: ${path.map(n => cidade.getNodeName(n)).join(" → ")}`);
        console.log();
    });

    console.log("━".repeat(70));
    console.log(`⏱️  Tempo total estimado: ${tempoTotal} minutos`);
    console.log(`📊 Tempo médio por entrega: ${(tempoTotal / destinos.length).toFixed(1)} minutos`);

    return { tempoTotal, rotas: destinos.map(d => getPath(result.previous, origem, d)) };
}

/**
 * Demonstração completa do sistema
 */
function demonstrarSistemaEntregas() {
    const cidade = criarMapaCidade();

    // Exemplo 1: Rota única com visualização
    console.log("\n\n🔸 EXEMPLO 1: Rota Única Detalhada");
    otimizarRotaEntrega(cidade, "CD", "HO", true);

    // Exemplo 2: Rota única sem visualização
    console.log("\n\n🔸 EXEMPLO 2: Rota Rápida");
    otimizarRotaEntrega(cidade, "CD", "R4", false);

    // Exemplo 3: Múltiplas entregas
    console.log("\n\n🔸 EXEMPLO 3: Múltiplas Entregas");
    const destinos = ["R1", "R2", "R4", "R5"];
    calcularRotasMultiplasEntregas(cidade, "CD", destinos);

    // Exemplo 4: Comparação de rotas
    console.log("\n\n🔸 EXEMPLO 4: Comparação de Rotas Alternativas");
    console.log("\n" + "═".repeat(70));
    console.log("Comparando diferentes rotas para o mesmo destino");
    console.log("═".repeat(70));

    const result = dijkstra(cidade, "CD");
    const todosNos = cidade.getAllNodes();

    console.log(`\nPartindo de: ${cidade.getNodeName("CD")}\n`);
    console.log("Destino".padEnd(35) + "Tempo".padEnd(10) + "Caminho");
    console.log("─".repeat(70));

    todosNos
        .filter(n => n !== "CD")
        .sort((a, b) => result.distances.get(a) - result.distances.get(b))
        .forEach(destino => {
            const path = getPath(result.previous, "CD", destino);
            const tempo = result.distances.get(destino);
            const tempoStr = tempo === Infinity ? "N/A" : `${tempo} min`;
            const pathStr = path.map(n => cidade.getNodeName(n)).join(" → ");

            console.log(
                cidade.getNodeName(destino).padEnd(35) +
                tempoStr.padEnd(10) +
                pathStr
            );
        });
}

/**
 * Exemplo de grafo simples para teste
 */
function exemploSimples() {
    console.log("\n" + "═".repeat(70));
    console.log("🔸 EXEMPLO BÁSICO: Grafo Simples");
    console.log("═".repeat(70));

    const grafo = new Graph();

    grafo.addNode("A", "Ponto A");
    grafo.addNode("B", "Ponto B");
    grafo.addNode("C", "Ponto C");
    grafo.addNode("D", "Ponto D");
    grafo.addNode("E", "Ponto E");

    grafo.addEdge("A", "B", 4);
    grafo.addEdge("A", "C", 2);
    grafo.addEdge("B", "C", 1);
    grafo.addEdge("B", "D", 5);
    grafo.addEdge("C", "D", 8);
    grafo.addEdge("C", "E", 10);
    grafo.addEdge("D", "E", 2);

    dijkstraVisualized(grafo, "A", "E");
}

// ═══════════════════════════════════════════════════════════
// EXECUÇÃO
// ═══════════════════════════════════════════════════════════

// Exemplo básico primeiro
exemploSimples();

// Demonstração completa do sistema de entregas
demonstrarSistemaEntregas();

// Exemplo de uso direto
console.log("\n\n" + "═".repeat(70));
console.log("      USO DIRETO DA FUNÇÃO DIJKSTRA");
console.log("═".repeat(70));

const cidade = criarMapaCidade();
const resultado = dijkstra(cidade, "CD", "HO");
const caminho = getPath(resultado.previous, "CD", "HO");

console.log("\nCaminho mais curto do CD ao Hospital:");
console.log("IDs:", caminho);
console.log("Locais:", caminho.map(n => cidade.getNodeName(n)));
console.log("Tempo total:", resultado.distances.get("HO"), "minutos");
