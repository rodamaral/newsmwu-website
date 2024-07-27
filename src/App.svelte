<script lang="ts">
  import Top from "./Top.svelte";
  import Bottom from "./Bottom.svelte";
</script>

<main>
  <Top />
  <Bottom />
</main>

<style>
  main {
    background-image: url("./assets/images/background.png");
    background-position: center;
    background-repeat: repeat-x;
    background-size: cover;
  }
</style>
