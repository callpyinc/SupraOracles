// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface ISupraSValueFeed {

    function checkPrice(string memory marketPair) external view returns (int256 price, uint256 timestamp);

}

contract btcDivEth { //Example based on Solidity example https://supraoracles.com/docs/get-started/#step-3-get-the-s-value-crypto-price

    ISupraSValueFeed public constant sValueFeed = ISupraSValueFeed(0x2e1d90501C3173367ecC6a409Fb1b588Bf3C16A5); //Shardeum Liberty 2.0.
    // ISupraSValueFeed public constant sValueFeed = ISupraSValueFeed(0x25DfdeD39bf0A4043259081Dc1a31580eC196ee7); //Goerli and Mumbai. Cross chain addresses supported: https://supraoracles.com/docs/get-started/networks

    function ethUsdt() public view returns (int) {
        (int price,) = sValueFeed.checkPrice("eth_usdt");
        return price;
    }

    function btcUsdt() public view returns (int) {
        (int price,) = sValueFeed.checkPrice("btc_usdt");
        return price;
    }

    function flipMe() public view returns (int) { //Will return 0 if btcUsdt() < ethUsdt() since Solidity doesn't support float values.
        return btcUsdt()/ethUsdt();
    }
      
}
