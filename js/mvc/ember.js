App.Order = DS.Model.extend({

    items: function(){
        return this.get('restaurantOrders').then(
            function(restaurantOrders){

                var arrayOfPromisesContainingItems = restaurantOrders.mapBy('items')

                return arrayOfPromisesContainingItems.then(

                    function(items){

                        return items.reduce(

                            function flattenByReduce(memo, index, element){ return memo.pushObject(element) },

                            Ember.A( [] ) )
            })

        })

    }.property('restaurantOrders.@each.items')

})




App.ItemsRoute = Ember.Route.extend({
    model: function(){
        // Multiple GET /items with ids[] query parameter.
        // Returns a promise.
        return this.modelFor('orders.show').get('items');
    }
})