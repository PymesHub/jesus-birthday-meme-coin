<script lang="ts" setup>
import { useCountdown } from "@/stores/countdown";
import { storeToRefs } from "pinia";
import Jesus from "@/assets/jesus.png";

const store = useCountdown();

const { seconds, minutes, days, hours } = storeToRefs(store);

setInterval(() => {
  store.updateDate()
}, 1000)

</script>
<template>
  <section class="px-8 xl:flex xl:flex-col xl:items-center " >
    <div class="w-full xl:max-w-[500px] min-h-[320px] rounded-2xl flex bg-[#EFE9D2] shadow-xl items-center  flex-col px-4 pt-12">
      <img :src="Jesus" />
      <div class="w-full flex gap-[22px] items-center justify-center py-8" >
        <div class="flex flex-col gap-2 items-center justify-center" >
          <div >
             <p class="text-[#C62828] text-2xl font-medium" >{{ days }}</p>
          </div>
          <p class="text-[ #A5D6A7] text-sm"> Days </p>
        </div>
        <div class="flex flex-col gap-2 items-center justify-center" >
          <div >
             <p class="text-[#C62828] text-2xl font-medium" >{{ hours }}</p>
          </div>
          <p class="text-[ #A5D6A7] text-sm"> Hours </p>
        </div>
        <div class="flex flex-col gap-2 items-center justify-center" >
          <div >
             <p class="text-[#C62828] text-2xl font-medium" >{{ minutes }}</p>
          </div>
          <p class="text-[ #A5D6A7] text-sm"> Minutes </p>
        </div>
        <div class="flex flex-col gap-2 items-center justify-center" >
          <div >
             <p class="text-[#C62828] text-2xl font-medium" >{{ seconds }}</p>
          </div>
          <p class="text-[ #A5D6A7] text-sm"> Seconds </p>
        </div>
      </div>
    </div>
    <div class="w-full xl:max-w-[500px] flex py-8 flex-col gap-6">
      <button class="w-full h-[50px] rounded-xl bg-[#F4C542]
  transition transform duration-200 ease-in-out
  hover:scale-103 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#F4C542] text-base font-medium ">
        Wallet
      </button>
      <button class="w-full h-[50px] rounded-xl bg-[#F4C542]
  transition transform duration-200 ease-in-out
  hover:scale-103 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#F4C542] text-base font-medium ">
        Follow Me
      </button>
      <button class="w-full h-[50px] rounded-xl bg-[#F4C542]
  transition transform duration-200 ease-in-out
  hover:scale-103 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#F4C542] text-base font-medium ">
        Telegram
      </button>
    </div>
    </section>
</template>

