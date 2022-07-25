<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1>1" step="1">개인정보 동의</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1>2" step="2">개인정보 입력</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">확인 및 가입</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
        <v-btn color="primary" @click="e1 = 2">다음</v-btn>
        <v-btn text>취소</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
        <v-btn color="primary" @click="e1 = 3">다음</v-btn>
        <v-btn text>취소</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
        <v-btn color="primary"  @click="tthingttong()">가입</v-btn>
        <v-btn text>취소</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    }
  },
  methods: {
    tthingttong() {
      alert("가입 완료")
      this.e1 = 1
    }
  }
}
</script>