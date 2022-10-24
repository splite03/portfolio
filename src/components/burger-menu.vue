<template>
    <svg style="display: none">
        <symbol viewBox="0 0 50 46" id="burger-menu">
            <g>
                <path d="M3 3H47M3 23C3 23 29.8169 23 47 23M3 43H25H47" stroke="white" stroke-width="5" stroke-linecap="round"/>
            </g>
        </symbol>
    </svg>
    <svg class="burger-menu" 
    @click.prevent="$emit('clickBurger')">
        <use xlink:href="#burger-menu"></use>
    </svg>
</template>
<script>
export default {
    emits:['clickBurger']
}
</script>
<style>
    .burger-menu{
        height: 25px;
        width: 25px;
    }
</style>