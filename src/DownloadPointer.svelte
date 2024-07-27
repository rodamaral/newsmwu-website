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
    animation: bounce-animation 2s ease infinite;
  }

  @keyframes bounce-animation {
    0% {
      transform: translateY(0);
    }
    66% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
</style>
