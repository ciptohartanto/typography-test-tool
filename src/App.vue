<template lang="pug">
  #app
    .block(v-for="text in texts")
      h3.title {{ text.title }}

      typo-test(:typography-lang="text.lang" :text="text.text")


</template>

<script>
import TypoTest from "./modules/TypoTest";

export default {
  name: "app",
  components: {
    TypoTest
  },
  data() {
    return {
      texts: [
        {
          text:
            "God Save the Queen God save our gracious Queen, Long live our noble Queen,",
          lang: "en",
          title: "Text in English"
        },
        {
          text:
            "신은 여왕을 구한다 하나님께서는 우리의 은혜로운 여왕을 구원해 주시고 우리의 고귀한 여왕을 오래 사세요",
          lang: "kr",
          title: "Text in Korean"
        },
        {
          text: "上帝保佑女王 上帝保佑我們親切的女王， 我們高貴的女王萬歲，",
          lang: "zh",
          title: "Text in Mandarin"
        },
        {
          text:
            "พระเจ้าคุ้มครองราชินี พระเจ้าช่วยราชินีที่สง่างามของเรา ลองใช้ราชินีผู้สูงศักดิ์ของเรา",
          lang: "th",
          title: "Text in Thai"
        },
        {
          text:
            "女王陛下万歳神は私たちの優雅な女王を救い、私たちの高貴な女王を長く生き、",
          lang: "jp",
          title: "Text in Japanese"
        }
      ]
    };
  }
};
</script>

<style lang='sass'>

#app
  height: 100%
  display: block
  margin: 0 auto
  padding: 10px 18px
  display: flex
  overflow-x: scroll
  width: 100%
  @media screen and (max-width: 768px)
    width: 345%

.block
  width: 20%
  height: auto
  padding: 20px

.title
  font-size: 18px
  font-weight: bold
  margin-bottom: 30px

.title2
  font-size: 16px
  font-weight: bold
  margin-top: 10px
  margin-bottom: 10px
  span
    margin-bottom: 10px
    display: block

.color1
  color: #bada55
.color2
  color: #a55bad

</style>
