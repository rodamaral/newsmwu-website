<script lang="ts">
  import ArrowDown from "./assets/images/arrow-down.png";
</script>

<div class="container">
  <span class="description"> Download link below</span>

  <img src={ArrowDown} class="logo" alt="Arrow pointing downward" />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    order: 2;
    gap: 10px;
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
    min-width: 14ch;
    max-width: 18ch;
  }
  .logo {
    animation: bounce-animation 2s ease infinite;
  }

  @keyframes bounce-animation {
    0% {
      transform: translateY(-10px);
    }
    66% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
</style>
