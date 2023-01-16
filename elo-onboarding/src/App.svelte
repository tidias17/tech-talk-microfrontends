<script>
  import { isPendingOnboarding, onboarding } from '@elo/utility';
  import Textfield from '@smui/textfield';
  let name = $onboarding.name || '',
    email = $onboarding.email || '',
    telefone = $onboarding.telefone || '',
    cnpj = $onboarding.cnpj || '';
  const handleSubmit = () => {
    onboarding.set({
      name,
      email,
      telefone,
      cnpj,
    })
    isPendingOnboarding.set(false);
    alert('Cadastro alterado com sucesso!');
  }
</script>

<section>
  <form
    on:submit|preventDefault={handleSubmit}
  >
    <Textfield
      variant="outlined"
      bind:value={name}
      label="Nome"
      required
    />
    <Textfield
      variant="outlined"
      bind:value={email}
      label="E-mail"
      required
    />
    <Textfield
      variant="outlined"
      bind:value={telefone}
      label="Telefone"
      required
    />
    <Textfield
      variant="outlined"
      bind:value={cnpj}
      label="Cnpj"
      required
    />
    <button type="submit">Salvar</button>
  </form>
</section>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    button {
      background-color: #FDB930;
      padding: 12px;
      border-radius: 4px;
    }
  }
</style>
