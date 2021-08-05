<template>
  <main>
    <div class='section-title'>
      <h1>{{loading ? 'loading...' : 'Demo pagination'}}</h1>
      <div class='underline'></div>
    </div>
    <section class='followers'>
      <div class='container'>
        <User v-for="(user, key) in users" :key="key" :user="user"/>
      </div>  
    </section> 

    <div v-if="!loading" class='btn-container'>
      <div class='btn-container'>
        <button class='prev-btn' @click="hanldePrevPage">
          prev
        </button>
        <button v-for="(item, index) in data" :key="index"
          :class="[ index === page ? 'active-btn' : '', 'page-btn']"
          @click="handlePage(index)"
        >
          {{index + 1}}
        </button>
        <button class='next-btn' @click="hanldeNextPage">
          next
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import User from './User.vue'
export default {
  data() {
    return {
      page: 0
    }
  }, 

  components: {
    User
  },
  computed: {
    ...mapState({
      loading: state => state.loading,
      data: state => state.data
    }),
    users() {
      const usersPerPage = this.data[this.page]
      return usersPerPage
    }
    
  },
  methods: {
    ...mapActions({
      getData: 'GET_DATA'
    }),

    handlePage(index) {
      this.page = index
    },

    hanldePrevPage() {
      const oldPage = this.page // current page
      const prevPage = () => {
        let prevPage = oldPage - 1
        if (prevPage < 0) {
          prevPage = this.data.length - 1
        }
        return prevPage
      }
      this.page = prevPage()
    },

    hanldeNextPage() {
      const oldPage = this.page // current page
      const nextPage = () => {
        let nextPage = oldPage + 1
        if (nextPage > this.data.length - 1) {
          nextPage = 0
        }
        return nextPage
      }
      this.page = nextPage()
    }

  },

  created() {
    this.getData()
  },
  mounted() {
  },
}
</script>

<style>
  
</style>