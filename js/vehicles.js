document.addEventListener('alpine:init',()=>{
  console.log('alpine:init');
  Alpine.data('vehicles', ()=>({
    currentFilter: 'brand',
    filters: [
      {title: "Brand", value: "brand"},
      {title: "Hot deals", value: "hotDeal"},
      {title: "Used", value: "used"}
    ],
    cars: [
      {
        brand: "Toyota",
        title: "2023 Toyota BZ4X",
        imgUrl: "/images/spider.png",
        price: "29,000,000 Naira",
        hotDeal: true,
        used: false,
      },
      {
        brand: "Toyota",
        title: "2020 Toyota BZ4X",
        imgUrl: "/images/spider.png",
        price: "15,000,000 Naira",
        hotDeal: true,
        used: false,
      },
      {
        brand: "Lexus",
        title: "2020 Lexus <br/>BZ4X",
        imgUrl: "/images/lexus1.png",
        price: "10,000,000 Naira",
        hotDeal: true,
        used: false,
      },
      {
        brand: "Toyota",
        title: "2023 Highlander",
        imgUrl: "/images/highlander1.png",
        price: "25,000,000 Naira",
        hotDeal: false,
        used: true,
      },
    ],
    setBrand(brand){
      this.currentFilter = brand
    },
    get filteredCars () {
      if(this.currentFilter == 'brand') {
        return this.cars.reduce((acc,item)=>{
          return {...acc, [item.brand]: [...(acc[item.brand] ?? []), item]}
        },{})
      }
      if(this.currentFilter == 'hotDeal') return this.cars.filter(item=>item.hotDeal )
      if(this.currentFilter == 'used') return this.cars.filter(item=>item.used)
      return []
    },
    get title () {
      return this.filters.find(item=>item.value == this.currentFilter)?.title ?? ''
    }
  }))
})