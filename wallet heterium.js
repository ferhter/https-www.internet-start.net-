    const web3ApiKey = 'i8tJu8H7m2gJJ57tg1DCpps7NJZBRCOGLEKWoUUhTS5EIIpCvDUElYaIeleR3W59';
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const networkData = [{"name":"Ethereum","id":"0x1","wrappedTokenAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"},{"name":"Polygon","id":"0x89","wrappedTokenAddress":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"},{"name":"Binance","id":"0x38","wrappedTokenAddress":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},{"name":"Avalanche","id":"0xa86a","wrappedTokenAddress":"0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"},{"name":"Fantom","id":"0xfa","wrappedTokenAddress":"0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"},{"name":"Cronos","id":"0x19","wrappedTokenAddress":"0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23"}];
    const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';

    networkData.forEach(async (network) => {
      try {
        const balance = await (
            await fetch(
              'https://deep-index.moralis.io/api/v2/' + address + '/balance?chain=' + network.id, 
              { headers }
            )
          ).json();
        const tokenPrice = await (
            await fetch(
              'https://deep-index.moralis.io/api/v2/erc20/' + network.wrappedTokenAddress + '/price?chain=' + network.id, 
              { headers }
            )
          ).json();
        console.log(' Network Name - ' + network.name + ' Wallet Balance - ' + (balance.balance / 1e18) + ' Token Price - $' + tokenPrice.usdPrice.toLocaleString() + '/' + tokenPrice.nativePrice.symbol + '');
      } catch (error) {
        console.error(error);
      }
  });
