<script>
  import { isPendingOnboarding, onboarding, wallet, formatValueToCurrency, products, orders } from '@elo/utility';
  import { statesOnboarding } from '@elo/onboarding'; 
  const date = new Date();
  const balance = formatValueToCurrency($wallet.value);
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const productsIsActive = $products.filter((item) => item.isActive);
  const orderWasSend = $orders.filter((item) => item.wasSend);
  const pdq = async () => {
    console.log(await statesOnboarding());
  }
  pdq();
</script>

<section>
  {#if $isPendingOnboarding}
  <p class="warning">
    <img src="https://www.svgrepo.com/show/116114/alert.svg" />
    Esta conta ainda tem uma pendência de cadastro!</p>
  {/if}
  <p>Olá {$onboarding.name}, seja bem vindo ao dashboard de vendedor!!Hojé é dia {date.getDate()} de {months[date.getMonth()]} de {date.getFullYear()}</p>
</section>
<section class="global-cards">
  <section class="card-container" >
    <p>Saldo em conta:</p>
    <span>{balance}</span>
  </section>
  <section class="card-container" >
    <p>Produtos Ativos:</p>
    <span>{productsIsActive.length}</span>
  </section>
  <section class="card-container" >
    <p>Produtos Inativos:</p>
    <span>{$products.length - productsIsActive.length}</span>
  </section>
  <section class="card-container" >
    <p>Pedidos Enviados:</p>
    <span>{orderWasSend.length}</span>
  </section>
  <section class="card-container" >
    <p>Pedidos Pendentes:</p>
    <span>{$orders.length - orderWasSend.length}</span>
  </section>
</section>

<style lang="scss">
  .warning {
    width: 100%;
    background-color: #fcfe6289;
    padding: 8px;
    margin: 12px 0;
    border: 1px solid #000;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    font-style: italic;
    display: flex;
    img {
      width: 16px;
      height: 24px;
      margin-right: 12px;
    }
  }
  .global-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    flex-wrap: wrap;
  }
  .card-container {
    width: 190px;
    height: 120px;
    border-radius: 8px;
    border: 2px solid #000;
    background-color: #FDB930;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 700;
    }
    span {
      margin-top: 12px;
      font-size: 24px;
    }
  }
</style>
