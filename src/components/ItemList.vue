<template>
  <div>
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="item in items" :key="tag+item.id">
                <input type="checkbox" v-model="item.isDone">
                {{item.name}}
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    props: ['items', 'title', 'tag']
}
</script>

<style>

</style>