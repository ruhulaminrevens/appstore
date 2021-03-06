import request from 'src/utils/fetch';
import queryString from 'qs';
import pickBy from 'lodash/pickBy';

/**
 * Fetch all the shipping methods.
 * @returns {*}
 */
export const fetchShippingMethod = () => request.get('/wc/v3/shipping_methods');

/**
 * Fetch all the shipping methods from a shipping zone.
 * @param id
 * @returns {*}
 */
export const fetchShippingZoneMethod = id =>
  request.get(`/wc/v3/shipping/zones/${id}/methods`);

/**
 * Fetch all the locations of a shipping zone.
 * @param id
 * @returns {*}
 */
export const fetchShippingLocaltionMethod = id =>
  request.get(`/wc/v3/shipping/zones/${id}/locations`);

/**
 * Get Continent by Country code
 * @param cc: country code
 * @returns {*}
 */
export const getContinentCode = cc =>
  request.get(`/mobile-builder/v1/get-continent-code-for-country?cc=${cc}`);

/**
 * Get Zones
 * @returns {*}
 */
export const getZones = () => request.get('/mobile-builder/v1/zones');

/**
 * Get Zones
 * @returns {*}
 */
export const getCoupons = query =>
  request.get(
    `/wc/v3/coupons?${queryString.stringify(query, {arrayFormat: 'comma'})}`,
  );

/**
 * Add to cart
 * @param data Cart data { product_id: Number, quantity: Number, variation_id: Number, variation: Array, cart_item_data: Object | Array }
 * @param cartKey
 * @package rn_food
 * @since 1.0.0
 * @version 1.0.0
 * @returns {Promise | Promise<unknown>}
 */
export const addToCart = (data, cartKey) =>
  cartKey
    ? request.post(`/mobile-builder/v1/cart?cart_key=${cartKey}`, data)
    : request.post('/mobile-builder/v1/cart', data);

/**
 * Get list cart
 * @package rn_food
 * @since 1.0.0
 * @version 1.0.0
 * @returns {Promise | Promise<unknown>}
 */
export const getCart = (query, options = {}) =>
  request.get(
    `/mobile-builder/v1/cart?${queryString.stringify(
      pickBy(query, item => item !== ''),
      {arrayFormat: 'comma'},
    )}`,
    options,
  );

export const getDirectionsShipping = query =>
  request.get(
    `/mobile-builder/v1/directions?${queryString.stringify(query, {
      arrayFormat: 'comma',
    })}`,
  );

/**
 * Get shipping method
 */
export const getShippingMethods = () =>
  request.get('/mobile-builder/v1/shipping-methods');

export const updateShippingMethods = data =>
  request.post('/mobile-builder/v1/update-shipping', data);

export const updateCartQuantity = (data, cartKey) =>
  request.post(`/mobile-builder/v1/set-quantity?cart_key=${cartKey}`, data);

export const removeCartItem = (data, cartKey) =>
  request.post(`/mobile-builder/v1/remove-cart-item?cart_key=${cartKey}`, data);

export const addCoupon = (data, cartKey) =>
  request.post(`/mobile-builder/v1/add-discount?cart_key=${cartKey}`, data);

export const removeCoupon = (data, cartKey) =>
  request.post(`/mobile-builder/v1/remove-coupon?cart_key=${cartKey}`, data);
