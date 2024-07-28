<script lang="ts">
  import MarioImage from "./assets/images/mario.png";
  import { DOWNLOAD_URL } from "./lib/constants";

  function click() {
    window.open(DOWNLOAD_URL, "_blank");
  }
</script>

<div class="container">
  <img src={MarioImage} class="mario-image" alt="Super Mario picture" />

  <button on:click={click}>Download now!</button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    order: 2;
    gap: 24px;
  }

  .mario-image {
    max-height: 200px;
  }

  button {
    color: white;
    text-transform: uppercase;
    background-color: red;
    overflow: hidden;
    padding: 0.5em 2em;
    text-align: center;
    border-radius: 9999em;
    box-sizing: content-box;
    font-size: 24px;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 2px 3px black;
  }
</style>
