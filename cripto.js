function criptografar() {
    const textoOriginal = document.getElementById('texto').value.toLowerCase().replace(/[^a-z]/g, ''); // Remover caracteres especiais
    const textoCriptografado = textoOriginal
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('texto-criptografado').value = textoCriptografado;

    const texto = document.getElementById('texto').value;
    const regex = /[A-ZÀ-Ú]/; // Verifica se há letras maiúsculas ou com acento
    const acentosRegex = /[ÁÀÃÉÈÍÌÓÒÕÚÙáú]/; // Verifica se há caracteres acentuados

    if (regex.test(texto) || acentosRegex.test(texto)) {
        alert('O texto não pode conter letras maiúsculas ou caracteres acentuados.');
        document.getElementById('texto').value = ''; // Limpa o texto
        return; // Sai da função
    }
}

function descriptografar() {
    const textoOriginal = document.getElementById('texto').value.toLowerCase().replace(/[^a-z]/g, ''); // Remover caracteres especiais

    // Limpar o conteúdo de 'texto-criptografado' para evitar que o texto criptografado anterior permaneça visível
    document.getElementById('texto-criptografado').value = '';

    // Atualizar o campo de texto 'texto-criptografado' com o texto original
    document.getElementById('texto-criptografado').value = textoOriginal;
}

function copiarTexto() {
    const textoCifrado = document.getElementById('texto-criptografado');
    textoCifrado.select();
    document.execCommand('copy');
    alert('TEXTO COPIADO COM SUCESSO!!!');
}

function scrollToContato() {
        // Scroll suave para a seção de "Contato" com velocidade ajustada
        document.getElementById('contato').scrollIntoView({
            behavior: 'smooth',
            block: 'center', // 'start' é o valor padrão e proporciona uma rolagem mais suave
        });
    }

