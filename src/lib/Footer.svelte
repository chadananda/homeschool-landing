<script>
   import "../app.css";
   export let message = "Questions? Contact me directly:"
   export let email = 'chadananda@gmail.com';
</script>

<footer class="w-full text-center text-sm text-white bg-gray-800 p-8">
 <p class="mt-4 mb-2 text-white">{message} <a class="underline" target="_blank"  rel="noreferrer" href="mailto:{email}">{email}</a>
</footer>

<style>
  a {
    color: #fff !important;
  }
</style>