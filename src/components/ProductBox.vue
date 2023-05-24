<template>
			<div class="col-md-4">
				<div class="product-item">
					<div class="product-thumb">
						<span class="bage">Sale</span>
						<img class="img-responsive" :src="product.get_thumbnail" alt="product-img" >
						<div class="preview-meta">
							<ul>
								<li>
									<span  data-toggle="modal" data-target="#product-modal">
										<i class="fa fa-search"></i>
									</span>
								</li>
								<li>
			                        <a href="#!" ><i class="fa fa-heart"></i></a>
								</li>
								<li>
									<a href="#!"><i class="fa fa-shopping-cart"></i></a>
								</li>
							</ul>
                      	</div>
					</div>
					<div class="product-content">
						<h4>
              <router-link :to="product.get_absolute_url" class="btn btn-transparent p-3 btn-outline-white">View Product</router-link>
            </h4>
						<p class="price">${{product.price}}</p>
					</div>
				</div>
			</div>
    

      
      
</template>

<script>
export default {
    name: 'ProductBox',
    props: {
        product: Object
    }
}
</script>

