<script setup>
import Menu from './../components/Menu.vue'
import MobileMenu from "./../components/MobileMenu.vue";
</script>

<template>
   <MobileMenu class="d-lg-none" />
   <div class="d-flex list-container container-fluid container-xxl">
      <Menu class="col-2"></Menu>
      <div class="container col py-3">
         <div class="filter-sort d-flex justify-content-between align-items-center px-3 px-md-5" @click="sortByDate()">
               <h1>{{ title }}</h1>
               <span>{{ items.length }} db</span>
         </div>
         <div class="items">
            <div v-for="item in items" class="d-flex mt-3 list-item flex-column flex-md-row"
                 @click="$router.push({ name: 'details', params: { itemId: item.adId } })"
                 :key="item.adId"
            >
               <img :src="item.image" class="list-image col col-md-2">
               <div class="list-item-details col d-flex flex-column">
                  <div class="list-item-details-top d-flex justify-content-between">
                     <h1>{{ item.address }}</h1>
                     <button @click.stop="clickFavorite(item)" :class="item.favorite ? 'favorite' : ''">
                        <font-awesome-icon icon="fa-solid fa-star" />
                     </button>
                  </div>
                  <span class="price">{{ Number(item.price).toLocaleString() }}</span>
                  <div v-if="listType === LIST_TYPES.FAVORITES" class="col d-flex flex-column justify-content-end">
                     <span class="">{{ item.uploadDate }}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import LIST_TYPES from "../classes/ListTypes";
import ListService from "../classes/services/ListService";

export default {
   created() {
      this.setList(ListService.getList());
   },
   watch: {
      $props: {
         handler() {
            this.setList(ListService.getList());
         },
         deep: true,
         immediate: true,
      },
   },
   props: {
      title: {
         type: String,
         required: true
      },
      listType: {
         type: String,
         required: true
      },
   },
   data() {
      return {
         items: [],
         direction: true
      }
   },
   methods: {
      setList(list) {
         this.items = list;

         if(this.listType === LIST_TYPES.FAVORITES) {
            this.items = list.filter((item) => {
               return item.favorite;
            }).sort((a, b) => {
               return a.uploadDate < b.uploadDate;
            });
         }
      },
      clickFavorite(item) {
         ListService.setFavorite(item.adId);
         this.setList(ListService.getList());
      },
      sortByDate() {
         if (this.listType !== LIST_TYPES.FAVORITES) return;

         this.direction = !this.direction;

         this.items = this.items.reverse();
      }
   }
}
</script>

<style scoped>
.container {
   top: 40px;
}

.filter-sort {
   width: 100%;
   height: 60px;
   filter: drop-shadow(0px 0px 20px rgba(50, 62, 200, 0.1));
   border-radius: 16px;
   box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
   cursor: pointer;
}

.filter-sort h1 {
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   margin: 0;
}

.filter-sort span {
   font-weight: 700;
   font-size: 16px;
   line-height: 16px;
   color: #666666;
}

.list-item {
   border-radius: 16px 16px 16px 16px;
   overflow: hidden;
   box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
}

.list-image {
   background: #637181;
   height: 180px;
   width: 180px;
   object-fit: cover;
}

.list-item-details {
   height: 180px;
   background: #FFFFFF;
   padding: 20px;
}

.list-item-details .price {
   font-weight: 500;
   font-size: 24px;
   line-height: 16px;
}

.list-item-details-top button {
   width: 40px;
   height: 40px;
   background: #FFFFFF;
   box-shadow: 0px 0px 10px rgba(50, 62, 200, 0.2);
   border-radius: 8px;
   border: none;
}

.list-item-details-top h1 {
   font-weight: 700;
   font-size: 30px;
   line-height: 40px;
}

@media (max-width: 767.98px) {
   .filter-sort {
      height: 43px;
   }

   .list-image {
      height: 140px;
      width: 100%;
   }

   .list-item {
      height: 250px;
   }

   .list-item-details {
      height: 140px;
   }

   .list-item-details-top h1 {
      font-size: 20px;
      line-height: 32px;
   }

   .list-item-details .price {
      font-size: 16px;
      line-height: 16px;
   }

   .filter-sort h1 {
      font-size: 18px;
      line-height: 24px;
   }
}

</style>