<script lang="ts" setup>
import Button from "primevue/button";
import Message from "primevue/message";

import { InputText } from "primevue";
import { Form } from "@primevue/forms";
import { FormField } from "@primevue/forms";

import { SignupResolver } from "./SignupResolver";
import type { FormSubmitEvent } from "@primevue/forms";

const onSubmit = async (data: FormSubmitEvent) => {
  console.log("submit form", data.values.name);
};
</script>

<template>
  <div class="text-center space-y-3">
    <div class="text-center space-y-2">
      <h1 class="text-2xl font-bold">Create an Account</h1>
      <p>Join us to get started</p>
    </div>

    <Form class="space-y-4 p-2" :resolver="SignupResolver" @submit="onSubmit">
      <FormField v-slot="$field" name="name">
        <InputText type="text" placeholder="Username" fluid class="mb-1" />
        <Message v-if="$field.invalid" severity="error" variant="simple">
          {{ $field.error.message }}
        </Message>
      </FormField>

      <FormField v-slot="$field" name="password">
        <InputText type="password" placeholder="Password" fluid class="mb-1" />
        <Message v-if="$field.invalid" severity="error" variant="simple">
          {{ $field.error.message }}
        </Message>
      </FormField>

      <Button type="submit" label="Register" fluid />
    </Form>

    <p class="text-sm font-semibold">
      Already have an account?
      <RouterLink to="/signin" class="underline">Login</RouterLink>
    </p>
  </div>
</template>
