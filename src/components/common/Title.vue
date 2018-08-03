<template>
    <div class="title">
        <div class="titleSpan">
            {{title}}
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'UiTitle',
    props: ['title']
}
</script>
<style lang="scss" scoped>
    .titleSpan{
        height: 0.4rem;
        width: 100%;
        font-size: 0.18rem;
        font-weight: 700;
        line-height: 0.4rem;
        text-align: center;
        color: #ff5073;
    }
</style>
