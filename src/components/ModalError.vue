<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-body">
      <span class="close-button" @click="toggleModalError"
        ><img class="close-button-x" src="../assets/icons/x.svg" alt=""
      /></span>
      <div class="screenAlert-icon screenAlert-warning scaleWarning">
        <span class="screenAlert-body pulseWarningIns"></span>
        <span class="screenAlert-dot pulseWarningIns"></span>
      </div>
      <p>CEP informado não encontrado.</p>
      <br />
    </div>
    <div @click="toggleModalError" class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: "ModalError",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleModalError() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    //recebe a info vindo do comp. pai - Produtos
    this.$parent.$on("toggleModalError", this.toggleModalError);
  },
};
</script>

<style lang="scss" scoped>
@import ".././assets/sass/variables.scss";

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  .modal-body {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #fff;
    padding: 2rem 2rem;
    position: relative;
    max-width: 28%;
    min-height: 30%;
    z-index: 2;

    @media (max-width: 860px) {
      max-width: 80%;
      padding: 2rem 1rem;
    }

    .close-button {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 88%;
      left: 89%;
      width: 35px;
      height: 35px;
      font-weight: 600;

      &:hover {
        cursor: pointer;
      }
    }

    .concluirCard {
      width: 130px;
      margin-top: 15px;
    }
    .close-button-x {
      width: 15px;
    }
    .arrowLeft {
      width: 22px;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      color: $purple;
      font-size: 17px;
    }

    p {
      margin: 0;
      color: #5e5c5c;
      font-size: 25px;
      text-align: center;
    }
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}

.screenAlert-icon {
  border-radius: 50%;
  border: 4px solid gray;
  box-sizing: content-box;
  height: 80px;
  margin: 20px auto;
  padding: 0;
  position: relative;
  width: 80px;
}
.screenAlert-icon + .screenAlert-icon {
  margin-top: 50px;
}

.screenAlert-icon.screenAlert-warning {
  border-color: #f8bb86;
}
.screenAlert-icon.screenAlert-warning:before {
  -webkit-animation: pulseWarning 2s linear infinite;
  animation: pulseWarning 2s linear infinite;
  background-color: transparent !important;
  border-radius: 50%;
  content: "";
  display: inline-block;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
}
.screenAlert-icon.screenAlert-warning:after {
  background-color: transparent !important;
  border-radius: 50%;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.screenAlert-icon.screenAlert-warning .screenAlert-body {
  background-color: #f8bb86;
  border-radius: 2px;
  height: 47px;
  left: 50%;
  margin-left: -2px;
  position: absolute;
  top: 10px;
  width: 5px;
  z-index: 2;
}
.screenAlert-icon.screenAlert-warning .screenAlert-dot {
  background-color: #f8bb86;
  border-radius: 50%;
  bottom: 10px;
  height: 7px;
  left: 50%;
  margin-left: -3px;
  position: absolute;
  width: 7px;
  z-index: 2;
}
.scaleWarning {
  -webkit-animation: scaleWarning 0.75s infinite alternate;
  animation: scaleWarning 0.75s infinite alternate;
}
.pulseWarningIns {
  -webkit-animation: pulseWarningIns 0.75s infinite alternate;
  animation: pulseWarningIns 0.75s infinite alternate;
}
/* ANIMATE WARNING */
@-webkit-keyframes scaleWarning {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  30% {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes scaleWarning {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  30% {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes pulseWarning {
  0% {
    background-color: #fff;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0.5;
  }
  30% {
    background-color: #fff;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    background-color: #f8bb86;
    -webkit-transform: scale(2);
    transform: scale(2);
    opacity: 0;
  }
}
@keyframes pulseWarning {
  0% {
    background-color: #fff;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0.5;
  }
  30% {
    background-color: #fff;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    background-color: #f8bb86;
    -webkit-transform: scale(2);
    transform: scale(2);
    opacity: 0;
  }
}
@-webkit-keyframes pulseWarningIns {
  0% {
    background-color: #f8d486;
  }
  100% {
    background-color: #f8bb86;
  }
}
@keyframes pulseWarningIns {
  0% {
    background-color: #f8d486;
  }
  100% {
    background-color: #f8bb86;
  }
}

/* CSS INFO */
.screenAlert-icon.screenAlert-info {
  border-color: #9de0f6;
}
.screenAlert-icon.screenAlert-info:before {
  -webkit-animation: pulseInfo 2s linear infinite;
  animation: pulseInfo 2s linear infinite;
  background-color: transparent !important;
  border-radius: 50%;
  content: "";
  display: inline-block;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
}
.screenAlert-icon.screenAlert-info:after {
  background-color: transparent !important;
  border-radius: 50%;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.screenAlert-icon.screenAlert-info .screenAlert-body {
  background-color: #3fc3ee;
  border-radius: 2px;
  height: 47px;
  left: 50%;
  margin-left: -2px;
  position: absolute;
  top: 10px;
  width: 5px;
  z-index: 2;
}
.screenAlert-icon.screenAlert-info .screenAlert-dot {
  background-color: #3fc3ee;
  border-radius: 50%;
  bottom: 10px;
  height: 7px;
  left: 50%;
  margin-left: -3px;
  position: absolute;
  width: 7px;
  z-index: 2;
}
.scaleInfo {
  -webkit-animation: scaleInfo 0.75s infinite alternate;
  animation: scaleInfo 0.75s infinite alternate;
}
.pulseInfoIns {
  -webkit-animation: pulseInfoIns 0.75s infinite alternate;
  animation: pulseInfoIns 0.75s infinite alternate;
}
</style>
