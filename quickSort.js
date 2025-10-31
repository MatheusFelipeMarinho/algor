/**
 * QUICK SORT - Algoritmo de Ordenação
 *
 * O Quick Sort é um algoritmo de ordenação eficiente que usa a estratégia
 * de divisão e conquista. Ele funciona selecionando um elemento 'pivô' e
 * particionando o array em dois subarrays: elementos menores que o pivô
 * e elementos maiores que o pivô. O processo é aplicado recursivamente.
 *
 * Complexidade:
 * - Melhor caso: O(n log n)
 * - Caso médio: O(n log n)
 * - Pior caso: O(n²) - quando o array já está ordenado e pivô é sempre o primeiro/último
 * - Espaço: O(log n) - devido à pilha de recursão
 */

/**
 * Função auxiliar para particionar o array
 * @param {number[]} arr - Array a ser particionado
 * @param {number} low - Índice inicial
 * @param {number} high - Índice final
 * @returns {number} Índice do pivô após particionamento
 */
function partition(arr, low, high) {
    // Escolhe o último elemento como pivô
    const pivot = arr[high];
    let i = low - 1; // Índice do menor elemento

    for (let j = low; j < high; j++) {
        // Se o elemento atual é menor ou igual ao pivô
        if (arr[j] <= pivot) {
            i++;
            // Troca arr[i] e arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Troca arr[i+1] e arr[high] (coloca o pivô na posição correta)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

/**
 * Implementação básica do Quick Sort
 * @param {number[]} arr - Array de números a ser ordenado
 * @param {number} low - Índice inicial (padrão: 0)
 * @param {number} high - Índice final (padrão: arr.length - 1)
 * @returns {number[]} Array ordenado
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // pi é o índice de particionamento, arr[pi] está na posição correta
        const pi = partition(arr, low, high);

        // Ordena os elementos antes e depois da partição
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }

    return arr;
}

/**
 * Função auxiliar para particionar com pivô aleatório
 * @param {number[]} arr - Array a ser particionado
 * @param {number} low - Índice inicial
 * @param {number} high - Índice final
 * @returns {number} Índice do pivô após particionamento
 */
function partitionRandomized(arr, low, high) {
    // Escolhe um índice aleatório como pivô
    const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;

    // Troca o elemento aleatório com o último elemento
    [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]];

    // Usa a função de partição padrão
    return partition(arr, low, high);
}

/**
 * Quick Sort otimizado com pivô aleatório
 * Reduz a probabilidade de pior caso (O(n²))
 * @param {number[]} arr - Array de números a ser ordenado
 * @param {number} low - Índice inicial (padrão: 0)
 * @param {number} high - Índice final (padrão: arr.length - 1)
 * @returns {number[]} Array ordenado
 */
function quickSortRandomized(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partitionRandomized(arr, low, high);

        quickSortRandomized(arr, low, pi - 1);
        quickSortRandomized(arr, pi + 1, high);
    }

    return arr;
}

/**
 * Quick Sort com visualização passo a passo
 * Mostra cada etapa do processo de ordenação
 * @param {number[]} arr - Array de números a ser ordenado
 */
function quickSortVisualized(arr) {
    console.log("\n🔹 QUICK SORT - VISUALIZAÇÃO PASSO A PASSO 🔹\n");
    console.log("Array inicial:", arr);
    console.log("━".repeat(50));

    let recursionLevel = 0;
    let totalComparisons = 0;
    let totalSwaps = 0;
    let stepNumber = 1;

    function partitionVisualized(arr, low, high, level) {
        const indent = "  ".repeat(level);
        console.log(`\n${indent}📍 Passo ${stepNumber++}: Particionando [${arr.slice(low, high + 1).join(", ")}]`);

        const pivot = arr[high];
        console.log(`${indent}   Pivô escolhido: ${pivot}`);

        let i = low - 1;

        for (let j = low; j < high; j++) {
            totalComparisons++;
            console.log(`${indent}   Comparando: ${arr[j]} ≤ ${pivot}?`);

            if (arr[j] <= pivot) {
                i++;
                if (i !== j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    totalSwaps++;
                    console.log(`${indent}   ↔️  Trocou ${arr[j]} com ${arr[i]}`);
                } else {
                    console.log(`${indent}   ✓  Manteve (já está na posição correta)`);
                }
            } else {
                console.log(`${indent}   ✗  Não trocou (maior que pivô)`);
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        totalSwaps++;
        console.log(`${indent}   🎯 Pivô ${pivot} colocado na posição ${i + 1}`);
        console.log(`${indent}   Array atual: [${arr.join(", ")}]`);

        return i + 1;
    }

    function quickSortRecursive(arr, low, high, level) {
        if (low < high) {
            const indent = "  ".repeat(level);
            console.log(`${indent}🔽 Nível ${level}: Ordenando subarray [${low}..${high}]`);

            const pi = partitionVisualized(arr, low, high, level);

            console.log(`${indent}   Esquerda: [${low}..${pi - 1}], Direita: [${pi + 1}..${high}]`);

            quickSortRecursive(arr, low, pi - 1, level + 1);
            quickSortRecursive(arr, pi + 1, high, level + 1);
        }
    }

    quickSortRecursive(arr, 0, arr.length - 1, 0);

    console.log("\n" + "━".repeat(50));
    console.log("✅ Array final ordenado:", arr);
    console.log(`📊 Estatísticas:`);
    console.log(`   • Comparações: ${totalComparisons}`);
    console.log(`   • Trocas: ${totalSwaps}`);
    console.log(`   • Profundidade da recursão: ${Math.ceil(Math.log2(arr.length))}`);

    return arr;
}

/**
 * Demonstração interativa do funcionamento
 */
function demonstrarQuickSort() {
    console.log("═".repeat(60));
    console.log("      DEMONSTRAÇÃO DO ALGORITMO QUICK SORT");
    console.log("═".repeat(60));

    // Exemplo 1: Array desordenado
    console.log("\n🔸 EXEMPLO 1: Array Completamente Desordenado");
    const arr1 = [64, 34, 25, 12, 22, 11, 90];
    quickSortVisualized([...arr1]);

    // Exemplo 2: Array pequeno
    console.log("\n\n🔸 EXEMPLO 2: Array Pequeno");
    const arr2 = [5, 2, 8, 1, 9];
    quickSortVisualized([...arr2]);

    // Exemplo 3: Array com elementos repetidos
    console.log("\n\n🔸 EXEMPLO 3: Array com Elementos Repetidos");
    const arr3 = [3, 7, 3, 1, 7];
    quickSortVisualized([...arr3]);

    // Exemplo 4: Array com números negativos
    console.log("\n\n🔸 EXEMPLO 4: Array com Números Negativos");
    const arr4 = [3, -1, 7, -5, 2];
    quickSortVisualized([...arr4]);

    // Comparação de performance
    console.log("\n\n" + "═".repeat(60));
    console.log("      COMPARAÇÃO: Quick Sort vs Quick Sort Randomizado");
    console.log("═".repeat(60));

    // Teste com array aleatório
    const testArray = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
    console.log("\n📋 Testando com array de 1000 elementos aleatórios");

    // Teste com versão básica
    const start1 = performance.now();
    quickSort([...testArray]);
    const end1 = performance.now();

    // Teste com versão randomizada
    const start2 = performance.now();
    quickSortRandomized([...testArray]);
    const end2 = performance.now();

    console.log(`\n⏱️  Tempo Quick Sort básico: ${(end1 - start1).toFixed(4)}ms`);
    console.log(`⏱️  Tempo Quick Sort randomizado: ${(end2 - start2).toFixed(4)}ms`);

    // Teste com array já ordenado (pior caso para Quick Sort básico)
    console.log("\n📋 Testando com array já ordenado (1000 elementos)");
    const sortedArray = Array.from({length: 1000}, (_, i) => i);

    const start3 = performance.now();
    quickSort([...sortedArray]);
    const end3 = performance.now();

    const start4 = performance.now();
    quickSortRandomized([...sortedArray]);
    const end4 = performance.now();

    console.log(`\n⏱️  Tempo Quick Sort básico: ${(end3 - start3).toFixed(4)}ms`);
    console.log(`⏱️  Tempo Quick Sort randomizado: ${(end4 - start4).toFixed(4)}ms`);
    console.log(`💡 Note a diferença no pior caso!`);
}

/**
 * Função auxiliar para testar com arrays customizados
 * @param {number[]} arr - Array customizado para ordenar
 */
function testarComArray(arr) {
    console.log("\n🧪 Testando com array customizado:");
    quickSortVisualized([...arr]);
}

/**
 * Comparação com outros algoritmos de ordenação
 */
function compararAlgoritmos() {
    console.log("\n\n" + "═".repeat(60));
    console.log("      COMPARAÇÃO COM OUTROS ALGORITMOS");
    console.log("═".repeat(60));

    const sizes = [100, 500, 1000, 5000];

    sizes.forEach(size => {
        console.log(`\n📊 Testando com ${size} elementos:`);
        const testArray = Array.from({length: size}, () => Math.floor(Math.random() * size));

        // Quick Sort
        const start = performance.now();
        quickSort([...testArray]);
        const end = performance.now();

        console.log(`   Quick Sort: ${(end - start).toFixed(4)}ms`);
        console.log(`   Complexidade: O(n log n) = O(${size} × ${Math.log2(size).toFixed(2)}) ≈ ${(size * Math.log2(size)).toFixed(0)} operações`);
    });
}

// ═══════════════════════════════════════════════════════════
// EXECUÇÃO
// ═══════════════════════════════════════════════════════════

// Executar demonstração completa
demonstrarQuickSort();

// Comparação de complexidade
compararAlgoritmos();

// Exemplos de uso direto das funções
console.log("\n\n" + "═".repeat(60));
console.log("      EXEMPLOS DE USO DIRETO DAS FUNÇÕES");
console.log("═".repeat(60));

const exemplo1 = [5, 2, 8, 1, 9];
console.log("\nOriginal:", exemplo1);
console.log("Ordenado:", quickSort([...exemplo1]));

const exemplo2 = [100, 50, 25, 75];
console.log("\nOriginal:", exemplo2);
console.log("Ordenado:", quickSortRandomized([...exemplo2]));

// Teste personalizado (descomente para usar)
// testarComArray([seu, array, aqui]);
