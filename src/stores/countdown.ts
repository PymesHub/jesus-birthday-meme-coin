import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export const useCountdown = defineStore('countdown', {
  state: () => ({
    targetDate: dayjs('2024-12-25T00:00:00'),
    timeLeft: ref(dayjs('2024-12-25T00:00:00').diff(dayjs())),
  }),
  actions: {
    updateDate() {
      this.timeLeft = this.targetDate.diff(dayjs())
    },
  },
  getters: {
    days: (state) => dayjs.duration(state.timeLeft).days(),
    hours: (state) => dayjs.duration(state.timeLeft).hours(),
    minutes: (state) => dayjs.duration(state.timeLeft).minutes(),
    seconds: (state) => dayjs.duration(state.timeLeft).seconds(),
  },
})
