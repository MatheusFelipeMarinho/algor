/**
 * COMPLEXIDADE CONSTANTE - O(1)
 *
 * Algoritmos com complexidade O(1) executam em tempo constante,
 * independente do tamanho da entrada. O tempo de execução é sempre o mesmo.
 *
 * Características:
 * - Tempo de execução fixo e previsível
 * - Não depende do tamanho da entrada
 * - Extremamente eficiente
 * - Operações diretas, sem loops
 *
 * Exemplos comuns:
 * - Acesso direto a elemento de array por índice
 * - Operações aritméticas simples
 * - Atribuições de variáveis
 * - Acesso a propriedades de objetos
 * - Push/Pop em pilhas
 */

/**
 * Classe demonstrando a diferença entre O(1) e O(n)
 */
class ComplexityComparison {
    constructor() {
        this.operationCount = 0;
    }

    resetCounter() {
        this.operationCount = 0;
    }

    getOperationCount() {
        return this.operationCount;
    }

    /**
     * EXEMPLO 1: Console.log com O(1)
     * Executa UMA VEZ, independente do tamanho do array
     * @param {Array} arr - Array de qualquer tamanho
     */
    consoleLogO1(arr) {
        console.log("\n🔹 EXEMPLO O(1) - Console.log FORA do loop");
        console.log("━".repeat(60));
        console.log(`Array tem ${arr.length} elementos`);
        console.log("Executando console.log UMA VEZ...\n");

        this.resetCounter();
        const start = performance.now();

        // O(1) - Executa apenas 1 vez, não importa o tamanho do array
        console.log("   ✅ Isso é O(1) - executou apenas 1 vez!");
        this.operationCount++;

        const end = performance.now();

        console.log(`\n📊 Estatísticas:`);
        console.log(`   Operações: ${this.operationCount}`);
        console.log(`   Tempo: ${(end - start).toFixed(6)}ms`);
        console.log(`   Complexidade: O(1) - CONSTANTE\n`);
    }

    /**
     * EXEMPLO 2: Console.log com O(n)
     * Executa N VEZES, proporcional ao tamanho do array
     * @param {Array} arr - Array de qualquer tamanho
     */
    consoleLogOn(arr) {
        console.log("\n🔹 EXEMPLO O(n) - Console.log DENTRO do loop");
        console.log("━".repeat(60));
        console.log(`Array tem ${arr.length} elementos`);
        console.log("Executando console.log PARA CADA elemento...\n");

        this.resetCounter();
        const start = performance.now();

        // O(n) - Executa N vezes (uma para cada elemento)
        for (let i = 0; i < arr.length; i++) {
            console.log(`   🔄 Iteração ${i + 1}: ${arr[i]}`);
            this.operationCount++;
        }

        const end = performance.now();

        console.log(`\n📊 Estatísticas:`);
        console.log(`   Operações: ${this.operationCount}`);
        console.log(`   Tempo: ${(end - start).toFixed(6)}ms`);
        console.log(`   Complexidade: O(n) - LINEAR\n`);
    }

    /**
     * Comparação direta entre O(1) e O(n)
     * @param {Array} arr - Array de teste
     */
    compararComplexidades(arr) {
        console.log("\n" + "═".repeat(70));
        console.log("      COMPARAÇÃO: O(1) vs O(n) com console.log");
        console.log("═".repeat(70));

        console.log(`\nArray de teste: [${arr.join(", ")}]`);
        console.log(`Tamanho: ${arr.length} elementos\n`);

        // Teste O(1)
        this.consoleLogO1(arr);

        // Teste O(n)
        this.consoleLogOn(arr);

        // Resumo
        console.log("═".repeat(70));
        console.log("📈 CONCLUSÃO:");
        console.log("═".repeat(70));
        console.log("\n✅ O(1) - Tempo Constante:");
        console.log("   • Executou 1 vez (não importa o tamanho do array)");
        console.log("   • Sempre o mesmo tempo de execução");
        console.log("   • Extremamente eficiente\n");

        console.log("🔄 O(n) - Tempo Linear:");
        console.log(`   • Executou ${arr.length} vezes (uma para cada elemento)`);
        console.log("   • Tempo cresce com o tamanho do array");
        console.log(`   • Se dobrar o array, dobra o tempo\n`);
    }
}

/**
 * Classe com operações de complexidade O(1)
 */
class ConstantComplexity {
    constructor() {
        this.cache = new Map();
        this.stack = [];
        this.userData = {};
    }

    /**
     * 1. ACESSO POR ÍNDICE - O(1)
     * Acessar elemento em posição específica é sempre O(1)
     * @param {Array} arr - Array qualquer
     * @param {number} index - Índice a acessar
     * @returns {*} Elemento na posição
     */
    acessarPorIndice(arr, index) {
        console.log(`\n🔸 Acessando arr[${index}]...`);

        const start = performance.now();
        const elemento = arr[index]; // O(1) - acesso direto
        const end = performance.now();

        console.log(`   Resultado: ${elemento}`);
        console.log(`   Tempo: ${(end - start).toFixed(6)}ms`);
        console.log(`   Complexidade: O(1)`);

        return elemento;
    }

    /**
     * 2. OPERAÇÕES ARITMÉTICAS - O(1)
     * Cálculos matemáticos simples são sempre O(1)
     * @param {number} a - Primeiro número
     * @param {number} b - Segundo número
     * @returns {Object} Resultados das operações
     */
    operacoesAritmeticas(a, b) {
        console.log(`\n🔸 Operações aritméticas: ${a} e ${b}`);

        const start = performance.now();

        const soma = a + b;        // O(1)
        const subtracao = a - b;   // O(1)
        const multiplicacao = a * b; // O(1)
        const divisao = a / b;     // O(1)

        const end = performance.now();

        console.log(`   Soma: ${soma}`);
        console.log(`   Subtração: ${subtracao}`);
        console.log(`   Multiplicação: ${multiplicacao}`);
        console.log(`   Divisão: ${divisao.toFixed(2)}`);
        console.log(`   Tempo total: ${(end - start).toFixed(6)}ms`);
        console.log(`   Complexidade: O(1) para cada operação`);

        return { soma, subtracao, multiplicacao, divisao };
    }

    /**
     * 3. PUSH/POP EM PILHA - O(1)
     * Adicionar/remover do final do array é O(1)
     * @param {*} elemento - Elemento a adicionar
     */
    pilhaOperacoes(elemento) {
        console.log(`\n🔸 Operações de Pilha (Stack)`);

        // Push - O(1)
        const startPush = performance.now();
        this.stack.push(elemento);
        const endPush = performance.now();

        console.log(`   Push "${elemento}": ${(endPush - startPush).toFixed(6)}ms - O(1)`);

        // Pop - O(1)
        const startPop = performance.now();
        const removido = this.stack.pop();
        const endPop = performance.now();

        console.log(`   Pop "${removido}": ${(endPop - startPop).toFixed(6)}ms - O(1)`);
        console.log(`   Pilha atual: [${this.stack.join(", ")}]`);
    }

    /**
     * 4. ACESSO A PROPRIEDADE DE OBJETO - O(1)
     * Acessar propriedade de objeto por chave é O(1)
     * @param {string} chave - Chave a acessar
     * @param {*} valor - Valor a armazenar
     */
    acessoObjeto(chave, valor) {
        console.log(`\n🔸 Acesso a Objeto`);

        // Definir - O(1)
        const startSet = performance.now();
        this.userData[chave] = valor;
        const endSet = performance.now();

        console.log(`   Set userData["${chave}"] = "${valor}": ${(endSet - startSet).toFixed(6)}ms - O(1)`);

        // Obter - O(1)
        const startGet = performance.now();
        const resultado = this.userData[chave];
        const endGet = performance.now();

        console.log(`   Get userData["${chave}"] = "${resultado}": ${(endGet - startGet).toFixed(6)}ms - O(1)`);
    }

    /**
     * 5. MAP/CACHE - O(1)
     * Operações em Map são O(1) em média
     * @param {string} chave - Chave do cache
     * @param {*} valor - Valor a cachear
     */
    operacoesCache(chave, valor) {
        console.log(`\n🔸 Operações de Cache (Map)`);

        // Set - O(1)
        const startSet = performance.now();
        this.cache.set(chave, valor);
        const endSet = performance.now();

        console.log(`   Cache.set("${chave}", "${valor}"): ${(endSet - startSet).toFixed(6)}ms - O(1)`);

        // Get - O(1)
        const startGet = performance.now();
        const resultado = this.cache.get(chave);
        const endGet = performance.now();

        console.log(`   Cache.get("${chave}"): "${resultado}" - ${(endGet - startGet).toFixed(6)}ms - O(1)`);

        // Has - O(1)
        const startHas = performance.now();
        const existe = this.cache.has(chave);
        const endHas = performance.now();

        console.log(`   Cache.has("${chave}"): ${existe} - ${(endHas - startHas).toFixed(6)}ms - O(1)`);
    }

    /**
     * 6. PRIMEIRO E ÚLTIMO ELEMENTO - O(1)
     * Acessar primeiro ou último elemento é sempre O(1)
     * @param {Array} arr - Array qualquer
     */
    primeiroEUltimo(arr) {
        console.log(`\n🔸 Acesso a Primeiro e Último Elemento`);

        const start = performance.now();

        const primeiro = arr[0];              // O(1)
        const ultimo = arr[arr.length - 1];   // O(1)

        const end = performance.now();

        console.log(`   Primeiro: ${primeiro}`);
        console.log(`   Último: ${ultimo}`);
        console.log(`   Tempo: ${(end - start).toFixed(6)}ms`);
        console.log(`   Complexidade: O(1) para ambos`);

        return { primeiro, ultimo };
    }

    /**
     * 7. VERIFICAR TAMANHO - O(1)
     * Propriedade length é mantida e acessada em O(1)
     * @param {Array} arr - Array qualquer
     */
    verificarTamanho(arr) {
        console.log(`\n🔸 Verificar Tamanho do Array`);

        const start = performance.now();
        const tamanho = arr.length; // O(1)
        const end = performance.now();

        console.log(`   Tamanho: ${tamanho} elementos`);
        console.log(`   Tempo: ${(end - start).toFixed(6)}ms`);
        console.log(`   Complexidade: O(1)`);

        return tamanho;
    }

    /**
     * USE CASE: Sistema de Cache para API
     * Demonstra uso prático de operações O(1)
     */
    useCaseCache() {
        console.log("\n" + "═".repeat(70));
        console.log("      USE CASE: SISTEMA DE CACHE PARA API");
        console.log("═".repeat(70));

        console.log("\n📝 Cenário:");
        console.log("   Uma API precisa armazenar resultados de consultas");
        console.log("   frequentes para evitar processamento repetido.\n");

        // Simular consultas
        const consultas = [
            { id: "user:123", dados: { nome: "João", idade: 30 } },
            { id: "user:456", dados: { nome: "Maria", idade: 25 } },
            { id: "product:789", dados: { nome: "Notebook", preco: 3000 } }
        ];

        console.log("1️⃣  Armazenando no cache (O(1) cada):");
        consultas.forEach(consulta => {
            const start = performance.now();
            this.cache.set(consulta.id, consulta.dados); // O(1)
            const end = performance.now();
            console.log(`   ✅ ${consulta.id}: ${(end - start).toFixed(6)}ms`);
        });

        console.log("\n2️⃣  Buscando no cache (O(1) cada):");
        ["user:123", "product:789", "user:999"].forEach(id => {
            const start = performance.now();
            const resultado = this.cache.get(id); // O(1)
            const end = performance.now();

            if (resultado) {
                console.log(`   ✅ ${id}: ENCONTRADO - ${(end - start).toFixed(6)}ms`);
                console.log(`      Dados: ${JSON.stringify(resultado)}`);
            } else {
                console.log(`   ❌ ${id}: NÃO ENCONTRADO - ${(end - start).toFixed(6)}ms`);
            }
        });

        console.log("\n💡 Benefícios do O(1):");
        console.log("   • Tempo constante independente do número de itens no cache");
        console.log("   • Extremamente rápido mesmo com milhões de entradas");
        console.log("   • Ideal para sistemas de alta performance");
    }
}

/**
 * Demonstração completa
 */
function demonstrarComplexidadeConstante() {
    console.log("═".repeat(70));
    console.log("      DEMONSTRAÇÃO DE COMPLEXIDADE CONSTANTE - O(1)");
    console.log("═".repeat(70));

    const constante = new ConstantComplexity();

    // Exemplo 1: Acesso por índice
    console.log("\n🔸 EXEMPLO 1: Acesso por Índice");
    console.log("━".repeat(60));
    const array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    console.log(`Array: [${array1.join(", ")}]`);
    constante.acessarPorIndice(array1, 5);
    constante.acessarPorIndice(array1, 0);
    constante.acessarPorIndice(array1, 9);

    // Exemplo 2: Operações aritméticas
    console.log("\n\n🔸 EXEMPLO 2: Operações Aritméticas");
    console.log("━".repeat(60));
    constante.operacoesAritmeticas(50, 10);

    // Exemplo 3: Pilha
    console.log("\n\n🔸 EXEMPLO 3: Operações de Pilha");
    console.log("━".repeat(60));
    constante.pilhaOperacoes("A");
    constante.pilhaOperacoes("B");
    constante.pilhaOperacoes("C");

    // Exemplo 4: Objeto
    console.log("\n\n🔸 EXEMPLO 4: Acesso a Objeto");
    console.log("━".repeat(60));
    constante.acessoObjeto("nome", "João Silva");
    constante.acessoObjeto("email", "joao@email.com");

    // Exemplo 5: Cache
    console.log("\n\n🔸 EXEMPLO 5: Operações de Cache");
    console.log("━".repeat(60));
    constante.operacoesCache("chave1", "valor1");
    constante.operacoesCache("config", { theme: "dark", lang: "pt" });

    // Exemplo 6: Primeiro e último
    console.log("\n\n🔸 EXEMPLO 6: Primeiro e Último Elemento");
    console.log("━".repeat(60));
    const array2 = Array.from({ length: 1000 }, (_, i) => i);
    console.log(`Array com ${array2.length} elementos`);
    constante.primeiroEUltimo(array2);

    // Exemplo 7: Tamanho
    console.log("\n\n🔸 EXEMPLO 7: Verificar Tamanho");
    console.log("━".repeat(60));
    constante.verificarTamanho(array2);
}

/**
 * Comparação visual com diferentes tamanhos
 */
function compararTamanhos() {
    console.log("\n\n" + "═".repeat(70));
    console.log("      PROVA: O(1) NÃO DEPENDE DO TAMANHO");
    console.log("═".repeat(70));

    const tamanhos = [10, 100, 1000, 10000, 100000];

    console.log("\nTestando acesso por índice com arrays de diferentes tamanhos:\n");
    console.log("Tamanho".padEnd(15) + "Tempo (ms)".padEnd(20) + "Observação");
    console.log("─".repeat(70));

    tamanhos.forEach(tamanho => {
        const arr = Array.from({ length: tamanho }, (_, i) => i);

        const start = performance.now();
        const elemento = arr[5]; // O(1) - sempre acessa índice 5
        const end = performance.now();

        const tempo = (end - start).toFixed(6);

        console.log(
            tamanho.toString().padEnd(15) +
            tempo.padEnd(20) +
            "Tempo constante!"
        );
    });

    console.log("\n💡 Observe que o tempo permanece praticamente o mesmo!");
    console.log("   Isso é O(1) - CONSTANTE - não importa o tamanho do array!");
}

// ═══════════════════════════════════════════════════════════
// EXECUÇÃO
// ═══════════════════════════════════════════════════════════

// 1. Comparação console.log O(1) vs O(n)
const comparison = new ComplexityComparison();

console.log("\n" + "═".repeat(70));
console.log("      PARTE 1: DIFERENÇA VISUAL ENTRE O(1) E O(n)");
console.log("═".repeat(70));

// Array pequeno
comparison.compararComplexidades([1, 2, 3, 4, 5]);

// Array maior
console.log("\n\n");
comparison.compararComplexidades([10, 20, 30, 40, 50, 60, 70, 80]);

// 2. Demonstração de operações O(1)
console.log("\n\n" + "═".repeat(70));
console.log("      PARTE 2: OPERAÇÕES COM COMPLEXIDADE O(1)");
console.log("═".repeat(70));

demonstrarComplexidadeConstante();

// 3. Use Case prático
const constante = new ConstantComplexity();
constante.useCaseCache();

// 4. Comparação de tamanhos
compararTamanhos();

// Resumo Final
console.log("\n\n" + "═".repeat(70));
console.log("      RESUMO: COMPLEXIDADE CONSTANTE O(1)");
console.log("═".repeat(70));

console.log("\n✅ Características:");
console.log("   • Tempo de execução FIXO e PREVISÍVEL");
console.log("   • NÃO depende do tamanho da entrada");
console.log("   • Operação mais eficiente possível");
console.log("   • Sem loops, acesso direto");

console.log("\n📊 Exemplos O(1):");
console.log("   • Acesso a array por índice: arr[5]");
console.log("   • Operações aritméticas: a + b, a * b");
console.log("   • Push/Pop em array (final)");
console.log("   • Acesso a propriedades de objeto: obj.prop");
console.log("   • Map.get(), Map.set(), Map.has()");
console.log("   • Array.length");
console.log("   • console.log() FORA de loop");

console.log("\n❌ NÃO são O(1):");
console.log("   • Array.shift() - remove do início (O(n))");
console.log("   • Array.unshift() - adiciona no início (O(n))");
console.log("   • Array.indexOf() - busca linear (O(n))");
console.log("   • Array.sort() - ordenação (O(n log n))");
console.log("   • console.log() DENTRO de loop (O(n))");

console.log("\n🎯 Quando usar:");
console.log("   • Sempre que possível!");
console.log("   • Sistemas de cache");
console.log("   • Acesso rápido a dados");
console.log("   • Estruturas de dados eficientes (Hash Tables, Maps)");

console.log("\n💡 Dica de Ouro:");
console.log("   Se você pode resolver em O(1), SEMPRE escolha O(1)!");
console.log("   É a melhor complexidade possível.");

console.log("\n" + "═".repeat(70));
