<template>
  <div class="checkout">
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-sm-6">
            <div class="form">
              <label for="">Nome*</label>
              <input
                id="name"
                v-model="$v.name.$model"
                @blur="$v.name.$touch()"
                type="text"
                :class="$v.name.$error ? 'invalid-input' : ''"
              />
              <span
                :class="$v.name.$error ? 'show-input-error' : 'input-error'"
              >
                Campo obrigatório
              </span>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form">
              <label for="">CEP*</label>
              <input
                id="cep"
                v-model="$v.cep.$model"
                @blur="cep ? searchCep() : '', $v.cep.$touch()"
                v-mask="'#####-###'"
                type="tel"
                :class="$v.cep.$error ? 'invalid-input' : ''"
              />
              <span :class="$v.cep.$error ? 'show-input-error' : 'input-error'"
                >Campo obrigatório.</span
              >
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="form">
              <label for="">E-mail*</label>
              <input
                id="email"
                placeholder="exemplo@email.com"
                v-model="$v.email.$model"
                @blur="$v.email.$touch()"
                type="email"
                :class="$v.email.$error ? 'invalid-input' : ''"
              />
              <span
                :class="$v.email.$error ? 'show-input-error' : 'input-error'"
                >Campo obrigatório. Digite um e-mail válido</span
              >
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form">
              <label for="">Endereço*</label>
              <input
                id="address"
                v-model="$v.address.$model"
                @blur="$v.address.$touch()"
                type="text"
                :class="$v.address.$error ? 'invalid-input' : ''"
              />
              <span
                :class="$v.address.$error ? 'show-input-error' : 'input-error'"
              >
                Campo obrigatório.
              </span>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="form">
              <label for="">Número*</label>
              <input
                id="street_number"
                v-model="$v.street_number.$model"
                @blur="$v.street_number.$touch()"
                ref="street_number"
                type="tel"
                :class="$v.street_number.$error ? 'invalid-input' : ''"
              />
              <span
                class="checkout-form__input-error"
                :class="
                  $v.street_number.$error ? 'show-input-error' : 'input-error'
                "
                >Campo obrigatório.</span
              >
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="form">
              <label for="">CPF*</label>
              <input
                id="cpf"
                v-model="$v.cpf.$model"
                @blur="$v.cpf.$touch()"
                v-mask="'###.###.###-##'"
                type="tel"
                :class="$v.cpf.$error ? 'invalid-input' : ''"
              />
              <span :class="$v.cpf.$error ? 'show-input-error' : 'input-error'"
                >Campo obrigatório. Mínimo de 11 caracteres</span
              >
            </div>
          </div>
          <div class="col-sm-3">
            <div class="form">
              <label for="">Complemento</label>
              <input v-model="complement" />
            </div>
          </div>
          <div class="col-sm-3">
            <div class="form">
              <label for="">Bairro*</label>
              <input
                id="district"
                v-model="$v.district.$model"
                @blur="$v.district.$touch()"
                type="text"
                :class="$v.district.$error ? 'invalid-input' : ''"
              />
              <span
                :class="$v.district.$error ? 'show-input-error' : 'input-error'"
                >Campo obrigatório.</span
              >
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-3">
            <div class="form">
              <label for="">Data de Nascimento*</label>
              <input
                id="birthDay"
                placeholder="dd/mm/yyyy"
                v-model="$v.birthDay.$model"
                @blur="$v.birthDay.$touch()"
                v-mask="'##/##/####'"
                type="tel"
                :class="$v.birthDay.$error ? 'invalid-input' : ''"
              />
              <span
                :class="$v.birthDay.$error ? 'show-input-error' : 'input-error'"
              >
                Campo obrigatório.
              </span>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="form">
              <label for="">Telefone*</label>
              <input
                id="phone"
                v-model="$v.phone.$model"
                v-mask="maskTel()"
                @blur="$v.phone.$touch()"
                type="tel"
                :class="$v.phone.$error ? 'invalid-input' : ''"
              />
              <span
                class="checkout-form__input-error"
                :class="$v.phone.$error ? 'show-input-error' : 'input-error'"
                >Campo obrigatório. Mínimo 10 caracteres</span
              >
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form">
              <label for="">Cidade*</label>
              <input
                id="city"
                v-model="$v.city.$model"
                @blur="$v.city.$touch()"
                type="text"
                :class="$v.city.$error ? 'invalid-input' : ''"
              />
              <span
                :class="$v.city.$error ? 'show-input-error' : 'input-error'"
              >
                Campo obrigatório.
              </span>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="form">
              <label for="">Estado*</label>
              <input
                id="state"
                placeholder="Exemplo: GO"
                v-model="$v.state.$model"
                @blur="$v.state.$touch()"
                v-mask="'AA'"
                type="text"
                :class="$v.state.$error ? 'invalid-input' : ''"
              />
              <span
                :class="$v.state.$error ? 'show-input-error' : 'input-error'"
              >
                Campo obrigatório.
              </span>
            </div>
          </div>
        </div>
        <div class="btnConcluir">
          <button type="submit">Concluir Compra</button>
          <ModalSucess />
        </div>
        <ModalError />
      </form>
    </div>
  </div>
</template>

<script>
import CEP from "../services/cep/cep";
import ModalSucess from "../components/ModalSucess.vue";
import ModalError from "../components/ModalError.vue";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  components: {
    ModalSucess,
    ModalError,
  },

  data: () => ({
    name: "",
    cep: "",
    email: "",
    address: "",
    street_number: "",
    cpf: "",
    complement: "",
    district: "",
    birthDay: "",
    phone: "", // funciona para fixo ou celular 9 digitos
    city: "",
    state: "",
    dataCep: {},
  }),
  validations: {
    name: { required },
    email: { required, email },
    cpf: {
      required,
      minLength: minLength(11),
    },
    birthDay: { required },
    phone: {
      required,
      minLength: minLength(10),
    },
    cep: { required },
    address: { required },
    street_number: { required },
    district: { required },
    city: { required },
    state: { required },
  },
  methods: {
    //metodo p capturar dados do form
    handleSubmit() {
      const data = {
        name: this.name,
        cep: this.cep,
        email: this.email,
        address: this.address,
        street_number: this.street_number,
        cpf: this.cpf,
        complement: this.complement,
        district: this.district,
        birthDay: this.birthDay,
        phone: this.phone,
        city: this.city,
        state: this.city,
      };
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(data);
        this.toggleModalSucess();
      }
    },
    //evento abrir/fechar ModalSucess
    toggleModalSucess() {
      this.$emit("toggleModalSucess");
    },

    //evento abrir/fechar ModalError
    toggleModalError() {
      this.$emit("toggleModalError");
    },
    //funcao para formatar a mask do campo telefone
    maskTel() {
      if (this.phone) {
        return this.phone.length == 15 ? "(##) #####-####" : "(##) ####-#####";
      } else {
        return "(##) #####-####";
      }
    },
    //metodo consumir api ViaCEP
    async searchCep() {
      try {
        await CEP.searchCep(this.cep.replace("-", "").replace("-", "")).then(
          (result) => {
            if (result.data.erro) {
              this.toggleModalError();
            }
            let dataCep = result.data;

            this.address = dataCep.logradouro;
            this.complement = dataCep.complemento;
            this.district = dataCep.bairro;
            this.city = dataCep.localidade;
            this.state = dataCep.uf;
          }
        );
      } catch (e) {
        // console.log("Houve um erro ao trazer os dados do CEP")'
        // console.log(e)
      }
    },
  },
};
</script>

<style lang="scss">
@import ".././assets/sass/global.scss";
@import ".././assets/sass/variables.scss";

.checkout {
  padding: 70px;

  .btnConcluir {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;

    button {
      height: 50px;
      width: 350px;
      border: none;
      background-color: $purple;
      border-radius: 4px;
      color: white;
    }
  }

  .show-input-error {
    transform: translateY(15px);
    opacity: 1;
    visibility: visible;
    color: tomato;
  }

  .invalid-input {
    border: 1px solid tomato;
  }

  .input-error {
    position: absolute;
    bottom: 0;
    font-size: 1.5rem;
    color: tomato;
    transition: all 0.2s ease;
    opacity: 0;
    visibility: hidden;
  }
}

@media (max-width: 991.98px) {
  .checkout {
    padding: 0;
    font-size: 12px;
    .btnConcluir {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      button {
        width: 50%;
        height: 50px;
        font-size: 15px;
      }
    }
  }
}

@media (max-width: 657.98px) {
  .checkout {
    padding: 0;
    font-size: 10px;
    .btnConcluir {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      button {
        width: 50%;
        height: 50px;
        font-size: 15px;
      }
    }
  }
}
@media (max-width: 587.98px) {
  .checkout {
    padding: 0;
    font-size: 9px;
    .btnConcluir {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;

      button {
        width: 50%;
        height: 50px;
        font-size: 15px;
      }
    }
  }
}
</style>
