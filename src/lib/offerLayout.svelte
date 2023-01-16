<script>
  // all medadata from yaml header
  export let title, subtitle, offer, description,  keywords, lang,  coupon, image, audio, video, email;

  import Header from "$lib/Header.svelte";
  import PageHeaderMeta from "$lib/PageHeaderMeta.svelte";
  import Footer from "$lib/Footer.svelte";
  import EmbeddedVideo from "$lib/EmbeddedVideo.svelte";

  // import OfferBlock from "$lib/OfferBlock.svelte";
  // import WholeReaderImgResponsive from "$lib/WholeReaderImgResponsive.svelte";
  // import ImmersiveAnimation from "$lib/ImmersiveAnimation.svelte";
  // import BookQuote from "$lib/BookQuote.svelte";
  // import ResponsiveImage from "$lib/ResponsiveImage.svelte";

  // export {OfferBlock, WholeReaderImgResponsive, ImmersiveAnimation, BookQuote, ResponsiveImage}
</script>

<PageHeaderMeta {lang} {title} {description} {keywords} {coupon} {image} {audio} {video} />

<Header {title} {subtitle} {offer} />

<main class="contentContainer">
  <slot />
  <EmbeddedVideo src="{video}" />
</main>

<Footer message="Questions? Contact me directly:" {email} />
