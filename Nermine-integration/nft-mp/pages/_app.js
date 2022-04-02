import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportedChainIds=[4] //Chain ID 4 represents Rinkeby network
const connectors={
  injected:{} //web3 connection method used by metamask here
}
function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps}/>
    </ThirdwebWeb3Provider>)
}

export default MyApp
