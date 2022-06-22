<template>
  <div class="details-container py-md-3 p-0 container-fluid container-md">
     <div class="details-header d-none d-md-flex">
        <div class="col-2">
        <button @click="$router.back()">
           <font-awesome-icon icon="fa-solid fa-arrow-left" class="pe-2" />
           Vissza
        </button>
        </div>
        <div class="details-header-right d-flex align-items-center px-5 col">
           <h1>Részletek</h1>
        </div>
     </div>

     <div class="details-images-container py-3 px-0 d-none d-md-flex">
         <div class="col img-container img-left">
            <img :src="item.image" class="img">
         </div>
         <div class="col img-container"></div>
         <div class="col d-flex flex-column p-0">
            <div class="img-container col img-right-top"></div>
            <div class="img-container col img-right-bottom"></div>
         </div>
     </div>

     <div class="d-flex d-md-none overflow-hidden">
        <button @click="$router.back()" class="mobile-back-button position-absolute">
           <font-awesome-icon icon="fa-solid fa-angle-left" />
        </button>
        <div class="w-100">
           <img :src="item.image" class="img">
        </div>
     </div>

     <div class="form-container">
        <div class="d-flex flex-column justify-content-between h-100">
           <div class="d-flex justify-content-between form-container-top">
              <h1>{{ item.address }}</h1>
              <button @click="clickFavorite(item)" :class="item.favorite ? 'favorite' : ''">
                 <font-awesome-icon icon="fa-solid fa-star" />
              </button>
           </div>
           <span>{{ Number(item.price).toLocaleString() }}</span>
           <span><font-awesome-icon icon="fa-solid fa-calendar-days" class="pe-2"/>{{ item.uploadDate }}</span>
           <div class="description my-3">
              <p>{{ item.description }}</p>
           </div>
           <div class="d-flex justify-content-md-end">
              <button class="contact" @click="showModal = true">
                 Kapcsolatfelvétel
              </button>
           </div>
        </div>
     </div>
     <vue-final-modal v-model="showModal">
        <div class="modal-dialog">
           <div class="modal-content">
              <div class="modal-header">
                 <h5 class="modal-title">Kapcsolatfelvétel</h5>
                 <button type="button" class="close" @click="showModal = false">
                    <span aria-hidden="true">&times;</span>
                 </button>
              </div>
              <div class="modal-body d-flex flex-column">
                 <span>E-mail: {{ item.contact.email }}</span>
                 <span>Telefonszám:</span>
                 <span v-for="phone in item.contact.parsedPhoneNumbers">
                    {{ phone }}
                 </span>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                 <button type="button" class="contact" @click="showModal = false">bezár</button>
              </div>
           </div>
        </div>
     </vue-final-modal>
  </div>
</template>

<script>

import ListService from "../classes/services/ListService";

export default {
   created() {
      this.item = ListService.getItem(this.$route.params.itemId);
   },
   data() {
      return {
         item: {},
         showModal: false
      }
   },
   methods: {
      clickFavorite(item) {
         ListService.setFavorite(item.adId);
         this.refreshItem();
      },
      refreshItem() {
         this.item = ListService.getItem(this.$route.params.itemId);
      }
   }
}
</script>

<style scoped>
.details-header-right {
   width: 100%;
   height: 60px;
   filter: drop-shadow(0px 0px 20px rgba(50, 62, 200, 0.1));
   border-radius: 16px;
   box-shadow: 0px 0px 20px rgba(50, 62, 200, 0.1);
}
.details-header-right h1 {
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   margin: 0;
}
.details-header button {
   width: 129px;
   height: 60px;
   background: #EBECFA;
   border-radius: 8px;
   border: none;
   font-weight: 700;
   font-size: 16px;
   line-height: 150%;
   color: #323EC8;
}
.details-images-container {
   height: 300px;
   border-radius: 16px;
}
.img-container{
   background: #637181;
   overflow: hidden;
}

.img {
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.img-left {
   margin: 0 20px 0 0;
   border-radius: 16px 0 0 16px;
}
.img-right-top {
   margin: 0 0 10px 20px;
   border-radius: 0 16px 0 0;
}
.img-right-bottom {
   margin: 10px 0 0 20px;
   border-radius: 0 0 16px 0;
}
.form-container {
   background: #FFFFFF;
   box-shadow: 0px 0px 10px rgba(50, 62, 200, 0.2);
   border-radius: 16px;
   height: 500px;
   padding: 20px;
}
.form-container-top h1 {
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   margin: 0;
}
.form-container-top span {
   font-weight: 700;
   font-size: 16px;
   line-height: 16px;
   color: #666666;
}
.form-container-top button {
   width: 40px;
   height: 40px;
   background: #FFFFFF;
   box-shadow: 0px 0px 10px rgba(50, 62, 200, 0.2);
   border-radius: 8px;
   border: none;
}
.description {
   background: #FFFFFF;
   box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.05);
   border-radius: 8px;
   min-height: 150px;
   padding: 16px;
}
.description p {
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
}
button.contact {
   width: 308px;
   height: 60px;
   background: #323EC8;
   box-shadow: 0px 0px 10px rgba(50, 62, 200, 0.2);
   border-radius: 8px;
   border: none;
   font-weight: 700;
   font-size: 20px;
   line-height: 150%;
   color: #FFFFFF;
}
.close {
   background: #FFFFFF;
   border: none;
   font-size: 30px;
}

.mobile-back-button {
   top: 20px;
   left: 20px;
   width: 40px;
   height: 40px;
   background: #485563;
   border-radius: 10px;
   border: none;
   color: #FFFFFF;
   font-size: 20px;
}

@media (max-width: 767.98px) {
   .form-container {
      border-radius: unset;
      height: auto;
   }
   .contact {
      width: 100%!important;
   }
}
</style>
