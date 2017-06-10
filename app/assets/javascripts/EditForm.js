Vue.component('edit-form', {
  template: '\
    <div>\
      <h4>{{ user.full_name }}</h4>\
      <button @click="toggleForm">{{ showForm ? "Hide Form" : "Show Form" }}</button>\
      <br/><br/>\
      <form v-if="showForm">\
        <label for="name">First Name</label>\
        <input type="text" v-model="firstName"/><br/>\
        <label for="name">Name</label>\
        <input type="text" v-model="lastName"/><br/>\
        <label for="email">Email</label>\
        <input type="text" v-model="email"/><br/>\
        <input type="submit"/><br/>\
      </form>\
    </div>\
  ',

  props: ['user'],

  data: function() {
    const { first_name, last_name, email } = this.user

    return {
      firstName: first_name || '',
      lastName: last_name || '',
      email: email || '',
      showForm: false
    }
  },

  methods: {
    toggleForm: function() {
      this.showForm = !this.showForm
    }
  }
})
