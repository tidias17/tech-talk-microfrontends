<script>
  import { tapioca, states, isPendingOnboarding } from '@elo/utility';
  import { navigateToUrl } from "single-spa";
  const click = async() => {
    tapioca('alface');
    const getStates = await states();
    isPendingOnboarding.set(!$isPendingOnboarding)
  };
</script>

<header>
  <img
    src="https://images.elo7.com.br/assets/v3/desktop/svg/logo-elo7.svg"
    width="89"
    height="34"
    on:click={click}
    alt="Logo Elo7"
  />
  <ul>
    <li
      on:click={() => navigateToUrl("/")}
    >
      Dashboard
    </li>
    <li
      on:click={() => navigateToUrl("/onboarding")}
    >
      Cadastro
    </li>
    <li
      on:click={() => navigateToUrl("/products")}
    >
      Produtos
    </li>
    <li
      on:click={() => navigateToUrl("/order")}
    >
      Pedidos
    </li>
    <li
      on:click={() => navigateToUrl("/wallet")}
    >
      Carteira
    </li>
  </ul>
</header>

<style lang="scss">
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;
    ul {
      display: flex;
      flex-wrap: nowrap;
      margin-left: 16px;
      gap: 32px;
      li {
        cursor: pointer;
      }
    }
  }
</style>
