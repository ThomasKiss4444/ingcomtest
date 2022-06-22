<script setup>
import LIST_TYPES from "../classes/ListTypes";
</script>

<template>
   <div class="nav-content container d-flex flex-row d-md-none">
      <nav class="navbar navbar-light bg-white">
         <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false">
               <font-awesome-icon icon="fa-solid fa-bars" class="bars"/>
            </button>
         </div>
      </nav>

      <div class="collapse col" id="navbarToggleExternalContent">
         <div class="bg-white p-4">
            <div :class="'nav-item ' + (selectedMenu === LIST_TYPES.ALL ? 'button_selected' : '')">
               <RouterLink class="col p-0 d-flex align-items-center" to="/"
                           @click="selectedMenu = LIST_TYPES.ALL"
               >
                  <font-awesome-icon icon="fa-solid fa-list"/>
                  <span>Lista</span>
               </RouterLink>
            </div>
            <div :class="'nav-item ' + (selectedMenu === LIST_TYPES.FAVORITES ? 'button_selected' : '')">
               <RouterLink class="col p-0 d-flex align-items-center" to="/favorites"
                           @click="selectedMenu = LIST_TYPES.FAVORITES"
               >
                  <font-awesome-icon icon="fa-solid fa-star"/>
                  <span>Kedvencek</span>
               </RouterLink>
            </div>
         </div>
      </div>

   </div>
</template>

<script>
export default {
   mounted() {
      this.$router.isReady().then(() => {
         this.selectedMenu = (this.$route.path === '/favorites') ? LIST_TYPES.FAVORITES : LIST_TYPES.ALL;
      });
   },
   data() {
      return {
         selectedMenu: LIST_TYPES.ALL
      }
   },
}
</script>

<style scoped>
.nav-content {
   background: #FFFFFF;
   box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
   border-radius: 0 0 16px 16px;
}

button.navbar-toggler {
   border: none;
}

.bars {
   color: #323EC8;
}

.nav-item {
   padding: 10px 20px;
   font-weight: 500;
   font-size: 14px;
   line-height: 16px;
   color: #323EC8;
   height: 44px;
   width: 100%;
}

.nav-item a {
   font-weight: 700;
   font-size: 14px;
   line-height: 150%;
   text-decoration: none;
   color: #323EC8;
}

.nav-item a span {
   padding-left: 10px;
   padding-top: 2px;
}

.nav-item.button_selected {
   background: #EBECFA;
   border-radius: 8px;
}

</style>