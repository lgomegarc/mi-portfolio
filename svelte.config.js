import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess({
    typescript: { transpileOnly: true }
  }),
  kit: {
    adapter: adapter()
  }
};
