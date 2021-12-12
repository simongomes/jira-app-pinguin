<template>
  <div class="main-wrapper">
    <story-row
      v-for="(label, index) in labels"
      :key="index"
      :label="label"
      :issues="stories[label]"
    />
  </div>
</template>

<script>
import { JIRA_DATA } from "~/utils/datastore";
import { fetchIssue } from "~/utils/repository";
import StoryRow from "~/components/StoryRow";
export default {
  components: { StoryRow },
  data: () => {
    return {
      labels: ["Roadmap", "Quality", "Frontend", "Backend", "Bugs"],
      stories: {
        Roadmap: [],
        Quality: [],
        Frontend: [],
        Backend: [],
        Bugs: [],
      },
    };
  },
  mounted() {
    // Sample API Calling
    console.log(fetchIssue());

    const { issues } = JIRA_DATA;
    issues.forEach((issue) => {
      const { labels } = issue.fields;
      if (
        labels.length === 0 ||
        (labels.length === 1 && labels.includes("Roadmap"))
      ) {
        this.stories.Roadmap.push(issue);
      } else {
        labels.forEach((label) => {
          if (label !== "Roadmap" && this.labels.includes(label)) {
            this.stories[label].push(issue);
          }
        });
      }
    });
    for (const i in this.stories) {
      console.log(i);
    }
  },
};
</script>
