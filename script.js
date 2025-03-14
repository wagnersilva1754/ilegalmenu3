const categorias = {
    armas: [
        
        { nome: 'Sniperrifle ', precoParceria: "R$ 1.900.000", precoSemParceria:"R$  2.000.000", imagem: 'img/image copy 3.png' },
        { nome: 'Specialcarbine_mk2 (G36)', precoParceria:"R$ 1.400.000", precoSemParceria:"R$  1.500.000", imagem: 'img/image copy.png' },
        { nome: 'Militaryrifle (Ram-7)', precoParceria: "R$ 1.350.000", precoSemParceria:"R$  1.450.000", imagem: 'img/image copy 2.png' },
        { nome: 'Carbinerifle_mk2 (Mpx)', precoParceria: "R$1.250.000", precoSemParceria:"R$  1.350.000", imagem: 'img/image copy 4.png' },
        { nome: 'scarh', precoParceria: "R$ 1.250.000", precoSemParceria: "R$ 1.150.000", imagem: 'img/image copy 5.png' },
        { nome: 'Assautsmg (Mtar-21) ', precoParceria: "R$ 1.000.000", precoSemParceria:"R$  1.100.000", imagem: 'img/image copy 6.png' },
        { nome: 'Assaultrifle_mk2 (Ak-47)', precoParceria: "R$ 900.000", precoSemParceria:"R$  1.000.000", imagem: 'img/image copy 7.png' },
        { nome: 'Mp9', precoParceria: "R$ 800.000", precoSemParceria: "R$ 900.000", imagem: 'img/image copy 8.png' },
        { nome: 'Machinepistol (Tec-9)', precoParceria:"R$ 600.000", precoSemParceria: "R$ 700.000", imagem: 'img/image copy 9.png' }
 
    ],
    municao: [
        { nome: 'Mun Sniperrifle', precoParceria:"R$  6600", precoSemParceria:"R$  6800", imagem: 'img/image copy 10.png'},
        { nome: 'Mun Specialcarbine_mk2 (G36) ', precoParceria:"R$  6200", precoSemParceria: "R$ 6500", imagem: 'img/image copy 10.png' },
        { nome: 'Mun Militaryrifle (Ram-7)', precoParceria: "R$ 6100", precoSemParceria: "R$ 6400", imagem: 'img/image copy 10.png' },
        { nome: 'Mun Carbinerifle_mk2 (Mpx)', precoParceria: "R$ 6000", precoSemParceria: "R$ 6200", imagem: 'img/image copy 10.png' },
        { nome: 'Mun Scarh', precoParceria: "R$ 5100", precoSemParceria: "R$ 5400", imagem: 'img/image copy 10.png' },
        { nome: 'Mun Assautsmg (Mtar-21) ', precoParceria: "R$ 4800", precoSemParceria:"R$  5200", imagem: 'img/image copy 10.png' },
        { nome: 'Mun Assaultrifle_mk2 (Ak-47)', precoParceria: "R$ 4800", precoSemParceria:"R$  5000", imagem: 'img/image copy 10.png' },
        { nome: 'Mun Mp9', precoParceria: "R$ 4600", precoSemParceria: "R$ 4800", imagem: 'img/image copy 10.png' },
        { nome: 'Mun Machinepistol (Tec-9)', precoParceria: "R$ 3100", precoSemParceria:"R$  3400", imagem: 'img/image copy 10.png'},
        { nome: 'Mun Pistol .50', precoParceria: "R$ 2000", precoSemParceria:"R$  2100", imagem: 'img/image copy 10.png'},
        { nome: 'Mun Fiven_Seven', precoParceria:"R$  2000", precoSemParceria:"R$  2100", imagem: 'img/image copy 10.png'}
    ],
    lavagem: [
        { nome: 'Lavagem ', precoParceria: "30%", precoSemParceria:"50%", imagem: 'img/image copy 12.png' },
        { nome: 'Colete ', precoParceria: "R$ 180000", precoSemParceria: "R$ 200000", imagem: 'img/image copy 13.png' },
        { nome: 'Adrenalina ', precoParceria: "R$ 95000", precoSemParceria: "R$ 105000", imagem: 'img/image copy 14.png' },
        { nome: 'Capuz ', precoParceria:"R$  60000", precoSemParceria: "R$ 70000", imagem: 'img/image copy 15.png' },
        { nome: 'Sala personalizada ', precoParceria: "R$ 60000", precoSemParceria: "R$ 70000", imagem: 'img/image copy 16.png' },
        { nome: 'Blacklist ', precoParceria: "R$ 1.700.000", precoSemParceria: "R$ 2.000.000", imagem: 'img/image copy 17.png' }
    ],
    desmanche: [
        { nome: 'Desmanche ', precoParceria: "40%", precoSemParceria: "R$ ", imagem:'img/image copy 18.png' },
        { nome: 'lockpick ', precoParceria: "R$ 40.000", precoSemParceria: "R$ 50.000", imagem: 'img/image copy 19.png' },
        { nome: 'Colete Premiun ', precoParceria: "R$ 300.000", precoSemParceria: "R$ 350.000", imagem: 'img/image copy 20.png' },
        { nome: 'Placa ', precoParceria: "R$ 55.000", precoSemParceria: "R$ 75.000", imagem: 'img/image copy 22.png' },
        { nome: 'Faca ', precoParceria: "R$ 250.000", precoSemParceria: "R$ 270.000", imagem: 'img/image copy 21.png' },
        { nome: 'Kit reparo2 ', precoParceria: "R$ 40.000", precoSemParceria: "R$ 50.000", imagem: 'img/image copy 23.png' },
        { nome: 'Bau 500kg ', precoParceria: "R$ 8.500.000", precoSemParceria: "R$ 9.500.000", imagem: 'img/image copy 24.png' },
        { nome: 'Bau 1000kg ', precoParceria: "R$ 11.000.000", precoSemParceria: "R$ 12.000.000", imagem: 'img/image copy 25.png' }
    ],
    drogas: [
        { nome: 'Cocaína', precoParceria: "R$ 11.000", precoSemParceria: "R$ 12.000", imagem:'img/image copy 26.png' },
        { nome: 'Maconha', precoParceria: "R$ 11.000", precoSemParceria: "R$ 12.000", imagem: 'img/image copy 26.png' },
        { nome: 'Cocaina P Venda', precoParceria: "R$ 2.000", precoSemParceria: "R$ 2.100", imagem: 'img/image copy 26.png' },
        { nome: 'Maconha P Venda', precoParceria: "R$ 2.000", precoSemParceria: "R$ 2.100", imagem: 'img/image copy 26.png' },
        { nome: 'Taco', precoParceria: "R$ 210.000", precoSemParceria: "R$ 250.000", imagem: 'img/image copy 27.png' },
        { nome: '.50', precoParceria: "R$ 370.000", precoSemParceria: "R$ 400.000", imagem: 'img/image copy 28.png' },
        { nome: 'Fiven_Seven', precoParceria: "R$ 370.000", precoSemParceria: "R$ 400.000", imagem: 'img/image copy 29.png' },
        { nome: 'Heroina', precoParceria: "R$ 11.000", precoSemParceria: "R$ 12.000", imagem: 'img/image copy 26.png' }

    ],
    contrabando: [
        { nome: 'Mochila X', precoParceria: "R$ 200.000", precoSemParceria:"R$ 220.000", imagem: 'img/image copy 30.png' },
        { nome: 'C4', precoParceria: "R$ 76.000", precoSemParceria:"R$ 82.000", imagem: 'img/image copy 31.png'},
        { nome: 'Masterpick', precoParceria: "R$ 95.000", precoSemParceria:"R$ 100.000", imagem: 'img/image copy 32.png' },
        { nome: 'Laptop', precoParceria: "R$ 90.000", precoSemParceria:"R$ 110.000", imagem: 'img/image copy 33.png' },
        { nome: 'Cnh roubada', precoParceria: "R$ 120.000", precoSemParceria:"R$ 150.000", imagem: 'img/image copy 34.png' },
        { nome: 'Carro ilegal', precoParceria: "R$ 8.00.000", precoSemParceria:"R$ 10.000.000", imagem: 'img/image copy 35.png' },
        { nome: 'Aliança', precoParceria: "R$ 55.000", precoSemParceria:"R$ 60.000", imagem: 'img/image copy 36.png' },
        { nome: 'Maconha/cocainap venda', precoParceria: "R$ 2.000", precoSemParceria:"R$ 2.100", imagem: 'img/image copy 26.png' }





    ]
};

function alterar(categoria) {
    // Mostrar o container de itens
    document.getElementById('itens').style.display = 'block';
    document.getElementById('precos').style.display = 'none';

    // Limpar o container de itens
    const itensContainer = document.getElementById('itens-container');
    itensContainer.innerHTML = ''; // Limpar itens anteriores

    // Mostrar os itens da categoria selecionada
    const itens = categorias[categoria] || [];
    itens.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.onclick = () => selecionarItem(item);

        itemElement.innerHTML = `
            <h3>${item.nome}</h3>
        `;

        itensContainer.appendChild(itemElement);
    });
}

function alterar(categoria) {
    document.getElementById('itens').style.display = 'block';
    document.getElementById('precos').style.display = 'none';

    const itensContainer = document.getElementById('itens-container');
    itensContainer.innerHTML = ''; // Limpar itens anteriores

    const itens = categorias[categoria] || [];
    itens.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.onclick = () => selecionarItem(item, itemElement);

        itemElement.innerHTML = `<h3>${item.nome}</h3>`;

        itensContainer.appendChild(itemElement);
    });
}

function selecionarItem(item, element) {
    document.getElementById('valor1').innerText = item.precoParceria;
    document.getElementById('valor2').innerText = item.precoSemParceria;
    document.getElementById('item-imagem').src = item.imagem;
    document.getElementById('precos').style.display = 'block';

    document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
}

const buttons = document.querySelectorAll('#opcoes button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover a classe "selected" de todos os botões
        buttons.forEach(btn => btn.classList.remove('selected'));

        // Adicionar a classe "selected" ao botão clicado
        button.classList.add('selected');
    });
});
