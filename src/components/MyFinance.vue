<template>
  <div>CURRENT BALANCEDFAF</div>
  <div>${{ state.count }}</div>
</template>

<script>
import supabase from '../supabase.js'
import { defineProps, reactive } from 'vue'

// defineProps({
//   msg: String
// })

const state = reactive({ count: 0 })

// // const state = reactive({ currentBalance: 0 })

// export default {
//   // data () {
//   //   return {
//   //     currentBalance: 0
//   //   }
//   // },
//   async created () {
//     // console.log("fetching from supabase")

//     // let { data: WeeklySpending, error } = await supabase
//     //   .from('WeeklySpending')
//     //   .select('id')
//     // console.log('success, data =', data)
//     // this.currentBalance = 5050; 
//   }
// }
</script>