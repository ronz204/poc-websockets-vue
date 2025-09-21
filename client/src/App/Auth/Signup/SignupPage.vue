<script lang="ts" setup>
import SignupForm from "./SignupForm.vue";
</script>

<template>
  <div class="min-h-screen flex items-center justify-center background-pattern p-6">
    <div class="max-w-md w-full py-7 px-5 rounded-xl space-y-3 bg-zinc-900">

      <div class="text-center space-y-2">
        <h1 class="text-xl sm:text-2xl font-bold">Create an Account</h1>
        <p class="text-sm sm:text-base">Join us to get started</p>
      </div>

      <SignupForm />

      <div class="text-center">
        <p class="text-sm sm:text-base"> Already have an account?
          <RouterLink to="/signin" class="underline">Login</RouterLink>
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
