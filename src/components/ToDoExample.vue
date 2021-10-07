<template>
    <div>
        <input type="text" v-model="message" @keyup.enter="clicked">
        <button @click="clicked">Click me!</button>

        <item-list :items="items" title="All items" tag="all"></item-list>
        <item-list :items="doneItems" title="Done items" tag="done"></item-list>
        <item-list :items="notDoneItems" title="Not Done items" tag="notdone"></item-list>
    </div>
</template>

<script>
import ItemList from './ItemList.vue';
export default {
  components: { ItemList },
    data(){
        return {
            message: '',
            items: [
                {name:'apples', isDone: false, id: 0},
                {name:'milk', isDone: true, id: 1},
                {name:'brownies', isDone: true, id: 2},
            ]
        }
    },
    methods: {
        clicked(){
            if(this.message.trim() != ''){
                this.items.push({name: this.message, isDone: false, id: this.items.length})   
            }
            this.message = '';
        }
    },
    computed: {
        doneItems(){
            return this.items.filter(item => item.isDone);
        },
        notDoneItems(){
            return this.items.filter(item => !item.isDone);
        }
    }
}
</script>

<style>

</style>