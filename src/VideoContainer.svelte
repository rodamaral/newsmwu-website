<script lang="ts">
  export let description: string;
  export let url: string;
</script>

<div class="container">
  <div class="description">{description}</div>

  <div class="video-box">
    <iframe class="video-frame" src={url}> </iframe>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 306px; /* TODO */
    max-width: 150px; /* TODO */
    background-color: #ffda00;
    overflow: hidden;
    padding: 4px 2em;
    text-align: center;
    border-radius: 9999em;
    box-sizing: content-box;
    font-size: 19px;
  }

  .video-box {
    display: flex;
    justify-content: center;
  }

  .video-frame {
    aspect-ratio: 16 / 9;
    width: 100% !important;
  }
</style>
