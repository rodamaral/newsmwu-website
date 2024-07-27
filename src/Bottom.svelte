<script lang="ts">
  import Back2 from "./assets/images/Back2.png";
</script>

<section class="secondSection">
  <img src={Back2} class="image" alt="TODO Logo" />
  <div class="container">
    <h1>SECOND</h1>
  </div>
</section>

<style>
  .secondSection {
    position: relative;
    width: 100%;
  }
  .secondSection > .image {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .secondSection > .container {
    position: absolute;
    background-color: #0000ff40;
    top: 0;
    width: 100%;
  }
</style>
