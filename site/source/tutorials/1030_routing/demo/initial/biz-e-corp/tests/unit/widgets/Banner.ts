const { describe, it } = intern.getInterface('bdd');

import { v, w } from '@dojo/framework/widget-core/d';
import harness from '@dojo/framework/testing/harness';
import Banner from '../../../src/widgets/Banner';

describe('Banner', () => {
	it('should render', () => {
		const h = harness(() => w(Banner, {}));
		h.expect(() => v('h1', { title: 'I am a title!' }, [ 'Welcome To Biz-E-Bodies' ]));
	});
});
