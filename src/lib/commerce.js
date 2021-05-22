import Commerce from '@chec/commerce.js'

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
// export const commerce = new Commerce('pk_27633700282fc47c65d91944adbc30f728649a0a56b0d');