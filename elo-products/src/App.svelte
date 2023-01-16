<script>
  import { products, formatValueToCurrency } from '@elo/utility';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  const change = (value) => {
    const temp = [ ...$products[value], isActive = !isActive ];
    products.set(temp);
  }

</script>

<section>
  <table>
  <tr>
    <th>Produto</th>
    <th>Descrição</th>
    <th>Valor</th>
    <th>Ativo</th>
  </tr>
    {#each $products as product, index}
      <tr>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{formatValueToCurrency(product.value)}</td>
        <td>
          <FormField>
            <Checkbox
              bind:checked={product.isActive}
              on:click={() => change(index)}
            />
          </FormField>
        </td>
      </tr>
    {/each }
  </table>
</section>

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
