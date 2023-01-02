
exports.handler = async (event) => {
    console.log(event);
    let order = {
        id: event.order.order.M.id.N,
        // omitting the rest for sake of brevity.    
    }
    // It would fetch the missing information
    order.category = {
        id: 10,
        name: "Sports"
    };

    return order;
  };