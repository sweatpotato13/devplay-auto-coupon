# devPlayAutoCoupon

## Introduction
Module that apply devPlay coupon through CLI

## Screenshots
![ss1](https://i.imgur.com/fiui4Ww.gif)

![ss2](https://i.imgur.com/ejJWuIV.png)


## 💾 Installation
```sh
# Local install
git clone https://github.com/sweatpotato13/devPlayAutoCoupon.git
yarn build
yarn test
devplay [arg...]
```

```sh
# from NPM
yarn global add devplayautocoupon
devplay [arg...]
```

## 💾 Usage
```sh
devplay [devPlayId] [coupon] # Apply [coupon] in [devPlayId]
devplay [json] # Apply coupons with json
```
**Json format looks like below**
```json
{
    "devPlayId": "myDevPlayId",
    "coupons": [
        "WELCOMETOKINGDOM",
        "KINGDOMWELOVEYOU",
        "KINGDOMSUNBA0128",
        "KINGDOMYANGDDING",
        "KINGDOMSWAMP0130",
        "TK2PO5GA87DBJALQ",
        "KINGDOMLILKA2021",
        "KINGDOMOKING5927"
    ]
}
```
coupons can be array, devPlayId will be single string

## ☎️ Need help ?
Post on [Issue](https://github.com/sweatpotato13/devPlayAutoCoupon/issues)
or
Contact [me](sweatpotato13@gmail.com)
