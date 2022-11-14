<!-- this is child component -->

<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
        <div class="panal-body quote">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.panal-body{
    color: #6e6e6e;
    font-size: 24px;
    font-family: 'Arizonia' , cursive;
}
.quote{
    cursor: pointer;
    display: inline-block;
}
.quote:hover{
    background-color: #ffe2e2;
}
/*
.col-sm-6{
    display: grid;
    grid-template-columns: repeat(6,auto);
}
.col-md-4{
    display: grid;
    grid-template-columns: repeat(4);
}
.col-lg-3{
    display: grid;
    grid-template-columns: repeat(3);
}
*/
</style>