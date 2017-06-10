Vue.component('users-list', {
  template: '\
    <div>\
      <ul v-for="user in users">\
        <li>{{ user.first_name }}</li>\
        <li>{{ user.last_name }}</li>\
        <li>{{ user.email }}</li>\
      </ul>\
    </div>\
  ',

  props: ['users'],

  methods: {
    toggleForm: function() {
      this.showForm = !this.showForm
    }
  }
})
