const grafo = {
  "Av. Paulista, 1000": {
    "Rua Augusta, 500": { distancia: 2.3, tempo: 8 },
    "Rua Consolação, 200": { distancia: 1.5, tempo: 12 }
  },
  
  "Rua Augusta, 500": {
    "Av. Paulista, 1000": { distancia: 2.3, tempo: 8 },
    "Rua Oscar Freire, 100": { distancia: 1.8, tempo: 6 },
    "Alameda Santos, 300": { distancia: 1.2, tempo: 5 }
  },
  
  "Rua Consolação, 200": {
    "Av. Paulista, 1000": { distancia: 1.5, tempo: 12 },
    "Praça da República, 50": { distancia: 2.0, tempo: 15 },
    "Alameda Santos, 300": { distancia: 1.0, tempo: 7 }
  },
  
  "Rua Oscar Freire, 100": {
    "Rua Augusta, 500": { distancia: 1.8, tempo: 6 },
    "Shopping Iguatemi": { distancia: 3.5, tempo: 10 },
    "Av. Rebouças, 1500": { distancia: 2.2, tempo: 9 }
  },
  
  "Alameda Santos, 300": {
    "Rua Augusta, 500": { distancia: 1.2, tempo: 5 },
    "Rua Consolação, 200": { distancia: 1.0, tempo: 7 },
    "Av. Brigadeiro, 800": { distancia: 1.8, tempo: 6 },
    "Praça da República, 50": { distancia: 1.5, tempo: 10 }
  },
  
  "Praça da República, 50": {
    "Rua Consolação, 200": { distancia: 2.0, tempo: 15 },
    "Alameda Santos, 300": { distancia: 1.5, tempo: 10 },
    "Av. São João, 1200": { distancia: 1.0, tempo: 8 },
    "Terminal Parque Dom Pedro": { distancia: 2.5, tempo: 18 }
  },
  
  "Av. Brigadeiro, 800": {
    "Alameda Santos, 300": { distancia: 1.8, tempo: 6 },
    "Av. Ibirapuera, 2000": { distancia: 3.0, tempo: 11 },
    "Shopping Iguatemi": { distancia: 2.5, tempo: 8 }
  },
  
  "Shopping Iguatemi": {
    "Rua Oscar Freire, 100": { distancia: 3.5, tempo: 10 },
    "Av. Brigadeiro, 800": { distancia: 2.5, tempo: 8 },
    "Av. Ibirapuera, 2000": { distancia: 4.0, tempo: 12 },
    "Av. Rebouças, 1500": { distancia: 1.5, tempo: 5 }
  },
  
  "Av. Rebouças, 1500": {
    "Rua Oscar Freire, 100": { distancia: 2.2, tempo: 9 },
    "Shopping Iguatemi": { distancia: 1.5, tempo: 5 },
    "Marginal Pinheiros, Km 5": { distancia: 3.8, tempo: 14 }
  },
  
  "Av. Ibirapuera, 2000": {
    "Av. Brigadeiro, 800": { distancia: 3.0, tempo: 11 },
    "Shopping Iguatemi": { distancia: 4.0, tempo: 12 },
    "Parque Ibirapuera - Portão 2": { distancia: 1.0, tempo: 4 },
    "Terminal Parque Dom Pedro": { distancia: 5.5, tempo: 25 }
  },
  
  "Parque Ibirapuera - Portão 2": {
    "Av. Ibirapuera, 2000": { distancia: 1.0, tempo: 4 },
    "Av. São João, 1200": { distancia: 6.0, tempo: 28 }
  },
  
  "Av. São João, 1200": {
    "Praça da República, 50": { distancia: 1.0, tempo: 8 },
    "Terminal Parque Dom Pedro": { distancia: 2.0, tempo: 12 },
    "Parque Ibirapuera - Portão 2": { distancia: 6.0, tempo: 28 }
  },
  
  "Terminal Parque Dom Pedro": {
    "Praça da República, 50": { distancia: 2.5, tempo: 18 },
    "Av. São João, 1200": { distancia: 2.0, tempo: 12 },
    "Av. Ibirapuera, 2000": { distancia: 5.5, tempo: 25 },
    "Marginal Pinheiros, Km 5": { distancia: 8.0, tempo: 22 }
  },
  
  "Marginal Pinheiros, Km 5": {
    "Av. Rebouças, 1500": { distancia: 3.8, tempo: 14 },
    "Terminal Parque Dom Pedro": { distancia: 8.0, tempo: 22 }
  }
};

function encontrarMelhorRota(grafo, origem, destino, criterio) {
    // Validação básica
    if (!grafo[origem] || !grafo[destino]) {
        return null;
    }
    
    // Caso especial: origem = destino
    if (origem === destino) {
        return {
            caminho: [origem],
            distanciaTotal: 0,
            tempoTotal: 0,
            criterioUsado: criterio
        };
    }
    
    // Inicialização
    const distancias = {};
    const visitados = new Set();
    const predecessores = {};
    const vertices = Object.keys(grafo);
    
    // Inicializa todas as distâncias como infinito, exceto a origem
    vertices.forEach(vertice => {
        distancias[vertice] = Infinity;
    });
    distancias[origem] = 0;
    
    // Algoritmo de Dijkstra
    while (visitados.size < vertices.length) {
        // Encontra o vértice não visitado com menor distância
        let verticeAtual = null;
        let menorDistancia = Infinity;
        
        vertices.forEach(vertice => {
            if (!visitados.has(vertice) && distancias[vertice] < menorDistancia) {
                menorDistancia = distancias[vertice];
                verticeAtual = vertice;
            }
        });
        
        // Se não encontrou vértice ou a distância é infinita, para
        if (verticeAtual === null || distancias[verticeAtual] === Infinity) {
            break;
        }
        
        // Marca como visitado
        visitados.add(verticeAtual);
        
        // Se chegou no destino, pode parar
        if (verticeAtual === destino) {
            break;
        }
        
        // Atualiza as distâncias dos vizinhos
        const vizinhos = grafo[verticeAtual];
        for (let vizinho in vizinhos) {
            if (!visitados.has(vizinho)) {
                // Usa o critério escolhido (tempo ou distância)
                const pesoAresta = vizinhos[vizinho][criterio];
                const novaDistancia = distancias[verticeAtual] + pesoAresta;
                
                // Se encontrou um caminho melhor, atualiza
                if (novaDistancia < distancias[vizinho]) {
                    distancias[vizinho] = novaDistancia;
                    predecessores[vizinho] = verticeAtual;
                }
            }
        }
    }
    
    // Reconstrói o caminho do destino até a origem
    const caminho = [];
    let atual = destino;
    
    while (atual !== undefined) {
        caminho.unshift(atual); // Adiciona no início do array
        atual = predecessores[atual];
    }
    
    // Se o caminho não começa na origem, não há caminho válido
    if (caminho[0] !== origem) {
        return null;
    }
    
    // Calcula AMBAS as métricas (distância E tempo) do caminho encontrado
    let distanciaTotal = 0;
    let tempoTotal = 0;
    
    for (let i = 0; i < caminho.length - 1; i++) {
        const de = caminho[i];
        const para = caminho[i + 1];
        const aresta = grafo[de][para];
        
        distanciaTotal += aresta.distancia;
        tempoTotal += aresta.tempo;
    }
    
    return {
        caminho: caminho,
        distanciaTotal: distanciaTotal,
        tempoTotal: tempoTotal,
        criterioUsado: criterio
    };
}