<script>
  import { wallet, formatValueToCurrency } from '@elo/utility';
  import Textfield from '@smui/textfield';

  let value = '';
  const date = new Date();
  const handleSubmit = () => {
    const temp = $wallet;
    temp.value -= value;
    temp.movimentation.push({
      date: `${date.getDate()}/${date.getMonth()<10 ? '0' : ''}${date.getMonth() +1}/${date.getFullYear()}`,
      value,
      type: "Retirada",
      description: "Solicitação de retirada",
    });
    wallet.set(temp);
    value = '';
    alert('Retirada realizada com sucesso!');
  }

</script>

<section>
  Seu saldo é de {formatValueToCurrency($wallet.value)}
  <p>
    Gostaria de realizar uma retirada de qual valor?
  </p>
  <form
    on:submit|preventDefault={handleSubmit}
  >

    <Textfield
      variant="outlined"
      bind:value={value}
      label="Valor para reirada"
      required
    />
    <button type="submit">Realizar Retirada</button>
  </form>
  <h2>Histórico de movimentações</h2>
  <table>
    <tr>
      <th>Data</th>
      <th>Tipo</th>
      <th>Descrição</th>
      <th>Valor</th>
    </tr>
    {#each $wallet.movimentation as item, index}
      <tr>
        <td>{item.date}</td>
        <td>{item.type}</td>
        <td>{item.description}</td>
        <td>{formatValueToCurrency(item.value)}</td>
      </tr>
    {/each }
  </table>
</section>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;
    button {
      background-color: #FDB930;
      padding: 12px;
      border-radius: 4px;
    }
  }
  table, h2 {
    margin-top: 20px;
  }
  table {
    width: 100%;
    tr {
      width: 100%;
      display: flex;
      td {
        border: 1px solid #FDB930;
        flex: 1;
      }
      th {
        font-weight: 600;
        color: #FDB930;
        text-align: left;
        text-transform: uppercase;
        flex: 1;
      }
    }
  }
</style>
