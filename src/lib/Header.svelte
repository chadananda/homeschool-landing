<script>
  import '../app.css';
  export let title
  export let subtitle
  export let offer
</script>


<header class="bg-gray-300 py-2 px-8 mb-4 text-center text-2xl font-serif overflow-x-hidden w-full roboto">
 <h1 class="text-3xl pb-2 roboto ">{title}</h1>
 <h2 class="text-sm sm:text-xl max-w-screen-md mx-auto roboto">{subtitle} </h2>
 <h3 class="text-sm sm:text-xl max-w-screen-md mx-auto roboto"><em>{offer}</em></h3>
</header>