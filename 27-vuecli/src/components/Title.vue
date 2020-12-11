<template>
    <div>
        <h1>{{ title | upper }}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem quaerat iure, quod deserunt obcaecati commodi fuga voluptate, saepe aliquid excepturi iste nulla ipsam a quisquam fugiat nobis, eaque voluptas.</p>
        <p>{{ getDate() | lisible}}</p>
        <ul>
            <!-- for(let i = 0; i < utilisateurs.length; i++) -->
            <li 
                v-for="(utilisateur, index) of utilisateurs" 
                v-bind:key="index">
                {{ utilisateur }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: 'Message',
            utilisateurs: [
                'John', 
                'Maude',
                'Rick',
                'Ella'
            ]
        }
    },
    methods: {
        sayHello: function() {
            return "Hello World !"
        },
        getDate() {
            const today = new Date();
            return today;
        }
    },
    filters: {
        upper: function (value) {
            if (!value) return ''
            value = value.toString()
                return value.toUpperCase()
        },
        lisible: function (value) {
            return value.toLocaleDateString();
        }
    }
}
</script>

<style>
</style>

