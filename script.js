document.addEventListener("DOMContentLoaded", () => {
    const caixas = document.querySelectorAll(".caixa");
    const conteudoTitulo = document.querySelector(".conteudo h2");
    const conteudoDescricao = document.querySelector(".conteudo p");
    const itensContainer = document.querySelector(".itens");

    const conteudos = {
        comum: {
            titulo: "Armas",
            descricao: "O que vendem nas facções de armas",
            itens: [
                { 
                    img: "https://i.ibb.co/SBKq7Ss/image-removebg-preview-15.pngg", 
                    texto: "<span style='color: red;'>FAL</span> <br> <br>  PARCERIA : 2.000.000 <br><br> SEM PARCERIA: 2.200.000"  
                },
                { 
                    img: "https://i.ibb.co/f4SwrnB/image-removebg-preview-16.png", 
                    texto: "<span style='color: red;'>G36</span> <br><br> PARCERIA : 1.500.000 <br><br> SEM PARCERIA: 1.800.000"  
                },
                { 
                    img: "https://i.ibb.co/1b8s1CS/image-removebg-preview-17.png", 
                    texto: "<span style='color: red;'>HK416</span> <br><br> PARCERIA : 1.300.000 <br><br> SEM PARCERIA: 1.500.000"  
                },
                { 
                    img: "https://i.ibb.co/ccJbMRk/image-removebg-preview-19.png", 
                    texto: "<span style='color: red;'>M4A4</span> <br> <br> PARCERIA : 1.150.000 <br> <br> SEM PARCERIA: 1.350.000"  
                },
                { 
                    img: "https://i.ibb.co/FqjM5DG/image-removebg-preview-18.png", 
                    texto: "<span style='color: red;'>NAVYCARBINE</span> <br> <br> PARCERIA : 850.000 <br> <br> SEM PARCERIA: 950.000"  
                },
                { 
                    img: "https://i.ibb.co/6wSWfj2/image-removebg-preview-21.png", 
                    texto: "<span style='color: red;'>MTAR-21</span> <br> <br> PARCERIA : 990.000 <br> <br> SEM PARCERIA: 1.000.000"  
                },
                { 
                    img: "https://i.ibb.co/9NJHTdS/image-removebg-preview-20.png", 
                    texto: "<span style='color: red;'>AK47</span> <br> <br> PARCERIA : 1.100.000 <br> <br> SEM PARCERIA: 1.150.000"  
                },
                { 
                    img: "https://i.ibb.co/R0WpdKN/image-removebg-preview-23.png", 
                    texto: "<span style='color: red;'>MACHINE PISTOL</span> <br> <br> PARCERIA : 400.000 <br> <br> SEM PARCERIA: 500.000"  
                },
                { 
                    img: "https://i.ibb.co/gz6PwBF/image-removebg-preview-24.png", 
                    texto: "<span style='color: red;'>FIVEN-SEVEN</span> <br> <br> PARCERIA : 330.000 <br> <br> SEM PARCERIA: 350.000"  
                }      
            ],
        },
        especial: {
            titulo: "Munição",
            descricao: "O que vendem nas facções de Munição",
            itens: [
                { 
                    img: "https://i.ibb.co/YpcKRkd/image-removebg-preview-9.png", 
                    texto: " MUN FAL <br><br> PARCERIA : 6.300 <br><br> SEM PARCERIA: 6.375"  
                },
                { 
                    img: "https://i.ibb.co/mSBYPf4/image-removebg-preview-10.pngg", 
                    texto: "MUN G36 <br><br> PARCERIA : 5.800 <br><br> SEM PARCERIA: 6.000"  
                },
                { 
                    img: "https://i.ibb.co/YpcKRkd/image-removebg-preview-9.png", 
                    texto: "MUN HK416 <br><br> PARCERIA : 4.710 <br><br> SEM PARCERIA: 4.875"  
                },
                { 
                    img: "https://i.ibb.co/MMWdH85/image-removebg-preview-12.png", 
                    texto: "MUN M4A4 <br><br> PARCERIA : 4.290 <br><br> SEM PARCERIA: 4.350"  
                },
                { 
                    img: "https://i.ibb.co/FgDpg6m/image-removebg-preview-11.png", 
                    texto: "MUN NAVYCARBINE <br><br> PARCERIA : 3.100 <br><br> SEM PARCERIA: 3.650"  
                },
                { 
                    img: "https://i.ibb.co/hm7Mg5P/image-removebg-preview-13.png", 
                    texto: "MUN MTAR-21 <br><br> PARCERIA : 3.200 <br><br> SEM PARCERIA: 3.375"  
                },
                { 
                    img: "https://i.ibb.co/YpcKRkd/image-removebg-preview-9.png", 
                    texto: "MUN AK47 <br><br> PARCERIA : 3.600 <br><br> SEM PARCERIA: 3.750"  
                },
                { 
                    img: "https://i.ibb.co/kXsGqzM/image-removebg-preview-14.png", 
                    texto: "MUN MACHINE PISTOL <br><br> PARCERIA : 2.800 <br><br> SEM PARCERIA: 3.050"  
                },
                { 
                    img: "https://i.ibb.co/kXsGqzM/image-removebg-preview-14.png", 
                    texto: "MUN FIVEN-SEVEN <br><br> PARCERIA : 1.950 <br><br> SEM PARCERIA: 2.100"  
                }
            ],
        },
        simples: {
            titulo: "Lavagem",
            descricao: "O que vendem nas facções de Lavagem",
            itens: [
                { 
                    img: "https://i.ibb.co/8bsBpLw/image-removebg-preview-33.png", 
                    texto: "Notebook <br> <br> PARCERIA : 77.000 <br> <br> SEM PARCERIA: 100.000"  
                },
                { 
                    img: "https://i.ibb.co/ynhYnCq/image-removebg-preview-32.png", 
                    texto: "Adrenalina <br><br> PARCERIA : 70.000 <br><br> SEM PARCERIA: 95.000"  
                },
                { 
                    img: "https://i.ibb.co/1YN0W1J/image-removebg-preview-25.png", 
                    texto: "Soco inglês <br><br> PARCERIA : 80.000 <br><br> SEM PARCERIA: 100.000"  
                },
                { 
                    img: "https://i.ibb.co/wSs255P/image-removebg-preview-37.png", 
                    texto: "Kit reparo portão <br><br> PARCERIA : 280.000 <br><br> SEM PARCERIA: 350.000"  
                },
                { 
                    img: "https://i.ibb.co/3FLs4Nx/image-removebg-preview-42.png", 
                    texto: "Machado de batalha <br><br> PARCERIA : 300.000 <br><br> SEM PARCERIA: 350.000"  
                },
                { 
                    img: "https://i.ibb.co/8bLJvYL/image-removebg-preview-26.png", 
                    texto: "Canivete <br><br> PARCERIA : 180.000 <br><br> SEM PARCERIA: 220.000"  
                },
                { 
                    img: "https://i.ibb.co/30pWcHP/image-removebg-preview-31.png", 
                    texto: "Colete <br><br> PARCERIA : 150.000 <br><br> SEM PARCERIA: 160.000"  
                },
                { 
                    img: "https://i.ibb.co/hZykXyt/image-removebg-preview-34.png", 
                    texto: "Maconha / Cocaina para venda <br><br> PARCERIA : 1.600 <br><br> SEM PARCERIA: 2.000"  
                },
                { 
                    img: "https://i.ibb.co/5hvsFjW/image-removebg-preview-40.png", 
                    texto: "Lsd <br><br> PARCERIA : 9.000 <br><br> SEM PARCERIA: 10.000"  
                },
                { 
                    img: "https://i.ibb.co/Vt2zhcn/image-removebg-preview-36.png", 
                    texto: "Cocaina <br><br> PARCERIA : 9800 <br><br> SEM PARCERIA: 10000"  
                },
                { 
                    img: "https://i.ibb.co/w4RRbDY/image-removebg-preview-35.png", 
                    texto: "Maconha <br><br> PARCERIA : 10000 <br><br> SEM PARCERIA: 11.000"  
                },
                { 
                    img: "https://i.ibb.co/pxWTbpd/image-removebg-preview-30.png", 
                    texto: "Blackliste <br><br> PARCERIA : 1.500.000 <br><br> SEM PARCERIA: 2.000.000"  
                },
                { 
                    img: "https://i.ibb.co/ThsNKcj/image-removebg-preview-29.png", 
                    texto: "Masterpick <br><br> PARCERIA : 875.000 <br><br> SEM PARCERIA: 900.000"  
                },
               
                { 
                    img: "https://i.ibb.co/80T4X2f/image-removebg-preview-39.png", 
                    texto: "Lavagem Valor em <br><br> ➡️%⬅️ <br> PARCERIA : 30% <br><br> SEM PARCERIA: 50%"  
                },
                { 
                    img: "https://i.ibb.co/qsJmQCt/image-removebg-preview-27.png", 
                    texto: "Capuz <br><br> PARCERIA : 58.000 <br><br> SEM PARCERIA: 60.000"  
                },
                { 
                    img: "https://i.ibb.co/NF4DWL9/image-removebg-preview-28.png", 
                    texto: "Algemas <br><br> PARCERIA : 9.000 <br><br> SEM PARCERIA: 10.000"  
                },
                { 
                    img: "https://i.ibb.co/bbmhqZT/image-removebg-preview-41.png", 
                    texto: "Chave de algema <br><br> PARCERIA : 18.000 <br><br> SEM PARCERIA: 20.000"  
                },
                { 
                    img: "https://i.ibb.co/w7V5q9R/image-removebg-preview-38.png", 
                    texto: "Kit sequestro <br><br> PARCERIA : 95.000 <br><br> SEM PARCERIA: 100.000"  
                },
                { 
                    img: "https://i.ibb.co/wrWMN8x/image.png", 
                    texto: "Sala Personalizada <br><br> PARCERIA : 1.000.000 <br><br> SEM PARCERIA: 1.500.000"  
                }
            ],
        },
        outra: {
            titulo: "Desmanche",
            descricao: "O que vendem nas facções de Desmanche",
            itens: [
                { 
                    img: "https://i.ibb.co/BKZ31Dq/image-removebg-preview-46.png", 
                    texto: "Taco <br><br> PARCERIA : 170.000 <br><br> SEM PARCERIA: 210.000"  
                },
              
                { 
                    img: "https://i.ibb.co/3FLs4Nx/image-removebg-preview-42.png", 
                    texto: "MAchado de batalha <br><br> PARCERIA : 300.000 <br><br> SEM PARCERIA: 350.000"  
                },
                { 
                    img: "https://i.ibb.co/8bLJvYL/image-removebg-preview-26.png", 
                    texto: "Faca <br><br> PARCERIA : 180.000 <br><br> SEM PARCERIA: 220.000"  
                },
                
                { 
                    img: "https://i.ibb.co/N1PQ1YY/image.png", 
                    texto: "Desmanche <br><br> PARCERIA : 40% <br><br> SEM PARCERIA: 60%"  
                },
                { 
                    img: "https://i.ibb.co/Fm52DxH/image-removebg-preview-43.png", 
                    texto: "Lockpick <br><br> PARCERIA : 35.000 <br><br> SEM PARCERIA: 50.000"  
                },
                { 
                    img: "https://i.ibb.co/Dw2n4nB/image-removebg-preview-48.png", 
                    texto: "Placa <br><br> PARCERIA : 63.000 <br><br> SEM PARCERIA: 70.000"  
                },
                { 
                    img: "https://i.ibb.co/Bg9VmV1/image-removebg-preview-44.png", 
                    texto: "C4 <br><br> PARCERIA : 70.000 <br><br> SEM PARCERIA: 75.000"  
                },
                { 
                    img: "https://i.ibb.co/NxBqzMW/image-removebg-preview-45.png", 
                    texto: "Bomba-relogio <br><br> PARCERIA : 165.000 <br><br> SEM PARCERIA: 180.000"  
                },
                { 
                    img: "https://i.ibb.co/YTfRTgB/image-removebg-preview-50.png", 
                    texto: "Caminhão de 500kg <br><br> PARCERIA : 6.600.000 <br><br> SEM PARCERIA: 8.500.000"  
                },
                { 
                    img: "https://i.ibb.co/L8CSpRV/image-removebg-preview-49.png", 
                    texto: "Caminhão de 750kg <br><br> PARCERIA : 9.800.000 <br><br> SEM PARCERIA: 10.000.000"  
                },
                { 
                    img: "https://i.ibb.co/LChmSxg/image-removebg-preview-51.png", 
                    texto: "Caminhão de 1500kg <br><br> PARCERIA : 19.600.000 <br><br> SEM PARCERIA: 23.000.000"  
                },

                { 
                    img: "https://i.ibb.co/NZCPHf7/image-removebg-preview-47.png", 
                    texto: "Nitro <br><br> PARCERIA : 28.000 <br><br> SEM PARCERIA: 30.000"  
                },
                { 
                    img: "https://i.ibb.co/JQn43GH/image-removebg-preview-52.png", 
                    texto: "Mochila X <br><br> PARCERIA : 180.000 <br><br> SEM PARCERIA: 200.000"  
                },
            ],
        },
    };

    caixas.forEach(caixa => {
        caixa.addEventListener("click", () => {
            const tipo = caixa.dataset.tipo;
            const conteudo = conteudos[tipo];

            // Atualiza título e descrição
            conteudoTitulo.textContent = conteudo.titulo;
            conteudoDescricao.textContent = conteudo.descricao;

            // Atualiza itens
            itensContainer.innerHTML = "";
            conteudo.itens.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.classList.add("item");
                itemElement.innerHTML = `
                    <img src="${item.img}" alt="${item.texto}">
                    <span>${item.texto}</span>
                `;
                itensContainer.appendChild(itemElement);
            });
        });
    });
});
