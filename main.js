const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      reviews: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    addReview(review) {
      console.log('review: ', review);
      this.reviews.push(review);
    },
  },
});
