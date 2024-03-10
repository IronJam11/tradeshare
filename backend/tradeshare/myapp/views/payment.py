import stripe
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.views.decorators.http import require_POST
import json

# Initialize Stripe with your secret key
stripe.api_key ="sk_test_51OsjkySBs6gHrMw2mscAMnTnRoGRV43XoFqRcbNGszUdRGH3dvDfkaf9Yo1Ev6FMw1UKJh8oFKevandXimIAWdHM00NDmPqsgm"

@csrf_exempt
@require_POST
def create_payment_intent(request):
    try:
        # Parsing request body to get the amount
        data = json.loads(request.body)
        # You can customize the amount and currency or retrieve them from the request as needed
        amount = data.get('amount', 1099)  # Example amount in cents/lowest currency unit
        
        # Create a PaymentIntent with the order amount and currency
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency='eur',  # or 'usd', depending on you  preference
            payment_method_types=['card'],  # You can specify other payment methods here
        )
        
        return JsonResponse({
            'clientSecret': intent.client_secret
        })
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)