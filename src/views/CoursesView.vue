<template>
  <v-container>
    <h1>Cursosss!</h1>
    <v-card
      class="mx-auto" max-width="400" v-for="(listCourse, $index) in listCourses" :key="$index">
      <v-img :src="listCourse.img" gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"> </v-img>
      <v-card-title> {{ listCourse.title }}</v-card-title>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col>
                <strong>Duración: {{ listCourse.duration }}</strong>
                <div class="text-caption">Costo: {{ list.price }}</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
              <v-col>
                <strong>Cupos: {{ listCourse.quota }}</strong>
                <div class="text-caption mb-2">Completado: {{ listCourse.status }}</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col>
                <strong>Fecha De Registro: {{ listCourse.registrationDate }}</strong>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="teal lighten-3" small>
            <v-row class="pt-1">
              <v-col>
                <strong>Descripcion: {{ listCourse.desc }}</strong>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("courses", {
      listCourses: (state) => state.list,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions("courses", {
      getAllCourses: "getAll",
    }),
  },
};
</script>

<style></style>
