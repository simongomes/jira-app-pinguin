<template>
  <div class="story-row">
    <div class="story-label">{{ label }}</div>
    <story-card
      v-for="(issue, index) in issues"
      :key="index"
      :label-title="label"
      :issue="issue"
    />
  </div>
</template>
<script>
import StoryCard from "~/components/StoryCard";
export default {
  name: "StoryRow",
  components: { StoryCard },
  props: {
    label: {
      type: String,
      default: "",
    },
    issues: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {};
  },
};
</script>
