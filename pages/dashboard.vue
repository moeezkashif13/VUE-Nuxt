<script setup>
definePageMeta({
  // middleware: "auth",
});
import { onMounted } from "vue";
import SideNav from "@/views/dashboard/SideNav.vue";
import Sidebar from "@/views/dashboard/Sidebar.vue";
import Stats from "@/views/dashboard/Stats.vue";
// import Stats from './Stats.vue'
// import axiosInstance from '@/lib/axios'
// import { fetchChartsData } from '@/store/chartsSlice'
// const chartsData = fetchChartsData()

// onMounted(() => {
//   chartsData.fetchData()
// })
document?.documentElement?.classList?.add("dark");
</script>

<template>
  <main class="flex flex-col lg:flex-row bg-[#111315] justify-center">
    <SideNav />
    <Stats />
    <Sidebar />
  </main>
</template>
