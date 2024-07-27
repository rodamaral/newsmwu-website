<script lang="ts">
  import Back1 from "./assets/images/Gam.png";
  import Logo from "./assets/images/logo.png";
  import DownloadPointer from "./DownloadPointer.svelte";
  import VideoContainer from "./VideoContainer.svelte";
</script>

<section class="mainSection">
  <img src={Back1} class="background-image" alt="TODO Logo" />

  <div class="container">
    <img src={Logo} class="logo" alt="TODO Logo" />

    <div class="container2">
      <VideoContainer
        description="Watch the full 100% TAS!"
        url="https://www.youtube.com/embed/tgbNymZ7vqY"
      />

      <DownloadPointer />

      <VideoContainer
        description="Watch the complete walkthrough"
        url="https://www.youtube.com/embed/tgbNymZ7vqY"
      />
    </div>
  </div>
</section>

<style>
  .mainSection {
    position: relative;
    width: 100%;
    max-width: 100%;
    border: 8px solid black;
  }

  .mainSection > .background-image {
    position: relative;
    width: 100%;
    height: 100%;
    /* min-height: 1000px; */
    aspect-ratio: 16 / 9;
    width: 100% !important;
    min-height: 500px;
  }

  .logo {
    border: 1px solid blue;
    min-width: 200px;
    max-width: 400px;
    width: min-content;
    flex: 1 1 100px;
  }

  .container2 {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-items: center;
    flex: 1 1 auto;
    /* display: grid; */
    border: 8px solid magenta;
    max-width: 100%;
    overflow: auto;
  }

  @media (min-width: 720px) {
    .container2 {
      flex-direction: row;
      align-items: center;
      justify-items: center;
      flex: 1 1 auto;
      /* display: grid; */
      border: 8px solid red;
      max-width: 100%;
      overflow: auto;
    }
  }

  .mainSection > .container {
    position: absolute;
    max-width: 100%;
    height: 100%;
    background-color: #ff000060;
    border: 8px solid green;
    top: 0;
    /* top: -600%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
</style>
