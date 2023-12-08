//sk_test_51OL3ydJ98akyvy0z7h1raBFuXLvktBQeg3dtCJqxuK9n1drLiau35Jexx6F0oLlzGgiN3DO5MiaALGD53KbChAuA00Rr19YxcJ
//Abaca Tote Bag: price_1OL4rTJ98akyvy0zCc07MQaG
//Barong Tagalog: price_1OL5GrJ98akyvy0zeBEvHfEI
//Banig: price_1OL5HJJ98akyvy0zxvKAkmYj
//Bayong: price_1OL5cgJ98akyvy0z16kPQ1zR
//Inabel Fabric: price_1OL5eYJ98akyvy0z4yXo3MAN

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51OL3ydJ98akyvy0z7h1raBFuXLvktBQeg3dtCJqxuK9n1drLiau35Jexx6F0oLlzGgiN3DO5MiaALGD53KbChAuA00Rr19YxcJ')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {

    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));