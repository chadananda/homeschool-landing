<script>
  import '../app.css'
  export let hsrc
  export let vsrc
  export let alt
</script>


<img class="float-right m-1 w-48 hidden sm:block h-auto" src="{hsrc}" width="192" {alt} />
<img class="m-0 mb-2 -mt-2 w-screen block sm:hidden h-auto" src="{vsrc}" width="617" {alt} />