"""FRED Spot Rate Model."""

from typing import Any, Dict, List, Optional

from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.standard_models.spot import (
    SpotRateData,
    SpotRateQueryParams,
)
from openbb_fred.utils.fred_base import Fred
from openbb_fred.utils.fred_helpers import comma_to_float_list, get_spot_series_id
from pydantic import field_validator


class FREDSpotRateQueryParams(SpotRateQueryParams):
    """FRED Spot Rate Query."""

    __json_schema_extra__ = {
        "maturity": ["multiple_items_allowed"],
        "category": ["multiple_items_allowed"],
    }


class FREDSpotRateData(SpotRateData):
    """FRED Spot Rate Data."""

    __alias_dict__ = {"rate": "value"}

    @field_validator("rate", mode="before", check_fields=False)
    @classmethod
    def value_validate(cls, v):
        """Validate rate."""
        try:
            return float(v)
        except ValueError:
            return None


class FREDSpotRateFetcher(
    Fetcher[
        FREDSpotRateQueryParams,
        List[FREDSpotRateData],
    ]
):
    """Transform the query, extract and transform the data from the FRED endpoints."""

    data_type = FREDSpotRateData

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> FREDSpotRateQueryParams:
        """Transform query."""
        return FREDSpotRateQueryParams(**params)

    @staticmethod
    def extract_data(
        query: FREDSpotRateQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any
    ) -> list:
        """Extract data."""
        key = credentials.get("fred_api_key") if credentials else ""
        fred = Fred(key)

        maturity = (
            comma_to_float_list(query.maturity)
            if isinstance(query.maturity, str)
            else [query.maturity]
        )
        if any(1 > m > 100 for m in maturity):
            raise ValueError("Maturity must be between 1 and 100")

        series = get_spot_series_id(
            maturity=maturity,
            category=query.category.split(","),
        )

        data = []

        for s in series:
            id_ = s["FRED Series ID"]
            title = s["Title"]
            d = fred.get_series(
                series_id=id_,
                start_date=query.start_date,
                end_date=query.end_date,
                **kwargs,
            )
            for item in d:
                item["title"] = title
            data.extend(d)

        return data

    @staticmethod
    def transform_data(
        query: FREDSpotRateQueryParams, data: list, **kwargs: Any
    ) -> List[FREDSpotRateData]:
        """Transform data."""
        return [FREDSpotRateData.model_validate(d) for d in data]
