<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'
</script>

<template>
  <PaginationRoot :total="100" :sibling-count="0" show-edges :default-page="1">
    <PaginationList v-slot="{ items }" class="PaginationList">
      <PaginationPrev :style="{ marginRight: 16 }" class="prev">
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" class="button-number" :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="PaginationEllipsis">
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext :style="{ marginLeft: 16 }" class="next">
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/button-arrow.scss';
@import '~/assets/styles/button-number.scss';

/* reset */
button {
  all: unset;
}

.prev,
.next,
.button-number {
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  font-family: var(--font-title);
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 48px;
  width: 48px;
  cursor: pointer;
}

.PaginationEllipsis{
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
}

.PaginationList{
  display: flex;
  align-items: center;
  gap: 0.25rem; 
}
</style>