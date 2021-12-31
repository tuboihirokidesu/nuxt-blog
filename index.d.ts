import { accessorType } from './store'

declare module 'vue/types/options' {
  export interface ComponentOptions<V extends Vue> {
    layout?: string
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
