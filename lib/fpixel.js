export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = () => {
    window.fbq('track', 'PageView')
}

// Track "Add to Cart" event
export const addToCart = ({
    content_ids = [],
    content_names = [],
    content_quantities = [],
    total_quantity = 0,
    value = 0,
    currency = 'INR',
}) => {
    try {
        // Validate and sanitize inputs
        const sanitizedContentIds = Array.isArray(content_ids) ? content_ids.filter(Boolean) : [];
        const sanitizedContentNames = Array.isArray(content_names) ? content_names.filter(Boolean) : [];
        const sanitizedContentQuantities = Array.isArray(content_quantities)
            ? content_quantities.map((qty) => (isNaN(qty) ? 0 : Number(qty)))
            : [];
        const sanitizedTotalQuantity = isNaN(total_quantity) ? 0 : Number(total_quantity);
        const sanitizedValue = parseFloat(value);

        // Log warnings for invalid inputs
        if (!sanitizedContentIds.length) console.warn('initiateCheckout: content_ids is empty or invalid.');
        if (!sanitizedContentNames.length) console.warn('initiateCheckout: content_names is empty or invalid.');
        if (!sanitizedContentQuantities.length)
            console.warn('initiateCheckout: content_quantities is empty or invalid.');
        if (sanitizedTotalQuantity <= 0) console.warn('initiateCheckout: total_quantity is zero or invalid.');
        if (isNaN(sanitizedValue)) console.warn('initiateCheckout: value is not a valid number.');

        // Trigger the Facebook Pixel event
        window.fbq('track', 'AddToCart', {
            content_ids: sanitizedContentIds,
            content_names: sanitizedContentNames,
            content_quantities: sanitizedContentQuantities,
            total_quantity: sanitizedTotalQuantity,
            value: sanitizedValue.toFixed(2),
            currency,
        });
    } catch (error) {
        console.error('Error in addToCart:', error);
    }
};


// Track "View Content" event
export const viewContent = (productId, contentName, contentCategory, price, contentType = 'product', currency = 'INR') => {
    window.fbq('track', 'ViewContent', {
        content_ids: [productId],
        content_name: contentName,        // e.g., 'Show'
        content_category: contentCategory, // e.g., 'oversized'
        value: price,                      // Value of the product
        content_type: contentType,         // e.g., 'product_group'
        currency: currency,                     // Number of items viewed
    });
};

// Track "Initiate Checkout" event
export const initiateCheckout = ({
    content_ids = [],
    content_names = [],
    content_quantities = [],
    total_quantity = 0,
    value = 0,
    currency = 'INR',
}) => {
    try {
        // Validate and sanitize inputs
        const sanitizedContentIds = Array.isArray(content_ids) ? content_ids.filter(Boolean) : [];
        const sanitizedContentNames = Array.isArray(content_names) ? content_names.filter(Boolean) : [];
        const sanitizedContentQuantities = Array.isArray(content_quantities)
            ? content_quantities.map((qty) => (isNaN(qty) ? 0 : Number(qty)))
            : [];
        const sanitizedTotalQuantity = isNaN(total_quantity) ? 0 : Number(total_quantity);
        const sanitizedValue = parseFloat(value);

        // Log warnings for invalid inputs
        if (!sanitizedContentIds.length) console.warn('initiateCheckout: content_ids is empty or invalid.');
        if (!sanitizedContentNames.length) console.warn('initiateCheckout: content_names is empty or invalid.');
        if (!sanitizedContentQuantities.length)
            console.warn('initiateCheckout: content_quantities is empty or invalid.');
        if (sanitizedTotalQuantity <= 0) console.warn('initiateCheckout: total_quantity is zero or invalid.');
        if (isNaN(sanitizedValue)) console.warn('initiateCheckout: value is not a valid number.');

        // Trigger the Facebook Pixel event
        window.fbq('track', 'InitiateCheckout', {
            content_ids: sanitizedContentIds,
            content_names: sanitizedContentNames,
            content_quantities: sanitizedContentQuantities,
            total_quantity: sanitizedTotalQuantity,
            value: sanitizedValue.toFixed(2),
            currency,
        });
    } catch (error) {
        console.error('Error in initiateCheckout:', error);
    }
};


//Track "Purchased" event
export const purchased = ({
    content_ids = [],
    content_names = [],
    content_quantities = [],
    total_quantity = 0,
    value = 0,
    currency = 'INR',
}) => {
    try {
        // Validate and sanitize inputs
        const sanitizedContentIds = Array.isArray(content_ids) ? content_ids.filter(Boolean) : [];
        const sanitizedContentNames = Array.isArray(content_names) ? content_names.filter(Boolean) : [];
        const sanitizedContentQuantities = Array.isArray(content_quantities)
            ? content_quantities.map((qty) => (isNaN(qty) ? 0 : Number(qty)))
            : [];
        const sanitizedTotalQuantity = isNaN(total_quantity) ? 0 : Number(total_quantity);
        const sanitizedValue = parseFloat(value);

        // Log warnings for invalid inputs
        if (!sanitizedContentIds.length) console.warn('initiateCheckout: content_ids is empty or invalid.');
        if (!sanitizedContentNames.length) console.warn('initiateCheckout: content_names is empty or invalid.');
        if (!sanitizedContentQuantities.length)
            console.warn('initiateCheckout: content_quantities is empty or invalid.');
        if (sanitizedTotalQuantity <= 0) console.warn('initiateCheckout: total_quantity is zero or invalid.');
        if (isNaN(sanitizedValue)) console.warn('initiateCheckout: value is not a valid number.');

        window.fbq('track', 'Purchased', {
            content_ids: sanitizedContentIds,
            content_names: sanitizedContentNames,
            content_quantities: sanitizedContentQuantities,
            total_quantity: sanitizedTotalQuantity,
            value: sanitizedValue.toFixed(2),
            currency,                     // Number of items viewed
        });
    } catch (error) {
        console.error('Error in initiateCheckout:', error);
    }
};



// lib/fpixel.js

export const initPixel = () => {
    if (typeof window !== 'undefined') {
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
            t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', `${fbq.FB_PIXEL_ID}`); // Replace with your Pixel ID
        fbq('track', 'PageView'); // Track page view
    }
};

export const trackEvent = (event, params) => {
    if (typeof window !== 'undefined' && window.fbq) {
        fbq('track', event, params);
    }
};
