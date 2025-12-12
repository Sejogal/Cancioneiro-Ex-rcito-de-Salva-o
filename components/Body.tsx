// import AntDesign from '@expo/vector-icons/AntDesign';
// import { Picker } from "@react-native-picker/picker";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Alert, PixelRatio, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
// import letra from '@/assets/letra.json'; letra no json

const escala = PixelRatio.getFontScale();

const body = () => {

    const scheme = useColorScheme(); // "light" ou "dark"
    const isDarkMode = scheme === 'dark';

    const [letra, setLetra] = useState([
        {
            id: 1,
            tb: 544,
            selecionado: true,
            estrofe1: 'Senhor, meu Deus, quando eu maravilhado \nParo a pensar no Teu grandioso ser,\nContemplo o céu, de estrelas pontilhado,\nA declarar ao mundo Teu poder...',
            estrofe2: 'Quando lampeja e ruge a tempestade\nE faz tremer a terra e o mar,\nA nuvem solta a chuva refrescante\nE o arco-íris vem-me alegrar...',
            estrofe3: 'Ao percorrer as matas e florestas,\nEu vejo as aves e ouço seu cantar,\nMontes e rios eis também em festa,\nPor tudo isso quero a Deus louvar...',
            estrofe4: 'Quando percebo que na cruz maldita, Por Teu amor, Jesus morreu por mim,\nE me livrou do jugo do pecado\nAli vertendo o sangue carmesim...',
            estrofe5: 'E quando, enfim, for tudo esclarecido,\nO que a minha fé antecipou,\nE ao ouvir celestes harmonias\nEu louvarei melhor Quem me salvou.',
            som: '',
            coro: 'Então minha alma canta a Ti, Senhor,\n Quão grande és Tu, quão grande és Tu!  ) bis'
        },
        {
            id: 2,
            tb: 25,
            selecionado: true,
            estrofe1: 'Se há ternura neste mundo E os homens tentam perdoar, Se amor existe em muita gente Que pode compaixão mostrar...',
            estrofe2: 'Se muitos vivem para outros E dão de si a seus irmãos, Se há momentos tão sublimes Em que inimigos dão as mãos...',
            estrofe3: 'Se alegrias e tristezas Sabemos nós compartilhar, Se mesmo falhos como somos Tentamos certo amor mostrar...',
            som: '',
            coro: 'Oh! Quanto mais o Pai celeste,\nNo Seu amor, quer perdoar!\nOh! Quanto mais o Pai celeste\nSustento e bênção pode dar!'
        },
        {
            id: 3,
            tb: 562,
            selecionado: true,
            estrofe1: 'Meu Pai é Juiz e Governador, Dos reinos do mundo é supremo Senhor. Seu magno império, mais vasto que o mar; Sou filho de um Rei, Seu poder é sem par.',
            estrofe2: 'Meu Pai é monarca e dono real De lindos palácios de ouro e cristal. De jóias, bem cheios Seus cofres estão; Há tesouros imensos em Sua mansão.',
            estrofe3: 'Meu lar neste mundo por certo não é, Sou filho de um Rei, vivo aqui pela fé. Vestidos, coroa e um nome terei; Herança de glória na casa do Rei.',
            som: '',
            coro: 'Eu sou filho de um Rei, (bis)\nHerdeiro com Cristo;\nSim, sou filho de um Rei!'
        },
        {
            id: 4,
            tb: 717,
            selecionado: true,
            estrofe1: 'Ao Deus de Abraão louvai, Do vasto céu Senhor, Eterno e poderoso Pai E Deus de amor. Augusto Deus Jeová, Que terra e céu criou! Minha alma o nome exaltará Do grande Eu Sou.',
            estrofe2: 'Ao Deus de Abraão louvai.Eis, por mandado Seu, Minha alma deixa a terra e vai Gozar o céu. O mundo desprezei, Seu lucro e seu louvor. A Deus por meu quinhão tomei E protetor.',
            estrofe3: 'Meu guia Deus será; Seu infinito amor Feliz em tudo me fará Por onde eu for. Tomou-me pela mão, Nas trevas deu-me luz E dá-me a eterna salvação Por meu Jesus.',
            estrofe4: 'Meu Deus por Si jurou, E nele confiei E para o céu, que preparou, Eu subirei. Sua face eu hei de ver, Confiado em Seu amor, E para sempre engrandecer Meu Redentor!',
            som: '',
            coro: ''
        },
        {
            id: 5,
            tb: 422,
            selecionado: true,
            estrofe1: "Aleluia! entoam vozes Que jamais irão calar. Aleluia! jubilosos, Cantam anjos sem cessar, Ao Senhor sempre adorando Ante o glorioso altar.",
            estrofe2: "Aleluia! Já liberta, Vibra tu, Jerusalém! Aleluia! Já teus filhos Exilados, muito além, Nos desvios deste mundo, Ao Teu seio alegres vêm.",
            estrofe3: "Aleluia! Nós ousamos Entoar a Deus louvor. Ele aceita e perdoa O contrito pecador. Humilhados, penitentes, Nos voltemos ao Senhor.",
            estrofe4: "Suplicamos, nos concedas, Ó Trindade divinal, Termos comunhão perfeita Na mansão celestial. E cantemos, veramente, Aleluias, afinal!",
            som: "",
            coro: ''
        },
        {
            id: 6,
            tb: 766,
            selecionado: true,
            estrofe1: "Formosos são os pés de quem proclama a paz, Gloriosa paz dos céus, Que faz ouvir a salvação de ti Sião: Reina Deus! Reina Deus!",
            estrofe2: "Sem formosura nem beleza no sofrer, Varão de dor: Jesus, Foi desprezado e rejeitado, sim, por nós: Reina Deus! Reina Deus!",
            estrofe3: "Moído por nossas muitas transgressões, E nossa dor levou; Os desgarrados nos Seus ombros carregou: Reina Deus! Reina Deus!",
            estrofe4: "Como cordeiro ao matadouro foi Jesus, Sem murmurar, morreu; No chão caiu Seu sangue, fonte carmesim: Reina Deus! Reina Deus!",
            estrofe5: "Da sepultura ressurgiu com grande poder, E vivo está, por nós! O amor de Deus, ao mundo, Cristo demonstrou: Reina Deus! Reina Deus!",
            som: "",
            coro: "Reina Deus! (4x)"
        },

        {
            id: 7,
            tb: 269,
            selecionado: true,
            estrofe1: "A terra semeamos\nA fim de nos dar pão,\nMas Deus é quem a nutre\nCom benfazeja mão.\nEle é quem manda o frio,\nA calma no verão,\nA chuva e o doce orvalho,\nE a fresca viração.\nO Senhor é Fonte\nDe todo o nosso bem.\nLouvai a Deus, (2x)\nPor todo o Seu amor!",
            estrofe2: "O Criador de tudo,\nQue perto ou longe está,\nColora a flor silvestre\nE à estrela o brilho dá.\nOs ventos Lhe obedecem\nE o bravo mar também,\nAs frágeis avezinhas\nO Seu cuidado têm.",
            estrofe3: "A nós, porém, Seus filhos,\nRevela mais amor,\nMandando-nos à terra\nJesus, o Salvador.\nDotando-nos em Cristo\nDe tudo quanto tem,\nFazendo-nos herdeiros\nDe Deus, o Sumo Bem.",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 8,
            tb: 752,
            selecionado: true,
            estrofe1: "A Deus cantamos nós,\nSão tantos Seus favores.\nCom voz de gratidão\nErgamos os louvores,\nPois, desde nossos pais,\nSeu braço nos cercou,\nE, pelo Seu amor,\nDe dons nos cumulou.",
            estrofe2: "Que tão bondoso Deus\nDe nós esteja perto,\nNos dando o Seu amor\nEm meio ao mundo incerto.\nGuiando os nossos pés,\nNos guarde em Sua paz\nE afaste todo o mal\nCom Seu poder veraz.\nLouvemos sempre a Deus,\nAo Pai e ao Filho amado\nE Aquele que é, também,\nCom Eles adorado.\nEterno e Trino Deus,\nTe rendem gratidão\nOs santos e anjos Teus\nE toda a criação!",
            estrofe3: "",
            estrofe4: "",
            som: ""
        },
        {
            id: 9,
            tb: 42,
            selecionado: true,
            estrofe1: "Povos que em toda a terra estão,\nA Deus bendigam com prazer!\nPois, como os anjos glória dão,\nAssim devemos nós fazer.",
            estrofe2: "Eis-nos na casa do Senhor,\nSeu nome augusto a celebrar.\nOvelhas somos do Pastor,\nA quem viemos adorar.",
            estrofe3: "O mundo inteiro O louvará,\nPois é bondoso o Criador!\nO Seu amor sem fim será;\nÉ sempre o mesmo, o Benfeitor!",
            estrofe4: "Servos sejamos de Jesus\nE bem guardemos Sua lei;\nLevemos sempre a nossa cruz,\nSeguindo a Cristo, o santo Rei.",
            som: ""
        },
        {
            id: 10,
            tb: 127,
            selecionado: true,
            estrofe1: "Ó Deus, eterno ajudador,\nConheces o porvir.\nNo temporal és protetor\nE abrigo a nos servir.",
            estrofe2: "Teu nome é sempre amparador,\nGuarida aos santos Teus.\nTeu braço é forte, acolhedor,\nDefesa certa, ó Deus!",
            estrofe3: "Estava o mundo em formação\nE os montes a fundir.\nReinavas já, ó Deus, então,\nNos tempos do porvir.",
            estrofe4: "Mil anos são aos olhos Teus\nQual luz crepuscular.\nMais breves são que a aurora, ó Deus,\nQue foge ao sol raiar.",
            estrofe5: "Ó Deus, eterno ajudador,\nSenhor do que há de vir,\nSê nosso abrigo e protetor\nAgora e no porvir.",
            som: ""
        },
        {
            "id": 11,
            "tb": 45,
            "selecionado": true,
            "estrofe1": "Vós, criaturas de Deus Pai,\nTodos, erguei a voz, cantai:\nAleluia! Aleluia!\nTu, sol dourado a refulgir,\nTu, lua em prata a reluzir,\nOh! louvai-O! Oh! louvai-O!\nAleluia! Aleluia! Aleluia!",
            "estrofe2": "Tu, brisa amena a bafejar,\nVós, nuvens que pairais no ar,\nOh! louvai-O! Aleluia!\nTu, linda aurora em teu alvor,\nTu, suave ocaso multicor,\nOh! louvai-O! Oh! louvai-O!\nAleluia! Aleluia! Aleluia!",
            "estrofe3": "Vós, homens sábios e de bem,\nA todos proclamai também:\nAleluia! Aleluia!\nAo Filho glória, glória ao Pai,\nE a Deus Espírito honra dai.\nOh! louvai-O! Oh! louvai-O!\nAleluia! Aleluia! Aleluia!",
            "estrofe4": "",
            "som": ""
        },
        {
            id: 12,
            tb: 548,
            selecionado: true,
            estrofe1: "Ó Rei sublime, em majestade e glória,\nSobre as milícias do celeste além!\nOuve o louvor, os hinos de vitória,\nDos que de Ti recebem todo o bem!",
            estrofe2: "Nos altos céus, augustos anjos cantam\nLouvor eterno ao soberano Amor,\nE em coro os salvos com fervor exaltam\nO nome ilustre do seu Benfeitor.",
            estrofe3: "Eterno Deus, Teus filhos vês prostrados\nAnte o fulgor da resplendente Luz,\nPois do pecado foram resgatados\nE agora rendem glórias a Jesus!",
            estrofe4: "",
            coro: "Vinde, ó remidos, filhos de Deus,\nGlória rendamos, que chegue até os céus!",
            som: ""
        },
        {
            id: 13,
            tb: 435,
            selecionado: true,
            estrofe1: "Admirável, neste mundo,\nÉ Teu nome, bom Senhor!\nElevaste Tua glória\nSobre os céus, ó Criador!\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            estrofe2: "Lá no céu luzentes vejo\nLindas obras do Senhor;\nMultidões de estrelas brilham\nEm celeste resplendor.\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            estrofe3: "Tão pequenos são os homens!\nDeles Cristo Se lembrou\nE, na sua semelhança,\nLá da glória Se humilhou.\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            estrofe4: "Bem menor que Deus tornado,\nEle, o grande Redentor,\nQuis por nós provar a morte,\nMaravilha de favor!\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            estrofe5: "Mas, agora, junto ao trono,\nReina em soberana luz\nE é de glória coroado\nNosso Salvador Jesus!\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            som: ""
        },
        {
            id: 14,
            tb: 657,
            selecionado: true,
            estrofe1: "Tu és fiel, Senhor, meu Pai celeste;\nPleno poder aos Teus filhos darás;\nNunca mudaste, Tu nunca faltaste,\nTal como eras Tu sempre serás.",
            estrofe2: "Tu és fiel, Senhor! (bis)\nDia após dia com bênçãos sem fim,\nTua mercê me sustenta e guarda,\nTu és fiel, Senhor, fiel a mim!",
            estrofe3: "Flores e frutos, montanhas e mares,\nSol, lua, estrelas no céu a brilhar;\nTudo criaste na terra e nos ares.\nTodo o universo vem, pois, Te louvar.",
            estrofe4: "Pleno perdão Tu dás, paz, segurança;\nCada momento me guias, Senhor.\nE no porvir, oh! que doce esperança:\nDesfrutarei do Teu rico favor.",
            som: ""
        },
        {
            id: 15,
            tb: 27,
            selecionado: true,
            estrofe1: "Ao Deus de amor e de imensa bondade,\nCom voz de júbilo vinde e aclamai;\nCom coração transbordante de graça,\nSeu grande amor, todos, vinde e louvai.",
            estrofe2: "No céu, na terra, que maravilhas\nEstá operando o poder do Senhor!\nMas Seu amor aos homens perdidos,\nDas maravilhas, é sempre a maior!",
            estrofe3: "Já nossos pais nos contaram a glória\nDe Deus, falando com muito prazer,\nQue nas tristezas, nos grandes perigos,\nEle os salvou por Seu grande poder.",
            estrofe4: "Hoje também nós bem alto cantamos\nQue as orações Ele nos atendeu;\nSeu forte braço, que é tão compassivo,\nEm nosso auxílio Ele sempre estendeu.",
            estrofe5: "Como até hoje e daqui para sempre,\nEle será nosso eterno poder,\nNosso castelo bem forte e seguro\nE nossa fonte de excelso prazer.",
            som: ""
        },
        {
            id: 16,
            tb: 748,
            selecionado: true,
            estrofe1: "Santo! Santo! Santo! Deus onipotente!\nDesde o amanhecer nós cantamos com ardor.\nSanto! Santo! Santo! Bom e verdadeiro!\nÉs Deus triúno, excelso Criador!",
            estrofe2: "Santo! Santo! Santo! Todos os remidos,\nJuntos com os anjos, proclamam Teu louvor.\nAntes de formar-se o firmamento e a terra,\nEras, e sempre és, e hás de ser, Senhor.",
            estrofe3: "Santo! Santo! Santo! Nós, os pecadores,\nNão podemos ver Tua glória sem tremor.\nTu somente és santo; só Tu és perfeito,\nDeus soberano, imenso em Teu amor!",
            estrofe4: "Santo! Santo! Santo! Deus onipotente!\nTuas obras louvam Teu nome com fervor.\nSanto! Santo! Santo! Justo e compassivo!\nÉs Deus triúno, excelso Criador!",
            som: ""
        },
        {
            id: 17,
            tb: 43,
            selecionado: true,
            estrofe1: "No santo dia do Senhor\nÉ bom, com salmos de louvor,\nO grande, eterno Deus honrar\nE Sua graça proclamar.",
            estrofe2: "Bem de manhã me alegrarei\nPor muitas bênçãos que provei;\nE, vindo a noite, o coração\nTransbordará de gratidão.",
            estrofe3: "A Ti, minha alma se erguerá\nE jubilosa cantará,\nEm doces hinos, o louvor,\nDo meu benigno Salvador.",
            estrofe4: "Que sábias Tuas obras são\nE dignas de contemplação!\nOs Teus conselhos, ó Jesus,\nRefletem pura e clara luz!",
            estrofe5: "O justo fazes florescer\nE, qual palmeira, engrandecer;\nPorém os ímpios falharão\nE, como as ervas, secarão.",
            estrofe6: "Tu, Deus excelso, nos darás\nA vida plena e santa paz;\nE cantaremos com ardor:\n―És grande, justo e bom, Senhor!",
            som: ""
        },
        {
            id: 18,
            tb: 435,
            selecionado: true,
            estrofe1: "Deus eterno, Te adoramos,\nDeus da glória, Deus do amor.\nNossos corações Te damos\nGratos pelo Teu favor.\nVem, extirpa o vil pecado,\nAfugenta a tentação.\nDoador do bem sagrado,\nDá-nos Tua salvação.",
            estrofe2: "Tuas obras anunciam\nTeu imenso resplendor.\nCéus, estrelas, terra e anjos\nCantam hino ao Teu louvor.\nVales, montes e campinas,\nLindos prados, verde mar,\nAves, fontes cristalinas\nVêm conosco Te adorar.",
            estrofe3: "És perdão e dom eterno,\nSempre pronto a abençoar,\nFonte do prazer superno\nOnde vamos descansar.\nCristo és Tu, e o Pai, bendito,\nSomos Teus em Teu amor.\nTorna Teu rebanho unido,\nGuia-nos, ó bom Pastor.",
            estrofe4: "Ó mortais, cantai o hino\nQue o universo quer cantar,\nPois do Pai o amor divino\nFaz-nos mais e mais amar.\nJubilantes, esperemos\nA derrota sobre o mal;\nVinde, alegres exaltemos\nA vitória triunfal.",
            som: ""
        },
        {
            id: 19,
            tb: 333,
            selecionado: true,
            estrofe1: "Juntos cantemos em louvor: Deus é bom!\nCom alegria e fervor — Deus é bom!\nAlmas despertem do pecar,\nMudem o pranto por cantar,\nCristo Jesus nos quer salvar — Deus é bom!",
            estrofe2: "Deus é bom! Deus é bom!\nJuntos cantemos sem cessar: Deus é bom!\nGozo inefável dá Jesus — Deus é bom!\nEle concede santa luz — Deus é bom!\nÉ nosso escudo e protetor,\nSempre ajuda com amor,\nFiel companheiro e bom Pastor — Deus é bom!",
            estrofe3: "Ide ao mundo proclamar: Deus é bom!\nEle liberta do pecar — Deus é bom!\nVitorioso sobre o mal,\nDá-nos poder pentecostal,\nVida eterna celestial — Deus é bom!",
            som: ""
        },
        {
            id: 20,
            tb: 721,
            selecionado: true,
            estrofe1: "Alma, bendize ao Senhor, Rei potente de glória;\nDe Suas bênçãos está viva em ti a memória.\nOh! despertai,\nHarpa e saltério, entoai\nHinos de graça e vitória.",
            estrofe2: "Alma, bendize ao Senhor que o universo governa,\nQue em Suas asas te leva, qual águia mui terna.\nEle te ouviu\nNo que melhor te serviu;\nGuarda-te com mão paterna.",
            estrofe3: "Louva ao Senhor, que teus feitos prospera e defende;\nCom Seu amor e bondade Ele sempre te atende!\nPensa outra vez\nEm tudo o que Ele te fez\nCom Seu amor que transcende!",
            estrofe4: "Alma, por ti seja Deus, o Senhor, adorado.\nTudo o que vive bendiga o Seu nome sagrado.\nDeus, minha luz\n— Todo o meu ser o traduz —\nSê para sempre exaltado!",
            som: ""
        },
        {
            id: 21,
            tb: 205,
            selecionado: true,
            estrofe1: "Forte Deus, Conselheiro Maravilhoso,\nPai da Eternidade, Príncipe da Paz;\nUm menino nos nasceu, um Filho se nos deu;\nE o povo em densas trevas viu grande luz!",
            estrofe2: "Vero Deus é Jesus, Verbo encarnado;\nGlorioso Salvador que ressuscitou!\nPois Deus ao mundo amou, Seu Filho enviou\nE dissipou as trevas. Que grande luz!",
            estrofe3: "Rei dos reis, o Senhor alto e sublime;\nSeja exaltado o nome de Jesus!\nAo mundo voltará e sempre reinará,\nNão haverá mais trevas, só grande luz!",
            estrofe4: "",
            som: ""
        },
        {
            id: 22,
            tb: 161,
            selecionado: true,
            estrofe1: "Não sei por que o amor foi revelado\nDe um Ser a Quem os anjos culto dão;\nPor que, qual Bom Pastor, quis procurar-nos\nA fim de nos livrar da perdição.\nMas isto eu sei: nasceu qual criancinha,\nNa pobre manjedoura de Belém;\nComo homem puro e nobre andou na terra,\nO Salvador que rejeitaram com desdém.",
            estrofe2: "Não sei avaliar o preço amargo\nDa paz perene que Ele nos deixou,\nNem compreendo como, quebrantado,\nNa rude cruz, Seu coração ficou.\nMais isto eu sei: que alenta as almas tristes\nE purifica o mais vil pecador:\nAo sobrecarregado traz alívio,\nPois sempre permanece o mesmo Salvador.\nNão sei se os povos hão de recebê-lO,\nOu quando regerá seus corações,\nComo há de preencher perfeitamente,\nDe sábio e simples, as aspirações.\nMas isto eu sei: verão a Sua glória;\nDo sofrimento o fruto há de brotar,\nE, em dia alegre, a luz do céu radiante\nO Salvador trará quando Ele aqui voltar.",
            estrofe3: "Não sei prever o que nós sentiremos,\nMaravilhados ante o resplendor\nDAquele cujo mando traz bonança,\nE cuja voz inspira tanto amor.\nMas isto eu sei: que em jubiloso canto\nOs céus e a terra juntos louvarão;\nAo contemplar a majestade e glória\nDo Salvador real a Quem adorarão.",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 23,
            tb: 367,
            selecionado: true,
            estrofe1: "Redentor Onipotente,\nPoderoso Salvador,\nAdvogado Onisciente\nÉ Jesus, meu bom Senhor.\nUm abrigo sempre perto\nPara todo o pecador,\nUm amigo inseparável\nÉ Jesus, meu Salvador!",
            estrofe2: "Água viva, Pão da vida,\nDoce sombra no calor,\nQue ao descanso nos convida,\nÉ Jesus, meu Salvador!\nSol que extingue densas trevas\nRefulgindo em plena luz,\nNoite eterna dissipando,\nÉ meu bom Senhor, Jesus.",
            estrofe3: "Fundamento inabalável,\nEm que posso confiar,\nInfalível, imutável,\nRocha firme e secular!\nPorta aberta, sempre aberta,\nConduzindo à salvação,\nRica fonte donde emana\nGozo, paz, consolação!",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 24,
            tb: 265,
            selecionado: true,
            estrofe1: "Conta-me a antiga história\nDo grande Salvador,\nDe Cristo e Sua vida,\nDe Cristo e Seu amor.\nFala bem claramente,\nPois quero alcançar\nA altura do mistério:\nQue Deus me pode amar.",
            estrofe2: "Conta-me a antiga história,\nQue fala ao coração,\nDe Cristo e Sua glória,\nDe Cristo e Seu perdão!",
            estrofe3: "Fala-me com doçura\nDo amado Redentor,\nA mim, que tanto sofro\nPor ser um pecador.\nSe queres consolar-me\nEm tempo de aflição,\nOh! conta a bela história\nQue alegra o coração!",
            estrofe4: "Se o brilho deste mundo\nToldar do outro a luz,\nOh! narra com ternura\nA história de Jesus!\nE, quando, enfim, a aurora\nDo mundo além raiar,\nRecorda a antiga história:\nQue Deus nos quis salvar!",
            som: "",
            coro: ""
        },
        {
            id: 25,
            tb: 216,
            selecionado: true,
            estrofe1: "Eu folgo em repeti-la,\nA história de Jesus,\nQue da suprema glória\nBaixou à amarga cruz!\nSim, folgo em divulgá-la,\nPois ela satisfaz\nO anelo da minha alma\nE tudo o que me apraz.",
            estrofe2: "Eu folgo em repeti-la,\nPois tal foi Seu amor\nQue, por Seus inimigos,\nMorreu o Salvador!\nJesus, o Cristo, ainda\nCom terna compaixão,\nProcura os pecadores\nE dá-lhes Seu perdão.",
            estrofe3: "Eu folgo em repeti-la,\nPois há quem nunca ouviu\nDa salvação de Cristo\nNem Seu amor sentiu!\nE, quando os meus louvores\nNa glória eu entoar,\nDe Deus, o amor eterno,\nEu hei de celebrar!",
            estrofe4: "",
            som: "",
            coro: "Oh! Doce e bela história\nDe Cristo, o Salvador!\nDe Sua eterna glória,\nDe Seu imenso amor!",
        },
        {
            id: 26,
            tb: 618,
            selecionado: true,
            estrofe1: "Jesus, Teu nome é santo,\nAmável Teu querer;\nLouvor real, com puro amor,\nQueremos-Te render.\nPoder e honra e glória a Ti\nNós vimos tributar,\nCom gratidão e devoção\nTeu culto celebrar.",
            estrofe2: "Jesus, Teu nome é santo,\nMerece o nosso amor;\nNos altos céus és nosso Deus,\nO nosso Protetor.\nIncomparável sempre és Tu\nEm Tua compaixão,\nPois Tu vieste ao mundo vil\nFazer-Te nosso irmão!",
            estrofe3: "Jesus, Teu nome é santo,\nAmarga foi a cruz;\nO Teu sofrer, o Teu penar\nÀ vida nos conduz.\nNa glória já sentado estás,\nAtento à adoração\nQue Teus fiéis Te vêm prestar\nCom grato coração!",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 27,
            tb: 319,
            selecionado: true,
            estrofe1: "Quem é Ele, frágil ser,\nQue os pastores querem ver?",
            estrofe2: "É o Senhor, que bela história,\nÉ o Senhor da eterna glória.\nDai-Lhe honras e louvor,\nCoroai-O Rei, Senhor!\nQuem é Ele que, ao falar,\nPode as lágrimas secar?",
            estrofe3: "Quem é Ele que, ao chegar,\nTodo o povo quer louvar?",
            estrofe4: "Quem é Ele, lá na cruz,\nQue à vida nos conduz?",
            estrofe5: "Quem é Ele que sofreu\nTriste morte e venceu?",
            estrofe6: "Quem é Ele que está\nNo Seu trono e reinará?",
            som: "",
            coro: ""
        },
        {
            id: 28,
            tb: 86,
            selecionado: true,
            estrofe1: "Em Cristo não há norte ou sul,\nNão há mais raça ou cor:\nNós todos nEle somos um,\nUnidos pelo amor.",
            estrofe2: "A todos Cristo vem trazer\nConcórdia e plena paz.\nA santa causa do Senhor\nA nossa união refaz.",
            estrofe3: "Uni-vos, todos, em Jesus\nE ao mundo proclamai\nO que Ele diz: ―É Meu irmão\nQuem serve ao Santo Pai‖.",
            estrofe4: "Jesus irmana norte e sul,\nIguala raça e cor.\nEm Cristo os homens todos são\nUnidos pelo amor.",
            som: "",
            coro: ""
        },
        {
            id: 29,
            tb: 201,
            selecionado: true,
            estrofe1: "Todos nos prostremos\nDiante de Jesus\nPara confessá-lO\nRei da glória e luz;\nDeus, o Pai, mostrou-nos\nQue Ele é Senhor\nE que, desde o início,\nFoi o Verbo e o Amor.",
            estrofe2: "Pelo Seu comando\nFez-se a criação.\nOs milhares de anjos\nDa eterna mansão,\nTronos e domínios,\nAstros a brilhar\nE a ordem celeste\nFazem-nos pasmar.",
            estrofe3: "Cristo, em forma humana,\nSua cruz tomou;\nObediente, humilde,\nEle Se entregou.\nDeus Lhe deu um nome,\nNome sem igual,\nQue Jesus manteve\nPuro até o final.",
            estrofe4: "Feito servo e homem,\nEle triunfou,\nAlto mais que todos\nEle Se elevou;\nAssentou-Se à destra\nDo Deus Criador\nPara ser, na glória,\nNosso Intercessor.\nEsse mesmo Cristo\nHá de aqui voltar\nTriunfante em glória\nPara nos buscar.\nPovos todos, dai-Lhe\nHonra e devoção.\nVinde confessá-lO\nRei do coração!",
            som: "",
            coro: ""
        },
        {
            id: 30,
            tb: 232,
            selecionado: true,
            estrofe1: "Belo e bom Jesus,\nÓ Rei da terra e céu,\nAmado Filho de Deus Pai;\nÉs todo o meu louvor,\nMinha esperança e amor;\nA Ti meu canto alegre vai.",
            estrofe2: "Se paro a contemplar\nO sol e estrelas mil\nNos altos céus a refulgir,\nSinto que tens, Jesus,\nMais resplendente luz,\nClarão divino a difundir.",
            estrofe3: "Florestas, montes, céus,\nA primavera em flor\nBelezas podem revelar;\nMais belo e puro és Tu,\nQue fazes com amor\nO triste coração cantar.",
            estrofe4: "Naquela triste cruz\nMorreste, ó bom Jesus,\nA fim de o pecador salvar;\nVivo com Deus estás,\nUm dia voltarás;\nOh! vem, Senhor, os Teus buscar!",
            som: "",
            coro: ""
        },
        {
            id: 31,
            tb: 477,
            selecionado: true,
            estrofe1: 'Amor divino, que desceste!\nJesus, que por amor morreste!\nAh! quanta dor não padeceste!\nMinha alma vieste resgatar\nE meu amor ganhar!',
            estrofe2: 'Amor, que tão fiel seguias\nmim, que sem amor Tu vias!\nOh! quanto amor por mim sentias,\nEterno Deus, Senhor Jesus,\nSofrendo sobre a cruz!',
            estrofe3: 'Amor, que tudo me perdoas,\nJesus, que até mesmo abençoas\nUm réu de quem Te afeiçoas!\nVencido, ó Salvador, por Ti,\nTeu grande amor senti!',
            estrofe4: 'Amor sublime, que perduras,\nQue em Tua graça me seguras,\nCercando-me de mil venturas!\nAceita, agora, ó Salvador,\nO meu humilde amor!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 32,
            tb: 1,
            selecionado: true,
            estrofe1: 'Conheces este nome admirável\nQue de Deus nos traz perdão?\nBendito, inspirado, adorável,\nBelo nome de Jesus!',
            estrofe2: 'Dá paz divina ao coração contrito,\nA perfeita salvação;\nA todos os aflitos dá consolo,\nBelo nome de Jesus!',
            estrofe3: 'Brilhando, qual estrela matutina,\nSobre as trevas terrenais,\nCoragem dá à vida, ilumina,\nBelo nome de Jesus!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Nome entre todos glorioso\nJamais igual se encontrou\nPois salvação não há em nenhum outro,\nBelo nome de Jesus!'

        },
        {
            id: 33,
            tb: 526,
            selecionado: true,
            estrofe1: 'Belo Jesus, ó luzeiro de Deus,\nDoce e terno vieste dos céus;\nBelo Jesus, de humilde nascer,\nTens, no entanto, divino poder.',
            estrofe2: 'Belo Jesus, belo Jesus,\nTu és a pérola de grande preço.\nBelo Jesus, belo Jesus,\nNós Te adoramos, ó meigo Jesus.',
            estrofe3: 'Belo Jesus, quanto gozo nos dás,\nSempre na vida nos protegerás;\nBelo Jesus, o emblema do bem,\nVirtude excelsa, riqueza do além.',
            estrofe4: 'Belo Jesus, tão humilde e sem par,\nVieste ao mundo pra todos salvar;\nBelo Jesus, vem aqui redimirm\n pecador que a Ti queira vir.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 34,
            tb: 158,
            selecionado: true,
            estrofe1: 'Àquele que, de amor por nós, à morte Se entregou E,\npela mão tomando-nos, do mal nos libertou,\nQue nos levou de novo a Deus, o Deus de todo o amor,\nACristosoem, pelos céus, os ecos de louvor.',
            estrofe2: 'Louvado seja Quem nos quis de Deus aproximar E,\n em reino e sacerdotes Seus, com sangue consagrar.\nLouvado seja Quem o dom do Espírito nos deu;\nLouvado seja, pois que abriu a entrada para o céu.',
            estrofe3: 'Aos Teus ouvidos, santo Pai, eleve-se o louvor,\nQue destes fracos lábios sai, a Cristo, Salvador.\nPois muito nos apraz saber que a Ti, no santo lar\n,Louvor a Cristo, agrada ouvir na terra celebrar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 35,
            tb: 576,
            selecionado: true,
            estrofe1: 'A Deus bendizemos: por Seu grande amor\nSeu Filho bendito por nós todos deu;\nE graça concede ao mais vil pecador,\nAbrindo-lhe a porta de entrada no céu.',
            estrofe2: 'Exultai! Exultai! E louvai com fervor\nA Jesus. Exaltai a Jesus Redentor!\nA Deus bendizemos, porquanto, do céu,\nSeu Filho bendito por nós todos deu.',
            estrofe3: 'Oh! graça real! foi assim que Jesus,\nMorrendo, Seu sangue por nós derramou.\nHerança nos céus, comos salvos em luz,\nLegou-nos Aquele que o preço pagou.',
            estrofe4: 'Tal prova de amor nos persuade a confiar\nNos merecimentos do Filho de Deus;\nE quem a Jesus, pela fé, se entregar,\nVai vê-lO triunfantena glória dos céus!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 36,
            tb: 78,
            selecionado: true,
            estrofe1: 'Desperta já, meu coração,\nE louva ao Salvador,\nCantando em hino celestial\nSeu grande e eterno amor!     (bis)',
            estrofe2: 'Amor que trouxe aqui Jesus\nA fim de me salvar,\nAmor que quis na dura cruz\nMorrer em meu lugar. (bis)',
            estrofe3: 'Remido a preço tão real,\nO sangue de Jesus,\nQue tenho eu com que pagar\nA bênção dessa cruz? (bis)',
            estrofe4: 'Amor que clama: ―Vinde a Mim‖!\nQue busca ao pecador,\nAmor divino, amor sem fim,\nAmor do Salvador.     (bis)',
            estrofe5: '',
            som: '',
            coro: 'Amor sem par, preenche o vasto céu,\nA terra, o mar, também meu coração;\nOh! grande amor de Deus.'

        },
        {
            id: 37,
            tb: 118,
            selecionado: true,
            estrofe1: 'Jesus, agora, sim, eu sei\nQuão grande é Teu amor;\nPois salvação em Ti achei,\nAceita o meu louvor.',
            estrofe2: 'És Tu, Jesus, meu Salvador,\nPor Ti eu tenho paz;\nJesus, a Ti louvor darei,\nPois tudo Tu me dás.',
            estrofe3: 'Comigo, salvos, exaltai\nO grande Salvador;\nPois tudo Cristo me supriu,\nEmbora pecador.',
            estrofe4: 'Louvor e honra a Ti darei,\nÓ Cristo, meu Senhor;\nProfeta, Sacerdote e Rei,\nDo mundo, o Salvador.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 38,
            tb: 739,
            selecionado: true,
            estrofe1: 'Louvamos-Te, ó Deus,\nQue por nós, pecadores,\nMorreu numa cruz.',
            estrofe2: 'Aleluia! Toda a glória\nTe rendemos, amém!\nAleluia! Cantaremos\nNo eterno além.',
            estrofe3: 'Louvamos-Te, ó Deus!\nTu és fonte de luz,\nQue as trevas dissipa\nE a Cristo conduz.',
            estrofe4: 'Cordeiro de Deus,\nTe queremos louvar;\nMorreste, mas vives\nNo céu a reinar.',
            estrofe5: 'Transborda meu ser\nDe incansável ardor,\nFazendo-o sentir\nTeu excelso amor.',
            som: '',
            coro: ''

        },
        {
            id: 39,
            tb: 569,
            selecionado: true,
            estrofe1: 'Cantemos aqui, como os anjos de luz,\nPois eles adoram com gozo a Jesus.\nO trono cercando, Lhe dão o louvor,\nMilhares as vozes, mas um só o amor.',
            estrofe2: 'Os anjos proclamam, cantando nos céus,\nAs glórias do santo Cordeiro de Deus.\nCom eles, remidos, ergamos a voz:\n―Morreste e venceste, Cordeiro, por nós!‖',
            estrofe3: 'Morreste! querendo os rebeldes salvar;\nTu vives! nos levas conTigo a reinar!\nOh! Sê Tu bendito, querido Jesus,Senhor, nossa vida, riqueza e luz.',
            estrofe4: 'Que todos, nos céus e na terra e no mar,\nSe unam ao bom Redentor a adorar.\nA criação toda levante o louvor,\nCom grande alegria, bendiga ao Senhor.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 40,
            tb: 9,
            selecionado: true,
            estrofe1: 'De toda a terra e nação\nLouvor a Cristo levantai;\nEm alta voz, do coração,\nO nome de Jesus cantai!',
            estrofe2: 'Misericórdia divinal,\nJustiça eterna e forte amor,\nDe litoral em litoral\nSerão cantados ao Senhor.',
            estrofe3: 'Com reverência e com fervor,\nO incenso de louvor levai,\nSinceros, simples, ao Senhor,\nEm regozijo exaltai.\nEm toda a língua entoai\nCanção de paz e redenção;\nEm todo o mundo proclamai\nQue reino dele os povos são.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 41,
            tb: 678,
            selecionado: true,
            estrofe1: 'É bom cantar do meu Cristo,\nQue a vida deu por mim;\nMeu ser encheu de alegria,\nDe graça e paz sem fim.',
            estrofe2: 'Como é bom cantar,\nComo é bom cantar,\nComo é bom cantar de Cristo,\nComo é bom cantar!',
            estrofe3: 'É bom cantar da beleza,\nGrandeza e amor\nQue a criação manifesta,\nDe Cristo, meu Senhor',
            estrofe4: 'É bom cantar da virtude,\nPodertransformador,\nDa salvação gloriosa\nDe Cristo, o Redentor.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 42,
            tb: 7,
            selecionado: true,
            estrofe1: 'Louvemos hoje ao Salvador\nEm hinos do mais grato amor;\nA Sua graça honrar convém,\nPois meu Jesus faz tudo bem.',
            estrofe2: 'Os bem-amados de Jesus\nJá gozam da eterna luz,\nRiquezas de ternura têm,\nPois meu Jesus faz tudo bem.',
            estrofe3: 'As maravilhas do Senhor\nProclamam alto Seu amor;\nOh! corações, cantai também\nQue só Jesus faz tudo bem.',
            estrofe4: 'Jesus nos pode preservar\nDo mundo e do mal livrar.E cantaremos no além\nQue só Jesus fez tudo bem.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 43,
            tb: 92,
            selecionado: true,
            estrofe1: 'Mil vozes eu quisera ter,\nPois quero dar louvor\nAo sempiterno Deus e Rei,\nPotente Salvador.',
            estrofe2: 'Aleluia a Jesus,\nQue morreu no Calvário,\nAleluia, (3x) amém!',
            estrofe3: 'Bondoso Mestre, grande Deus,\nAjuda-me a contar\nPor todo o mundo, a todo o ser,\nTeu grande amor sem par.',
            estrofe4: 'Jesus, o Teu imenso amor\nA nossa dor desfaz,\nTraz alegria ao pecador,\nSaúde, vida e paz',
            estrofe5: 'Quebranta o poder do mal,\nLiberta o transgressor.\nTeu sangue limpa o coração,\nConheço o seu valor.\nBuscai, ó povos, no Senhor,\nA vossa salvação,\nE nele, pela fé, achai\nA justificação.,',
            som: '',
            coro: ''

        },
        {
            id: 44,
            tb: 727,
            selecionado: true,
            estrofe1: 'Que cante o mundo e toda a santa grei:\nMeu Deus! Meu Rei!\nOs céus, a terra e o mar\nNão cessem de louvar\nA Cristo, o Salvador,\nNo mundo pecador!\nQue cante o mundo e toda a santa grei:\nMeu Deus! Meu Rei!',
            estrofe2: 'Que cante o mundo e toda a santa grei:\nMeu Deus! Meu Rei!\nQue a Igreja, em seu louvor,\nExalte o Redentor,\nE todo o coração\nTribute adoração!\nQue cante o mundo e toda a santa grei:\nMeu Deus! Meu Rei!',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 45,
            tb: 81,
            selecionado: true,
            estrofe1: 'A Pérola celeste achei!\nExulta, ó coração,\nVem dar louvores a Jesus\nDe ardente gratidão!',
            estrofe2: 'Ele é o grande Rei dos reis,\nO Sol da retidão,\nO Príncipe da eterna paz,\nTrazendo a salvação.',
            estrofe3: 'É meu Amigo e meu Irmão,\nExcelso Redentor,\nMeu Advogado e meu Juiz,\nMeu terno e bom Pastor.',
            estrofe4: 'Meu Protetor e minha Luz,\nAuxílio em tentação.\nTesouros tenho em meu Jesus,\nDe graça e perfeição.',
            estrofe5: '',
            som: '',
            coro: 'A glória dos mais altos céus\nÉ meu fiel Senhor\nMinha alma canta e com amor\nCelebra o Seu louvor!'

        },
        {
            id: 46,
            tb: 394,
            selecionado: true,
            estrofe1: 'Santo nome, incomparável,\nTem Jesus, o amado meu,\nRei dos reis, Senhor eterno,\nDeus na terra, Deus no céu.',
            estrofe2: 'Leva tu contigo o nome\nDe Jesus, o Salvador,\nEsse nome dá conforto\nHoje, sempre e onde for.',
            estrofe3: 'Esse nome leva sempre\nPara bem te defender,\nEle é arma ao teu alcance\nQuando o mal te aparecer',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Nome bom, doce à fé, ) bis\nEsperança do porvir. )'

        },
        {
            id: 47,
            tb: 83,
            selecionado: true,
            estrofe1: 'Saudai o nome de Jesus!\nArcanjos, adorai!     (bis)\nAo Rei que Se humilhou na cruz\nCom glória coroai!    (bis)',
            estrofe2: 'Ó escolhida geração\nDe Deus, o eterno Pai, (bis)\nAo grande Autor da salvação\nCom glória coroai!     (bis)',
            estrofe3: 'Remidos todos, com fervor,\nHosanas entoai!        (bis)\nAo Verbo feito Redentor\nCom glória coroai!     (bis)',
            estrofe4: 'Ó raças, povos e nações,\nAo Rei divino honrai! (bis)\nA Quem quebrou os vis grilhões\nCom glória coroai!    (bis)',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 48,
            tb: 705,
            selecionado: true,
            estrofe1: 'Terno amigo! achei em Ti perdão,\nNunca me senti feliz assim;\nJardineiro do meu coração,\nCristo, Tu és tudo para mim!',
            estrofe2: 'Deste mundo as honras e o esplendor,\nSeus prazeres e seus bens sem fim\nNão se igualam nunca ao Teu amor,\nCristo, Tu és tudo para mim!\nAos Teus pés eu quero consagrar\nMinha vida, todo o ser, enfim;\nOuve a minha alma a segredar:\n―Cristo, Tu és tudo para mim!‖',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Cristo, Tu és tudo para mim, (bis)\nPleno gozo acho sempre em Ti,\nCristo, Tu és tudo para mim.'

        },
        {
            id: 49,
            tb: 665,
            selecionado: true,
            estrofe1: 'Vibra em meu ser feliz canção\nCom acorde divinal;\nCristo me salvou, há paz em mim,\nSeu amor é sem igual!',
            estrofe2: 'Sua graça em mim vou festejar,\nPois seguro abrigo achei;\nA razão do meu louvor está\nEm Jesus, glorioso Rei!',
            estrofe3: 'Se por águas turvas eu passar\nOu se o vale conhecer,\nSei, à minha frente foi Jesus,\nOs Seus passos posso ver',
            estrofe4: 'Breve as portas santas lá do céu\nSe abrirão de par em par;\nQuero ser fiel até o fim\nE o ―bem-vindo‖ escutar\!',
            estrofe5: '',
            som: '',
            coro: 'Oh! quão doce é o nome\nDo Senhor Jesus!\nFaz vibrar minha alma,\nCantarei na Sua luz!',

        },
        {
            id: 50,
            tb: 182,
            selecionado: true,
            estrofe1: 'A Cristo coroai, Cordeiro vencedor,\nOuvi, das hostes celestiais, dos anjos, o louvor.\nDesperta a tua voz e entoa, coração,\nLouvando Aquele que morreu e deu-te a salvação.',
            estrofe2: 'A Cristo coroai. A vida nos doou\nE, a fim de dar-nos salvação, da tumba triunfou.\nCantemos Seu poder. Morreu, mas ressurgiu,\nA vida eterna nos ganhou e a morte destruiu.',
            estrofe3: 'A Cristo coroai, das eras o Senhor,\nDos mundos e astros da amplidão é eterno Criador.\nAo grande Redentor, que trouxe salvação,\nEternamente tributai louvor e adoração.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 51,
            tb: 633,
            selecionado: true,
            estrofe1: 'Oh! vinde entoar louvores ao Senhor Jesus,\nQue para me salvar morreu na infame, acerba cruz.\nSeu sangue derramou, de tudo me lavou,\nMais alvo do que a neve me tornou.',
            estrofe2: 'Foi o sangue de Jesus que me lavou, me lavou,\nO sangue de Jesus que me lavou, me lavou.\nAlegre cantarei os louvores ao meu Rei,\nAo meu Senhor Jesus que me salvou.',
            estrofe3: 'Comigo vinde unir-vos nesta luta contra o mal,\nCom nosso Salvador Jesus, em marcha triunfal,\nA todos proclamar a graça singular\nDe Cristo vindo para nos salvar.\nO grande Autor da salvação é Cristo, o Redentor,\nSublime e excelso, o Rei dos reis, Jesus, o bom Senhor!\nSim, tudo vencerá, vitória nos dará,\nÀ glória, salvos, nos conduzirá',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 52,
            tb: 577,
            selecionado: true,
            estrofe1: 'Jesus, eu Te amo e sei que és meu,\nPor Ti os pecados abandonarei,\nPois Tu me remiste e és meu Salvador.\nSe eu já Te amava, bem mais Te amarei.',
            estrofe2: 'Jesus, me amaste em primeiro lugar,\nCompraste o perdão no Calvário, na cruz,\nEspinhos na fronte sofreste por mim.\nSe eu já Te amava, bem mais Te amarei.',
            estrofe3: 'Eu Te amo em vida ou quando morrer,\nEm todos os momentos em que respirar,\nAté que o orvalho da morte eu sentir.\nSe eu já Te amava, bem mais Te amarei.',
            estrofe4: 'Na glória, em mansões e em deleites sem fim,\nEu hei de adorar-Te e contigo estarei;\nEntão, laureado, em louvor cantarei:\nEu sempre Te amei e mais Te amarei!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 53,
            tb: 139,
            selecionado: true,
            estrofe1: 'Quão doce soa ao coração\nDo pobre pecador\nO nome que lhe traz perdão:\nJesus, o Salvador!\nPrecioso é o nome de Jesus,\n(3x) O nome sem igual.',
            estrofe2: 'Jesus, Tu és Irmão leal,\nPastor mui terno e bom,\nMeu Advogado supernal,\nDivino e excelso Dom.',
            estrofe3: 'Bendito nome de Jesus!\nComigo estás, eu sei! Por mim morreste sobre a cruz,\nEm Ti confiarei.',
            estrofe4: 'Jesus, somente em Ti pensar\nMinha aflição desfaz;\nSerá melhor o ver-Te e estar\nNo céu contigo em paz.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 54,
            tb: 754,
            selecionado: true,
            estrofe1: 'Ó meu Jesus, radiante Salvador,\nEm Teus caminhos quero sempre andar,\nQue Tua luz me guie aonde eu for,\nTuas pegadas quero imitar,\nJesus de Nazaré!',
            estrofe2: 'Jesus de Nazaré,\nVem, dá-me força e fé,\nCerca-me com mercê,\nJesus de Nazaré.',
            estrofe3: 'Mais uma vez, vem, toca-me, Senhor,\nTua vontade hei de obedecer,\nLibertador de dores e temor,\nFonte de amor, de vida e poder,\nJesus de Nazaré!\nAo navegar, Senhor, seguir-Te-ei\nEm tempestuoso ou tranquilo mar,\nPois sei, ao porto salvo chegarei\nSe guardo a fé, sem nunca vacilar,\nJesus de Nazaré!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 55,
            tb: 395,
            selecionado: true,
            estrofe1: 'Tu, que tens o nome excelso\nDe Jesus, o Salvador,\nQue morreste e agora vives\nE conosco estás, Senhor,\nOh! que bom é confiar ) bis\nSempre em Ti e descansar!       )',
            estrofe2: 'Tu, ó Deus onipotente,\nDá-me a graça \de firmar\nOs meus pés tão vacilantes\nE contigo sempre andar.\nSalvador, ó meu Jesus, ) bis\nVem guardar-me em Tua luz.      )',
            estrofe3: 'aze que, na minha vida,\nÓ Jesus, eu possa haurir\nMais do Teu poder imenso,\nTua imagem refletir;\nQue se veja em mim, Senhor,     ) bis\nTua graça, Teu amor. )',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 56,
            tb: 367,
            selecionado: true,
            estrofe1: 'Eis que Mestre precioso\nÉ Jesus, o bom Senhor,\nSoberano, vitorioso\nE glorioso Salvador!',
            estrofe2: 'Coroá-lo vinde, todos\nVós, os salvos por Jesus;\nCom amor entronizai-O\n,       Cristo, Autor da eterna luz!',
            estrofe3: 'Exaltai, com grande aplauso,\nEsse triunfante Rei;\nPotestades, santos, anjos\nReconhecem Sua lei.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Aclamai-O, vós, remidos,       ) bis\nCoroai-O Rei dos reis! )',

        },
        {
            id: 57,
            tb: 61,
            selecionado: true,
            estrofe1: 'Em majestade e honras vai,\nAo som de hosana e exaltação;\nPor entre palmas, para a cruz,\nProssegue a estrada o bom Jesus.',
            estrofe2: 'Em majestade e honras vai,\nHumilde segue para a cruz;\nEle o pecado vencerá\nE a morte atroz abaterá.',
            estrofe3: 'Em majestade e honras vai;\nAs hostes de anjos pelo céu\n,Ao longe, vêm com triste olhar\nO sacrifício despontar.',
            estrofe4: 'Em majestade e honras vai,\nÉ vinda a luta pertinaz;\nNo céu o Pai O acolherá,\nSeu Filho, ungido, subirá.',
            estrofe5: 'Em majestade e honras vai,\nHumilde segue para a cruz;\nSe abate a fronte a grande dor\n,Depois triunfa o Vencedor.',
            som: '',
            coro: ''

        },
        {
            id: 58,
            tb: 255,
            selecionado: true,
            estrofe1: 'Como hei de receber-Te?\nOnde eu Te encontrarei?\nO mundo anseia ver-Te\nAdorno da alma, ó Rei.\nJesus, vem, me ilumina\n,Em mim vem acender\nA Tua luz divina,\nQue assim Te possa ver.',
            estrofe2: 'Recebe-Te com palmas\nA grande multidão,\nTambém as nossas almas\nLouvor e graças dão.Meu coração almeja\nLouvar-Te com fervor.\nTeu nome sempre seja\nBendito, Salvador.',
            estrofe3: 'Vieste para o mundo\nSó para nos salvar\n.Foi Teu amor profundo\nQue veio libertarn\nNossa alma que sofria\nDe grande privação.\nEncheste de alegria\nO nosso coração.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 59,
            tb: 108,
            selecionado: true,
            estrofe1: 'Pendurado no madeiro,\nÓ Jesus, quiseste assim\nMe livrar do cativeiro\nE provar-me amor sem fim!',
            estrofe2: 'O Teu sangue foi vertido,\nExpiaste, ó meu Jesus!\nE ficou por Ti cumprido\nMeu resgate sobre a cruz!',
            estrofe3: 'Nesse sangue, que verteste,\nPurifica-me, Senhor!\nFoi por mim que Tu morreste;\nSê propício ao pecador!',
            estrofe4: 'Sê propício ao condenado\nSob a dor da maldição,\nDeste abismo do pecado\nA lutar na escuridão!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 60,
            tb: 458,
            selecionado: true,
            estrofe1: 'Conta-me a história de Cristo,\nGrava-a no meu coração,\nEssa inefável história\nCheia de paz e perdão.\nConta como Ele encarnado\nVeio no mundo morar\nE aos pecadores indignos\nGraça do céu revelar.',
            estrofe2: 'Conta-me a história de Cristo,\nGrava-a no meu coração,\nEssa inefável história\nCheia de paz e perdão.',
            estrofe3: 'Conta como Ele, bondoso,\nNunca a ninguém rejeitou;\nComo, de mãos estendidas,\nTodos a Si convidou;\nComo Jesus nunca pode,\nSeja a quem for, recusar,\nSe convencido e contrito,\nSua oferta aceitar.',
            estrofe4: 'Conta-me as duras afrontas\nQue mansamente sofreu;\nComo, na cruz levantado,\nSangue inocente verteu.\n      Dá-me o viver na certeza\nDe que foi mesmo por mim,\nPois Seu amor tão imenso\nNão tem mudança nem fim!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 61,
            tb: 138,
            selecionado: true,
            estrofe1: 'Há uma fonte sem igual\nNa cruz do meu Senhor,\nQue lava, sim, de todo o mal\nO pobre pecador.',
            estrofe2: 'Eu creio, sim, eu creio, sim:\nJesus por mim sofreu\nE sobre a cruz, em meu lugar,\nO bom Jesus morreu.',
            estrofe3: 'Agonizante, o vil ladrão,\nContrito, achou na cruz\nA mais perfeita redenção\nNa graça de Jesus.',
            estrofe4: 'Perdão na cruz Jesus me deu\nDo mal que cometi.\nE pela morte que sofreu\nA vida consegui',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 62,
            tb: 591,
            selecionado: true,
            estrofe1: 'Ó vós, que passais pela cruz do Calvário,\nPodeis contemplar, sem tristeza nem dor,\nQue, para livrar-nos do grande adversário,\nSeu sangue inocente derrama o Senhor?',
            estrofe2: 'Por nós foi Jesus, com cruel zombaria,\nVestido, por homens, do manto real;\nEspinhos, insultos, atroz gritaria\nSem queixa sofreu do furor desleal.',
            estrofe3: 'Olhai-O! Pois inda essas mãos estendidas\nOfertam amor e garantem perdão.\nTrazei pela fé vossas almas perdidas.\nEm Cristo Jesus achareis salvação.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 63,
            tb: 496,
            selecionado: true,
            estrofe1: 'Será possível eu tirar\nProveito do que fez Jesus?\nSofreu por mim e quer salvar\nA mim, que O maltratei na cruz?\nIncomparável tanto amor,\nPor mim morreu o Salvador!',
            estrofe2: 'O trono e a glória o Rei deixou\nE Se vestiu de humilhação;\nAs honras todas desprezou,\nMas revelou-nos compaixão;\nPara remir o pecador,\nAo mundo veio o Salvador.',
            estrofe3: 'Não tenho mais condenação,\nPorque em Seu sangue confiei;\nEm Cristo vivo e retidão\nDivina, eterna, eu terei\nQuando eu da mão do Salvador\nDe glória coroado for.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 64,
            tb: 14,
            selecionado: true,
            estrofe1: 'Oh! como foi que meu Jesus\nAssim sofreu na triste cruz?\nNão só na cruz, mas no jardim,\nAgonizou, e foi por mim!',
            estrofe2: 'O grande horror da escuridão\nApavorou a multidão\nQue soube enfim: rasgado o véu,\nA entrada é franca para o céu.',
            estrofe3: 'Com dor cruel na cruz morreu,\nSeu sangue ali por mim verteu,\nSomente para me salvar\nE meus pecados perdoar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Ali na cruz, ali na cruz,\n Oh! sim, por mim Jesus sofreu!\n Ali na cruz, ali na cruz,\n      Oh! sim, Jesus por mim morreu!'

        },
        {
            id: 65,
            tb: 93,
            selecionado: true,
            estrofe1: 'Por meus pecados expirou\nJesus, a Vida e Luz;\nDas minhas culpas me livrou\nNa dolorosa cruz.',
            estrofe2: 'Hei de ser forte em confessar\nJesus, meu Redentor,\nE sempre firme em confiar\nNo Seu infindo amor.',
            estrofe3: 'Terei acaso débil voz,\nQue trema ao confessar\nA quem, por morte vil e atroz,\nMinha alma quis salvar?',
            estrofe4: 'Pois eu desejo bendizer\nAo grande Salvador\nE, quando, além, no céu viver,\nDar-Lhe-ei melhor louvor.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 66,
            tb: 148,
            selecionado: true,
            estrofe1: 'Morri na cruz por ti,\nMorri pra te livrar.\nMeu sangue, sim, verti,\nE posso-te salvar.',
            estrofe2: 'Vivi assim por ti,\nProvei intensa dor.\nE tudo fiz aqui,\nPor ser teu Salvador.\nSofri na cruz por ti,\nA fim de te salvar.\nA vida consegui\nE a tenho para dar.',
            estrofe3: 'Eu trouxe a salvação,\nDos altos céus favor.\nÉ certo Meu perdão,\nÉ grande Meu amor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Morri, morri na cruz por ti;   ) bis\nQue fazes tu por Mim? )',

        },
        {
            id: 67,
            tb: 736,
            selecionado: true,
            estrofe1: 'Comovido eu sinto o meu coração\nQuando penso na cruz e na grande aflição\nDo Cordeiro de Deus, que tomou meu lugar\nE deu Sua vida só pra me salvar.',
            estrofe2: 'Essa cruz tem, pra mim, atração singular,\nDela emana o amor infinito e sem par.\nJesus, no Calvário, comprou meu perdão\nCom Seu sangue divino - que redenção!',
            estrofe3: 'É a fonte da graça, e aí o amor\nDá a palavra final ao mais vil pecador;\nEsse dom glorioso, além do entender,\nTransforma a vida de todo o que crer.',
            estrofe4: 'Entreguei plenamente a Jesus meu viver,\nE qualquer sacrifício tornou-se prazer;\nBem no meu coração sempre há de reinar,\nJamais algum outro terá Seu lugar.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 68,
            tb: 122,
            selecionado: true,
            estrofe1: 'Será verdade que morreu\nMeu soberano Rei\nPor mim, um miserável réu,\nQue transgrediu a lei?',
            estrofe2: 'Oh! lembra-Te de mim, Senhor,\nPor Teu sofrer na cruz.\nE, recordando o Teu amor,\nPerdoa-me, Jesus!',
            estrofe3: 'Por meus pecados foi mister\nPenar, morrer na cruz?\nOh! tão sublime amor requerQue eu siga o bom Jesus!',
            estrofe4: 'Eu nunca poderei pagar\nO grande amor de Deus;\nA Ele vou servir e amar\nNa terra e nos céus.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 69,
            tb: 108,
            selecionado: true,
            estrofe1: 'Cristo já foi imolado,\nMeus pecados já pagou;\nTendo a morte conquistado,\nVida para nós comprou.',
            estrofe2: '',
            estrofe3: 'Aceitemos, sem detença,\nSeu favor com gratidão;\nDúvidas e indiferença\nNão há mais no coração.',
            estrofe4: 'Os remidos perdoados\nAmam sempre a santa lei;\nObedecem, renovados,\nA Jesus, supremo Rei.',
            estrofe5: '',
            som: '',
            coro: 'Sobre a cruz, por meu pecado,\nQuis Jesus por mim morrer;\nSempre nele refugiado,\nNada tenho que temer.',
        },
        {
            id: 70,
            tb: 342,
            selecionado: true,
            estrofe1: 'Oh! que precioso sangue\nO Senhor verteu\nQuando, para resgatar-nos,\nPadeceu!',
            estrofe2: 'Oh! que precioso sangue,\nSangue de Jesus,\nQue por nós foi derramado\nSobre a cruz!',
            estrofe3: 'Oh! que precioso sangue,\nSangue divinal,\nPois apaga em nossa alma\nTodo o mal!',
            estrofe4: 'Oh! que precioso sangue,\nSangue eficaz!\nTudo quanto a lei exige\nSatisfaz!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 71,
            tb: 95,
            selecionado: true,
            estrofe1: 'Muito longe o monte verde está,\nBem perto de Sião,\nE o bom Jesus na cruz ali\nNos deu a salvação.',
            estrofe2: 'Quem sondará e entenderá\nA dor que O torturou?\nMas crer podemos que por nós\nNo Gólgota expirou.',
            estrofe3: 'Ninguém podia aqui pagar\nA pena universal;\nSó Cristo pôde-nos remir\nA preço divinal.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! quanto, quanto nos amou!\nAmemo-lo também;\nE, confiando em Seu amor,\n          Façamos todo o bem.'

        },
        {
            id: 72,
            tb: 585,
            selecionado: true,
            estrofe1: 'Sobre o monte Calvário eu vi uma cruz,\nQual emblema de afronta e dor.\nMas eu amo essa cruz, pois morreu lá Jesus,\nEm lugar do mais vil pecador.',
            estrofe2: 'Sim, eu amo a mensagem da cruz!\nSeu triunfo meu gozo será,\nE um dia, em vez de uma cruz,\nA coroa Jesus me dará.',
            estrofe3: 'Onde Cristo Jesus o Seu sangue verteu,\nFormosura contemplo sem par.\nTriunfante ali Ele a morte venceu\nE meu ser pode santificar.',
            estrofe4: 'Sempre fiel eu serei à visão dessa cruz,\nSeu desprezo também levarei.\nE um dia feliz, com os santos na luz,\nSua glória eu sempre verei.\nEssa cruz sem igual que o mortal desprezou\nPara mim foi de grande atração.\nE o Cordeiro de Deus, que a glória deixou,\nConquistou-me na cruz salvação',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 73,
            tb: 189,
            selecionado: true,
            estrofe1: 'Deus enviou Seu Filho amado\nPara salvar e perdoar.\nNa cruz morreu por meus pecados,\nMas ressurgiu e vivo com o Pai está.',
            estrofe2: 'E quando, enfim, chegar a hora\nEm que a morte enfrentarei,\nSem medo, então, terei vitória,\nVerei na glória o meu Jesus que vivo está.',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Porque Ele vive, posso crer no amanhã,\nPorque Ele vive, temor não há.\nPois, eu bem sei, eu sei que a minha vida\nEstá nas mãos de meu Jesus que vivo está!'

        },
        {
            id: 74,
            tb: 281,
            selecionado: true,
            estrofe1: 'Cristo já ressuscitou; aleluia!\nSobre a morte triunfou; aleluia!\nTudo consumado está; aleluia!\nSalvação de graça dá; aleluia!',
            estrofe2: 'Sobre a cruz Jesus sofreu; aleluia!\nE por nós ali morreu; aleluia!\nMas agora vivo está; aleluia!\nPara sempre reinará; aleluia!\n',
            estrofe3: 'Gratos hinos hoje erguei; aleluia!\nA Jesus, o grande Rei; aleluia!\nEle à morte quis baixar; aleluia!\nPecadores resgatar; aleluia!',
            estrofe4: 'Nas alturas celestiais; aleluia!\nExaltados com Jesus; aleluia!\nRessurgimos nós também; aleluia!\nAtravés da cruz, nos céus; aleluia!',
            estrofe5: 'Ó soldados, exultai; aleluia!\nLevantai as mãos aos céus; aleluia!\nGritai alto: ―Vivo está!‖; aleluia!\nSobre a morte vencedor; aleluia!',
            som: '',
            coro: ''

        },
        {
            id: 75,
            tb: 466,
            selecionado: true,
            estrofe1: 'Oh! que vitória meu Jesus\nMostrou, vencendo a rude cruz:\nDa morte ressurgiu!\nSeu feito, alegres, entoai,\nSeu nome eterno exaltai,\nO Mestre ressurgiu!',
            estrofe2: 'A tumba não pôde reter\nO amor, a graça e o poder\nDe Cristo, o Salvador,\nQue o mundo veio resgatar\nE do pecado libertar\n.Louvemos ao Senhor!',
            estrofe3: 'A morte já não traz temor;\nEm Cristo, nosso Redentor,\nPodemos nós também\nO seu efeito derrotar\nE ter certeza de um lugar\nNa glória do além.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vive sim, (bis)\nEu sei que vive o Redentor;\nVive sim, (bis)\nEu sei que vive o meu Senhor!'

        },
        {
            id: 76,
            tb: 17,
            selecionado: true,
            estrofe1: 'Sei que vive o Redentor,\nSei que há vida em Seu favor,\nQue, se aqui na cruz morreu,\nReina em glória lá no céu!',
            estrofe2: 'Cristo vive a suplicar\nA Deus Pai em meu lugar,\nVive para me suster\nE do mal me defender.',
            estrofe3: 'Livra-me do meu temor,\nMinorando a minha dor,\nA tristeza me desfaz,\nDá-me gozo, vida e paz.',
            estrofe4: 'Vive! glórias eu Lhe dou!\nVive! reina! e salvo eu sou!\nVivo nele, o Redentor,\nBem seguro em Seu amor!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 77,
            tb: 681,
            selecionado: true,
            estrofe1: 'Adoro o Cristo vivo, comigo Ele está;\nEu sei que Ele vive e sempre viverá!\nEu tenho a Sua graça, eu ouço a Sua voz;\nÉ Ele quem me livra da morte atroz',
            estrofe2: 'Jesus está bem vivo no meu coração,\nConsola-me, liberta-me, em meio à tentação.\nJesus, o Rei, meus erros perdoou.Eu sei que vive o Redentor.\nJesus ressuscitou!',
            estrofe3: 'Jesus, Senhor e Mestre, por mim morreu na cruz,\nRessuscitou dos mortos e dá-me paz e luz.\nEternamente vivo, pra sempre reinará,\nE quem crer nele vive e viverá!',
            estrofe4: 'Alegra-te, ó salvo, cantando com fervor\nEternas aleluias a Cristo, Rei, Senhor.\nAuxílio dos que buscam, refúgio dos que crêem,\nÉ sempre nossa fonte de todo o bem.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 78,
            tb: 839,
            selecionado: true,
            estrofe1: 'Eis morto o Salvador na sepultura,\nMas com poder, vigor, ressuscitou.',
            estrofe2: 'Tomaram precaução com o sepulcro,\nMas tudo foi em vão para O reter.',
            estrofe3: 'Sobre a morte e o mal foi vitorioso\nE vida eternal nos outorgou.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Da sepultura saiu!\n Com triunfo e glória ressurgiu!\nRessurgiu, vencendo a morte e o seu poder;\nPode agora a todos vida conceder!\n Ressurgiu! Ressurgiu! Aleluia! Ressurgiu!'

        },
        {
            id: 79,
            tb: 614,
            selecionado: true,
            estrofe1: 'Já refulge a glória eterna\nDe Jesus, o Rei dos reis;\nBreve os reinos deste mundo\nSeguirão as Suas leis!\nOs sinais da Sua vinda\nMais se mostram cada vez.\nVencendo vem Jesus!',
            estrofe2: 'Glória, glória, aleluia! (3x)\nVencendo vem Jesus!',
            estrofe3: 'O clarim que chama os crentes\nÀ batalha já soou;\nCristo, à frente do Seu povo,\nMultidões já conquistou.\nO inimigo, em retirada,\nSeu furor patenteou.\nVencendo vem Jesus!',
            estrofe4: 'Eis que em glória refulgente\nSobre as nuvens descerá\nE as nações e os reis da terra\nCom poder governará\n.Sim, em paz e santidade\nToda a terra regerá.\nVencendo vem Jesus!',
            estrofe5: 'E por fim entronizado\nAs nações há de julgar\n;Todos, grandes e pequenos,\nO Juiz hão de encarar.\nE os remidos triunfantes\nEm fulgor hão de cantar:\nVencido tem Jesus!',
            som: '',
            coro: ''

        },
        {
            id: 80,
            tb: 151,
            selecionado: true,
            estrofe1: 'O mercado está vazio,\nSeu trabalho já parou;\nDo martelo dos obreiros,\nO barulho já cessou;\nOs ceifeiros, lá no campo,\nTerminaram seu labor;\nToda a terra está em suspense:É a volta do Senhor!',
            estrofe2: 'Os vagões de trens vazios\nPassam ruas, quarteirões\nAviões, sem seus pilotos,\nVoam pra destruição;\nA cidade está deserta,\nSua agitação parou;\nSai a última notícia:\nJesus Cristo já voltou!\nEis a multidão subindo,\nOuço o coro angelical;\nTodo o céu está-se abrindo\nNum ―bem-vindo‖ sem igual.\nComo o som de muitas águas,\nNós ouvimos ecoar\nAleluia ao Cordeiro!\nNós chegamos para o lar!',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'O Rei está voltando!   (bis)\nA trombeta está soando,\nO meu nome a chamar.\nO Rei está voltando!   (bis)\nAleluia! Ele me vem buscar',

        },
        {
            id: 81,
            tb: 423,
            selecionado: true,
            estrofe1: 'Sobre nuvem fulgurante,\nVem do céu o Salvador.\nEm poder e majestade,\nAnjos traz ao Seu redor.\nVem glorioso, (bis)Justo, eterno Vencedor.',
            estrofe2: 'Quem, a fim de dar-nos vida,\nPor amor morreu na cruz\nRessurgiu da sepultura\nE subiu ao céu, em luz.\nAleluia!        (bis)\nOutra vez virá Jesus.',
            estrofe3: 'Para dia tão solene,\nOh! prepara-nos, Senhor,\nA fim de, vencida a morte,\nTe encontrarmos sem temor.\nE veremos       (bis)\nTua face em resplendor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 82,
            tb: 853,
            selecionado: true,
            estrofe1: 'Quando, enfim, do céu descendo,\nPara os Seus Jesus voltar\nE o clarim de Deus a todos proclamar\nQue chegou o grande dia\nDa vitória do meu Rei\n,Lá, por Sua imensa graça, estarei.',
            estrofe2: 'Quando, enfim, chegar o dia\nDa vitória do meu Rei,\nQuando, enfim, chegar o dia,\nPela graça de Jesus, lá estarei!',
            estrofe3: 'Nesse dia, quando os mortos\nHão de a voz de Cristo ouvir\nE dos seus sepulcros hão de ressurgir,\nOs remidos, junto ao trono,\nVão saudar o excelso Rei.\nLá, por Sua imensa graça, estarei.',
            estrofe4: 'Pelo mundo, rejeitado\nFoi Jesus, meu Salvador,\nDesprezaram,\n insultaram meu Senhor.\nMas faustoso vem o dia\nDo triunfo do meu Rei.\nLá, por Sua imensa graça, estarei.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 83,
            tb: 259,
            selecionado: true,
            estrofe1: 'Espírito, Verdade, em nós vem habitar,\nDifunde claridade, o mal vem afastar.\nDerrama em nossa vida do santo fogo o ardor\nE faze-nos luzeiros do Teu infindo amor.',
            estrofe2: 'Tu foste prometido por Cristo, o Salvador,\nConsolador querido, ampara-nos na dor.\nQue as bênçãos comprovadas da Tua mão, Senhor,\nAqui nos sejam dadas: firmeza, fé, vigor!',
            estrofe3: 'Espírito, concede a força divinal,\nAcende em nós a chama da fé pentecostal\n,Oh! faze que anunciemos ao mundo o Teu fulgor,\nQue testemunho demos da salvação, Senhor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 84,
            tb: 391,
            selecionado: true,
            estrofe1: 'Sobre mim estende as asas,\nSanto Espírito de Deus!\nVem com Teu poder encher-me,\nVem, atende os rogos meus.',
            estrofe2: 'Vem encher-me desde já,\nSanto Espírito de Deus,\nCom Teu fogo vem, Senhor!\nOh! atende os rogos meus!',
            estrofe3: 'Sim, Tu podes atender-me,\nComo, eu não sei dizer,\nMas desejo, imploro, espero\nQue me venhas socorrer.',
            estrofe4: 'Quero ter, Senhor, pureza,\nA perfeita salvação;\nReina agora e para sempre\nNeste grato coração.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 85,
            tb: 391,
            selecionado: true,
            estrofe1: 'Fogo divino, clamamos por Ti,\nVem lá do alto, vem, desce aqui,\nOh! vem! desperta-nos com Teu fulgor\nE vem, inflama-nos com Teu calor.',
            estrofe2: 'Desce, Espírito consolador,\nDesce e enche-nos de santo amor,\nDesce ao mundo, revela Jesus,\nDá-nos poder, vida, graça e luz.',
            estrofe3: 'Arde em minha alma, ó chama de amor,\nArde em meu peito e dá-me valor,\nArde e queima os restos do mal,\nVem conceder-me poder divinal.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Desce do alto, bendito fogo,\nDesce, poder celestial,\nDesce do alto, bendito fogo,\nVem, chama pentecostal.'

        },
        {
            id: 86,
            tb: 97,
            selecionado: true,
            estrofe1: 'Não sei por que de Deus o amor\nA mim se revelou,\nPor que razão o Salvador\nPra Si me resgatou.',
            estrofe2: 'Mas eu sei em quem tenho crido\nE estou bem certo: é poderoso\nE guarda o meu tesouro\nDesde agora até o final',
            estrofe3: 'Ignoro como o Espírito\nConvence-nos do mal,\nRevela Cristo, Verbo Seu,\nConsolador real.',
            estrofe4: 'E quando vem Jesus não sei,\nSe breve ou tarde vem,\nMas sei que meu Senhor virá\nNa glória que Ele tem.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 87,
            tb: 181,
            selecionado: true,
            estrofe1: 'Espírito de Deus,\nFiel Consolador,\nPromessa e dom do Pai dos céus,\nRevela o Teu amor!\nVem, como o vento, entrar\nEm nossa comunhão!\nVem sobre as campas assoprar\nE os mortos viverão!',
            estrofe2: 'Vem como o fogo arder\nE todo o mal queimar!\nVem almas frias aquecer,\nEnsina-nos a amar.\nComo óleo vem ungir\nUm povo só em Ti,\nConsagra e faze-nos sentir\nA Tua graça aqui.',
            estrofe3: 'Nas trevas vem brilhar\nCom verdadeira luz\nE todo o mundo encaminhar\nAo Salvador Jesus.\nComo água, Tu serás\nO Purificador\nE vivas fontes abrirás\nNos átrios do Senhor.',
            estrofe4: 'Nas flores vem cair,\nOrvalho do Senhor,\nE faze as almas produzir\nOs frutos do louvor.\nDo céu és o Penhor,\nAs vidas vem selar\nE, com a imagem do Senhor,\nFaze-as no céu entrar!',
            estrofe5: 'A obra vem cumprir,\nDivino Instruidor,\nE toda a glória descobrir\nDo grande Salvador!\nEspírito sem par,\nDe paz e de adoção,\nHabita em nós para nos dar\nPerfeita salvação!',
            som: '',
            coro: ''

        },
        {
            id: 88,
            tb: 107,
            selecionado: true,
            estrofe1: 'Ó Santo Espírito de Deus,\nIrresistível vem\nQual fogo e desce sobre os Teus\nComo em Jerusalém.',
            estrofe2: 'Em vão cantamos Teu louvor\nE oramos quase em vão,\nHosanas damos sem ardor\nE em fraca devoção.',
            estrofe3: 'Senhor, será que sempre aqui\nIremos vacilar?\nTão frio amor mostrando a Ti,\nQue deste o Teu sem par?',
            estrofe4: 'Divino Santificador,\nAgora mesmo vem,\nCom Teu amor, poder, fervor,\nBatiza-nos também!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 89,
            tb: 364,
            selecionado: true,
            estrofe1: 'Vai queimando, viva chama,\nQueima, fogo divinal!\nSatisfaz a minha alma,\nPurifica-me do mal',
            estrofe2: 'Vai queimando intensamente,\nVem, ó fogo, em mim arder!\nTeu perfeito plano eu vejo,\nVou cumprir o Teu querer.',
            estrofe3: 'Vai queimando suavemente,\nQueima, chama, queima enfim!\nDesse amor vou aprendendo,\nSinto Tua obra em mim.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vai queimando sempre, sempre,\nSanto Espírito, em mim!\nConsagrado inteiramente,\nVou servir-Te até o fim.'
        },
        {
            id: 90,
            tb: 282,
            selecionado: true,
            estrofe1: 'Ó divino Preceptor,\nMostra-nos o Salvador!\nÓ Tu, bom Consolador,\nEnche-nos de santo amor!       (bis)',
            estrofe2: 'Tu, fiel Instruidor,\nCom celestial favor,\nMostra como Te adorar,\nComo culto a Deus prestar!     (bis)',
            estrofe3: 'Santo Espírito de Deus,\nEnche de fervor os Teus,\nPra cantarem o louvor\nDe Jesus, o Salvador! (bis)\nVem, Espírito veraz,\nDá-nos firme, estável paz,\nNo poder da Tua luz\nGuia as almas a Jesus! (bis)',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 91,
            tb: 503,
            selecionado: true,
            estrofe1: 'Ó Deus Consolador, convém\nAo Teu auxílio recorrer:\nManancial de todo o bem,\nAs nossas almas vem encher\nE, com celeste amor, guiar\nOs que Te querem adorar!',
            estrofe2: 'Sem Ti, ó Deus, o culto é vão\nE nulo em tudo nos será;\nSem Teu ensino e direção\nNossa alma luzes não terá;\nE sem proveito, sem valor,\nAs expressões do nosso amor.',
            estrofe3: 'Com Teu amor, eterno Deus,\nInspira as nossas petições.\nEnsina a orar e eleva aos céus\nOs nosso frágeis corações!\nDesperta, ó santo Instruidor,\nEm nossas almas, Teu louvor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 92,
            tb: 6,
            selecionado: true,
            estrofe1: 'Recorro, Deus, a Ti, com humildade e fé,\nDesejo Teu poder, escuta-me, Senhor;\nAs faltas, Salvador, a Ti confessarei,\nOh! vem, Consolador.',
            estrofe2: 'Oh! vem, Consolador,\nSim, vem, Consolador!\nConcede-me Teu dom divino, celestial.\nOh! vem e dá-me, aqui, poder pentecostal;\nSim, vem, Consolador!',
            estrofe3: 'Almejo, Redentor, contigo sempre andar,\nO Teu precioso dom eu venho aqui buscar;\ncontigo quero estar e nada temerei,\nOh! vem, Consolador.',
            estrofe4: 'Batiza-me, Senhor, com fogo divinal,\nEnvia, Salvador, poder celestial;\nTu és o grande Autor da plena salvação,\nOh! vem, Consolador.',
            estrofe5: 'Recebo, agora, aqui, o Espírito de amor,\nMinha alma cheia está de gozo sem igual;\nA voz elevarei, em canto de louvor,\nA Ti, Consolador!',
            som: '',
            coro: ''

        },
        {
            id: 93,
            tb: 646,
            selecionado: true,
            estrofe1: 'Pelo Espírito tão poderoso,\nQue inunda a mente e o coração,\nPelo Espírito de paz perfeita,\nQue conforta quando o medo vem,',
            estrofe2: 'Te adoramos, Pai celeste,\nDamos-Te graças, Pai celeste,\nE Te louvamos, Pai celeste,\nAo orar, ao orar!',
            estrofe3: 'Pelo Espírito que nos corrige\nSe buscamos nosso bem-estar,\nPela direção constante e firme,\nSua força para obedecer,',
            estrofe4: 'Pelo Espírito que nos agita\nE nos traz de volta ao Teu querer,\nPelo Espírito tão persistente,\nQue nos leva sempre a prosseguir,',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 94,
            tb: 347,
            selecionado: true,
            estrofe1: 'Vem, Espírito divino,\nGrande Ensinador;\nVem, revela às nossas almas\nCristo, o Salvador!',
            estrofe2: 'Santo Espírito,\nOuve, com favor!\nEm poder e graça insigne,\nMostra o Teu amor!',
            estrofe3: 'Vem, destrói o que é falso,\nTudo o que é vão;\nVem, aos fracos concedendo\nPlena salvação!',
            estrofe4: 'Vem, reveste a Tua Igreja\nDe energia e luz;\nVem, atrai os pecadores\nAo Senhor Jesus.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 95,
            tb: 787,
            selecionado: true,
            estrofe1: 'Santo Espírito, enche a minha vida,\nPois por Cristo eu quero brilhar.\nSanto Espírito, enche a minha vida,\nUsa-me as almas a salvar!\nAleluia (3x) dou a Cristo, o Rei!\nAleluia (3x) dou ao Rei!',
            estrofe2: 'Santo Espírito, enche a minha vida\nQuando a Tua Palavra eu ler.\nSanto Espírito, enche a minha vida,\nQuero comunhão contigo ter!',
            estrofe3: 'Santo Espírito, enche a minha vida\nQuando em nome de Cristo eu falar.\nSanto Espírito, enche a minha vida,\nPara eu com fé testemunhar!',
            estrofe4: 'Santo Espírito, enche a minha vida,\nCapacita-me mais, meu Senhor.\nSanto Espírito, enche a minha vida,\nDá-me mais do meu primeiro amor!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 96,
            tb: 33,
            selecionado: true,
            estrofe1: 'Fiel promessa Deus nos deu,\nDe visitar o povo Seu.\nOh! vem, poder pentecostal,\nDar-nos valor, livrar do mal.',
            estrofe2: 'Reunidos todos a orar,\nA bênção santa a esperar,\nVem este templo agora encher,\nConsolador, com Teu poder.',
            estrofe3: 'O que buscar irá encontrar\nA força a fim de não pecar.\nQual vento impetuoso, assim,\nManifestar-Te vem, enfim!',
            estrofe4: 'Minha alma aspira por Jesus,\nPor Sua graça, Sua luz;\nMeu coração vem aquecer\nE, entronizado, aí viver.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 97,
            tb: 335,
            selecionado: true,
            estrofe1: 'Vem, Cristo, vem-nos inflamar,\nVem, Senhor! (3x)\nCom fogo vem-nos batizar,\nVem, Senhor! (3x)\nA Ti suplicamos com ardor\nPor Teu Espírito de amor,\nO qual prometeste, ó Salvador,\nVem, Senhor! (3x)',
            estrofe2: 'Vem, fogo, e inspira-nos aqui,\nVem, Senhor! (3x)\nA sempre e só viver por Ti,\nVem, Senhor! (3x)\nExtirpa a raiz de todo o mal\nE acende, ó chama divinal,\nA tocha de amor sacrifical,\nVem, Senhor! (3x)',
            estrofe3: 'Dá força ao nosso fraco ser,\nVem, Senhor! (3x)\nPor Ti queremos combater,\nVem, Senhor! (3x)\nProstrados aqui no Teu altar\nEm santa união a implorar,\nTeu povo, oh! vem santificar!\nVem, Senhor! (3x)',
            estrofe4: 'Sem Ti é inútil o fervor,\nVem, Senhor! (3x)\nTeu fogo nos dará valor,\nVem, Senhor! (3x)\nDerrama em nós o Teu poder,\nPara um novo Pentecoste haver!\nTeu reino queremos estender.\nVem, Senhor! (3x)',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 98,
            tb: 106,
            selecionado: true,
            estrofe1: 'Oh! proclamai: ―Há salvação!‖\nQue novas de prazer!\nOs pecadores têm perdão;\nOs mortos vão viver.\n',
            estrofe2: 'Vamos, pois, a bandeira erguer,\nBandeira de amor e perdão,\nE pelejar até morrer,\nCantando a salvação.',
            estrofe3: 'Fazei o eco ressoar\nDo pelo ao equador,\nE venham multidões cantar\n divinal favor.',
            estrofe4: 'Ao bom Cordeiro, santo Deus,\nLouvor aqui rendei;\nSim, proclamai, remidos Seus,\nO amor do grande Rei.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 99,
            tb: 209,
            selecionado: true,
            estrofe1: 'Oh! que fonte transbordante,\nMais profunda que o mar!\nEsse amor de Deus, imenso,\nCristo veio revelar.',
            estrofe2: 'Eu vi pérolas preciosas\nNo portão que me abriu.\nEm Seu sangue já lavado,\nMinha vida reluziu',
            estrofe3: 'Como pomba perseguida,\nEm perigo estava eu,\nMas Jesus jamais rejeita\nQuem buscar abrigo Seu.\nMaravilha incomparável\nÉ o perdão que me ofertou;\nEste é o tema do meu canto:\nSua graça, que me achou!',
            estrofe4: 'Quando, na manhã grandiosa,\nAo portão de luz chegar,\nEle estará aberto\nPara um redimido entrar.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 100,
            tb: 565,
            selecionado: true,
            estrofe1: 'Perdão infinito! Oceano de amor,\nRepleto da graça do bom Salvador,\nTão livre, tão vasto, qual ondas do mar,\nMinha alma redime, vem sobre mim rolar.',
            estrofe2: 'Meus erros são tantos que dentro de mim\nEu choro em tristeza e mágoas sem fim;\nMeu pranto não salva, mas esse grande mar\nMinha alma transforma se sobre mim rolar.',
            estrofe3: 'De gênio inconstante e fortes paixões,\nCativo me sinto de mil tentações,\nMas salvo me encontro se a graça, sem par,\nDas ondas divinas, minha alma inundar.',
            estrofe4: 'Cansado e abatido, no inútil viver,\nNa luta que enfrento, o mal quer vencer,\nMas grande esperança encontro, enfim,\nSe o mar forte e puro rolar sobre mim.',
            estrofe5: 'Oceano divino, detenho o olhar\nNa vida fluente do teu revoltear;\nÀs margens chegando, sequioso e sem paz,\nÀ espera da bênção, não volto atrás.',
            estrofe6: 'No som retumbante das ondas do mar\nQue atinge meu ser e o faz exultar,\nEscuto o chamado do grande ―Eu Sou‖,\nMergulho nas águas e salvo estou!\nAgora, aleluia, com Deus viverei!\nMeus dias ao santo serviço darei,\nPois é sem limite o sangue remidor\nQue emana de Cristo Jesus, o Salvador!',
            som: '',
            coro: ''

        },
        {
            id: 101,
            tb: 714,
            selecionado: true,
            estrofe1: 'Igreja do Senhor,\nProclama com fervor:\n―Quem salva é só Jesus!‖\nA todos faze ouvir,\nInsiste em repetir:\n―Quem salva é só Jesus!‖',
            estrofe2: 'Não há poder igual\nQue vença todo o mal:\n―Quem salva é só Jesus!‖\nÉ vão querer viver\nCom Deus sem renascer:\n―Quem salva é só Jesus!‖',
            estrofe3: 'A lei não dá perdão:\nTraz morte e maldição.\n―Quem salva é só Jesus!‖\nMas Cristo a todos traz\nAmor, perdão e paz:\n―Quem salva é só Jesus!‖',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 102,
            tb: 486,
            selecionado: true,
            estrofe1: 'Estou satisfeito em Cristo,\nPois Ele minha alma salvou\nE, sobre o madeiro sofrendo,\nO Seu grande amor revelou!',
            estrofe2: 'Estou satisfeito em Cristo,\nOuvindo o que Ele me diz\nE crendo no Seu evangelho,\nAgora tornei-me feliz.',
            estrofe3: 'Estou satisfeito em Cristo\nE sei que vai logo voltar;\nVirá com poder glorioso,\nA fim de Seu povo levar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 103,
            tb: 378,
            selecionado: true,
            estrofe1: 'Eu Te sigo, sim! Te sigo,\nMeu Jesus e meu Senhor,\nSê meu Guarda, vem guiar-me\nNesta vida, Salvador.',
            estrofe2: 'Aleluia! Deus, em Cristo,\nMe livrou da maldição!\nCom minha alma renovada,\nTenho alegre o coração.',
            estrofe3: 'Muito tempo andei errante,\nMas a Tua voz ouvi,\nQue tão meiga me chamava;\nSem demora eu atendi.',
            estrofe4: 'Tu vieste ao meu encontro\nE, em Teus braços, com amor,\nMe tomaste, me salvaste!\nJá não tenho mais temor!',
            estrofe5: 'Guarda-me do vil pecado,\nDá-me um puro coração,\nPois, seguindo-Te, obediente,\nProvo ter a salvação.',
            som: '',
            coro: ''

        },
        {
            id: 104,
            tb: 580,
            selecionado: true,
            estrofe1: 'Oh! quão cego andei e perdido vaguei,\nLonge, longe do meu Redentor!\nEle a vida deu e Seu sangue verteu,\nSalvou um tão pobre pecador.',
            estrofe2: 'Foi na cruz, foi na cruz\nOnde, um dia, eu vi\nMeu pecado castigado em Jesus;\nFoi ali, por fé, que os olhos abri\nE agora me alegro em Sua luz.',
            estrofe3: 'Eu ouvia falar dessa graça sem par,\nQue do céu trouxe nosso Jesus.\nSurdo eu me fiz, converter-me não quis\nA Cristo, que expirou na cruz.',
            estrofe4: 'Mas um dia senti meu pecado e vi\nSobre mim a espada da lei;\nDe temor fugi, em Jesus me escondi,\nRefúgio seguro nEle achei.',
            estrofe5: 'Quão feliz foi, então, este meu coração,\nConhecendo a grandeza do amor\nQue levou Jesus a sofrer lá na cruz,\nA fim de salvar um pecador!',
            som: '',
            coro: ''

        },
        {
            id: 105,
            tb: 158,
            selecionado: true,
            estrofe1: 'Ouvi o Salvador dizer:\n―Vem descansar em Mim\nE confiante receber\nConforto e paz sem fim.‖\nFui a Jesus e Lhe entreguei\nMeu triste coração;\nAbrigo, paz e gozo achei,\nAchei consolação.',
            estrofe2: 'Ouvi o Salvador dizer:\n―De graça Eu sempre dou\nAs águas vivas; vem beber;\nDa vida a Fonte Eu sou.‖\nFui a Jesus e me prostrei,\nDa Fonte enfim bebi;\nJamais a sede sentirei,\nEstando sempre ali.',
            estrofe3: 'Ouvi o Salvador dizer:\n―Do mundo Eu sou a Luz;\nOh! vem a Mim, pois quero ser\nTeu guia desde a cruz.‖\nFui a Jesus e nEle achei\nO sol que brilha em mim;\nE nessa luz eu andarei\nAté da vida o fim.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 106,
            tb: 471,
            selecionado: true,
            estrofe1: 'De um modo tão gentil, Jesus\nMinha alma veio resgatar\nE, da vergonha do pecar,\nJesus me levantou.',
            estrofe2: 'De um poço fundo me tirou,\nCom ternas mãos me elevou\nDa escura noite à plena luz;\nLouvo a Jesus, que me salvou!',
            estrofe3: 'Por muito tempo me chamou\nNa agitação do meu viver,\nMas Seu perdão compreendi,\nA Sua paz senti.',
            estrofe4: 'Jesus, na cruz, sofrendo em dor,\nSe importou com meu viver\nE, do abandono, em aflição,\nSalvou-me por amor.\nAgora eu vivo bem melhor,\nE a paz que sinto o confirmou;\nNem mesmo sei como explicar\nPor que me transformou!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 107,
            tb: 158,
            selecionado: true,
            estrofe1: 'Oh! maravilha! o Redentor\nAo mundo indigno amou!\nQuão admirável salvação\nJesus por nós ganhou!',
            estrofe2: 'Por isso agora, pela fé,\nVivemos sem temor;\nPureza e retidão nos traz\nA graça do Senhor.',
            estrofe3: 'Vitória Deus concede aqui,\nTriunfo sobre o mal;\nEle assegura no porvir\nA glória perenal.',
            estrofe4: 'Ó salvos! vamos para os céus,\nAlegres em Jesus!\nPorque já temos redenção,\nEterna paz e luz.',
            estrofe5: '',
            som: '',
            coro: 'Sim! foi amor, insigne amor,\nAmor do excelso Deus,\nQue à triste cruz levou Jesus,\nO Santo Rei dos céus.'

        },
        {
            id: 108,
            tb: 741,
            selecionado: true,
            estrofe1: 'Por mim sofreu meu Salvador,\nGlória, glória ao meu Jesus!\nPor isso louvo ao Redentor,\nGlória, glória ao meu Jesus!',
            estrofe2: 'Jesus, Jesus, meu Salvador!\nTeu nome é doce, ó Senhor.\nAbrase-me Teu santo amor!\nGlória, glória a Ti, Jesus!',
            estrofe3: 'Os meus pecados carregou,\nGlória, glória ao meu Jesus!\nE sobre a cruz me resgatou,\nGlória, glória ao meu Jesus!',
            estrofe4: 'Eu sei que perdoado estou,\nGlória, glória ao meu Jesus!\nÉ certo que ao céu eu vou,\nGlória, glória ao meu Jesus!',
            estrofe5: 'E, quando a guerra aqui findar,\nGlória, glória ao meu Jesus!\nNo céu, melhor irei cantar,\nGlória, glória ao meu Jesus!',
            som: '',
            coro: ''

        },
        {
            id: 109,
            tb: 666,
            selecionado: true,
            estrofe1: "Maravilhoso e sublime é pra mim,\nSim, nunca me esquecerei!\nDia glorioso em que Cristo eu vi\nE o coração Lhe entreguei.\nOh! quão precioso amigo Ele é,\nSalvou-me da perdição,\nTirando as culpas, das trevas livrando\nE trazendo-me pleno perdão.",
            estrofe2: "A paz do céu encheu meu coração\nQuando Jesus me deu a salvação.\nMinha alma, então, lavou,\nE a luz em mim raiou.\nA paz do céu encheu meu coração.",
            estrofe3: "Grande esperança Jesus já me deu,\nQue não desvanecerá,\nHá uma gloriosa morada no céu\nQue breve minha será,\nTudo porque, nesse dia feliz,\nO meu Senhor aceitei;\nGrandes riquezas e bênçãos celestes\nDas mãos divinais alcancei.",
            estrofe4: "",
            estrofe5: "",
            som: "A paz do céu encheu meu coração",
            coro: "A paz do céu encheu meu coração\nQuando Jesus me deu a salvação.\nMinha alma, então, lavou,\nE a luz em mim raiou.\nA paz do céu encheu meu coração."
        },
        {
            id: 110,
            tb: 595,
            selecionado: true,
            estrofe1: 'Salvo estou! Salvo estou!\nLiberdade achei.\nPor mercê me comprou\nMeu Jesus e meu Rei.',
            estrofe2: 'Quanto amor, quanto amor\nRevelou meu Jesus!\nTenho fé, plena fé,\nGozo, paz nesta luz.\n',
            estrofe3: 'Quis Jesus, quis Jesus\nMeus pecados lavar.\nGrande é Seu poder\nPara todos salvar.',
            estrofe4: 'Sou feliz, mui feliz,\nNovo homem que sou,\nNo meu ser brilha o sol,\nSempre alegre estou!',
            estrofe5: '',
            som: '',
            coro: 'Aleluia, aleluia,\nAleluia, glória a Cristo,\nAleluia, (3x) amém!'

        },
        {
            id: 111,
            tb: 112,
            selecionado: true,
            estrofe1: "Longe de Jesus andei, em tristeza e escuridão,\nDo pecado escravo me vi;\nNessa estrada segui sem jamais imaginar\nO fim trágico e cruel que havia aí!",
            estrofe2: "No futuro não pensei nem na minha perdição\nE o convite de Cristo ignorei;\nSó no mundo minha alma encontrava atração,\nMas, um dia, a cruz de Cristo contemplei!",
            estrofe3: "Entregando a Jesus minha vida, o meu ser,\nQue alegria e paz eu senti!\nBem depressa o Espírito Santo revelou,\nDeste mundo, os perigos que eu não vi!",
            estrofe4: "Sigo, agora, bem feliz, no caminho para o céu;\nVida eterna em Cristo alcancei!\nSalvo estou, isso eu sei, pelo sangue de Jesus;\nPronto estou para o encontro com o Rei!",
            som: "",
            coro: "Jesus, das trevas, trouxe-me pra luz,\nE eu gozo Seu perdão!\nJesus, das trevas, trouxe-me pra luz,\nGloriosa salvação!"
        },
        {
            id: 112,
            tb: 197,
            selecionado: true,
            estrofe1: 'Andava eu perdido,\nMas Cristo me achou.\nMeu coração, alegre, louva a Deus.  ) bis\nGlória a Cristo, que me salvou!',
            estrofe2: 'Estava eu caído\nJesus me levantou.\nMeu coração, alegre, louva a Deus.   )  bis\nGlória a Cristo, que me salvou!',
            estrofe3: 'Eu era um escravo,\nJesus me libertou.\nMeu coração, alegre, louva a Deus.  )bis\nGlória a Cristo, que me salvou!',
            estrofe4: 'Vivia muito triste,\nJesus me transformou.\nMeu coração, alegre, louva a Deus.  )bis\nGlória a Cristo, que me salvou!',
            estrofe5: 'Jesus também te ama,\nJesus também te chama.\nConfia nele agora, de coração,  )bis\nE tu terás a salvação',
            som: '',
            coro: ''
        },
        {
            id: 113,
            tb: 611,
            selecionado: true,
            estrofe1: 'Tempos houve em que vivi sem Deus\nNão andei nos bons caminhos seus\nNem quis dirigir os passos meus\nAo salvador',
            estrofe2: 'Sua voz, enfim, me despertou,\nSeu amor meu coração ganhou;\nPor seu sangue foi que me salvou\nMeu salvador!',
            estrofe3: 'Já confesso a Cristo, meu senhor.\nHoje nele tenho um protetor\nE me alegro no divino amor\nDo meu Jesus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! que grande é esta redenção\nTão completa e livre a salvação.\nNo Calvário encontrei amor,\nLibertação'
        },
        {
            id: 114,
            tb: 28,
            selecionado: true,
            estrofe1: 'Quão admirável essa cruz\nEm que expirou a glória o Rei,\nDesprezo, então, a falsa luz\nA qual com tanto ardor amei',
            estrofe2: 'Na face dele, ó alma, vês\nTristeza e amor, em santa união.\nSinais profundos das mercês\nDo seu bondoso coração.',
            estrofe3: 'Se o mundo inteiro fosse meu\nNão bastaria dar\nAquele que por mim sofreu....\nA quem meu ser vou ofertar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Meu Jesus morreu, por mim, na cruz,\nO seu sangue ele derramou,\nMas ressucitou, vivo está meu Jesus;\nEu tenho paz, e salvo estou.'
        },
        {
            id: 115,
            tb: 194,
            selecionado: true,
            estrofe1: 'Gozos da terra, adeus, tenho Jesus.\nPaz e perdão são meus, tenho Jesus.\nAqui só posso ter breve, fugaz prazer\nQue ali vou esquecer.\nTenho Jesus.',
            estrofe2: 'Minha alma não tenteis, tenho Jesus.\nSirvo ao melhor dos reis, tenho Jesus.\nFestas do mundo, adeus, falsos os gozos teus,\nMeu regozijo é Deus!\nTenho Jesus.',
            estrofe3: 'Vida mortal, adeus, tenho Jesus.\nRejeito os braços teus, tenho Jesus.\nO Bem-Amado achei, meu coração lhe dei\nNele me alegrarei!\nTenho Jesus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 116,
            tb: 357,
            selecionado: true,
            estrofe1: 'Serenamente e com amor\nJesus se aproxima\nE, ao trazer saúde e paz,\nOs corações anima.',
            estrofe2: 'Glorioso na ressureição,\nEu creio nele e vivo.\nEu amo o nome do Senhor\nE o louvo em tom altivo.',
            estrofe3: 'Não tenho mais condenação,\nEstou justificado.\nMeu coração ja goza paz,\nLiberto do pecado.',
            estrofe4: 'Os teus pecados quer perdoar,\nEscuta seu chamado\nE segue salvo para o céu,\nReinando ao seu lado.',
            estrofe5: '',
            som: '',
            coro: 'Que belo som angelical,\nÉ o mais doce canto aqui.\nGlória ao nome sem igual:\nCristo, Jesus Cristo!'
        },
        {
            id: 117,
            tb: 166,
            selecionado: true,
            estrofe1: 'Preso a um pecado fardo,\nTriste, com vergonha e dor,\nNo caminho onde andava,\nMe alcançou a mão do Senhor.',
            estrofe2: 'Desde que encontrei meu Cristo,\nVivo em paz e sem temor\nE, um dia, lá na glória,\nPra sempre cantarei Seu louvor.',
            estrofe3: 'O que fez por mim, meu Mestre\nQuer a todos conceder;\nNão importa qual o fardo,\nHá, em Seu toque, todo o poder!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Tocou-me, sim, tocou-me,\nMinha alma encheu com o seu louvor;\nNum instante me transformou\nO toque do meu salvador.'
        },
        {
            id: 118,
            tb: 819,
            selecionado: true,
            estrofe1: 'Achei um bom amigo, Jesus, o salvador,\nO escolhido dos milhares para mim\nDos vales é o Lírio, é o forte Redentor,\nPurifica-me e guarda até o fim.\nConsolo precioso, refúgio contra o mal,\n Que a minha ansiedade quer tomar.\nDos vales é o Lírio, a Estrela da manhã,\nO escolhido dos milhares para mim.',
            estrofe2: 'Levou-me as dores todas, as mágoas lhe entreguei,\nFortaleza ele é na tentação\nDeixei por ele tudo, os ídolos queimei,\nEle me conserva o santo coração.\nQue o mundo me abandone, persiga o tentador,\nMeu Jesus me guia até da vida o fim.\nDos vales é o Lírio, a Estrela da manhã,\nO escolhido dos milhares para mim.',
            estrofe3: 'Já mais virá a deixar-me e não me faltará,\nSe fiel obediência lhe prestar.\nMuralha é de fogo, que assim me guardará,\nDesde agora até a luta aqui findar.\nEntão, ao céu subindo, na glória O verei,\nOnde nem a dor nem a morte hão de existir.\nDos vales é o Lírio, a Estrela da manhã,\nO escolhido dos milhares para mim',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Consolo precioso, Refúgio contra o mal\nQue a minha ansiedade quer tomar.\nDos vales é o Lírio, a Estrela da manhã,\nO escolhido dos milhares para mim.'
        },
        {
            id: 119,
            tb: 675,
            selecionado: true,
            estrofe1: 'Deixei nas mão de Cristo, meu Senhor,\nTodo o meu pecado, meu pavor;\nQuando O vi pregado sobre a cruz,\nPor amor sofrendo meu Jesus,\nO perdão a Ele eu pedi recebi\nIsenção da pena que, outrosim, mereci.',
            estrofe2: 'Entrego tudo a Cristo! Seu amor\nEm sorrisos muda a minha dor,\nTransfigura as trevas em clarão\nE de flores veste a solidão.\nNele o débil ousa confiar. Quem marchar\nCom Jesus seguro pode andar sem falhar.',
            estrofe3: 'Entrego tudo a Cristo! Pois quem crê\nFirme espera dele a mercê;\nAcolhido e salvo, o coração\nPulsa de alegria e gratidão;\nPor Jesus alcançar redenção, todo o bem,\nGraça e paz aqui, e glória vem no além!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 120,
            tb: 527,
            selecionado: true,
            estrofe1: 'Oh! maravilha do amor de Jesus,\nDesse admirável amor sem igual!\nCristo penou e morreu numa cruz,\nPara salvar-me da morte iternal.',
            estrofe2: 'Oh! eu jamais poderei duvidar\nDesse insodável amor de Jesus,\nVeio trazer-me alegria e paz,\nDando-me entrada no reino de luz.',
            estrofe3: 'Vou-me entregar a Jesus e, fiel,\nQuero fazer conhecido esse amor\nQue me salvou de uma pena cruel;\nQuero viver para o meu Salvador.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Cristo, meu Mestre, veio por mim,\nVeio por mim, veio por mim;\nCristo, meu Mestre, veio por mim,\nSim, para salvar.'
        },
        {
            id: 121,
            tb: 83,
            selecionado: true,
            estrofe1: "Pecador outrora fui, porém\nGraça eu encontrei em Jesus;\nDeu-me francamente Seu perdão\nE esta paz que o céu produz!",
            estrofe2: "Ajoelhado diante de uma cruz,\nEsperei castigo de Deus,\nMas, surpreso, vi o céu se abrir\nE meu nome reluzir!",
            estrofe3: "―Pela graça salvo‖, escrito está,\nDe alegria o ser me inundou!\nTenho a salvação e agora sei:\nCidadão do céu eu sou!",
            estrofe4: "",
            som: "",
            coro: "Há um novo nome lá na glória,\nÉ o meu, oh! sim, o meu!\nE os anjos cantam esta história:\n―O pródigo volveu!‖\nHá um novo nome lá na glória,\nÉ o meu, oh! sim, o meu!\nPois que fui perdoado,\nSou ao céu levado;\nLá morar eu vou!"
        },
        {
            id: 122,
            tb: 669,
            selecionado: true,
            estrofe1: "Senti um novo toque em minha alma e coração,\nA graça e o poder de Deus, amor e compaixão.",
            estrofe2: "Agora compreendo a grandeza do Senhor,\nA maravilha divinal do Seu eterno amor.",
            estrofe3: "Palavras são inúteis quando tento explicar\nAquilo que eu sinto, mas a todos vou contar.",
            estrofe4: "",
            som: "",
            coro: "Transformação! Que mudança em mim!\nJesus me transformou, Seu Espírito enviou,\nPois tocou-me e encheu-me com amor."
        },
        {
            id: 123,
            tb: 165,
            selecionado: true,
            estrofe1: "Outrora perdido andava,\nLonge, bem longe de Deus.\nSem paz, sem perdão, sem prazer me achava,\nSem pátria, sem rumo, sem Deus.",
            estrofe2: "O amor de Jesus, meu bom Mestre,\nMeu coração transformou.\nFeliz cantarei e direi hoje e sempre\nQue meu Salvador me amou.",
            estrofe3: "E quando findar a jornada\nJunto ao Senhor hei de estar.\nNa pátria celeste, a vida esperada\nEntão fruirei sem cessar.",
            estrofe4: "Jesus hoje mesmo convida:\n―Vem, vem a Mim sem tardar.\nTeu ser gozará remissão, nova vida,\nTerás alegria sem par.",
            som: "",
            coro: "Eu sei que a vida\nÉ luta renhida,\nMas com ternura\nJesus me guia.\nCom Cristo, meu Rei,\nFeliz guardarei\nA comunhão\nE a bênção no meu coração."
        },
        {
            id: 124,
            tb: 37,
            selecionado: true,
            estrofe1: "Que dia alegre em que aceitei,\nJesus, a Tua salvação!\nO gozo do meu coração\nEu mais e mais publicarei.",
            estrofe2: "Completa a grande expiação,\nPertenço, agora, a Ti, Senhor!\nChamou-me a voz do Teu amor,\nE em Ti eu tenho paz, perdão.",
            estrofe3: "Sincero voto, ó santo Deus,\nA cada dia hei de afirmar\nE, além da morte, exultar\nPor ser dos redimidos Teus.",
            estrofe4: "",
            som: "",
            coro: "Quão feliz me tornei,\nPois Teu amor me libertou!\nTu me ensinaste a vigiar\nE, em Ti confiando, sempre orar.\nSou feliz, meu Jesus,\nPois Teu amor me libertou!"
        },
        {
            id: 125,
            tb: 60,
            selecionado: true,
            estrofe1: "Que alicerce tens para construir\nUma casa que possa resistir\nEssa tempestade que assoprará\nE a mal fundada casa abaterá?",
            estrofe2: "Nossa morada na Rocha está,\nFirme e segura ela ficará;\nQuando o temporal contra ela der,\nHá de resistir e permanecer.",
            estrofe3: "Como a areia é sempre alicerce vão,\nSão também as obras na salvação;\nPois aquele que em si mesmo crê,\nNo Senhor Jesus, decerto, não tem fé.",
            estrofe4: "Os cristãos, porém, que deveras crêem,\nPelas obras mostram a fé que têm;\nEm confiança plena no Salvador,\nNa maior procela, ei-los sem temor!",
            som: "",
            coro: ""
        },
        {
            id: 126,
            tb: 404,
            selecionado: true,
            estrofe1: "Sabes tu por que eu amo a Cristo?\nPois a mim primeiro Ele amou\nE deixou Seu trono lá na glória,\nCom os pecadores habitou.",
            estrofe2: "Sabes tu por que eu amo a Cristo?\nÉ que tantas dores suportou,\nE porque me sinto mui indigno\nDo imenso amor que me mostrou.",
            estrofe3: "Sabes tu por que eu amo a Cristo?\nEle meus pecados perdoou,\nOs temores, culpas e tristezas\nMeu amado Salvador tirou.",
            estrofe4: "Já conheces meu amor a Cristo.\nNão desejas dar teu coração\nA Jesus, que agora oferece\nInefável, plena salvação?",
            som: "",
            coro: "Eis por que eu tanto amo\nMeu bendito Salvador.\nSou por Ele redimido\nE guardado com amor."
        },
        {
            id: 127,
            tb: 162,
            selecionado: true,
            estrofe1: "Buscou-me com ternura\nJesus, o bom Pastor;\nAchou-me na miséria,\nSalvou-me com amor;\nCantaram anjos lá nos céus\nEm harmonia: ―Glória a Deus‖.",
            estrofe2: "Ferido, abandonado\nJesus me socorreu\nE disse então: ―Achei-te,\nDe agora em diante és Meu‖.\nTão meiga voz jamais ouvi,\nPrazer maior jamais senti.",
            estrofe3: "Jesus mostrou-me as chagas\nQue em meu lugar sofreu,\nOs pregos, os espinhos\nE a cruz em que morreu.\nO que O levou a Se entregar\nPor mim e afrontas suportar?",
            estrofe4: "Enquanto as horas passam,\nEu tenho gozo e paz\nE aguardo aquele dia\nQue glória infinda traz;\nVerei Jesus no céu reinar\nNo esplendor do eterno lar!",
            som: "",
            coro: "Oh! que amor glorioso!\nPreço tão grandioso\nQue Jesus por mim na cruz pagou;\nInaudita graça me mostrou."
        },
        {
            id: 128,
            tb: 203,
            selecionado: true,
            estrofe1: "Em Cristo achei o meu Salvador,\nDe amor fiel, veraz;\nNão cessarei de Lhe dar louvor,\nPois tenho a salvação e paz.",
            estrofe2: "Jesus me achou em pecado e dor,\nSem ter consolação;\nCom braço forte e real amor,\nErgueu-me e deu libertação.",
            estrofe3: "Da morte eterna me resgatou,\nDa dura escravidão;\nNa Rocha eterna seguro estou;\nCantando vou, com gratidão.",
            estrofe4: "",
            som: "",
            coro: "Salvo por Cristo sou,\nSalvo por Quem me amou;\nTão grande paz Ele agora me traz,\nPorque salvo estou."
        },
        {
            id: 129,
            tb: 164,
            selecionado: true,
            estrofe1: "Depois que Cristo me salvou,\nEm céu o mundo se tornou;\nAté em meio do sofrer,\nEu tenho paz no meu viver.",
            estrofe2: "Mui longe outrora eu via o céu,\nMas, quando Cristo me valeu,\nFeliz senti meu coração\nEntrar no céu da retidão.",
            estrofe3: "Bem pouco importa eu habitar\nEm alto monte, à beira-mar,\nEm casa ou gruta, boa ou ruim:\nÉ sempre céu com Cristo em mim!",
            estrofe4: "",
            som: "",
            coro: "Oh! Aleluia! Sim, eu sei!\nÉ céu fruir perdão sem par!\nE, com Jesus, o eterno céu\nEu desde agora irei gozar."
        },
        {
            id: 130,
            tb: 367,
            selecionado: true,
            estrofe1: "Vem, Senhor, do bem a fonte,\nVem, celeste Redentor,\nAjudar-me a entoar-Te\nDignos hinos de louvor!\nTu, Jesus, por mim morreste,\nQuero só por Ti viver;\nQuero, em todos os momentos,\nTua bênção receber.",
            estrofe2: "Era ovelha desgarrada\nQuando Cristo me buscou;\nPara me livrar da morte,\nO Seu sangue derramou;\nNo Seu grande sacrifício\nPaz, perdão e vida achei;\nRedimido, eternamente,\nSua glória fruirei.",
            estrofe3: "Dessa graça, ó Cristo amado,\nSou perpétuo devedor;\nMais e mais a Ti me prenda,\nÓ Jesus, o Teu amor.\nSou ingrato, reconheço,\nPeço, meu Senhor, perdão;\nVem livrar-me do pecado\nE reger meu coração.",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 131,
            tb: 761,
            selecionado: true,
            estrofe1: "Em noite tenebrosa\nVaguei sem salvação\nAté que Cristo me encontrou\nNesse dia feliz do perdão!",
            estrofe2: "Da carga do pecado\nLivrou meu coração,\nA graça excelsa me ofertou\nNesse dia feliz do perdão!",
            estrofe3: "Lavou-me as culpas todas,\nEu gozo a redenção,\nTornou-me alegre o coração\nNesse dia feliz do perdão.",
            som: "",
            coro: "Buscou-me, buscou-me\nQuando perdido na escuridão,\nMeu Cristo achou-me:\nDia feliz do perdão!"

        },
        {
            id: 132,
            tb: 751,
            selecionado: true,
            estrofe1: "Cristo, o Mestre, sempre há de amar-me,\nE dEle o mal não pode afastar-me;\nDeu Sua vida pra me salvar,\nDEle agora sou.",
            estrofe2: "Quando perdido e desgarrado,\nEu recebi perdão do pecado;\nVida eterna me garantiu,\nDEle agora sou.",
            estrofe3: "Que alegria, Cristo salvou-me,\nNão sou escravo, pois libertou-me;\nPelo Seu sangue me redimiu,\nDEle agora sou.",
            estrofe4: "",
            som: "",
            coro: "Eu sou de Cristo agora,\nCristo é meu também,\nNão só em meu viver aqui,\nMas para sempre, amém."
        },
        {
            id: 133,
            tb: 725,
            selecionado: true,
            estrofe1: "Eu, perdido pecador,\nLonge do meu Jesus,\nJá me achava sem vigor,\nA perecer sem luz;\nMeu estado Cristo viu,\nDando-me Sua mão,\nE salvar-me conseguiu\nDa perdição.",
            estrofe2: "Sim, Cristo, o Salvador,\nMe transformou.",
            estrofe3: "Minha vida, todo o ser,\nQuero-Lhe consagrar;\nAo Seu lado vou viver,\nO Seu amor cantar;\nA mensagem transmitir\nAos que em pecado estão.\nVenham, todos, já fruir\nA salvação.",
            som: "Deus me amou e me livrou;\nO Seu imenso amor\nMe transformou.\nFoi Seu poder, o Seu querer.",
            coro: ""
        },
        {
            id: 134,
            tb: 654,
            selecionado: true,
            estrofe1: "Junto à cruz do fiel Senhor,\nEis-me aos pés do bom Redentor,\nEle atendeu ao meu clamor;\nGlória ao meu Jesus!",
            estrofe2: "Que maravilha! De Cristo eu sou!\nTudo, de graça, me perdoou,\nFui redimido e livre estou;\nGlória ao meu Jesus!",
            estrofe3: "Junto à cruz, tenho salvação,\nGozo perfeito, real perdão,\nTenho pureza no coração;\nGlória ao meu Jesus!",
            estrofe4: "Vem sem tardar, pobre pecador,\nCristo te espera com grande amor,\nOh! não rejeites o Salvador;\nGlória ao meu Jesus!",
            som: "",
            coro: "Glória ao meu Jesus! (bis)\nSalvo estou! Isso agora eu sei.\nGlória ao meu Jesus!"
        },
        {
            id: 135,
            tb: 833,
            selecionado: true,
            estrofe1: "Eu vou contar o que meu Deus,\nEm Cristo, fez por mim na cruz:\nBuscou-me com Seu grande amor,\nAlcançou meu coração aflito;\nEu vou contar o que meu Deus\nA todo o homem pode dar:\nA paz que há em começar\nUma vida nova e mais perfeita.",
            estrofe2: "Eu vou contar do Seu amor\nQue, terno, vem-me envolver,\nDo Seu poder que me sustém,\nDo Seu sangue que me purifica.\nA todos quero transmitir\nQue Cristo já nos resgatou,\nEm homens livres nos tornou\nE nos deu o Seu perdão eterno.",
            estrofe3: "Eu vou contar o que meu Deus\nAinda quer oferecer:\nPoder em cada provação\nE fidelidade sem limites;\nEu vou falar do que há por vir\nNo dia em que O encontrar\nNo bom lugar que preparou\nNo Seu lar de alegria infinda.",
            estrofe4: "",
            som: "",
            coro: "Quero contar o que o Senhor já fez,\nO que Ele fez por mim:\nMe reergueu e me restaurou,\nDeu-me o Seu amor;\nQuero contar o que o Senhor já fez\nE o que poderá fazer:\nPela salvação que te dará,\nFazer-te viver!"
        },
        {
            id: 136,
            tb: 150,
            selecionado: true,
            estrofe1: "Sublime amor Deus tem por mim,\nPois digna-Se de ouvir\nMeu contristado coração\nE as mágoas faz sair.\nEmbora não merecedor\nDo Seu imenso amor,\nNas Suas mãos seguro estou,\nConfio no Senhor.",
            estrofe2: "Sublime amor Deus tem por mim!\nEntregue ao plano Seu,\nEu vivo em paz e bem feliz\nAté chegar ao céu.\nO Seu amor me libertou\nDo mal e do temor;\nHá doce harmonia em mim\nE um canto de louvor.",
            estrofe3: "Sublime amor Deus tem por mim,\nTransforma a noite em luz,\nE andando em Sua comunhão\nÉ leve a minha cruz.\nConhece o Pai meus poucos dons,\nQue mui humildes são,\nMas Ele quer o meu amor\nEm grata devoção.",
            estrofe4: "",
            som: "",
            coro: "Eu sei, Deus é amor!\nOh! sim, sublime amor!\nEntregou Seu Filho\nPara todos nós salvar.\nEu sei, Deus é amor."
        },
        {
            id: 137,
            tb: 440,
            selecionado: true,
            estrofe1: "Longe do Senhor andava,\nTriste e cheio de temor;\nPor Jesus não perguntava\nNem queria Seu amor.",
            estrofe2: "No juízo não pensava,\nNem na minha perdição,\nNem minha alma desejava\nA eterna salvação.",
            estrofe3: "Já cansado do pecado,\nFui aos pés do Salvador,\nE então caiu o fardo\nDe tristezas e de dor.",
            estrofe4: "Como é maravilhoso\nPertencer ao meu Jesus,\nTer a graça, o repouso,\nE ficar ao pé da cruz!",
            som: "",
            coro: "Mesmo assim Jesus me ama,\nE não posso explicar!\nEis que Cristo agora chama\nPara hoje te salvar."
        },
        {
            id: 138,
            tb: 786,
            selecionado: true,
            estrofe1: "Que mudança admirável na vida provei,\nPois Cristo minha alma salvou!\nSim, um gozo indizível em Deus eu achei,\nPois Cristo minha alma salvou!",
            estrofe2: "Eu deixei de trilhar a vereda do mal,\nPois Cristo minha alma salvou!\nJá desfruto com gozo o favor divinal,\nPois Cristo minha alma salvou.",
            estrofe3: "Sobre o vale da morte eis que brilha uma luz,\nPois Cristo minha alma salvou.\nSim, avisto meu Lar no porvir com Jesus,\nPois Ele minha alma salvou!",
            estrofe4: "",
            som: "",
            coro: "Com Cristo no meu coração, (bis)\nSou feliz com a vida que Ele me dá,\nPois vive no meu coração."
        },
        {
            id: 139,
            tb: 138,
            selecionado: true,
            estrofe1: "Quem do céu por mim desceu,\nTudo em meu lugar sofreu\nE por mim, na cruz, morreu?\nFoi Cristo! Meu Cristo!",
            estrofe2: "Quem buscou com Seu amor\nEsta ovelha sem pastor?\nQuem quis ser meu Salvador?\nFoi Cristo! Meu Cristo!",
            estrofe3: "Quem com branda compaixão\nComoveu meu coração,\nDando plena salvação?\nFoi Cristo! Meu Cristo!",
            estrofe4: "Quem é digno de louvor?\nQuem merece o meu amor?\nÉ Jesus, meu Salvador,\nMeu Cristo! Meu Cristo!",
            som: "",
            coro: "As minhas trevas dissipou!\nMinha alma enferma já sarou!\nMeu coração Ele alegrou!\nMeu Cristo! Meu Cristo!"
        },
        {
            id: 140,
            tb: 125,
            selecionado: true,
            estrofe1: "Oh! quanto fez Jesus por mim!\nSalvou-me do pecado!\nAté a morte, triste fim,\nPor Ele eu fui amado.\nCom Deus, o Pai, agora está\nJesus, meu Advogado;\nMorada eterna me dará\nMeu glorioso Amado!",
            estrofe2: "Defende como Protetor,\nAlenta o fatigado!\nE sobre mim, com terno amor,\nVigia com cuidado.\nOs rogos que humildes são\nEscuta com agrado;\nTranqüilo, o débil coração\nRepousa em meu Amado!",
            estrofe3: "Eu vou entrar qual vencedor\nTriunfante ali na glória!\nIrei cantar o Seu louvor,\nNum hino de vitória!\nA redenção exaltarei,\nLembrando a doce história\nDo meu glorioso e grande Rei,\nSenhor da eterna glória!",
            estrofe4: "",
            som: "",
            coro: "Cristo! meu Cristo!\nSeu nome é doce, amado!\nDesejo ver meu Salvador,\nPor Quem fui libertado!"
        },
        {
            id: 141,
            tb: 375,
            selecionado: true,
            estrofe1: "Eu, nas trevas, vagueava\nEm profunda solidão,\nMinha alma estava morta,\nE sem fé, meu coração.",
            estrofe2: "Triste é viver nas trevas,\nSem perdão, sem Salvador!\nBela a vida, mas a vida\nEm que há luz e paz e amor.",
            estrofe3: "Eis que, um dia, a Sua graça\nDeus mandou e a doce luz;\nVi, então, já preparado\nO caminho por Jesus.",
            estrofe4: "Minha antiga natureza\nContra a retidão lutou,\nMas Jesus comigo estava,\nSantamente me guiou.\n\nFoi um novo nascimento\nQue o Senhor me concedeu!\nE eu louvores rendo a Cristo,\nNova vida e luz me deu.",
            som: "",
            coro: ""
        },
        {
            id: 142,
            tb: 381,
            selecionado: true,
            estrofe1: "Cada coração procura\nOnde possa descansar,\nMas descanso verdadeiro\nSó Jesus lhe pode dar.",
            estrofe2: "Cristo sempre, eternamente,\nCristo, Salvador e Rei,\nMeu amigo, meu abrigo,\nTudo, tudo nEle achei!",
            estrofe3: "O meu coração Te entrego,\nÓ Jesus, meu Salvador,\nPara que Tu sempre sejas\nO seu Rei e seu Senhor!",
            estrofe4: "Em minh’alma tudo é novo\nDesde que encontrei Jesus,\nUm amigo incomparável,\nQue me guarda e me conduz!\n\nSe teu coração se inquieta,\nTens a alma em aflição,\nNão relutes, meu amigo:\nBusca em Cristo a salvação!",
            som: "",
            coro: ""
        },
        {
            id: 143,
            tb: 70,
            selecionado: true,
            estrofe1: "Que surpreendente graça é\nA graça de Jesus!\nEu cego fui, perdido, vil,\nMas dela veio a luz.",
            estrofe2: "Tal graça me levou o temor\nAssim que em Deus eu cri,\nMe fez feliz, me transformou,\nEu nunca a mereci.",
            estrofe3: "Por provas duras passarei\nNa peregrinação,\nMas pela graça irei morar\nNa eternal mansão.",
            estrofe4: "E, estando nesse Lar, no além,\nEm meio à luz sem par,\nA eternidade usarei\nPra Deus, o Pai, louvar.",
            som: "",
            coro: ""
        },
        {
            id: 144,
            tb: 381,
            selecionado: true,
            estrofe1: "Cantarei a linda história\nDe Jesus, o Salvador,\nQue deixou Seu lar na glória\nPor amar o pecador.",
            estrofe2: "Eu, perdido, Cristo achou-me\nLonge, longe do meu lar,\nAbraçou-me e tomou-me\nPara eu com Ele estar.",
            estrofe3: "Jesus Cristo encontrou-me\nQuando prestes a morrer,\nSua graça alcançou-me\nE curou-me com poder.",
            estrofe4: "Aflições ainda tenho,\nSofrimento e dissabor,\nMas a Ele eu tudo exponho,\nE me livra com amor.",
            som: "",
            coro: "Cantarei a linda história\nDe Jesus, meu Salvador;\nCantarei na Sua glória\nCom os santos, com fervor."
        },
        {
            id: 145,
            tb: 160,
            selecionado: true,
            estrofe1: "Veio Jesus a este mundo vil\nPara buscar a ti;\nFoi rejeitado por gente hostil\nPara salvar a ti,\nGlórias ali no céu deixou,\nIngratidão no mundo achou,\nTudo Ele fez porque te amou,\nPara salvar a ti.",
            estrofe2: "O teu castigo Jesus levou\nPara salvar a ti;\nTudo na cruz Ele consumou\nPara remir a ti.\nQuem dentre os homens compreendeu\nTodas as dores que sofreu,\nA condição em que morreu\nPara salvar a ti?",
            estrofe3: "Tudo isso Deus fez em teu favor\nPara salvar a ti;\nChama-te agora com terno amor\nPara perdoar a ti.\nDeves chegar em contrição,\nTendo certeza do perdão;\nCristo te estende a Sua mão\nPara salvar a ti.",
            estrofe4: "Oh! que alegria, que gozo e paz\nTer salvação de Deus\nE nova vida que satisfaz\nA alma que busca os céus!\nLivre das culpas do pecar,\nLonge da dor e do chorar,\nTendo certeza de gozar\nA redenção de Deus!",
            som: '',
            coro: "Glória, glória, demos ao Salvador!\nGlória, glória, por Seu tão grande amor!\nGlória, glória, temos a paz com Deus!\nGlória, glória, vamos cantar nos céus.",
        },
        {
            id: 146,
            tb: 703,
            selecionado: true,
            estrofe1: "A mensagem vem de Deus: Cristo é Salvador! Ó, clamai, vós, filhos Seus: Cristo é Salvador! Proclamai com grande ardor que Deus ama o pecador, Que Seu Filho ao mundo deu para ser Salvador!",
            estrofe2: "Ó vós, povos, eis o dom: Cristo é Salvador! Por Seu sangue dá perdão, Cristo é Salvador! Terras todas, exultai, Seu amor considerai; E vós, anjos, proclamai: Cristo é Salvador!",
            estrofe3: "Ó vós, santos, já bradai: Cristo é Salvador! Vós, nações, oh! jubilai; Cristo é Salvador! Salvação de graça dá, hoje, a todo o pecador. Glória! glória a Deus, Senhor, Cristo é Salvador!",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: ""
        },
        {
            id: 147,
            tb: 200,
            selecionado: true,
            estrofe1: "Jesus nos diz no Calvário Que tudo está consumado. Ó salvos, olhai o mundo A perecer no pecado!",
            estrofe2: "Jesus é amigo encontrado Na hora de aflição. Jesus está sempre ao lado De quem deseja o perdão.",
            estrofe3: "Se as tuas chagas te afligem E é grande o teu dissabor, Jesus foi feito advogado Nos céus por ti, pecador.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: "Glória, glória, aleluia! (bis) Glória, glória ao Senhor, Glória a Cristo Jesus, Glória ao meu Salvador!"
        },
        {
            id: 148,
            tb: 163,
            selecionado: true,
            estrofe1: "Cristo Jesus me salvou, Todo o meu ser transformou; O inimigo não me quis soltar, Só me quis maltratar.",
            estrofe2: "Tu, que oprimido estás, Escravo de Satanás, Vem hoje a Cristo Jesus, o Senhor, Único Salvador!",
            estrofe3: "Vinde, cantai o louvor, Vinde, cantai sem temor, Cristo vos salva de todo o horror, Vinde ao Salvador!",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: "Glória a Cristo, meu Rei! (bis) Hoje sou salvo, sim, isto eu sei, Glória a Jesus, meu Rei!"
        },
        {
            id: 149,
            tb: 587,
            selecionado: true,
            estrofe1: "Jubilosos estão os que o pleno perdão Receberam da mão do Senhor; Indizível a paz e o conforto que traz Aos cristãos essa prova de amor.",
            estrofe2: "Que prazer foi o meu quando Cristo me deu, Por Seu sangue, perdão eternal. Cri, no meu coração a celeste visão Revelou Seu favor divinal.",
            estrofe3: "Dia e noite exultei e a Jesus adorei! Hei de sempre ao mundo contar Quanto a mim Deus amou, quanto Cristo penou Para assim me poder resgatar.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: "Aleluia! Cantemos com prazer e com fervor Junto com a excelsa grei, Dando graças sempre ao Rei, Todo o dia, no serviço do Senhor."
        },
        {
            id: 150,
            tb: 109,
            selecionado: true,
            estrofe1: "Ó Cristo amado, meu célico Rei, Tu me libertaste, e os pecados deixei. Minha alma pertence a Ti, ó Senhor, E com fé proclamo Teu grande amor.",
            estrofe2: "Antes fui perdido e vil pecador, Hoje sou remido, graças ao Senhor! A noite mais densa torna-se em luz Na santa presença de Cristo Jesus.",
            estrofe3: "Cristo, quão ditoso é o coração Que desfruta gozo, paz e salvação. Sê Tu meu amigo e guia leal, Leva-me contigo ao Teu Lar celestial.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: "Elevemos nossas vozes, Exaltemos a Jesus. Dor e morte vergonhosa Padeceu por nós na cruz."
        },
        {
            id: 151,
            tb: 423,
            selecionado: true,
            estrofe1: "Ó minha alma, sem demora, Vem a Cristo celebrar E os louvores do Seu nome Exultante publicar. Vem, minha alma, vem, minha alma, Sua graça proclamar!",
            estrofe2: "Meu viver amargo e triste Conheceste, ó Salvador, E dos céus desceste à terra Para ser meu Redentor! Oh! sublime, oh! sublime É, Jesus, o Teu amor.",
            estrofe3: "Meus pecados carregando, No madeiro, em meu lugar, Foi Jesus crucificado: Quis minha alma resgatar. Para sempre, para sempre, Teus louvores vou cantar.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: ""
        },
        {
            id: 152,
            tb: 592,
            selecionado: true,
            estrofe1: 'Senhor, nós aqui Teus louvores cantamos, Tu és nosso Deus, nosso Pai, nossa luz, A vida nos deste, em que nós exultamos, Em nós resplandece o Teu sol, que é Jesus.',
            estrofe2: 'Nós éramos ímpios, e Tu nos salvaste, Teu Filho nos deste - que amor divinal! Os nossos pecados, Senhor, perdoaste, E o ser nos inundas de paz perenal.',
            estrofe3: 'É gozo excelso que assim nos congrega; Delícias celestes podemos fruir. Enquanto, aos prazeres, o mundo se entrega, Louvamos a Cristo, pois quis-nos remir.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Tu és nosso Deus, nosso Pai, nossa luz, A vida nos deste, em que nós exultamos, Em nós resplandece o Teu sol, que é Jesus. (bis)\nOs nossos pecados, Senhor, perdoaste, E o ser nos inundas de paz perenal. (bis)\nEnquanto, aos prazeres, o mundo se entrega, Louvamos a Cristo, pois quis-nos remir. (bis)'
        },
        {
            id: 153,
            tb: 221,
            selecionado: true,
            estrofe1: 'É bom louvar a Deus, ó cidadãos dos céus, A Ele glória dar e graça anunciar, Dizer a todos quanto amor Devemos nós ao Salvador!',
            estrofe2: 'Pois Ele o céu deixou e servo Se tornou, Ao mundo vil desceu e sobre a cruz morreu, Por nós quis Ele aqui penar E à morte horrenda Se entregar.',
            estrofe3: 'Assim por nós, na cruz, o fel bebeu Jesus, Foi para nos remir e a culpa extinguir; A Sua grande expiação É nossa justificação.',
            estrofe4: 'O grande Fiador, da morte vencedor Triunfante ressurgiu e ao céu caminho abriu! Ah! quem o grande amor dirá Que a Ti devemos, Jeová?',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 154,
            tb: 867,
            selecionado: true,
            estrofe1: 'Oh! repete mais uma vez Tão belas novas de amor! Vem contar o que Cristo fez! Tão belas novas de amor! Elas vêm de cima, Dão sustento e vida, Falam de luz, do bom Jesus, Tão belas novas de amor.',
            estrofe2: 'Cristo, hoje, a todos diz Tão belas novas de amor! Dá-Lhe ouvidos e sê feliz. Que belas novas de amor! Elas levam à fonte Onde há graça abundante; Falam de luz, do bom Jesus, Tão belas novas de amor.',
            estrofe3: 'Só em Cristo há salvação, Que belas novas de amor! Sim, transformam o coração, Tão belas novas de amor! Trazem paz, conforto, Gozo, vida, verdade. Falam de luz, do bom Jesus, Tão belas novas de amor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 155,
            tb: 481,
            selecionado: true,
            estrofe1: 'O meu coração sofredor Descanso seguro encontrou Seguindo os conselhos de amor Do Pai que do mal me chamou.',
            estrofe2: 'Nos astros que brilham nos céus, Da lua, no brando clarão, Eu leio poemas de Deus, Que falam de amor e perdão.',
            estrofe3: 'No livro bendito encontrei Palavras de amor e de luz; E canto celeste escutei Dos anjos, saudando Jesus.',
            estrofe4: 'Os males do mundo deixei, Por isso me pus a cantar; Com Deus para sempre estarei, Irei com Jesus ao Seu lar.',
            estrofe5: '',
            som: '',
            coro: 'Cantai, cantai No templo de nosso Senhor! Cantai, cantai! Ao mundo mostrai Seu amor!'
        },
        {
            id: 156,
            tb: 865,
            selecionado: true,
            estrofe1: 'Que bela história de amor! Quão terna e grata é. Que bela história de amor! Ela desperta a fé. Anjos milhares a cantam, E os pastores a escutam, Milhares de almas a aceitam, Que bela história de amor!',
            estrofe2: 'Que bela história de amor! Cristo chamando está. Que bela história de amor! Vida e perdão nos dá. Chama-nos mui ternamente E do Calvário na fonte Lava-nos, sempre clemente, Que bela história de amor!',
            estrofe3: 'Que bela história de amor! Cristo descanso dá. Que bela história de amor! Paz eternal dará. Aos que humildes a pedem, E com fervor a recebem, E com constância O seguem, Que bela história de amor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! que amor! Oh! que amor! Maravilhosa É essa história de amor.'
        },
        {
            id: 157,
            tb: 156,
            selecionado: true,
            estrofe1: 'Oh! que mensagem cheia Da compaixão de Deus, A do evangelho santo Que nos conduz aos céus!',
            estrofe2: 'Incomparável graça, Cheia de santo amor, Que ao pecador perdido Trouxe o bom Salvador!',
            estrofe3: 'Pois o pecado avilta, Enche de escuridão A alma rebelde e errada Sob sua maldição!',
            estrofe4: 'Temos na cruz de Cristo Bênção e salvação, Porta da vida aberta, Única redenção!',
            estrofe5: '',
            som: '',
            coro: 'Eis a nova: Quem em Jesus confia DEle há de ter verdadeira luz, Vida, perdão e alegria!'
        },
        {
            id: 158,
            tb: 777,
            selecionado: true,
            estrofe1: 'Oh! que belos hinos hoje lá no céu! É que o pródigo ao seu lar voltou. Vede o Pai celeste pronto a abraçar Esse filho que Ele tanto amou!',
            estrofe2: 'Oh! que belos hinos hoje lá no céu! É que já se reconciliou A alma rebelada que, rendida a Deus, Renascida, para o lar voltou!',
            estrofe3: 'Esse arrependido vinde festejar, Como os anjos fazem, com fervor. Ide, pois, alegres, ide anunciar Que se resgatou um pecador.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Glória, glória, os anjos cantam lá! Glória, glória, as harpas tocam já! É o santo coro dando glória a Deus Por mais um remido entrar nos céus.'
        },
        {
            id: 159,
            tb: 592,
            selecionado: true,
            estrofe1: 'É tempo que atendas a voz do Supremo, Que a ti, pecador, vida nova quer dar! Evita o suplício eterno, extremo:',
            estrofe2: 'Se, por teu desprezo, a bênção perderes, Angústia e terror te virão flagelar; Portanto, abandona os mundanos prazeres:',
            estrofe3: 'Ao Seu tribunal tens de ser conduzido, E por tua alma quem vai advogar? Oh! deixa os pecados e toma sentido:',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 160,
            tb: 31,
            selecionado: true,
            estrofe1: 'Medo tens que o adversário vá vencer? Nuvens vêm a tua alma obscurecer? Abre o coração e deixa Cristo entrar E o sol em ti raiar.',
            estrofe2: 'Fraca e incerta é tua fé no Salvador? Deus não ouve as tuas preces com favor? Abre o coração e deixa Cristo entrar E o sol em ti raiar.',
            estrofe3: 'Queres caminhar ao céu em plena paz, Livre da condenação que o inferno traz? Abre o coração e deixa Cristo entrar E o sol em ti raiar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Deixa a luz do céu entrar, Deixa o sol em ti nascer, Abre o coração e deixa Cristo entrar E o sol em ti nascer.'
        },
        {
            id: 161,
            tb: 819,
            selecionado: true,
            estrofe1: 'Tua alma está ferida, Magoado, o coração? A tristeza já se apoderou de ti? Escuta, meu amigo, Jesus nos fala assim: ―Ó cansados e oprimidos, Vinde a Mim!',
            estrofe2: 'Desperta, tu que dormes, A fé traz esperança, Já desponta um novo dia a teu favor; Lembra que Deus é amor, Jesus nos fala assim: ―Ó cansados e oprimidos, Vinde a Mim!',
            estrofe3: 'Se creres, meu amigo, Terás a salvação, Plena paz inundará teu coração. Escuta a voz de Cristo, Jesus nos fala assim: ―Ó cansados e oprimidos, Vinde a Mim!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: '―Tomai sobre vós meu jugo, Eu vos aliviarei, E descanso vossas almas gozarão, Pois o meu fardo é leve, Meu jugo é suave, Paz perfeita vós tereis no coração!‖'
        },
        {
            id: 162,
            tb: 641,
            selecionado: true,
            estrofe1: 'No horizonte o sol se põe; Corre, pois, a buscar perdão. Se desejas ir ao céu, Clama logo por salvação. Oh! vem a Deus agora, Pois a morte não demora, Partiremos deste mundo Ao se pôr o sol!',
            estrofe2: 'Toda a chance irá de vez Quando o sol desaparecer, Breve é a vida, o ocaso vem De repente surpreender! Se a Cristo rejeitares, Desprezando o Seu convite, Teu destino será triste Ao se pôr o sol!',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! sim, antes de o sol se pôr, Oh! sim, antes de o sol se pôr, A Cristo vem, agora, Vida eterna obter!'
        },
        {
            id: 163,
            tb: 203,
            selecionado: true,
            estrofe1: 'Olha para Cristo, olha, pecador, Pois por ti bebeu a taça de amargor; Toda a tua culpa Cristo já pagou, Todo o teu pecado sobre Si tomou.',
            estrofe2: 'Olha para Cristo, que por ti morreu; No madeiro rude Ele padeceu. Pela dor intensa que na cruz sentiu, Por Seu sangue puro, Cristo te remiu.',
            estrofe3: 'O poder das trevas Ele conquistou, O terror da morte já aniquilou; Eis o véu rasgado, eis do céu a luz, Tudo está cumprido; olha teu Jesus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Toda a tua culpa Cristo já pagou, Todo o teu pecado sobre Si tomou.'
        },
        {
            id: 164,
            tb: 755,
            selecionado: true,
            estrofe1: 'O que te diz o amor de Jesus? Responderás a ele? Tu não te lembras que Ele, na cruz, Salvou tua alma da morte?',
            estrofe2: 'Não te convida o amor de Jesus? Teu coração não ouve? Ele teu Mestre quer-Se tornar, Não Lhe recuses resposta.',
            estrofe3: 'Sobre Seu nome ouviste falar, Suas palavras sábias? Obedeceste quando chamou, Já Lhe entregaste a vida?',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! recorda! Oh! recorda Todo o amor que Ele te deixou. Oh! recorda! Oh! recorda! Deus por ti morreu na cruz.'
        },
        {
            id: 165,
            tb: 551,
            selecionado: true,
            estrofe1: 'Quem ouvir as novas, vá proclamar: ―Salvação de graça vinde desfrutar!‖ Oh! que o mundo inteiro ouça anunciar: ―Todo o que quiser, é vir!‖',
            estrofe2: 'Quem quiser agora, venha aceitar; Eis a porta aberta, já podeis entrar; É Jesus caminho para ao céu chegar; Todo o que quiser, é vir!',
            estrofe3: 'Que fiel promessa tens, pecador! Queres tu a vida? Vem ao Salvador! Ele a todos fala com mui terno amor: ―Todo o que quiser, é vir!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Todo o que quiser, venha receber! Possam todos essa boa nova ouvir. É o Pai celeste que convida assim: ―Todo o que quiser, é vir!‖'
        },
        {
            id: 166,
            tb: 245,
            selecionado: true,
            estrofe1: 'Palavra abençoada! Convite que contém Promessa e cumprimento, com infinito bem. Eis, cheio de ternura, Jesus nos chama a Si, Escravos do pecado, e diz-nos: ―Vinde a Mim‖.',
            estrofe2: 'Por que viver tão longe dos braços de Jesus? Por que vagar nas trevas, podendo andar na luz? Da vida sem proveito, da culpa e da aflição, Corramos para a senda da eterna salvação.',
            estrofe3: 'Em tempos de amargura, de desalento e dor, Ou quando nos persegue doloso tentador, Jesus, com voz maviosa, concede abrigo em Si E, dissipando o medo, segreda: ―Vinde a Mim‖.',
            estrofe4: 'Em tudo e para sempre ouçamos ao Senhor, Achando doce alívio no Seu profundo amor. Assim conheceremos o gozo que produz, No coração submisso, o ―vinde‖ de Jesus.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 167,
            tb: 764,
            selecionado: true,
            estrofe1: 'Somente um passo a Cristo! Oh! deixa todo o mal, As seduções do mundo, E aceita a paz real.',
            estrofe2: 'Somente um passo a Cristo! Das trevas para a luz, Para inefável gozo, Ao lado de Jesus.',
            estrofe3: 'Somente um passo a Cristo! Oh! vem, decide já! Com terno amor te espera, Perdão te outorgará.',
            estrofe4: 'Somente um passo a Cristo! Não queiras hesitar, Pois corre grande risco Quem mais se demorar.',
            estrofe5: '',
            som: '',
            coro: 'Vem, pecador, vem, pecador, Vem ao Salvador, Com arrependimento, Tudo Lhe confessando! Somente um passo a Cristo! Oh! vem sem demorar!'
        },
        {
            id: 168,
            tb: 823,
            selecionado: true,
            estrofe1: 'Aos Teus pés estou, ó Salvador, Ouve tão indigno pecador Cheio de tristeza e pranto, Tendo-Te ofendido tanto, Poderei contar com Teu perdão? Eu, sem Deus, sem paz no coração, E liberto, enfim, da escravidão, Teu filho ser?',
            estrofe2: 'Meu pecado grande e carmesim Me persegue sempre aqui sem fim; Triste, aflito e em desespero, Nada mais do mundo quero, Quebrantado, agora, ao pé da cruz, Rogo por alívio, paz e luz, Vem, confirma em mim, Senhor Jesus, O Teu perdão!',
            estrofe3: 'Pela fé em Cristo salvo estou, Todas as minhas faltas perdoou. No Seu sangue achei pureza, Longe foi tão vil tristeza, Deste mundo vou ao bom país, Concedeu-me nova diretriz, Dando-me certeza tão feliz Que dEle sou!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Plena graça para me salvar, Sangue puro para me lavar E poder tem para me guardar Meu Salvador!'
        },
        {
            id: 169,
            tb: 316,
            selecionado: true,
            estrofe1: 'Cristo, Rocha eternal, Quero abrigar-me em Ti! Possa o sangue divinal, Que, na cruz, vertido vi, Do pecado me curar E minha alma libertar.',
            estrofe2: 'Bem nenhum em mim Tu vês, Quero à Tua cruz chegar; Cobre a minha desnudez, Dá-me graça salutar; Se não me vens socorrer, Salvador, vou perecer!',
            estrofe3: 'Minhas obras, eu bem sei, Mesmo feitas em temor, Não cumpriram Tua lei Nem revelam meu amor; Não mereço, pois, perdão, Mas em Ti há salvação.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 170,
            tb: 259,
            selecionado: true,
            estrofe1: 'Jesus, estás à porta do aflito coração, Paciente esperas nele fazer habitação. Cristãos jamais seremos nem filhos Teus, Senhor, Se entrada nós não dermos a Ti, bom Salvador.',
            estrofe2: 'Jesus, estás batendo com traspassada mão, Espinhos tens na fronte, Teus olhos tristes são. Que amor incompreensível que espera sem cansar! Por causa do pecado não podes Tu entrar.',
            estrofe3: 'Jesus, com insistência e penetrante olhar Segredas ternamente: ―Oh! deixa-Me entrar.‖ Senhor, agora abrimos o nosso coração! Oh! entra e faze nele eterna habitação.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 171,
            tb: 479,
            selecionado: true,
            estrofe1: 'Jesus, Senhor, me chego a Ti, Oh! dá-me alívio mesmo aqui, O Teu favor estende a mim, Aceita um pecador!',
            estrofe2: 'As minhas culpas grandes são, Mas Tu, que não morreste em vão, Me podes conceder perdão, Aceita um pecador!',
            estrofe3: 'Eu nada posso merecer, Jesus, a Ti me vou render, Oh! não me deixes perecer, Aceita um pecador!',
            estrofe4: 'Sim, venho agora, Redentor, Só Tu, Jesus, és meu Senhor, Oh! vem salvar-me em Teu amor, Aceita um pecador!',
            estrofe5: '',
            som: '',
            coro: 'Eu venho como estou! (bis) Porque Jesus por mim morreu, Eu venho como estou!'
        },
        {
            id: 172,
            tb: 559,
            selecionado: true,
            estrofe1: 'Vem, filho perdido! Ó pródigo, vem! Ruína te espera Nas trevas além. Tu, de medo tremendo, Tu, faminto e gemendo, Ó filho perdido, Vem, pródigo, vem!',
            estrofe2: 'Vem, filho perdido! Ó pródigo, vem! Teu Pai te convida, Querendo-te bem! Vestes há para ornar-te, Ricos dons, vem fartar-te! Ó filho perdido, Vem, pródigo, vem!',
            estrofe3: 'Vem, filho perdido! Oh! volta a Jesus! Bondade infinita Se avista na cruz. Em miséria vagando, Tuas culpas chorando, Ó filho perdido, Vem, pródigo, vem!',
            estrofe4: 'Ó pródigo, escuta A voz do Senhor! Oh! rompe as ciladas Do vil tentador! Em teu lar há bastante, E tu vagas errante! Ó filho perdido, Vem, pródigo, vem!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 173,
            tb: 423,
            selecionado: true,
            estrofe1: 'Vinde, pobres pecadores, Vinde, mesmo como estais; Cristo pronto está a salvar-vos, Oh! por que vos demorais? Cristo salva, Cristo salva, Ele quer, vós duvidais?',
            estrofe2: 'Vinde, vós, que estais cansados, Oprimidos, vinde já; Paz, perdão e santidade Vinde, todos, alcançar, Pois de graça, pois de graça Tudo Cristo vos quer dar.',
            estrofe3: 'Vinde, vós, ó redimidos, Vinde a Cristo, o Redentor. Sempre junto do madeiro Contemplai o Salvador. Redimidos, redimidos, Exultai no Seu amor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 174,
            tb: 10,
            selecionado: true,
            estrofe1: 'À porta chamo, alma triste, Ansioso por te consolar, Se Minha voz, enfim, ouviste, Posso Eu entrar? Posso Eu entrar?',
            estrofe2: 'Por ti foi grande Meu castigo, Sofri sem nunca murmurar; Agora vive em paz coMigo, Posso Eu entrar? Posso Eu entrar?',
            estrofe3: 'A Minha graça poderosa O teu pecado vem lavar; Ó alma impura, pesarosa, Posso Eu entrar? Posso Eu entrar?',
            estrofe4: 'Do céu Eu trago vida e gozo Que hoje podes desfrutar E em tudo te farei ditoso, Posso Eu entrar? Posso Eu entrar?',
            estrofe5: '',
            som: '',
            coro: 'Levado à porta, por amor, Procuro já teu mal sanar; Tristonho, aflito pecador, Posso Eu entrar? Posso Eu entrar?'
        },
        {
            id: 175,
            tb: 155,
            selecionado: true,
            estrofe1: 'Há hoje alguém esperando Para Jesus encontrar? Venha sem mais demorar-se, Cristo vai hoje passar! Ei-lO de mãos estendidas, Cheio de graça sem par. Oh! que ventura inaudita, Cristo vai hoje passar!',
            estrofe2: 'Há inda alguém duvidando Do Seu poder de salvar? Pois venha experimentá-lo, Cristo vai hoje passar! O Seu poder é divino, O Seu amor é sem par. Ó coração quebrantado, Cristo vai hoje passar!',
            estrofe3: 'Há inda alguém demorando Para Jesus aceitar? Eis que o Senhor está perto, Ele vai hoje passar! Ó pecador desditoso, Não cesses, pois, de clamar! Vem, tuas culpas chorando, Cristo vai hoje passar!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Cristo vai hoje passar, passar, passar! Passa de amor transbordando, Todos a Si convidando. O Mestre vai hoje passar, Sim, hoje Ele vai passar!'
        },
        {
            id: 176,
            tb: 631,
            selecionado: true,
            estrofe1: 'Manso e suave está Cristo chamando, Chama por ti e por mim. Eis que à porta espera velando, Vela por ti e por mim.',
            estrofe2: 'Que esperamos? Jesus nos convida, Convida a ti e a mim. Não desprezemos a graça da vida Que salva a ti e a mim!',
            estrofe3: 'Que grande amor que Jesus nos tem dado, Dado a ti e a mim! Pois libertou-nos do triste pecado, Mártir por ti e por mim.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: '―Vem já, vem já, filho, ao lar volta já!‖ Amavelmente está Cristo chamando E diz: ―Meu filho, vem já!‖'
        },
        {
            id: 177,
            tb: 812,
            selecionado: true,
            estrofe1: 'Oh! não tens ouvido do amor sem igual, Do amor que teu Deus tem por ti, O amor que O levou a Seu Filho entregar E os salvos levar para Si?',
            estrofe2: 'Não foram os santos que Cristo chamou, Nem justos veio Ele salvar; Mas pobres e fracos, culpados e maus, Mandou pelos servos chamar.',
            estrofe3: 'O homem, porém, não podia chegar À santa presença de Deus; Porque seus pecados, em grande porção, Vedavam-lhe a entrada nos céus.',
            estrofe4: 'Mas pelo Seu sangue Jesus expiou A culpa do réu lá na cruz; Tirando o pecado, caminho mostrou, O qual para o céu nos conduz.',
            estrofe5: 'E tu, pecador, não desejas, então, O amor do teu Deus conhecer? Por fé no Senhor, como teu Salvador, Irás alcançar tal prazer.',
            som: '',
            coro: 'Oh! crê nesse amor sem igual! (bis) A graça de Deus te chama dos céus; Oh! crê nesse amor sem igual!'
        },
        {
            id: 178,
            tb: 29,
            selecionado: true,
            estrofe1: 'Ó corações, considerai: Deus hoje vos conduzirá; O vosso orgulho abandonai. Quereis salvar-vos? Vinde já!',
            estrofe2: 'O amanhã incerto é, E não sabeis o que virá; Portanto, tende em Cristo fé. Quereis salvar-vos? Vinde já!',
            estrofe3: 'Do mundo nunca obtereis A paz que vos satisfará; Em Cristo tudo achareis. Quereis salvar-vos? Vinde já!',
            estrofe4: 'O bom Jesus ao pecador Perdão jamais recusará; Portanto, uni-vos ao Senhor. Quereis salvar-vos? Vinde já!',
            estrofe5: '',
            som: '',
            coro: 'Por que não já? Por que não já? (bis) Quereis salvar-vos? Vinde já!'
        },
        {
            id: 179,
            tb: 120,
            selecionado: true,
            estrofe1: 'Amigo, se oprimido estás, Em Deus há compaixão; Vem hoje a Cristo e alcançarás Conforto e salvação.',
            estrofe2: 'A ti e ao mundo Cristo amou E bênção te quer dar. Precioso sangue derramou A fim de te salvar.',
            estrofe3: 'Verdade, Luz e Vida é Que para os céus conduz; Põe nEle agora a tua fé E segue o bom Jesus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Só confia! Só confia NEle desde já. Cristo salva! Cristo salva E te guardará.'
        },
        {
            id: 180,
            tb: 253,
            selecionado: true,
            estrofe1: 'A nova do evangelho Já se fez ouvir aqui, Publicando em som alegre O que Deus já fez por ti. Pois tanto o mundo amou, Sim, a cada pecador, Que do céu lhe deu Seu Filho Para ser seu Redentor.',
            estrofe2: 'A nova do evangelho: Segurança, vida e paz, É o amor de Jesus Cristo, Que o perdão de Deus nos traz. As novas se vos dão De haver um Salvador, Poderoso e mui bondoso, Que perdoa o pecador.',
            estrofe3: 'A nova do evangelho Vem a todos avisar Do perigo grande e grave Para quem se descuidar. Salvai-vos desde já, Não vos detenhais no mal, Não volteis atrás os olhos, Pois vos pode ser fatal.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Santa paz e perdão São as novas lá dos céus! Santa paz e perdão! Bendito o nosso Deus!'
        },
        {
            id: 181,
            tb: 328,
            selecionado: true,
            estrofe1: 'Quem me poderá salvar? Cristo, que verteu Seu sangue. Onde as manchas vou limpar? Só no Seu precioso sangue.',
            estrofe2: 'Vejo a minha salvação Só no Seu precioso sangue. Deus concede o Seu perdão Por Seu tão precioso sangue.',
            estrofe3: 'Dele vem perfeita paz, Pelo Seu precioso sangue. Infalível e eficaz É o Seu precioso sangue.',
            estrofe4: 'Minha justificação Tenho no precioso sangue. Gozo traz ao coração Esse tão precioso sangue.',
            estrofe5: 'Entrarei no santo lar Pelo Seu precioso sangue. Vida eterna irei gozar Por Seu tão precioso sangue.',
            som: '',
            coro: 'Que preciosa paz Nos vem da Sua cruz, A qual me dá Jesus Pelo Seu precioso sangue!'
        },
        {
            id: 182,
            tb: 119,
            selecionado: true,
            estrofe1: 'Tu deixaste, Jesus, o Teu reino de luz E baixaste a este mundo tão vil; Um presépio em Belém, Tu, Jesus, Sumo Bem, Escolheste por berço infantil.',
            estrofe2: 'Alegraram-se os céus, com os santos de Deus, Sim, por teres nascido, Jesus, Vindo aos filhos de Adão conceder salvação Pela morte em resgate, na cruz.',
            estrofe3: 'Tu vieste, Senhor, revelar-nos amor E Te aprouve do mal nos salvar; Mas provaste do fel, do motejo cruel, Morte, ao fim, Te fizeram provar.',
            estrofe4: 'Outra vez Tu virás e por mim chamarás, Rodeado dos anjos de Deus; Oh! que gozo terei ao ouvir de meu Rei: ―Um lugar te darei Eu nos céus.',
            estrofe5: '',
            som: '',
            coro: 'Vem, Jesus, habitar comigo, Em minha alma há lugar; oh! vem já! Vem, Jesus, habitar comigo, vem! Em minha alma há lugar; oh! vem já!'
        },
        {
            id: 183,
            tb: 757,
            selecionado: true,
            estrofe1: 'Cristo é meu Salvador, eu sei, Deu-me paz em meio à aflição; Das correntes de pecado e temor Procurei libertação. Com misericórdia e amor Atendeu-me a oração; Seu precioso sangue, então, lavou Meu pobre coração.',
            estrofe2: 'Não esqueço o que me fez Jesus, Foi completa a transformação! Renasci conforme Ele ensinou; Vivo em celebração Do milagre que operou em mim, Do poder que há na cruz, Desta vida verdadeira Que é andar na Sua luz!',
            estrofe3: 'Alegria e paz conhecerás, Pois Jesus as tem para dar. Retidão, pureza, um novo viver Por Seu sangue irás gozar. Vem, ó pecador, eu te levarei Para a fonte do perdão; Alvo mais que a neve hás de ser, Gozando a salvação!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Este é o lugar onde eu quero estar, Pois maravilhas vejo aqui. Oh! vem comigo - há bênção sem par Junto à cruz de Cristo.'
        },
        {
            id: 184,
            tb: 277,
            selecionado: true,
            estrofe1: 'Cristo salva o pecador E transforma o coração; Ao contrito, com amor, Oferece salvação.',
            estrofe2: 'Cristo salva o pecador E concede-lhe perdão. Aceitai o bom Senhor, Aceitai de coração.',
            estrofe3: 'Vinde, todos, e achareis Paz e luz no Redentor; Vida eterna, o Rei dos reis Vos dará por Seu favor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Confiai em Seu poder; Confiai em Seu amor; Crede, pois, que Cristo quer Libertar o pecador.'
        },
        {
            id: 185,
            tb: 700,
            selecionado: true,
            estrofe1: 'Cristo te chama com mui terno amor; Ó pecador, vem atender! DEle não fujas com fútil temor; Vem a Jesus te render!',
            estrofe2: 'Cristo te chama a vir descansar; Ó pecador, vem atender! Teu grande peso Ele quer minorar; Vem a Jesus te render!',
            estrofe3: 'Cristo deseja, pois, te perdoar; Ó pecador, vem atender! Tudo Ele fez para te resgatar; Vem a Jesus te render!',
            estrofe4: 'Sempre esperando, Se põe a chamar; Ó pecador, vem atender! Corre depressa, sim, vem-te entregar; Nada te deve deter!',
            estrofe5: '',
            som: '',
            coro: 'Ó pecador, eis o Senhor! Vem, atende com fé a chamada de amor!'
        },
        {
            id: 186,
            tb: 572,
            selecionado: true,
            estrofe1: 'Das águas da vida sempre há de beber Quem, arrependido, no Salvador crer, Da pena da morte liberto será E sempre com Cristo o mal vencerá.',
            estrofe2: 'É Deus quem afirma que dá salvação, De todo o pecado concede perdão, E agora declara que, assim como estás, Jesus te aceita e salvo serás.',
            estrofe3: 'Por meio do sangue que Cristo verteu, Ficou consumado o resgate do réu, E o Pai lhe oferece, por Seu terno amor, Lugar em Seu lar, com o bom Salvador.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'O dom é de graça, Jesus é capaz De satisfazer, com dulcíssima paz, Ao homem que aceita Seu pleno perdão, Sem outra esperança de obter salvação.'
        },
        {
            id: 187,
            tb: 573,
            selecionado: true,
            estrofe1: 'Oh! vinde a Cristo sem mais demorar, Pois Ele aos contritos perdão há de dar; Os sonhos deixai, ó escravos do mal, E, crendo em Jesus, tendes luz divinal.',
            estrofe2: 'Severa a luta, é difícil viver, Porém Deus socorre, e haveis de vencer; Jesus vos prepara morada nos céus, E em breve ganhareis do Senhor os lauréis.',
            estrofe3: 'Ao vale da morte chegados então, Vós mesmos vereis estendida essa mão Que à glória vos leva; o prêmio vos dá O Rei que para sempre convosco estará.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'O Leão de Judá romperá os grilhões, Vitória dará aos fiéis corações.'
        },
        {
            id: 188,
            tb: 648,
            selecionado: true,
            estrofe1: 'Cristo na glória, de retidão vestido, Por meu advogado Se constituiu; E sempre sustenta e defende o redimido. Oh! podes dizer que também te remiu?',
            estrofe2: 'Já gozo paz, tudo é calmo como um rio, A paz que no céu tem o seu manancial; É Deus quem a deu por Jesus, em quem confio. E tu inda não tens a paz divinal?',
            estrofe3: 'Trajes tão alvos eu tenho, já lavados No sangue tão puro do meu Redentor; Os crentes em Cristo por Deus são perdoados, Também tu serás, crendo já no Senhor!',
            estrofe4: 'Que lindo lar tenho com os redimidos, Por Cristo aprontado na casa de Deus; Ali não há morte, nem mágoa, nem gemidos, Também tu terás um lugar lá nos céus.',
            estrofe5: '',
            som: '',
            coro: 'Oh! vem a Jesus! Oh! vem a Jesus! Eterna ventura terás pela cruz!'
        },
        {
            id: 189,
            tb: 158,
            selecionado: true,
            estrofe1: 'Preciosas as palavras de Jesus, Supremo Rei: A Mim aquele que vier Eu não desprezarei. A Mim aquele que vier Eu não desprezarei',
            estrofe2: 'Preciosas as palavras de Jesus, Supremo Rei: A porta sou, por Mim entrai, Descanso vos darei. A porta sou, por Mim entrai, Descanso vos darei',
            estrofe3: 'Preciosas as palavras de Jesus, Supremo Rei: Oh! vinde, vós, cansados, pois É suave a Minha lei. Oh! vinde, vós, cansados, pois É suave a Minha lei',
            estrofe4: 'Preciosas as palavras de Jesus, Supremo Rei: Por vós o mundo Eu venci, Por vós a vida dei. Por vós o mundo Eu venci, Por vós a vida dei',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 190,
            tb: 859,
            selecionado: true,
            estrofe1: 'Quem vai seguir a Cristo, o Mestre? Quem vai a cruz de Jesus tomar? Quem está pronto e decidido? Quem vai o galardão ganhar?',
            estrofe2: 'Quem vai seguir a Cristo, o Mestre, E ajoelhar-se ante os Seus pés? Quem vai seguir o estreito caminho, Andando sempre pela fé?',
            estrofe3: 'Quem vai seguir a Cristo, o Mestre, Louvando-O aqui e além, nos céus? Quem vai unir-se aos salvos, dizendo: ―Oh! aleluia! Glória a Deus!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Quem vai seguir, quem vai seguir, Quem vai seguir a Cristo agora? Quem vai a cruz de meu Jesus tomar E segui-lO já?'
        },
        {
            id: 191,
            tb: 159,
            selecionado: true,
            estrofe1: 'Queres o teu vil pecado vencer? Dá teu coração a Jesus. Queres também Seu favor receber? Dá teu coração a Jesus.',
            estrofe2: 'Em santidade desejas viver? Dá teu coração a Jesus. Queres do Espírito Santo o poder? Dá teu coração a Jesus.',
            estrofe3: 'A tempestade não quer acalmar? Dá teu coração a Jesus. Queres as tuas paixões refrear? Dá teu coração a Jesus.',
            estrofe4: 'Dos teus amigos alguém te traiu? Dá teu coração a Jesus. Busca amizade de Quem te remiu. Dá teu coração a Jesus.',
            estrofe5: 'Queres a glória divina alcançar? Dá teu coração a Jesus. Queres no céu a teu Deus exaltar? Dá teu coração a Jesus.',
            som: '',
            coro: 'Já chega de hesitação! Já chega de oposição! Oh! busca em Cristo o perdão E dá-Lhe teu coração!'
        },
        {
            id: 192,
            tb: 395,
            selecionado: true,
            estrofe1: 'Ouve como à porta chama, Alma sem consolação! É Jesus que está querendo Ocupar teu coração.',
            estrofe2: 'Oh! talvez teus companheiros Desejasses receber Em lugar do bom amigo Que por ti ousou morrer!',
            estrofe3: 'Tens tu tempo para Cristo Ou a ti convida em vão? Hoje é tempo de aceitares Essa grande salvação.',
            estrofe4: 'Breve cessará a chamada Do bondoso Salvador; Vem, atende o Seu convite E desfruta o Seu amor.',
            estrofe5: '',
            som: '',
            coro: 'Dá lugar a Jesus Cristo! Abre a porta desde já! Se Lhe dás acolhimento, Sempre em ti habitará.'
        },
        {
            id: 193,
            tb: 329,
            selecionado: true,
            estrofe1: 'Cristo, a Teus pés estou, Com Teu sangue vem salvar-me! Minha vida a Ti eu dou, Com Teu sangue vem salvar-me!',
            estrofe2: 'Triste está meu coração, Com Teu sangue vem salvar-me! Oh! concede-me perdão, Com Teu sangue vem salvar-me!',
            estrofe3: 'Não mereço Teu favor, Com Teu sangue vem salvar-me! Mas recebe-me, Senhor, Com Teu sangue vem salvar-me!',
            estrofe4: 'Ouve a minha oração, Com Teu sangue vem salvar-me! Que eu não venha a Ti em vão, Com Teu sangue vem salvar-me!',
            estrofe5: 'Nada posso eu fazer, Com Teu sangue vem salvar-me! Nem as culpas remover, Com Teu sangue vem salvar-me! Venho, agora, implorar: Com Teu sangue vem salvar-me! Meus pecados perdoar, Com Teu sangue vem salvar-me!',
            som: '',
            coro: 'Nada tenho, Salvador, Mas, com fé, espero No poder da Tua cruz. Com Teu sangue vem salvar-me!'
        },
        {
            id: 194,
            tb: 836,
            selecionado: true,
            estrofe1: 'Pecador, teus pecados brancos, brancos se farão. Inda que sejam vermelhos, como lã serão; Inda que teus pecados sejam como escarlate, Brancos, brancos se farão, Como lã se tornarão.',
            estrofe2: 'Pecador, Deus te chama, Ouve já a voz dos céus! Ele é tão bom, quão amável, compassivo é. Com ardor te convida, com amor, sim, te abriga, Chega, pois, ao Salvador, Ouve já a voz de amor.',
            estrofe3: 'Desfará tuas culpas, Para não lembrá-las mais. ―Oh! vinde a Mim, vós, cansados‖, diz Jesus, Senhor. Mau embora tu sejas, mau embora tu sejas, Seu descanso te dará E feliz te tornará.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 195,
            tb: 583,
            selecionado: true,
            estrofe1: "Vida tens ao olhar pra Jesus, o Salvador;\nEle diz: Vida eterna Eu te dou!\nPois, então, pecador, considera esse amor;\nVê Jesus, que na cruz expirou.",
            estrofe2: "Vida tens ao olhar pra Jesus, o Salvador;\nNão há choro, remorso nem dor\nQue consiga remir a qualquer pecador;\nSó o sangue do bom Redentor.",
            estrofe3: "Vida tens ao olhar pra Jesus, o Salvador;\nEle tudo por ti já sofreu.\nDeus estende o convite ao maior transgressor;\nVê Jesus, que por ti padeceu.",
            estrofe4: "Vida tens ao olhar pra Jesus, o Salvador;\nEle diz: Vida eterna Eu te dou!\nNunca perecerás crendo em Cristo, o Senhor;\nSegurança em Jesus gozarás.",
            estrofe5: "",
            som: "",
            coro: "Vem, vê, viverás!\nVida tens ao olhar pra Jesus, o Salvador;\nEle diz: Vida em Mim acharás!"
        },
        {
            id: 196,
            tb: 603,
            selecionado: true,
            estrofe1: "De um milagre precisas\nQue poderás conseguir,\nQue será teu quando olhares\nCom fé a Jesus, o Senhor.",
            estrofe2: "Uns o procuram em homens\nE amigos que tampouco o têm;\nMas que amigo entenderá\nA tua silente oração?",
            estrofe3: "Muitos pretendem com ouro\nComprar alegria e amor;\nNenhum valor ou tesouro\nCompra a paz que Deus dá.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: ""
        },
        {
            id: 197,
            tb: 453,
            selecionado: true,
            estrofe1: "Ah! que música, toando,\nEnche os ares de dulçor!\nSão os salvos entoando\nGraças ao seu Redentor.",
            estrofe2: "Ele, o Deus excelso, amou-nos\n- Dignos, nós, da perdição -\nCom poder real salvou-nos\nDa perpétua maldição.",
            estrofe3: "Graça ilustre! Deus aceita\nOs rebeldes com favor!\nNunca o Salvador rejeita\nO contrito pecador.",
            estrofe4: "Vinde, todos, sem limite.\nDe Jesus é a compaixão!\nEis o divinal convite:\nAceitai a salvação!",
            estrofe5: "",
            som: "",
            coro: "Ouço as vozes de vitória,\nNo caminho para a glória,\nProclamando a doce história   ) bis\nDe Jesus e Seu amor!          )"
        },
        {
            id: 198,
            tb: 210,
            selecionado: true,
            estrofe1: 'O caminho estreito para o eterno Lar\nSegue por desertos e à beira-mar,\nPassa por montanhas e florestas mil,\nVence cordilheiras, rocha e alcantil.',
            estrofe2: 'Há só uma senda que aos céus conduz,\nHá só um que salva: é o Senhor Jesus!\nSegue para a pátria, teu celeste Lar,\nEis à tua espera gozo e paz sem par.',
            estrofe3: 'Se o inimigo ruge qual leão\nE quer desviar-te com a tentação,\nNunca desanimes, Deus socorro é,\nGuarda, pois, em Cristo, firme, a tua fé.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Ergue os teus olhos para o além,\nChama-te o Mestre a Jerusalém.\nOh! marcha à cidade de ouro, luz, amor.\nHá só um caminho, é o Salvador!'

        },
        {
            id: 199,
            tb: 81,
            selecionado: true,
            estrofe1: 'Sou forasteiro aqui, em terra estranha estou;\nDo reino lá do céu embaixador eu sou!\nMeu Rei e Salvador vos manda em Seu amor\nAs boas novas de perdão.',
            estrofe2: 'É ordem do meu Rei que todo o pecador,\nArrependido já, confesse ao Salvador\nTodo o pecado seu, pois Ele prometeu\nDar o perdão por Seu amor.',
            estrofe3: 'No meu eterno lar não há perturbação;\nEterno gozo e paz os salvos fruirão!\nE quem obedecer a Cristo vai viver\nNo reino eterno do meu Rei.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Eis a mensagem que me deu\nAquele que por nós morreu:\nReconciliai-vos já, é ordem que Ele dá,\nReconciliai-vos já com Deus!'

        },
        {
            id: 200,
            tb: 337,
            selecionado: true,
            estrofe1: 'A todos vós diz o Senhor:\nVinde a Mim! (bis)\nPor que fugis do Meu amor?\nVinde a Mim! (bis)\nQuereis morrer sem salvação?\nViver assim é perdição;\nPor vós obtive redenção;\nVinde a Mim! (bis)',
            estrofe2: 'Eu não recusarei ninguém,\nVinde a Mim! (bis)\nQuem se arrepende faz o bem;\nVinde a Mim! (bis)\nEm breve a morte chegará,\nO ímpio à maldição irá,\nPois Minha oferta cessará;\nVinde a Mim! (bis)',
            estrofe3: 'Vós, que pecados carregais,\nVinde a Mim! (bis)\nE vós, que em vão vos fatigais,\nVinde a Mim! (bis)\nDescanso eterno vos darei,\nAlívio certo vos trarei,\nE aos céus, em paz, vos levarei;\nVinde a Mim! (bis)',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            "id": 201,
            "tb": 154,
            "selecionado": true,
            "estrofe1": "Eu venho à tua porta, amigo,\nEm nome do Senhor Jesus.\nSe queres hoje a salvação,\nRecorda o Seu amor na cruz!",
            "estrofe2": "Por que andar assim tão triste,\nSofrendo tanto dissabor?\nJesus quer hoje te valer,\nConfia a Ele tua dor.",
            "estrofe3": "Confessa a Cristo os teus pecados,\nEntrega a Ele o coração\nE hoje mesmo gozarás\nA paz de Deus e a salvação.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 202,
            "tb": 868,
            "selecionado": true,
            "estrofe1": "Do teu pecado te queres livrar?\nSeu sangue tem poder, sim, tem poder.\nAlmejas tu do maligno escapar?\nSeu sangue tem todo o poder.",
            "estrofe2": "Com a vaidade desejas findar?\nSeu sangue tem poder, sim, tem poder.\nVícios, paixões, queres tu dominar?\nSeu sangue tem todo o poder.",
            "estrofe3": "Teu coração queres purificar?\nSeu sangue tem poder, sim, tem poder.\nTodas as manchas te pode tirar;\nSeu sangue tem todo o poder.",
            "estrofe4": "Queres entrar no serviço real?\nSeu sangue tem poder, sim, tem poder.\nQueres também ser um servo leal?\nTerás no Seu sangue o poder.",
            "estrofe5": "",
            "som": "",
            "coro": "Há poder, sim, força sem igual\nSó no sangue de Jesus;\nHá poder, sim, prova-o, pecador.\nOh! aceita o dom de Jesus!"
        },
        {
            "id": 203,
            "tb": 829,
            "selecionado": true,
            "estrofe1": "Eis a mensagem tão pura e simples,\nÉ a mensagem para nós,\nDe um Salvador tão poderoso,\nUm Salvador pra todos nós!",
            "estrofe2": "Se o teu desejo é ser perdoado,\nO Seu perdão tu obterás,\nPois o que busca irá encontrá-lo,\nJamais Jesus o ignorará.",
            "estrofe3": "Se tens falhado e O desprezado,\nAinda assim Ele ama a ti!\nA prova é Cristo, crucificado,\nPois, por Jesus, Deus ama a ti.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Olha pra Cristo, só para Cristo,\nContempla a Cristo, ó pecador!\nOlha pra Cristo, só para Cristo,\nÉ a resposta: o Salvador!"
        },
        {
            "id": 204,
            "tb": 593,
            "selecionado": true,
            "estrofe1": "Estamos marchando à terra dos santos,\nMansão dos remidos, já livres do mal.\nTu andas errante e de Deus muito longe?\nOh! dize, queres ir para o Éden celestial?",
            "estrofe2": "Naquele país não há pranto ou gemido,\nNão reina a tristeza nem dor terreal.\nTu vives aflito e receias a morte?\nOh! dize, queres ir para o Éden celestial?",
            "estrofe3": "Ali não há pobres, pois todos são ricos,\nHerdeiros da vida e da glória eternal;\nTeus dias no erro e no mal tu consomes?\nOh! dize, queres ir para o Éden celestial?",
            "estrofe4": "Oh! larga os prazeres tão falsos do mundo!\nEm Cristo há prazer verdadeiro, eternal;\nNão sejas descrente, oh! aceita o evangelho\nE dize: Sim! Irei para o Éden celestial!",
            "estrofe5": "",
            "som": "",
            "coro": "Queres tu entrar no céu,\nPara o gozo do Senhor?\nOh! dize, queres ir\nPara o Éden celestial?"
        },
        {
            "id": 205,
            "tb": 101,
            "selecionado": true,
            "estrofe1": "O evangelho do Senhor\nOferta salvação,\nPerdão e paz ao pecador,\nDivina redenção.",
            "estrofe2": "Que boas novas de amor:\nCaminho, vida e luz,\nÉ para todo o pecador\nO Salvador Jesus.",
            "estrofe3": "Se vós com contrição e fé\nPedirdes: ―Salvador,\nConcede-nos a Tua mercê‖,\nEle ouve o clamor.",
            "estrofe4": "Encher-vos-á o coração\nCom zelo e fervor,\nCom sacrossanta ambição,\nPerfeita paz e amor.",
            "estrofe5": "",
            "som": "",
            "coro": "Cristo padeceu, (bis)\nMorreu por nossa redenção\nE eterna salvação."
        },
        {
            "id": 206,
            "tb": 11,
            "selecionado": true,
            "estrofe1": "Um rico, de noite, chegou a Jesus\nA fim de saber o caminho da luz;\nO Mestre, bem claro, lhe fez entender:\n―Importa renascer!‖",
            "estrofe2": "Vós, filhos do mundo, escutai ao Senhor,\nQue sempre vos chama com mui terno amor.\nOuvi que o Senhor nunca cessa em dizer:\n―Importa renascer!‖",
            "estrofe3": "Se amados no céu desejais encontrar,\nDeveis vossas culpas a Deus confessar\nE a ordem de Cristo com fé acolher:\n―Importa renascer!‖",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Importa renascer! (bis)\nCom voz inefável o disse Jesus:\n―Importa renascer!‖"
        },
        {
            "id": 207,
            "tb": 788,
            "selecionado": true,
            "estrofe1": "Vês, ó pecador,\nO teu Salvador\nNo Calvário ali morrer?\nMas da horrenda cruz\nVem clara luz\nAos que estão a perecer.",
            "estrofe2": "Que castigo e dor\nSofre o teu Senhor\nAjoelhado no jardim!\nNessa hora cruel\nBebeu o fel\nAo lutar por ti, por mim.",
            "estrofe3": "Plena redenção\nE libertação\nVêm aos homens pela cruz;\nGraça excelsa e paz,\nPerdão terás\nSe chegares a Jesus.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! vem já! (bis)\nSó na cruz refúgio há.\nCom bondade e amor\nTe convida o Senhor\nE agora perdão te dará."
        },
        {
            "id": 208,
            "tb": 575,
            "selecionado": true,
            "estrofe1": "Minha alma jazia\nSem paz e alegria,\nSentindo o pecado meu ser esmagar;\nPerdido, angustiado,\nVi Cristo ao meu lado\nDizendo: ―Meu sangue te pode lavar!‖",
            "estrofe2": "Vem, lança a tristeza,\nBuscando pureza\nNa fonte bendita que emana da cruz.\nA graça estendida,\nPerdão, nova vida\nVem já aceitar do bondoso Jesus.",
            "estrofe3": "Deus cura a ferida\nDa fútil corrida\nAtrás do prazer deste mundo falaz.\nVem, crê e adora,\nE nasce a aurora\nDe um dia feliz e de gozo e paz.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "O coração de Cristo\nAberto, agora, está por ti.\nOh! vem, refúgio eterno\nAcharás ali!"
        },
        {
            "id": 209,
            "tb": 150,
            "selecionado": true,
            "estrofe1": "Ao findar o labor desta vida,\nQuando a morte ao teu lado chegar,\nQue destino há de ter a tua alma?\nVida ou morte, qual vais aceitar?",
            "estrofe2": "Tu procuras a paz, neste mundo,\nEm prazeres que passam em vão,\nMas no termo final desta vida\nTais prazeres valor não terão.",
            "estrofe3": "Por acaso tu riste, ó amigo,\nQuando ouviste falar em Jesus?\nMas só Cristo Jesus pode dar-te\nSalvação pela morte na cruz!",
            "estrofe4": "Com a alma em pecado não podes\nJamais ver o semblante de Deus.\nMas aquele que for resgatado\nGozará das venturas dos céus.",
            "estrofe5": "Se quiseres deixar teus pecados\nE entregar-te ao bondoso Jesus,\nHás de ter, no momento da morte,\nUm caminho de vida e de luz.",
            "som": "",
            "coro": "Meu amigo, hoje tens a escolha:\nVida ou morte, qual vais aceitar?\nAmanhã pode ser muito tarde.\nHoje Cristo te quer libertar."
        },
        {
            "id": 210,
            "tb": 474,
            "selecionado": true,
            "estrofe1": "Tal qual estou eis-me, Senhor,\nPois o Teu sangue remidor\nVerteste pelo pecador;\nÓ Salvador, eu venho a Ti!",
            "estrofe2": "Tal qual estou e sem poder\nA Tua lei satisfazer\nE sem cumprir o que é mister,\nÓ Salvador, eu venho a Ti!",
            "estrofe3": "Tal qual estou, vou confiar,\nSó Tu me podes transformar\nE pela graça me salvar;\nÓ Salvador, eu venho a Ti!",
            "estrofe4": "Tal qual estou, perdão me dás\nE minha alma limparás.\nMeu coração tem plena paz;\nÓ Salvador, eu venho a Ti!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 211,
            "tb": 133,
            "selecionado": true,
            "estrofe1": "Ao chegares a Jesus,\nDeus perdoa as culpas mil\nE os teus pés em paz conduz\nPara o celestial redil.",
            "estrofe2": "Ao chegares a Jesus,\nDeus transforma o teu ser:\nOnde há trevas surge a luz,\nNova vida e poder.",
            "estrofe3": "Ao chegares a Jesus,\nSentirás profundo amor\nPelo Mestre, que na cruz\nQuis sofrer angústia e dor.",
            "estrofe4": "Ao chegares a Jesus,\nTeu prazer será em Deus,\nGloriar-te-ás na cruz,\nNos tesouros lá dos céus!",
            "estrofe5": "",
            "som": "",
            "coro": "A Jesus com fé chegando,\nAcho plena salvação,\nE Seu sangue me lavando\nTorna puro o coração."
        },
        {
            "id": 212,
            "tb": 581,
            "selecionado": true,
            "estrofe1": "Ó Senhor, aos Teus pés contristado me vês,\nAnelando a paz e o perdão;\nNada tenho em mim, mas confio em Ti,\nCrendo que Tu me dás salvação.",
            "estrofe2": "Afastado de Deus, sem ouvir Sua voz,\nEm pecado, sem fé, eu vivi;\nMas agora, Senhor, como vil pecador,\nEu me entrego, humilde, a Ti.",
            "estrofe3": "Para o mundo falaz, já não mais viverei,\nPois morri com Jesus, meu Senhor;\nSua bênção me deu, nova vida e poder,\nAlegria, pureza e amor.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Eu venho a Ti, eu venho contrito a Ti,\nA pedir-Te perdão e obter salvação;\nSenhor, venho agora a Ti."
        },
        {
            "id": 213,
            "tb": 64,
            "selecionado": true,
            "estrofe1": "Escuta a voz do bom Jesus:\n―Vem, segue-Me. (bis)\nGuiar-te-ei à eterna luz;\nVem, segue-Me. (bis)\nPor ti Eu toda a lei cumpri;\nPor ti o amargo fel bebi;\nAté a morte Eu sofri;\nVem, segue-Me. (bis)",
            "estrofe2": "―Liberto dos pecados teus,\nVem, segue-Me. (bis)\nGuiar-te-ei aos altos céus;\nVem, segue-Me. (bis)\nOh! quantas vezes te chamei,\nE tu quebraste a Minha lei;\nTeu fiador Eu me tornei;\nVem, segue-Me. (bis)",
            "estrofe3": "―Em Mim tu podes descansar;\nVem, segue-Me. (bis)\nVem teus cuidados Me entregar;\nVem, segue-Me. (bis)\nEu sou teu Deus, teu Salvador;\nEu te amo muito, ó pecador;\nOh! deixa todo o teu temor;\nVem, segue-Me.‖ (bis)",
            "estrofe4": "Sim, meu Jesus, seguir-Te-ei,\nEu seguirei, sim, seguirei;\nAtento sempre à Tua lei,\nEu seguirei, sim, seguirei.\nMui débil sou e sem valor;\nSem Ti não posso andar, Senhor;\nMas enche-me do Teu vigor!\nEu seguirei, sim, seguirei!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 214,
            "tb": 169,
            "selecionado": true,
            "estrofe1": "Eu ouço a terna voz\nDe Cristo, o Redentor,\nQuerendo dar-me a salvação,\nO dom do Seu amor.",
            "estrofe2": "Em trevas eu vivi,\nSurgiu de Cristo a luz,\nE Seu espírito de amor\nÀ glória me conduz.",
            "estrofe3": "Fui débil pecador,\nIndigno, a perecer;\nPureza e vida nEle achei\nE, em Seu favor, poder.",
            "estrofe4": "Eu louvo Seu poder\nE Sua redenção,\nPois, tendo Cristo, o Salvador,\nEu tenho a salvação.",
            "estrofe5": "",
            "som": "",
            "coro": "Venho, meu Senhor!\nVenho como estou!\nNão mereço bem nenhum,\nRecorro ao Teu favor."
        },
        {
            "id": 215,
            "tb": 102,
            "selecionado": true,
            "estrofe1": "Um grande amigo temos,\nJesus, o eterno Deus,\nQue a Seus fiéis destina\nUm lar nos lindos céus.\nNa pátria sempiterna,\nNa divinal mansão,\nNenhum enfado ou medo\nAflige o coração.",
            "estrofe2": "Jamais o mau desejo\nTerá lugar ali,\nNem entra um só pecado\nQue nos assalta aqui.\nRepousam os cansados,\nOs tristes gozam paz,\nE no poder divino\nO enfermo se refaz.",
            "estrofe3": "Coroa, trono e palmas\nTerá o vencedor,\nE tudo preparado\nPor Cristo, o Salvador.\nTal bênção não podemos\nGanhar nem merecer:\nÉ Cristo quem somente\nA pode conceder.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "A luz deste mundo é Cristo. (bis)\nÓ pecador, vem já, Jesus te salvará.\nA luz deste mundo é Cristo."
        },
        {
            "id": 216,
            "tb": 153,
            "selecionado": true,
            "estrofe1": "Atribulado coração,\nEm Cristo alívio encontrarás;\nConsolo, paz e Seu perdão,\nSim, dEle tu receberás.",
            "estrofe2": "Dilacerado pela dor\nDas tuas culpas, do pecar,\nVem sem demora ao Salvador\nE vida nova hás de gozar.",
            "estrofe3": "Se, para vir ao Salvador,\nTu tens fraquezas a vencer,\nOh! vem, pois Ele em Seu amor\nE em graça te dará poder.",
            "estrofe4": "A Cristo, sem demora, vem,\nPois Ele almeja te valer\nE sempre quer buscar teu bem,\nConfia nEle em teu viver.",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! vem sem demora ao Salvador!\nPor que vacilar e ter temor?\nOh! vem, vem já!\nDescanso te dará!"
        },
        {
            "id": 217,
            "tb": 199,
            "selecionado": true,
            "estrofe1": "Cada vez mais puro quero o coração,\nCada vez buscando mais a perfeição,\nCada vez mais santo, sempre mais leal,\nQuero ter desprezo para com o mal.",
            "estrofe2": "Cada vez mais calmo ao cercar-me a dor,\nQuero ter paciência onde quer que for,\nMuito mais bondade, mais resignação\nAo divino plano, sob a Sua mão.",
            "estrofe3": "Sendo confiante sempre no Senhor,\nFirme em Sua força, salvo em Seu amor,\nQuero herdar a vida santa e perenal\nLá no sempiterno Lar celestial.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 218,
            "tb": 107,
            "selecionado": true,
            "estrofe1": "Entre os caminhos do viver\nDe tanta comoção,\nFaze, em quietude, no meu ser\nA Tua habitação.",
            "estrofe2": "Eu, nesse abrigo, na aflição,\nCom fé me prostrarei,\nTudo depondo em Tua mão;\nMinha alma eu abrirei.",
            "estrofe3": "Nesse lugar Te encontrarei,\nEm oração e paz;\nA Tua face, ó Deus, verei,\nE Tu me ajudarás.",
            "estrofe4": "Tranqüilamente, nesse altar,\nÓ Deus, habitarás;\nTodo o meu ser vens inundar\nCom Tua santa paz.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 219,
            "tb": 814,
            "selecionado": true,
            "estrofe1": "A cruz não será mais pesada\nDo que a graça que Deus dá;\nE, em meio à mais forte tormenta,\nSeu amor me assistirá.",
            "estrofe2": "O mundo a meu Mestre despreza\nE persegue os de Jesus;\nMas por Seu amor, pela graça,\nLevarei a minha cruz.",
            "estrofe3": "Fazer a vontade de Cristo\nÉ o meu desejo, sim;\nContando tão bela história,\nTenho gozo e paz sem fim.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "A cruz que me deu para levar,\nAs dores que a mim vêm assaltar,\nNão escondem meu Jesus,\nPois eu ando em Sua luz,\nVou vencendo para os céus."
        },
        {
            "id": 220,
            "tb": 812,
            "selecionado": true,
            "estrofe1": "Ó Deus dos patriarcas, clamamos a Ti,\nPois não nos faltaste jamais;\nVisita-nos, hoje, unidos aqui,\nAviva-nos outra vez!",
            "estrofe2": "Vem, fogo divino, poder celestial,\nCom chama ardente, eficaz;\nSim, vem, purifica-nos de todo o mal,\nAviva-nos outra vez!",
            "estrofe3": "Os servos de outrora puderam vencer,\nVitória também nos darás;\nPois Tua promessa garante poder,\nAviva-nos outra vez!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! toca-nos outra vez,\nDe novo vem-nos encher!\nEscuta, Senhor, o nosso clamor:\nBatiza-nos com poder!"
        },
        {
            "id": 221,
            "tb": 16,
            "selecionado": true,
            "estrofe1": "Cristo, Teu sangue eficaz\nBeleza traz ao coração;\nEm meio ao mundo, à perdição,\nEu ergo a fronte, puro, em paz.",
            "estrofe2": "Cordeiro santo, divinal,\nQuiseste os céus por mim deixar,\nTão dura cruz aqui provar,\nMostrando graça eternal.",
            "estrofe3": "Não mais vergonha, medo ou dor,\nNão mais as culpas do pecar;\nQuiseste assim me transformar,\nÓ meu Jesus, meu Redentor!",
            "estrofe4": "No dia da ressurreição,\nQuando do pó me levantar,\nA Quem morreu pra me salvar\nHei de louvar com gratidão.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 222,
            "tb": 767,
            "selecionado": true,
            "estrofe1": "Deixo a noite da escravidão,\nVindo a Ti, vindo a Ti,\nE entro na luz da libertação,\nVindo a Ti, Jesus.\nVai-se a fraqueza, vem o poder,\nReina a alegria, foge o sofrer,\nSai meu pecado, vens-me valer,\nVindo a Ti, Jesus.",
            "estrofe2": "Deixo a queda, a perda, o falhar,\nVindo a Ti, vindo a Ti,\nGanho na cruz a bênção sem par,\nVindo a Ti, Jesus.\nBálsamo encontro, não mais a dor,\nCalma me cerca, foge o terror,\nSai a aflição e brota o louvor,\nVindo a Ti, Jesus.",
            "estrofe3": "Deixo o orgulho, o falso ideal,\nVindo a Ti, vindo a Ti,\nTua vontade aceito, cabal,\nVindo a Ti, Jesus.\nLivre do eu, entrego-me a Ti,\nSem desespero, em êxtase aqui;\nPíncaros altos já conheci,\nVindo a Ti, Jesus.",
            "estrofe4": "Deixo o temor da morte que vem,\nVindo a Ti, vindo a Ti,\nÉ meu o lar de luz no além,\nVindo a Ti, Jesus.\nFora das trevas, luz celestial,\nTerno abrigo és ao mortal;\nOh! quão glorioso ver-Te, afinal,\nCristo, meu Salvador!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 223,
            "tb": 200,
            "selecionado": true,
            "estrofe1": "Antes eu vivia sempre com temor,\nMas descanso, agora, no meu Salvador;\nAntes esperava, mas eu hoje sei:\nSalvo estou em Cristo, meu bendito Rei.",
            "estrofe2": "Antes desejava bênçãos do Senhor,\nHoje, mais de Cristo, mais do Seu amor!\nNão somente as bênçãos, celestial maná,\nMas a Ele, em quem a plenitude está.",
            "estrofe3": "Antes era o mundo, hoje é só Jesus;\nAntes eram trevas, hoje há plena luz;\nAntes, os receios, hoje há doce paz;\nTudo tenho em Cristo, que me satisfaz.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Tudo tenho em Cristo, que por mim morreu,\nTudo, tudo em Cristo! Cristo é todo meu."
        },
        {
            "id": 224,
            "tb": 826,
            "selecionado": true,
            "estrofe1": "Muitas coisas eu não posso entender,\nMuitas são mistério para mim,\nMas bem claro eu vejo o grande dom de Deus\nQue é o Seu maravilhoso amor.",
            "estrofe2": "Quando de Jesus eu me aproximei\nE Lhe confessei o meu temor,\nQuando no Seu nome eu acreditei,\nEle, em Sua graça, me salvou.",
            "estrofe3": "Sua graça está além do meu pensar,\nÉ mais do que posso compreender:\nPor amor deixou Seu lar celestial,\nPra ser meu amigo e Salvador.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Infinitamente além do meu olhar,\nBem maior do que eu possa imaginar\nÉ o perdão ao qual meu Deus me conduziu,\nÉ o Seu grandioso amor."
        },
        {
            "id": 225,
            "tb": 621,
            "selecionado": true,
            "estrofe1": "Que segurança! Sou de Jesus!\nTenho antegozo do reino de luz!\nCom Cristo herdeiro, Deus me comprou,\nPelo Seu sangue, salvo estou.",
            "estrofe2": "Inteiramente me submeti\nE às alturas celestes subi;\nAnjos descendo vêm-me trazer\nEcos da graça, santo prazer.",
            "estrofe3": "Firmado em Cristo, no Seu amor,\nSigo contente ao meu Salvador.\nPor Sua volta hei de esperar,\nPara com Ele ir habitar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Canta, minha alma, canta ao Senhor (bis)\nRende-Lhe sempre grato louvor."
        },
        {
            "id": 226,
            "tb": 449,
            "selecionado": true,
            "estrofe1": "Na presença do meu Mestre, no refúgio divinal,\nA alegria é constante e o poder é sem igual.\nPor amor quero ofertar-Lhe e render-Lhe meu louvor,\nE o Senhor vai segredar-me: ―Viverás por Meu amor.‖",
            "estrofe2": "Mais do que eu posso dar-Lhe, muito mais que o meu louvor\nÉ a devoção profunda ao meu Rei e Salvador.\nSó assim, enternecido e movido o coração,\nPermanecerei constante, fiel a Deus e à missão.",
            "estrofe3": "Ó Senhor, o adorar-Te em espírito veraz\nHá de ser meu grande anelo, que alegria santa traz.\nO Teu selo me confirma a herança perenal:\nConhecer-Te, então servir-Te, contemplar-Te afinal.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Na presença do meu Mestre,\nEscondido em Seu poder,\nQuero amá-lO e servi-lO,\nConsagrando-Lhe meu ser."
        },
        {
            "id": 227,
            "tb": 637,
            "selecionado": true,
            "estrofe1": "Meu Senhor, sou Teu, Tua voz ouvi\nA chamar-me com amor;\nMas de Ti mais perto eu desejo estar,\nÓ bendito Salvador!",
            "estrofe2": "A seguir-Te agora eu me decidi,\nConstrangido pelo amor;\nJubiloso, pois, me declaro Teu,\nSem reservas, meu Senhor.",
            "estrofe3": "Que delícia e gozo eu irei fruir\nQuando junto a Ti morar\nE com grato amor e singela fé\nMeu Jesus sempre adorar!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Mais perto, perto da Tua cruz\nQuero estar, ó Salvador!\nMais perto, perto da Tua cruz\nQuem me dera estar, Senhor!"
        },
        {
            "id": 228,
            "tb": 519,
            "selecionado": true,
            "estrofe1": "Se por um dia eu Te olvidar,\nE o mundo a Tua imagem ofuscar,\nOh! vem cercar-me, então, com Teu amor!\nFaze meu ser voltar a Ti, Senhor!",
            "estrofe2": "Com todo o meu amor, Jesus, eu sei\nQue pouco tenho para dar-Te, ó Rei;\nFaze-me digno de hoje contemplar\nO céu unir-se ao Teu sofrer sem par.",
            "estrofe3": "O Teu Calvário faze-me sentir,\nAs Tuas chagas possam-me atrair.\nAmor divino, vem-me socorrer!\nÓ graça excelsa, vem selar meu ser!",
            "estrofe4": "Servir-Te-ei, carrego a minha cruz!\nOlvido o mundo, sigo a Ti, Jesus!\nA Ti submisso, marcho sem temor\nAo meu Calvário, como Tu, Senhor!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 229,
            "tb": 171,
            "selecionado": true,
            "estrofe1": "Aviva-nos, Senhor!\nOh! dá-nos Teu poder!\nDe santidade, fé e amor,\nReveste o nosso ser!",
            "estrofe2": "Desperta-nos, Senhor!\nOh! faze-nos fruir\nAs ricas bênçãos divinais,\nPrimícias do porvir!",
            "estrofe3": "Renova-nos, Senhor!\nInspira mais amor,\nMais zelo, graça e compaixão\nA bem do pecador!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Aviva-nos, Senhor!\nEis nossa petição!\nAteia o fogo do alto céu\nEm cada coração!"
        },
        {
            "id": 230,
            "tb": 680,
            "selecionado": true,
            "estrofe1": "Preciso de Jesus,\nDe Ti, ó meu Senhor!\nSomente a Tua voz\nTem para mim valor!",
            "estrofe2": "Preciso de Jesus!\nUnido a Ti, Senhor,\nPecado e tentação\nSe mostram sem vigor.",
            "estrofe3": "Preciso de Jesus!\nVem dar ao coração\nO gozo de viver\nEm santa retidão.",
            "estrofe4": "Preciso de Jesus,\nDe Ti, meu Sumo Bem,\nNa lida terrenal\nE no eterno além.",
            "estrofe5": "",
            "som": "",
            "coro": "De Ti, Senhor, preciso\nHoje, eternamente!\nSomente a Tua bênção\nMe faz viver."
        },
        {
            "id": 231,
            "tb": 289,
            "selecionado": true,
            "estrofe1": "O meu coração, Senhor,\nEu Te rogo, com fervor,\nPor Teu trono vem tomar,\nSem rival aí reinar!",
            "estrofe2": "Meus ouvidos vem abrir,\nFaze a Tua voz ouvir!\nO que mandas vou fazer,\nVou seguir-Te com prazer.",
            "estrofe3": "Minhas mãos, a Ti, Senhor,\nEu entrego com amor;\nQue trabalhem sem cessar\nPara as novas proclamar.",
            "estrofe4": "Faze que meus pés, Senhor,\nBem ligeiros no labor,\nCorram, por amor de Ti,\nDestros a servir-Te aqui.",
            "estrofe5": "Os meus lábios vem encher\nDe verdade, amor, saber,\nPara eu melhor cantar,\nTua glória anunciar.",
            "estrofe6": "Toma agora, meu Jesus,\nMinha mente e dá-lhe luz\nPara que o meu pensar\nPossa em tudo Te agradar.",
            "estrofe7": "Toma enfim, ó Cristo meu,\nCorpo e alma, tudo é Teu.\nPara sempre então serei\nConsagrado a Ti, meu Rei.",
            "estrofe8": "",
            "estrofe9": "",
            "estrofe10": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 232,
            "tb": 177,
            "selecionado": true,
            "estrofe1": "O Senhor da ceifa está chamando:\n―Quem quer ir por Mim a procurar\nAlmas que no mundo vão chorando\nSem da salvação participar?‖",
            "estrofe2": "O profeta, a Deus se aproximando,\nConsidera-se um pecador,\nMas o fogo santo o queimando\nTorna-o útil para seu Senhor.",
            "estrofe3": "Muitos são os que vão expirando\nSem ter esperança de ver Deus;\nVai, depressa, lhes anunciando\nQue Jesus nos leva para os céus.",
            "estrofe4": "Breve os trabalhos serão findos,\nBênçãos vão os servos desfrutar,\nE Jesus os saudará: ―Bem-vindos!‖\nEssa glória espero alcançar.",
            "estrofe5": "",
            "som": "",
            "coro": "Fala, Deus! Fala, Deus!\nToca-me com brasas do altar!\nFala, Deus! Fala, Deus!\nSim, alegre atendo ao Teu mandar!"
        },
        {
            "id": 233,
            "tb": 456,
            "selecionado": true,
            "estrofe1": "Quero ser Teu santo templo,\nOnde Tu possas morar,\nPara sentir-Te bem perto\nE Tua voz acatar.",
            "estrofe2": "Quero irradiar Tua glória,\nQuero Teu nome honrar.\nMeus votos hoje renovo,\nPondo-me no Teu altar.",
            "estrofe3": "Rendo a Ti meus talentos\nNesta entrega real;\nCorpo e mente e minha alma\nDou-Te em renúncia total.",
            "estrofe4": "Um coração compassivo\nDá-me, Te rogo, Senhor,\nPara buscar os perdidos\nE proclamar Teu amor.",
            "estrofe5": "",
            "som": "",
            "coro": "Eis minha vida,\nRogo que a aceites, Senhor!\nTodo o meu ser Te consagro\nCom entusiasmo e amor!"
        },
        {
            "id": 234,
            "tb": 377,
            "selecionado": true,
            "estrofe1": "Tudo a Ti, Jesus, consagro,\nTudo entrego a Ti, meu Rei!\nResoluto, mas submisso,\nSempre a Ti eu seguirei!",
            "estrofe2": "Tudo a Ti, Jesus, consagro,\nConstrangido por amor;\nVem, transforma a minha vida\nE meu coração, Senhor!",
            "estrofe3": "Tudo a Ti, Jesus, consagro!\nQuanto gozo, meu Senhor!\nPaz completa, paz perfeita!\nGlória, glória ao Salvador!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Tudo entregarei! (bis)\nSim, por Ti, Jesus bondoso,\nTudo deixarei."
        },
        {
            "id": 235,
            "tb": 278,
            "selecionado": true,
            "estrofe1": "Tu, que sobre a amarga cruz\nRevelaste o Teu amor,\nTu, que vives, ó Jesus,\nVivifica-nos, Senhor!",
            "estrofe2": "Neste mundo tentador,\nHá perigo de cair;\nCom Teu fogo abrasador\nPoderemos resistir.",
            "estrofe3": "Quantos, que corriam bem,\nJá não mais conTigo vão,\nOutros seguem, mas, também,\nFrios, sem amor estão.",
            "estrofe4": "Vem agora consumir\nTudo quanto, ó Salvador,\nQuer, altivo, resistir\nAo Teu brando e doce amor!",
            "estrofe5": "",
            "som": "",
            "coro": "Imploramos, vem, Senhor,\nNossas almas despertar;\nCom Teu santo e puro amor,\nVem a todos renovar!\nOh! vem, oh! vem,\nNossas almas inflamar."
        },
        {
            "id": 236,
            "tb": 212,
            "selecionado": true,
            "estrofe1": "Vãos prazeres vêm chamar-me,\nA Jesus imito;\nNada pode escravizar-me,\nA Jesus imito.",
            "estrofe2": "Das algemas libertou-me,\nA Jesus imito;\nSirvo alegre, pois amou-me;\nA Jesus imito.",
            "estrofe3": "Nesta vida e até a glória,\nA Jesus imito;\nVou cantando a doce história,\nA Jesus imito.",
            "estrofe4": "Quero vê-lO coroado,\nA Jesus imito;\nE sentir-me aprovado,\nA Jesus imito.",
            "estrofe5": "",
            "som": "",
            "coro": "Como Cristo quero ser,\nNão seguindo a multidão,\nEm qualquer lugar que vá,\nTendo a Sua bênção!"
        },
        {
            "id": 237,
            "tb": 53,
            "selecionado": true,
            "estrofe1": "Só uma vida foi por Deus te dada,\nQue em tudo mostra a ti Seu grande amor;\nDá-Lhe teu ser, seguindo a estrada\nDAquele que contigo sempre vai.",
            "estrofe2": "Um trilho só, com muito amor traçado,\nNem sempre fácil de se entender;\nFiel é Deus, estando ao teu lado,\nEm alegria e dor contigo vai.",
            "estrofe3": "Um só Senhor, caminho e verdade,\nQuerendo o trono do teu coração;\nFaze-O Rei, proclama a vontade\nDAquele que contigo sempre vai.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Contigo está o teu celeste Pai,\nQue há muito planejou os passos teus;\nContigo está, contigo sempre vai,\nVelando sobre ti; crê no amor de Deus!\nEleva o teu olhar\nA Quem te quer livrar\nDa tentação, do mal\nE te guardar.\nContigo está, contigo sempre vai,\nVelando está por ti, Deus, o eterno Pai."
        },
        {
            "id": 238,
            "tb": 194,
            "selecionado": true,
            "estrofe1": "Vidas santas, consagradas,\nEm perfeita comunhão,\nQue a si mesmas não adorem,\nMas emanem compaixão.\nVidas nobres, renovadas\nPela graça divinal,\nRefletindo luz e gozo\nCom a glória celestial.",
            "estrofe2": "Vidas santas, que trabalhem\nSob o símbolo da cruz,\nQue à humanidade levem\nA mensagem de Jesus.\nVidas nobres, abnegadas,\nInflamadas com poder,\nQue alegres se dediquem\nÀ observância do dever.",
            "estrofe3": "Vidas santas, que levantem\nO caído pecador,\nNão medrosas, nem covardes,\nMas valentes no Senhor.\nVidas nobres, que obedientes\nSempre lutem com ardor\nE, com Cristo, participem\nDa vitória do amor!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Deus procura tais soldados:\nPuros, cheios de fervor,\nBatizados pelo fogo\nNo altar do Salvador."
        },
        {
            "id": 239,
            "tb": 461,
            "selecionado": true,
            "estrofe1": "Ah! que tempo inditoso\nQuando, altivo, resisti\nAo meu Salvador bondoso,\nRespondendo desdenhoso:\nSó quero o ―eu‖ e nada de Ti! (bis)",
            "estrofe2": "Mas o Seu amor vencia\nQuando sobre a cruz O vi,\nE por mim intercedia;\nO meu coração dizia:\nQuero o ―eu‖ e quero a Ti! (bis)",
            "estrofe3": "Com ternura me amparava,\nGraça e força recebi;\nMais e mais eu meditava\nE, humilde, segredava:\nNão tanto o ―eu‖ e mais de Ti! (bis)",
            "estrofe4": "Por tão grande amor vencido,\nTudo ao bom Jesus cedi.\nAo meu Redentor unido,\nEste, agora, é meu pedido:\nNão mais o ―eu‖, só quero a Ti! (bis)",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 240,
            "tb": 33,
            "selecionado": true,
            "estrofe1": "Com Cristo unido na morte da cruz,\nEu gozo a graça do reino da luz,\nQue para a vida dos céus me conduz,\nCada momento, com Cristo Jesus.",
            "estrofe2": "Com Cristo unido na luta moral,\nNão cedo ao erro, ao pecado e ao mal,\nBem alto erguendo a bandeira real,\nCada momento mais firme e leal!",
            "estrofe3": "Com Cristo unido na ressurreição,\nHei de alcançar eternal redenção!\nNunca em Cristo esperamos em vão,\nCada momento concede perdão.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Cada momento me guia o Senhor,\nCada momento dispensa favor;\nSua presença concede vigor,\nCada momento sou Teu, Salvador!"
        },
        {
            "id": 241,
            "tb": 220,
            "selecionado": true,
            "estrofe1": "Conheço a Ti, Senhor,\nTu tens poder, eu sei!\nAndando sem vigor,\nOh! quanto alento achei\nVendo, ao tremer sob minha cruz,\nAs marcas dos Teus pés, Jesus!",
            "estrofe2": "Meu nome unido está\nConTigo, meu Senhor;\nTeu filho Te honrará,\nMeu Deus e Salvador.\nProssigo para o alvo além\nNos passos do meu Sumo Bem!",
            "estrofe3": "Gozar conTigo, assim,\nTão doce comunhão\nÉ tudo para mim,\nÉ céu e inspiração!\nTeu meigo rosto hei de admirar\nE Tua graça exaltar.",
            "estrofe4": "Sem Ti eu vou cair,\nSê minha proteção!\nHei de meu nome ouvir\nNa celestial mansão.\nQue a via dolorosa, aqui,\nDo Teu sofrer, me leve a Ti!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 242,
            "tb": 372,
            "selecionado": true,
            "estrofe1": "Meu Senhor que me escolheste,\nTeu, e Teu somente, eu sou;\nCom Teu sangue me saraste;\nGlória, glória, aqui Te dou.",
            "estrofe2": "Para obter tão grande prêmio,\nMuito e muito trabalhei;\nMas em vão foi todo o esforço:\nPela fé o alcancei.",
            "estrofe3": "Crendo, pois, Jesus, meu Mestre,\nSempre confiarei em Ti;\nTeu poder e Tua graça\nHão de vir guardar-me aqui.",
            "estrofe4": "Consagrado ao Teu serviço,\nQuero só por Ti viver;\nDando sempre testemunho\nCom ardor e com prazer.",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! que glória! oh! que glória\nAbrasou-me o coração!\nAceitando-Te, ó Cristo,\nEm Teu sangue achei perdão."
        },
        {
            "id": 243,
            "tb": 685,
            "selecionado": true,
            "estrofe1": "Ouvi a voz que me chamava\nA Te seguir com minha cruz,\nMeu coração se rebelava\nEm aceitar-Te, meu Jesus.\nLutei em vão, sem ter sossego,\nSem encontrar consolação.",
            "estrofe2": "O mundo, com seus vãos prazeres,\nPerdeu pra mim toda a atração.\nOs seus folguedos, seus tesouros,\nNão deram paz ao coração.\nAssim, tristonho e pesaroso,\nClamei a Ti, meu Salvador.",
            "estrofe3": "Ouvi a voz que me dizia:\n―Oh! toma a cruz e segue a Mim!‖\nE eu, confiante, respondia:\nSou Teu, Senhor, pra Te servir,\nDá-me a força e, deste dia\nAté o fim, fiel serei!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Seguir-Te-ei, Jesus bendito,\nSeguir-Te-ei, mártir de amor,\nSeguir-Te-ei, aonde quiseres,\nPela graça seguirei."
        },
        {
            "id": 244,
            "tb": 218,
            "selecionado": true,
            "estrofe1": "Andava um dia pela estrada, só,\nE vi um estranho ali também,\nDobrado pela carga e pela dor,\nForçado a carregar a cruz.",
            "estrofe2": "―Oh! dá-me a cruz!‖, clamei ao meu Senhor,\nE logo a mim apareceu\nAquela cruz que tanto desprezei,\nO bem que tanto eu neguei.",
            "estrofe3": "A cruz em minha vida vou levar\nE a coroa receber.\nEm breve a jornada findará,\nE logo a Cristo eu hei de ver.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "―Oh! toma a cruz e segue a Mim!‖,\nOuvi chamar-me o Salvador.\nSerá demais um sacrifício assim\nSe Cristo o fez por mim?"
        },
        {
            "id": 245,
            "tb": 423,
            "selecionado": true,
            "estrofe1": "Luz do mundo, Jesus Cristo,\nVem, dissipa as ilusões,\nTira o véu dos nossos olhos,\nIlumina os corações\nPara ver-Te, para ver-Te!\nOuve nossas orações!",
            "estrofe2": "Onde as trevas do pecado\nObscurecem Teu amor,\nFaze a luz do Teu ensino\nDominar, ó Salvador!\nResplandeça, resplandeça\nTua glória, ó Redentor!",
            "estrofe3": "Luz dos homens! Luz da vida!\nBrilha com poder nos Teus,\nEsclarece as suas almas,\nMostra-lhes o grande Deus.\nLuz do mundo, Luz do mundo,\nÉs o resplendor dos céus!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 246,
            "tb": 513,
            "selecionado": true,
            "estrofe1": "Pelo Teu sangue, ó Cordeiro de Deus,\nPuro serei! (bis)\nFaze-me ser dos fiéis servos Teus,\nPuro serei! (bis)\nQue lastimoso passado vivi!\nQuantas derrotas, em tempos, sofri!\nTuas promessas aceito, hoje, aqui;\nPuro serei! (bis)",
            "estrofe2": "Os Teus preceitos mui pouco observei,\nSurdo me fiz! (bis)\nDos Teus conselhos eu longe andei,\nSurdo me fiz! (bis)\nÉs onisciente, o que faço Tu vês.\nRogo que, agora, o perdão Tu me dês.\nHoje confio nas grandes mercês\nE sou feliz! (bis)",
            "estrofe3": "Os preconceitos jamais temerei,\nVou trabalhar! (bis)\nO evangelho anunciarei,\nVou trabalhar! (bis)\nFiel ao Teu mando, Senhor, quero ser\nE ao Teu amor, que ultrapassa o saber,\nO Teu insigne pendão vou erguer\nSem mais tardar! (bis)",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 247,
            "tb": 439,
            "selecionado": true,
            "estrofe1": "Quero amar-Te, pois Tu pedes\nMeu amor, ó Salvador,\nTu, que deste a Tua vida\nPor amor de mim, Senhor.\nRedimido, a Ti pertenço:\nAlma, corpo, todo o ser;\nTeu na vida, Teu na morte,\nPor Ti sempre hei de viver.",
            "estrofe2": "Sem o lume do Teu rosto,\nQue tristeza, que aflição,\nEnfraquece a energia,\nEsmorece o coração.\nMas, Teu santo rosto vendo,\nQuão feliz, Senhor, eu sou!\nTua doce voz ouvindo,\nSatisfeito e alegre vou.",
            "estrofe3": "Quero amar-Te, pois, Te amando,\nTeus preceitos cumprirei;\nNa vereda da justiça\nPresto sigo a Ti, meu Rei!\nO amor é corajoso,\nNada sabe de temor;\nNunca fala em sacrifício\nQuem trabalha com amor.",
            "estrofe4": "Quero amar-Te, mas quão fraco\nÉ por Ti o meu amor.\nTeu amor é todo puro,\nTodo ardente e vencedor!\nDesse amor, se possuído,\nDominado, mesmo, for,\nAmarei, sim, como devo,\nSempre a Ti, ó Salvador.",
            "estrofe5": "",
            "som": "",
            "coro": "Quero amar-Te sempre,\nÓ meu Salvador!\nSatisfeito nunca estou\nSenão com Teu amor."
        },
        {
            "id": 248,
            "tb": 613,
            "selecionado": true,
            "estrofe1": "Quero chegar aos mananciais divinos,\nPara elevar a Deus minha oração.\nConsolador, que doce paz inspiras,\nConTigo quero estar em feliz comunhão.",
            "estrofe2": "Lava meu ser do pó pecaminoso,\nDe toda a culpa, livra-me, Senhor;\nLimpa as manchas, em minha alma ocultas,\nNo rio transbordante do Teu grande amor.",
            "estrofe3": "A santidade encontro nessa fonte,\nNela eu posso achar pureza enfim;\nQue essas águas reguem minha vida,\nTornando o deserto em verde jardim!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Do Calvário, sei, fluem sem cessar\nAs águas que agora me podem curar."
        },
        {
            "id": 249,
            "tb": 571,
            "selecionado": true,
            "estrofe1": "Dá tempo à tua alma, não deixes de orar,\nEstar com teu Mestre, Seu livro estudar,\nAmar e servi-lO, ao mundo valer,\nEm tudo, por tudo, com Ele viver.",
            "estrofe2": "Dá tempo à tua alma, vem hoje buscar\nPureza no Mestre, com Ele ficar,\nTeus olhos bem fitos em Deus sempre ter,\nPor digna conduta, provar Seu poder.",
            "estrofe3": "Dá tempo à tua alma, oh! vem renovar\nAs forças na Fonte: Deus te quer guiar.\nNo gozo ou tristeza, tu hás de vencer\nE Seus bons conselhos jamais esquecer.",
            "estrofe4": "Dá tempo à tua alma no teu trabalhar,\nE muito mais útil será teu lidar.\nContente, ao teu Mestre, oh! vem-te render!\nE grato, sem medo, Seu reino estender.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            id: 250,
            tb: 261,
            selecionado: true,
            estrofe1: 'Do Salvador bendito\nSempre desejo ser;\nLivre do mundo impuro\nQuero também viver.',
            estrofe2: 'Quero ficar com Cristo,\nSempre com Ele andar,\nSeja aqui, na terra,\nSeja no eterno Lar.',
            estrofe3: 'Queres, pois, aceitar-me\nTal como sou, Senhor?\nVenho entregar-me agora,\nSou Teu, meu Redentor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Quero viver com Cristo, ) bis\nTudo Lhe dedicar;       )\nTudo por Cristo, tudo   )\nQuero renunciar. )'
        },
        {
            id: 251,
            tb: 608,
            selecionado: true,
            estrofe1: 'Já achaste em Cristo plena salvação\nPelo sangue vertido na cruz?\nToda a mancha tira do teu coração\nEsse sangue eficaz de Jesus.',
            estrofe2: 'Viives sempre ao lado do teu Salvador\nPelo sangue que emana da cruz?\nDo pecado és tu sempre vencedor\nComo foi teu bendito Jesus?',
            estrofe3: 'Vestes brancas hás de ter ao vir Jesus?\nFoste limpo na fonte de amor?\nPronto estás e seguirás ao céu de luz\nPelo sangue do teu Salvador?',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Salvo estás? Limpo estás\nPelo sangue de Cristo Jesus?\nTuas vestes são mais alvas que a luz?\nFoste limpo no sangue eficaz?'
        },
        {
            id: 252,
            tb: 36,
            selecionado: true,
            estrofe1: 'Divino Mestre, venho aqui\nCom mui sincera contrição,\nEm oração, perante Ti,\nPedindo plena salvação.',
            estrofe2: 'Eu venho com o coração\nVazio e débil, sem amor,\nMas, pela Tua compaixão,\nAceita e usa-me, Senhor!',
            estrofe3: 'Ouvi a Tua voz chamar\nE, obediente, respondi;\nEstou, Senhor, no Teu altar,\nOh! santifica-me aqui.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vem, santo poder! Vem, santo poder!\nE batiza-me, hoje, com fogo dos céus;\nO Teu querer eu vou cumprir,\nEntregue, humilde, aos Teus pés.'
        },
        {
            id: 253,
            tb: 21,
            selecionado: true,
            estrofe1: 'Mais de Cristo eu quero ver,\nMais do Seu amor obter,\nMais da Sua compaixão,\nMais da Sua mansidão.',
            estrofe2: 'Mais de Cristo compreender,\nQuero a Cristo obedecer,\nSempre perto dEle andar,\nSeu amor manifestar.',
            estrofe3: 'Mais de Cristo almejo ter,\nMuito mais Lhe pertencer.\nQuero ao mundo proclamar:\nCristo veio-nos salvar!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Mais, mais de Cristo!\nMais, mais de Cristo!\nMais do Seu puro e santo amor,\nMais de Ti mesmo, ó Salvador!'
        },
        {
            id: 254,
            tb: 143,
            selecionado: true,
            estrofe1: 'Meu pecado resgatado\nFoi na cruz, por Teu amor,\nE da morte, triste sorte,\nMe livraste, ó Redentor.',
            estrofe2: 'Se hesitante, vacilante,\nOuço a voz do tentador,\nTu me guias, auxilias\nE me tornas vencedor.',
            estrofe3: 'Redimida, só tem vida\nA minha alma em Teu amor!\nCom apreço reconheço\nQuanto devo a Ti, Senhor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vem! inflama viva chama\nEm meu peito, ó Salvador!\nPois Te adora quem Te implora:\nVem guiar-me, bom Senhor!'
        },
        {
            id: 255,
            tb: 504,
            selecionado: true,
            estrofe1: 'Não tenho andado pelo bem\nComo desejas, ó Senhor;\nHá muitas coisas que também\nTêm esfriado meu amor.\nAbre-me os olhos para ver\nE Teus caminhos conhecer.',
            estrofe2: 'Tenho pecado contra Ti.\nOs Teus preceitos, Tua lei,\nTua vontade não cumpri.\nOh! meu bom Mestre, que farei?\nVenha amparar-me Tua mão,\nDá-me a graça do perdão.',
            estrofe3: 'Quero servir-Te, Salvador,\nSempre vivendo só por Ti.\nDá-me pureza, mais ardor,\nMais santidade eu tenha aqui.\nQuero louvar-Te, ó Senhor,\nE transbordar do Teu amor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 256,
            tb: 480,
            selecionado: true,
            estrofe1: 'Oh! quando achará o meu ser\nDescanso perfeito, Senhor?\nE, em Ti crendo, há de viver\nEm paz, sem pecado, (bis)\nEm paz, sem temor?',
            estrofe2: 'Minha alma esquadrinha, Jesus,\nE vê quão instável eu sou!\nHumilde, aguardo da cruz\nPoder e firmeza         (bis)\nDe Quem me salvou.',
            estrofe3: 'Meus ídolos lanço aos Teus pés,\nOs bens que possuo são Teus.\nAnelo ser como Tu és.\nEm Ti confiando,              (bis)\nEu sigo, meu Deus!',
            estrofe4: 'Lavado em Teu sangue, Senhor,\nEu tenho pureza sem par.\nCom fé e com grato amor\nEu sigo os Teus passos (bis)\nSem mais vacilar.',
            estrofe5: 'Agora Te louvo, Senhor,\nPor Tua mercê sem igual.\nFirmado no Teu santo amor,\nTu podes guardar-me, (bis)\nGuardar-me do mal.',
            som: '',
            coro: ''
        },
        {
            id: 257,
            tb: 723,
            selecionado: true,
            estrofe1: 'Cristo, o que tenho oferto a Ti,\nFala, Jesus, eu quero-Te ouvir;\nVem, sela agora Teu servo aqui,\nMeu ser vem com Teu santo amor suprir.',
            estrofe2: 'Dá mais amor ao meu coração,\nQuero o evangelho ao mundo anunciar\nE ao que jaz na vil perdição\nDizer que Jesus pode libertar.',
            estrofe3: 'Dá-me poder, que o mundo em redor\nPossa sentir que habitas em mim.\nQuero luzir por Ti, meu Senhor,\nE outros mover a buscar-Te enfim.',
            estrofe4: 'Dá-me coragem, fé e valor\nSe no horizonte o sol declinar,\nE, vindo sombras em meu redor,\nEu sei que prometes comigo estar.',
            estrofe5: '',
            som: '',
            coro: 'Tudo por Ti, Jesus,\nTudo por Ti eu dou,\nNada do mundo quero amar,\nJesus, aos Teus pés estou.'
        },
        {
            id: 258,
            tb: 370,
            selecionado: true,
            estrofe1: 'Cristo, se meus pés erraram,\nDesviando-se da luz,\nSe o meu motivo é outro\nE não mais visar a cruz,\nNão me negues Tua bênção,\nPois, eu sei, fui desleal,\nMas corrige as minhas falhas,\nExtirpando todo o mal.',
            estrofe2: 'Fui apenas mercenário\nOu servi-Te com amor\nAo buscar a ovelha errante,\nSem medir perigo e dor?\nTudo sabes, e, por isso,\nSob Teu perscrutante olhar,\nSem temer Teu veredito,\nContinuo a trabalhar.',
            estrofe3: 'Fonte do amor eterno,\nFaze que meu coração\nDo Teu santo amor transborde\nE não sirva a Ti em vão.\nQuero amor mui paciente,\nSanto fogo e compaixão,\nMente sóbria, equilibrada,\nMais ternura e devoção.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Quero só servir ao Mestre\nCom sincero e ardente amor,\nPara dEle ouvir na glória:\nFoste fiel no teu labor!'
        },
        {
            id: 259,
            tb: 283,
            selecionado: true,
            estrofe1: 'Eis-me, ó Salvador, aqui!\nAlma e corpo oferto a Ti;\nServo inútil, sem valor,\nMas pertenço a Ti, Senhor!',
            estrofe2: 'Vacilante no pensar,\nMui propenso a tropeçar,\nMas me entrego a Ti, Senhor,\nSalvo estou por Teu amor!',
            estrofe3: 'Transformado em todo o ser,\nObedeço ao Teu poder,\nPois total consagração\nDevo em vista do perdão.',
            estrofe4: 'Eu, remido pecador,\nMe dedico ao Redentor:\nTeu é este coração,\nTeu em plena sujeição.',
            estrofe5: 'Toma-me, Senhor Jesus,\nPara andar conTigo em luz,\nSem reserva, sem temor,\nTeu cativo, ó Salvador!',
            som: '',
            coro: ''
        },
        {
            id: 260,
            tb: 76,
            selecionado: true,
            estrofe1: 'Jesus, se Teu potente amor\nVencer meu coração,\nEntão meus pés de Ti, Senhor,\nJamais se afastarão.',
            estrofe2: 'Oh! que o lume divinal\nComece em mim a arder,\nCom fogo santo extirpe o mal,\nRefine o meu ser.',
            estrofe3: 'Minha alma vem, agora, encher\nDe clara e doce luz;\nQue assim Teu sopro, com poder,\nMe inspire, bom Jesus.',
            estrofe4: 'Com passos firmes andarei,\nConstante em Teu amor.\nA Ti somente servirei\nNum mundo pecador.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 261,
            tb: 242,
            selecionado: true,
            estrofe1: 'Minha alma e meu corpo,\nSenhor, entrego aqui,\nEm pleno sacrifício\nQue ofereço a Ti.',
            estrofe2: 'Por tanto amor Te cedo\nMeu renovado ser,\nPois para resgatar-me\nVieste aqui morrer.',
            estrofe3: 'É doce, assim, deixar-me\nNa Tua santa mão,\nFerida para obter-me\nCompleta salvação.',
            estrofe4: 'Sou Teu, Jesus amado,\nTeu sangue me lavou,\nO Espírito divino\nAgora me selou.',
            estrofe5: '',
            som: '',
            coro: 'Jesus, agora mesmo,\nBendito Redentor,\nTudo, para sempre,\nConsagro a Ti, Senhor!'
        },
        {
            id: 262,
            tb: 111,
            selecionado: true,
            estrofe1: 'Vem, Senhor, me guiar,\nMinha fé sustentar.\nFraco estou, débil sou, sem vigor.\nQuero as trevas deixar,\nQuero a luz alcançar,\nPela mão vem guiar-me, Senhor.',
            estrofe2: 'Quero o ego vencer,\nSanto e puro viver,\nTeu exemplo seguir onde for.\nMas instável eu sou,\nDá-me força e valor,\nPela mão vem guiar-me, Senhor.',
            estrofe3: 'Se o meu jornadear\nExigir batalhar,\nLaços mil Satanás me armar,\nSocorrer-me, oh! vem,\nMeu Senhor, Salvador,\nPela mão vem guiar-me ao Lar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vem-me guiar, (bis)\nPela mão vem guiar-me, Senhor.'
        },
        {
            id: 263,
            tb: 503,
            selecionado: true,
            estrofe1: 'A fé igual à de Jesus,\nQue os montes pode remover\nE ao mundo trouxe alegre luz,\nAnelo, ó Deus, de Ti obter,\nA fé que aos salvos dá vigor\nE que se funde em Teu amor.',
            estrofe2: 'A fé que faz dos céus chegar\nAos servos Teus poder, união,\nQue os faz valentes no lutar\nE os faz vencer o vil leão,\nQue pronta para a morte está,\nPorque em Deus confiará.',
            estrofe3: 'A fé que vence a Satanás,\nQue, afoita, enfrenta as prisões,\nQue tem em Cristo aquela paz\nQue guarda a calma em provações,\nA fé que não recusa a cruz,\nMas segue após o bom Jesus.',
            estrofe4: 'A fé que sabe distinguir\nO falso do que é real\nE quer em retidão seguir,\nFitando os olhos no imortal.\nDá-me essa fé, ó meu Senhor,\nEm Cristo, meu bom Salvador.',
            estrofe5: '',
            som: '',
            coro: ''
        }, {
            id: 264,
            tb: 501,
            selecionado: true,
            estrofe1: 'Minha alma a Rocha forte achou,\nNa qual firmeza encontrou:\nÉ Cristo, o meu Senhor Jesus,\nQue morto foi na acerba cruz.\nOs céus e a terra passarão,\nMas permanece a salvação. (bis)',
            estrofe2: 'Ó Rocha, que estável és!\nDo abismo afastas os meus pés\nE os fazes sempre procurar\nNos santos passos Teus andar.\nDeus, reto és Tu e à retidão\nConvertes todo o coração. (bis)',
            estrofe3: 'Eu nesta Rocha vou ficar\nE a dor e a morte arrostar.\nMinha alma se sustém em Deus\nAté findar os dias meus.\nE, amado pelo eterno Amor,\nVerei quão grande é Seu valor. (bis)',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 265,
            tb: 466,
            selecionado: true,
            estrofe1: 'Com fogo santo, ó Salvador,\nVem inspirar divino ardor\nNum cidadão do além.\nRevela-Te ao coração,\nFazendo-o agir com retidão,\nHonrando ao Sumo Bem.',
            estrofe2: 'Que nada possa conseguir\nA minha mente dividir\nNo meu serviço a Ti,\nAo mundo deve morta ser,\nÀ sua glória, ao seu prazer,\nE em Deus viver aqui.',
            estrofe3: 'Submisso à Tua santa lei,\nA Ti eu obedecerei\nDe todo o coração.\nGuiado pela Tua luz,\nEu provo o Teu amor, Jesus,\nEm doce comunhão!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 266,
            tb: 832,
            selecionado: true,
            estrofe1: 'Tua vontade faze, ó Senhor!\nEu sou feitura, Tu és o Autor.\nMolda e refaze todo o meu ser\nSegundo as normas do Teu querer.',
            estrofe2: 'Tua vontade faze, ó meu Deus!\nSonda e corrige os passos meus.\nTorna-me santo como Tu és,\nOuve os meu rogos, eis-me a Teus pés!',
            estrofe3: 'Tua vontade faze, ó meu Pai!\nPor ela o crente vive e não cai.\nGuia-me a vida com Tua luz,\nPoder e graça dá-me em Jesus.',
            estrofe4: 'Tua vontade, boa e sem par,\nQuero na vida realizar.\nVive, triunfa, domina, enfim,\nReina supremo, meu Deus, em mim!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 267,
            tb: 863,
            selecionado: true,
            estrofe1: 'Terno Jesus, quanto eu necessito\nQue outra vez me visites, Senhor;\nQuero sentir esse toque bendito,\nTeu poderoso toque de amor.',
            estrofe2: 'Débil na fé, muitas vezes tropeço,\nPor tantas dúvidas sinto temor;\nChego contrito a Ti e hoje peço\nTeu poderoso toque de amor.',
            estrofe3: 'Somente Tu poderás libertar-me,\nBusco poder celestial, Redentor;\nA santidade só Tu podes dar-me,\nTeu poderoso toque de amor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Eis-me aqui, em submissão,\nMaravilhoso, terno Jesus;\nToca, Senhor, meu coração,\nMaravilhoso, terno Jesus.'
        },
        {
            id: 268,
            tb: 189,
            selecionado: true,
            estrofe1: 'Ao meditar, Jesus, no Teu sofrer,\nEu quero mais e mais por Ti viver;\nOh! quanto resisti,\nMeus votos não cumpri,\nMas hoje entrego a Ti\nTodo o meu ser.',
            estrofe2: 'Submisso em oração no Teu altar,\nA minha débil fé vem aumentar.\nAjuda-me, Jesus,\nA carregar a cruz\nE, andando em Tua luz,\nTeu nome honrar.',
            estrofe3: 'Faze igual ao Teu meu coração,\nDá-me divino ardor e a compaixão;\nQue cada vez melhor\nEspalhe paz e amor,\nBuscando o pecador\nNa perdição.',
            estrofe4: 'Meu ser inteiro, ó Deus, consagro aqui.\nOs dons que deste a mim entrego a Ti.\nEm alegria ou dor,\nOu quando ao céu eu for,\nSou Teu, meu Salvador,\nServindo a Ti.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 269,
            tb: 389,
            selecionado: true,
            estrofe1: 'Não sou meu, pois Tu morreste,\nÓ Senhor, por mim na cruz;\nEu confesso alegremente\nQue pertenço a Ti, Jesus!',
            estrofe2: 'Não sou meu! Tu me remiste,\nE o Teu sangue me lavou;\nSó confio em Tua graça,\nQue minha alma resgatou.',
            estrofe3: 'Não sou meu! Venho entregar-Te\nTudo quanto julgo meu;\nTudo às Tuas mãos eu trago,\nRedentor, sou todo Teu!',
            estrofe4: 'Não sou meu! Inteiramente,\nSantifica-me, Senhor!\nDa vaidade e da soberba,\nVem livrar-me, ó Salvador!',
            estrofe5: '',
            som: '',
            coro: 'Não sou meu, não sou meu!\nBom Jesus, sou todo Teu!\nHoje mesmo e para sempre,\nBom Jesus, sou todo Teu!'
        },
        {
            id: 270,
            tb: 445,
            selecionado: true,
            estrofe1: 'Fala-me, Jesus, eu quero\nTua voz agora ouvir.\nEis-me aqui, junto ao madeiro,\nAnsioso a Te servir.\nOh! afasta os meus temores\nE revela o Teu querer,\nPor mercê das Tuas dores\nEu poderei vencer.',
            estrofe2: 'Fala-me, Jesus, eu sigo\nAonde queres, meu Senhor.\nÉ prazer andar conTigo\nNo gozo ou na dor.\nPurifica a quem Te implora\nAqui, no Teu altar,\nQuero ser Teu templo agora;\nOh! vem em mim reinar!',
            estrofe3: 'Que Teu sangue precioso\nVenha todo o mal lavar.\nTu, que és terno e poderoso,\nMe podes bem guardar.\nDeixo o mundo e seu engano,\nDigo adeus ao próprio eu\nE, entregue ao Teu plano,\nJesus, sou todo Teu!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Fala, Jesus, humildemente eu ouço,\nAqui, ao pé da cruz,\nSeparo-me do mundo.'
        },
        {
            id: 271,
            tb: 22,
            selecionado: true,
            estrofe1: 'Oh! como servirei melhor\nEm gratidão a Ti, Jesus?\nFraco e inconstante foi meu labor\nPara exaltar a Tua cruz.',
            estrofe2: 'Surdo eu sou ao Teu mandar,\nLerda em servir é minha mão,\nMeus pés são tardos para enfrentar\nO meu Calvário em submissão.',
            estrofe3: 'Dá-me, Jesus, maior poder,\nAos olhos turvos dá visão.\nFaze-me crer, sem mais duvidar,\nE Te servir com devoção.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Sinto, ao mirar Teu sofrer na cruz,\nQuanto falhei, rejeitando a luz;\nPeço, Senhor, mais graça e vigor\nPara servir-Te assim melhor.'
        },
        {
            id: 272,
            tb: 579,
            selecionado: true,
            estrofe1: 'Ao serdes tentados deveis resistir,\nPois sempre o inimigo vos quer iludir;\nVigiai, combatendo qualquer vil paixão,\nA Cristo seguindo como vero cristão.',
            estrofe2: 'O mau companheiro deveis evitar,\nNão ouve a Cristo, vos quer desviar.\nOh! sede ardorosos, com dedicação,\nA Cristo seguindo como vero cristão.',
            estrofe3: 'Deus dá a coroa só ao que vencer;\nAvante na luta; sem nada temer.\nUnidos ao Mestre, real Capitão;\nA Cristo seguindo como vero cristão.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vinde ao Mestre, pedindo\nForça, auxílio e graça;\nEle está sempre ouvindo;\nCristo vô-los quer dar.'
        },
        {
            id: 273,
            tb: 528,
            selecionado: true,
            estrofe1: 'Quero, Jesus, que me dês um coração\nPuro e lavado em Teu sangue sem par,\nLivre de todo o egoísmo e paixão,\nQual nenhum outro jamais pode dar.',
            estrofe2: 'Quero, Jesus, que me dês um coração\nCheio de santo e divino poder,\nArdendo em fogo, potente e eficaz,\nSantificado, e assim vou vencer.',
            estrofe3: 'Quero, Jesus, que me dês um coração\nApto a crescer pela graça e o bem,\nPara que assim, como Tu, eu possa ser\nFiel e, no fim, adorar-Te no além.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Um coração, terno Jesus,\nAlvo como a neve, sem manchas do mal,\nSomente em Ti, morto ali na cruz,\nPosso encontrá-lo e a paz divinal.'
        },
        {
            id: 274,
            tb: 167,
            selecionado: true,
            estrofe1: 'Se acaso eu hoje fui espinho a alguém\nOu se o levei a abandonar o bem,\nSe ao mau caminho eu atentei, também,\nPerdão, Senhor!',
            estrofe2: 'Se o meu falar foi pretensioso e vão\nOu se ao faminto eu recusei o pão,\nTemendo que ele me faltasse, então,\nPerdão, Senhor!',
            estrofe3: 'Se eu fui perverso, indiferente ou vil,\nSe só busquei abrigo em Teu redil,\nEm vez de ser soldado varonil,\nPerdão, Senhor!',
            estrofe4: 'Perdoa as transgressões da Tua lei,\nAs confessadas e as de que não sei,\nE guarda-me fiel à Tua grei,\nSenhor, amém!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 275,
            tb: 168,
            selecionado: true,
            estrofe1: 'Sonda-me, ó Deus, pois vês meu coração;\nProva-me, ó Pai, Te peço em oração.\nDe todo o mal liberta-me, Senhor,\nTambém da transgressão que oculta for.',
            estrofe2: 'Vem afastar os vis pecados meus,\nTua pureza busco aqui, meu Deus.\nVem-me inflamar e consumir de amor,\nPois quero-Te glorificar, Senhor.',
            estrofe3: 'Todo o meu ser, que já não julgo meu,\nQuero gastá-lo no serviço Teu.\nMinhas paixões Tu podes dominar;\nEu me submeto, oh! vem em mim reinar!',
            estrofe4: 'Lá do alto céu o avivamento vem,\nA começar em mim e indo além.\nO Teu poder, as bênçãos, Teu favor,\nConcede aos que são Teus, ó Pai de amor.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 276,
            tb: 858,
            selecionado: true,
            estrofe1: 'Bendito seja o Cordeiro,\nQue na cruz por nós morreu;\nBendito seja o Seu sangue,\nQue por todos nós verteu!\nEis nesse sangue lavados,\nTendo puro o coração,\nOs pecadores remidos\nQue perante Deus estão!',
            estrofe2: 'Quão espinhosa a coroa\nQue Jesus por nós levou;\nOh! quão profundas as chagas\nQue nos provam quanto amou!\nEis nessas chagas pureza\nPara o maior pecador,\nA quem mais alvo que a neve\nO Teu sangue faz, Senhor!',
            estrofe3: 'Se nós a Ti confessarmos\nE seguirmos Tua luz,\nTu não somente perdoas,\nPurificas, ó Jesus!\nLavas de todo o pecado,\nQue maravilha de amor!\nA nós mais alvos que a neve\nO Teu sangue faz, Senhor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Alvo mais que a neve! (bis)\nSim, nesse sangue lavado,\nMais alvo que a neve serei.'
        },
        {
            id: 277,
            tb: 688,
            selecionado: true,
            estrofe1: 'Com sincero anelo em minha alma\nVenho à Tua presença, Senhor.\nSantifica meu ser, meus talentos,\nCom Teu toque de fogo e amor!',
            estrofe2: 'Faze-me aguardar paciente\nTeu Espírito consolador\nAo render-me à Tua vontade,\nAo buscar Teu divino favor.',
            estrofe3: 'Luz das luzes! Amor insondável!\nSó agora eu sei avaliar\nQuanto devo a Ti, meu bom Mestre,\nQuanto importa por Ti trabalhar.',
            estrofe4: 'Eu confio em Tua presença\nCada dia, por onde eu andar.\nAo mostrar Teu amor aos perdidos,\nQuero a Ti meu amor demonstrar.',
            estrofe5: '',
            som: '',
            coro: 'Mais ardente amor, consagração profunda,\nQuero ter por Ti, meu Salvador Jesus.\nPurifica-me com fogo lá do alto,\nPois, aqui, humilde espero ao pé da cruz.'
        },
        {
            id: 278,
            tb: 207,
            selecionado: true,
            estrofe1: 'Cristo, sê conosco,\nDesce com poder,\nMostra-nos Teu rosto,\nFaze-nos viver.\nE com humildade\nVamos-Te adorar\nE sinceramente\nO Teu nome honrar.',
            estrofe2: 'Tu nos revelaste\nTeu imenso amor\nQuando oraste ao Pai\nEm prol do malfeitor\nNo instante horrendo\nDo sofrer na cruz!\nQuem não vê, então,\nO Teu amor, Jesus?',
            estrofe3: 'Dá-nos o Teu sopro\nSantificador,\nVem! aviva a chama\nDo fraterno amor,\nGuarda-nos na via\nDa verdade e paz.\nBreve raia a aurora\nQue Teu dia traz.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 279,
            tb: 135,
            selecionado: true,
            estrofe1: 'A minha vida, o meu querer,\nNas mãos do meu Senhor,\nQual pão partido há de ser,\nConstante ao Seu dispor,\nE no altar hei de verter\nA taça de amor.',
            estrofe2: 'Meu ser pertence a Ti, Senhor,\nPorém mais devo dar;\nE assim me encontro com temor\nPerante o Teu lagar;\nTu pedes todo o meu amor,\nQue venho entregar.',
            estrofe3: 'Em sacrifício vivo, eu,\nProstrado no altar,\nQual sacramento, Mestre meu,\nOferto o meu lidar;\nE enfim me chamarás ao céu\nPra sempre comungar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 280,
            tb: 130,
            selecionado: true,
            estrofe1: 'Tempos benditos hão de chegar,\nRios de bênçãos, graça sem par,\nVindos dos céus para nos inspirar,\nDivina promessa assim confirmar.',
            estrofe2: 'Portas celestes se abrirão,\nVentos divinos em nós soprarão;\nSe aguardarmos, já hão de chegar,\nA Igreja cobrindo, sem desapontar.',
            estrofe3: 'Nossos pedidos Deus ouvirá,\nTem a resposta e a dará.\nAvivamento, milagre da fé,\nBendito aquele que espera e crê.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Um avivamento Deus nos quer mandar,\nPoder e vitória a todos vai dar;\nDos céus vem chegando, resposta da fé,\nUm avivamento, quão belo ele é!'
        },
        {
            id: 281,
            tb: 170,
            selecionado: true,
            estrofe1: 'Bem de manhã, embora o céu sereno\nPareça um dia calmo anunciar,\nVigia e ora! O coração pequeno\nUm temporal pode abrigar.',
            estrofe2: 'Ao meio-dia e quando os sons da terra\nAbafam mais de Deus a voz de amor,\nRecorre à oração, evita a guerra\nE goza paz com o Senhor.',
            estrofe3: 'Do dia ao fim, após os teus lidares,\nRelembra as bênçãos do celeste amor\nE conta a Deus prazeres e pesares,\nDeixando em Suas mãos a dor.',
            estrofe4: 'E, sem cessar, vigia a cada instante,\nQue o inimigo ataca sem parar;\nSó com Jesus em comunhão constante\nÉ que o fiel vai triunfar.',
            estrofe5: '',
            som: '',
            coro: 'Bem de manhã, e sem cessar,\nVigiar e orar!'
        },

        {
            id: 282,
            tb: 26,
            selecionado: true,
            estrofe1: 'Sol da minha alma és Tu, Senhor!\nNoite não há se perto estás!\nDissipa as nuvens do temor\nE me concede a Tua paz!',
            estrofe2: 'Sol da minha alma és Tu, Jesus!\nCom Tua graça envolve a mim\nE, refletindo a pura luz,\nDá-me que eu viva até o fim.',
            estrofe3: 'Qual brando orvalho, o sono vem\nMinha alma e corpo restaurar.\nEm Ti, Jesus, supremo bem,\nSuave e doce é descansar!',
            estrofe4: 'Se neste dia um filho houver\nQue a voz divina desprezou,\nNão deixes que se vá perder\nA ovelha que se extraviou!',
            estrofe5: 'Há muitos hoje em luta e dor,\nEm indigência e tentação.\nVem confortá-los, ó Senhor,\nE dar-lhes Tua proteção!',
            som: '',
            coro: ''
        },
        {
            id: 283,
            tb: 66,
            selecionado: true,
            estrofe1: 'Bendita a hora de oração,\nQue acalma o aflito coração,\nQue leva ao trono de Jesus\nOs rogos por auxílio e luz!\nEm tempos de cuidado e dor,\nRefúgio tenho em meu Senhor;\nVencendo o ardil e a tentação,\nBendigo a hora de oração.',
            estrofe2: 'Bendita a hora de oração,\nQuando a fervente petição\nSobe ao benigno Salvador,\nQue atende à voz do meu clamor!\nJesus me ensina a recorrer\nAo Seu amor, ao Seu poder;\nContente e sem perturbação,\nEu busco a hora de oração.',
            estrofe3: 'Bendita a hora de oração,\nDe santa paz e comunhão!\nDesejo, enquanto aqui me achar,\nCom fé constante, humilde, orar;\nE enfim, no resplendor de Deus,\nNa glória dos mais altos céus,\nLembrar-me-ei com gratidão\nDas horas suaves de oração.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 284,
            tb: 424,
            selecionado: true,
            estrofe1: 'Eis-nos, ó Pastor divino,\nTodos juntos num lugar,\nComo ovelhas, congregados,\nTeu auxílio a suplicar.\nSê presente, sê presente\nO rebanho a apascentar!',
            estrofe2: 'Guia os tristes, fatigados,\nAo aprisco do Senhor!\nLeva os tenros cordeirinhos\nNos Teus braços, bom Pastor,\nÀs pastagens, às pastagens\nDe celeste e doce amor!',
            estrofe3: 'Ó Jesus bondoso, escuta\nNossa humilde petição!\nVem encher o Teu rebanho\nDe sincera gratidão!\nCantaremos, cantaremos\nTua imensa compaixão.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 285,
            tb: 784,
            selecionado: true,
            estrofe1: 'Meu Jesus, ouve aqui minha oração,\nAbro humilde a Ti o meu coração.\nO caminho escuro está,\nLutas e tristezas há,\nMeu Senhor, vem já,\nOuve aqui, Jesus, minha oração.',
            estrofe2: 'Quão cruel é, Senhor, minha provação,\nOuve, meu Salvador, minha oração,\nQuero o Teu amor sentir,\nQuero a Tua voz ouvir,\nQuero a Ti seguir;\nOuve aqui, Jesus, minha oração.',
            estrofe3: 'Só por Ti vencerei toda a tentação.\nOuve, Herói da Cruz, minha oração,\nGuia-me, ó bom Pastor,\nFaze-me um vencedor,\nPor Teu grande amor\nOuve aqui, Jesus, minha oração.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 286,
            tb: 513,
            selecionado: true,
            estrofe1: 'Ouve, ó Deus, o Teu povo clamar:\nMais conversões.       (bis)\nVem entre nós Tua graça mostrar,\nMais conversões.       (bis)\nManda o Espírito Santo em poder\nPara que faça o rebelde em Ti crer\nE vida nova assim receber.\nDá-nos, Senhor, mais conversões.',
            estrofe2: 'Ouve, Jesus, nossa ardente oração:\nDá-nos mais fé. (bis)\nVem, sê presente em nossa reunião,\nDá-nos mais fé. (bis)\nOh! se os homens quisessem-Te ouvir\nPara poderem perdão conseguir\nE Tua bênção então possuir!\nDá-nos, Senhor, dá-nos mais fé!',
            estrofe3: 'É Teu desejo os perdidos salvar,\nCremos, Senhor!        (bis)\nSempre conosco prometes estar,\nCremos, Senhor!        (bis)\nAlmas serão convertidas a Ti\nE ao Teu serviço entregues aqui,\nNão mais pensando somente em si,\nCremos, Senhor! cremos, Senhor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 287,
            tb: 196,
            selecionado: true,
            estrofe1: 'Recebereis do céu poder\nÉ a promessa de meu Pai.\nFirmes, não desanimeis,\nTende fé, orai, orai!',
            estrofe2: 'Disse Jesus: ―Qual é o pai\nA quem o filho pedir pão\nEm vez disso lhe dá pedra?‖\nImpossível! isso não!',
            estrofe3: 'Vós, que sois maus e sabeis dar\nAos vossos filhos o que é bom,\nQuanto mais o Pai celeste\nDar-vos-á o grande dom.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Pedi, pedi, pedi e dar-se-vos-á;\nBuscai, buscai, quem busca encontrará;\nBatei, batei até Deus atender;\nJesus, Jesus promete responder.'
        },

        {
            id: 288,
            tb: 543,
            selecionado: true,
            estrofe1: 'Com Tua mão segura bem a minha,\nPois eu tão frágil sou, ó Salvador,\nQue não me atrevo a dar jamais um passo\nSem Teu amparo, Cristo, meu Senhor!',
            estrofe2: 'Com Tua mão segura bem a minha,\nE pelo mundo alegre seguirei;\nMesmo onde as sombras caem mais escuras,\nTeu rosto vendo, nada temerei.',
            estrofe3: 'E, no momento de transpor o rio\nQue Tu, por mim, quiseste atravessar,\nCom Tua mão segura bem a minha,\nE sobre a morte eu hei de triunfar.',
            estrofe4: 'Quando voltares, lá dos céus descendo,\nSegura bem a minha mão, Senhor;\nCristo Jesus, conduze-me conTigo\nPara onde eu goze Teu eterno amor.',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 289,
            tb: 174,
            selecionado: true,
            estrofe1: 'Ó, vem, Senhor Jesus,\nAbençoar Teu povo aqui.\nÓ, vem, Senhor Jesus,\nA nossa fé está em Ti!',
            estrofe2: 'Tu prometeste\nQue, onde dois ou três reunidos\nEm Teu nome se achassem,\nEstarias Tu, também.\nVem, nosso Deus,\nÓ Jesus, estende a mão,\nToca em cada um de nós,\nToca o nosso coração!',
            estrofe3: 'Tu, que mandaste\nTeu Espírito no cenáculo\nQuando ali Teu povo estava\nTe buscando em oração,\nNós Te pedimos:\nVem, Senhor, surpreender-nos,\nVem, visita-nos, Jesus,\nOuve a nossa petição!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 290,
            tb: 435,
            selecionado: true,
            estrofe1: 'Vivifica Tua Igreja,\nÓ bendito Salvador,\nAquecendo nossas almas\nNo divino, santo amor.\nVem, derrama sobre todos\nTua graça, ó Jesus,\nDando as bênçãos da verdade\nQue nos mostram Tua luz.',
            estrofe2: 'Pai, contempla Tua Igreja,\nVem, estende Tua mão!\nDá-lhe a graça insondável\nDa divina redenção.\nAntes que ela desfaleça\nE se torne sem vigor,\nVivifica, vivifica\nNossas almas, ó Senhor.',
            estrofe3: 'Santifica Tua Igreja\nPela graça divinal,\nFaze-a sempre triunfante\nNo conflito contra o mal,\nDá-lhe força renovada\nEm caminho para o Lar\nE que esteja preparada\nQuando Cristo regressar!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 291,
            tb: 19,
            selecionado: true,
            estrofe1: 'Sempre, irmãos, orai e vigiai!\nPara vencer o mundo, alerta estai!\nSempre orai, lembrando o bom Jesus,\nQue ao Pai clamou quando foi sofrer na cruz.',
            estrofe2: 'Sempre orai, pois bem seguro está\nQuem teme a Deus e tudo a Cristo dá.\nSempre orai! que o Espírito de Deus\nPossa descer, dar valor aos filhos Seus.',
            estrofe3: 'Sempre orai, em alegria ou dor;\nEm hora própria chega o Salvador.\nSempre orai! Fiéis a Deus sereis\nE Suas bênçãos bem certo provareis.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 292,
            tb: 41,
            selecionado: true,
            estrofe1: 'Se nos assalta o temporal\nDas aflições e todo o mal,\nHá paz constante e proteção\nAo pé do altar de oração.',
            estrofe2: 'Em almejar o imortal,\nHá comunhão transcendental;\nE ungidos todos se unirão\nNum só lugar de oração.',
            estrofe3: 'Com asas de águia vou subir,\nNem tempo ou espaço hei de medir.\nDos céus me vem inspiração\nAli, no altar de oração.',
            estrofe4: 'Oh! deixe a língua de exultar,\nEsqueça o peito de arfar,\nInerte seja a minha mão\nSe olvidar a oração.',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 293,
            tb: 456,
            selecionado: true,
            estrofe1: 'Chuvas de bênçãos teremos:\nÉ a promessa de Deus;\nTempos benditos trazendo\nChuvas de bênçãos dos céus.',
            estrofe2: 'Chuvas de bênçãos teremos,\nDe vida, paz e perdão;\nOs pecadores indignos\nGraça dos céus obterão.',
            estrofe3: 'Chuvas de bênçãos teremos,\nManda-nos já, ó Senhor!\nDá-nos o gozo dos frutos\nDos Teus ensinos de amor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Chuvas de bênçãos,\nChuvas de bênçãos dos céus,\nGotas benditas já temos,\nChuvas rogamos a Deus.'
        },

        {
            id: 294,
            tb: 375,
            selecionado: true,
            estrofe1: 'Deus presente está conosco,\nPronto todos a salvar;\nSobre as almas sequiosas,\nSua bênção quer mandar.',
            estrofe2: 'Eis a Ti, Jesus, erguemos\nNossos pobres corações;\nSendo rica a Tua graça,\nOuve as nossas petições.',
            estrofe3: 'Torna a nossa fé mais viva,\nMais ardente o nosso amor;\nEnche-nos de santo zelo,\nDe coragem e fervor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Manda, oh! manda ricas chuvas\nDessa bênção, Salvador!\nImploramos! Esperamos!\nVivifica-nos, Senhor!'
        },

        {
            id: 295,
            tb: 526,
            selecionado: true,
            estrofe1: 'Os noticiários descrevem o caos,\nEnfatizando a desgraça e o horror;\nNo fim do túnel do medo há uma luz\nPela tarefa do intercessor.',
            estrofe2: 'Ao ver estragos que o mal fabricou,\nVício, pecado, miséria e temor,\nPelo Espírito, lágrimas vêm,\nMas também força ao intercessor.',
            estrofe3: 'Há heresia e falta união,\nGeme o Corpo de Cristo, o Senhor.\n―Avivamento e não mais mornidão!‖\nOra em segredo o intercessor.',
            estrofe4: 'Autoridades, famílias, patrões,\nOs pecadores, os órfãos de amor...\nPaira no ar um urgente clamor\nQue exige a ação de um intercessor.',
            estrofe5: 'Gente sedenta à Fonte virá,\nMuitos famintos buscando o Pão;\nE a Igreja, em vitória, dirá:\n―Deus operou pela intercessão!‖',
            som: '',
            coro: 'Quero, Senhor, interceder,\nOh! dá-me a força do Espírito Santo,\nEm oração prevalecer\nE a resposta gloriosa obter!'
        },

        {
            id: 296,
            tb: 149,
            selecionado: true,
            estrofe1: 'Oh! por que duvidar\nSobre as ondas do mar,\nQuando Cristo caminho abriu?\nQuando forçado és\nA lutar contra o mar,\nSeu amor a ti quer revelar.',
            estrofe2: 'Ondas vêm-te assustar?\nTempestades no mar?\nDa montanha o Mestre te vê,\nE na tribulação\nEle vem socorrer:\nSua mão bem te pode suster.',
            estrofe3: 'Podes tu recordar\nMaravilhas sem par:\nNo deserto ao povo fartou.\nE o mesmo poder\nEle sempre terá,\nPois não muda e não falhará.',
            estrofe4: 'Quando pedes mais fé,\nEle ouve, oh! crê!\nMesmo sendo em tribulação.\nQuando a mão de poder\nO teu medo tirar,\nSobre as ondas, então, andarás.',
            estrofe5: '',
            som: '',
            coro: 'Solta o cabo da nau!\nToma os remos nas mãos\nE navega com fé em Jesus!\nE, então, tu verás\nQue bonança se faz,\nPois, com Ele, seguro serás.'
        },

        {
            id: 297,
            tb: 184,
            selecionado: true,
            estrofe1: 'Cristo amado, sei que na força do mal\nTu, meu Mestre, sempre serás protetor.\nTu me guardas, dando-me paz divinal;\nEu conTigo sempre serei vencedor!',
            estrofe2: 'Que alegria tenho no meu Salvador,\nTenho graça, vida de amor paternal!\nTudo posso, tudo, por Ti, meu Senhor;\nDeste mundo sou vencedor afinal!',
            estrofe3: 'Não duvido, Cristo, meu Mestre, de Ti,\nCreio em Tua rica promessa, Jesus;\nNão me deixes nem me rejeites aqui,\nQuero sempre ver Tua face de luz!',
            estrofe4: 'Oh! que bênção ter a certeza do bem,\nTer na vida paz e perdão do Senhor!\nMui alegre, busco essa pátria de além,\nOnde reina Cristo Jesus, Rei de amor!',
            estrofe5: '',
            som: '',
            coro: 'Cristo, Mestre,\nSei que conTigo sou vencedor;\nDá-me graça.\nDá-me do Teu poder, Redentor.'
        },

        {
            id: 298,
            tb: 266,
            selecionado: true,
            estrofe1: 'Deus é por mim. Não temo\nO mundo e seu furor;\nMinha alma está segura\nNa graça do Senhor.\nSou, pelo Rei, amado,\nMeu defensor é Deus.\nNão temo inimigos,\nSou cidadão dos céus.',
            estrofe2: 'Declaro com firmeza\nQue Deus comigo vai;\nO Eterno Ser supremo\nÉ meu bondoso Pai.\nPor toda a parte, sempre\nMe cerca o Seu amor;\nPerigo algum me afasta\nDo excelso protetor.',
            estrofe3: 'Se Deus me justifica,\nQuem me condenará?\nDo grande amor de Cristo\nNinguém me apartará.\nA morte, a vida, os homens,\nTristeza e tentação,\nEm vão esperam todos\nRomper esta união.',
            estrofe4: 'Celeste luz me inunda\nDe paz e salvação;\nDe santo regozijo\nMe pulsa o coração.\nO sol que me ilumina\nÉ Cristo, meu Senhor;\nO gozo que me alegra\nÉ Seu constante amor.',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 299,
            tb: 797,
            selecionado: true,
            estrofe1: 'Firme nas promessas do meu Salvador,\nVou cantar louvores ao meu Criador.\nHei de confiar no Seu excelso amor,\nFirme nas promessas de Jesus.',
            estrofe2: 'Firme nas promessas, não irei falhar\nVindo as tempestades a me consternar;\nPelo Verbo eterno eu hei de trabalhar,\nFirme nas promessas de Jesus.',
            estrofe3: 'Firme nas promessas, sempre vejo assim\nPurificação no sangue para mim;\nPlena liberdade gozarei sem fim,\nFirme nas promessas de Jesus.',
            estrofe4: 'Firme nas promessas do Senhor Jesus,\nEm amor ligado com a Sua cruz;\nCada dia mais me alegro nessa luz,\nFirme nas promessas de Jesus.',
            estrofe5: '',
            som: '',
            coro: 'Firme, firme,\nFirme nas promessas de Jesus, meu Mestre.\nFirme, firme,\nSim, firme nas promessas de Jesus.'
        },

        {
            id: 300,
            tb: 591,
            selecionado: true,
            estrofe1: 'Mais graça Deus dá quando as cargas aumentam,\nMais força concede ao crescer o labor,\nEm grandes angústias envia consolo,\nEm todas as provas dá paz e valor.',
            estrofe2: 'E, quando os recursos em nós se esgotarem\nE em meio ao caminho a força faltar,\nVeremos a fonte da graça divina\nEm nós Seu poder começar a jorrar.',
            estrofe3: 'Amor sem limites, poder sem barreiras,\nQue graça infinita, inefável tem Deus!\nE desses tesouros, guardados em Cristo,\nEm grande medida dará sempre aos Seus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 301,
            tb: 569,
            selecionado: true,
            estrofe1: 'Qual âncora temos\nA fé no Senhor,\nFirmada na rocha,\nNão perde o valor!\nÉ a linda esperança\nQue outorga Jesus,\nLegada na morte\nDe angústia na cruz.',
            estrofe2: 'No arcano celeste\nNo trono de Deus,\nQue reina supremo\nNa glória dos céus;\nAli está presa\nE estável será,\nPois Deus o garante:\nJamais falhará!',
            estrofe3: 'E quando a tormenta\nMais rija bramir\nTenhamos certeza\nDe paz no porvir!\nNem fúria dos ventos\nNem choques do mar\nA entrada do porto\nNos podem vedar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 302,
            tb: 452,
            selecionado: true,
            estrofe1: 'Quando a tempestade ruge\nCom o seu feroz bramir,\nQuando as nuvens se acumulam,\nRaios mil a despedir,\nDo trovão o som tremendo\nFaz-se ouvir e com pavor,\nMas, na voz da tempestade,\nSoa a Tua voz, Senhor!',
            estrofe2: 'Quando o mar vem mansamente\nSobre a areia se espraiar,\nQuando a brisa sussurrante\nNos segreda ao perpassar,\nSoa mística harmonia,\nOuve-se um feliz rumor,\nSobre o coro vem, das ondas,\nTua doce voz, Senhor!',
            estrofe3: 'Quando o coração aflito\nQuer à dor, ao mal fugir,\nE se agita e luta e ruge,\nSem a doce paz sentir,\nQual um som que se repete\nNas quebradas a rolar,\nAo aflito e contristado\nTua voz vem consolar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Eis que ouvimos doce voz\nA animar os que andam sós,\nEm Ti sempre confiados\nE por Ti sempre a lutar\nNa aridez de imensas plagas,\nNo fragor do vasto mar.'
        },
        {
            id: 303,
            tb: 559,
            selecionado: true,
            estrofe1: 'Vai, alma tristonha,\nTeu pranto depor!\nEnterra os cuidados\nAos pés do Senhor!\nAo Mestre confia\nToda essa aflição,\nCristo te concede\nReal compaixão!',
            estrofe2: 'Teus sustos e medos\nDescobre ao Senhor!\nSeu mando transforma\nA noite em fulgor!\nLevanta a cabeça!\nCedo há de raiar\nO sol que dissipa\nNuvioso pesar!',
            estrofe3: 'Há muitos que choram\nAngústia maior;\nHá muitos cansados\nDe culpas e dor!\nVai! Leva a mensagem\nDa graça e luz!\nVai! Deixa as tristezas\nNas mãos de Jesus!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 304,
            tb: 188,
            selecionado: true,
            estrofe1: 'Quando eu preciso de meu Jesus,\nQuando tropeço diante da cruz,\nEle está perto com Sua luz\nQuando eu preciso mais.',
            estrofe2: 'Quando eu preciso de mais poder\nPra me amparar e me proteger,\nCristo está perto a me socorrer\nQuando eu preciso mais.',
            estrofe3: 'Quando eu preciso do meu Senhor,\nQuando me oprime o dissabor,\nEle está perto, o Salvador,\nQuando eu preciso mais.',
            estrofe4: 'Quando eu preciso de um irmão\nQue pode dar-me consolação,\nCristo me fala ao coração\nQuando eu preciso mais.',
            estrofe5: '',
            som: '',
            coro: 'Quando eu preciso mais, (bis)\nCristo está perto pra me ajudar\nQuando eu preciso mais.'
        },
        {
            id: 305,
            tb: 715,
            selecionado: true,
            estrofe1: 'Que consolação tem meu coração\nDescansando no poder de Deus!\nEle tem prazer em me proteger;\nDescansando no poder de Deus!',
            estrofe2: 'Sempre avante vou, bem contente estou\nDescansando no poder de Deus!\nTudo hei de vencer pelo Seu poder,\nDescansando no poder de Deus!',
            estrofe3: 'Não recearei, nada temerei\nDescansando no poder de Deus!\nGozo paz e amor junto a meu Senhor,\nDescansando no poder de Deus!',
            estrofe4: 'Lutas sem cessar hei de atravessar\nDescansando no poder de Deus!\nNão me deixará, mas me susterá;\nDescansando no poder de Deus!',
            estrofe5: '',
            som: '',
            coro: 'Descansando\nNos braços fortes do meu Deus;\nVou seguro\nDescansando no poder de Deus!'
        },
        {
            id: 306,
            tb: 299,
            selecionado: true,
            estrofe1: 'Simplesmente ao confiar,\nQuanta paz do céu me vem!\nTemporais pode enfrentar\nQuem confiança em Cristo tem.',
            estrofe2: 'Em meu débil coração\nVeio o Espírito reinar;\nMesmo em luta ou tentação\nNão me irá abandonar.',
            estrofe3: 'Com perigos ao redor\nOu se a vida me sorri,\nDentro em mim há um altar,\nCom Jesus me encontro ali.',
            estrofe4: 'Quando o vale assustador\nEu tiver de atravessar,\nPela mão do Bom Pastor\nBem seguro irei andar.',
            estrofe5: '',
            som: '',
            coro: 'Cada instante confiar,\nDia a dia, sem cessar,\nVou vivendo nessa luz,\nNa confiança em Jesus.'
        },
        {
            id: 307,
            tb: 332,
            selecionado: true,
            estrofe1: 'Minha alma firme está, meu Deus,\nFirme em Ti! Firme em Ti!\nPois resolvi ser um dos Teus,\nFirme em Ti!\nProfeta, Sacerdote e Rei\nEm Ti, Senhor Jesus, achei;\nPor isso grato cantarei\nSempre a Ti! Sempre a Ti!',
            estrofe2: 'Que os homens busquem ricos ser;\nCristo é meu! Cristo é meu!\nÉ rico além do meu saber;\nCristo é meu!\nA prata e o ouro hão de acabar,\nA fé, porém, vai perdurar\nE sobre as honras triunfar;\nCristo é meu! Cristo é meu!',
            estrofe3: 'Esteja eu bem ou mesmo em dor,\nCristo é meu! Cristo é meu!\nSe eu próspero ou pobre for,\nCristo é meu!\nE, quando a voz de Deus ouvir\nNo dia alegre em que eu partir\nDo mundo impuro, e aos céus subir,\nCristo é meu! Cristo é meu!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 308,
            tb: 194,
            selecionado: true,
            estrofe1: 'Nada sei sobre o futuro,\nDesconheço o que há de vir;\nÉ provável que as nuvens\nVenham meu viver cobrir.\nNada temo do futuro,\nPois Jesus comigo está;\nVou seguindo confiante\nMeu caminho para lá.',
            estrofe2: 'Nada sei sobre o futuro,\nDesconheço o que haverá;\nSe das aves Ele cuida,\nDos Seus filhos cuidará.\nQuando andar pelos desertos\nOu em meio ao vendaval,\nSei que Cristo irá comigo,\nProtegendo-me do mal.',
            estrofe3: 'Meu caminho é mais brilhante\nDesfrutando o Seu amor;\nMinhas cargas são mais leves\nCom a ajuda do Senhor.\nQuando nas mansões eternas,\nQue na glória preparou,\nVou louvá-lO eternamente,\nPois a salvo me guardou.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Muitas coisas não compreendo,\nO amanhã o que trará?\nMas não devo preocupar-me:\nMeu Pastor à frente irá!'
        },
        {
            id: 309,
            tb: 442,
            selecionado: true,
            estrofe1: 'Nunca falha, nunca falta\nMeu bendito Salvador;\nNunca falha Sua graça,\nNunca falta Seu amor;\nSeus preceitos e promessas\nInfalíveis sempre são,\nMais seguros que os montes,   ) bis\nPara sempre durarão. )',
            estrofe2: 'Cristo nunca, nunca falta\nNa mais dura provação.\nQuando Satanás assalta\nCom tremenda tentação,\nProcurando derrotar-nos\nOu encher-nos de pavor,\n―Basta-vos a Minha graça,    ) bis\nPresto diz o Salvador. )',
            estrofe3: 'Nunca falha, nunca falta!\nQuantas vezes o provei,\nDesde que com fé singela\nA Jesus me entreguei!\nQuanto mais Jesus conheço,\nMais anseio por levar\nAos Seus pés os pecadores,    ) bis\nPara Ele os libertar.   )',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 310,
            tb: 261,
            selecionado: true,
            estrofe1: 'Oh! doce é meu descanso\nNo forte Redentor,\nPerfeitamente a salvo\nNa graça do Senhor!\nConfiando em Sua morte\nJamais perecerei!\nPor Ele foi cumprida\nA santa, eterna lei.',
            estrofe2: 'Salvo do meu pecado,\nSalvo da perdição,\nSalvo do triste império\nDa morte e tentação;\nLivre das incertezas\nQue a nossa vida traz,\nLivre de todo o medo,\nGozo de estável paz.',
            estrofe3: 'Inda por curtos dias\nEu vivo em meia-luz.\nMinha alma aguarda ansiosa\nA vinda de Jesus.\nCedo esta noite acaba,\nBreve Ele voltará;\nRaia a celeste aurora,\nCristo não tardará!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'A mim Jesus abriu\nSeu grande coração.\nEm Seu amor firmado,\nJá tenho a salvação.'
        },
        {
            id: 311,
            tb: 499,
            selecionado: true,
            estrofe1: 'Oh! Fé que vem de nossos pais!\nÉ grato ouvir a sua voz;\nConosco vive, mais e mais,\nLouvando a Deus, guiando a nós;\nDe nossos pais a santa fé\nNos auxilie a estar de pé!',
            estrofe2: 'Quando em cadeias e prisões\nE quando a espada lampejou,\nA paz desceu aos corações\nE as consciências libertou.\nDe nossos pais sublime fé\nQue nos alente a estar de pé!',
            estrofe3: 'Quem, como filho, desde já\nSeguir seus passos sem temor,\nDe dia em dia encontrará\nMais energia e mais amor.\nDe nossos pais a antiga fé\nAjudará a estar de pé.',
            estrofe4: 'E até a aurora aparecer\nNo dia que não tem igual\nE venha o evangelho ser\nTriunfador de todo o mal,\nPossamos nós, sagrada fé,\nLutar por ti, morrer até!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 312,
            tb: 513,
            selecionado: true,
            estrofe1: 'Oh! que descanso em Jesus encontrei;\nCristo é meu! Cristo é meu!\nOh! que tesouros infindos achei;\nCristo é meu! Cristo é meu!\nQueiram os outros o mundo pra si,\nBusquem riquezas, delícias aqui,\nEscolherei, ó Jesus, sempre a Ti!\nCristo é meu! Cristo é meu!',
            estrofe2: 'Quer na aflição, na doença ou na dor,\nCristo é meu! Cristo é meu!\nGoze eu saúde, perfeito vigor,\nCristo é meu! Cristo é meu!\nSempre ao meu lado, me vem socorrer\nCom Seu amor e infinito poder;\nEm cada transe Ele me quer valer.\nCristo é meu! Cristo é meu!',
            estrofe3: 'No dia amargo da perseguição,\nCristo é meu! Cristo é meu!\nNas duras provas e na tentação,\nCristo é meu! Cristo é meu!\nCristo o pecado no mundo venceu\nQuando por mim no Calvário morreu\nE da vitória a certeza me deu;\nCristo é meu! Cristo é meu!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 313,
            tb: 687,
            selecionado: true,
            estrofe1: 'O que me importa se as nuvens se aproximam,\nO meu Senhor e Mestre cuidará de mim;\nSe a tempestade está tentando confundir-me,\nA salvo sempre estou em Suas mãos.',
            estrofe2: 'Se eu não entendo tantas coisas que se passam,\nEm Deus confio e obedeço à Sua lei.\nA minha fé em Deus é o que supera tudo,\nPois eu seguro estou em Suas mãos.',
            estrofe3: 'A cada dia Deus Se mostra suficiente,\nPois eu entregue a Ele estou e ao Seu querer.\nA cada dia Sua graça é mais presente,\nE vou permanecer em Suas mãos.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Em Suas mãos, em Suas mãos,\nNas mãos de Deus estou por onde for.\nSe há nuvens ao redor,\nSeu trilho é o melhor,\nPois confiante estou nas mãos de Deus.'
        },
        {
            id: 314,
            tb: 339,
            selecionado: true,
            estrofe1: 'Pelo amor de Deus bendito,\nVai tudo bem!\nSeu amor é infinito;\nVai tudo bem!\nEsse amor nos é mostrado\nEm Seu Filho muito amado,\nQue por nós foi imolado.\nVai tudo bem!',
            estrofe2: 'Canta a fé quando há tristeza:\nVai tudo bem!\nCanta, sim, e com firmeza:\nVai tudo bem!\nPois, se Deus é quem nos guia,\nTernamente nos vigia\nCom bondade, noite e dia.\nVai tudo bem!',
            estrofe3: 'Quer na vida, quer na morte,\nVai tudo bem!\nMesmo em tempestade forte,\nVai tudo bem!\nPelo sangue resgatados\nE do mundo separados,\nSempre por Jesus guardados,\nVai tudo bem!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 315,
            tb: 186,
            selecionado: true,
            estrofe1: 'Deus nos dá promessas e cumpre o que diz;\nJamais foi a fé iludida.\nSe as provas são duras e estás infeliz,\nDeus nunca as promessas olvida.',
            estrofe2: 'Quem pede e busca vai sempre obter\nA bênção por Deus garantida,\nJamais foi em vão a Jesus recorrer,\nDeus nunca as promessas olvida.',
            estrofe3: 'Se tremes e gemes na forja da dor,\nDeus dá à tua alma ferida\nConsolo sublime, com voz de amor;\nDeus nunca as promessas olvida.',
            estrofe4: 'Se laços estreitos a morte romper,\nIremos, com fronte erguida,\nNo além, nossos entes queridos rever;\nDeus nunca as promessas olvida.',
            estrofe5: '',
            som: '',
            coro: 'As santas promessas bem firmes estão\nQual rocha no mar desta vida,\nE os que têm fé em breve verão:\nDeus nunca as promessas olvida.'
        },
        {
            id: 316,
            tb: 586,
            selecionado: true,
            estrofe1: 'Em Jesus confiar, Sua lei observar,\nOh! que gozo, que bênção, que paz!\nSatisfeito guardar tudo quanto ordenar,\nAlegria perene nos traz.',
            estrofe2: 'O inimigo falaz e a calúnia mordaz\nO Senhor saberá derrotar.\nNem tristeza, nem dor, nem angústia maior\nPoderão nossa fé abalar.',
            estrofe3: 'Grande prova de amor, comunhão no Senhor\nTem o crente zeloso e leal;\nO Seu rosto mirar é consolo sem par,\nÉ delícia que não tem igual.',
            estrofe4: 'Resolutos, Senhor, e com zelo e fervor,\nOs Teus passos queremos seguir,\nTeus preceitos guardar, o Teu nome exaltar;\nTeu querer temos gosto em cumprir.',
            estrofe5: '',
            som: '',
            coro: 'Crer e observar tudo quanto ordenar;\nO fiel obedece ao que Cristo mandar!'
        },
        {
            id: 317,
            tb: 211,
            selecionado: true,
            estrofe1: 'Se, ao seguir nos passos do meu Mestre,\nO Seu serviço caro me custar,\nSe a escuridão cobrir o meu caminho\nE a minha cruz pesada se tornar...',
            estrofe2: 'Se, ao pregar, as portas se fecharem,\nLembrar-me-ei: de Deus é a missão;\nSeu grande amor jamais será frustrado\nPela maldade ou barras de prisão.',
            estrofe3: 'Se eu chorar perante o sofrimento\nE o meu andar difícil se tornar,\nNão negarei Aquele a quem sigo,\nMas sempre o nome dEle irei honrar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Fiel serei,\nE as novas de amor\nVou sempre proclamar\nAo pecador.'
        },
        {
            id: 318,
            tb: 214,
            selecionado: true,
            estrofe1: 'Aflito e triste coração,\nDeus cuidará de ti;\nPor ti opera a Sua mão,\nQue cuidará de ti.',
            estrofe2: 'Na dor cruel, na provação,\nDeus cuidará de ti;\nSocorro dá e salvação,\nPois cuidará de ti.',
            estrofe3: 'A tua fé Deus quer provar,\nMas cuidará de ti;\nO teu amor quer aumentar,\nE cuidará de ti.',
            estrofe4: 'Nos Seus tesouros tudo tens,\nDeus cuidará de ti;\nTerrestres e celestes bens,\nE cuidará de ti.',
            estrofe5: 'O que é mister te pode dar\nQuem cuidará de ti;\nNos braços Seus te sustentar,\nPois cuidará de ti.',
            som: '',
            coro: 'Deus cuidará de ti,\nEm cada dia proverá;\nSim, cuidará de ti,\nDeus cuidará de ti.'
        },
        {
            id: 319,
            tb: 501,
            selecionado: true,
            estrofe1: 'Em nada ponho a minha fé\nSenão na graça de Jesus,\nNo sacrifício remidor,\nNo sangue do bom Redentor.',
            estrofe2: 'Se a face não Lhe posso ver,\nNa Sua graça vou viver;\nEm cada prova, sem falhar,\nSempre hei de nEle confiar.',
            estrofe3: 'Seu juramento é mui leal,\nAbriga-me no temporal;\nAo vir cercar-me a tentação,\nÉ Cristo a minha salvação.',
            estrofe4: 'Assim que o Seu clarim soar,\nIrei com Ele me encontrar\nE gozarei da redenção\nCom todos que no céu estão.',
            estrofe5: '',
            som: '',
            coro: 'A minha fé e o meu amor\nEstão firmados no Senhor,\nPois rocha firme é o Senhor.'
        },
        {
            id: 320,
            tb: 379,
            selecionado: true,
            estrofe1: 'Doce e rica é a promessa\nDo Salvador Jesus, nosso Rei!\nAo que confia na Sua graça\nEle diz: ―Nunca te deixarei.',
            estrofe2: 'Eu sou teu Deus e para guiar-te\nSempre contigo Eu estarei;\nNão temas, pois bem firme e seguro\nEu pela mão te conduzirei.',
            estrofe3: 'Dei o Meu sangue para remir-te,\nPelo teu nome Eu te chamei;\nMeu para sempre tu és agora,\nE nunca mais Eu te deixarei.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: '―Oh! não temas! Oh! não temas!\nPois Eu contigo sempre estarei;\nOh! não temas! Oh! não temas!\nPorque Eu nunca te deixarei.'
        },
        {
            id: 321,
            tb: 415,
            selecionado: true,
            estrofe1: 'És, ó Cristo, o meu abrigo\nSe em perigo eu andar\nE me inspiras santo alento\nQuando triste me achar.\nEm Teu nome (bis)\nHei de sempre confiar.',
            estrofe2: 'Longo tempo, tão indigno,\nDuvidei do Teu amor\nE não cria, oh! que pena,\nNa palavra do Senhor,\nMas agora        (bis)\nCreio firme em Teu favor.',
            estrofe3: 'Fé gloriosa, vencedora,\nQue combate Satanás,\nFé preciosa que subjuga\nTodo o mal, trazendo paz,\nFé sincera      (bis)\nAo Teu servo sempre dás.',
            estrofe4: 'No conflito com as trevas\nE na rude tentação,\nTeu poder é bom escudo,\nTeu amor, consolação;\nE por isso      (bis)\nTe ofereço gratidão.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 322,
            tb: 190,
            selecionado: true,
            estrofe1: 'Vindo sombras escuras nos caminhos teus,\nOh! jamais desanimes! canta um hino a Deus!\nCada nuvem chuvosa um arco-íris traz\nQuando em teu coração reinar perfeita paz.',
            estrofe2: 'Se o viver é de lutas, cheio de amargor,\nMostra afeto aos aflitos, age em seu favor\nE de tudo o que sofres esquecer-te-ás,\nFruirás gozo e calma se tiveres paz.',
            estrofe3: 'Vem após densa noite a aurora matinal,\nFica o céu mais brilhante após o temporal!\nA esperança não percas, tudo vencerás!\nFugirão as tristezas se tiveres paz.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Se teu coração estiver em paz,\nBem contente e alegre sempre te acharás.\nSe teu coração estiver em paz,\nTu verás que um arco-íris cada nuvem traz.'
        },
        {
            id: 323,
            tb: 157,
            selecionado: true,
            estrofe1: 'Os sinos anunciam que o dia declinou.\nQuem caiu ali, sem força e sem fé?\nSe és tu o peregrino que de Deus se desviou,\nNão desesperes nunca, pois Deus dará mercê.',
            estrofe2: 'A noite se transforma em luz se Deus contigo andar.\nNunca falhará Jesus, teu Salvador.\nCom Cristo ao teu lado, tudo podes enfrentar,\nConfia nEle agora, não fujas do Senhor.',
            estrofe3: 'Jamais se cansarão os que esperam em Jesus,\nDeus lhes dá, aqui, a graça e o vigor;\nDas sombras se erguendo, correm sempre para a luz\nE sobem como as águias, louvando ao Senhor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Não é segredo, Deus dá poder.\nO que deu a outros tu podes ter.\nJesus espera, vem-te render!\nNão é segredo, Deus dá poder.'
        },
        {
            id: 324,
            tb: 219,
            selecionado: true,
            estrofe1: 'Jesus, o bom Pastor,\nSeguiu-me com grande amor\nE do abismo me livrou.\nEle estendeu a mão\nE guiou-me da escuridão\nÀ luz do Seu divino amor.',
            estrofe2: 'Estando com Jesus,\nCercado por Sua luz,\nO mundo perde a atração.\nJamais me importarei\nSe o mundo me desprezar,\nPois Cristo é todo o meu prazer.',
            estrofe3: 'Sei que no santo Lar\nIrei sempre descansar\nE com Jesus lá estarei.\nQual digno vencedor\nAos pés do meu bom Pastor,\nPrazer eterno gozarei.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Querido Salvador,\nO Teu imenso amor\nEnche meu coração\nDe gratidão.\nEu só não posso andar,\nVem-me, Senhor, guiar\nCom Tua santa mão\nÀ celestial mansão.'
        },
        {
            id: 325,
            tb: 510,
            selecionado: true,
            estrofe1: 'Luz celestial, sê na escuridão\nO orientador.\nLonge do Lar estou, tem compaixão\nDe mim, Senhor.\nGuia meus pés, não quero duvidar,\nPois sei que vês o fim do meu lidar.',
            estrofe2: 'Nem sempre Te busquei em oração,\nÓ meu Jesus.\nVivi no mundo e na perdição,\nSem Tua luz.\nNão respeitei as Tuas leis, Senhor,\nIndigno fui do Teu grandioso amor.',
            estrofe3: 'Na aflição e dor, com Teu poder\nGuiar-me-ás.\nNos contratempos fortes do viver,\nÉs minha paz.\nGuarda-me, Deus, na lida terrenal\nAté chegar à pátria celestial.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 326,
            tb: 207,
            selecionado: true,
            estrofe1: 'Mestre, o mar se revolta,\nAs ondas nos dão pavor,\nO céu se reveste de trevas,\nNão temos um Salvador!\nNão vês que estamos morrendo?\nPodes assim dormir,\nSe a cada momento nos vemos\nJá prestes a submergir?',
            estrofe2: 'Mestre, tão grande tristeza\nMe quer hoje consumir,\nE a dor que perturba minha alma\nTe implora: Vem-me acudir!\nDe ondas do mal que me encobrem,\nQuem me fará sair?\nEu pereço, pereço, ó Mestre;\nTe rogo, vem-me acudir!',
            estrofe3: 'Mestre, chegou a bonança,\nEm paz vejo o céu e o mar;\nO meu coração goza calma\nQue não poderá findar.\nFica comigo, ó Mestre,\nDono da terra e céu,\nE assim chegarei bem seguro\nAo porto, destino meu.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'As ondas atendem ao Meu mandar, sossegai!\nSeja o encapelado mar,\nA ira dos homens, o gênio do mal,\nTais águas não podem a nau tragar\nQue leva o Mestre do céu e mar.\nPois todos ouvem o Meu mandar,\nSossegai! Sossegai!\nConvosco estou para vos salvar,\nSossegai!'
        },
        {
            id: 327,
            tb: 566,
            selecionado: true,
            estrofe1: 'No mundo, sozinho não posso andar,\nNa santa vereda não sei caminhar.\nCristo é meu abrigo e quer-me salvar,\nSim, Ele promete jamais me deixar.',
            estrofe2: 'Se é forte o inimigo, mais forte é Jesus,\nEm cada perigo ao porto conduz.\nCom Ele ao meu lado, feliz vou lutar,\nSim, Ele promete jamais me deixar.',
            estrofe3: 'Nas lutas da vida, cruéis aflições,\nNos males do dia e vis tentações,\nMeu terno Amigo me vem libertar,\nSim, Ele promete jamais me deixar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Jamais me deixar, (bis)\nMeu Cristo, o Mestre, promete\nJamais me deixar.\nJamais me deixar, (bis)\nMeu Cristo, o Mestre, promete\nNunca, jamais me deixar.'
        },
        {
            id: 328,
            tb: 312,
            selecionado: true,
            estrofe1: 'Ó bondoso Salvador,\nSê Tu meu amparador!\nGrandes ondas de aflição,\nFortes ventos perto estão.\nDeste espanto e do terror\nVem salvar-me, ó bom Senhor,\nE no porto faze entrar\nMinha barca sem quebrar!',
            estrofe2: 'Consternado nesta dor,\nSem refúgio, sem vigor,\nMeu medroso coração\nClama a Ti por salvação.\nMostra o Teu imenso amor,\nÓ benigno Salvador!\nPoderosa e clara luz,\nNão me deixes, ó Jesus!',
            estrofe3: 'Compassivo Redentor,\nVale a um triste pecador!\nVida e gozo Tu me dás,\nGraça infinda, eterna paz.\nEnche o débil coração\nCom os dons da salvação,\nE, seguro e sem temor,\nGozarei do Teu favor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 329,
            tb: 838,
            selecionado: true,
            estrofe1: 'Tu, Senhor, és meu escudo,\nMeu amparo, minha luz;\nNão receio nem vacilo,\nPois me guardas, ó Jesus.',
            estrofe2: 'Quer aflito, quer prostrado,\nQuer exposto à tentação,\nA vitória tenho certa,\nPois me guia a Tua mão.',
            estrofe3: 'Não me cegam as riquezas\nDeste mundo tão falaz,\nTu me dás o Teu tesouro:\nTua graça, Tua paz.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vai, minha alma, ao teu refúgio,\nConfiando sem cessar\nEm Jesus, minha esperança,\nMinha Rocha secular.'
        },
        {
            id: 330,
            tb: 415,
            selecionado: true,
            estrofe1: 'Vem guiar-me, ó Deus bendito,\nNesta peregrinação;\nTeu poder é infinito, (bis)\nNão me largue a Tua mão! (bis)',
            estrofe2: 'Quando, em meio de inimigos,\nAndo cheio de temor,\nOu por entre mil perigos, (bis)\nVem guiar-me, ó Salvador! (bis)',
            estrofe3: 'Do maná, o pão da vida,\nVem nutrir meu coração;\nGuie a nuvem minha lida (bis)\nNesta imensa solidão! (bis)',
            estrofe4: 'Fende a rocha milagrosa,\nDá-me puro manancial;\nA coluna luminosa (bis)\nSeja sempre o meu fanal. (bis)',
            estrofe5: 'Ao Jordão, enfim, chegado,\nDá-me a Tua mão, Senhor,\nE, seguro, no outro lado, (bis)\nCantarei a Ti louvor! (bis)',
            som: '',
            coro: ''
        },
        {
            id: 331,
            tb: 806,
            selecionado: true,
            estrofe1: 'Conduze-me, ó Mestre, com Tua mão\nE, assim, jamais me falte a proteção!\nNão quero nem um passo sem Ti andar;\nÓ meu Jesus, sê sempre meu luminar.',
            estrofe2: 'Em Tua graça envolve meu coração\nE dá-lhe paz e calma em aflição;\nQue eu tenha em Ti repouso bem junto à cruz\nE nunca me afaste de Ti, Jesus!',
            estrofe3: 'E, mesmo quando a luta tremenda for,\nSeguro hás de guiar-me, meu Redentor!\nConduze-me, ó Mestre, com Tua mão\nE, assim, jamais me falte a proteção.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 332,
            tb: 245,
            selecionado: true,
            estrofe1: 'Eu tenho resolvido\nSeguir-Te até o fim,\nPois Tu, Senhor, prometes\nGuiar-me sempre a mim.\nEu sei que sou mui fraco\nE o bem não sei fazer,\nMas pela Tua graça\nHei sempre de vencer.',
            estrofe2: 'O mundo Tu venceste\nE as suas obras más;\nE sobre tudo reinas,\nÓ Príncipe da Paz.\nNo céu e aqui na terra\nImpera o Teu poder,\nE, pela Tua graça,\nHei sempre de vencer!',
            estrofe3: 'Cercado de inimigos\nAqui no mundo estou;\nAs tentações apertam\nPor onde quer que vou;\nMas Tu estás mais perto,\nPois vens em mim viver,\nE, pela Tua graça,\nHei sempre de vencer!',
            estrofe4: 'A todos que Te seguem\nE tomam sua cruz,\nPrometes que conTigo\nIrão morar, Jesus;\nDescansarão na glória\nConTigo, ó Vencedor,\nPois pela Tua graça\nVenceram, Salvador.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 333,
            tb: 444,
            selecionado: true,
            estrofe1: 'Todos falam dos perigos\nDo caminho em que eu estou,\nMas não vêem a luz que brilha\nEm redor por onde vou.\nVem, ó Deus, guiar-me os passos,\nVem meu trilho iluminar,\nNeste mundo tenebroso\nSó por mim não posso andar.',
            estrofe2: 'Falam mais em desenganos\nE na dura provação,\nMas Jesus ampara sempre\nE me dá consolação.\nSei que meu amor é fraco,\nQue me inclino a tropeçar,\nMas, com Seu divino auxílio,\nHei de sempre triunfar.',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 334,
            tb: 204,
            selecionado: true,
            estrofe1: 'Finda-se este dia que meu Pai me deu,\nSombras vespertinas cobrem já o céu.\nÓ Jesus bendito, se comigo estás,\nEu não temo a noite, vou dormir em paz.',
            estrofe2: 'Com os meus pecados, eu Te entristeci,\nMas perdão Te peço por amor de Ti;\nSou humano e fraco, livra-me do mal,\nE em sossego tenho proteção real.',
            estrofe3: 'Pelos pais e amigos, pela santa lei,\nPelo amor divino, graças Te darei.\nÓ Jesus, aceita minha petição,\nE seguro durmo, sem perturbação.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 335,
            tb: 309,
            selecionado: true,
            estrofe1: 'Guia, Cristo, minha nau\nSobre o agitado mar;\nTão enfurecido e mau,\nQuer fazê-la naufragar.\nVem, Jesus, oh! vem guiar,\nMinha nau vem pilotar!',
            estrofe2: 'Como sabe serenar\nBoa mãe ao filho seu,\nVem, acalma, assim, o mar\nQue se eleva até o céu.\nVem, Jesus, oh! vem guiar,\nMinha nau vem pilotar!',
            estrofe3: 'Se, no porto, quando entrar,\nMais o mar se enfurecer,\nQue me possa deleitar\nEm ouvir Jesus dizer:\n―Entra, pobre viajor,\nNo descanso do Senhor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 336,
            tb: 294,
            selecionado: true,
            estrofe1: 'Guia-me, ó Salvador,\nPela senda divinal,\nAo Teu lado, sem temor,\nTenho gozo perenal!',
            estrofe2: 'Não me deixes, ó Senhor,\nPois, sem Ti, não posso andar;\nLeva-me por Teu amor\nPara o meu eterno Lar.',
            estrofe3: 'És a minha salvação,\nMeu querido Redentor,\nDa terrível corrupção\nMe salvaste com amor.',
            estrofe4: 'Quero Teu somente ser,\nSempre a Ti, Senhor, servir.\nCristo, és todo o meu viver,\nVou conTigo o céu fruir.',
            estrofe5: '',
            som: '',
            coro: 'Cristo, Cristo,\nNão me deixes, ó Senhor!\nGuia-me por Teu amor,\nE serei um vencedor.'
        },
        {
            id: 337,
            tb: 405,
            selecionado: true,
            estrofe1: 'Meu tesouro inestimável,\nMais que a vida, mais que o amor,\nMais que tudo o que conheço\nÉs, Jesus, meu Salvador.',
            estrofe2: 'Por prazer ou por descanso\nNão Te venho suplicar,\nMesmo na mais dura prova\nVou conTigo sempre andar.',
            estrofe3: 'Se o vale for sombrio\nE meu passo vacilar,\nQueira Tua mão divina\nHoje e sempre me guiar.',
            estrofe4: 'Quando, pelas santas portas\nDa feliz Jerusalém,\nEu entrar na Tua glória,\nGozarei o eterno bem.',
            estrofe5: '',
            som: '',
            coro: 'Junto a Ti, junto a Ti, (bis)\nQuero andar conTigo, ó Mestre,\nNa jornada minha aqui.'
        },
        {
            id: 338,
            tb: 378,
            selecionado: true,
            estrofe1: 'Minha cruz eu levo agora,\nQuero a Ti, Jesus, seguir;\nDe hoje em diante a Ti pertenço,\nVenha o que me possa vir.',
            estrofe2: 'Que pereçam vis prazeres,\nBens que tanto desejei;\nMinha herança é mais preciosa,\nSempre a Deus e aos céus terei.',
            estrofe3: 'Perco amigos, casas, honras,\nSofro injúria crucial?\nTudo é grato em Teu serviço,\nTeu amor derrota o mal.',
            estrofe4: 'Tendo a Tua complacência,\nÓ Deus forte e protetor,\nQuer me enganem, quer me odeiem,\nVou lutar por Ti, Senhor!',
            estrofe5: '',
            som: '',
            coro: 'Eu Te seguirei, ó Cristo,\nQue por mim morreste aqui!\nSe do mundo és Tu malquisto,\nNão me importa, eu sigo a Ti.'
        },
        {
            id: 339,
            tb: 830,
            selecionado: true,
            estrofe1: 'Em minha alma hoje brilha o sol/nGlorioso em resplendor,/nMais brilhante que a clara luz/nÉ o brilho de Jesus.',
            estrofe2: 'Em minha alma hoje há canção,\nDoce música ao Rei,\nE Jesus escuta a minha voz,\nA Ele cantarei.',
            estrofe3: 'Em minha alma hoje há prazer,\nFé, amor e gratidão\nPelas bênçãos que Jesus me dá,\nConforto e proteção.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ' Há um sol que brilha em minha alma,\nE eu gozo alegria e paz\nAo ver a terna face de Jesus.\nEm minha alma brilha o sol.'
        },
        {
            id: 340,
            tb: 517,
            selecionado: true,
            estrofe1: 'Comigo habita, ó Deus! a noite vem,\nAs trevas crescem, eis, Senhor, convém\nQue me socorra a Tua proteção;\nOh! vem fazer comigo habitação!',
            estrofe2: 'Vem revelar-Te a mim, Jesus, Senhor,\nDivino Mestre, Rei, Consolador!\nMeu guia forte, amparo em tentação;\nVem, vem fazer comigo habitação!',
            estrofe3: 'Em breve aqui terei meu fim mortal;\nDesaparece o gozo terreal.\nMudança vejo em tudo, e corrupção;\nComigo faze eterna habitação!',
            estrofe4: '\nNão há perigo andando com Jesus,\nPresente está nas trevas ou na luz.\nMorte e sepulcro não aterrarão\nOnde meu Deus fizer habitação.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 341,
            tb: 34,
            selecionado: true,
            estrofe1: 'Cristo, meu Mestre,\nMeu amigo sem igual,\nTu dás descanso,\nSalvação real.\nQuando sou provado,\nPrestes a desfalecer,\nTu, meu Cristo amado,\nVens-me socorrer.',
            estrofe2: 'Só Tu me amparas\nQuando perseguido sou,\nEm Ti, ó Cristo,\nSocorrer-me vou,\nPois em Ti eu posso\nResistir à tentação,\nSim, em Ti obtenho\nForça, paz, perdão.',
            estrofe3: 'Cristo, meu Mestre,\nQue mais gozo posso ter\nQue no Teu reino\nTua glória ver?\nEm Teu seio quero\nMinha fronte reclinar,\nPara ter descanso\nDeste labutar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Cristo, vem mais perto,\nDá-me gozo, paz, perdão!\nPerto, sim, mais perto\nDo meu coração!'
        },
        {
            id: 342,
            tb: 451,
            selecionado: true,
            estrofe1: 'Que bondoso amigo é Cristo!\nRevelou-nos Seu amor\nE nos diz que Lhe entreguemos\nOs cuidados, sem temor.\nFalta ao coração dorido\nGozo, paz, consolação?\nÉ porque não insistimos\nCom Jesus em oração.',
            estrofe2: 'Andas triste e carregado\nDe pesares e de dor?\nA Jesus, refúgio eterno,\nVai, com fé, teu mal expor.\nTeus amigos te desprezam?\nConta-Lhe isso em oração;\nE do Seu amor supremo\nEncherás o coração.',
            estrofe3: 'Cristo é verdadeiro amigo!\nDisso prova nos mostrou,\nPara nos salvar da morte\nSobre a cruz Ele expirou.\nDerramou precioso sangue,\nPara as manchas nos lavar;\nPaz em vida e no futuro\nJá podemos alcançar!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 343,
            tb: 643,
            selecionado: true,
            estrofe1: 'Descansa, ó alma: eis o Senhor ao lado,\nPaciente leva, e sem queixar-te, a cruz.\nDeixa o Senhor tomar de ti cuidado:\nEle não muda, o teu fiel Jesus!\nProssegue, ó alma: o Amigo celestial\nProtegerá teus passos no espinhal.',
            estrofe2: 'Prossegue, ó alma: o trilho é estreito e escuro,\nMas no passado guiou-te Deus assim!\nConfia agora a Ele o teu futuro,\nQue esse mistério há de aclarar-se enfim.\nConfia, ó alma: a Sua mansa voz\nAinda acalma o vento e o mar feroz!',
            estrofe3: 'Confia, ó alma: a hora vem chegando,\nIrás com Cristo, o teu Senhor, morar.\nSem dor nem mágoas gozarás, cantando,\nAs alegrias do celeste Lar.\nDescansa, ó alma: agora há pranto e há dor,\nDepois, o gozo, a paz, o céu de amor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 344,
            tb: 716,
            selecionado: true,
            estrofe1: 'Perfeita paz! Bem além do pensamento.\nPerfeita paz! Que deixou meu Salvador.\nPerfeita paz! Que se estende à eternidade.\nPerfeita paz! Perfeita paz!',
            estrofe2: 'Perfeita paz!   Reina em cada sofrimento.\nPerfeita paz!   Nova em cada amanhecer.\nPerfeita paz!   É o legado do meu Mestre.\nPerfeita paz!   Perfeita paz!',
            estrofe3: 'Perfeita paz! Mesmo em plena tempestade.\nPerfeita paz! Nem o inferno a vencerá.\nPerfeita paz! Pelos tempos, imutável.\nPerfeita paz! Perfeita paz!',
            estrofe4: 'Perfeita paz! Ao levar-me, então, a morte.\nPerfeita paz! Minha tumba envolverá.\nPerfeita paz! Ao chamado da trombeta.\nPerfeita paz! Perfeita paz!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 345,
            tb: 376,
            selecionado: true,
            estrofe1: 'Quero o Salvador comigo,\nSem o qual não posso andar,\nQuero tê-lO sempre perto,\nNo Seu braço descansar.',
            estrofe2: 'Quero o Salvador comigo,\nFraco sou em confiar;\nSua voz me dá o conforto\nQue outra nunca pôde dar.',
            estrofe3: 'Quero o Salvador comigo\nDia a dia, em meu viver,\nNa tristeza ou na alegria,\nNo conflito ou no prazer.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Confiado no Senhor,\nConsolado em Seu amor,\nSeguirei o meu caminho\nSem tristeza e sem temor.\n'
        },
        {
            id: 346,
            tb: 695,
            selecionado: true,
            estrofe1: 'Se paz a mais doce me deres gozar,\nSe dor a mais forte sofrer,\nOh! seja o que for, Tu me fazes saber\nQue feliz com Jesus sempre sou!',
            estrofe2: 'Embora me assalte o cruel Satanás\nE ataque com vis tentações,\nOh! certo estou, apesar de aflições,\nQue feliz eu serei com Jesus!',
            estrofe3: 'Meu triste pecado, por meu Salvador,\nFoi pago de um modo cabal;\nValeu-me o Senhor, oh! mercê sem igual!\nSou feliz! Graças dou a Jesus!',
            estrofe4: 'A vinda eu anseio do meu Salvador,\nVirá conduzir-me ao Lar:\nO céu, onde vou para sempre morar\nCom remidos na luz do Senhor!',
            estrofe5: '',
            som: '',
            coro: 'Sou feliz com Jesus,\nSou feliz com Jesus, meu Senhor!'
        },
        {
            id: 347,
            tb: 217,
            selecionado: true,
            estrofe1: 'Eu sei que há perfeita paz\nJunto ao bondoso Deus;\nNão há pecados e obras más\nJunto ao bondoso Deus.',
            estrofe2: 'Eu sei que há conforto e luz\nJunto ao bondoso Deus;\nEncontro, ali, o meu Jesus,\nJunto ao bondoso Deus.',
            estrofe3: 'Encontro, ali, libertação,\nJunto ao bondoso Deus;\nE tenho paz e salvação\nJunto ao bondoso Deus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Meu Redentor, meu Cristo,\nPão que desceu dos céus,\nSegura-me bem perto\nDo coração de Deus!'
        },
        {
            id: 348,
            tb: 215,
            selecionado: true,
            estrofe1: 'Aos pés de Cristo eu quero estar,\nBenditas horas aí passar,\nA voz divina compreender,      ) bis\nEu quero Cristo comigo ter.    )',
            estrofe2: 'Aos pés de Cristo eu quero estar,\nBenditas horas aí passar,\nA voz divina compreender,      ) bis\nEu quero Cristo comigo ter.    )',
            estrofe3: 'Aos pés de Cristo hão de cessar\nAs aflições e qualquer pesar,\nOs meus problemas sei resolver          ) bis\nSe posso Cristo comigo ter.   )',
            estrofe4: 'Bendito o dia quando me achar\nPerante o trono a adorar,\nVou face a face meu Mestre ver,         ) bis\nPois vou com Cristo no céu viver.       )',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 349,
            tb: 169,
            selecionado: true,
            estrofe1: 'Bem cedo encontro o jardim\nDe orvalho ainda coberto,\nE uma voz a mim vem falando assim:\nMeu filho, estou bem perto!',
            estrofe2: 'Tão doce é a voz do Senhor\nQue os passarinhos se aquietam,\nE em minha alma, então, cheia de emoção,\nA fé e o amor despertam.',
            estrofe3: 'Sim, nesse jardim ficarei,\nMesmo vindo a noite tão densa;\nBem seguro irei, pela mão do Rei,\nAo céu de luz intensa!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Com Jesus desejo permanecer\nE gozar real comunhão;\nDela vem a paz e o poder que traz\nPureza ao meu coração.'
        },
        {
            "id": 350,
            "tb": 190,
            "selecionado": true,
            "estrofe1": "Mais junto, ó Deus, a Ti, mais junto a Ti,\nInda que aflições eu tenha aqui,\nAspiro ao gozo ali, mais junto, ó Deus, a Ti,\nMais junto, ó Deus, a Ti, mais junto a Ti!",
            "estrofe2": "E, quando ao pôr-do-sol, na solidão,\nDormir cansado e só, meu leito o chão,\nVer-me-ei, em sonho, ali, mais junto, ó Deus, a Ti,\nMais junto, ó Deus, a Ti, mais junto a Ti!",
            "estrofe3": "Sejam meus passos, pois, degraus do céu;\nTodas as provações, proveito meu.\nJá Teu amor senti, mais junto, ó Deus, a Ti,\nMais junto, ó Deus, a Ti, mais junto a Ti!",
            "estrofe4": "Pedra em Betel porei, vencida a dor,\nMeus dias encherei com Teu louvor.\nViver, já decidi, mais junto, ó Deus, a Ti,\nMais junto, ó Deus, a Ti, mais junto a Ti!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 351,
            "tb": 444,
            "selecionado": true,
            "estrofe1": "Preciosas são as horas\nNa presença de Jesus,\nComunhão deliciosa\nDa minha alma com a luz!\nOs cuidados deste mundo\nNão me podem abalar,\nPois é Ele o meu abrigo\nQuando o tentador chegar.",
            "estrofe2": "Ao sentir-me rodeado\nDe cuidados terreais,\nIrritado e abatido\nOu em dúvidas fatais,\nA Jesus eu me dirijo\nNesses tempos de aflição,\nAs palavras que Ele fala\nTrazem-me libertação.",
            "estrofe3": "Se confesso meus temores,\nToda a minha imperfeição,\nNele escuta com paciência\nNessa triste confissão;\nCom ternura repreende\nMeu pecado e todo o mal,\nEle é sempre o meu amigo,\nO melhor e mais leal.",
            "estrofe4": "Se quereis saber quão doce\nÉ a divina comunhão,\nPodereis mui bem prová-la\nE tereis compensação;\nProcurai estar sozinhos\nEm conversa com Jesus,\nProvareis na vossa vida\nO poder que vem da cruz.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 352,
            "tb": 629,
            "selecionado": true,
            "estrofe1": "O meu ser se encheu de música, alegria,\nCom a força do Senhor eu vou subir!\nNão há nuvens que me escondam Sua face,\nE por Seu amor eu vou subindo aos céus!",
            "estrofe2": "Cada novo dia quero mais amá-lO,\nCada novo dia vou servi-lO mais;\nCada dia vou subindo mais depressa,\nAlmejando o Lar eterno alcançar.",
            "estrofe3": "Como é bom trazer os outros ao caminho,\nTantos quantos desejarem podem vir;\nPelo amor de Cristo, dado no Calvário,\nOs pecados ninguém deve mais levar!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "*Vou subindo a escada para a glória,\nTendo à frente a coroa da vitória.\nVou subindo pela luz, vou subindo sem parar,\nVou louvar o meu Senhor quando chegar!\nVou subindo a escada para a glória,\nTendo à frente a coroa da vitória.\nVou subindo pela luz, vou subindo sem parar,\nVou louvar o meu Senhor Jesus!"
        },
        {
            "id": 353,
            "tb": 612,
            "selecionado": true,
            "estrofe1": "Em paz com Deus, que inefável\nViver assim, em comunhão,\nLiberto de condenação,\nÉ meu o dom inestimável.",
            "estrofe2": "Em paz com Deus, meu ser se acalma,\nTranqüilo tenho o coração;\nVivo entoando uma canção\nA Cristo, que salvou minha alma.",
            "estrofe3": "Em paz com Deus, por mar bravio\nSeguro irá o meu batel,\nPois sei que Ele é fiel,\nNa Sua direção confio.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Em Cristo achei descanso e paz,**\nA graça celestial me traz\nA paz com Deus, a paz com Deus."
        },
        {
            "id": 354,
            "tb": 391,
            "selecionado": true,
            "estrofe1": "Paz com Deus!, busquei ganhá-la\nCom o mais real fervor,\nSem, contudo, obter descanso\nNem livrar-me do temor.",
            "estrofe2": "Cheio de temor estava\nSem a causa descobrir,\nOra em trevas, ora em luta,\nIgnorando o meu porvir.",
            "estrofe3": "E por fim, em desespero,\nDisse: ―Sem vigor estou!‖,\nE dos céus ouvi resposta:\n―Tudo Cristo consumou!",
            "estrofe4": "Paz bendita nunca muda,\nÉ constante seu valor,\nSim, por Deus é garantida\nA quem busca o Salvador.",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! que paz Jesus me dá,\n\t\t\t\tPaz que outrora não gozei;\n\n\t\t\t\tTudo novo se tornou\n\n\t\t\t\tDesde que essa paz achei."
        },
        {
            "id": 355,
            "tb": 272,
            "selecionado": true,
            "estrofe1": "Quero estar ao pé da cruz,\nDe onde rica fonte\nCorre franca, salutar,\nDe Sião no monte.",
            "estrofe2": "A tremer ao pé da cruz,\nGraça eterna achou-me;\nMatutina Estrela, ali,\nRaios Seus mandou-me.",
            "estrofe3": "Confiante, junto à cruz,\nSem temor vigio,\nPois à pátria santa irei,\nSalvo, além do rio.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Sim, na cruz, sim, na cruz,**\n\t\t\t\t\*\*Sempre me glorio,\*\* \n\n\t\t\t\t\*\*Para, enfim, ir descansar\*\* \n\n\t\t\t\t\*\*Salvo, além do rio.\*\*"
        },
        {
            "id": 356,
            "tb": 668,
            "selecionado": true,
            "estrofe1": "Nunca penses que Deus Se olvidou de ti,\nQue te perdoou só para ser gentil.\nTenhas feito bem ou mal, receberás amor,\nPois Deus não Se escondeu do teu olhar.",
            "estrofe2": "Nunca penses que estás sozinho aqui,\nQue não mais conseguirás viver feliz.\nTua vida tomará, também transformará,\nPois Deus não Se encondeu do teu olhar.",
            "estrofe3": "Nunca penses que não podes mais cumprir\nA vontade do teu amoroso Pai.\nAo teu lado sempre está e quer-te ajudar\nCom Sua rica graça e amor sem par.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Seu amor é sempre igual, conhece o coração,\nNão penses que Ele quer-te abandonar;\nAo teu lado sempre está e quer-te ajudar\nCom Sua rica graça e amor sem par."
        },
        {
            "id": 357,
            "tb": 220,
            "selecionado": true,
            "estrofe1": "Tudo o que eu tenho quero entregar,\nToma a minha vida, o meu caminhar;\nMeus dias, horas, meu louvor,\nA Ti pertencem, meu Senhor!",
            "estrofe2": "Tudo o que eu tenho, hei de confessar,\nVem do Teu amor e graça singular;\nEm gratidão por Teu favor,\nDevolvo tudo a Ti, Senhor!",
            "estrofe3": "Tudo o que eu tenho trago com prazer,\nVem, ó fogo santo, brilha em meu viver,\nEnchendo-me de luz e amor,\nE cumpre o Teu querer, Senhor!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Tudo o que eu tenho,\nTudo o que eu sou,\nMeus talentos, meu amor,\nTudo a Ti eu dou!\nTudo o que eu tenho,\nTudo o que eu sou,\nTudo deixo em Teu altar,\nTudo a Ti eu dou!"
        },
        {
            "id": 358,
            "tb": 246,
            "selecionado": true,
            "estrofe1": "Jesus, Pastor amado,\nReunidos hoje aqui,\nConcede que sejamos\nUm corpo só em Ti.\nContendas e malícias\nQue longe de nós vão,\nNenhum desgosto impeça\nDa Igreja a santa união.",
            "estrofe2": "Família unida somos,\nFamília de Jesus,\nIluminados todos\nDa mesma santa luz.\nA mesma fé nos prende\nNum só divino amor,\nE com o mesmo gozo\nServimos ao Senhor.",
            "estrofe3": "Na mesma senda estreita,\nÉ Deus quem nos conduz;\nNão temos esperança\nSenão num só: Jesus,\nQue pela Sua morte\nA todos vida traz;\nDo Seu precioso sangue\nNos vem a mesma paz.",
            "estrofe4": "Rebanho resgatado\nPor um só Salvador,\nDevemos ser unidos\nPor mais ardente amor,\nHumildes perdoando\nOs erros do irmão\nE todos ajudando\nCom terna compaixão.",
            "estrofe5": "Se Tua Igreja toda\nAndar em santa união,\nEntão será bendito\nO nome de cristão.\nAquilo que pediste\nEm nós se cumprirá,\nE assim o mundo inteiro\nA Ti conhecerá.",
            "som": "",
            "coro": ""
        },
        {
            "id": 359,
            "tb": 165,
            "selecionado": true,
            "estrofe1": "Bendita e santa união\nQue, no fraterno amor,\nA todos sempre, em comunhão,\nNos prende no Senhor.",
            "estrofe2": "Aqui tudo é comum:\nTristezas e prazer;\nEm Cristo somos todos um,\nÉ esse o Seu querer.",
            "estrofe3": "Ao mesmo trono, além,\nVão nossas petições;\nQue desça o amor e a paz também\nAos nossos corações.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 360,
            "tb": 170,
            "selecionado": true,
            "estrofe1": "Que vista amável é\nO intenso e puro amor\nDe irmãos, unidos pela fé,\nLouvando ao Senhor!",
            "estrofe2": "O mundo observará\nTão santa e doce paz\nE, qual perfume, sentirá\nO gozo que ela traz.",
            "estrofe3": "Envia-nos, Jesus,\nDo monte de Sião,\nDivina graça que produz\nPerfeita comunhão.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 361,
            "tb": 331,
            "selecionado": true,
            "estrofe1": "Qual o adorno desta vida?\nÉ o amor. (bis)\nAlegria é concedida\nPelo amor. (bis)\nÉ benigno, é paciente,\nNão se torna maldizente (bis)\nEsse amor. (bis)",
            "estrofe2": "Com suspeitas não se alcança\nVero amor; (bis)\nOnde houver desconfiança,\nAi do amor! (bis)\nDemonstremos lealdade\nUma vez que a falsidade (bis)\nMata o amor. (bis)",
            "estrofe3": "O cristão não é mesquinho\nDesse amor; (bis)\nPois, então, ao teu vizinho\nMostra amor. (bis)\nO supremo Deus nos ama,\nCristo para o céu nos chama, (bis)\nQuanto amor! (bis)",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 362,
            "tb": 202,
            "selecionado": true,
            "estrofe1": "Se da vida as vagas\nProcelosas são,\nSe com desalento\nJulgas tudo vão,\nLembra as muitas bênçãos,\nDize-as duma vez\nE verás surpreso\nQuanto Deus já fez.",
            "estrofe2": "Tens acaso mágoas?\nTriste é teu lidar?\nÉ a cruz pesada\nQue tens de levar?\nConta as muitas bênçãos,\nLogo exultarás\nE, fortalecido,\nTudo vencerás!",
            "estrofe3": "Quando vires outros\nCheios de ouro e bens,\nLembra que tesouros\nPrometidos tens.\nNunca os bens da terra\nPoderão comprar\nA mansão celeste\nQue vais habitar.",
            "estrofe4": "Seja o teu combate\nLongo ou breve aqui,\nNão te desanimes,\nDeus será por ti.\nSeu divino auxílio,\nCorrigindo o mal,\nHá de assegurar-te\nGalardão final.",
            "estrofe5": "",
            "som": "",
            "coro": "Conta as bênçãos, dize quantas são,\nRecebidas da divina mão\nVem contá-las, todas duma vez,\nE verás surpreso\nQuanto Deus já fez."
        },
        {
            "id": 363,
            "tb": 447,
            "selecionado": true,
            "estrofe1": "Graças dou por esta vida,\nPelo bem que me legou.\nGraças pelo meu futuro\nE por tudo o que passou.\nPelas bênçãos derramadas,\nPelo amor, pela aflição,\nPelas graças reveladas,\nPelo gozo do perdão.",
            "estrofe2": "Graças pelo azul celeste\nE por nuvens que há, também,\nPelas rosas do caminho\nE os espinhos que elas têm.\nPela escuridão da noite,\nPela estrela que brilhou,\nPela prece respondida\nE a esperança que falhou.",
            "estrofe3": "Pela cruz e o sofrimento\nE feliz ressurreição,\nPelo amor que é sem medida,\nPela paz no coração.\nPela lágrima vertida,\nTeu consolo que é sem par,\nPelo dom da eterna vida,\nSempre graças hei de dar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 364,
            "tb": 312,
            "selecionado": true,
            "estrofe1": "Por belezas naturais,\nPelo azul do claro céu,1nPor encantos imortais,\nÓ Senhor, ao trono Teu \nSe erguerá, e com fervor,        ) bis\nNossa voz em Teu louvor.         )",
            "estrofe2": "Por amigos e irmãos,\nPela luz do puro amor,\nPor poderem nossas mãos\nTrabalhar em Teu favor,\nSe erguerá, também, Senhor,      ) bis\nNossa voz em Teu louvor.         )",
            "estrofe3": "Por teu grande, santo Dom,\nQue por nós morreu na cruz,\nPelo guia, Mestre bom,\nQue os fiéis ao céu conduz,\nSe erguerá, também, Senhor,      ) bis\nNossa voz em Teu louvor.         )",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 365,
            "tb": 264,
            "selecionado": true,
            "estrofe1": "\nNão deixo a minha Bíblia, pois é de Deus penhor,\nDe todos, o tesouro divino e instrutor.\nÉ lâmpada divina, nas trevas a luzir,\nA voz do amado Cristo que a Si me quer unir.",
            "estrofe2": "Não deixo a minha Bíblia, pois ela é quem me diz\nQue Cristo, o Filho amado, me quer fazer feliz.\nE dá-me, aqui, certeza de um dia ao céu chegar,\nPois Ele, com Seu sangue, me vem purificar.",
            "estrofe3": "―Não deixo a minha Bíblia!‖, assim declararei,\nQue isto seja ouvido: ―Eu amo a Sua lei!‖\nE saiba o mundo inteiro que a cristandade tem\nA fé inabalável que desse livro vem.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 366,
            "tb": 175,
            "selecionado": true,
            "estrofe1": "Minha Bíblia, livro santo, é luz incomparável\nQue do mal as trevas sempre vence, com valor,\nPois, brilhando em meu caminho, torna-o aceitável\nAo meu Deus eterno, meu Deus de amor.",
            "estrofe2": "Quantos tristes, sem alento, jazem combalidos,\nPois a treva do pecado é noite vil, sem luz!\nPor que não levar a Bíblia a esses oprimidos\nSe, por eles, Cristo morreu na cruz?",
            "estrofe3": "Dando à Pátria brasileira esse livro eterno,\nEm progresso, mui feliz, veremos o Brasil,\nPois o livro da verdade, grande bem superno,\nHá de conceder-lhe vitórias mil.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Alegre, reverente, minha Bíblia hei de ler,\nSeguindo seus ensinos, que bênção posso ser!\nÓ livro amado, glorioso, és caminho eficaz\nQue me concede perdão e paz."
        },
        {
            "id": 367,
            "tb": 414,
            "selecionado": true,
            "estrofe1": "Fonte da celeste vida,\nVem, revela o Teu poder!\nVivifica os sem-alento,\nFaze os mortos reviver.\nVida eterna, vida eterna\nVem a todos conceder. (bis)",
            "estrofe2": "Vem abrir Teu santo livro,\nResplandece, ó Luz dos céus!\nAfugenta a todo o engano\nE dos erros livra os Teus!\nIlumina, ilumina\nNossas almas, grande Deus! (bis)",
            "estrofe3": "Pelo estudo da Palavra\nAprendamos de Jesus.\nOh! concede os belos frutos\nQue o ensino Teu produz!\nE gozemos, e gozemos\nAlegria, vida e luz.   (bis)",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 368,
            "tb": 713,
            "selecionado": true,
            "estrofe1": "Enquanto, ó Salvador, Teu livro ler,\nMeus olhos vem abrir, pois quero ver,\nDa mera letra, além, o que, Senhor,\nNos revelaste em Teu imenso amor.",
            "estrofe2": "À beira-mar, Jesus, partiste o pão,\nSatisfazendo ali a multidão;\nDa vida o pão és Tu, vem, pois, assim,\nNutrir-me até entrar no céu, enfim.",
            "estrofe3": "",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 369,
            "tb": 480,
            "selecionado": true,
            "estrofe1": "Abrimos Teu livro, Senhor,\nPedindo divina instrução;\nCom fé, esperança e amor,\nAqui aprendamos         (bis)\nA Tua lição.",
            "estrofe2": "Espírito Santo, eternal,\nDifunde entre nós Tua luz,\nOh! dá-nos o ensino vital,\nA graça excelsa (bis)\nDe nosso Jesus.",
            "estrofe3": "",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 370,
            "tb": 205,
            "selecionado": true,
            "estrofe1": "Eis o estandarte tremulando à luz,\nTendo por divisa: Glória pela cruz!\nPara a santa guerra vos conduzirá:\nSob o Rei divino, quem se alistará?",
            "estrofe2": "Guerra contra as trevas! guerra contra o mal!\nContra o vil pecado, guerra divinal!\nGuerra contra o mundo! nela quem entrar\nHá de, sem reserva, tudo abandonar.",
            "estrofe3": "Tudo soa duro? Receais a cruz?\nVede o exemplo que vos deu Jesus!\nÓ irmãos, lembrai-vos: Quem aqui vencer,\nCristo a coroa vai-lhe conceder.",
            "estrofe4": "Oh! dizei a Cristo: Venho-me render;\nSó por Ti vencido poderei vencer;\nAo morrer conTigo, sempre viverei;\nTua cruz eu tomo, meu bondoso Rei!",
            "estrofe5": "",
            "som": "",
            "coro": "Eis nosso estandarte tremulando à luz!\nLeva por divisa: Glória pela cruz!"
        },
        {
            "id": 371,
            "tb": 570,
            "selecionado": true,
            "estrofe1": "Erguei-vos, cristãos! O clarim já soou!\nÀ guerra vos chama Quem vos libertou.\nOs lombos cingindo, nas armas pegai,\nÀ sombra da cruz, corajosos lutai!",
            "estrofe2": "Se o diabo rugir, que não haja temor!\nSem medo, segui ao bendito Senhor!\nNa santa peleja, ousados entrai!\nÀ sombra da cruz, corajosos lutai!",
            "estrofe3": "As hostes do mal ide já encarar;\nDas mãos do inimigo os cativos livrar!\nValentes, a vossa firmeza mostrai!\nÀ sombra da cruz, corajosos lutai!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Sede heróis (3x)\nE por Cristo lutai!"
        },
        {
            "id": 372,
            "tb": 843,
            "selecionado": true,
            "estrofe1": "Ide ao combate, salvos por Jesus,\nCheios do Espírito, marchai na luz!\nCom a Verdade, sempre trabalhai\nE então triunfai, triunfai!",
            "estrofe2": "Nesta batalha a luta é real,\nE a recompensa é vida eternal,\nPois a coroa Cristo há de dar\nPara quem triunfar, triunfar!",
            "estrofe3": "Perseverantes, nada temereis,\nA vitória certa por Jesus tereis!\nO inimigo sempre afugentai\nE assim triunfai, triunfai!",
            "estrofe4": "Logo o conflito há de terminar\nE o dia da divina paz raiar!\nO inimigo subjugado, sim,\nLá no céu gozarei paz sem fim!",
            "estrofe5": "",
            "som": "",
            "coro": "Seja nosso lema: Triunfar, triunfar!\nSeja nosso lema: Triunfar!\nCom coragem santa e com oração:\nTriunfar, triunfar, triunfar!"
        },
        {
            "id": 373,
            "tb": 732,
            "selecionado": true,
            "estrofe1": "Levantai-vos, ó guerreiros,\nIde ao campo de batalha,\nLuta intensa lá se trava\nContra o tentador!\nJá é hora de acordardes,\nRejeitando a vida fácil;\nVede as multidões em trevas\nSem o Salvador!",
            "estrofe2": "Dai a Cristo, alegremente,\nVosso coração inteiro;\nVossa vida está segura\nSobre o altar.\nQuer usar-vos sabiamente\nPara a salvação do mundo,\nIde, corajosamente,\nTrevas enfrentar!",
            "estrofe3": "Avançai, guerreiros santos,\nNo encalço do inimigo;\nA vitória em Cristo é certa,\nForte é Sua mão!\nInspirai-vos na certeza\nQue almas ganhas nessa luta,\nLibertadas do maligno,\nPaz alcançarão!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Proclamai ao mundo\nO evangelho vivo!\nAo chamado obedecei,\nRodeando a cruz, cantando em tom altivo!\nRevesti-vos da verdade,\nTende fé na eternidade;\nA armadura vos prepara\nCristo, o Vencedor!"
        },
        {
            "id": 374,
            "tb": 661,
            "selecionado": true,
            "estrofe1": "Nós marchamos para aquele bom país\nOnde o salvo, sim, é Cristo quem o diz,\nPara sempre com seu Salvador, feliz,\nVai, por certo, descansar.",
            "estrofe2": "Trabalhemos, pois, com zelo e com vigor,\nConstrangidos pelo Seu imenso amor,\nTrabalhemos pelo nosso Benfeitor\nAté Ele nos chamar!",
            "estrofe3": "Revestidos da couraça de Jesus,\nComo filhos Seus e fiéis à Sua luz,\nGloriando-nos em Cristo e Sua cruz,\nVamos, vamos trabalhar!",
            "estrofe4": "Prossigamos os perdidos a buscar\nE aos desesperados vamos declarar\nQue o Cordeiro pode a todos resgatar,\nEia, vamos trabalhar!",
            "estrofe5": "",
            "som": "",
            "coro": "Acordai! acordai! despertai! despertai!\nExultai! exultai! o Senhor não tardará!\nEis conosco o nosso insigne Capitão,\nQue nos dá segura e eterna salvação!\nEis da santa fé o invicto pavilhão!\nVamos, vamos trabalhar!"
        },

        {
            "id": 375,
            "tb": 644,
            "selecionado": true,
            "estrofe1": "Ao fundo vale com meu Salvador irei,\nOnde, bem segura, Ele traz Sua grei.\nPor qualquer lugar eu seguirei meu Salvador,\nProtegido pelo Seu eterno amor.",
            "estrofe2": "Se meu Senhor aos altos montes me chamar,\nEle me ensina a vigiar e orar.\nHai de sempre ao lado de Jesus permanecer\nE, por Sua graça, todo o mal vencer.",
            "estrofe3": "Se para a guerra meu Senhor me conduzir,\nQuero, sem receio, jubiloso seguir.\nQuem por Cristo agora com valor aqui lutar,\nVai, por certo, em glória, com Jesus reinar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Sempre, sempre seguirei a Cristo!\nAonde quer que Ele for, eu O seguirei!\nSempre, sempre seguirei a Cristo!\nAonde quer que Ele for, segui-lO-ei!"
        },
        {
            "id": 376,
            "tb": 640,
            "selecionado": true,
            "estrofe1": "Castelo forte é nosso Deus,\nEspada e bom escudo;\nCom Seu poder defende os Seus\nEm todo o transe agudo.\nCom fúria pertinaz\nPersegue Satanás,\nCom ânimo cruel;\nAstuto e mui rebel,\nIgual não há na terra.",
            "estrofe2": "A força do homem nada faz,\nSozinho está perdido;\nMas nosso Deus socorro traz\nEm Seu Filho escolhido.\nSabeis quem é? Jesus,\nO que venceu na cruz,\nSenhor dos altos céus;\nE, sendo o próprio Deus,\nTriunfa na batalha.",
            "estrofe3": "Se nos quisessem devorar\nDemônios não contados,\nNão poderiam dominar\nNem ver-nos assustados.\nO príncipe do mal,\nCom seu plano infernal,\nJá condenado está;\nVencido cairá\nPor uma só palavra.",
            "estrofe4": "De Deus o verbo ficará,\nSabemos com certeza,\nE nada nos perturbará\nCom Cristo por defesa.\nSe temos de perder\nFamília, bens, prazer,\nSe tudo se acabar\nE a morte nos chegar,\nCom Ele reinaremos!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 377,
            "tb": 192,
            "selecionado": true,
            "estrofe1": "Ó mocidade, Cristo vos convida\nA construir com Ele um novo mundo;\nNa Sua luta as trevas se dissipam,\nRefulge a glória, Cristo é vitória!",
            "estrofe2": "Cristo padece vendo o mundo enfermo,\nCheio de chagas pelo seu pecado,\nA caminhar, vencido, para o inferno,\nSem esperança, desencorajado.",
            "estrofe3": "Está na hora, o clarim soou,\nVamos à luta, o que importa a morte?\nUm novo mundo espera a cristandade,\nCuja bandeira é fraternidade!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Ó jovens, marchemos\nConfiados no poder do Salvador!\nÓ moços, avante!\nA glória só pertence ao vencedor!"
        },
        {
            "id": 378,
            "tb": 24,
            "selecionado": true,
            "estrofe1": "Um pendão real vos deu Jesus, o Rei,\nA vós, soldados Seus;\nCorajosos, pois, em tudo o defendei,\nMarchando para os céus.",
            "estrofe2": "Eis formados já malignos batalhões\nDo grande usurpador!\nRevelai-vos hoje, bravos campeões,\nNas hostes do Senhor.",
            "estrofe3": "Quem receio sente no seu coração\nE fraco se mostrar\nNão terá jamais o honroso galardão\nQue Cristo lhe quer dar.",
            "estrofe4": "Oh! sejamos todos a Jesus fiéis\nE a Seu real pendão;\nOs que lutam firmes ganham os lauréis,\nCom Ele reinarão.",
            "estrofe5": "",
            "som": "",
            "coro": "Com valor! Sem temor!\nPor Cristo, prontos a sofrer!\nBem alto erguei o Seu pendão,\nFirmes sempre até morrer!"
        }, {
            "id": 379,
            "tb": 62,
            "selecionado": true,
            "estrofe1": "O bom soldado de Jesus\nAtaca o inferno e todo o mal;\nZeloso, firme e fiel,\nDefende altivo o ideal.\nLá, onde o inimigo está,\nPor Cristo sempre lutará:\nEis o seu campo de ação\nOnde proclama a salvação.",
            "estrofe2": "O bom soldado de Jesus\nEnfrenta a triste solidão;\nLutando sempre vencerá\nCom testemunho de cristão!\nAs cargas leva com amor,\nNão volta atrás, não tem temor\nE cumprirá o seu dever,\nSujeito a Deus e ao Seu querer.",
            "estrofe3": "",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Vamos encher o mundo de alegria,\nVamos sorrir e não murmurar,\nVamos cantar de Cristo, noite e dia,\nE o mundo com Jesus transformar!"
        },
        {
            "id": 380,
            "tb": 102,
            "selecionado": true,
            "estrofe1": "Já contemplamos toda a terra\nQue o Senhor dará!\nDeixando esta fase aqui,\nSigamos para lá!",
            "estrofe2": "Herança de bravura temos,\nLutas, dor até.\nDeus quer de todos união,\nRenovação na fé.",
            "estrofe3": "Sejamos fortes, corajosos\nPara avançar;\nEm obediência vamos nós\nA terra conquistar!",
            "estrofe4": "Proezas nEle nós faremos,\nMuros cairão!\nTomemos posse do lugar\nDe todo o coração.",
            "estrofe5": "É nossa a terra, aleluia!\nVamos celebrar!\nComprometidos com Jesus\nIremos continuar!",
            "som": "",
            "coro": "Possuir essa terra pra Jesus:\nTremenda é a visão!\nConosco vem à guerra, já,\nAbraçando a real missão!"
        },
        {
            "id": 381,
            "tb": 171,
            "selecionado": true,
            "estrofe1": "Remidos do Senhor, a Cristo exaltai\nE vosso gozo e santo amor \t\t\t (bis)\nAlegres publicai. \t\t\t(bis)",
            "estrofe2": "Quem nunca O conheceu que deixe de cantar,\nMas nós, por quem Jesus morreu, \t (bis)\nQueremos graças dar. \t\t\t(bis)",
            "estrofe3": "No monte de Sião, prepara-nos Jesus\nPrazeres que supernos são \t\t\t (bis)\nE puros como a luz. \t\t\t\t\t (bis)",
            "estrofe4": "Bem alto desfraldai Seu santo pavilhão\nE jubilosos proclamai \t\t\t\t\t (bis)\nA Sua salvação. \t\t\t\t\t\t (bis)",
            "estrofe5": "",
            "som": "",
            "coro": "Marchemos, marchemos\nPara a cidade celeste.\nMarchemos, avante, cantando,\nÀ bela cidade dos céus."
        },
        {
            "id": 382,
            "tb": 282,
            "selecionado": true,
            "estrofe1": "Salvos, não há descansar!\nNo perigo, alerta estai!\nEsforçai-vos sem cessar,\nVigiai e sempre orai! \t) bis",
            "estrofe2": "Grande turba desleal\nContra vós altiva sai,\nProcurando o vosso mal,\nVigiai e sempre orai! ) bis",
            "estrofe3": "Nunca em vós, pois, confieis!\nArmas divinais tomai,\nDesse modo vencereis,\nVigiai e sempre orai! ) bis",
            "estrofe4": "Muitos reinam já, em paz!\nSeu exemplo contemplai.\nTudo cede à fé audaz,\nVigiai e sempre orai! \t) bis",
            "estrofe5": "Fala sempre o Salvador,\nSeus conselhos escutai!\nTerno e sábio é Seu amor,\nVigiai e sempre orai! \t) bis",
            "som": "",
            "coro": ""
        },
        {
            "id": 383,
            "tb": 635,
            "selecionado": true,
            "estrofe1": "Meu irmão, procura ser\nComo Daniel:\nResoluto em combater\nO usurpador cruel!",
            "estrofe2": "Em coragem singular,\nSegue a Cristo, o Rei,\nSempre ousado em confessar\nJesus e Sua lei!",
            "estrofe3": "Não se turbe o coração,\nLarga a timidez!\nMuitos males cairão\nPerante a intrepidez!",
            "estrofe4": "O soldado do Senhor\nTem, nas trevas, luz;\nMesmo o fraco é vencedor\nEm nome de Jesus!",
            "estrofe5": "",
            "som": "",
            "coro": "Firme e corajoso como Daniel:\nEntre os infiéis, a Cristo sempre sê fiel!"
        },
        {
            "id": 384,
            "tb": 264,
            "selecionado": true,
            "estrofe1": "Avante, avante, ó crentes,\nSoldados de Jesus!\nErguei Seu estandarte,\nLutai por Sua cruz!\nContra hostes inimigas,\nAnte essas multidões,\nO excelso Comandante\nDirige os batalhões.",
            "estrofe2": "Avante, avante, ó crentes,\nPor Cristo pelejai!\nVesti Sua armadura,\nEm Seu poder marchai!\nNo posto sempre achados,\nFiéis permanecei,\nEm meio de perigos\nSegui o grande Rei!",
            "estrofe3": "Avante, avante, ó crentes,\nA passo triunfal!\nHojá há combate horrendo,\nMui cedo a paz final!\nEntão, eternamente,\nBendito o vencedor,\nNo céu glorificado\nCom Cristo, o Salvador!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 385,
            "tb": 508,
            "selecionado": true,
            "estrofe1": "Camaradas, ao Éden marchai,\nEntoando uma nova canção!\nMembros sois de Jesus, avançai\nCom o Exército de Salvação.",
            "estrofe2": "Vencereis todo o mal por Jesus,\nQue aos perdidos mostrou compaixão,\nÉ o Guia, o Poder, clara Luz\nDeste Exército de Salvação.",
            "estrofe3": "O triunfo na luta tereis,\nRecebendo o eternal galardão,\nPois soldados leais vós sereis\nNeste Exército de Salvação.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Avançai! Desfraldai\nO amarelo, o vermelho e o azul!\nAvançai! Pelejai\nNeste mundo, do norte ao sul!"
        },
        {
            "id": 386,
            "tb": 159,
            "selecionado": true,
            "estrofe1": "No Exército de Deus lutamos\nContra todo o mal;\nO campo de batalha\nÉ cidade ou pantanal.\nNão contra a carne a luta é,\nMas contra o pecar;\nSeguindo a Cristo, Rei dos reis,\nIremos batalhar.",
            "estrofe2": "Em toda a língua canta\nEssa hoste do Senhor;\nEm Cristo, o Rei, se une\nToda a classe, raça e cor.\nSeu povo marcha, alegre,\nDesfilando com pendões,\nOu, solitários, lutam\nDerrotando vis paixões.",
            "estrofe3": "Sem força humana o reino vem,\nDivino é seu poder.\nE enfim o amor, a graça\nE a justiça hão de vencer.\nNum monte revelado\nVemos, na escuridão,\nQue a cruz é a espada,\nE essa arma trouxe a salvação.",
            "estrofe4": "Quem luta pelo reino\nUsa armas não-carnais,\nPois elas são forjadas\nPor virtudes celestiais.\nTal como o sol dissipa\nAs trevas com seu resplendor,\nGlorioso, o reino há de vir,\nVencendo pelo amor!",
            "estrofe5": "",
            "som": "",
            "coro": "É impossível resistir\nÀ Espada do Senhor!\nE enfim, na terra, há de vir\nO reino de amor!"
        },
        {
            "id": 387,
            "tb": 785,
            "selecionado": true,
            "estrofe1": "Cheios de alegria, pronto vamos batalhar,\nPelo evangelho o inimigo derrotar,\nCom ardor e zelo, revestidos de poder,\nMarchemos juntos pra glória.",
            "estrofe2": "Salvos pela fé, havemos de perseverar,\nMesmo que o maligno queira sempre intimidar,\nCom valor lutemos, apesar do seu furor,\nMarchemos juntos pra glória.",
            "estrofe3": "Com Jesus à frente, a paz iremos conquistar,\nNovos convertidos almejando recrutar,\nToda a resistência do pecado vai cair,\nMarchemos juntos pra glória.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Marchai, marchai,\nGuerreiros do Senhor!\nLutai, lutai,\nSalvando o pecador.\nA todos proclamai que Cristo é o Salvador,\nO Rei eterno da glória."
        },
        {
            "id": 388,
            "tb": 226,
            "selecionado": true,
            "estrofe1": "De novo a combater por Ti, ó Salvador,\nSoldados Teus e com fervor,\nLutando só por Ti!\nUnidos no dever, estamos nós aqui.",
            "estrofe2": "Reveste-nos de amor, de fé, de intrepidez,\nRemove a nossa timidez,\nNos dá resolução,\nMais força, mais vigor e fraternal união.",
            "estrofe3": "Em nome do Senhor, ergamos o pendão\nDo Exército de Salvação.\nLutemos pela cruz,\nOremos com fervor, soframos por Jesus!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Às armas, pois, e com valor,\nFiéis soldados do Senhor!\nSoldados firmes no Senhor!\nÀs armas, pois, e com valor!"
        },
        {
            "id": 389,
            "tb": 598,
            "selecionado": true,
            "estrofe1": "Eia, avante, na luz de Deus,\nPor Jesus, Salvador e Rei;\nGraça dá aos remidos Seus,\nEia, avante, andai!",
            "estrofe2": "Eia, avante, a proclamar\nA mensagem do Salvador;\nVitoriosos a batalhar,\nEia, avante, andai!",
            "estrofe3": "Eia, avante, com Seu amor\nMuitas almas a redimir;\nNosso Líder é vencedor,\nEia, avante, andai!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Olhai o que Jesus me deu:\nA salvação, perdão e paz;\nDescanso em Seu grande amor\nE alegre sempre estou.\nJesus, para salvar-me,\nSeu sangue derramou,\nBem contente e livre eu estou;\nEm breve Cristo há de voltar\nPara me levar,\nE vou, então, morar no Lar celeste!"
        },
        {
            "id": 390,
            "tb": 210,
            "selecionado": true,
            "estrofe1": "Ó fiéis soldados, salvos por Jesus,\nIde avante: à guerra Cristo vos conduz!\nContra o inimigo vai o General;\nAvançai na luta contra todo o mal.\nIde, pois, soldados, salvos por Jesus, ) bis\nContra o inimigo Cristo vos conduz. \t)",
            "estrofe2": "Oh! cingi os lombos de verdade e luz,\nProtegei o peito pela fé na cruz.\nTende os pés calçados com divina paz,\nPonde a armadura sempre eficaz.\nProntos, ó soldados, salvos por Jesus, \t\t\t ) bis\nContra as potestades Cristo vos conduz. \t\t )",
            "estrofe3": "Sempre avante, ó salvos, nesta vocação\nPelejai constantes, sempre em oração.\nProclamai ao mundo: ―Crê e deixa o mal,\nQuem quiser vitória siga o General!‖\nLestos, pois, soldados, salvos por Jesus; \t\t ) bis\nNesta nobre empresa Cristo vos conduz! \t\t\t )",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 390,
            "tb": 210,
            "selecionado": true,
            "estrofe1": "Ó fiéis soldados, salvos por Jesus,\nIde avante: à guerra Cristo vos conduz!\nContra o inimigo vai o General;\nAvançai na luta contra todo o mal.\nIde, pois, soldados, salvos por Jesus, ) bis\nContra o inimigo Cristo vos conduz. \t)",
            "estrofe2": "Oh! cingi os lombos de verdade e luz,\nProtegei o peito pela fé na cruz.\nTende os pés calçados com divina paz,\nPonde a armadura sempre eficaz.\nProntos, ó soldados, salvos por Jesus, \t\t\t ) bis\nContra as potestades Cristo vos conduz. \t\t )",
            "estrofe3": "Sempre avante, ó salvos, nesta vocação\nPelejai constantes, sempre em oração.\nProclamai ao mundo: ―Crê e deixa o mal,\nQuem quiser vitória siga o General!‖\nLestos, pois, soldados, salvos por Jesus; \t\t ) bis\nNesta nobre empresa Cristo vos conduz! \t\t\t )",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 391,
            "tb": 182,
            "selecionado": true,
            "estrofe1": "Oh! levantai-vos já, soldados de Jesus,\nE fortes sede em Seu poder e em Seu divino amor;\nVitória vos dará na luta pela cruz,\nPois quem confia em Seu poder é mais que vencedor.",
            "estrofe2": "Vinde, sem mais tardar, à luta contra o mal\nE logo sobre vós tomai as armas do Senhor;\nTereis, ao trabalhar, a graça divinal,\nA graça que vos dá o Pai por Cristo, o Salvador.",
            "estrofe3": "Sim, batalhai com fé, vigiando em oração,\nCom vosso Capitão ireis vencer a Satanás;\nEm breve raiará a eterna redenção,\nE juntos com Jesus tereis um Lar de eterna paz.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 392,
            "tb": 651,
            "selecionado": true,
            "estrofe1": "Quando li de heróis da fé\nQue morreram por Jesus\nE a coroa receberam,\nProntamente decidi:\nBom soldado quero ser\nComo aqueles que venceram.",
            "estrofe2": "Tais heróis quero imitar\nE a mesma espada usar\nPara atacar o inimigo;\nNovo nome hei de ganhar\nE qual vencedor entrar\nNo reino eterno, lá na glória.",
            "estrofe3": "Queres nesta luta entrar\nE o inimigo derrotar\nCom o exército de Cristo?\nEle chama a guerrear,\nVem, ocupa o teu lugar\nJunto a milhares de remidos.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Vestindo a armadura à luta irei;\nFiel, decidido, por Cristo serei,\nE, onde quer que me encontrar,\nO inimigo cairá,\nPois por Jesus estou lutando."
        },
        {
            "id": 393,
            "tb": 210,
            "selecionado": true,
            "estrofe1": "Quem está ao lado do bom Salvador,\nPronto a dedicar-se hoje ao seu Senhor,\nTudo abandonando e a Jesus seguir,\nEncarando tudo quanto possa vir?",
            "estrofe2": "Não ambicionando glórias ou poder,\nNos erguemos firmes para combater;\nQuem o amor de Cristo chega a ver na cruz\nHá de achar-se ao lado do Senhor Jesus.",
            "estrofe3": "Não com ouro ou prata, Deus nos quis remir,\nMas, por nós, Seu Filho veio a lei cumprir,\nCom precioso sangue, sangue expiador,\nSomos resgatados pelo Seu amor.",
            "estrofe4": "Nos conflitos duros hemos de vencer,\nForte inimigo não nos faz temer,\nPois o Onipotente, Cristo, o Rei dos reis,\nDá triunfo certo para os Seus fiéis!",
            "estrofe5": "",
            "som": "",
            "coro": "Quem de Cristo ao lado\nSempre quer andar?\nQuem quer outras almas\nA Jesus chamar?\n―Pela Tua graça, pelo Teu amor,\nEis-nos ao Teu lado, somos Teus, Senhor!‖"
        },
        {
            "id": 394,
            "tb": 201,
            "selecionado": true,
            "estrofe1": "Cristo vive e vencerá\nSempre, aleluia!\nO inimigo quer tragar\nQuem por Cristo luta.\nMas, se é forte o tentador,\nMais potente é o Salvador.\nCristo vive e vencerá\nSempre, aleluia!",
            "estrofe2": "Na batalha mais cruel,\nCristo é vitorioso,\nE com Ele o fiel\nVence corajoso.\nSob o divinal pendão,\nVem lutar com decisão.\nCristo vive e vencerá\nSempre, aleluia!",
            "estrofe3": "Se a guerra dura for,\nNunca desanimes!\nDeus socorre ao lutador,\nFaz seus passos firmes.\nO Cordeiro divinal\nDá triunfo sobre o mal.\nCristo vive e vencerá\nSempre, aleluia!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 395,
            "tb": 706,
            "selecionado": true,
            "estrofe1": "Sou feliz, vitorioso ao lado de Cristo,\nAleluia! Sou feliz no Exército de Deus.\nCantarei, ao Senhor, meu louvor de gratidão,\nCom Jesus viverei, tenho paz no coração.\nSalvo estou do mal, sei que vou morar\nJunto com Jesus, no celeste Lar;\nAgora e sempre hei de batalhar\nNas fileiras do Senhor!",
            "estrofe2": "Sou feliz, vitorioso ao lado de Cristo,\nAleluia! Sou feliz no Exército de Deus.\nProclamai, sem cessar, novas de libertação;\nEm Jesus, Salvador, há vitória e perdão!\nImprimi bem forte no coração:\n―Sangue e fogo‖, o lema do pavilhão!\nCom harmonia e percussão,\nLouvai ao Redentor!",
            "estrofe3": "Sou feliz, vitorioso ao lado de Cristo,\nAleluia! Sou feliz no Exército de Deus.\nEncontrei salvação, santidade e poder,\nTodo o mal terrenal com Jesus eu vou vencer.\nPelo fogo, sim, do Consolador,\nRefletindo o brilho do Seu amor,\nEu vou viver pelo meu Senhor,\nEm glória triunfal!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Sou feliz, vitorioso ao lado de Cristo,\nAleluia! Sou feliz, sou soldado de Jesus."
        },
        {
            "id": 396,
            "tb": 193,
            "selecionado": true,
            "estrofe1": "Firmes, soldados, a lutar, sem desanimar;\nGlória eterna e o céu terá o que triunfar.\nTodo o pranto e gemido Cristo apagará.\nGozareis a recompensa ao chegardes lá!",
            "estrofe2": "Quando a luta dura for, Deus ajudará!\nSempre lutai, pois, com fervor, força em Cristo há.\nNão temais, cumpri os votos feitos a Jesus,\nObtereis o grande prêmio por levar a cruz.",
            "estrofe3": "Se Satanás insinuar que inútil é\nTodo o esforço ao lutar, oh! mantende a fé!\nSob o pavilhão lutai sem desfalecer,\nProsseguindo no combate, prontos a vencer.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Se andarmos com Jesus nesta vida cá,\nObteremos a coroa ao chegarmos lá!"
        },
        {
            "id": 397,
            "tb": 199,
            "selecionado": true,
            "estrofe1": "Pelos valados e ruas entrai\nEm busca do pecador.\nOs aleijados e os coxos trazei,\nÉ o que nos manda o Senhor.",
            "estrofe2": "A apostasia campeia ao redor,\nO amor parece esfriar;\nFixando os olhos em Cristo Jesus,\nHavemos de triunfar!",
            "estrofe3": "Lembrai-vos bem: sois da terra o sal,\nCuidado com a insipidez,\nGuardai a fé, bem vivo o fervor,\nSenão pisados sereis!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Soldados de Jesus Cristo,\nAvante com fé e amor!\nO mundo esperançado\nContempla o vosso fervor.\nTomai de Deus a armadura\nPara resistir ao mal,\nNão vos desvieis da visão celestial!"
        },
        {
            "id": 398,
            "tb": 841,
            "selecionado": true,
            "estrofe1": "Triunfantes marcharemos,\nCom firmeza e valor,\nPara derrotar as hostes\nInimigas do Senhor.\nCristo é o Capitão\nDeste exército glorioso;\nO soldado, em oração,\nNunca foge ao perigo.",
            "estrofe2": "Triunfantes marcharemos,\nConduzidos por Jesus,\nCom fervor proclamaremos\nA mensagem da Sua luz.\nQuando cheio de furor\nNos ataca o inimigo,\nCom a espada do Senhor\nSempre havemos de vencê-lo.",
            "estrofe3": "Triunfantes marcharemos,\nOs perdidos a buscar,\nA Jesus os levaremos,\nPois os ama e quer perdoar.\nDeus dará o galardão\nA quem for vitorioso\nE, no céu, real mansão\nJunto com os redimidos!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Não cedamos, avancemos\nSob o estandarte da cruz;\nA vitória ganharemos com Jesus.\nSou vencedor, pelo sangue do Cordeiro,\nSou vencedor, pela Sua cruz!"
        },
        {
            "id": 399,
            "tb": 776,
            "selecionado": true,
            "estrofe1": "Vinde conosco por Cristo a lutar,\nO inimigo vencido será;\nDeus vem conosco, bendita união.\nAvante, pois, Exército de Salvação.",
            "estrofe2": "Vinde conosco perdidos buscar,\nCristo morreu para o ímpio salvar;\nTodo o inferno se opõe qual leão.\nAvante, pois, Exército de Salvação.",
            "estrofe3": "Vinde conosco, convida Jesus,\nNão demoreis em levar Sua cruz;\nSempre na luta com dedicação,\nAvante, pois, Exército de Salvação.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Triunfarão! Triunfarão!\nAs armas divinas vitórias terão.\nInvicta hoste é a de Sião.\nAvante, pois, Exército de Salvação."
        },
        {
            "id": 400,
            "tb": 382,
            "selecionado": true,
            "estrofe1": "Vou marchando para a glória,\nSou soldado de Jesus.\nVinde ouvir a doce história\nDos que andam nessa luz.",
            "estrofe2": "Vou contar o que me leva\nA lutar com devoção:\nÉ o grande amor de Cristo\nQue me dá motivação.",
            "estrofe3": "Quando comecei a luta,\nO inimigo me tentou,\nCrendo que eu desistiria,\nMas na luta inda estou.",
            "estrofe4": "Ao findar a minha vida,\nHaverá canção no céu,\nE irei, como um guerreiro,\nReceber o meu troféu.",
            "estrofe5": "",
            "som": "",
            "coro": "Amo a Cristo, aleluia!\nAmo a Jesus Cristo, sim.\nSalvador maravilhoso,\nSua vida deu por mim."
        },
        {
            "id": 401,
            "tb": 344,
            "selecionado": true,
            "estrofe1": "Camaradas, a divisa\nMostra-se nos céus!\nA vitória está segura,\nQuem socorre é Deus!",
            "estrofe2": "Nas batalhas, poderoso,\nVem o General,\nCom bandeira flutuando,\nSempre triunfal!",
            "estrofe3": "A peleja é dura e intensa?\nCedo findará!\nEia! avante, camaradas!\nCristo perto está.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Guarda o forte! Em breve Eu venho!,\nDiz o Salvador.\nRespondamos: ―Venceremos\nSó por Teu amor!‖"
        },
        {
            "id": 402,
            "tb": 175,
            "selecionado": true,
            "estrofe1": "Os soldados se preparam para a batalha,\nÉ Jesus, o Mestre, que à luta os levará;\nA milícia dos remidos marcha resoluta,\nCerta que a vitória alcançará.",
            "estrofe2": "Eis os batalhões de Cristo, prosseguindo avante,\nNão os vês, com que valor combatem contra o mal?\nPodes tu ficar dormindo, mesmo vacilante,\nFrente a esta guerra universal?",
            "estrofe3": "Dá-te pressa, não vaciles, hoje Deus te chama,\nPara que pelejes sempre ao lado do Senhor;\nEntra no combate onde mais o fogo inflama\nE guerreia contra o tentador.",
            "estrofe4": "A peleja é intensa, torna-se renhida,\nMas são poucos os soldados para batalhar;\nOh! vem libertar as almas tristes e sem vida,\nDe quem, furioso, as quer tragar.",
            "estrofe5": "",
            "som": "",
            "coro": "Em som de guerra, vamos\nSalvação a proclamar,\nA obra redentora\nDe Cristo anunciar.\nOh! quão preciosa é a nova\nQue nós temos de espalhar:\nQue Jesus Cristo nos quer salvar!"
        },
        {
            "id": 403,
            "tb": 22,
            "selecionado": true,
            "estrofe1": "O Salvador nos chama para combater;\nOuvi o som do divinal clarim!\nO Rei dos céus quer ensinar-nos a vencer\nE ficará conosco até o fim!",
            "estrofe2": "A combater, soldados bravos e leais,\nAcompanhai o vosso Capitão!\nSem vacilar, pegai nas armas divinais,\nPois Deus nos dá a Sua proteção!",
            "estrofe3": "A combater até sairmos triunfais\nEm nossa luta contra todo o mal!\nJesus nos dá, depois, as honras eternais\nE o galardão no reino celestial!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Avante, pois, salvacionistas!\nOh! desfraldai o pavilhão\nAzul, vermelho\nE amarelo,\nAugusto emblema do perdão.\nNós não queremos fatalistas\nNa hoste santa do Senhor,\nMas, sim, soldados\nEntusiasmados,\nQue vão à luta sem temor!"
        },
        {
            "id": 404,
            "tb": 210,
            "selecionado": true,
            "estrofe1": "Pela fé batalhando os soldados\nDo Exército de Salvação,\nCom ardor a Jesus devotados,\nEste mundo ao Senhor levarão.\nDesde o sul aos extremos do norte,\nEste canto jamais cessará:\n―Deus perdoa e Seu braço é forte;\nPecador, salvação Cristo dá!",
            "estrofe2": "Eis a pátria em grande perigo,\nMilhares se perdem no mal;\nSó Jesus é a rocha e o abrigo\nNo fragor do maior temporal.\nOnde impera o vício e o crime,\nO pendão ―Sangue e Fogo‖ exporá\nA mensagem tão bela e sublime:\n―Pecador, salvação Cristo dá!",
            "estrofe3": "Com amor inflamado e desvelo,\nIde sempre os piores buscar.\nNunca falte em vós esse zelo\nPara em tudo o Mestre honrar.\nOh! que nunca a milícia deixemos,\nAo fiel o Senhor exaltará,\nE que sempre esta nova anunciemos:\n―Pecador, salvação Cristo dá!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "―Oh! sim, salvação Cristo dá! (bis)\nPor ti foi na cruz levantado,\nPecador, salvação Cristo dá!‖"
        },
        {
            "id": 405,
            "tb": 794,
            "selecionado": true,
            "estrofe1": "Moços, declarai guerra contra o mal,\nExaltai a cruz do Senhor.\nFirmes, empunhai armas não carnais,\nSempre confiando em Seu amor.",
            "estrofe2": "Moços, prossegui, fortes vos tornais\nSe o valor da fé conheceis!\nTremulante em luz, vede o Seu guião,\nGarantia de que vencereis.",
            "estrofe3": "Deus, o vosso Pai, mostra o Seu favor\nE na guerra vos faz vencer,\nTriunfar-vos faz do inimigo aqui\nE a coroa eterna receber!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Todos juntos ao redor da cruz,\nProntos, lestos, escutai-Lhe a voz:\n―Ide avante! sim, marchai!‖ Hosanas!\nCristo é quem ordena a todos nós."
        },
        {
            "id": 406,
            "tb": 385,
            "selecionado": true,
            "estrofe1": "Eia, avante, ó soldados!\nVamos a Jesus servir;\nA peleja é gloriosa,\nDeus nos há de dirigir.\nEia, avante, ó camaradas!\nDe olhos postos em Jesus;\nCaminhemos, destemidos,\nE avancemos para a luz!",
            "estrofe2": "Eia, avante, ó soldados!\nNunca, nunca atrás voltar;\nSó há um, um só caminho,\nVamos, juntos, avançar!\nEia, avante, camaradas!\nSoem como um clarim\nAs palavras do convite:\n―Vinde, todos, vinde a Mim!‖",
            "estrofe3": "Eia, avante, ó soldados!\nConfiando no Senhor;\nOnde há fé, ninguém vacila;\nHaja vida, luz, vigor!\nEia, avante, camaradas!\nSempre unidos a lutar,\nSempre unidos na esperança,\nSempre unidos a avançar!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Por Jesus, com zelo santo,\nVinde, todos, combater!\nA bandeira do evangelho\nDefendei até morrer!\nPor Jesus, com zelo santo,\nVinde, todos, combater!\nA bandeira do evangelho\nDefendei até morrer!"
        },
        {
            "id": 407,
            "tb": 202,
            "selecionado": true,
            "estrofe1": "Busquei por longo tempo,\nAnsioso, o Seu perdão;\nEntão, clamando a Cristo,\nGanhei a salvação!",
            "estrofe2": "Preguemos aos vizinhos\nE amigos sem a luz\nO evangelho vivo\nDa graça de Jesus.",
            "estrofe3": "",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Do alto das montanhas,\nSobre os telhados, anunciemos\nEm todos os lugares\nQue Cristo quer salvar!"
        },
        {
            "id": 408,
            "tb": 179,
            "selecionado": true,
            "estrofe1": "Dá o melhor para o Mestre,\nDá tua força e valor,\nPõe o vigor de tua alma\nÀs ordens do teu Senhor.\nCristo Jesus deu o exemplo\nDe fortaleza e vigor;\nDá-Lhe teu zelo em dobro,\nDá-Lhe de tudo o melhor!",
            "estrofe2": "Dá o melhor para o Mestre,\nAbre-Lhe teu coração,\nAo Seu serviço consagra\nInteira dedicação.\nDá, pois, e te será dado,\n- Deus deu Seu Filho co’amor -\nGrato e fiel em servi-lO,\nDá-Lhe de tudo o melhor!",
            "estrofe3": "Dá o melhor para o Mestre,\nBem pequenino é o favor\nA Quem só por teu resgate\nMorreu como um malfeitor.\nPor esse Seu sacrifício,\nFeito por ti, pecador,\nDá-Lhe louvores sinceros,\nDá-Lhe de tudo o melhor!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Dá o melhor para o Mestre,\nDá tua força e valor,\nVeste a armadura celeste\nÀs ordens do teu Senhor."
        },
        {
            "id": 409,
            "tb": 16,
            "selecionado": true,
            "estrofe1": "Eu quero trabalhar por meu Senhor,\nLevando a palavra com amor,\nQuero de Jesus falar,\nO evangelho espalhar\nNa seara do Senhor.",
            "estrofe2": "Eu quero cada dia trabalhar,\nEscravos do pecado libertar,\nConduzi-los a Jesus,\nNosso Guia, nossa Luz,\nNa seara do Senhor.",
            "estrofe3": "Eu quero ser obreiro de valor,\nConfiando no poder do Salvador;\nSe quiseres trabalhar,\nAcharás também lugar\nNa seara do Senhor.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Trabalhai e orai\nNa seara, na seara do Senhor!\nMeu desejo é orar\nE por Cristo trabalhar\nNa seara do Senhor."
        },
        {
            "id": 410,
            "tb": 25,
            "selecionado": true,
            "estrofe1": "Mãos ao trabalho, crentes,\nCom incessante ardor;\nVamos enquanto temos\nNossa vida em flor.\nVamos, enquanto é dia,\nCom força trabalhar,\nPois, quando chega a noite,\nJá não há lidar.",
            "estrofe2": "Mãos ao trabalho, crentes,\nAntes que fuja a luz;\nTemos agora tempo\nDe servir Jesus.\nVamos à Sua causa\nHojé nos dedicar,\nPois, quando chega a noite,\nJá não há lidar.",
            "estrofe3": "Mãos ao trabalho, crentes,\nVem já o anoitecer,\nFirmes enquanto a morte\nNão nos surpreender.\nVamos, irmãos, à obra,\nPor Cristo trabalhar,\nPois, quando chega a noite,\nVamos descansar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 411,
            "tb": 485,
            "selecionado": true,
            "estrofe1": "Eu vou no poder do Senhor\nPor sendas que Ele marcou;\nA Sua Palavra é luz\nQue brilha à frente, aonde vou.\nMeus passos não vacilarão,\nE tudo me há de suprir;\nEnquanto viver vou lutar\nAté o meu alvo atingir.",
            "estrofe2": "Eu vou no poder do Senhor.\nCumprindo o santo dever,\nRenova-se em mim o vigor\nE aumenta a alegria em meu ser.\nRecuso-me a olhar para trás,\nO medo não vou conhecer.\nSó nEle há graça e paz.\nDe males me irá proteger.",
            "estrofe3": "Eu vou no poder do Senhor\nA grande batalha enfrentar,\nCom zelo, coragem e fé\nBastante pra me amparar.\nÀ voz de comando, fiel,\nCom a luz vou as trevas ferir.\nSofrendo ou sorrindo, irei\nA Sua vontade cumprir!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Eu vou no poder do Senhor. (4x)"
        },
        {
            "id": 412,
            "tb": 542,
            "selecionado": true,
            "estrofe1": "Povo de Deus, cumpri o vosso encargo\nDe proclamar, do nosso Deus, o amor!\nPois Ele, compassivo, não deseja\nA perdição do pobre pecador!",
            "estrofe2": "Oh! contemplai milhares que perecem\nPresos nas garras do pecado e mal,\nSem que haja quem, com pena, lhes indique\nCristo Jesus, libertador real!",
            "estrofe3": "Não consintais que fiquem desgarradas\nAs almas pelas quais Jesus sofreu;\nHaja cuidado que ninguém se perca\nPelo descuido da ordem que nos deu!",
            "estrofe4": "Disseminai entre as nações e tribos\nQue o nosso Deus é o Deus do eterno amor,\nQue Ele deixou as glórias infinitas\nPara salvar o mundo pecador.",
            "estrofe5": "Ei-lO que vem! Mas antes dessa vinda\nApregoai a graça e Seu amor!\nQue estejam prontos todos os remidos\nPara aclamá-lO: Cristo! Redentor!",
            "som": "",
            "coro": "As boas novas anunciai!\nQue Deus nos ama, contentes proclamai! (bis)"
        },
        {
            "id": 413,
            "tb": 204,
            "selecionado": true,
            "estrofe1": "Eis os milhões que, em trevas tão medonhas,\nJazem perdidos sem o Salvador!\nQuem, quem irá as novas proclamando\nQue Deus, em Cristo, salva o pecador?",
            "estrofe2": "Portas abertas eis por todo o mundo!\nCristãos, erguei-vos! Já avante andai!\nCrentes em Cristo, uni as vossas forças,\nDa escravidão os povos libertai.",
            "estrofe3": "―Oh! vinde a Mim!‖, a voz divina clama;\n―Vinde!‖, clamai em nome de Jesus;\nPra nos salvar da maldição eterna,\nSeu sangue derramou por nós na cruz.",
            "estrofe4": "Ó Deus, apressa o dia glorioso\nEm que os remidos, todos, se unirão\nE em coro excelso, santo, jubiloso,\nPra todo o sempre glória a Ti darão!",
            "estrofe5": "",
            "som": "",
            "coro": "―Todo o poder o Pai Me deu\nNa terra como lá no céu!\nIde, pois, anunciar o evangelho,\nE eis-Me convosco sempre!‖"
        },
        {
            "id": 414,
            "tb": 548,
            "selecionado": true,
            "estrofe1": "Mais uma vez, em contagiante graça,\nNos reunimos para dar louvor.\nConstantemente a luz de Cristo emana,\nMostrando-nos o caminhar de amor.",
            "estrofe2": "Queremos ver a redenção completa,\nO Seu triunfo traz inspiração.\nEm oração seguimos Seu caminho,\nSubmissos à celestial visão.",
            "estrofe3": "Estende a mão, Senhor, fazendo o povo\nEstremecer ante o viver em luz.\nRevelações maiores nos concede\nDo Teu poder, agora, ó Jesus!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Salvacionista,\nVá proclamar:\nCristo o mal venceu\nE sempre vai reinar."
        },
        {
            "id": 415,
            "tb": 176,
            "selecionado": true,
            "estrofe1": "Conta a história tão doce e real:\nQuanto nos ama o Senhor.\nOutros crerão se puderes mostrar\nNo teu viver esse amor.",
            "estrofe2": "Pelos caminhos escuros estão\nMuitos ansiando por paz;\nLeva o brilho da luz de Jesus,\nMostra o calor que Ele traz!",
            "estrofe3": "Lembra o estado em que Cristo te achou\nQuando te deu Seu perdão.\nSê um amigo a quem precisar\nDessa real salvação.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Faze-me bênção, faze-me bênção,\nCristo brilhando em meu andar.\nFaze-me bênção, eis minha oração,\nFaze-me bênção a quem encontrar."
        },
        {
            "id": 416,
            "tb": 540,
            "selecionado": true,
            "estrofe1": "O Filho de Deus veio para salvar\nAs almas perdidas no mal.\nAmor impeliu-O ao mundo baixar,\nFiel ao desígnio divinal.\nSoldados valentes precisa Jesus,\nObreiros que tenham valor,\nQue salvem as almas e levem a luz\nDe Cristo ao vil pecador.",
            "estrofe2": "O povo, sem Deus, se afasta do bem\nE muitos vão à perdição.\nNão há quem lhes fale da senda do além,\nDa vida, da paz, do perdão.\nGuerreiros audazes precisa o Senhor,\nQue cheios de santa paixão\nSe lancem na luta com todo o ardor,\nEntregues a Deus, sem condição.",
            "estrofe3": "A ciência jamais poderá inventar\nRemédio que cure o mal\nDa alma ferida de muito pecar,\nSedenta de paz celestial.\nDerrama em mim o Teu santo amor!\nTeu servo fiel hei de ser\nEm todos os tempos; com grande fervor,\nPor Ti vou lutar até morrer.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Se eu não tiver compaixão,\nEnchendo meu ser do Teu amor,\nJamais poderei os perdidos amar\nAssim como Tu, meu Salvador.\n\nDesperta em mim compaixão\nE o mesmo amor do Senhor.\nQue em toda a palavra e em toda a ação\nProcure salvar o pecador."
        },
        {
            "id": 417,
            "tb": 546,
            "selecionado": true,
            "estrofe1": "O que fazer num mundo de tristezas?\nA esperança - como a restaurar?\nOnde estou, palavras de conforto\nDo evangelho hei de anunciar.",
            "estrofe2": "O que fazer perante tantas dores?\nA humanidade - como a aliviar?\nOnde estou, aos homens carregados\nEstenderei a mão pra ajudar.",
            "estrofe3": "O que fazer de minha vida inútil,\nJustificando meu lugar aqui?\nDe mim farei Teu porta-voz, ó Cristo,\nUngido vou, obediente a Ti.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Onde Tu queres, Senhor, meu Mestre,\nÉ meu desejo sempre estar.\nSou Teu somente e alegremente\nVou sempre Te amar."
        },
        {
            "id": 418,
            "tb": 178,
            "selecionado": true,
            "estrofe1": "Quero ser um vaso de bênção,\nSim, um vaso escolhido por Deus\nPara as novas levar aos perdidos,\nBoas novas que vêm lá dos céus.",
            "estrofe2": "Quero ser um vaso de bênção,\nPara todos os dias fazer\nOs culpados, que vivem nas trevas,\nO perdão de Jesus conhecer.",
            "estrofe3": "Quero ser um vaso de bênção,\nSim, um vaso de bênção sem par,\nAnunciando que os crentes em Cristo\nJubilosos no céu hão de entrar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Faze-me vaso de bênção, Senhor,\nVaso que leve a mensagem de amor!\nEis-me submisso:\nAo Teu serviço\nEu me consagro, bendito Senhor!"
        },
        {
            "id": 419,
            "tb": 199,
            "selecionado": true,
            "estrofe1": "Tu, Jesus bondoso, resgataste a mim,\nE dos meus pecados livre estou, enfim;\nHojé e para sempre sirvo a Ti, meu Rei,\nObedeço e amo Tua santa lei.",
            "estrofe2": "Nos conflitos rudes, faze-me fiel;\nQue seguro, à praia, chegue o meu batel.\nAlmas preciosas quero aqui buscar;\nPossam, por Teu sangue, puras se tornar!",
            "estrofe3": "Nesta empresa santa vou-me ocupar,\nLuz e liberdade quero espalhar;\nSó com Teu auxílio isso eu farei;\nCai o inimigo. Glória a Ti, meu Rei!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Sim, meu ser inteiro quero a Ti dedicar\nE os pecadores a Teus pés levar."
        },
        {
            "id": 420,
            "tb": 775,
            "selecionado": true,
            "estrofe1": "Ama o teu próximo, busca o perdido,\nLeva a mensagem de luz e amor;\nServe com compaixão, nutre o faminto,\nConta a história do terno Senhor.",
            "estrofe2": "Dentro do coração, triste e abatido,\nSurge o anelo de paz e perdão;\nCom terno e doce amor, Cristo o chama\nPara salvá-lo da vil perdição.",
            "estrofe3": "Cumpre o teu dever junto ao caído,\nDá-lhe esperança em Cristo Jesus;\nGuia o pecador arrependido\nPelo caminho divino da cruz.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Ama o incrédulo, ganha sua alma,\nDeus o aceitará, o salvará!"
        },
        {
            "id": 421,
            "tb": 386,
            "selecionado": true,
            "estrofe1": "Nas tormentas desta vida\nPerto está a perdição.\nAos incautos navegantes\nQuem trará a salvação?",
            "estrofe2": "Sempre brilha, em graça imensa,\nRico amor do eterno Deus;\nCumpre a nós mostrar o rumo\nDa viagem para os céus.",
            "estrofe3": "Nuvens de paixão mundana\nObscurecem-lhes o sol.\nErgue o grito de perigo,\nAlça as luzes no farol!",
            "estrofe4": "Os errantes insensatos\nGuia ao porto divinal!\nEm Jesus há vero abrigo\nDo furor do temporal.",
            "estrofe5": "Noite eterna se aproxima,\nDe remorso e de amargor!\nClama, avisa os infelizes,\nInsta-os para o Salvador!",
            "som": "",
            "coro": "Resplandeçam nossas luzes\nAtravés do escuro mar,\nPois nas trevas do pecado\nAlmas podem naufragar!"
        },
        {
            "id": 422,
            "tb": 182,
            "selecionado": true,
            "estrofe1": "No serviço do meu Rei eu sou feliz,\nSatisfeito e abençoado,\nProclamando do meu Rei a salvação\nNo serviço do meu Rei.",
            "estrofe2": "No serviço do meu Rei eu sou feliz,\nObediente e corajoso;\nNa tristeza ou na alegria sei sorrir\nNo serviço do meu Rei.",
            "estrofe3": "No serviço do meu Rei eu sou feliz,\nJubiloso e consagrado;\nAo Seu lado desafio a todo o mal\nNo serviço do meu Rei.",
            "estrofe4": "No serviço do meu Rei eu sou feliz,\nVenturoso e decidido;\nQuanto tenho no serviço gastarei,\nNo serviço do meu Rei.",
            "estrofe5": "",
            "som": "",
            "coro": "No serviço do meu Rei\nMinha vida empregarei;\nGozo, paz, felicidade\nTem quem serve ao meu bom Rei."
        },
        {
            "id": 423,
            "tb": 624,
            "selecionado": true,
            "estrofe1": "Espalhemos, todos, a semente santa\nDesde a madrugada até o anoitecer,\nCalmos, aguardando o tempo da colheita,\nQuando, alegremente, havemos de colher!",
            "estrofe2": "Semeemos quando seres perniciosos\nA semente boa querem destruir;\nDeus abençoando a lavoura santa,\nQuem O serve nunca há de desistir.",
            "estrofe3": "Vamos, pois, obreiros, semear ousados\nA semente viva da verdade e luz,\nProclamando a Cristo, Seu poder e glória,\nSalvação perfeita que alcançou na cruz!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Colheremos, sim! (bis)\nPreciosos frutos a Deus ofertar!\nColheremos, sim! (bis)\nE os celeiros, fartos, hão de transbordar!"
        },
        {
            "id": 424,
            "tb": 448,
            "selecionado": true,
            "estrofe1": "Há um caminho espinhoso\nDe conduta exemplar,\nÉ o caminho do dever\nQue leva ao celeste Lar.\nAo trilharmos essa senda,\nDeus estende o Seu favor,\nPois bem perto corre o rio\nDo Seu paternal amor.",
            "estrofe2": "Senda abençoada e pura,\nCheia de alegria e paz,\nMas às vezes pedregosa,\nQue angústia e dores traz.\nImitando nosso Mestre\nNo amor e exemplo Seus,\nSurge a aurora que ilumina\nO caminho para Deus.",
            "estrofe3": "Eu prossigo na vereda\nDo dever com decisão,\nLevantando minha face\nPara o Autor da salvação;\nCom Jesus o fardo é leve,\nPois me estende o Seu favor;\nAcho alento junto ao rio\nDo Seu paternal amor.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Corre o rio da graça \t\t\t\t ) bis\nPela senda do dever. \t\t\t\t )"
        },
        {
            "id": 425,
            "tb": 180,
            "selecionado": true,
            "estrofe1": "Não somente pra fazer um feito singular\nÉ mister agir com muito ardor,\nMas as coisas mais humildes para executar\nDeves fazê-las com fervor.",
            "estrofe2": "Oh! talvez alguma vida possas alegrar\nCom palavras doces, em amor,\nOu talvez algumas almas tristes alcançar\nCom a mensagem do Senhor.",
            "estrofe3": "Por maior que seja teu esforço a exercer,\nPor mais firme a tua devoção,\nEm redor vê quantas almas vivem sem prazer,\nJazem na densa escuridão.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Brilha no meio do teu viver, (bis)\nPois talvez algum aflito possas socorrer;\nBrilha no meio do teu viver."
        },
        {
            "id": 426,
            "tb": 181,
            "selecionado": true,
            "estrofe1": "Oh! onde os obreiros a trabalhar\nNo campo tão vasto a laborar?\nA obra requer prontidão, vigor,\nOh! quem quer ceifar com desvelo e ardor?",
            "estrofe2": "O joio do mal tende a aumentar\nE o trigo do Mestre quer sufocar.\nCeifeiros, avante, no campo entrai\nE enquanto é dia ceifai, ceifai!",
            "estrofe3": "Eis portas abertas à pregação,\nNações almejando a salvação!\nOh! onde os obreiros a proclamar\nDe Deus o perdão, Seu amor sem par?",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Onde os obreiros? Oh! quem quer ir\nNo campo tão vasto a escassez suprir?\nQuem pronto está hoje a atender\nE os frutos benditos vir recolher?"
        },
        {
            "id": 427,
            "tb": 451,
            "selecionado": true,
            "estrofe1": "Ouve! a voz divina clama:\n―Quem deseja trabalhar?‖.\nRicos campos nos convidam,\nHojé entremos a ceifar!\nIncessante o Mestre apela,\nChama obreiros para Si.\nQuem responderá, dizendo:\n―Manda-me! estou pronto aqui!‖?",
            "estrofe2": "Corre! aponta aos pecadores\nO benigno Salvador!\nVai, conduze os cordeirinhos\nAo regaço do Pastor!\nLeva às almas doloridas\nNovas de consolação!\nVai, publica a todo o mundo:\n―Em Jesus há salvação.‖",
            "estrofe3": "Ah! não digas, ocioso:\n―Eu não tenho o que fazer!‖\nEis os povos que falecem,\nMultidões a perecer!\nOlha o Mestre que suplica,\nOuve a voz chamando a ti!\nOh! responde sem demora:\n―Manda-me! estou pronto aqui!‖",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 428,
            "tb": 557,
            "selecionado": true,
            "estrofe1": "Vamos nós trabalhar, somos servos de Deus,\nNosso Mestre seguir no caminho dos céus\nE no Seu bom conselho o vigor renovar,\nDiligentes, fazendo o que Cristo ordenar!",
            "estrofe2": "Vamos nós trabalhar e os famintos fartar,\nPara a fonte os sedentos depressa levar!\nSó na cruz do Senhor nossa glória será,\nPois Jesus salvação por Seu sangue nos dá!",
            "estrofe3": "Vamos nós trabalhar, ajudados por Deus,\nQue a coroa de glória nos dá lá nos céus!\nA mansão dos fiéis sempiterna será,\nPois Jesus salvação inefável nos dá!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "No labor, com fervor, a seguir a Jesus,\nCom amor e fé e com oração,\nAté que volte o bom Senhor!"
        },
        {
            "id": 429,
            "tb": 628,
            "selecionado": true,
            "estrofe1": "Anuncia ao mundo em redor\nO que fez por ti o Salvador,\nConta como o Seu tão grande amor\nMuda em alegria toda a dor.\nVai a Bíblia ao povo entregar,\nEla diz que há vida num olhar.\nVai, proclama ao mundo inteiro:\nEm Cristo há salvação!",
            "estrofe2": "Quando fazes o tambor rufar,\nBrada que Jesus quer perdoar\nAo que humilde nEle confiar\nE o mal quiser abandonar.\nFala ao pobre, ao rico e a todo o ser\nDeste evangelho de poder.\nVai, proclama ao mundo inteiro:\nEm Cristo há salvação!",
            "estrofe3": "Insta a nossa força juvenil\nA lutar com zelo e amor febril\nPelas almas longe do redil,\nPerecendo em perigos mil.\nConta do glorioso céu de amor,\nOnde harpas soam e há fulgor.\nVai, proclama ao mundo inteiro:\nEm Cristo há salvação!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Conta aos homens do Menino de Belém,\nQue, obediente a Deus,\nVeio a nós, mostrando o amor do Sumo Bem\nLá dos altos céus.\nSeja a tua vida um exemplo aqui,\nAma o pecador.\nSem as trevas temer, faze a todos saber:\nEm Cristo há salvação!"
        },
        {
            "id": 430,
            "tb": 504,
            "selecionado": true,
            "estrofe1": "Mestre e Senhor, com devoção\nTeu povo se une em oração;\nCom Teu amor, oh! vem selar ) bis\nAs vidas postas no altar. \t)",
            "estrofe2": "Chamados para batalhar,\nUnimo-nos num só lugar\nCom um só alvo: o mal vencer ) bis\nE Teu glorioso reino erguer. \t\t\t)",
            "estrofe3": "Chamados do pecado vil\nAo Teu serviço varonil,\nNo mundo havemos de andar, ) bis\nMas separados do pecar. \t)",
            "estrofe4": "Por Ti queremos combater;\nDébeis, pedimos Teu poder!\nO Teu Espírito de amor ) bis\nDerrama em nós e dá valor. \t\t)",
            "estrofe5": "Teu povo fiel queremos ser,\nSantificados no viver;\nAssim iremos batalhar ) bis\nAté a glória alcançar! )",
            "som": "",
            "coro": ""
        },
        {
            "id": 431,
            "tb": 183,
            "selecionado": true,
            "estrofe1": "Além do ocaso, manhã grandiosa\nSerenamente despontará;\nNão mais a noite, mas a alvorada\nDe um brilho infindo nos cercará.",
            "estrofe2": "Além do ocaso, nenhuma nuvem\nOu tempestade afligirá;\nPassado o choro, a dor e a morte,\nO salvo em Cristo descansará.",
            "estrofe3": "Além do ocaso, chegando ao porto,\nÀ nossa espera Jesus está;\nO adoraremos ante o Seu trono,\nNossos louvores aceitará.",
            "estrofe4": "Além do ocaso, encontraremos\nUm povo santo naquele Lar;\nNa bela terra, reais moradas\nEstá Jesus a nos preparar.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 432,
            "tb": 47,
            "selecionado": true,
            "estrofe1": "Em breve a vida vai findar,\nAqui não mais eu cantarei;\nNo céu, então, irei morar\nCom meu Jesus, amado Rei.",
            "estrofe2": "Ali a voz ressoará\nDe Cristo, terno Redentor:\n―Fiel, bom servo, bem está,\nDesfruta o gozo do Senhor.‖",
            "estrofe3": "Por meu Jesus eu vou viver,\nDeixando a minha luz brilhar,\nE dia a dia vou fazer\nAquilo que ao Senhor honrar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Sim, face a face, vê-lO-ei! \t\t) bis\nA Sua graça cantarei. \t\t\t\t )"
        },
        {
            "id": 433,
            "tb": 484,
            "selecionado": true,
            "estrofe1": "Falamos do mundo feliz,\nDo gozo que nele haverá,\nDas glórias do lindo país,\nQue maravilhoso será!",
            "estrofe2": "Falamos da paz e do amor\nQue Cristo ali nos dará,\nDas vozes de grato louvor,\nQue maravilhoso será!",
            "estrofe3": "Falamos do brilho da luz,\nDas jóias que o céu conterá,\nDa face do nosso Jesus,\nQue maravilhoso será!",
            "estrofe4": "Nem mancha, pecado ou dor,\nNem pranto jamais entrará\nNa casa de nosso Senhor,\nQue maravilhoso será!",
            "estrofe5": "",
            "som": "",
            "coro": "No porvir, com Jesus, ) bis\nQue maravilhoso será! )"
        },
        {
            "id": 434,
            "tb": 249,
            "selecionado": true,
            "estrofe1": "Jerusalém excelsa,\nGloriamo-nos em ti,\nAfável esperança\nDe todo o crente aqui.\nRadiante é tua porta,\nQue ao longe já se vê,\nPor onde tem entrada\nO que em Cristo crê.",
            "estrofe2": "A cruz e sua glória\nE o grande Redentor\nEm ti são exaltados\nEm cantos de louvor.\nQue gozo tu me inspiras,\nEterna habitação,\nPois sei que em ti se finda\nA peregrinação!",
            "estrofe3": "Ó doce Lar amado,\nDescanso meu serás\nQuando eu tiver herdado\nTeu bem e tua paz.\nÓ coração que gemes,\nNa dor que te desfaz,\nCom Deus, que te redime,\nFeliz, enfim, serás.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 435,
            "tb": 529,
            "selecionado": true,
            "estrofe1": "Quando meu tempo de lutas passar,\nQuando meu Deus para Si me chamar,\nGrato, perante Jesus hei de estar;\nGlória perene será para mim!",
            "estrofe2": "Quando, por graça do Seu grande amor,\nEu alcançar o infinito favor\nDe ir para perto do meu Salvador,\nGlória perene será para mim!",
            "estrofe3": "Muitos amigos ali hei de achar,\nPaz, alegria, eternal bem-estar;\nMas, quando meu Salvador me saudar,\nGlória perene será para mim!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Sim, há de ser glória pra mim!\nGlória pra mim! Glória pra mim!\nQuando puder o Seu rosto mirar,\nOh! há de ser grande glória pra mim!"
        },
        {
            "id": 436,
            "tb": 126,
            "selecionado": true,
            "estrofe1": "Há uma terra de prazer,\nMorada dos que crêem;\nO dia eterno reina ali,\nTristezas nunca têm.",
            "estrofe2": "É primavera sempre ali,\nE as flores durarão;\nAlegres campos, verdes, bons,\nNa linda terra estão.",
            "estrofe3": "Porém à entrada do país\nHá um profundo mar;\nPor suas águas, nós, mortais,\nHavemos de passar.",
            "estrofe4": "E o Senhor caminho abriu,\nTirou da morte o horror;\nCom gozo os salvos hão de entrar\nNaquele Lar de amor.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 437,
            "tb": 483,
            "selecionado": true,
            "estrofe1": "Pensai nesse Lar lá do céu,\nBem ao lado do rio de luz,\nOnde os santos descansam e gozam\nDa presença de Cristo Jesus.",
            "estrofe2": "Pensai nos amigos do céu,\nQue venceram a luta final,\nE nos cantos que as harpas ressoam\nNa harmonia do Lar divinal.",
            "estrofe3": "Em breve no céu estarei;\nVejo o fim da jornada chegar.\nMeu bondoso Jesus lá me espera\nPara as bênçãos eternas me dar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! pensai! Oh! pensai!\nPensai nesse Lar lá do céu!\nLá do céu! Lá do céu!\nPensai nesse Lar lá do céu!"
        },
        {
            "id": 438,
            "tb": 484,
            "selecionado": true,
            "estrofe1": "Junto ao trono de Deus, preparado\nHá, cristão, um lugar para ti;\nHá prazeres, há gozo exaltado,\nHá delícias profusas ali.\nSim, ali, sim, ali,\nDe Seus anjos fiéis rodeado,\nNuma esfera de glória e de luz,\nJunto a Deus nos espera Jesus.",
            "estrofe2": "Os encantos da terra não podem\nDar idéia do gozo dali;\nSe na terra os prazeres acodem,\nSão prazeres que morrem aqui.\nMas, ali, mas, ali,\nAs venturas eternas concorrem\nNa existência perpétua da luz\nAo tornar-te feliz com Jesus.",
            "estrofe3": "Conservemos em nossa lembrança\nAs riquezas do lindo país\nE guardemos conosco a esperança\nDe uma vida melhor, mais feliz,\nPois, ali, pois, ali,\nUma voz verdadeira não cansa\nDe chamar-nos ao reino de luz,\nAo amor protetor de Jesus.",
            "estrofe4": "Se quisermos gozar da ventura\nQue no belo país haverá,\nÉ somente pedir de alma pura\nQue de graça Jesus nos dará,\nPois, ali, pois, ali,\nTodo cheio de amor, de ternura,\nDesse amor revelado na cruz,\nNos escuta, nos ouve Jesus.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 439,
            "tb": 245,
            "selecionado": true,
            "estrofe1": "Milhares e milhares, em refulgente luz,\nEis os guerreiros santos, a milícia de Jesus!\nCompleta, sim, completa a dura luta aqui,\nCom Cristo, seu Senhor e Rei, vão descansar ali.",
            "estrofe2": "No céu, que harmonia de vozes mil sem par!\nQue coros de aleluias quando o crente ali chegar;\nVerá naquele dia, o dia triunfal,\nO Cristo, Rei da criação, em glória eternal.",
            "estrofe3": "Não haverá mais choro, não mais a tentação;\nAs dores, as tristezas, para sempre fugirão;\nE os remidos, todos, verão seu Salvador,\nE consumado, enfim, será o plano redentor.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 440,
            "tb": 110,
            "selecionado": true,
            "estrofe1": "Na pátria celeste, no eterno e doce Lar,\nPrepara Jesus, para os Seus, um lugar;\nPois, longe do mal, do pecado e da dor,\nAli para sempre os quer o Senhor.",
            "estrofe2": "Oh! lar sacrossanto de paz e de amor!\nAlém, sobre o trono, verei meu Senhor,\nO meigo Cordeiro, reinando em luz,\nPor todos louvado, bendito Jesus!",
            "estrofe3": "Que puras delícias se encontram em Ti;\nQue gozos supernos esperam ali\nAqueles que junto de Ti estarão,\nVivendo alegrias na eterna mansão.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! doce, doce lar!\nAli, com Jesus, vou feliz descansar."
        },
        {
            "id": 441,
            "tb": 92,
            "selecionado": true,
            "estrofe1": "Foi a rude cruz só do Salvador,\nSeu peso e dor sem fim?\nTal cruz devemos compartilhar,\nPois Jesus o quer assim.",
            "estrofe2": "Preciosa cruz, bendita cruz,\nEm ti me gloriarei,\nPois és meu passaporte ao céu;\nCom amor te levarei!",
            "estrofe3": "Ó Jesus, Senhor, pela Tua cruz\nAqui me valerás!\nNo dia da ressurreição,\nSalvo, me despertarás!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Se a cruz eu carregar,\nCoroado serei;\nCom Jesus, no eterno Lar,\nPara sempre viverei!"
        },
        {
            "id": 442,
            "tb": 424,
            "selecionado": true,
            "estrofe1": "Nada temam! Cristo mesmo\nVai ao leme a governar,\nO batel não segue a esmo,\nAtravés do imenso mar,\nPara o porto, para o porto\nOnde vamos descansar. ) bis",
            "estrofe2": "Ventos e ondas do oceano\nNão nos devem assustar,\nVai conosco o Soberano,\nEle os sabe apaziguar.\nO Seu gesto, o Seu gesto\nBasta para os abrandar. ) bis",
            "estrofe3": "Outros tempos nos esperam\nNesse abrigo, doce lar,\nOnde os ares não se alteram\nNem se agita o grande mar.\nDoce calma, doce calma\nVamos em Jesus gozar. ) bis",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 443,
            "tb": 126,
            "selecionado": true,
            "estrofe1": "Qual bravo navegante, enfrenta o mar\nQuando em bonança ou pior temporal;\nSe nuvens densas te vierem cercar,\nOlha a Estrela da Manhã, teu guia leal.",
            "estrofe2": "A luz desponta, o dia já vai raiar;\nAlém das vagas, terra firme se vê.\nViagem árdua logo há de findar,\nForça aos remos, luta, persevera e crê!",
            "estrofe3": "Brilhante aurora varre a escuridão,\nÉ a chegada desse dia sem par!\nErgue alto a voz em tom de adoração:\n―Glória a Jesus, Senhor da terra e do mar!‖",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Rema ao porto com todo o vigor,\nDeixa as fortes ondas todas pra trás;\nSeguindo a Cristo, fiel e forte protetor,\nÀs gloriosas margens celestiais chegarás!"
        },
        {
            "id": 444,
            "tb": 206,
            "selecionado": true,
            "estrofe1": "Glorioso vem dia tão feliz\nQuando o Príncipe da Paz os Seus virá buscar!\nSaibam as nações, um convite há:\nPara as bodas do Cordeiro, vinde já!\nHostes celestiais seus louvores dão,\nE a noiva se adorna com justiça e amor,\nO cortejo em festa começa a andar\nPara as bodas do Cordeiro iniciar!",
            "estrofe2": "Carregar a cruz e andar na luz\nÉ preciso para a santa festa partilhar;\nVigiar e orar nestes dias maus\nPara as bodas do Cordeiro desfrutar.\nMancha alguma deve em teu manto haver\nSe as atenções do Noivo queres receber;\nNem pecado ou dor, só pureza e amor\nNessas bodas do Cordeiro pode haver.",
            "estrofe3": "Quando vencedor desta luta eu for,\nJá passados os combates e a perseguição,\nCom a paz do céu a reinar em mim,\nPara as bodas do Cordeiro vou assim!\nCristo morto foi pelo pecador,\nDeves aceitar tão grande prova de amor;\nEle voltará e convida, vem,\nE às bodas do Cordeiro irás também!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Eu ouvi o chamado e vou\nUnir-me aos santos que compõem a grande multidão.\nEu ouvi o chamado e vou\nCom vestes preparadas para a grande ocasião."
        },
        {
            "id": 445,
            "tb": 398,
            "selecionado": true,
            "estrofe1": "Há um rio cristalino\nNa divina habitação,\nSai do trono do Cordeiro\nPara gozo do cristão.",
            "estrofe2": "Antes de a esse rio\nNós podermos contemplar,\nRetidão e santidade\nTemos todos de alcançar.",
            "estrofe3": "Lá na margem desse rio\nVamos com Jesus viver,\nAdorando-O para sempre\nCom fervor e com prazer.",
            "estrofe4": "Em chegando ao santo rio,\nFinda a peregrinação,\nPassaremos todo o tempo\nNo louvor da salvação.",
            "estrofe5": "",
            "som": "",
            "coro": "Sim, a ele nós iremos,\nA Cristo, nosso protetor, veremos,\nDesse rio sempre beberemos,\nAo lado do bom Redentor!"
        },
        {
            "id": 446,
            "tb": 831,
            "selecionado": true,
            "estrofe1": "Do oeste e do leste milhares virão\nE no reino de Deus sentarão;\nMultidões de remidos de cada nação,\nSim, no reino de Deus sentarão.\nNinguém perguntará quem são,\nPois vestes brancas usarão;\nDo oeste e do leste milhares virão\nE no reino de Deus sentarão.",
            "estrofe2": "Do oeste e do leste milhares virão\nE no reino de Deus sentarão;\nPelo Pai recebidos, benditos serão\nE no reino de Deus sentarão.\nAs raças todas se unirão,\nSuas cores não importarão;\nDo oeste e do leste milhares virão\nE no reino de Deus sentarão.",
            "estrofe3": "Do oeste e do leste milhares virão\nE no reino de Deus sentarão;\nLivres da grande tribulação estarão\nE triunfantes no céu entrarão.\nDe cada raça e nação,\nTal como irmãos se abraçarão;\nDo oeste e do leste milhares virão\nE no reino de Deus sentarão.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 447,
            "tb": 440,
            "selecionado": true,
            "estrofe1": "Oh! vem encontrar-me à fonte\nDa Jerusalém do céu!\nSim, à cristalina fonte\nQue Jesus aos crentes deu!\nLá encontrarei amigos\nQue me querem como irmão;\nNo céu não verei perigos,\nPaz terá meu coração!",
            "estrofe2": "Oh! vem encontrar-me à fonte,\nEu te reconhecerei\nPelo brilho que, na fronte,\nHá de ter a santa grei.\nHei de achar mais melodia\nNesse coro a que me unir,\nSe naquele eterno dia\nTua voz eu nele ouvir!",
            "estrofe3": "Oh! vem encontrar-me à fonte,\nEu desejo aí te ver!\nOnde o Salvador divino\nA mim há de receber.\nOh! vem encontrar-me, amigo,\nJunto à fonte, pois Jesus\nNos céus nos dará, conSigo,\nLar eterno em plena luz!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! vem à celeste fonte\nQue Jesus nos quis abrir!\nSim, vem à celeste fonte,\nSalvação com Deus fruir!"
        },
        {
            "id": 448,
            "tb": 753,
            "selecionado": true,
            "estrofe1": "Quando o rio passarmos unidos\nE entrarmos no céu, vamos ver,\nComo areia da praia, os remidos;\nOh! que vista gloriosa há de ser!",
            "estrofe2": "Quando os salvos de todos os tempos\nEncontrarmos no céu, que prazer!\nCelestiais saudações trocaremos;\nOh! que vista gloriosa há de ser!",
            "estrofe3": "Quando virmos a terra bendita,\nFrutos, flores, a fonte a correr,\nO cordeiro e o leão convivendo,\nOh! que vista gloriosa há de ser!",
            "estrofe4": "Quando, enfim, entre aplausos vibrantes\nFormos nosso Senhor conhecer,\nVer Jesus, Rei dos reis, coroado,\nExperiência gloriosa há de ser!",
            "estrofe5": "",
            "som": "",
            "coro": "Sim, tantos como areia da praia,\nSim, tantos como areia do mar!\nQue gozo sentirá todo o salvo ao contemplar,\nSim, tantos como areia da praia!"
        },
        {
            "id": 449,
            "tb": 261,
            "selecionado": true,
            "estrofe1": "Salvo em Jesus, meu Mestre, gozo a bendita paz;\nTal comunhão com Ele minha aflição desfaz.\nEle me dá certeza: salvo estarei no além.\nOh! que prazer, que gozo enche meu ser também!",
            "estrofe2": "Cristo me dá a vida, fonte Ele é de amor,\nTira de mim as mágoas, todo o pesar e dor.\nQuando eu sofrer a prova, fácil será ganhar,\nMas, se verter o pranto, Ele o irá limpar.",
            "estrofe3": "Hei de passar a noite sem mais sentir temor,\nBreve virá o dia com perenal fulgor.\nOh! que prazer supremo ver a Jesus no Lar,\nLá na mansão da glória com meu Jesus reinar!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Salvo em Jesus, meu Mestre, gozo o prazer da paz;\nTal comunhão com Ele toda a aflição desfaz."
        },
        {
            "id": 450,
            "tb": 508,
            "selecionado": true,
            "estrofe1": "Pela fé avistamos além\nUma terra que brilha em fulgor!\nNas moradas do Pai, Sumo Bem,\nUm lugar nos prepara o Senhor!",
            "estrofe2": "Cantaremos, no belo país,\nMelodias do mais puro ardor;\nNessa pátria celeste e feliz\nNão há pranto, gemido nem dor.",
            "estrofe3": "Sim, daremos a Cristo Jesus\nUm tributo de grato louvor\nPelas bênçãos do reino de luz,\nPelo dom do inefável amor.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Sim, no doce porvir,  ) bis\nViveremos no santo país. )"
        },
        {
            "id": 451,
            "tb": 204,
            "selecionado": true,
            "estrofe1": "Essas vestes brancas, que Jesus vai dar,\nEssas belas palmas, quem irá ganhar?\nOs fiéis, remidos, a quem tanto amou,\nPobres pecadores, que Ele resgatou.",
            "estrofe2": "Os que despertarem ao chamar de Deus,\nRenunciando a todos os cuidados seus;\nOs que sempre seguem ao seu Salvador\nE, por seu tesouro, buscam Seu amor.",
            "estrofe3": "Os que, dedicados a seu Rei Jesus,\nNão retrocedendo, tomam sua cruz.\nSim, quem tudo perde tudo ganhará,\nQuem com Cristo sofre glória enfim terá.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 452,
            "tb": 12,
            "selecionado": true,
            "estrofe1": "À pátria abençoada vou,\nAnsioso peregrino sou\nEm busca do feliz lugar\nNo qual eu hei de descansar.",
            "estrofe2": "Comigo vai o meu Senhor,\nDo mal me guarda com amor,\nDe paz inunda o coração\nE dá-me eterna salvação.",
            "estrofe3": "Na vastidão celestial\nRessoa o canto angelical\nDe triunfante multidão\nFeliz por sua redenção.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! bela terra de esplendor,\nQuerida herança do Senhor;\nOlhando, vejo, além do mar,\nQue breve eu hei de atravessar,\nA praia áurea, perenal,\nDo lindo Lar celestial."
        },
        {
            "id": 453,
            "tb": 156,
            "selecionado": true,
            "estrofe1": "Pequena vila de Belém,\nRepousa em teu dormir\nEnquanto os astros lá no céu\nEstão a refulgir;\nPorém nas tuas trevas\nResplende eterna luz\nIncomparável, divinal;\nNasceu o bom Jesus!",
            "estrofe2": "Da virgem mãe nasceu Jesus.\nVós, anjos, dai a Deus\nLouvor, e aos homens proclamai\nAs novas lá dos céus.\nEstrelas matutinas,\nEm hinos de louvor\nAos anjos e homens proclamai\nDe Deus o eterno amor.",
            "estrofe3": "O dom glorioso, divinal,\nNenhum estrondo faz,\nAssim aos homens o Senhor\nConcede graça e paz.\nSereno e sem alarde\nVem Ele ao mundo, assim,\nTrazendo aos homens redenção,\nAmor e paz sem fim.",
            "estrofe4": "Ó Santo Infante de Belém,\nEm nossos corações\nHabita, faze-os entrever\nCelestiais visões.\nNos céus proclamam anjos\nDe Deus o amor fiel!\nOh! vem, Senhor, em nós morar,\nEterno Emanuel.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 454,
            "tb": 693,
            "selecionado": true,
            "estrofe1": "Surgem anjos proclamando\nPaz à terra e a Deus louvor.\nVão seus hinos ecoando\nNas montanhas em redor.",
            "estrofe2": "Vão-se alegres os pastores\nVer o Infante celestial\nE acrescentam seus louvores\nAo louvor angelical.",
            "estrofe3": "Berço rude Lhe foi dado,\nMas do céu Lhe vem louvor.\nEle é o Salvador amado,\nBem merece o nosso amor.",
            "estrofe4": "Povos, tribos, celebrai-O!\nGlória a Deus, também dizei.\nAjoelhados, adorai-O,\nEle é o Cristo, o grande Rei!",
            "estrofe5": "",
            "som": "",
            "coro": "Glória, glória a Deus nas alturas! (bis)"
        },
        {
            "id": 455,
            "tb": 198,
            "selecionado": true,
            "estrofe1": "Uma luz resplandecente\nIlumina a vastidão.\nLá nos campos, os pastores\nVigiam em compunção.\nÉ a esses pobrezinhos\nQue resplende a grande luz,\n―Não temais!‖, diz-lhes um anjo,\n―Em Belém nasceu Jesus!‖",
            "estrofe2": "Como é belo ouvir-se\nO canto da milícia celestial!\nTodo o céu está em festa\nAnunciando o Natal.\nSurge, assim, no firmamento,\nQue se abre par em par,\nUma multidão de anjos\nA dizer e a cantar:",
            "estrofe3": "",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "―Glória a Deus nas alturas\nPaz na terra! Deus é amor!‖\nOs anjos cantam em Belém:\n―Nasceu o Salvador!‖"
        },
        {
            "id": 456,
            "tb": 64,
            "selecionado": true,
            "estrofe1": "Ó pinheirinho de Natal, ) bis\nDe ramas sempre verdes. \t)\nQualquer que seja a estação,\nAs tuas ramas verdes são.\nÓ pinheirinho de Natal,\nFidelidade ensinas.",
            "estrofe2": "Ó pinheirinho de Natal, ) bis\nDe tronco forte e firme. )\nMui débil sou e sem valor,\nOh! dá-me, Cristo, tal vigor!\nÓ pinheirinho de Natal,\nSer forte me ensinas!",
            "estrofe3": "Ó pinheirinho de Natal, ) bis\nDe prendas enfeitado. )\nTu representas dons de Deus\nE as alegrias lá dos céus.\nÓ pinheirinho de Natal,\nDe alegres ramas feito.",
            "estrofe4": "Ó pinheirinho de Natal, ) bis\nCom verdes ramas sempre. \t)\nTu simbolizas uma cruz\nE a vida eterna em Jesus.\nÓ pinheirinho de Natal,\nCoisas felizes lembras.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 457,
            "tb": 552,
            "selecionado": true,
            "estrofe1": "Oh! vinde, fiéis, triunfantes, alegres,\nSim, vinde a Belém já movidos de amor;\nNasceu vosso Rei, lá do céu prometido;\nOh! vinde, adoremos (3x) a nosso Senhor.",
            "estrofe2": "Olhai, admirados, a Sua humildade,\nOs anjos O louvam com grande fervor,\nPois veio conosco habitar encarnado;\nOh! vinde, adoremos (3x) a nosso Senhor.",
            "estrofe3": "Por nós, das alturas celestes baixando,\nEm forma de servo Se fez, por amor,\nE em glórias a vida nos dá, sempiterna;\nOh! vinde, adoremos (3x) a nosso Senhor.",
            "estrofe4": "Nos céus, adorai-O, vós, anjos em coro,\nE todos na terra Lhe rendam louvor;\nA Deus honra e glória, contentes, rendamos;\nOh! vinde, adoremos (3x) a nosso Senhor.",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 458,
            "tb": 800,
            "selecionado": true,
            "estrofe1": "Noite de paz! Noite de amor!\nTudo dorme em derredor.\nEntre os astros que espargem a luz,\nProclamando o Menino Jesus,\nBrilha a estrela da paz! (bis)",
            "estrofe2": "Noite de paz! Noite de amor!\nNas campinas, ao pastor,\nLindos anjos, mandados por Deus,\nAnunciam a nova dos céus:\nNasce o bom Salvador! (bis)",
            "estrofe3": "Noite de paz! Noite de amor!\nOh! que belo resplendor\nIlumina o Menino Jesus!\nNo presépio do mundo eis a luz,\nSol de eterno fulgor! (bis)",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 459,
            "tb": 650,
            "selecionado": true,
            "estrofe1": "Mal supõe aquela gente\nQue em Belém quer ir parar\nQue uma luz tão refulgente\nVai ali brilhar.\nÉ por anjos anunciado,\nE os pastores logo vêem\nQue o Senhor, por Deus mandado,\nNasce em Belém.",
            "estrofe2": "Mundo triste! Oh! desperta!\nTeus grilhões desfeitos são!\nTens a porta franca, aberta;\nSai da vil prisão!\nNão te mostres duvidoso;\nEste dom do céu provém;\nCristo, Todo-Poderoso,\nNasce em Belém.",
            "estrofe3": "Proclamai a todo o mundo,\nToda a raça, toda a cor,\nQue, em Jesus, o amor profundo\nSalva o pecador.\nConfiança plena tende,\nNão desprezará ninguém.\nVinde, os braços vos estende!\nNasce em Belém.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Vinde ouvir a doce história\nQue dos altos céus nos vem:\nO Messias, Rei da glória,\nNasce em Belém."
        },
        {
            "id": 460,
            "tb": 146,
            "selecionado": true,
            "estrofe1": "Lembrai-vos, habitantes do mundo terrenal:\nNasceu Jesus, o Cristo, no dia de Natal,\nA fim de a todos libertar das trevas e do mal.",
            "estrofe2": "De Deus, o Pai celeste, um anjo proclamou\nAos homens todos, pobres, quão grande dom chegou\nE como no Menino Deus o amor se nos mostrou!",
            "estrofe3": "―Regozijai-vos‖, disse o anjo do Senhor:\n―Nasceu-vos neste dia, Jesus, o Salvador,\nA fim de a todos libertar da morte e do temor‖.",
            "estrofe4": "Cantemos jubilosos por dia tão feliz\nE com amor sigamos o que Jesus nos diz.\nNa festa santa do Natal, Seu povo a Deus bendiz!",
            "estrofe5": "",
            "som": "",
            "coro": "Oh! novas alegres de paz!\nNovas de paz!\nOh! novas alegres de paz!"
        },
        {
            "id": 461,
            "tb": 421,
            "selecionado": true,
            "estrofe1": "Jubilosa, venturosa\nNoite santa de Natal!\nMundo perdido:\nCristo é nascido!\nAlegrai-vos, alegrai-vos, ó cristãos!",
            "estrofe2": "Jubilosa, venturosa\nNoite santa de Natal!\nGlória, os anjos cantam,\nO Infante exaltam.\nAlegrai-vos, alegrai-vos, ó cristãos!",
            "estrofe3": "Jubilosa, venturosa\nNoite santa de Natal!\nCristo é chegado,\nVosso Rei amado.\nAlegrai-vos, alegrai-vos, ó cristãos!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 462,
            "tb": 555,
            "selecionado": true,
            "estrofe1": "Exultem, ó povos! Alerta ao sinal!\nNo céu uma estrela anuncia o Natal;\nMilícia celeste, vestida de luz,\nProclama: ―Nasceu o Menino Jesus!‖",
            "estrofe2": "Pastores já deixam rebanhos que têm\nE vão procurar a Jesus em Belém;\nDe longe vêm magos que, em devoção,\nAjoelham-se e prestam-Lhe adoração!",
            "estrofe3": "Exultem, ó povos! Alerta ao sinal!\nJá tangem os sinos saudando o Natal!\nBendita criança, Jesus, Salvador,\nAceita a oferta do meu vero amor!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 463,
            "tb": 145,
            "selecionado": true,
            "estrofe1": "Já vem perto o Natal:\nCanta o verde pinhal,\nHá sons festivos no ar,\nVibram acordes no lar.",
            "estrofe2": "Cessem prantos e dor,\nVence as mágoas o amor\nDo meigo Infante Jesus,\nQue muda as trevas em luz.",
            "estrofe3": "Folga o meu coração;\nOuve a doce oração\nDa multidão celestial:\n―Já está perto o Natal!‖",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 464,
            "tb": 153,
            "selecionado": true,
            "estrofe1": "Em linda noite veio a nós\nUm coro de esplendor,\nCom harpas de ouro a cantar\nUm hino de louvor.\n―Aos homens paz e glória a Deus‖\n— Mensagem divinal!\nA terra toda então ouviu\nO canto angelical.",
            "estrofe2": "Pairando sobre a terra estão\nOs anjos a cantar\nE sobre o mundo pecador\nDerramam luz sem par.\nAcima das tribulações\nDa luta terrenal,\nProclama a vinda singular\nO canto angelical.",
            "estrofe3": "Enquanto aqui na terra estão\nOs dias a passar,\nOs povos vivem sem amor,\nNum mundo a guerrear.\nMas, quando, enfim, reinar a paz,\nEm glória triunfal,\nDos salvos todos se ouvirá\nO canto angelical.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 465,
            "tb": 816,
            "selecionado": true,
            "estrofe1": "Eis que um anjo proclamou o primeiro Natal\nA uns pobres pastores ao pé de Belém,\nLá nos campos os rebanhos guardando do mal,\nNuma noite tão fria, escura também.",
            "estrofe2": "E de súbito no céu linda estrela surgiu,\nNo oriente brilhou com estranho fulgor.\nE a terra recebeu essa luz que fulgiu\nMuitas noites em tão grandioso esplendor.",
            "estrofe3": "Tendo visto a clara luz dessa estrela sem par,\nDo oriente alguns magos a foram seguir,\nÀ procura de um rei que devia chegar\nAos judeus e antigas promessas cumprir.",
            "estrofe4": "Essa estrela apareceu e os magos guiou\nNa estrada que para a Judéia conduz;\nE, chegando a Belém, essa estrela parou,\nBem acima da casa em que estava Jesus.",
            "estrofe5": "E os magos, com afã e com grande temor,\nNesse humilde lugar se vieram prostrar\nCom ofertas liberais e de muito valor;\nOuro e mirra e incenso vieram-Lhe dar.",
            "estrofe6": "E com eles vamos nós, com sincero fervor,\nTributar homenagens a Quem nos amou,\nAdorar de coração o supremo Senhor\nQue, morrendo na cruz, nossas almas salvou!",
            "som": "",
            "coro": "Natal! Natal! Natal! Natal!\nÉ-nos nascido um Rei divinal!"
        },
        {
            "id": 466,
            "tb": 322,
            "selecionado": true,
            "estrofe1": "Eis dos anjos a harmonia!\nCantam glória ao Rei Jesus.\nPaz aos homens! que alegria!\nPaz com Deus em plena luz.\nOuçam, povos exultantes,\nErgam salmos triunfantes,\nAclamando o seu Senhor;\nNasce Cristo, o Redentor!",
            "estrofe2": "Cristo, eternamente honrado,\nDo Seu trono Se ausentou.\nEntre homens encarnado,\nDeus conosco Se mostrou.\nQue sublime divindade!\nQue excelsa humanidade!\nSalve, glória de Israel,\nLuz do mundo, Emanuel!",
            "estrofe3": "Cante o povo resgatado\nGlória ao Príncipe da paz;\nDeus, em Cristo revelado,\nVida e luz ao mundo traz!\nNasce a fim de renascermos,\nVive para ressurgirmos,\nRei, Profeta e Salvador.\nLouvem todos ao Senhor!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Toda a terra e os altos céus\nCantem sempre glória a Deus!"
        },
        {
            "id": 467,
            "tb": 773,
            "selecionado": true,
            "estrofe1": "Pelos anjos anunciado,\nPor pastores adorado,\nDom de Deus, dos céus mandado,\nEm Belém Jesus nasceu!",
            "estrofe2": "A Seus pés de longe vindo,\nDa alta estrela a luz seguindo,\nMagos prostram-se, sorrindo,\nA adorar o Rei dos reis!",
            "estrofe3": "Ó Jesus, de Deus nascido,\nEm Maria concebido,\nVenho a Ti agradecido\nPelo dia de Natal!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 468,
            "tb": 402,
            "selecionado": true,
            "estrofe1": "De Belém formosa estrela,\nResplendente em seu fulgor,\nAnuncia a todo o mundo\nTer nascido o Salvador.",
            "estrofe2": "Este dia tão glorioso,\nCelebrado entre as nações,\nNos demonstra que o Messias\nVem reinar nos corações.",
            "estrofe3": "Surge, enfim, uma alvorada\nQue dá gozo ao coração,\nPois nos diz que Jesus Cristo\nTraz ao mundo a redenção.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Ressoem sinos de Natal!\nExulte o coro angelical!\nAo mundo veio a eterna luz,\nNasceu o Rei Jesus!"
        },
        {
            "id": 469,
            "tb": 103,
            "selecionado": true,
            "estrofe1": "Cristo nasceu! Nações, ouvi,\nO vosso Rei saudai;\nOs corações a Ele abri,\nOh! terra e céus, cantai! \t\t(bis)\nOh! terra, oh! terra e céus, cantai!",
            "estrofe2": "Ao mundo veio o Salvador!\nVós, homens, celebrai!\nFlorestas, rios e prado em flor\nContentes, exaltai! \t\t(bis)\nContentes, todos, exaltai!",
            "estrofe3": "Fujam pecado, escuridão,\nEspinhos e temor;\nPois Ele traz a redenção\nE é nosso Benfeitor, \t\t\t (bis)\nÉ nosso, é nosso Benfeitor!",
            "estrofe4": "Ele as nações governará\nCom graça divinal;\nGlorioso dom concederá\nDe glória perenal, \t\t\t (bis)\nDe glória, glória perenal!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 470,
            "tb": 144,
            "selecionado": true,
            "estrofe1": "Cessam as vozes do mundo, falam as vozes do céu!\nUm Salvador é nascido — eis a mensagem de Deus.\nTemos a nova de grande valor,\nBoa vontade aos homens de fé.\nCessam as vozes do mundo,\nFalam as vozes do céu!",
            "estrofe2": "Luzem nos céus as estrelas, brilha nas almas a luz\nE, como luz verdadeira, é ela que nos conduz.\nDo alto a aurora a nós visitou,\nPara alumiar os que em trevas estão;\nCumprindo a profecia,\nA todos veio salvar!",
            "estrofe3": "Verbo de Deus feito carne, conosco veio habitar\nEntre a miséria e pobreza, aos homens Se revelar,\nTrazendo vida a quem tanto Ele amou,\nPara levá-los à glória do céu.\nGlória cantemos a Deus,\nPelo penhor que mandou!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 471,
            "tb": 144,
            "selecionado": true,
            "estrofe1": "Bem junto a seu rebanho ali\nVigia o pastor;\nA noite é de harmonia e fé\nE pleno e santo amor.",
            "estrofe2": "Formosa estrela de Belém,\nBrilhante em seu fulgor,\nA todo o mundo anunciou:\nNasceu o Salvador!",
            "estrofe3": "Eis que anjos surgem lá no céu,\nCelestiais visões\nCantando: ―Glória! Glória a Deus\nE paz aos corações!‖",
            "estrofe4": "A aurora que nos visitou,\nRevelação de Deus,\nA terra inteira iluminou,\nChamando os filhos Seus!",
            "estrofe5": "Louvores demos ao Senhor\nPor nossa redenção\nE nos prostremos a Seus pés\nEm vera adoração.",
            "som": "",
            "coro": ""
        },
        {
            "id": 472,
            "tb": 143,
            "selecionado": true,
            "estrofe1": "Alta noite estão pastores\nDe Belém, ao derredor;\nE os cercou de resplendores\nLuz celeste do Senhor.",
            "estrofe2": "Glória a Deus e paz bendita,\nEis o canto angelical,\nPara toda a gente aflita,\nTão glorioso e triunfal.",
            "estrofe3": "Ver Jesus na manjedoura,\nOnde veio repousar,\nQuerem eles sem demora,\nPara a nova confirmar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "―Novas tenho, dar-vos venho‖,\nDisse um anjo com dulçor;\n―É nascido o Bem-amado,\nJesus Cristo, o Salvador‖."
        },
        {
            "id": 473,
            "tb": 195,
            "selecionado": true,
            "estrofe1": "Numa noite de luar,\nAstros a brilhar,\nNas campinas tudo dorme em paz,\nE pobre em Belém\nComo mais ninguém\nNasceu Jesus - Rei e Salvador!",
            "estrofe2": "Eis pastores vêm chegar\nAo humilde lar\nE, adorando, louvam ao Senhor,\nE agora todos crêem,\nPaz aos homens vem\nDo bom Jesus - Rei e Salvador!",
            "estrofe3": "",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Cantou o coro angelical, \t\t\t) bis\nTocaram sinos de Natal: \t\t\t)\nNasceu Jesus - Rei e Salvador! )"
        },
        {
            "id": 474,
            "tb": 208,
            "selecionado": true,
            "estrofe1": "Noite fria e bela\nTrouxe ao mundo a paz.\nDom divino, santo e bom,\nTu, ó Deus, nos dás.\nEis nos céus o resplendor\nDe tão grande luz.\nÉ o Natal bendito\nDe Jesus.",
            "estrofe2": "Meu Senhor, agora,\nQue Te posso dar?\nTua glória, amor, poder,\nSempre proclamar.\nAnjos cantam pelos céus:\nEis o Salvador!\nVos nasceu, humilde,\nUm Senhor!",
            "estrofe3": "Glorioso e santo\nVem a nós, Jesus.\nFaze-nos, então, seguir\nO que a Ti conduz.\nVem, inclina os corações\nPara Te louvar:\nComo fez Maria,\nTe adorar!",
            "estrofe4": "Santo e puro és, Cristo,\nNão há outro igual.\nPobre, em humildade, vens:\nEis o Teu Natal!\nMas a glória que Tu tens\nDás aos filhos Teus:\nÉ a esperança nossa\nLá dos céus!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 475,
            "tb": 735,
            "selecionado": true,
            "estrofe1": "Vão-se os anos, vão-se as eras,\nMorre a planta, murcha a flor,\nPassa o gozo, foge o riso,\nMas eterno és Tu, Senhor!",
            "estrofe2": "Tudo passa nesta vida,\nAlegria e dissabor;\nTudo foge como a sombra,\nTudo foge qual vapor.",
            "estrofe3": "Ano velho que termina\nNunca volta a refluir,\nMas a fé que me conforta\nHá de sempre reluzir.",
            "estrofe4": "Imutável, Deus bondoso,\nVem minha alma proteger!\nVem livrar-me dos reveses,\nVem em tudo me valer!",
            "estrofe5": "Vem, aclara a estreita senda\nQue terei de palmilhar!\nVem, dirige minha vida,\nOs meus passos vem guiar!",
            "som": "",
            "coro": ""
        },
        {
            "id": 476,
            "tb": 147,
            "selecionado": true,
            "estrofe1": "Rompe a aurora! Vai-se embora\nMais um ano de labor!\nNão temamos, prossigamos\nA lutar com mais fervor.",
            "estrofe2": "Raia o dia! Que alegria!\nTudo vem de Sua mão!\nPaz, repouso, santo gozo,\nEis os dons da salvação.",
            "estrofe3": "No momento, os talentos\nEmpreguemos com prazer;\nE sem susto, ante o Justo,\nSempre havemos de viver.",
            "estrofe4": "Oh! louvemos e cantemos\nHoje a Deus com grande ardor!\nVem do arcano mais um ano\nQue anuncia Seu favor.",
            "estrofe5": "",
            "som": "",
            "coro": "Ano findo nunca mais veremos;\nAno novo hoje recebemos!\nVem! vê o belo dom que Deus nos dá!"
        },
        {
            "id": 477,
            "tb": 396,
            "selecionado": true,
            "estrofe1": "Já termina o ano velho;\nDamos a Jesus louvor,\nQue do mal nos tem guardado\nEste ano com amor.",
            "estrofe2": "A verdade em nós conserva,\nTem nossa alma em proteção;\nDe doutrina falsa e ímpia\nLivra nosso coração.",
            "estrofe3": "Do pecado nos afasta,\nNossos passos vem guiar\nE, esquecidas nossas culpas,\nUm bom ano vem-nos dar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 478,
            "tb": 423,
            "selecionado": true,
            "estrofe1": "Ano velho, já findado,\nFoste dom do Criador.\nAno bom, que vens entrando,\nVens do mesmo Benfeitor.\nTodo o tempo, todo o tempo\nTestemunha o Seu amor.",
            "estrofe2": "Ano bom, a tua vinda\nCelebramos com festim,\nMas teus dias fugitivos\nPrestes voam para o fim.\nIgnoramos, ignoramos\nSe veremos outro assim.",
            "estrofe3": "Cantaremos esta graça\nCom acorde e suave som.\nE, com vivo regozijo,\nBendizendo o excelso dom,\nSaudaremos, saudaremos\nO ano novo, o ano bom!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 479,
            "tb": 82,
            "selecionado": true,
            "estrofe1": "Quiseste às bodas de Caná,\nSenhor, comparecer.\nVem hoje os noivos inspirar\nUnidos a viver!",
            "estrofe2": "Tu proclamaste santo e bom\nO voto conjugal,\nPrefigurando o Teu amor\nÀ Igreja terrenal.",
            "estrofe3": "Os que se achegam ao altar\nPara esta santa união\nImploram bênçãos perenais\nE Tua proteção.",
            "estrofe4": "Permite àqueles que hoje vêm\nUnir-se em santo amor\nA graça de se amarem mais,\nVivendo em Teu temor.",
            "estrofe5": "E dá-lhes Teu divino dom,\nQue a todos satisfaz;\nConcede-lhes, da vida ao fim,\nA Tua eterna paz.",
            "som": "",
            "coro": ""
        },
        {
            "id": 480,
            "tb": 543,
            "selecionado": true,
            "estrofe1": "Pai, colocaste já no ser humano\nTeus sentimentos, Teu divino amor;\nEis que, segundo Teu sagrado plano,\nVem este par perante Ti, Senhor.",
            "estrofe2": "Bem como às aves dás seguro abrigo,\nBem como aos ninhos dás também calor,\nDá para os noivos lar ameno e amigo,\nDá proteção, e reine assim o amor.",
            "estrofe3": "Vem conceder-lhes luz em sua história,\nFé, confiança, mais amor também;\nTua presença seja-lhes notória\nConstantemente em seu viver. Amém!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 481,
            "tb": 430,
            "selecionado": true,
            "estrofe1": "Abençoa, Deus eterno,\nEstes noivos hoje aqui.\nQue, ao darem este passo,\nSe aproximem mais de Ti.\nPõe Teu selo, põe Teu selo\nSobre esta santa união. ) bis",
            "estrofe2": "Sobre a esposa, acumula\nTua bênção, Teu favor.\nDá, por dote, imensa graça,\nTeu excelso e santo amor.\nVirtuosa, virtuosa,\nOh! que possa sempre ser. \t) bis",
            "estrofe3": "Sê, Tu, guia do esposo\nPara os votos seus cumprir.\nOh! concede o Teu amparo\nVenha o que possa vir.\nVenturoso, venturoso\nSeja ele até o fim. \t) bis",
            "estrofe4": "Santifica este enlace,\nOs nubentes vem guiar.\nSê o hóspede bem-vindo,\nVem com eles habitar.\nTuas bênçãos, Tuas bênçãos\nDá-lhes sempre, ó Senhor. \t) bis",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 482,
            "tb": 220,
            "selecionado": true,
            "estrofe1": "Bendito Salvador,\nCom Tua aprovação,\nConduze em doce amor\nTeus filhos nesta união.\nOh! vem aos noivos conceder\nA graça que lhes é mister!",
            "estrofe2": "Concede-lhes andar\nUnidos no Senhor\nE a vida assim passar\nEm santo e puro amor.\nLigados no temor de Deus,\nCaminhem juntos para os céus.",
            "estrofe3": "Senhor, se Te aprouver\nOuvir nossa oração,\nPodemos compreender,\nÓ Pai, que nesta união\nImagem temos desse amor\nQue prende a Igreja e o Salvador.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 483,
            "tb": 4,
            "selecionado": true,
            "estrofe1": "Senhor, queremos dedicar\nA Ti tão precioso ser;\nNas Tuas mãos o vem tomar,\nE assim, por Ti, há de viver.",
            "estrofe2": "Por Tua graça e Teu poder\nObedecendo à Tua lei,\nLeal, feliz há de crescer\nE Te servir, ó grande Rei.",
            "estrofe3": "Os nossos votos, santo Pai,\nA Ti queremos renovar;\nE assim também crescendo vai\nTeu povo, em graça salutar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 484,
            "tb": 266,
            "selecionado": true,
            "estrofe1": "Jesus, nós Te queremos\nAgora oferecer\nOs nossos pequeninos,\nPrimícias do viver.",
            "estrofe2": "Liberta as suas almas\nDe apegos terreais\nE inspira-lhes anelos\nDe glórias imortais.",
            "estrofe3": "Aos pais concede a graça\nDo vigilante amor,\nFiel e abnegado,\nConstante no Senhor.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Entrando nesta vida,\nPerigos correm mil;\nDefende-os, pois, ó Cristo,\nDo fascinante ardil."
        },
        {
            "id": 485,
            "tb": 730,
            "selecionado": true,
            "estrofe1": "Vinde, meninos, vinde a Jesus,\nQue vos obteve bênçãos na cruz!\nOs pequeninos Ele conduz,\nVinde ao Salvador!",
            "estrofe2": "―Amo as crianças!‖, Cristo vos diz,\nQuer que entreis no lindo país;\nQuer conceder-vos vida feliz,\nVinde ao Salvador!",
            "estrofe3": "Eis a mensagem: ―Oh! vinde a Mim!‖\nOutro não há que vos queira assim;\nSeu é o amor que nunca tem fim!\nVinde ao Salvador!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Que alegria! Sem pecado ou mal,\nReunidos todos, afinal,\nNesse país feliz, eternal,\nJunto ao Salvador!"
        },
        {
            "id": 486,
            "tb": 424,
            "selecionado": true,
            "estrofe1": "Venham, todas as crianças,\nAo bendito Salvador;\nÉ Jesus quem quer salvá-las,\nQuer mostrar-lhes Seu favor.\nCristo sempre nos concede\nSua graça, Seu amor! ) bis",
            "estrofe2": "―Venham, todas as crianças‖,\nÉ o convite de Jesus;\nEle, a fim de perdoá-las,\nSua vida deu na cruz.\nCristo sempre, com ternura,\nQuer guiar-nos para a luz! ) bis",
            "estrofe3": "Venham, todas as crianças,\nAo Senhor Jesus servir,\nReceber os Seus preceitos,\nSua sábias leis ouvir.\nCristo sempre quer a todos,\nCom paciência, instruir. ) bis",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 487,
            "tb": 350,
            "selecionado": true,
            "estrofe1": "Vejo no céu resplendente\nDo sol a clara luz;\nQuero viver tão somente\nBrilhando por Jesus.",
            "estrofe2": "Quero em tudo exaltá-lO\nNa escola e no estudar,\nTambém jamais esquecê-lO\nEm casa e no brincar.",
            "estrofe3": "Pronto a servir toda a gente,\nAssim me quer Jesus,\nRosto alegre e contente,\nBrilhando como a luz.",
            "estrofe4": "Do feio e triste pecado\nJesus me vem guardar;\nPor Ele sempre amparado\nDesejo, sim, andar.",
            "estrofe5": "Sendo da Sua vontade,\nBrilhando viverei;\nE, pela Sua bondade,\nAo lindo céu irei.",
            "som": "",
            "coro": "Brilhando, brilhando,\nQuero brilhar como a luz;\nBrilhando, brilhando,\nQuero brilhar por Jesus!"
        },
        {
            "id": 488,
            "tb": 187,
            "selecionado": true,
            "estrofe1": "Sabes quantas estrelinhas\nLá no firmamento estão?\nSabes quantas nuvenzinhas\nPelo vasto mundo vão?\nDeus a todas tem contado,\nUma só não há faltado,\nNem de tantas uma só. (bis)",
            "estrofe2": "Sabes quantas aves voam\nPelo luminoso ar?\nQuantos peixes que não cansam,\nDivertindo-se no mar?\nDeus a todos deu a vida,\nCada um tem sua lida,\nAlegria e prazer. (bis)",
            "estrofe3": "",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 489,
            "tb": 737,
            "selecionado": true,
            "estrofe1": "Oh! vinde, crianças!\nCantai a linda história\nDo bom Messias, Rei dos reis,\nJesus, o Salvador!\nE repeti, com gratidão,\nA doce e terna exclamação:\n―Deixai os pequeninos que venham a Mim!‖",
            "estrofe2": "Pais crentes, devotos,\nTraziam os filhinhos,\nBuscando a bênção e o favor\nDe Cristo, Emanuel.\nE, com palavras de rigor,\nSão afastados do Senhor:\n―Levai os pequeninos, tirai-os daqui!‖",
            "estrofe3": "Mas eis que o bom Mestre,\nCom carinhoso gesto,\nAs criancinhas chama a Si\nE aos presentes diz:\n―Sobre elas Minhas mãos porei,\nEu mesmo as abençoarei;\nDeixai os pequeninos que venham a Mim!‖",
            "estrofe4": "Sim, vinde, crianças!\nJesus vos deu Seu sangue\nE vos convida para o céu,\nBuscai a salvação.\nEle é o divinal Pastor!\nOuvi a voz do Redentor:\n―Deixai os pequeninos que venham a Mim!‖",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 490,
            "tb": 627,
            "selecionado": true,
            "estrofe1": "Oh! louvai-O, todas as crianças, \t\t) bis\nDeus é amor, Deus é amor. \t\t) ",
            "estrofe2": "Sede gratas, todas as crianças, ) bis\nDeus é amor, Deus é amor. \t\t)",
            "estrofe3": "Oh! amai-O, todas as crianças, ) bis\nDeus é amor, Deus é amor. \t\t)",
            "estrofe4": "Coroai-O, todas as crianças, \t\t) bis\nDeus é amor, Deus é amor. \t\t)",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 492,
            "tb": 538,
            "selecionado": true,
            "estrofe1": "É tão linda essa história do bom Salvador,\nQue no mundo como homem andou\nE com meigas palavras de terno amor\nPara Si os meninos chamou.\nSua mão repousou com carinho e poder\nNas crianças reunidas assim.\nAh! quão doce seria escutá-lO dizer:\n―Os meninos que venham a Mim!‖",
            "estrofe2": "Venho agora, eu, com minha oração a Jesus,\nA pedir-Lhe o indizível favor\nDe acolher-me em Seus braços no mundo de luz,\nOnde eu veja o bendito Senhor!\nSim, espero habitar com Jesus, outrossim,\nNo palácio dos filhos de Deus,\nJá que muitos meninos se ajuntam ali,\nPois ―dos tais é o reino dos céus.‖",
            "estrofe3": "Mas é certo que tantos milhares jamais\nConseguiram saber desse amor;\nFolgaríamos nós que esses pobres mortais\nConhecessem o bom Redentor.\nOh! que todos, bem cedo, recebam com fé\nA mensagem que traz salvação,\nE conosco terão de Jesus a mercê\nDe viverem em Sua mansão.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 493,
            "tb": 578,
            "selecionado": true,
            "estrofe1": "Eis que Cristo vem à terra\nBuscar Suas jóias,\nSuas jóias mui preciosas\nDe muito valor.",
            "estrofe2": "Vem buscá-las, vai levá-las\nAo reino celeste,\nSuas jóias resplendentes\nDe muito valor.",
            "estrofe3": "Os meninos e as meninas\nQue servem a Cristo\nSão-Lhe jóias, ricas jóias,\nDe muito valor.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Como estrelas da aurora\nBrilhando na fronte\nDe Jesus, lá na glória\nAdorno serão."
        },
        {
            "id": 494,
            "tb": 220,
            "selecionado": true,
            "estrofe1": "Por minha boa mãe\nE pelo seu amor,\nImenso e sem rival,\nSou grato ao Senhor!",
            "estrofe2": "Pois ela me cuidou\nDa vida ao despertar\nE aos pés do bom Jesus\nFez-me encaminhar.",
            "estrofe3": "Se rico ou pobre for,\nJamais hei de a esquecer\nE minha boa mãe\nNa mente hei de ter.",
            "estrofe4": "É bom aqui sentir\nDa mãe o santo amor;\nPor ela, o coração\nBendiz o Criador.",
            "estrofe5": "",
            "som": "",
            "coro": "É grande o bem\nQue na alma tem\nQuem pode a alguém\nChamar de mãe.\nMãe querida,\nSempre estás no meu coração.\nRecebe a minha gratidão,\nÓ conselheira querida."
        },
        {
            "id": 495,
            "tb": 266,
            "selecionado": true,
            "estrofe1": "A nós aqui reunidas,\nSenhor, envia luz;\nSão Tuas nossas vidas,\nGanhaste-as já na cruz.\nÉ vão qualquer trabalho\nSem Tua aprovação,\nO nosso esforço é falho,\nSe não nos dás a mão.",
            "estrofe2": "Se a nossa fé se abala\nEm face às tentações,\nSerenamente fala\nAos nossos corações.\nA experiência viva\nDo Teu fiel amor\nO nosso ardor ativa\nE inspira em nós fervor.",
            "estrofe3": "Esposas, mães piedosas\nQueremos ser, Senhor,\nFiéis e carinhosas\nEnchendo o lar de amor.\nQue a paz e a harmonia\nDominem nosso lar.\nEm nossa companhia\nVem Tu sempre habitar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Nós, crentes, redimidas,\nConfiamos nosso lar\nE as nossas próprias vidas\nA Ti, no Teu altar."
        },
        {
            "id": 496,
            "tb": 362,
            "selecionado": true,
            "estrofe1": "Sempre unidas, companheiras,\nDeclaremos, por Jesus,\nGuerra santa contra as trevas,\nPelejando junto à cruz.",
            "estrofe2": "Somos fracas, bem sabemos,\nMas havemos de vencer\nSe tivermos confiança,\nSe cumprirmos o dever.",
            "estrofe3": "Sempre firmes na esperança,\nConfiando no Senhor,\nImploremos Sua graça\nE busquemos Seu amor!",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Vamos todas, companheiras!\nSempre unidas no Senhor!\nComo esposas, mães ou filhas,\nTrabalhemos com fervor."
        },
        {
            "id": 497,
            "tb": 237,
            "selecionado": true,
            "estrofe1": "Tudo é belo em derredor\nCom amor no lar;\nNossa vida é melhor\nCom amor no lar.\nEsse amor produz a paz,\nToda a mágoa e dor desfaz,\nLuz, saúde e gozo traz\nSempre o amor no lar.",
            "estrofe2": "Na choupana há prazer\nCom amor no lar;\nÓdio e mal não pode haver\nCom amor no lar.\nCada rosa no jardim\nCanta hinos para mim,\nDando à vida alegre fim,\nCom amor no lar.",
            "estrofe3": "Harmonia há de vir\nCom amor no lar;\nTodos vão poder sentir\nEsse amor no lar.\nDo riacho o murmurar\nE das aves o cantar,\nTudo leva a jubilar\nCom amor no lar.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Com o amor do Senhor,\nNão há dor, não há pesar,\nCom Jesus no lar."
        },
        {
            "id": 498,
            "tb": 447,
            "selecionado": true,
            "estrofe1": "Desce, ó Deus, com Tua graça\nE abençoa o nosso lar;\nDá-lhe calma e confiança\nMesmo quando a dor chegar!\nCobre o teto, nosso abrigo,\nCom Teu manto protetor,\nEnche o ar que nos envolve,\nDe alegria, paz e amor.",
            "estrofe2": "Nesta casa e em nossas almas,\nBrilhe a Tua santa luz!\nQue vivamos irmanados,\nSob a égide da cruz!\nFaze deste lar um templo\nDe onde ardentes orações\nSubam, qual fragrante incenso,\nDe submissos corações.",
            "estrofe3": "",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 499,
            "tb": 215,
            "selecionado": true,
            "estrofe1": "Divino Salvador,\nContempla com favor\nNosso país!\nDá-nos interna paz,\nGoverno bom, capaz,\nVida que satisfaz,\nNação feliz.",
            "estrofe2": "Olhamos para Ti,\nVem dominar aqui,\nÓ Rei dos reis!\nDirige o pátrio lar,\nEnsina a governar\nConforme o Teu mandar,\nPor justas leis.",
            "estrofe3": "Do crime e rebelião\nConcede a proteção\nQue é divinal.\nGuardar-nos vem, Senhor,\nDe guerras e terror;\nSê nosso defensor,\nDesvia o mal.",
            "estrofe4": "Poder supremo tens!\nOutorga os altos bens\nDa salvação.\nBrilhe a benigna luz\nQue o Teu favor produz!\nReine o Senhor Jesus\nSobre a nação!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 500,
            "tb": 249,
            "selecionado": true,
            "estrofe1": "Ó Pátria minha amada,\nBrasil dos sonhos meus,\nDirija o teu destino\nA mão do eterno Deus!\nQue brilhe em teu caminho\nA refulgente luz\nDo amor e da verdade,\nDa glória de Jesus!",
            "estrofe2": "Que o Pai dirija e guarde\nA vida nacional\nE a livre de perigos,\nPecado e todo o mal!\nA quantos que governam\nConceda o Seu favor\nE guie em paz o povo\nNa senda ideal do amor!",
            "estrofe3": "O Deus Onipotente\nNão cesse de abençoar\nO pai, a mãe, os filhos,\nO rico e o pobre lar!\nO obreiro em seu trabalho,\nO mestre, o moço, o ancião\nAlcancem, cada dia,\nDivina proteção!",
            "estrofe4": "Jesus, protege sempre\nO povo do Brasil,\nE desçam sobre a terra\nAs Tuas bênçãos mil!\nA gratidão nos leve\nA erguer-Te o coração\nEm culto fervoroso,\nEm santa adoração!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 501,
            "tb": 191,
            "selecionado": true,
            "estrofe1": "Por nossa Pátria oramos\nA Ti, supremo Deus!\nPor nosso lar clamamos\nA Ti, ó Rei dos céus!\nBendize a vida pastoril,\nGoverna o brio senhoril,\nModera a lida mercantil.\nDeus salve a Pátria!",
            "estrofe2": "Da Pátria que nos deste,\nDesvie Tua mão\nDesgraças, fome e peste,\nPerfídia e sedição;\nSustenta a ordem nacional,\nO bom governo imparcial,\nE dá-nos graça divinal.\nDeus salve a Pátria!",
            "estrofe3": "Dá-nos real civismo,\nFiel, constante, audaz;\nPromove o cristianismo\nDo Príncipe da Paz;\nDa Pátria afasta crenças vãs,\nDerrama bênçãos temporãs,\nDominem só doutrinas sãs.\nDeus salve a Pátria!",
            "estrofe4": "A Tua Igreja inflama\nCom zelo e terno amor,\nE seja o seu programa\nCumprido com vigor.\nEntão, os salvos de Jesus,\nLutando firmes pela cruz,\nDifundirão de Cristo a luz\nPor toda a Pátria!",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 502,
            "tb": 246,
            "selecionado": true,
            "estrofe1": "Da Igreja, o fundamento\nÉ Cristo, o Salvador;\nEm Seu poder descansa\nE é forte em Seu amor.\nEm Cristo bem firmada,\nSegura sempre está\nE sobre a Rocha eterna\nJamais se abalará.",
            "estrofe2": "A Pedra preciosa\nQue Deus predestinou\nSustenta pedras vivas\nQue a graça trabalhou.\nE, quando o monumento\nSurgir em plena luz,\nA glória do edifício\nSerá do Rei Jesus!",
            "estrofe3": "Senhor, nós Te rogamos\nQue, erguido por amor,\nO templo consagrado\nRedunde em Teu louvor\nE que almas redimidas\nAqui, em comunhão,\nSe tornem templo santo\nDa Tua habitação.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": ""
        },
        {
            "id": 503,
            "tb": 506,
            "selecionado": true,
            "estrofe1": "Deus vos guarde pelo Seu poder,\nProtegidos, abençoados,\nDesfrutando os Seus cuidados,\nDeus vos guarde pelo Seu poder.",
            "estrofe2": "Deus vos guarde para o Seu louvor,\nConsolados e contentes,\nSempre em comunhão com os crentes;\nDeus vos guarde para o Seu louvor.",
            "estrofe3": "Deus vos guarde bem no Seu amor,\nNo trabalho venturoso,\nPara o dia glorioso,\nDeus vos guarde bem no Seu amor.",
            "estrofe4": "",
            "estrofe5": "",
            "som": "",
            "coro": "Pelo Seu poder e no Seu amor,\nEstaremos juntos com Jesus,\nPelo Seu poder e no Seu amor,\nOh! que Deus nos guarde em Sua luz!"
        }

    ])

    const [musicaSelecionada, setMusicaSelecionada] = useState(1);

    // pega o objeto filtrado
    const musica = letra.find(item => item.id === musicaSelecionada);
    //Caso eu queira ver o total de música
    const musicTotal = letra.length;
    //------------------------
    // Alert.alert("total de musicas", `${musicTotal}`)


    //Verificar se tem coro
    let conteudoCoro;
    if (musica?.coro == '') {
        conteudoCoro = (
            <View></View>
        );
    } else {
        conteudoCoro = (
            <View style={styles.coro} >
                <Text style={{ fontWeight: "bold" }} >
                    {musica && (
                        <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.coro}</Text>
                    )}
                </Text>
            </View>
        );
    }

    function playSound() {
        Alert.alert("Aviso", "Áudio indisponível no momento.");
    }

    return (
        <ScrollView style={[styles.scrollContainer, {backgroundColor: isDarkMode ? '#000' : '#fff'}]} >
            <StatusBar hidden />
            <View style={[styles.picContainer, { backgroundColor: isDarkMode ? '#111' : '#eee' }]}>
                <Picker itemStyle={{color:"red"}}
                    selectedValue={musicaSelecionada}
                    onValueChange={(itemValue) => setMusicaSelecionada(itemValue)}
                    style={[styles.picker, { color: isDarkMode ? '#fff' : '#222' }]}>
                    {
                        letra.map(val => (
                            <Picker.Item key={val.id} label={`Canção ${val.id}`} value={val.id}
                            />
                        ))
                    }
                </Picker>
                {/* BOTÃO REPRODUZIR ÁUDIO */}
                <TouchableOpacity style={{ width: '20%' }} onPress={playSound} >
                    <AntDesign name="play-circle" size={24} color={isDarkMode ? '#fff' : '#001'} />
                </TouchableOpacity>
                {musica && (
                    <Text style={[styles.tb, { color: isDarkMode ? '#fff' : '#001' }]}>TB: {musica.tb}</Text>
                )}
            </View>
            {/* /*Aqui será renderizados as letras*/}
            <View style={styles.container} >
                <View style={styles.estrofe} >
                    {musica && (
                        <Text style={[styles.letra, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe1}</Text>
                    )}
                </View>
                {/* VIEW REFRÃO - CORO */}
                {
                    conteudoCoro
                }

                {/* VIEW ESTROFE 2 */}
                <View style={styles.estrofe} >
                    <Text  >
                        {musica && (
                            <Text style={[styles.letra, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe2}</Text>
                        )}
                    </Text>
                </View>
                {/* VIEW ESTROFE 3 */}
                <View style={styles.estrofe} >
                    <Text  >
                        {musica && (
                            <Text style={[styles.letra, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe3}</Text>
                        )}
                    </Text>
                </View>
                {/* VIEW ESTROFE 4 */}
                <View style={styles.estrofe} >
                    <Text  >
                        {musica && (
                            <Text style={[styles.letra, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe4}</Text>
                        )}
                    </Text>
                </View>
                {/* VIEW ESTROFE 5 */}
                <View style={styles.estrofe} >
                    <Text  >
                        {
                            musica && (
                                <Text style={[styles.letra, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe5}</Text>
                            )
                        }
                    </Text>
                </View>
                {/* VIEW ESTROFE 6 */}
                <View style={styles.estrofe} >
                    <Text >
                        {
                            musica && (
                                <Text style={[styles.letra, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe6}</Text>
                            )
                        }
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer:{
        backgroundColor:"#fff",
        height:"100%"
    },
    container: {
        margin: 10
    },
    estrofe: {
        marginTop: 10,
        marginLeft: "1%",
        marginRight: "1%",
        width: '100%',
    },
    coro: {
        width: '100%',
        margin: 12
    },
    letra: {
        fontSize: 16 * escala,
        width: '100%',
    },
    picContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
    },
    picker: {
        width: '60%',
    },
    tb: {
        fontWeight: 'bold',
        width: '20%',
    }
});

export default body;