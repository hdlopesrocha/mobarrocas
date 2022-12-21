<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div v-for="product in products1" :key="product.header" class="col-12">
              <CardComponent :header="product.header" :body="product.body"></CardComponent>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div v-for="product in products2" :key="product.header" class="col-12">
              <CardComponent :header="product.header" :body="product.body"></CardComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'

export default {
  name: 'ProductsPage',
  props: {
    msg: String
  },
  components: {
    CardComponent
  },
  data() {
    return {
      products1: [
        {
          header: 'CAMOMILA',
          body: '<b>NOME BOTÂNICO</b>: Chamomilla recutita<br><b>COMPOSIÇÃO</b>: Terpenoides e flavonoides.<br>\
                <b>PROPRIEDADES</b>: Adstringente, anti-alérgico, calmante, sedativo, digestivo, laxante, sudorífico, anti-inflamatório, cicatrizante. <br>\
                <b>CARACTERÍSTICAS</b>: Planta herbácea, pequenas flores, hastes eretas com 25cm a 50 cm.<br>\
                <b>CULTIVO</b>: Semear em Março Abril em solos com matéria orgânica, com exposição solar.<br>\
                <b>CICLO BIOLÓGICO</b>: Propagação Primavera/Verão<br>\
                <b>CLIMA</b>: Soalheiro e pouco ventoso<br>'
        },
        {
          header: 'HORTELÃ-PIMENTA',
          body: '<b>NOME BOTÂNICO</b>: Mentha piperita<br>\
                <b>COMPOSIÇÃO</b>: Mentol<br>\
                <b>PROPRIEDADES</b>: Ação digestiva, anti-séptica, estimulante de secreção gástrica, anti-espasmódico, tonificante.<br>\
                <b>CARACTERÍSTICAS</b>: Planta herbácea<br>\
                <b>CULTIVO</b>: Semear diretamente em terreno definitivo ou transplante, não tolera encharcamento dos terrenos de cultivo. <br>\
                <b>CICLO BIOLÓGICO</b>: Propagação Primavera/Verão<br>\
                <b>CLIMA</b>: Temperado, meia-sombra e resistente ao frio e à geada.<br>\
                <b>SOLO</b>: Ricos em matéria orgânica, húmidos e frescos.<br>'
        },
        {
          header: 'HORTELÃ-VULGAR',
          body: '<b>NOME BOTÂNICO</b>: Mentha Spicata<br>\
                <b>COMPOSIÇÃO</b>: Mentol<br>\
                <b>PROPRIEDADES</b>: Ação digestiva, anti-séptica, estimulante de secreção gástrica, anti-espasmódico, tonificante e atua como analgésico.<br>\
                <b>CARACTERÍSTICAS</b>: Planta herbácea<br>\
                <b>CULTIVO</b>: Semear diretamente em terreno definitivo ou transplante. Não tolera encharcamento dos terrenos de cultivo. <br>\
                <b>CICLO BIOLÓGICO</b>: Propagação Primavera/Verão<br>\
                <b>CLIMA</b>: Temperado, meia-sombra e resistente ao frio e à geada<br>\
                <b>SOLO</b>: Ricos em matéria orgânica, húmidos e frescos.<br>'
        },
        {
          header: 'LÚCIA-LIMA',
          body: '<b>NOME BOTÂNICO</b>: Lppia citriodora<br>\
                <b>COMPOSIÇÃO</b>: Rica em óleos essenciais, limoneno, citral e cariofileno.<br>\
                <b>PROPRIEDADES</b>: Atua sobre a digestão, cólicas gástricas, diarreia, flatulência, dismenorreia, cólicas renais e biliares. Anti-espasmódico.<br>\
                <b>CARACTERÍSTICAS</b>: Planta herbácea <br>\
                <b>CULTIVO</b>: Semear directamente no terreno ou transplante com raiz. Poda radical. Rega pouco frequente.<br>\
                <b>CICLO BIOLÓGICO</b>: Perene, germinação entre 15 a 20 dias.<br>\
                <b>CLIMA</b>: Temperado, resistente ao frio e à geada, soalheiro e pouco ventoso.<br>\
                <b>SOLO</b>: Bem drenado, intolerância a solos pesados.<br>'
        },
        {
          header: 'SALVIA',
          body: '<b>NOME BOTÂNICO</b>: Salvia Officinalis<br>\
                <b>PROPRIEDADES</b>: Dores de garganta, má digestão, problemas hormonais.<br>\
                <b>CARACTERÍSTICAS</b>: Planta herbácea<br>\
                <b>CULTIVO</b>: Sementeira em Março e Abril ou em estacas ao longo de todo o ano.<br>\
                <b>CICLO BIOLÓGICO</b>: Perene<br>\
                <b>CLIMA</b>: Sol, meia sombra<br>\
                <b>SOLO</b>: Arenosos e bem drenados<br>'
        },
        {
          header: 'TOMILHO-LIMÃO',
          body: '<b>NOME BOTÂNICO</b>: Thymus Citiodorus<br>\
                <b>PROPRIEDADES</b>: Anti-séptico, atua favoravelmente contra bactérias e vírus (gripes, bronquites...). Rico em ferro.<br>\
                <b>CARACTERÍSTICAS</b>: Planta herbácea<br>\
                <b>CULTIVO</b>: Por sementeira, divisão de touceiras ou por estacas, rega pouco frequente, áreas de cultivo de solos arenosos ou pedregosos, bem drenados.<br>\
                <b>CICLO BIOLÓGICO</b>: Perene<br>\
                <b>CLIMA</b>: Exposição solar<br>\
                <b>SOLO</b>: solos pobres arenosos e/ou pedrosos e secos<br>'
        },
        {
          header: 'ERVA-PRÍNCIPE',
          body: '<b>NOME BOTÂNICO</b>: Cymbopogan citratos<br>\
                <b>PROPRIEDADES</b>: Calmante, sudorífera, expectorante, diurético.<br>\
                <b>CARACTERÍSTICAS</b>: Planta herbácea, originária do sul da Índia, pode atingir 1,50m de altura.<br>\
                <b>CULTIVO</b>: Propagação através dos rebentos, plantados na primavera e verão.<br>\
                <b>CICLO BIOLÓGICO</b>: Primavera, verão.<br>\
                <b>CLIMA</b>: Exposição solar<br>\
                <b>SOLO</b>S: solos bem drenados<br>'
        },
        {
          header: 'ERVA-CIDREIRA',
          body: '<b>NOME BOTÂNICO</b>: Melissa Officinalis<br>\
                <b>PROPRIEDADES</b>: Antioxidante, antiviral, anti-inflamatório, digestiva, sedativa, ajuda a combater as insónias.<br>\
                <b>CARACTERÍSTICAS</b>: Da família das hortelãs, herbácea, a sua germinação é lenta, atinge cerca de 75cm a 85cm de altura, flores de cor branca ou rosácea.<br>\
                <b>CULTIVO</b>: Resiste bem à seca, semear ou plantar com raiz em terreno definitivo.<br>\
                <b>CICLO BIOLÓGICO</b>: Perene, a sementeira ou reprodução por estacas a partir da primavera/verão.<br>\
                A sua floração aparece a partir de Julho até final do Verão.<br>\
                <b>CLIMA</b>: Meia sombra, resiste facilmente ao frio.<br>\
                <b>SOLO</b>: Ácido, alcalino, húmido, leve e fértil.<br>'
        }
      ],
      products2:[
        {
          header: 'TÍLIA',
          body: '<b>NOME BOTÂNICO</b>: Tília platyphyllos<br>\
                <b>PROPRIEDADES</b>: sedativo, anti-espasmódico, vasodilatador, diurética e anti-inflamatório.<br>\
                <b>CARACTERÍSTICAS</b>: Cresce nos climas temperados, de grande porte, flores amarelas ligadas por um pedúnculo.<br>\
                <b>CICLO BIOLÓGICO</b>: Floração entre Maio e Junho. <br>\
                <b>CLIMA</b>: Temperado<br>\
                <b>SOLO</b>: Húmido<br>'
        },
        {
          header: 'FUNCHO',
          body: '<b>NOME BOTÂNICO</b>: Foeniculum vulgare<br>\
                  <b>PROPRIEDADES</b>: Melhora a digestão, combate o resfriado.<br>\
                  <b>CARACTERÍSTICAS</b>: Planta nativa da bacia do Mediterrâneo, pode atingir cerca de 2m de altura, folhas e sementes são utilizados na culinária e para fins medicinais.<br>\
                  <b>CICLO BIOLÓGICO</b>: Perene<br>\
                  <b>CLIMA</b>: Temperado<br>\
                  <b>SOLO</b>: Húmido<br>'
        },
        {
          header: 'PERPETUA-ROXA',
          body: '<b>NOME BOTÂNICO</b>: Gomphrena Globosa<br>\
                <b>PROPRIEDADES</b>: Combate a tosse e rouquidão. <br>\
                <b>CARACTERÍSTICAS</b>: Nativa da Índia, cresce espontaneamente em Portugal, as suas flores são usadas para fins medicinais.<br>\
                <b>CICLO BIOLÓGICO</b>: Primavera/Verão<br>\
                <b>CLIMA</b>: Temperado, exposição solar.<br>\
                <b>SOLO</b>: Ricos em matéria orgânica<br>'
        },
        {
          header: 'ROOIBOS',
          body: '<b>NOME BOTÂNICO</b>: Aspalathus linearis<br>\
                <b>PROPRIEDADES</b>: Antioxidante, baixos níveis de tanino, aconselhado para cólicas infantis, alergias, problemas dermatológicos e de asma.<br>\
                <b>CARACTERÍSTICAS</b>: Planta originária da África do Sul, os seus galhos e folhas são empregues em infusōes de coloração vermelha. É consumida de tal forma neste pais que deu origem ao “red-espresso”, concentrado de rooibos apresentado ao estilo de “café expresso”.<br>'
        },
        {
          header: 'GENGIBRE',
          body: '<b>NOME BOTÂNICO</b>: Zingiber officinale<br>\
                <b>PROPRIEDADES</b>: Antioxidante, anti-inflamatório. Atua contra perda de apetite, diarreia, vómitos.<br>\
                <b>CARACTERÍSTICAS</b>: Planta herbácea, originaria da Ilha de Java, Índia e China. Os seus rizomas são utilizados como ingredientes culinários e medicinais.<br>'
        },
        {
          header: 'CARDAMOMO',
          body: '<b>NOME BOTÂNICO</b>: Elettaria cardamomum<br>\
                <b>PROPRIEDADES</b>: Antissepticas, digestivas, diuréticas, expectorantes e laxantes.<br>\
                <b>CARACTERÍSTICAS</b>: Planta da familia do gengibre, originaria da Índia, as suas sementes são utilizadas na culinaria e para fins medicinais, podem ser transformadas em pó ou em óleo.<br>'
        },
        {
          header: 'ALCAÇUZ',
          body: '<b>NOME BOTÂNICO</b>: Glycyrrhiza glaba<br>\
                <b>PROPRIEDADES</b>: Expetorante, antitússica, anti-inflamatório.<br>\
                <b>CARACTERÍSTICAS</b>: Planta da familia das fabaceae, originária da Europa Ocidental, (Portugal) e Oriente. Planta arbustiva, atinge 1 a 2 metros de altura. A raiz é a parte da planta usada em culinária e fins medicinais.<br>'
        },
        {
          header: 'ANIS ESTRELADO',
          body: '<b>NOME BOTÂNICO</b>: Illicium verum<br>\
                <b>PROPRIEDADES</b>: Anti-séptica, anti-inflamatório, calmante, digestiva, diurética.<br>\
                <b>CARACTERÍSTICAS</b>: Planta originária da China e Vietname, atinge cerca de 6 a 8 metros de altura. Os seus frutos em forma de rosetas são utilizados na culinária e para fins medicinais. Estas sementes depois de secas é-lhe retirado o óleo que constitui o principal fármaco para tratamento da gripe A, o Tamiflu (nome comercial).<br>'
        },
        {
          header: 'CANELA',
          body: '<b>NOME BOTÂNICO</b>: Cinnamomum verum<br>\
                <b>PROPRIEDADES</b>: Adstringente, digestiva, excitante, hipertensora, tónica e dilatadora.<br>\
                <b>CARACTERISTICAS</b>: Planta nativa do Sri Lanka, de pequeno porte, exige locais de muita pluviosidade e clima quente. A sua casca é utilizada para fins medicinais e culinária. A sua ingestão é desaconselhada a mulheres grávidas.<br>'
        }
      ]

    }
  }
}
</script>

<style scoped>
h3 {
  color: rgb(220, 204, 120);
}

b {
  color: rgb(34, 74, 49);
}

.logo {
  padding: 32px;
}

.card {
  margin-bottom: 16px;
}
</style>
