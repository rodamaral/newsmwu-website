<script lang="ts">
  import Logo from "./assets/images/logo.png";
  import DownloadPointer from "./DownloadPointer.svelte";
  import { TAS_URL, WALKTHROUGH_URL } from "./lib/constants";
  import VideoContainer from "./VideoContainer.svelte";
</script>

<section class="section">
  <div class="container">
    <img src={Logo} class="logo" alt="Site logo" />

    <div class="container2">
      <VideoContainer description="Watch the full 100% TAS!" url={TAS_URL} />

      <DownloadPointer />

      <VideoContainer
        description="Watch the complete walkthrough"
        url={WALKTHROUGH_URL}
      />
    </div>
  </div>
</section>

<style>
  .section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: 8px;
    margin: 0 16px;
    min-height: 80vh;
    width: 100%;
    max-width: 1200px;
  }
  .logo {
    min-width: 200px;
    max-width: 400px;
    flex: 1 1 100px;
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }

  .container2 {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-items: flex-end;
    flex: 1 1 auto;
    max-width: 100%;
    width: 100%;
    overflow: auto;
    gap: 8px;
  }

  @media (min-width: 720px) {
    .container2 {
      flex-direction: row;
      align-items: center;
      align-items: flex-end;
      justify-items: center;
      flex: 1 1 auto;
      max-width: 100%;
      overflow: auto;
    }
  }
</style>
