<script lang="ts" setup>
import Button from "primevue/button";
import Message from "primevue/message";

import { InputText } from "primevue";
import { Form } from "@primevue/forms";
import { FormField } from "@primevue/forms";

import { SigninResolver } from "./SigninResolver";
import type { FormSubmitEvent } from "@primevue/forms";

const onSubmit = async (data: FormSubmitEvent) => {
  console.log("submit form", data.values.name);
};
</script>

<template>
  <div class="text-center space-y-3">
    <p class="text-xl font-semibold">Login your Account</p>

    <Form class="border-2 p-2 space-y-3" 
      :resolver="SigninResolver" @submit="onSubmit">

      <!-- Name Field -->
      <FormField v-slot="$field" name="name">
        <InputText type="text" placeholder="Username" fluid />
        <Message v-if="$field.invalid" severity="error" variant="simple">
          {{ $field.error.message }}
        </Message>
      </FormField>

      <!-- Password Field -->
      <FormField v-slot="$field" name="password">
        <InputText type="password" placeholder="Password" fluid />
        <Message v-if="$field.invalid" severity="error" variant="simple">
          {{ $field.error.message }}
        </Message>
      </FormField>

      <Button type="submit" label="Register" fluid />
    </Form>
  </div>
</template>
