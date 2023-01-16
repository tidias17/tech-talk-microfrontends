<script>
  import { orders, formatValueToCurrency } from '@elo/utility';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  const change = (value) => {
    const temp = [ ...$orders[value], wasSend = !wasSend ];
    orders.set(temp);
  }
</script>

<table>
  <tr>
    <th>Cliente</th>
    <th>Quantidade</th>
    <th>Produto</th>
    <th>Valor</th>
    <th>Envio</th>
  </tr>
  {#each $orders as order, index}
    <tr>
      <td>{order.client}</td>
      <td>{order.quantity}</td>
      <td>{order.product}</td>
      <td>{formatValueToCurrency(order.value)}</td>
      <td>
        <FormField>
          <Checkbox
            bind:checked={order.wasSend}
            on:click={() => change(index)}
          />
        </FormField>
      </td>
    </tr>
  {/each }
</table>

<style lang="scss">
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
