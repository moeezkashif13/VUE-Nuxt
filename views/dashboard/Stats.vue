<script setup>
// import Container from './Stats/Container.vue'
// import StatisticsChart from './Stats/StatisticsChart.vue'
// import MonthlyProfitChart from './Stats/MonthlyProfitChart.vue'
// import Crypto from './Stats/Crypto.vue'
// import MediumCard from './Stats/MediumCard.vue'
// import PortfolioBalance from './Stats/PortfolioBalance.vue'
// import MyPortfolio from './Stats/MyPortfolio.vue'
// import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
// import {
//   Cog6ToothIcon,
//   FunnelIcon,
//   QuestionMarkCircleIcon,
//   Squares2X2Icon
// } from '@heroicons/vue/24/outline'
// import SideNav from './SideNav.vue'
// import { CurrencyDollarIcon } from '@heroicons/vue/24/solid'

const currentDate = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const date = new Intl.DateTimeFormat("en-US", options).format(currentDate);
</script>

<template>
  <section
    class="max-w-[950px] flex-grow bg-[#FAFAFA] dark:bg-[#111315] space-y-3"
  >
    <!-- <div class="xl:hidden bg-[#26272E] flex items-center px-2 justify-between">
      <div class="w-14 h-14 flex items-center">
        <CurrencyDollarIcon class="w-8 text-[#2E73E4]" />
      </div>
      <div class="flex text-[#919295]">
        <div
          style="transition: all 0.5s"
          class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
        >
          <Squares2X2Icon style="transition: all 0.5s" class="w-6 h-6 group-hover:text-[#2E73E4]" />
        </div>
        <div
          style="transition: all 0.5s"
          class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
        >
          <Squares2X2Icon style="transition: all 0.5s" class="w-6 h-6 group-hover:text-[#2E73E4]" />
        </div>
        <div
          style="transition: all 0.5s"
          class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
        >
          <Squares2X2Icon style="transition: all 0.5s" class="w-6 h-6 group-hover:text-[#2E73E4]" />
        </div>
        <div
          style="transition: all 0.5s"
          class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
        >
          <Squares2X2Icon style="transition: all 0.5s" class="w-6 h-6 group-hover:text-[#2E73E4]" />
        </div>
        <div
          style="transition: all 0.5s"
          class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
        >
          <Squares2X2Icon style="transition: all 0.5s" class="w-6 h-6 group-hover:text-[#2E73E4]" />
        </div>
      </div>
      <div class="flex gap-x-3 text-[#919295]">
        <div>
          <Cog6ToothIcon class="h-6 w-6 cursor-pointer" />
        </div>
        <div>
          <QuestionMarkCircleIcon class="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </div>

    <section class="px-4 md:px-6 pt-5 space-y-7">
      <div class="flex gap-y-3 items-start md:items-center justify-between flex-col md:flex-row">
        <div class="flex">
          <div class="flex gap-3">
            <h1 class="text-primary dark:text-white text-3xl md:text-4xl font-bold">Dashboard</h1>
            <p class="text-secondary font-medium text-xs pt-4 md:pt-5">{{ date }}</p>
          </div>
        </div>

        <div
          class="w-full md:w-[350px] px-2 text-[#D3D4DF] flex items-center rounded-xl self-start bg-white dark:bg-[#26272E]"
        >
          <div class="w-6">
            <MagnifyingGlassIcon />
          </div>
          <input
            type="text"
            class="outline-none text-sm border-none pl-2 w-full bg-transparent py-2.5"
            placeholder="Search lorem ipsum"
          />
          <div class="w-6 text-purple-new dark:hidden">
            <FunnelIcon />
          </div>
        </div>
      </div>

      <div class="space-y-5">
        <div class="flex gap-5 flex-col md:flex-row">
          <Container width="md:w-[50%]">
            <StatisticsChart />
          </Container>

          <Container width="md:w-[50%]"><MonthlyProfitChart /></Container>
        </div>

        <div class="flex gap-5 flex-wrap md:flex-nowrap">
          <Container width="sm:w-[calc(50%-10px)] md:w-[25%]" v-for="container in [1, 2, 3, 4]">
            <Crypto />
          </Container>
        </div>

        <div class="flex gap-5 flex-col md:flex-row">
          <div class="w-full md:w-[30%] space-y-5">
            <Container>
              <MediumCard />
            </Container>
            <Container>
              <MediumCard />
            </Container>
          </div>
          <div class="flex-grow">
            <Container>
              <PortfolioBalance />
            </Container>
          </div>
        </div>

        <Container class="hidden lg:block">
          <MyPortfolio />
        </Container>
      </div>
    </section> -->
  </section>
</template>
