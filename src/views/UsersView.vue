<template>
  <v-nav>
    <h1>Usuarios View</h1>
    <h2>Registro de Usuario</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> Registrar </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Limpiar Formulario </v-btn>

      <v-btn color="warning" @click="resetValidation"> Limpiar Validation </v-btn>
    </v-form>
  </v-nav>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: "Password",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style></style>
