<script>
  export let lang = "en";
  export let title = "";
  export let description = "";
  export let keywords = "";
  export let coupon = "";
  export let image = "";
  export let audio = "";
  export let video = "";

  const type = "website";
  const domain = "offers.wholereader.com";
  const pageUrl = `https://${domain}/${coupon}`;
  const imageUrl = `https://${domain}/${image}`;
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="language" content={lang} />
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="keywords" content={keywords} />
  <link rel="canonical" href={pageUrl} />

  <!-- facebook  -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:audio" content={audio} />
  <meta property="og:video" content={video} />
  <meta property="og:locale" content={lang} />
  <meta property="og:site_name" content={title} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta property="twitter:domain" content={domain} />
  <meta property="twitter:url" content={pageUrl} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
</svelte:head>
