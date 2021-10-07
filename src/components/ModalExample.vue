<template>
  <section class="section">
    <div class="container">
      <button class="button is-primary" @click="isActive=true">Click me for Cat!</button>
      <button class="button is-warning" @click="isActive2=true">Click me for Bear!</button>
      <button class="button is-link" @click="isActive3=true">Click me for Card!</button>

      <img-modal 
      v-if="isActive"
      @close="isActive=false"
      src="https://placekitten.com/1280/960">
      </img-modal>

      <img-modal 
      v-if="isActive2"
      @close="isActive2=false"
      src="https://placebear.com/1280/960">
      </img-modal>
      
      <modal 
      v-if="isActive3"
      @close="isActive3=false">
        <div class="card">
          <div class="card-content">
            <div class="content">
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
            </div>
          </div>
        </div>
      </modal>
    </div>
  </section>
</template>

<script>
import ImgModal from './ImgModal.vue'
import Modal from './Modal.vue'
export default {
  components: { Modal, ImgModal },
  data(){
    return {
      isActive: false,
      isActive2: false,
      isActive3: false
    }
  }
}
</script>

<style>

</style>