<template>
  <div class="produtos">
    <div class="carousel">
      <Carousel> </Carousel>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="searchText">
            <h2>Encontre seu Produto</h2>
            <div class="inputContainer">
              <input type="text" v-model="search" placeholder="Pesquisar..." />
              <div class="searchIcon">
                <img src="../assets/icons/search-icon.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="!filteredProducts.length" class="col-12">
          <div class="searchnoText">
            <h2>Nenhum produto encontrado</h2>
          </div>
        </div>
        <div
          v-for="(product, i) in filteredProducts"
          :key="`product-${i}`"
          class="col-12 col-md-6 col-lg-4 div-Cards"
        >
          <Cards v-if="!!filteredProducts.length" :data="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import Carousel from "../components/Carousel.vue";
import ProductsAPI from "../services/products/products";

export default {
  components: {
    Cards,
    Carousel,
  },
  data: () => ({
    data: [],
    search: "",
    noProduct: [
      {
        id: 50,
        name: "Sem produto",
        category: "Eletrônicos",
        description:
          "Notebook HP Probook 640 G1, com processador 4° geração Intel Core i5-4300M de 2.6 GHz, memória RAM 4GB, HD 500GB, tela de 14 polegadas e sistema operacional Windows 10.",
        price: 2300.99,
        imageUrl: "http://dev.owinteractive.com/produtos/1.jpg",
      },
    ],
  }),
  created() {
    this.getProductsAPI();
    //metodo para receber os dados do comp filho - Cards e adicionar ao localstorage
    this.$on("product", (product) => {
      let products = localStorage.getItem("products");
      if (!products) {
        localStorage.setItem("products", "{}");
        products = {};
      } else {
        products = JSON.parse(products);
      }

      if (!products[product.id]) {
        let addProduct = {};
        addProduct.qtde = 1;
        addProduct.info = product;
        products[product.id] = addProduct;
        localStorage.setItem("products", JSON.stringify(products));
      } else {
        products[product.id].qtde++;
        localStorage.setItem("products", JSON.stringify(products));
      }
      //envia as infos. do comp filho para comp. pai - App.vue
      this.$parent.$emit("productAdded");
    });
  },
  computed: {
    //Metodo para filtrar os cards na tela por texto.
    filteredProducts: function () {
      return this.data.filter((data) => {
        return data.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
    },
  },
  methods: {
    //Metodo consumir api
    getProductsAPI() {
      ProductsAPI.product("produtos.json").then((result) => {
        try {
          const data = result.data;
          this.data = data;
        } catch (e) {
          console.log(e);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import ".././assets/sass/variables.scss";

.produtos {
  display: flex;
  flex-direction: column;

  .searchText {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 3px 5px,
      rgba(17, 17, 26, 0.05) 0px 8px 15px;
    margin-bottom: 20px;
    padding: 35px;

    h2 {
      color: $gray-textBold;
      font-weight: 600;
      font-size: 17px;
      width: 20%;
    }

    .inputContainer {
      width: 100%;
      display: flex;
      align-items: center;

      input {
        width: 100%;
        color: $gray-textBold;
        font-weight: 400;
        margin-left: 30px;
        border: 1px solid rgba(128, 128, 128, 0.61);
        border-right: none;
        padding: 10px;
        border-radius: 3px 0 0 3px;
        outline: none;
      }

      .searchIcon {
        background: $purple;
        height: 46px;
        width: 46px;
        border-radius: 0 3px 3px 0;
        display: flex;
        justify-content: center;

        img {
          width: 30px;
        }
      }
    }
  }
  .searchnoText {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 35px;

    h2 {
      font-weight: 600;
      font-size: 25px;
    }
  }
  .div-Cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

@media (max-width: 575.98px) {
  .produtos {
    .searchText {
      padding: 25px 20px;
      flex-direction: column;

      h2 {
        text-align: center;
        width: 100%;
      }

      .inputContainer {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 20px;
        input {
          width: 100%;

          margin-left: 0;
        }
      }
    }
  }
}
</style>
