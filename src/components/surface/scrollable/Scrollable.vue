<template>
  <div class="scrollable-container">
    <slot name="fixed-top" />
    <div class="scrollable-content">
      <slot />
    </div>
    <slot name="fixed-bottom" />
  </div>
</template>

<script>
export default {
  name: "Scrollable",
};
</script>
