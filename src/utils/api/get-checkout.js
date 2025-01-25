const { default: axios } = require('axios');

export async function getCheckout() {
    console.log('Calling checkout');
    const response = await fetch('api/v1/stripe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lineItems: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'T-shirt',
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
        }),
    });

    const data = await response.json();
    return data.session.url;
}
