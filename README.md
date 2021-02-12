# devPlayAutoCoupon

## Introduction
Module that apply devPlay coupon through CLI

## Screenshots
![ss1](https://i.imgur.com/fiui4Ww.gif)

![ss2](https://i.imgur.com/ejJWuIV.png)

## Supported Games
* 쿠키런킹덤 (ck)
* 쿠키런퍼즐월드 (crpuz)
* 파티파티데코플레이 (pty)

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
    "data":[
        {
            "gameCode": "ck",
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
        },
        {
            "gameCode": "crpuz",
            "devPlayId": "myDevPlayId",
            "coupons": [
                "TCT2YTW5PY243P7Y"
            ]
        }
    ]
}
```

## ☎️ Need help ?
Post on [Issue](https://github.com/sweatpotato13/devPlayAutoCoupon/issues)
or
Contact [me](sweatpotato13@gmail.com)
