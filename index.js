
function buscarCEP(){
    let zipcode = document.getElementById('code').value.replace(/\D/g, '');

    if(zipcode.length !== 8){
        document.getElementById('result').innerHTML = 'CEP invalido. Digite 8 numeros';
        return;
    }

    fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
        .then(response => response.json())
        .then(dados => {
            if(dados.erro){
                document.getElementById('result').innerHTML = 'CEP não encontrado.'
            }else{
                document.getElementById('result').innerHTML = `Logradouro: ${dados.logradouro}, Bairro: ${dados.bairro}, Cidade: ${dados.localidade} - ${dados.uf}`
            }
        })
        .catch(()=>{
            document.getElementById('result').innerText = 'Erro ao buscar CEP'
        })
}