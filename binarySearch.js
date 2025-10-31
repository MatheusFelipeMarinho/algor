/**
 * BINARY SEARCH - Algoritmo de Busca Binária
 *
 * A Busca Binária é um algoritmo eficiente para encontrar um elemento em uma
 * lista ORDENADA. O algoritmo divide repetidamente o intervalo de busca pela
 * metade, comparando o elemento do meio com o valor procurado.
 *
 * ⚠️ IMPORTANTE: O array DEVE estar ordenado para funcionar corretamente!
 *
 * Complexidade:
 * - Melhor caso: O(1) - elemento está no meio
 * - Caso médio: O(log n)
 * - Pior caso: O(log n)
 * - Espaço: O(1) para iterativa, O(log n) para recursiva (pilha de chamadas)
 *
 * Vantagens sobre busca linear:
 * - Muito mais rápido para grandes arrays
 * - Exemplo: array com 1.000.000 elementos
 *   • Busca Linear: até 1.000.000 comparações
 *   • Busca Binária: no máximo 20 comparações
 */

/**
 * Binary Search - Versão Iterativa
 * @param {number[]} arr - Array ordenado de números
 * @param {number} target - Valor a ser encontrado
 * @returns {number} Índice do elemento ou -1 se não encontrado
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calcula o índice do meio (evita overflow)
        const mid = Math.floor(left + (right - left) / 2);

        // Verifica se encontrou o elemento
        if (arr[mid] === target) {
            return mid;
        }

        // Se o elemento do meio é menor, ignora a metade esquerda
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // Se o elemento do meio é maior, ignora a metade direita
        else {
            right = mid - 1;
        }
    }

    // Elemento não encontrado
    return -1;
}

/**
 * Binary Search - Versão Recursiva
 * @param {number[]} arr - Array ordenado de números
 * @param {number} target - Valor a ser encontrado
 * @param {number} left - Índice inicial (padrão: 0)
 * @param {number} right - Índice final (padrão: arr.length - 1)
 * @returns {number} Índice do elemento ou -1 se não encontrado
 */
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Caso base: elemento não encontrado
    if (left > right) {
        return -1;
    }

    // Calcula o índice do meio
    const mid = Math.floor(left + (right - left) / 2);

    // Verifica se encontrou o elemento
    if (arr[mid] === target) {
        return mid;
    }

    // Busca recursiva na metade esquerda ou direita
    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

/**
 * Binary Search com visualização passo a passo
 * @param {number[]} arr - Array ordenado de números
 * @param {number} target - Valor a ser encontrado
 * @returns {number} Índice do elemento ou -1 se não encontrado
 */
function binarySearchVisualized(arr, target) {
    console.log("\n🔍 BINARY SEARCH - VISUALIZAÇÃO PASSO A PASSO 🔍\n");
    console.log("Array ordenado:", arr);
    console.log(`Procurando por: ${target}`);
    console.log("━".repeat(60));

    let left = 0;
    let right = arr.length - 1;
    let step = 1;
    let comparisons = 0;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        comparisons++;

        console.log(`\n📍 Passo ${step}:`);
        console.log(`   Intervalo de busca: índices [${left}...${right}]`);
        console.log(`   Valores no intervalo: [${arr.slice(left, right + 1).join(", ")}]`);
        console.log(`   Índice do meio: ${mid}`);
        console.log(`   Valor do meio: ${arr[mid]}`);

        // Visualização do array com marcadores
        const visualization = arr.map((val, idx) => {
            if (idx === mid) return `[${val}]`; // Elemento do meio
            if (idx >= left && idx <= right) return ` ${val} `; // Dentro do intervalo
            return ` · `; // Fora do intervalo
        });
        console.log(`   Array: ${visualization.join("")}`);

        if (arr[mid] === target) {
            console.log(`   ✅ ENCONTRADO! O valor ${target} está no índice ${mid}`);
            console.log("\n" + "━".repeat(60));
            console.log(`📊 Estatísticas:`);
            console.log(`   • Comparações: ${comparisons}`);
            console.log(`   • Passos: ${step}`);
            console.log(`   • Índice encontrado: ${mid}`);
            return mid;
        }

        if (arr[mid] < target) {
            console.log(`   🔼 ${arr[mid]} < ${target} → Buscar na metade DIREITA`);
            left = mid + 1;
        } else {
            console.log(`   🔽 ${arr[mid]} > ${target} → Buscar na metade ESQUERDA`);
            right = mid - 1;
        }

        step++;
    }

    console.log(`\n   ❌ NÃO ENCONTRADO! O valor ${target} não está no array`);
    console.log("\n" + "━".repeat(60));
    console.log(`📊 Estatísticas:`);
    console.log(`   • Comparações: ${comparisons}`);
    console.log(`   • Passos: ${step - 1}`);

    return -1;
}

/**
 * Busca o primeiro elemento maior ou igual ao target (Lower Bound)
 * @param {number[]} arr - Array ordenado de números
 * @param {number} target - Valor de referência
 * @returns {number} Índice do primeiro elemento >= target, ou arr.length se não existir
 */
function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

/**
 * Busca o primeiro elemento maior que o target (Upper Bound)
 * @param {number[]} arr - Array ordenado de números
 * @param {number} target - Valor de referência
 * @returns {number} Índice do primeiro elemento > target, ou arr.length se não existir
 */
function upperBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

/**
 * Encontra todas as ocorrências de um valor (para arrays com duplicatas)
 * @param {number[]} arr - Array ordenado de números
 * @param {number} target - Valor a ser encontrado
 * @returns {number[]} Array com todos os índices onde o valor aparece
 */
function binarySearchAll(arr, target) {
    const first = lowerBound(arr, target);

    if (first >= arr.length || arr[first] !== target) {
        return [];
    }

    const last = upperBound(arr, target);
    const indices = [];

    for (let i = first; i < last; i++) {
        indices.push(i);
    }

    return indices;
}

/**
 * Demonstração completa do Binary Search
 */
function demonstrarBinarySearch() {
    console.log("═".repeat(70));
    console.log("         DEMONSTRAÇÃO DO ALGORITMO BINARY SEARCH");
    console.log("═".repeat(70));

    // Exemplo 1: Busca bem-sucedida (elemento no meio)
    console.log("\n🔸 EXEMPLO 1: Elemento no Meio");
    const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17];
    binarySearchVisualized(arr1, 9);

    // Exemplo 2: Busca bem-sucedida (elemento no início)
    console.log("\n\n🔸 EXEMPLO 2: Elemento no Início");
    const arr2 = [2, 4, 6, 8, 10, 12, 14, 16];
    binarySearchVisualized(arr2, 2);

    // Exemplo 3: Busca bem-sucedida (elemento no final)
    console.log("\n\n🔸 EXEMPLO 3: Elemento no Final");
    const arr3 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    binarySearchVisualized(arr3, 50);

    // Exemplo 4: Busca sem sucesso
    console.log("\n\n🔸 EXEMPLO 4: Elemento Não Existe");
    const arr4 = [1, 3, 5, 7, 9, 11, 13];
    binarySearchVisualized(arr4, 6);

    // Exemplo 5: Array com duplicatas
    console.log("\n\n🔸 EXEMPLO 5: Array com Elementos Duplicados");
    const arr5 = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6];
    console.log("Array:", arr5);
    console.log(`Procurando todas as ocorrências de 2:`);
    const indices2 = binarySearchAll(arr5, 2);
    console.log(`   Encontrado nos índices: [${indices2.join(", ")}]`);
    console.log(`Procurando todas as ocorrências de 5:`);
    const indices5 = binarySearchAll(arr5, 5);
    console.log(`   Encontrado nos índices: [${indices5.join(", ")}]`);

    // Comparação: Iterativa vs Recursiva
    console.log("\n\n" + "═".repeat(70));
    console.log("      COMPARAÇÃO: Binary Search Iterativa vs Recursiva");
    console.log("═".repeat(70));

    const testArray = Array.from({length: 1000}, (_, i) => i * 2);
    const searchValue = 1234;

    console.log(`\nArray de teste: ${testArray.length} elementos [0, 2, 4, ..., 1998]`);
    console.log(`Procurando por: ${searchValue}`);

    // Teste iterativo
    const start1 = performance.now();
    const result1 = binarySearch(testArray, searchValue);
    const end1 = performance.now();

    // Teste recursivo
    const start2 = performance.now();
    const result2 = binarySearchRecursive(testArray, searchValue);
    const end2 = performance.now();

    console.log(`\n✅ Versão Iterativa:`);
    console.log(`   Resultado: índice ${result1}`);
    console.log(`   Tempo: ${(end1 - start1).toFixed(6)}ms`);

    console.log(`\n✅ Versão Recursiva:`);
    console.log(`   Resultado: índice ${result2}`);
    console.log(`   Tempo: ${(end2 - start2).toFixed(6)}ms`);

    // Comparação com busca linear
    console.log("\n\n" + "═".repeat(70));
    console.log("      COMPARAÇÃO: Binary Search vs Busca Linear");
    console.log("═".repeat(70));

    const linearSearch = (arr, target) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) return i;
        }
        return -1;
    };

    const bigArray = Array.from({length: 1000000}, (_, i) => i);
    const searchFor = 999999;

    console.log(`\nArray de teste: ${bigArray.length.toLocaleString()} elementos`);
    console.log(`Procurando por: ${searchFor}`);

    const startLinear = performance.now();
    const resultLinear = linearSearch(bigArray, searchFor);
    const endLinear = performance.now();

    const startBinary = performance.now();
    const resultBinary = binarySearch(bigArray, searchFor);
    const endBinary = performance.now();

    console.log(`\n📊 Busca Linear:`);
    console.log(`   Resultado: índice ${resultLinear}`);
    console.log(`   Tempo: ${(endLinear - startLinear).toFixed(6)}ms`);

    console.log(`\n🚀 Binary Search:`);
    console.log(`   Resultado: índice ${resultBinary}`);
    console.log(`   Tempo: ${(endBinary - startBinary).toFixed(6)}ms`);

    const speedup = (endLinear - startLinear) / (endBinary - startBinary);
    console.log(`\n⚡ Binary Search foi ${speedup.toFixed(1)}x mais rápido!`);
}

/**
 * Exemplos práticos de uso
 */
function exemplosPraticos() {
    console.log("\n\n" + "═".repeat(70));
    console.log("               EXEMPLOS PRÁTICOS DE USO");
    console.log("═".repeat(70));

    // Busca em lista de preços
    console.log("\n📦 Exemplo 1: Busca em Lista de Preços");
    const precos = [10, 25, 30, 45, 50, 75, 100, 150, 200];
    const precoProcurado = 50;
    console.log(`Preços disponíveis: [${precos.join(", ")}]`);
    console.log(`Procurando preço: ${precoProcurado}`);
    const idx1 = binarySearch(precos, precoProcurado);
    console.log(`Resultado: ${idx1 !== -1 ? `Encontrado no índice ${idx1}` : "Não encontrado"}`);

    // Busca em lista de IDs
    console.log("\n🆔 Exemplo 2: Verificar se ID existe");
    const ids = [101, 205, 310, 415, 520, 625, 730, 835, 940];
    const idProcurado = 415;
    console.log(`IDs cadastrados: [${ids.join(", ")}]`);
    console.log(`Verificando ID: ${idProcurado}`);
    const existe = binarySearch(ids, idProcurado) !== -1;
    console.log(`Resultado: ID ${existe ? "✅ existe" : "❌ não existe"} no sistema`);

    // Lower e Upper Bound
    console.log("\n📊 Exemplo 3: Lower Bound e Upper Bound");
    const notas = [5.5, 6.0, 6.5, 7.0, 7.0, 7.0, 8.0, 8.5, 9.0, 9.5];
    const notaMinima = 7.0;
    console.log(`Notas: [${notas.join(", ")}]`);
    console.log(`Nota mínima para aprovação: ${notaMinima}`);
    const primeiroAprovado = lowerBound(notas, notaMinima);
    const totalAprovados = notas.length - primeiroAprovado;
    console.log(`Total de aprovados: ${totalAprovados} alunos`);
}

// ═══════════════════════════════════════════════════════════
// EXECUÇÃO
// ═══════════════════════════════════════════════════════════

demonstrarBinarySearch();
exemplosPraticos();

// Resumo final
console.log("\n\n" + "═".repeat(70));
console.log("                         RESUMO");
console.log("═".repeat(70));
console.log(`
📚 QUANDO USAR BINARY SEARCH:
   ✅ Array está ORDENADO
   ✅ Precisa buscar elementos rapidamente
   ✅ Array é grande (muitos elementos)
   ✅ Fará múltiplas buscas no mesmo array

❌ QUANDO NÃO USAR:
   ❌ Array não está ordenado (use busca linear ou ordene primeiro)
   ❌ Array muito pequeno (<10 elementos) - busca linear é suficiente
   ❌ Vai fazer apenas uma busca (custo de ordenação não compensa)

🎯 COMPLEXIDADE:
   Tempo: O(log n) - extremamente eficiente!
   Espaço: O(1) iterativa | O(log n) recursiva

💡 DICA:
   Para 1.000.000 de elementos:
   • Busca Linear: até 1.000.000 comparações
   • Binary Search: no máximo 20 comparações! 🚀
`);
