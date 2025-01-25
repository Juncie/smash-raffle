import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.StripeSk);

const RAFFLE_PRICE_ID = 'price_1PiNsLB0UAZItjpineUwbFgA';

export async function POST(req) {
    try {
        const { lineItems } = await req.json();
        // console.log(lineItems);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                        maximum: 100_00,
                    },
                    price: RAFFLE_PRICE_ID,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.nextUrl.origin}/?success=1`,
            cancel_url: `${req.nextUrl.origin}/?cancel=1`,
        });

        console.log(session);

        return NextResponse.json({ session }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
