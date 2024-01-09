<script setup>
import {
  Cog6ToothIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  QuestionMarkCircleIcon,
  ChartPieIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  CurrencyDollarIcon,
} from "@heroicons/vue/24/outline";

const commonSpace = "space-y-6";

const props = defineProps({
  device: String,
});
</script>

<template>
  <section
    class="min-w-[70px] bg-white dark:bg-[#26272E] xl:flex flex-col items-center py-5"
  >
    <div class="w-14 h-10 flex justify-center">
      <CurrencyDollarIcon class="w-8 text-[#2E73E4]" />
    </div>

    <div :class="['mt-10 text-[#D3D4DF]', commonSpace]">
      <div
        style="transition: all 0.5s"
        class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
      >
        <Squares2X2Icon
          style="transition: all 0.5s"
          class="w-6 h-6 group-hover:text-[#2E73E4]"
        />
      </div>
      <div
        style="transition: all 0.5s"
        class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
      >
        <ChatBubbleOvalLeftEllipsisIcon
          style="transition: all 0.5s"
          class="w-6 h-6 group-hover:text-[#2E73E4]"
        />
      </div>
      <div
        style="transition: all 0.5s"
        class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
      >
        <ShoppingBagIcon
          style="transition: all 0.5s"
          class="w-6 h-6 group-hover:text-[#2E73E4]"
        />
      </div>
      <div
        style="transition: all 0.5s"
        class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
      >
        <ChartPieIcon
          style="transition: all 0.5s"
          class="w-6 h-6 group-hover:text-[#2E73E4]"
        />
      </div>
      <div
        style="transition: all 0.5s"
        class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
      >
        <CalendarDaysIcon
          style="transition: all 0.5s"
          class="w-6 h-6 group-hover:text-[#2E73E4]"
        />
      </div>
    </div>

    <div
      :class="[
        'flex flex-col text-[#D3D4DF] items-center mt-auto',
        commonSpace,
      ]"
    >
      <div>
        <Cog6ToothIcon class="h-6 w-6 cursor-pointer" />
      </div>
      <div>
        <QuestionMarkCircleIcon class="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  </section>
</template>
