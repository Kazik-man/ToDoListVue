var app = new Vue({
    el: '#app',
    data: {
      // style: '',
      newItemName: '',
      newItemCategory: '',
      newCategoryName: '',
      list: [],
      categories: [{
        name: 'new'
      }, {
        name: 'work'
      }, {
        name: 'home'
      }]
  },
  methods: {
    
    deleteItem(key) {
      this.list.splice(key, 1);
    },
    addItem() {
        this.list.push({
          name: this.newItemName,
          category: this.newItemCategory,
          isDone: false,
          isEdit: false,
          // bgCol: false,
        });
        this.newItemName = null;
        this.newItemCategory = '';
        this.newCategoryName = null;
    },
    addCategory() {
      this.categories.push({
        name: this.newCategoryName
      })
    },
    filteredList(categoryName) {
      return this.list.filter(item => item.category === categoryName);
    }
  },
      // следим за листом
  watch: {
    list: {
      handler: function() {
        // создание 'тудулиста'(название может быть другим) в локалСторедж
        // set => добавляет
        // get => берёт данные с него
        localStorage.setItem('todoList', JSON.stringify(this.list));
      },
      deep: true
    },
    categories: function() {
      localStorage.setItem('todoCategories', JSON.stringify(this.categories));
    }
  },
  created: function() {
    this.list = JSON.parse(localStorage.getItem('todoList')) || [];
    this.categories = JSON.parse(localStorage.getItem('todoCategories')) || this.categories;
  }
})