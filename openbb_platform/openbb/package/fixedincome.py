### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

import datetime
from typing import Literal, Optional, Union

from openbb_core.app.model.field import OpenBBField
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.static.container import Container
from openbb_core.app.static.utils.decorators import exception_handler, validate
from openbb_core.app.static.utils.filters import filter_inputs
from typing_extensions import Annotated


class ROUTER_fixedincome(Container):
    """/fixedincome
    bond_indices
    /corporate
    /government
    /rate
    sofr
    /spreads
    """

    def __repr__(self) -> str:
        return self.__doc__ or ""

    @exception_handler
    @validate
    def bond_indices(
        self,
        start_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBField(description="Start date of the data, in YYYY-MM-DD format."),
        ] = None,
        end_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBField(description="End date of the data, in YYYY-MM-DD format."),
        ] = None,
        index_type: Annotated[
            Literal["yield", "yield_to_worst", "total_return", "oas"],
            OpenBBField(
                description="The type of series. OAS is the option-adjusted spread. Default is yield.",
                choices=["yield", "yield_to_worst", "total_return", "oas"],
            ),
        ] = "yield",
        provider: Annotated[
            Optional[Literal["fred"]],
            OpenBBField(
                description="The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fred."
            ),
        ] = None,
        **kwargs
    ) -> OBBject:
        """Bond Indices.

        Parameters
        ----------
        start_date : Union[datetime.date, None, str]
            Start date of the data, in YYYY-MM-DD format.
        end_date : Union[datetime.date, None, str]
            End date of the data, in YYYY-MM-DD format.
        index_type : Literal['yield', 'yield_to_worst', 'total_return', 'oas']
            The type of series. OAS is the option-adjusted spread. Default is yield.
        provider : Optional[Literal['fred']]
            The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fred.
        category : Literal['high_yield', 'us', 'emerging_markets']
            The type of index category. Used in conjunction with 'index', default is 'us'. (provider: fred)
        index : str
            The specific index to query. Used in conjunction with 'category' and 'index_type', default is 'yield_curve'. Multiple comma separated items allowed. (provider: fred)
        frequency : Optional[Literal['a', 'q', 'm', 'w', 'd', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem']]

                Frequency aggregation to convert daily data to lower frequency.
                    None = No change
                    a = Annual
                    q = Quarterly
                    m = Monthly
                    w = Weekly
                    d = Daily
                    wef = Weekly, Ending Friday
                    weth = Weekly, Ending Thursday
                    wew = Weekly, Ending Wednesday
                    wetu = Weekly, Ending Tuesday
                    wem = Weekly, Ending Monday
                    wesu = Weekly, Ending Sunday
                    wesa = Weekly, Ending Saturday
                    bwew = Biweekly, Ending Wednesday
                    bwem = Biweekly, Ending Monday
                 (provider: fred)
        aggregation_method : Literal['avg', 'sum', 'eop']

                A key that indicates the aggregation method used for frequency aggregation.
                This parameter has no affect if the frequency parameter is not set, default is 'avg'.
                    avg = Average
                    sum = Sum
                    eop = End of Period
                 (provider: fred)
        transform : Optional[Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log']]

                Transformation type
                    None = No transformation
                    chg = Change
                    ch1 = Change from Year Ago
                    pch = Percent Change
                    pc1 = Percent Change from Year Ago
                    pca = Compounded Annual Rate of Change
                    cch = Continuously Compounded Rate of Change
                    cca = Continuously Compounded Annual Rate of Change
                    log = Natural Log
                 (provider: fred)

        Returns
        -------
        OBBject
            results : List[BondIndices]
                Serializable results.
            provider : Optional[Literal['fred']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra : Dict[str, Any]
                Extra info.

        BondIndices
        -----------
        date : date
            The date of the data.
        symbol : Optional[str]
            Symbol representing the entity requested in the data.
        value : float
            Index values.
        maturity : Optional[str]
            The maturity range of the bond index. Only applicable when 'index' is 'yield_curve'. (provider: fred)
        title : Optional[str]
            The title of the index. (provider: fred)

        Examples
        --------
        >>> from openbb import obb
        >>> # The default state for FRED are series for constructing the US Corporate Bond Yield Curve.
        >>> obb.fixedincome.bond_indices(provider='fred')
        >>> # Multiple indices, from within the same 'category', can be requested.
        >>> obb.fixedincome.bond_indices(category='high_yield', index='us,europe,emerging', index_type='total_return', provider='fred')
        >>> # From FRED, there are three main categories, 'high_yield', 'us', and 'emerging_markets'. Emerging markets is a broad category.
        >>> obb.fixedincome.bond_indices(category='emerging_markets', index='corporate,private_sector,public_sector', provider='fred')
        """  # noqa: E501

        return self._run(
            "/fixedincome/bond_indices",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "fixedincome.bond_indices",
                        ("fred",),
                    )
                },
                standard_params={
                    "start_date": start_date,
                    "end_date": end_date,
                    "index_type": index_type,
                },
                extra_params=kwargs,
                info={"index": {"fred": {"multiple_items_allowed": True}}},
            )
        )

    @property
    def corporate(self):
        # pylint: disable=import-outside-toplevel
        from . import fixedincome_corporate

        return fixedincome_corporate.ROUTER_fixedincome_corporate(
            command_runner=self._command_runner
        )

    @property
    def government(self):
        # pylint: disable=import-outside-toplevel
        from . import fixedincome_government

        return fixedincome_government.ROUTER_fixedincome_government(
            command_runner=self._command_runner
        )

    @property
    def rate(self):
        # pylint: disable=import-outside-toplevel
        from . import fixedincome_rate

        return fixedincome_rate.ROUTER_fixedincome_rate(
            command_runner=self._command_runner
        )

    @exception_handler
    @validate
    def sofr(
        self,
        start_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBField(description="Start date of the data, in YYYY-MM-DD format."),
        ] = None,
        end_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBField(description="End date of the data, in YYYY-MM-DD format."),
        ] = None,
        provider: Annotated[
            Optional[Literal["fred"]],
            OpenBBField(
                description="The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fred."
            ),
        ] = None,
        **kwargs
    ) -> OBBject:
        """Secured Overnight Financing Rate.

        The Secured Overnight Financing Rate (SOFR) is a broad measure of the cost of
        borrowing cash overnight collateralizing by Treasury securities.


        Parameters
        ----------
        start_date : Union[datetime.date, None, str]
            Start date of the data, in YYYY-MM-DD format.
        end_date : Union[datetime.date, None, str]
            End date of the data, in YYYY-MM-DD format.
        provider : Optional[Literal['fred']]
            The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fred.
        period : Literal['overnight', '30_day', '90_day', '180_day', 'index']
            Period of SOFR rate. (provider: fred)

        Returns
        -------
        OBBject
            results : List[SOFR]
                Serializable results.
            provider : Optional[Literal['fred']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra : Dict[str, Any]
                Extra info.

        SOFR
        ----
        date : date
            The date of the data.
        rate : Optional[float]
            SOFR rate.

        Examples
        --------
        >>> from openbb import obb
        >>> obb.fixedincome.sofr(provider='fred')
        >>> obb.fixedincome.sofr(period='overnight', provider='fred')
        """  # noqa: E501

        return self._run(
            "/fixedincome/sofr",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "fixedincome.sofr",
                        ("fred",),
                    )
                },
                standard_params={
                    "start_date": start_date,
                    "end_date": end_date,
                },
                extra_params=kwargs,
            )
        )

    @property
    def spreads(self):
        # pylint: disable=import-outside-toplevel
        from . import fixedincome_spreads

        return fixedincome_spreads.ROUTER_fixedincome_spreads(
            command_runner=self._command_runner
        )
