<template>
  <div>
    <div class="flex justify-between mb-4">
      <h1 class="font-semibold text-xl text-white">My Portfolio</h1>
      <div>dots</div>
    </div>

    <table class="overflow-scroll whitespace-nowrap">
      <tr class="text-left text-[#777b89] text-sm font-medium">
        <th class="">Coin</th>
        <th class="">Last Price</th>
        <th class=""></th>
        <th class="">24 Change</th>
        <th class="">Market</th>
        <th class=""></th>
      </tr>

      <tr class="h-[70px]" v-for="list in [1, 2, 3, 4, 5, 6, 7, 8]">
        <td class="">
          <div class="flex font-semibold text-white gap-x-3 items-center">
            <div class="w-11 h-11 rounded-full bg-orange-500"></div>
            <p>Bitcoin</p>
          </div>
        </td>

        <td class="font-bold text-white">$34,459.81</td>

        <td class="">
          <div class="text-[#7534A9] flex gap-x-1.5 font-medium">
            <div>ic</div>
            <p>25%</p>
          </div>
        </td>

        <td class="text-[#72749A] font-semibold">$646,224,737,128.21</td>

        <td class="">chart</td>

        <td class="">
          <div class="font-semibold rounded-xl bg-[#333A44] text-white py-2 text-center">Trade</div>
        </td>
      </tr>
    </table>
  </div>
</template>
