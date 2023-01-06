<template>
  <div class="flex flex-wrap mt-10 p-2">
    <div
      v-for="(item, index) in totalData"
      :key="index"
      class="w-1/2 md:w-1-/3 lg:w-1/4 p-2"
    >
      <div
        class="h-full bg-white p-5 rounded-lg shadow-md flex justify-between items-center flex-col"
      >
        <DataCard
          :cardCaption="item.title"
          :contextData="item.description"
          :strInstructions="item.instructions"
          :dataId="item.id"
          :openGiveURL="item.open_giveaway_url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataCard from '../components/DataCard.vue'
import axios from 'axios'
export default {
  data() {
    return {
      totalData: [],
      stringTotalData: '',
    }
  },
  components: {
    DataCard,
  },
  mounted() {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, header1',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, HEAD',
    }
    const apiUrl =
      'https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity'
    axios
      .get('https://cors-anywhere.herokuapp.com/' + apiUrl, {
        headers: headers,
      })
      .then(
        (response) => {
          if (response.data.length) {
            this.$toast.show(`Success! Successful Connection.`, {
              type: 'success',
              position: 'top-right',
            })
            this.stringTotalData =
              'title:' +
              response.data[0].title +
              '\n' +
              'description:' +
              response.data[0].title +
              '\n' +
              'instructions:' +
              response.data[0].instructions

            this.totalData = response.data
          } else {
            this.$toast.show(`Success! But no data.`, {
              type: 'warning',
              position: 'top-right',
            })
          }
        },
        (error) => {
          this.$toast.show(`Error Connection!.`, {
            type: 'error',
            position: 'top-right',
          })
        },
      )
  },
}
</script>
