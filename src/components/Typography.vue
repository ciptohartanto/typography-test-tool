<template lang="pug">
component(
  :is="tag"
  ) {{text}}
</template>
<script>
export const TYPO_STYLE = {
  TITLE_XS: "title--xs",
  TITLE_SM: "title--sm",
  TITLE_LG: "title--lg",
  SUBTITLE_XS: "subtitle--xs",
  SUBTITLE_SM: "subtitle--sm",
  SUBTITLE_LG: "subtitle--lg",
  CONTEXT_XS: "context--xs",
  CONTEXT_SM: "context--sm",
  CONTEXT_LG: "context--lg"
};

export default {
  name: "Typography",
  props: {
    tag: {
      type: String,
      default: () => ""
    },
    text: {
      type: String,
      default: () => ""
    }
  }
};
</script>
<style lang="sass" scoped>
.typography
  &-title
    &--xs
      font-size: 10px
    &--sm
      font-size: 12px
    &--lg
      font-size: 14px
  &-subtitle
    &--xs
      font-size: 16px
    &--sm
      font-size: 18px
    &--lg
      font-size: 20px
  &-context
    &--xs
      font-size: 24px
    &--sm
      font-size: 28px
    &--lg
      font-size: 32px

</style>