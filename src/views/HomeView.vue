<script setup>
import { useOnboard } from '@web3-onboard/vue'
import { ethers } from 'ethers'

const { wallets, connectedWallet, connectingWallet, connectWallet, disconnectWallet } = useOnboard()

const onClickConnect = () => {
  const { provider, label } = connectedWallet.value || {}
  if (provider && label) {
    disconnectWallet({ label })
  } else {
    connectWallet().then((w) => console.log(w))
  }
}

</script>

<template>
  <main>
    <button @click="onClickConnect">
      {{
        connectingWallet
          ? 'Connecting...'
          : connectedWallet
          ? 'Disconnect'
          : 'Connect'
      }}
    </button>
  </main>
</template>

<style>
main {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  border: none;
  border-radius: 6px;
  background: hsla(160, 100%, 37%, 1);
  color: white;
  padding: 14px 12px;
  margin-top: 40px;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
}
</style>
