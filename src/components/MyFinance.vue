<template>
  <div>CURRENT BALANCED</div>
  <div>{{ currentBalance }}</div>
  <!-- <div>${{ state.count }}</div> -->
</template>

<script>
import supabase from '../supabase.js'
import '../plaid.js'

// import { defineProps, reactive } from 'vue'
// defineProps({
//   msg: String
// })
// const state = reactive({ count: 0 })

export default {
  data () {
    return {
      currentBalance: 0
    }
  },
  async created () {
    let { data: WeeklySpending, error } = await supabase
      .from('WeeklySpending')
      .select('id')
    console.log('success, data =', WeeklySpending)
    this.currentBalance = 5050; 
  }
}
</script>