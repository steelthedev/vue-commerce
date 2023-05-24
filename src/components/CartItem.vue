<template>
    
              
                    <tr class="">
                      <td class="">
                        <div class="product-info">
                          <img width="80" :src="item.product.get_thumbnail" alt="" />
                          <router-link :to="item.product.get_absolute_url">{{item.product.name}}</router-link>
                        </div>
                      </td>
                      <td>
                        <a @click="incrementQuantity(item)"> + </a>
                        x{{item.quantity}}
                        <a @click="decrementQuantity(item)"> - </a>
                        </td>
                         <td>{{item.product.price}}</td>
                      <td class="">
                        <a class="product-remove" @click="removeFromCart(item)" >Remove</a>
                      </td>
                      <td>${{getItemTotal(item).toFixed(2) }}</td>
                    </tr>
</template>

<script>
export default {
    name:'CartItem',
    props:{

        initialItem: Object
    },
    data(){
        return{
            item:this.initialItem
        }
    },
   methods:{
     getItemTotal(item){
       return item.quantity * item.product.price 
     },
      
      incrementQuantity(item){
        this.item.quantity += 1
      },

      decrementQuantity(item){
        this.item.quantity -= 1

        if (this.item.quantity === 0){
          this.$emit('removeFromCart', item)
        }

        this.updateCart()
      },

      updateCart(){
        localStorage.setItem('cart', JSON.stringify(this.$store.cart))
      },

       removeFromCart (item){
          this.$emit('removeFromCart', item)
        
        this.updateCart()
       }
   }
}
</script>