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
  <Form class="space-y-4 p-2" :resolver="SignupResolver" @submit="onSubmit">

    <FormField v-slot="$field" name="name">
      <InputText type="text" placeholder="Username" fluid class="mb-1 h-10" />
      <Message v-if="$field.invalid" severity="error" variant="simple">
        {{ $field.error.message }}
      </Message>
    </FormField>

    <FormField v-slot="$field" name="password">
      <InputText type="password" placeholder="Password" fluid class="mb-1 h-10" />
      <Message v-if="$field.invalid" severity="error" variant="simple">
        {{ $field.error.message }}
      </Message>
    </FormField>

    <Button type="submit" label="Register" fluid class="h-10" />

  </Form>
</template>
