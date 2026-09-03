export interface DcfRequest {
    growthRate : number;
    wacc : number;
    terminalGrowthRate: number;
    projectionYears : number;
    netDebt: number;
}

export interface DcfResponse{
    ticker:string;
    projectedFCFs: number[];
    discountedFCFs:number[];
    terminalValue:number;
    discountedTerminalValue:number;
    enterpriseValue:number;
    equityValue:number;
    pricePerShare:number;
}
