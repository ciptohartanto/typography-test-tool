<template lang="pug">
  .typoTest

    .testme
      .testme--line(:style="{top: pos + 'px'}")
      typography(
        :text="text" tag="h3"
        :style="{fontSize: fontsize + 'px', lineHeight: lineheight + 'em', fontWeight: weight}"
        :class="_theLangClass"
        )

    .options
      span.bold.options-title Text Size
      input(type='text' v-model='fontsize')
      span.italic px

    .options
      span.bold.options-title Line Height
      input(type='text' v-model='lineheight')
      span.italic em

    .options
      span.bold.options-title Ruler Pos
      input(type='text' v-model='pos')
      span.italic px from top

    .options
      span.bold.options-title Weight
      select(v-model='weight')
        option(value="normal") Normal (default)
        option(value="bold") Bold

</template>

<script>
import Typography from "./../components/Typography";

export default {
  name: "TypoTest",
  components: {
    Typography
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    fontsize: {
      type: Number,
      default: 18
    },
    lineheight: {
      type: Number,
      default: 1.4
    },
    pos: {
      type: Number,
      default: 24
    },
    typographyLang: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      weight: "normal"
    };
  },
  computed: {
   _theLangClass: function() {
      return `font--${this.typographyLang}`
   }
  }
};
</script>

<style lang="sass" scoped>
.testme
  border-top: 1px solid red
  border-bottom: 1px solid red
  position: relative
  width: 100%
  margin-top: 40px
  margin-bottom: 20px

  &--line
    position: absolute
    top: 30px
    right: 0
    left: 0
    border-bottom: 2px dotted purple


.options
  font-size: 13px
  margin-top: 20px
  input
    margin-left: 10px
    margin-right: 5px
    text-align: center
    font-size: 15px
    padding: 5px
    border: 1px solid teal
    width: 50px

  &-title
    width: 80px
    display: inline-block
.bold
  font-weight: bold
.italic
  font-style: italic
  
.font--kr
  font-family: 'Apple SD Gothic Neo'
  
.font--en
  font-family: 'SF Pro', 'sfpro'

.font--jp
  font-family: 'Hiragino Sans'
  
.font--zh
  font-family: 'PingFang TC'
  
.font--th
  font-family: 'Thonburi'

</style>