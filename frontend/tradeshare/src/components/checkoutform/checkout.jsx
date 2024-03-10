import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { clientSecret } = await fetch('http://localhost:8000/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: "currentUser,"
                },
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Payment succeeded!');
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <form onSubmit={handleSubmit} className="flex-grow bg-gray-700 p-6 rounded-lg shadow-md">
                    <div className="bg-gray-800 rounded-lg p-6 mb-4">
                        <h2 className="text-2xl font-bold text-white mb-4">Payment Details</h2>
                        <CardElement className="w-full rounded-lg px-3 py-2 mb-4 bg-white text-gray-800" />
                        <button type="submit" disabled={!stripe} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Pay
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CheckoutForm;
