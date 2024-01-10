<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { fetchChartsData } from '@/store/chartsSlice'

import * as chartConfig from '@/data/columnChartConfig'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const chartsData = fetchChartsData()
const data = chartsData.chartsData.statisticsChart
</script>

<template>
  <div class="space-y-3">
    <div class="flex font-semibold flex-col md:flex-row text-white md:justify-between">
      <p class="text-lg">Statistic</p>
      <div class="flex gap-4">
        <div v-for="item in data.datasets" class="flex gap-1 items-center">
          <div
            class="w-3 h-3 rounded-full"
            :style="{ backgroundColor: item.backgroundColor }"
          ></div>
          <p>{{ item.label }}</p>
        </div>
      </div>
    </div>
    <div class="h-[250px]">
      <Bar :data="data.data" :options="data.options" />
    </div>
  </div>
</template>
