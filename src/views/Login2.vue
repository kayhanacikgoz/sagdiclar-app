<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window>
                <v-window-item>
                  <v-row>
                    <v-col cols="12" md="8" class="">
                      <v-card-text class="mt-8">
                        <h3 class="text-center display-2 light-blue--text darken-2 mb-5">Giriş Yapın</h3>
                        <v-form>
                          <v-text-field
                          id="email"
                          label="Email"
                          name="Email"
                          prepend-icon="email"
                          type="text"
                          color="light-blue darken-2" 
                          />
                          <v-text-field
                          id="password"
                          label="Password"
                          name="Password"
                          prepend-icon="lock"
                          type="password"
                          color="light-blue darken-2" 
                          />
                          <div class="text-center mt-3">
                            <router-link to="Home" class="text-decoration-none"><v-btn type="submit" form="check-login-form" rounded color="light-blue darken-2 mb-5 mr-3" dark>Giriş Yap</v-btn></router-link>
                          </div>
                        </v-form>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="light-blue darken-2">
                      <v-card-text class="white--text mt-12">
                        <i class="fas fa-check fa-2x mb-5"></i>
                        <h3 class="text-center display-1 mb-5">Kayıt İşleminiz başarılı.</h3>
                        <h4 class="text-center mb-8">Giriş yapabilirsiniz.</h4>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data ()  {
    return {
      step: 1,
      name: '',
      email: '',
      password: '',
    }
  },
  props: {
    source: String
  },
  methods: {
    async fetchUsers() {

      const data = await fetch('http://localhost:5000/users', );

      return data
      
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  }
}
</script>