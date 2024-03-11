"""Equity Quote Standard Model."""

from datetime import datetime
from typing import List, Optional, Union

from pydantic import Field, field_validator

from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.query_params import QueryParams
from openbb_core.provider.utils.descriptions import (
    DATA_DESCRIPTIONS,
    QUERY_DESCRIPTIONS,
)


class EquityQuoteQueryParams(QueryParams):
    """Equity Quote Query."""

    symbol: str = Field(
        description=QUERY_DESCRIPTIONS.get("symbol", "")
        + " This endpoint will accept multiple symbols separated by commas."
    )

    @field_validator("symbol", mode="before", check_fields=False)
    @classmethod
    def to_upper(cls, v: str) -> str:
        """Convert field to uppercase."""
        return v.upper()


class EquityQuoteData(Data):
    """Equity Quote Data."""

    symbol: str = Field(description=DATA_DESCRIPTIONS.get("symbol", ""))
    asset_type: Optional[str] = Field(
        default=None, description="Type of asset - i.e, stock, ETF, etc."
    )
    name: Optional[str] = Field(
        default=None, description="Name of the company or asset."
    )
    exchange: Optional[str] = Field(
        default=None,
        description="The name or symbol of the venue where the data is from.",
    )
    bid: Optional[float] = Field(
        default=None, description="Price of the top bid order."
    )
    bid_size: Optional[int] = Field(
        default=None,
        description="This represents the number of round lot orders at the given price."
        + " The normal round lot size is 100 shares."
        + " A size of 2 means there are 200 shares available at the given price.",
    )
    bid_exchange: Optional[str] = Field(
        default=None,
        description="The specific trading venue where the purchase order was placed.",
    )
    ask: Optional[float] = Field(
        default=None, description="Price of the top ask order."
    )
    ask_size: Optional[int] = Field(
        default=None,
        description="This represents the number of round lot orders at the given price."
        + " The normal round lot size is 100 shares."
        + " A size of 2 means there are 200 shares available at the given price.",
    )
    ask_exchange: Optional[str] = Field(
        default=None,
        description="The specific trading venue where the sale order was placed.",
    )
    quote_conditions: Optional[Union[str, int, List[str], List[int]]] = Field(
        default=None,
        description="Conditions or condition codes applicable to the quote.",
    )
    quote_indicators: Optional[Union[str, int, List[str], List[int]]] = Field(
        default=None,
        description="Indicators or indicator codes applicable to the participant"
        + " quote related to the price bands for the issue, or the affect the quote has"
        + " on the NBBO.",
    )
    sales_conditions: Optional[Union[str, int, List[str], List[int]]] = Field(
        default=None,
        description="Conditions or condition codes applicable to the sale.",
    )
    sequence_number: Optional[int] = Field(
        default=None,
        description="The sequence number represents the sequence in which message events happened."
        + " These are increasing and unique per ticker symbol,"
        + " but will not always be sequential (e.g., 1, 2, 6, 9, 10, 11).",
    )
    market_center: Optional[str] = Field(
        default=None,
        description="The ID of the UTP participant that originated the message.",
    )
    participant_timestamp: Optional[datetime] = Field(
        default=None,
        description="Timestamp for when the quote was generated by the exchange.",
    )
    trf_timestamp: Optional[datetime] = Field(
        default=None,
        description="Timestamp for when the TRF (Trade Reporting Facility) received the message.",
    )
    sip_timestamp: Optional[datetime] = Field(
        default=None,
        description="Timestamp for when the SIP (Security Information Processor)"
        + " received the message from the exchange.",
    )
    last_price: Optional[float] = Field(
        default=None, description="Price of the last trade."
    )
    last_tick: Optional[str] = Field(
        default=None, description="Whether the last sale was an up or down tick."
    )
    last_size: Optional[int] = Field(
        default=None, description="Size of the last trade."
    )
    last_timestamp: Optional[datetime] = Field(
        default=None, description="Date and Time when the last price was recorded."
    )
    open: Optional[float] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("open", "")
    )
    high: Optional[float] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("high", "")
    )
    low: Optional[float] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("low", "")
    )
    close: Optional[float] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("close", "")
    )
    volume: Optional[Union[int, float]] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("volume", "")
    )
    exchange_volume: Optional[Union[int, float]] = Field(
        default=None,
        description="Volume of shares exchanged during the trading day on the specific exchange.",
    )
    prev_close: Optional[float] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("prev_close", "")
    )
    change: Optional[float] = Field(
        default=None, description="Change in price from previous close."
    )
    change_percent: Optional[float] = Field(
        default=None,
        description="Change in price as a normalized percentage.",
        json_schema_extra={"x-frontendmultiply": 100},
    )
    year_high: Optional[float] = Field(
        default=None, description="The one year high (52W High)."
    )
    year_low: Optional[float] = Field(
        default=None, description="The one year low (52W Low)."
    )
