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
    background-position-x: center;
    background-position-y: top;
    background-repeat: repeat;
    background-size: auto;
    min-height: max(100vh, 1536px);
  }
</style>
