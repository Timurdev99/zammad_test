<template>
  <!--Card 1-->
  <div data-testid="dataCard">
    <h2 class="text-xl font-bold">{{ cardCaption }}</h2>
    <p class="tracking-wide mt-2">{{ contextData }}</p>
  </div>

  <!-- use the modal component, pass in the prop -->
  <modal :show="showModal" @close="showModal = false">
    <template #header>
      <h2 class="text-2xl" data-testid="dataTitle">{{ cardCaption }}</h2>
    </template>
    <template #body>
      <h3 class="text-xl">open_giveaway_url</h3>
      <h3 class="text-left text-base">{{ openGiveURL }}</h3>
      <h3 class="text-xl mt-5">Instructions</h3>
      <ul v-for="(item, index) in strInstructions.split('\n')" :key="index">
        <li class="list-none text-base text-left">{{ item }}</li>
      </ul>
    </template>
  </modal>
  <button
    id="show-modal"
    class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
    @click="showModal = true"
    data-testid="btnViewMore"
  >
    View More
  </button>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'DataCard',
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      parentMessage: 'Parent',
    }
  },
  props: {
    contextData: String,
    cardCaption: String,
    strTotalData: String,
    strInstructions: String,
    openGiveURL: String,
    dataId: String,
  },
  methods: {},
}
</script>
