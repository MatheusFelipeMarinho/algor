/**
 * BUBBLE SORT - Algoritmo de Ordenação
 *
 * O Bubble Sort é um algoritmo de ordenação simples que percorre repetidamente
 * a lista, compara elementos adjacentes e os troca se estiverem na ordem errada.
 * O algoritmo recebe o nome porque os elementos maiores "flutuam" para o final
 * da lista como bolhas.
 *
 * Complexidade:
 * - Melhor caso: O(n) - quando já está ordenado
 * - Caso médio: O(n²)
 * - Pior caso: O(n²)
 * - Espaço: O(1) - ordena in-place
 */

/**
 * Implementação básica do Bubble Sort
 * @param {number[]} arr - Array de números a ser ordenado
 * @returns {number[]} Array ordenado
 */
function bubbleSort(arr) {
    const n = arr.length;

    // Loop externo: controla o número de passagens
    for (let i = 0; i < n - 1; i++) {
        // Loop interno: compara elementos adjacentes
        for (let j = 0; j < n - i - 1; j++) {
            // Se o elemento atual é maior que o próximo, troca
            if (arr[j] > arr[j + 1]) {
                // Troca os elementos
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

/**
 * Bubble Sort otimizado com flag de verificação
 * Para quando não há mais trocas (array já ordenado)
 * @param {number[]} arr - Array de números a ser ordenado
 * @returns {number[]} Array ordenado
 */
function bubbleSortOptimized(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // Flag para verificar se houve troca

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Marca que houve troca
            }
        }

        // Se não houve troca, o array já está ordenado
        if (!swapped) {
            break;
        }
    }

    return arr;
}

/**
 * Bubble Sort com visualização passo a passo
 * Mostra cada etapa do processo de ordenação
 * @param {number[]} arr - Array de números a ser ordenado
 */
function bubbleSortVisualized(arr) {
    console.log("\n🔹 BUBBLE SORT - VISUALIZAÇÃO PASSO A PASSO 🔹\n");
    console.log("Array inicial:", arr);
    console.log("━".repeat(50));

    const n = arr.length;
    let passNumber = 1;
    let totalComparisons = 0;
    let totalSwaps = 0;

    for (let i = 0; i < n - 1; i++) {
        console.log(`\n📍 Passagem ${passNumber}:`);
        let swappedInPass = false;

        for (let j = 0; j < n - i - 1; j++) {
            totalComparisons++;

            console.log(`   Comparando: ${arr[j]} e ${arr[j + 1]}`);

            if (arr[j] > arr[j + 1]) {
                // Troca os elementos
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                totalSwaps++;
                swappedInPass = true;
                console.log(`   ↔️  Trocou! Novo array: [${arr.join(", ")}]`);
            } else {
                console.log(`   ✓  Manteve (já está em ordem)`);
            }
        }

        if (!swappedInPass) {
            console.log(`   🎯 Nenhuma troca nesta passagem - Array ordenado!`);
            break;
        }

        passNumber++;
    }

    console.log("\n" + "━".repeat(50));
    console.log("✅ Array final ordenado:", arr);
    console.log(`📊 Estatísticas:`);
    console.log(`   • Comparações: ${totalComparisons}`);
    console.log(`   • Trocas: ${totalSwaps}`);
    console.log(`   • Passagens: ${passNumber}`);

    return arr;
}

/**
 * Demonstração interativa do funcionamento
 */
function demonstrarBubbleSort() {
    console.log("═".repeat(60));
    console.log("      DEMONSTRAÇÃO DO ALGORITMO BUBBLE SORT");
    console.log("═".repeat(60));

    // Exemplo 1: Array desordenado
    console.log("\n🔸 EXEMPLO 1: Array Completamente Desordenado");
    const arr1 = [64, 34, 25, 12, 22, 11, 90];
    bubbleSortVisualized([...arr1]);

    // Exemplo 2: Array quase ordenado
    console.log("\n\n🔸 EXEMPLO 2: Array Quase Ordenado");
    const arr2 = [1, 3, 2, 4, 5];
    bubbleSortVisualized([...arr2]);

    // Exemplo 3: Array já ordenado
    console.log("\n\n🔸 EXEMPLO 3: Array Já Ordenado");
    const arr3 = [1, 2, 3, 4, 5];
    bubbleSortVisualized([...arr3]);

    // Exemplo 4: Array com números negativos
    console.log("\n\n🔸 EXEMPLO 4: Array com Números Negativos");
    const arr4 = [3, -1, 7, -5, 2];
    bubbleSortVisualized([...arr4]);

    // Comparação de performance
    console.log("\n\n" + "═".repeat(60));
    console.log("      COMPARAÇÃO: Bubble Sort vs Bubble Sort Otimizado");
    console.log("═".repeat(60));

    const testArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
    console.log("\nArray de teste:", testArray);

    // Teste com versão básica
    const start1 = performance.now();
    bubbleSort([...testArray]);
    const end1 = performance.now();

    // Teste com versão otimizada
    const start2 = performance.now();
    bubbleSortOptimized([...testArray]);
    const end2 = performance.now();

    console.log(`\n⏱️  Tempo Bubble Sort básico: ${(end1 - start1).toFixed(4)}ms`);
    console.log(`⏱️  Tempo Bubble Sort otimizado: ${(end2 - start2).toFixed(4)}ms`);
}

/**
 * Função auxiliar para testar com arrays customizados
 * @param {number[]} arr - Array customizado para ordenar
 */
function testarComArray(arr) {
    console.log("\n🧪 Testando com array customizado:");
    bubbleSortVisualized([...arr]);
}

// ═══════════════════════════════════════════════════════════
// EXECUÇÃO
// ═══════════════════════════════════════════════════════════

// Executar demonstração completa
demonstrarBubbleSort();

// Exemplos de uso direto das funções
console.log("\n\n" + "═".repeat(60));
console.log("      EXEMPLOS DE USO DIRETO DAS FUNÇÕES");
console.log("═".repeat(60));

const exemplo1 = [5, 2, 8, 1, 9];
console.log("\nOriginal:", exemplo1);
console.log("Ordenado:", bubbleSort([...exemplo1]));

const exemplo2 = [100, 50, 25, 75];
console.log("\nOriginal:", exemplo2);
console.log("Ordenado:", bubbleSortOptimized([...exemplo2]));

// Teste personalizado (descomente para usar)
// testarComArray([seu, array, aqui]);
