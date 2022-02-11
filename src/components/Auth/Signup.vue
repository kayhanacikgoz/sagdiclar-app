<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window>
                <v-window-item>
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="light-blue darken-2">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1 mb-5">Tekrar Hoşgeldiniz</h1>
                        <h4 class="text-center">Lütfen bilgilerinizi girerek kayıt işlemini gerçekleştirin.</h4>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="8"> 
                      <v-card-text class="mt-12">
                        <h5 class="text-center display-2 light-blue--text text--darken-2 mb-5">Hesap Oluştur</h5>
                        <v-form @submit.prevent="handleSubmit">
                          <v-alert
                            :value="false"
                            color="error"
                            icon="warning"
                          >
                            Kullanıcı zaten kayıtlı görünüyor. Lütfen yeniden deneyin.
                          </v-alert>
                          <v-text-field
                          prepend-icon="person"
                          name="login"
                          label="Login"
                          :rules="[rules.required]"
                          />
                          <v-text-field
                          id="email"
                          label="Email"
                          name="Email"
                          prepend-icon="email"
                          type="email"
                          color="light-blue darken-2" 
                          v-model="email"
                          :rules="[rules.email, rules.email]"
                          />
                          <v-text-field
                          id="password"
                          label="Password"
                          name="Password"
                          prepend-icon="lock"
                          type="password"
                          color="light-blue darken-2" 
                          v-model="password"
                          :rules="[rules.required]"
                          />
                          <v-text-field
                          id="password"
                          label="Cornfirm Password"
                          name="Password"
                          prepend-icon="lock"
                          type="password"
                          color="light-blue darken-2" 
                          v-model="confirm_password"
                          :rules="[rules.required]"
                          :error="!valid()"
                          />
                          <div class="text-center mt-5 mb-8">
                            <v-btn to="/login" @click.prevent="register()" type="submit" rounded class="light-blue white--text darken-2">Kayıt Ol</v-btn>
                          </div>
                        </v-form>
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
  name: "signup",
  data: () => ({
    password: '',
    confirm_password: '',
    rules: {
        required: value => !!value || "Required",
        email: value => {
          const pattern = 5%'$#£';
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    /*return {
      name: '',
      email: '',
      password: '',
    }*/
  }),
  props: {
    source: String
  },
  methods: {
    register() {
      this.$router.push('/login')
    },
    valid() {
      return this.password === this.confirm_password;
    }
  }
}
</script>