<script lang="ts" setup>
import SignupForm from './SignupForm.vue';
</script>

<template>
  <div class="min-h-screen flex items-center justify-center background-pattern">
    <div class="max-w-md w-full py-7 px-5 ring-2 rounded-xl bg-zinc-900">
      <SignupForm />
    </div>
  </div>
</template>

<style scoped>
.background-pattern {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/src/Assets/Backgrounds/SimpleShiny.svg");
}
</style>
