import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/checkoutform/checkout';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OsjkySBs6gHrMw2i7mDVbCs4NWHSJERHjySzxl8B1YsxETVNTbvUdvZgLhbw4BHvmXMH3Lwl32ngjNMKC9RxiOM00isrAErXY');
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;