export interface IcouponList{
    data: Idata[];
}

export interface Idata {
    gameCode: string;
    devPlayId: string;
    coupons: string[];
}
