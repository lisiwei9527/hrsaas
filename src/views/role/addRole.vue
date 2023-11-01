<script setup>
function test(a) {
  console.log(a)
  var a = 1
  console.log(a)
  function a() {}
  console.log(a)
  var b = function () {}
  console.log(b)
  function d() {}
}

test(2)
</script>
<template>
  <div>打开控制台</div>
</template>

<style lang="scss" scoped></style>
