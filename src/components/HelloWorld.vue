<script setup>
import { useOnboard } from '@web3-onboard/vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import {computed} from 'vue';
import { toRefs, toRef } from 'vue';

const { connectedWallet, connectedChain } = useOnboard()
defineProps({
  msg: {
    type: String,
    required: true
  }
})

console.log(connectedWallet)
</script>

<script>

export default {
    mounted: function () {
        this.$nextTick(function () {    
        })
    },
    updated: function() {
      let address = document.getElementById("address").innerHTML
      if (address) {
        const rawResponse = fetch('/api/onboarding' + window.location.pathname + window.location.search, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ address: address})
        });
      }
    }
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{ connectedChain && connectedChain.id != '0xbbb' ? "Invalid Chain ID, please add Canxium Chain Id: 3003" : "" }}
    </h3>
    <h3>
      {{ connectedWallet && connectedWallet.accounts.length > 0 ? "Welcome to Canxium, address: " + connectedWallet.accounts[0].address : "Let's install Canxium wallet or add Canxium Chain to your wallet. Then connect to onboard." }}
    </h3>
    <h3>
      {{ connectedWallet && connectedWallet.accounts.length && connectedWallet.accounts[0].balance ? "Balance: " + connectedWallet.accounts[0].balance.CAU + " CAU" : "" }}
    </h3>
    <h3 id="address" style="display: none;">
      {{ connectedWallet && connectedWallet.accounts.length > 0 ? connectedWallet.accounts[0].address : "" }}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
