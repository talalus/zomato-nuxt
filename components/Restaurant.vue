<template>
  <div>
    <div class="restaurant">
      <div class="restaurant__image">
        <transition name="fade">
          <img v-lazy="restaurant.featured_image" :alt="restaurant.name" />
        </transition>
      </div>
      <div class="restaurant__details">
        <h1 class="restaurant__name">
          {{ restaurant.name }}
        </h1>
        <div class="restaurant__address">
          {{ restaurant.location.address }}
        </div>
        <div class="restaurant__options">
          <div class="restaurant__option">
            <span
              :class="[
                'restaurant__option-status',
                restaurant.has_table_booking
                  ? 'restaurant__option-status--green'
                  : 'restaurant__option-status--red'
              ]"
            >
            </span>
            <span
              v-if="restaurant.has_table_booking"
              class="restaurant__option-detail"
            >
              Bookings available
            </span>
            <span v-else class="restaurant__option-detail">No bookings</span>
          </div>
          <div class="restaurant__option">
            <span
              :class="[
                'restaurant__option-status',
                restaurant.has_online_delivery
                  ? 'restaurant__option-status--green'
                  : 'restaurant__option-status--red'
              ]"
            >
            </span>
            <span
              v-if="restaurant.has_online_delivery"
              class="restaurant__option-detail"
              >Delivery available
            </span>
            <span v-else class="restaurant__option-detail">No delivery</span>
          </div>
        </div>
        <div class="restaurant__attribute">
          <div class="restaurant__attribute-title">Cuisines</div>
          <div class="restaurant__attribute-value">
            {{ restaurant.cuisines }}
          </div>
        </div>
        <div class="restaurant__attribute">
          <div class="restaurant__attribute-title">
            Phone numbers
          </div>
          <div class="restaurant__attribute-value">
            {{ restaurant.phone_numbers }}
          </div>
        </div>
        <div class="restaurant__attribute">
          <div class="restaurant__attribute-title">
            Opening hours
          </div>
          <div class="restaurant__attribute-value">
            <span>{{ restaurant.timings }}</span>
            <span class="restaurant__attribute-badge">Open Now</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  }
}
</script>
