<script lang="ts" setup>
import Button from "primevue/button";
import Message from "primevue/message";

import { InputText } from "primevue";
import { Form } from "@primevue/forms";
import { SignupResolver } from "./SignupResolver";
import type { FormSubmitEvent } from "@primevue/forms";

const onSubmit = async (data: FormSubmitEvent) => {
  console.log("submit form", data.values.name);
};
</script>

<template>
  <div class="text-center space-y-3">
    <p class="text-xl font-semibold">Create an Account</p>

    <Form class="border-2 p-2" v-slot="$form"
      :resolver="SignupResolver" @submit="onSubmit">

      <div>
        <InputText name="name" type="text" placeholder="Username" fluid />
        <Message v-if="$form.name?.invalid" severity="error" variant="simple">
          {{ $form.name.error.message }}
        </Message>
      </div>

      <div>
        <InputText name="password" type="password" placeholder="Password" fluid />
        <Message v-if="$form.password?.invalid" severity="error" variant="simple">
          {{ $form.password.error.message }}
        </Message>
      </div>

      <Button type="submit" label="Register" fluid />
    </Form>
  </div>
</template>
