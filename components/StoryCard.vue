<template>
  <div class="story-issues">
    <div
      class="issue-item"
      :style="{ width: `${200 + additionalIssueWidth}px` }"
    >
      <h4 class="issue-summary">{{ issue.fields.summary }}</h4>
      <div class="issue-labels">
        <span
          v-for="(label, index) in labels"
          :key="index"
          class="label-item"
          >{{ label }}</span
        >
      </div>
      <span class="issue-key">{{ issue.key }}</span>
      <div class="issue-actions">
        <img
          class="issue-priority"
          :src="issue.fields.priority.iconUrl"
          :title="issue.fields.priority.name"
        />
        <img
          class="issue-creator"
          :src="issue.fields.creator.avatarUrls['16x16']"
          :title="issue.fields.creator.emailAddress"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StoryCard",
  props: {
    labelTitle: {
      type: String,
      default: "",
    },
    issue: {
      type: Object,
      default: () => {},
    },
  },
  data: () => {
    return {};
  },
  computed: {
    labels() {
      return this.issue.fields.labels.filter(
        (label) => label !== this.labelTitle
      );
    },
    estimation() {
      return this.issue.fields.timetracking.originalEstimateSeconds
        ? Math.floor(
            this.issue.fields.timetracking.originalEstimateSeconds /
              (60 * 60 * 24)
          )
        : null;
    },
    additionalIssueWidth() {
      return this.estimation * 10;
    },
  },
};
</script>
