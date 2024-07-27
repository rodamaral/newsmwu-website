<script lang="ts">
  import ArrowDown from "./assets/images/arrow-down.png";
</script>

<div class="container">
  <span class="description"> Download link below</span>

  <img src={ArrowDown} class="logo" alt="TODO Logo" />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    order: 2;
  }

  @media (min-width: 720px) {
    .container {
      order: 0;
    }
  }

  .description {
    text-transform: uppercase;
    text-align: center;
    font-size: 19px;
    font-weight: bold;
    max-width: 16ch;
  }
  .logo {
    background-color: aquamarine;
  }
</style>
