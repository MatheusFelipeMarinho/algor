/**
 * COMPLEXIDADE LINEAR - O(n)
 *
 * Algoritmos com complexidade O(n) percorrem todos os elementos de uma coleção
 * exatamente uma vez. O tempo de execução cresce linearmente com o tamanho da entrada.
 *
 * Características:
 * - Tempo de execução proporcional ao tamanho da entrada
 * - Um único loop sobre os dados
 * - Eficiente para operações simples
 * - Escalável para grandes volumes de dados
 *
 * Exemplos comuns:
 * - Busca linear em array não ordenado
 * - Soma de elementos
 * - Encontrar máximo/mínimo
 * - Filtragem de dados
 * - Transformação de dados (map)
 */

/**
 * Classe com diversos exemplos de operações O(n)
 */
class LinearComplexity {
    constructor() {
        this.operationCount = 0;
    }

    /**
     * Reseta o contador de operações
     */
    resetCounter() {
        this.operationCount = 0;
    }

    /**
     * Retorna o número de operações realizadas
     */
    getOperationCount() {
        return this.operationCount;
    }

    /**
     * 1. SOMA DE ELEMENTOS - O(n)
     * Percorre o array uma vez somando todos os elementos
     * @param {number[]} arr - Array de números
     * @returns {number} Soma total
     */
    somaElementos(arr) {
        this.resetCounter();
        let soma = 0;

        for (let i = 0; i < arr.length; i++) {
            soma += arr[i];
            this.operationCount++;
        }

        return soma;
    }

    /**
     * 2. ENCONTRAR MÁXIMO - O(n)
     * Percorre o array uma vez para encontrar o maior elemento
     * @param {number[]} arr - Array de números
     * @returns {number} Maior elemento
     */
    encontrarMaximo(arr) {
        this.resetCounter();

        if (arr.length === 0) return null;

        let maximo = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maximo) {
                maximo = arr[i];
            }
            this.operationCount++;
        }

        return maximo;
    }

    /**
     * 3. ENCONTRAR MÍNIMO - O(n)
     * Percorre o array uma vez para encontrar o menor elemento
     * @param {number[]} arr - Array de números
     * @returns {number} Menor elemento
     */
    encontrarMinimo(arr) {
        this.resetCounter();

        if (arr.length === 0) return null;

        let minimo = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < minimo) {
                minimo = arr[i];
            }
            this.operationCount++;
        }

        return minimo;
    }

    /**
     * 4. BUSCA LINEAR - O(n)
     * Procura um elemento específico no array
     * @param {Array} arr - Array a ser pesquisado
     * @param {*} target - Elemento a ser encontrado
     * @returns {number} Índice do elemento ou -1 se não encontrado
     */
    buscaLinear(arr, target) {
        this.resetCounter();

        for (let i = 0; i < arr.length; i++) {
            this.operationCount++;
            if (arr[i] === target) {
                return i;
            }
        }

        return -1;
    }

    /**
     * 5. CONTAR OCORRÊNCIAS - O(n)
     * Conta quantas vezes um elemento aparece no array
     * @param {Array} arr - Array a ser analisado
     * @param {*} elemento - Elemento a ser contado
     * @returns {number} Número de ocorrências
     */
    contarOcorrencias(arr, elemento) {
        this.resetCounter();
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === elemento) {
                count++;
            }
            this.operationCount++;
        }

        return count;
    }

    /**
     * 6. FILTRAR PARES - O(n)
     * Retorna apenas os números pares do array
     * @param {number[]} arr - Array de números
     * @returns {number[]} Array com números pares
     */
    filtrarPares(arr) {
        this.resetCounter();
        const pares = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                pares.push(arr[i]);
            }
            this.operationCount++;
        }

        return pares;
    }

    /**
     * 7. DUPLICAR VALORES - O(n)
     * Cria um novo array com todos os valores duplicados
     * @param {number[]} arr - Array de números
     * @returns {number[]} Array com valores duplicados
     */
    duplicarValores(arr) {
        this.resetCounter();
        const duplicados = [];

        for (let i = 0; i < arr.length; i++) {
            duplicados.push(arr[i] * 2);
            this.operationCount++;
        }

        return duplicados;
    }

    /**
     * 8. REVERTER ARRAY - O(n)
     * Inverte a ordem dos elementos do array
     * @param {Array} arr - Array a ser revertido
     * @returns {Array} Array revertido
     */
    reverterArray(arr) {
        this.resetCounter();
        const revertido = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            revertido.push(arr[i]);
            this.operationCount++;
        }

        return revertido;
    }

    /**
     * 9. CALCULAR MÉDIA - O(n)
     * Calcula a média aritmética dos elementos
     * @param {number[]} arr - Array de números
     * @returns {number} Média dos valores
     */
    calcularMedia(arr) {
        this.resetCounter();

        if (arr.length === 0) return 0;

        let soma = 0;

        for (let i = 0; i < arr.length; i++) {
            soma += arr[i];
            this.operationCount++;
        }

        return soma / arr.length;
    }

    /**
     * 10. REMOVER DUPLICATAS - O(n)
     * Remove elementos duplicados do array (usando Set - O(n) médio)
     * @param {Array} arr - Array com possíveis duplicatas
     * @returns {Array} Array sem duplicatas
     */
    removerDuplicatas(arr) {
        this.resetCounter();
        const vistos = new Set();
        const resultado = [];

        for (let i = 0; i < arr.length; i++) {
            if (!vistos.has(arr[i])) {
                vistos.add(arr[i]);
                resultado.push(arr[i]);
            }
            this.operationCount++;
        }

        return resultado;
    }

    /**
     * USE CASE: ANÁLISE DE VENDAS
     * Processa dados de vendas e retorna estatísticas
     * @param {number[]} vendas - Array com valores de vendas diárias
     * @returns {Object} Estatísticas das vendas
     */
    analisarVendas(vendas) {
        console.log("\n📊 ANÁLISE DE VENDAS - Use Case O(n)\n");
        console.log("Dados de entrada:", vendas);
        console.log("━".repeat(60));

        // Todas essas operações são O(n) individualmente
        // Executadas sequencialmente: O(n) + O(n) + O(n) = O(n)

        const total = this.somaElementos(vendas);
        console.log(`\n✅ Total de vendas: R$ ${total.toFixed(2)}`);
        console.log(`   Operações: ${this.operationCount}`);

        const media = this.calcularMedia(vendas);
        console.log(`\n✅ Média de vendas: R$ ${media.toFixed(2)}`);
        console.log(`   Operações: ${this.operationCount}`);

        const maiorVenda = this.encontrarMaximo(vendas);
        console.log(`\n✅ Maior venda: R$ ${maiorVenda.toFixed(2)}`);
        console.log(`   Operações: ${this.operationCount}`);

        const menorVenda = this.encontrarMinimo(vendas);
        console.log(`\n✅ Menor venda: R$ ${menorVenda.toFixed(2)}`);
        console.log(`   Operações: ${this.operationCount}`);

        // Análise de dias com vendas acima da média
        this.resetCounter();
        const diasAcimaDaMedia = [];
        for (let i = 0; i < vendas.length; i++) {
            if (vendas[i] > media) {
                diasAcimaDaMedia.push({ dia: i + 1, valor: vendas[i] });
            }
            this.operationCount++;
        }

        console.log(`\n✅ Dias com vendas acima da média: ${diasAcimaDaMedia.length}`);
        diasAcimaDaMedia.forEach(d => {
            console.log(`   Dia ${d.dia}: R$ ${d.valor.toFixed(2)}`);
        });
        console.log(`   Operações: ${this.operationCount}`);

        console.log("\n" + "━".repeat(60));
        console.log("📈 Complexidade Total: O(n) - Linear");
        console.log(`   Elementos processados: ${vendas.length}`);
        console.log(`   Total de operações: ~${vendas.length * 5} (5 passagens)`);

        return {
            total,
            media,
            maiorVenda,
            menorVenda,
            diasAcimaDaMedia: diasAcimaDaMedia.length
        };
    }

    /**
     * USE CASE: PROCESSAMENTO DE TEXTO
     * Analisa um texto e retorna estatísticas
     * @param {string} texto - Texto a ser analisado
     * @returns {Object} Estatísticas do texto
     */
    analisarTexto(texto) {
        console.log("\n📝 ANÁLISE DE TEXTO - Use Case O(n)\n");
        console.log("Texto:", texto);
        console.log("━".repeat(60));

        // Todas operações O(n) onde n = tamanho do texto

        this.resetCounter();
        let caracteres = texto.length;
        let vogais = 0;
        let consoantes = 0;
        let espacos = 0;
        let numeros = 0;

        const vogaisSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

        for (let i = 0; i < texto.length; i++) {
            const char = texto[i];
            this.operationCount++;

            if (char === ' ') {
                espacos++;
            } else if (vogaisSet.has(char)) {
                vogais++;
            } else if (/[a-zA-Z]/.test(char)) {
                consoantes++;
            } else if (/[0-9]/.test(char)) {
                numeros++;
            }
        }

        const palavras = texto.trim().split(/\s+/).length;

        console.log(`\n✅ Caracteres totais: ${caracteres}`);
        console.log(`✅ Vogais: ${vogais}`);
        console.log(`✅ Consoantes: ${consoantes}`);
        console.log(`✅ Espaços: ${espacos}`);
        console.log(`✅ Números: ${numeros}`);
        console.log(`✅ Palavras estimadas: ${palavras}`);
        console.log(`\n📊 Operações realizadas: ${this.operationCount}`);
        console.log("📈 Complexidade: O(n) onde n = número de caracteres");

        return {
            caracteres,
            vogais,
            consoantes,
            espacos,
            numeros,
            palavras,
            operacoes: this.operationCount
        };
    }
}

/**
 * Demonstração com visualização de complexidade
 */
function demonstrarComplexidadeLinear() {
    console.log("═".repeat(70));
    console.log("      DEMONSTRAÇÃO DE COMPLEXIDADE LINEAR - O(n)");
    console.log("═".repeat(70));

    const linear = new LinearComplexity();

    // Exemplo 1: Operações básicas
    console.log("\n🔸 EXEMPLO 1: Operações Básicas\n");

    const numeros = [10, 25, 5, 30, 15, 20, 8, 12];
    console.log("Array:", numeros);
    console.log("━".repeat(60));

    const soma = linear.somaElementos(numeros);
    console.log(`\n1. Soma: ${soma} (${linear.getOperationCount()} operações)`);

    const maximo = linear.encontrarMaximo(numeros);
    console.log(`2. Máximo: ${maximo} (${linear.getOperationCount()} operações)`);

    const minimo = linear.encontrarMinimo(numeros);
    console.log(`3. Mínimo: ${minimo} (${linear.getOperationCount()} operações)`);

    const media = linear.calcularMedia(numeros);
    console.log(`4. Média: ${media.toFixed(2)} (${linear.getOperationCount()} operações)`);

    // Exemplo 2: Busca e contagem
    console.log("\n\n🔸 EXEMPLO 2: Busca e Contagem\n");

    const dados = [5, 3, 7, 3, 9, 3, 1, 3];
    console.log("Array:", dados);
    console.log("━".repeat(60));

    const indice = linear.buscaLinear(dados, 7);
    console.log(`\n1. Buscar 7: encontrado no índice ${indice} (${linear.getOperationCount()} operações)`);

    const count = linear.contarOcorrencias(dados, 3);
    console.log(`2. Contar 3: aparece ${count} vezes (${linear.getOperationCount()} operações)`);

    // Exemplo 3: Transformações
    console.log("\n\n🔸 EXEMPLO 3: Transformações\n");

    const original = [1, 2, 3, 4, 5];
    console.log("Array original:", original);
    console.log("━".repeat(60));

    const pares = linear.filtrarPares(original);
    console.log(`\n1. Filtrar pares: [${pares}] (${linear.getOperationCount()} operações)`);

    const duplicados = linear.duplicarValores(original);
    console.log(`2. Duplicar: [${duplicados}] (${linear.getOperationCount()} operações)`);

    const revertido = linear.reverterArray(original);
    console.log(`3. Reverter: [${revertido}] (${linear.getOperationCount()} operações)`);

    // Exemplo 4: Remover duplicatas
    console.log("\n\n🔸 EXEMPLO 4: Remover Duplicatas\n");

    const comDuplicatas = [1, 2, 2, 3, 4, 4, 4, 5, 1];
    console.log("Array com duplicatas:", comDuplicatas);
    console.log("━".repeat(60));

    const semDuplicatas = linear.removerDuplicatas(comDuplicatas);
    console.log(`\nSem duplicatas: [${semDuplicatas}]`);
    console.log(`Operações: ${linear.getOperationCount()}`);
}

/**
 * Análise de performance com diferentes tamanhos
 */
function analisarPerformance() {
    console.log("\n\n" + "═".repeat(70));
    console.log("      ANÁLISE DE PERFORMANCE - O(n)");
    console.log("═".repeat(70));

    const linear = new LinearComplexity();
    const tamanhos = [100, 1000, 10000, 100000];

    console.log("\nTestando com diferentes tamanhos de array:\n");
    console.log("Tamanho".padEnd(15) + "Tempo (ms)".padEnd(15) + "Operações");
    console.log("─".repeat(70));

    tamanhos.forEach(tamanho => {
        const arr = Array.from({ length: tamanho }, () => Math.floor(Math.random() * 100));

        const start = performance.now();
        linear.somaElementos(arr);
        const end = performance.now();

        const tempo = (end - start).toFixed(4);
        const ops = linear.getOperationCount();

        console.log(
            tamanho.toString().padEnd(15) +
            tempo.padEnd(15) +
            ops
        );
    });

    console.log("\n💡 Observe que o tempo cresce linearmente com o tamanho!");
    console.log("   Se n dobra, o tempo aproximadamente dobra (O(n))");
}

/**
 * Comparação entre O(n) e O(n²)
 */
function compararComplexidades() {
    console.log("\n\n" + "═".repeat(70));
    console.log("      COMPARAÇÃO: O(n) vs O(n²)");
    console.log("═".repeat(70));

    const tamanhos = [100, 500, 1000];

    console.log("\nDiferença entre complexidade linear e quadrática:\n");
    console.log("Tamanho".padEnd(12) + "O(n) ops".padEnd(15) + "O(n²) ops".padEnd(15) + "Diferença");
    console.log("─".repeat(70));

    tamanhos.forEach(n => {
        const operacoesLinear = n;
        const operacoesQuadratica = n * n;
        const diferenca = (operacoesQuadratica / operacoesLinear).toFixed(0);

        console.log(
            n.toString().padEnd(12) +
            operacoesLinear.toString().padEnd(15) +
            operacoesQuadratica.toString().padEnd(15) +
            `${diferenca}x mais operações`
        );
    });

    console.log("\n💡 O(n²) cresce exponencialmente! Evite quando possível.");
}

// ═══════════════════════════════════════════════════════════
// EXECUÇÃO
// ═══════════════════════════════════════════════════════════

// Demonstração básica
demonstrarComplexidadeLinear();

// Use Case 1: Análise de Vendas
console.log("\n\n" + "═".repeat(70));
console.log("      USE CASE 1: ANÁLISE DE VENDAS");
console.log("═".repeat(70));

const linear = new LinearComplexity();
const vendasSemanais = [1500.50, 2300.00, 1800.75, 2500.00, 1950.25, 2100.00, 3000.00];
linear.analisarVendas(vendasSemanais);

// Use Case 2: Análise de Texto
console.log("\n\n" + "═".repeat(70));
console.log("      USE CASE 2: PROCESSAMENTO DE TEXTO");
console.log("═".repeat(70));

const texto = "JavaScript é uma linguagem poderosa! Versão ES6 trouxe muitas melhorias.";
linear.analisarTexto(texto);

// Análise de Performance
analisarPerformance();

// Comparação de Complexidades
compararComplexidades();

// Resumo Final
console.log("\n\n" + "═".repeat(70));
console.log("      RESUMO: COMPLEXIDADE LINEAR O(n)");
console.log("═".repeat(70));

console.log("\n✅ Características:");
console.log("   • Tempo cresce proporcionalmente ao tamanho da entrada");
console.log("   • Um único loop sobre os dados");
console.log("   • Eficiente e escalável");
console.log("   • Comum em operações de busca, soma, contagem");

console.log("\n📊 Quando usar:");
console.log("   • Processar cada elemento uma vez");
console.log("   • Busca em estruturas não ordenadas");
console.log("   • Transformações simples de dados");
console.log("   • Análise e estatísticas básicas");

console.log("\n⚠️  Evitar quando:");
console.log("   • Existem soluções O(log n) disponíveis");
console.log("   • Dados podem ser pré-processados");
console.log("   • Estruturas de dados especializadas podem ajudar");

console.log("\n🎯 Exemplos implementados nesta classe:");
console.log("   1. Soma de elementos");
console.log("   2. Encontrar máximo/mínimo");
console.log("   3. Busca linear");
console.log("   4. Contagem de ocorrências");
console.log("   5. Filtros e transformações");
console.log("   6. Remoção de duplicatas");
console.log("   7. Análise de vendas");
console.log("   8. Processamento de texto");

console.log("\n" + "═".repeat(70));
