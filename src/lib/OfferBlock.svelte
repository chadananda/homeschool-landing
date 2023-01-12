
<script>
 import '../app.css';
 export let couponLink
</script>


<p class="call-to-action clear">
  <slot />
 <br>
 <a  href="{couponLink}">{couponLink}</a>
</p>


<style>

.call-to-action {
    margin-top:2em;
    margin-bottom: 2em;
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
    font-family: 'RobotoSlab', serif;
    font-display: swap !important;
    color: rgb(31, 86, 31);
    /* border: 1px solid gray; */
    border-radius: 10px;
    padding: .25em;
    background-color: #f5f5f5;
    box-shadow: #828de9 0px 0px 10px 0px;
    max-width: 600px;
    margin-left: auto; margin-right: auto;
  }

.call-to-action a {
    color: #29317a;
    font-weight: normal;
    font-size: .75em;
    text-decoration: underline;
}

</style>