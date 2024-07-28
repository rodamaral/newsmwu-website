<script lang="ts">
  export let description: string;
  export let url: string;
</script>

<div class="container">
  <div class="description">{description}</div>

  <div class="video-box">
    <iframe
      class="video-frame"
      frameborder={0}
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    >
    </iframe>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 16px;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 150px;
    background-color: #ffda00;
    overflow: hidden;
    padding: 4px 2em;
    text-align: center;
    border-radius: 9999em;
    box-sizing: content-box;
    font-size: 19px;
  }

  .video-box {
    position: relative;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 16/9;
    margin: 0 16px;
  }

  .video-frame {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
