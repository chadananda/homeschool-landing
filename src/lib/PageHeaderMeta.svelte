<script>
  export let lang = 'en'
  export let title = ' '
  export let description = ' '
  export let keywords = ' '
</script>

<svelte:head>
  <meta charset="utf-8">
  <meta name="language" content={lang}>
  <title>{title}</title>
  <meta name="description" content={description}>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="keywords" content={keywords}>
</svelte:head>