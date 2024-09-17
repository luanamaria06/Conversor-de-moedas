// script.js

// Taxas de conversão fictícias
const exchangeRates = {
    'USD': {
        'EUR': 0.93,
        'BRL': 5.50,
        'USD': 1
    },
    'EUR': {
        'USD': 1.08,
        'BRL': 6.13,
        'EUR': 1
    },
    'BRL': {
        'USD': 0.20,
        'EUR': 0.19,
        'BRL': 1
    }
};

function convertCurrency() {
    // Obtém o valor inserido
    const amount = parseFloat(document.getElementById('amount').value);
    
    // Obtém as moedas selecionadas
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    
    // Verifica se o valor é um número e é positivo
    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }
    
    // Obtém a taxa de câmbio
    const rate = exchangeRates[fromCurrency][toCurrency];
    
    // Calcula o valor convertido
    const convertedAmount = amount * rate;
    
    // Exibe o resultado
    document.getElementById('result').innerText = `Resultado: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
