<script setup>
import {
  BellIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/vue/24/solid";
import { ArrowTrendingUpIcon } from "@heroicons/vue/24/solid";
import { useAuthentication } from "~/store/authSlice";

const { user, logoutUser } = useAuthentication();
console.log(user);
</script>

<template>
  <section
    class="px-5 pt-5 mt-4 lg:mt-0 space-y-6 basis-[260px] bg-white dark:bg-[#26272E]"
  >
    <div class="flex justify-between">
      <div
        class="w-10 h-10 rounded-xl text-purple-new flex justify-center items-center bg-[#F7FBFF]"
      >
        <BellIcon class="w-5 h-5" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="w-10 h-10 rounded-full bg-[#FAD2A4]">
          <img
            :src="user.user.photoURL"
            class="w-full h-full max-w-full rounded-full"
            alt=""
          />
        </div>
        <div class="text-sm text-center font-medium text-white">
          <p>{{ user.user.email }}</p>
          <p class="text-[#5D5D62]">{{ user.user.uid }}</p>
        </div>
      </div>

      <div
        @click="logoutUser"
        class="w-10 h-10 rounded-xl text-purple-new flex justify-center items-center bg-[#F7FBFF] cursor-pointer"
      >
        <ArrowLeftStartOnRectangleIcon class="w-5 h-5" />
      </div>
    </div>

    <div class="px-4 py-5 border rounded-lg border-[#5d606e] space-y-8">
      <div v-for="item in [1, 2]" class="space-y-4">
        <div class="flex font-semibold items-center justify-between">
          <p class="text-white">Trending</p>
          <div class="text-sm text-[#2E73E4] cursor-pointer">See All</div>
        </div>

        <div
          class="flex items-center text-sm"
          v-for="singleTrending in [1, 2, 3, 4]"
        >
          <div
            class="min-w-[40px] h-10 rounded-xl flex justify-center items-center"
            style="box-shadow: 0 0 12px 15px #4c4639 inset"
          >
            <div class="w-6 h-6">
              <svg
                enable-background="new 0 0 1024 1024"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="512" cy="512" fill="#f3ba2f" r="512" />
                <g fill="#fff">
                  <path
                    d="m404.9 468 107.1-107.1 107.1 107.2 62.3-62.3-169.4-169.5-169.4 169.4z"
                  />
                  <path
                    d="m254.6 467.9h88.1v88.1h-88.1z"
                    transform="matrix(.7071 -.7071 .7071 .7071 -274.5652 361.1246)"
                  />
                  <path
                    d="m404.9 556 107.1 107.1 107.1-107.2 62.4 62.3h-.1l-169.4 169.5-169.4-169.4-.1-.1z"
                  />
                  <path
                    d="m681.3 468h88.1v88.1h-88.1z"
                    transform="matrix(.7071 -.7071 .7071 .7071 -149.5987 662.8792)"
                  />
                  <path
                    d="m575.2 512-63.2-63.3-46.7 46.8-5.4 5.3-11.1 11.1-.1.1.1.1 63.2 63.2z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <div class="font-semibold text-white">Binance</div>
            <p class="text-secondary">Urna tristique</p>
            <div class="items-center text-green-500 font-semibold flex gap-x-1">
              <ArrowTrendingUpIcon class="w-4" />
              <p>2.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
