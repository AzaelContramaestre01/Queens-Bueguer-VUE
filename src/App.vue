<template>
  <div class="desktop-resolution">
    <nav class="nav">
      <h1 class="title-title">{{ $store.state.hello }}</h1>
    </nav>
    <div class="container">
      <div>
        <div class="btns-container-parent-title">
          <h2>Elige tu tipo de comida</h2>
        </div>
        <div class="btns-container-parent">
          <button class="main-btn" @click="isBreakfast">Desayunos</button>
          <button class="main-btn" @click="isLunch">Almuerzos y Cenas</button>
        </div>
        <div v-if="willBeBreakfast" class="btns-container">
          <button
            v-for="(item, index) in breakfast"
            :key="index"
            :value="item.price"
            class="main-btn"
            @click="addBreakFast(index, item.price, item.name)"
          >
            {{ item.name }}
            <br />
            {{ `$ ${item.price} 00` }}
          </button>
        </div>
        <br />
        <div v-if="willBeLunch" class="btns-container">
          <button
            v-for="(item, index) in lunch"
            :key="index"
            class="main-btn"
            @click="addLunch"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
      <div v-if="added" class="second-container">
        <div v-for="(item, index) in cart" :key="index" class="second-div-container">
          <div><span>{{ item.name }}:</span> <span class="price">{{ `$ ${item.price} 00` }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    breakfast() {
      return this.$store.state.foods.filter(
        (foods) => foods.category === "Breakfast"
      );
    },
    lunch() {
      return this.$store.state.foods.filter(
        (foods) => foods.category === "lunch"
      );
    },
  },
  data() {
    return {
      willBeBreakfast: true,
      willBeLunch: false,
      cart: [],
      added: false,
    };
  },
  methods: {
    addBreakFast(index, price, name) {
      this.added = true;
      const cart = this.cart;
      cart.push({
        index,
        price,
        name,
      });
      console.log(cart);
      [...cart];
    },
    addLunch() {
      console.log("Hello world", this.lunch);
      const totalLunch = this.lunch.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
      }, 0);
      console.log(totalLunch);
    },
    isBreakfast() {
      this.willBeBreakfast = true;
      this.willBeLunch = false;
      this.added = false;
      this.cart = [];
    },
    isLunch() {
      this.willBeLunch = !this.willBeLunch;
      this.willBeBreakfast = false;
      this.added = false;
      this.cart = [];
    },
  },
};
</script>

<style>
.desktop-resolution {
  max-width: 1440px;
}

body {
  background: rgb(18, 13, 21) 76%;
  background: linear-gradient(
    90deg,
    rgb(15, 3, 21) 0%,
    rgba(13, 11, 14, 1) 76%
  );
  background-size: 400% 400%;
  animation: gradient 4s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.nav {
  position: fixed;
  top: 0;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 8px;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  padding: 0;
}

.title {
  display: flex;
  text-align: center;
}

.title-title {
  margin-left: 32px;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
}

.main-btn {
  margin: 20px;
  border-radius: 8px;
  height: 140px;
  width: 180px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background-color: #d7a62c;
}

.btns-container-parent {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 45px;
}

.btns-container-parent-title {
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 20px;
}

.btns-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
}

.second-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: 400px;
  grid-gap: 16px;
  padding: 32px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 20px;
  border-radius: 20px;
}

.second-div-container {
  margin-block: 24px;
}

.price {
  font-weight: bold;
  margin-left: 80px;
}
</style>
