<script>
  import '../app.css'
  export let qrcode;
  export let href;
</script>



<blockquote class="text-center mx-85 my-4 text-md italic sm:text-right max-w-prose mx-auto linkcolor">
 <a {href} target="_blank" rel="noreferrer">
 <img class="w-20 block mx-auto sm:m-1 sm:ml-8 sm:-mr-5 sm:float-right h-auto" src="{qrcode}"
   alt="QR-code" width="80" height="80" />
 “<slot/>”</a>
</blockquote>