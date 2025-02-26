# Nuxt Date Formatter

A simple Nuxt.js plugin to format dates.

**Note: This is a demo plugin.**

## Installation

To install this plugin, run:

```bash
pnpm add nuxt-date-formatter
```

## Usage

Register the plugin in your `nuxt.config.js` file:

```typescript
import dateFormatter from 'nuxt-date-formatter'

export default {
  buildModules: [
    '@nuxt/typescript-build'
  ],
  plugins: [
    '~/plugins/dateFormatter.ts'
  ]
}
```

Use the plugin in your components:

```vue
<template>
  <div>
    <h1>Formatted Date: {{ formattedDate }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class FormattedDate extends Vue {
  date: string = '2025-02-26'

  get formattedDate(): string {
    return this.$formatDate(this.date)
  }
}
</script>
```