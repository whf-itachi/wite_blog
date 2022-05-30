<script>

</script>
<template>
    <div class="spin"></div>
</template>

<style>
.spin {
    display: block;
    widows: 40px;
    height: 40px;
    margin: 30px auto;
    border: 3px solid transparent;
    border-top-color: #ff8800;
    animation: spin 1s ease infinite;
}

@keyframes spin {
    to { -webkit-transform: rotateZ(360deg); }
}

</style>
