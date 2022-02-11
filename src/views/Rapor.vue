<template>
        <v-container>
            <v-card class="mt-5">
                <v-card-title class="indigo lighten-5">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                ></v-data-table>
            </v-card>
        </v-container>
</template>
<script>
  import headers from '../components/headers.json'
  import axios from 'axios'

  export default {

    data () {
      return {
        desserts: [],
        headers: headers,
        search: '',
      }
    },
    async created() {
      try {
        let formData = new FormData();
        formData.append('obje', 'company');
        const res = await axios.post('https://sagdiclarmimarlik.sisu9.com/hizmet.php?page=std_list',formData,
        {
        'Content-type': 'application/x-www-form-urlencoded'
      });
        const desserts = res.data.dvojka.Liste;
        this.desserts = desserts
        
      } catch (e) {
        console.error(e);
        }
    },  
  }
</script>