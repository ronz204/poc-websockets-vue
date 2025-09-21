<script lang="ts" setup>
import SigninForm from "./SigninForm.vue";
</script>

<template>
  <div class="min-h-screen flex items-center justify-center background-pattern p-6">
    <div class="max-w-md w-full py-7 px-5 rounded-xl space-y-3 bg-zinc-900">

      <div class="text-center space-y-2">
        <h1 class="text-xl sm:text-2xl font-bold">Login your Account</h1>
        <p class="text-sm sm:text-base">Welcome back! Please sign in</p>
      </div>

      <SigninForm />

      <div class="text-center">
        <p class="text-sm font-semibold"> Don't have an account?
          <RouterLink to="/signup" class="underline">Register</RouterLink>
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.background-pattern {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 640px) {
    background-image: url("/src/Assets/Backgrounds/SimpleShiny.svg");
  }
}
</style>