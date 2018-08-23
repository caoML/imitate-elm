<template>
    <div class="title-bar">
        <span>{{title}}</span>
        <span>{{subTitle}}</span>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String
  }
}
</script>

<style scoped>
.title-bar {
  padding: 15px;
  margin: 0 auto;
  margin-top: -40px;
  border-radius: 3px;
  background-color: #5cb860;
  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28),
    0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);
}
.title-bar >>> span:first-child {
  display: block;
  margin-bottom: 5px;
  color: white;
  font-size: 1.125em;
  font-weight: 300;
  line-height: 1.5em;
}
.title-bar >>> span:nth-child(2) {
  color: rgba(255, 255, 255, 0.62);
  font-weight: 300;
  line-height: 1.5em;
}
</style>
