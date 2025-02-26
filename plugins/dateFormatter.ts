import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $formatDate: (date: Date | string, format?: Intl.DateTimeFormatOptions) => string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $formatDate: (date: Date | string, format?: Intl.DateTimeFormatOptions) => string
  }
}

const dateFormatter: Plugin = (context, inject) => {
  const formatDate = (date: Date | string, format: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }): string => {
    return new Date(date).toLocaleDateString(undefined, format)
  }

  inject('formatDate', formatDate)
}

export default dateFormatter