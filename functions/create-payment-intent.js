const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')("sk_test_51LkmKPKA3Sg9QhGQlBNlgM6e98Debd4Jkp2TIFVWkui4uZmoQVNC3q2LVbKk9wGjPbxrLQ4cSru31G3m4owZ5gnu00lPd7RVhj")
exports.handler = async function (event, context) {
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

  const calculateOrderAmount = () => {
    return shipping_fee + total_amount
  }
      amount: calculateOrderAmount(),
      currency: 'usd',
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
