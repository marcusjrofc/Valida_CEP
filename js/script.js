const cepInput = document.getElementById('cep');

cepInput.addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g,'')
    if(valor.length > 8){
        valor = valor.slice(0,8)
    }
    if(valor.length > 5){
        valor = valor.replace(/^(\d{5})(\d)/, '$1-$2')
    }
    e.target.value = valor
})

async function ValidarCEP() {
    const cepInput = document.getElementById('cep');
    const resultadoDiv = document.getElementById('resultado');
    const cep = cepInput.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert("Informe exatamente 8 números");
        return;
    }
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (!resposta.ok || dados.erro) {
            alert("CEP não encontrado");
            resultadoDiv.innerHTML = "";
            return;
        }

        resultadoDiv.innerHTML = `
            <hr>
            <div class="campo-resultado">
                <label for="rua">Rua</label>
                <input type="text" id="rua" value="${dados.logradouro}" readonly>
            </div>
            <div class="campo-resultado">
                <label for="bairro">Bairro</label>
                <input type="text" id="bairro" value="${dados.bairro}" readonly>
            </div>
            <div class="campo-resultado">
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" value="${dados.localidade}" readonly>
            </div>
            <div class="campo-resultado">
                <label for="estado">Estado</label>
                <input type="text" id="estado" value="${dados.estado} (${dados.uf}) " readonly>
            </div>
            <div class="campo-resultado">
                <label for="ddd">DDD</label>
                <input type="text" id="ddd" value="${dados.ddd}" readonly>
            </div>
            `

    } catch (error) {
        console.log("Erro na requisição",error);
        alert("Erro ao conultar o CEP. Tente novamente")
    }
}