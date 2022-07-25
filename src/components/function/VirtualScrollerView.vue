<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title class="white--text orange darken-4">
      VirtualScroller 사용하기

      <v-spacer></v-spacer>

      <v-btn color="white" class="text--primary" fab small>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pt-4">
      버츄얼 스크롤러의 기능을 살펴보기
    </v-card-text>

    <v-divider></v-divider>

    <v-virtual-scroll :items="items" :item-height="50" height="300">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar :color="item.color" size="56" class="white--text">
              {{ item.initials }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.fullName }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn depressed small>
              차량 위치 보기
              <v-icon color="orange darken-4" right>
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      colors: ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
      names: ['M1000RR', 'S1000RR', 'S1000R', 'R1M', 'R1', 'CBR1000RR/R', 'CBR1000RR', 'CB1000', 'R1000R', 'R1000', 'H2S', 'H2SX', 'ZH2', 'ZX10R', 'Z1000', 'Z1000SX', 'GSX1300R', 'ZZR1400', 'CBR650R', 'CBR600RR', 'CB600', 'ZX6R', 'Z900', 'R6', 'R7', 'R600', 'Michael', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'James', 'Charlie', 'James', 'Charles', 'William', 'Damian', 'Daniel', 'Thomas', 'Amelia', 'Margaret', 'Emma', 'Mary', 'Olivia', 'Samantha', 'Olivia', 'Patricia', 'Isla', 'Bethany'],
    }),

    computed: {
      items () {
        const namesLength = this.names.length
        const colorsLength = this.colors.length

        return Array.from({ length: 10000 }, (k, v) => { // eslint-disable-line
          const name = this.names[this.genRandomIndex(namesLength)]

          return {
            color: this.colors[this.genRandomIndex(colorsLength)],
            fullName: `${name}`,
            initials: `${name[0]}`,
          }
        })
      },
    },

    methods: {
      genRandomIndex (length) {
        return Math.ceil(Math.random() * (length - 1))
      },
    },
  }
</script>