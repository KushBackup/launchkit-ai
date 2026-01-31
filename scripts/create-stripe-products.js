#!/usr/bin/env node

// Create Stripe products and prices
// Run: node create-stripe-products.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const products = [
  {
    name: 'Starter',
    price: 9900, // $99 in cents
    description: '1 business project/month, market research, landing page, basic MVP, 50 leads',
  },
  {
    name: 'Growth',
    price: 29900, // $299 in cents
    description: '2 projects, full launch, 200 leads/month, cold email campaigns, investor deck',
  },
  {
    name: 'Scale',
    price: 59900, // $599 in cents
    description: '3+ projects, custom design, 500 leads/month, automated outreach, 50 investor intros',
  },
];

async function createProducts() {
  console.log('Creating Stripe products and prices...\n');
  
  for (const prod of products) {
    try {
      // Create product
      const product = await stripe.products.create({
        name: `LaunchKit AI - ${prod.name}`,
        description: prod.description,
      });
      
      // Create price
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: prod.price,
        currency: 'usd',
        recurring: {
          interval: 'month',
        },
      });
      
      console.log(`✅ ${prod.name}:`);
      console.log(`   Product ID: ${product.id}`);
      console.log(`   Price ID: ${price.id}`);
      console.log(`   Amount: $${prod.price / 100}/month\n`);
      
    } catch (error) {
      console.error(`❌ Error creating ${prod.name}:`, error.message);
    }
  }
  
  console.log('\n✅ Done! Copy the Price IDs above to use in your app.');
}

createProducts();
