import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-tian',
  template: `
    <section class="hero is-warning is-large">
  <div class="hero-body scrollContainer">
    <p class="title">
      Explore Tian
    </p>
    <p class="subtitle">
      Scroll through to see Tian's Features
    </p>
    <div class="list_container">
  <div id="item_direction"><b id="boldTitle">Acheiving Stability</b>
      <div class="columns">
      <div class="column">
      <p>Tian achieves stability with what we call "Value Damping" (and also a fair initial distribution and preventing whale manipulation).  Since we cannot measure the price of Tian in a decentralized way, adjusting our emission of new coins based on price is out of the question.  Even if we could, what price would we choose?  Price has to be measured relative to something else.  We have access to objective trading volume measures.  So using this feature, we can measure our volume of coins traded.  A common feature of DeFi tokens is a fee on each transaction that is given back to holders (sometimes called "auto-staking").  If our volume goes up, more fees will be redistributed to holders.  To be clear we do not dilute holders portion of the market cap, we mint the same amount as new coins that bolster the supply for sale.  Dilution in some form is necessary to avoid economic rents and this comes from the tiny fee on each transaction.
</p>
      </div> <!-- end column -->
      <div class="column">
        <p>words for testing</p>
        <img class="glyps" src="">
      </div> <!-- end column -->
      </div> <!-- end columns -->
  </div>
  <div id="item_direction"><b id="boldTitle">Governance</b>
      <div class="columns">
      <div class="column">
      <p>Tian has no governance.  When it is launched the initial BNB liquidity tokens will be burned, the keys to the contract burned, and any other means of control forfieted.  The monthly gas fees will be paid by the contract if possible, otherwise by a creators wallet that will be entirely under control of the contract.  The contract will use liquidity (either BNB or Tian or any other coin it holds) in order to run its monthly functions.  Tian will be launched entirely in the hands of the community with no one able to change it for any reason.
</p>
      </div> <!-- end column -->
      <div class="column">
        <p>words for testing</p>
        <img class="glyps" src="">
      </div> <!-- end column -->
      </div> <!-- end columns -->
</div>
  <div id="item_direction"><b id="boldTitle">Initial Distribution</b>
      <div class="columns">
      <div class="column">
      <p>Initial distrubution is how we get tokens in the hands of customers.  Almost all DeFi projects mint all the tokens at once, keep a bunch for themselves/investors, then give some away and allow people to buy some from the contract.  In our case we have a fair launch and we hope everyone buys small amounts consistently monthly as new coins are dropped into the contract.  What this means is that when the highest proportion of new coins are hitting the market, we will (hopefully) be in an exponential growth phase for out token, thus this growth will consume all the excess coins.  Therefore we can prevent inflation of our supply while getting coins into the most competent hands possible by using the constant emission model of initial distribution.
</p>
      </div> <!-- end column -->
      <div class="column">
        <p>words for testing</p>
        <img class="glyps" src="">
      </div> <!-- end column -->
      </div> <!-- end columns --> 
</div>
  <div id="item_direction"><b id="boldTitle">Eliminating Economic Rents</b>
      <div class="columns">
      <div class="column">
      <p>The way Tian overcomes economic rents is by redistributing a very small amount of each transaction to become available for new users to buy while not diluting the share of holders.  This is done with a very small (~0.07%) fee on each transaction.  Also our initial distribution model means there are always new un-owned tokens coming on the market monthly for new users to buy at a fair price.
</p>
      </div> <!-- end column -->
      <div class="column">
        <p>words for testing</p>
        <img class="glyps" src="">
      </div> <!-- end column -->
      </div> <!-- end columns -->
</div>
  <div id="item_direction"><b id="boldTitle">Preventing Whale Manipulation</b>
      <div class="columns">
      <div class="column">
      <p>The biggest way to prevent price manipulation is enforcing a maximum buy of 38% of the Tian liquidity at once.  What this means is it takes 5 max buys to get 90% of the outstanding Tian, 10 buys to get 99%, etc, with each buy increasing the price per coin.  Another way to prevent whale manipulation is by our small but proportional transaction fee, very large buys will have a non-negligible fee so the whale would need to be confident they will make a lot of money buy selling->buying->selling to compensate from what they loose due to the transaction fee.  The last way Tian prevents price manipulation is that our coins are minted continuously and slowly over 2000+ years.  This makes it much harder for a whale to corner the supply and manipulate the price, giving everyone - present and future - the chance to buy in.
</p>
      </div> <!-- end column -->
      <div class="column">
        <p>words for testing</p>
        <img class="glyps" src="">
      </div> <!-- end column -->
      </div> <!-- end columns -->
</div>
  <div id="item_direction"><b id="boldTitle">Transaction Fee</b>
      <div class="columns">
      <div class="column">
      <p>The transaction fee is ultra-low at 0.069420% per transaction (tx).  The tx fee was designed to give us roughly 3% yearly coin creation assuming our daily volume to marketcap ratio is roughly 10%.  We want many transactions!  Everytime you make a transaction, you can feel good that your fees are redistributed, going right back into the community and not a central authority.  Plus, and amount equal to your tx fee will be minted new and made available for anyone to snap up.  This keeps the tokens flowing and getting to a broader and broader audience improving adoption, while not causing inflation that harms holders value.
</p>
      </div> <!-- end column -->
      <div class="column">
        <p>words for testing</p>
        <img class="glyps" src="">
      </div> <!-- end column -->
      </div> <!-- end columns -->
</div>
  <div id="item_direction"><b id="boldTitle">Minting New Coins</b>
      <div class="columns">
      <div class="column">
      <p>
Every month 44,468,237,170 tokens are minted via constant emission, in addition to new coins minted during every transaction.  We hit 1 Trillion tokens in 2 years after launch.  Ten trillion in 20 years, 100 trillion in 200 years, 1 quadrillion in 2000 years.  This means the best strategy for investing is making small monthly buys after new coins are released and thus the price is at a low point.</p>
      </div> <!-- end column -->
      <div class="column">
        <p>words for testing</p>
        <img class="glyps" src="">
      </div> <!-- end column -->
      </div> <!-- end columns -->
</div>
</div>
  </div>
</section>
  `,
  styles: [
    `
    .list_container {
    direction: rtl;
    overflow:auto;
    height: 250px;
    width: 70vw;
  }
  #boldTitle {
    font-size: 1.4em;
    color: amber !important;
  }

  #item_direction {
    direction:ltr;
  }
    `
  ]
})
export class ExploreTianComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
