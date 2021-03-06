/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */

import DcentProvider from '../../src'

/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */

describe(__filename.replace(__dirname, ''), () => {
    it('simple get account', async (done) => {
        const provider = new DcentProvider({})
        await provider.enable()
        let account = await provider.send('eth_accounts')
        expect(account.length).toEqual(1)
        done()
    })
})

/* //////////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////////// */
