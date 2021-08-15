import RubUtils from "../../utils/rubUtils";
import {PriceCsvResponse, PriceResponse, PromotionPriceResponse} from "../../types/domains/price";

export default class PriceController {
    public async getAllPrices(): Promise<PriceResponse> {
        return RubUtils.call('/domain/price', { method: 'GET' })
    }

    public async getAllPricesAsCSVFile(): Promise<PriceCsvResponse> {
        return RubUtils.call('/domain/price/csv', { method: 'GET' })
    }

    public async getAllPromotionPrices(): Promise<PromotionPriceResponse> {
        return RubUtils.call('/domain/price/promotion', { method: 'GET' })
    }

    public async getAllPromotionPricesAsCSVFile(): Promise<PriceCsvResponse> {
        return RubUtils.call('/domain/price/promotion/csv', { method: 'GET' })
    }
}
