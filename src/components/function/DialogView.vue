<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">개인정보</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="성*" required></v-text-field>
              </v-col>
               <v-col cols="12" sm="6" md="8">
                <v-text-field label="이름*" required></v-text-field>
               </v-col>
               <v-col cols="12">
                <v-text-field label="이메일*" hint="example of persistent helper text" persistent-hint required></v-text-field>
              </v-col>
               <v-col cols="12">
                 <v-text-field label="비밀번호*" type="password" required
                 ></v-text-field>
               </v-col>
               <v-col cols="12" sm="6">
                 <v-select :items="['1-19', '20-29', '30-55', '55+']" label="나이*" required></v-select>
               </v-col>
               <v-col cols="12" sm="6">
                 <v-autocomplete :items="['모터사이클', '기타', '축구', '풋살', '족구', '당구', '코딩', '여행', '게임']" label="취미" multiple></v-autocomplete>
               </v-col>
             </v-row>
           </v-container>
           <small>*필수</small>
         </v-card-text>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="blue darken-1" text @click="dialog = false">
             취소
           </v-btn>
           <v-btn color="blue darken-1" text @click="dialog = false">
             저장
           </v-btn>
         </v-card-actions>
       </v-card>
     </v-dialog>
  </v-row>  
</template>

<script>
export default {
  name: 'DialogView',

    data: () => ({
      dialog: false,
    }),
}
</script>