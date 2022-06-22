<script setup>
import LIST_TYPES from "../classes/ListTypes";
</script>

<template>
   <div class="nav-content py-3 container d-none d-md-flex">
      <nav class="w-100">
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
      </nav>
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

.nav-content {
   height: 180px;
}

nav {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
   width: 260px;
   height: 140px;
   background: #FFFFFF;
   box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
   border-radius: 16px;
}
</style>