import { Riquest, cloudURL } from "$lib/shared/molecular";

const co2Filter = e => {
    return {
        now: e.dateRequested,
        source: e.DataSource,
        desc: e.Description,
        updated: e.LastUpdateLocalDateDisplay,
        current: {
            value: e.CurrentIndexValue,
            measured: new Date( e.CurrentIndexValueDate ).toLocaleString( 'en-GB' ),
        },
        previous: {
            value: e.PerviousIndexValue,
            measured: new Date( e.PerviousIndexValueDate ).toLocaleString( 'en-GB' ),
        },
        change: {
            value: e.IndexValueChange.toFixed( 2 ),
            percentage: e.IndexValueChangePercent.toFixed( 2 ) + "%",
        }
    };
};

export const getCo2 = async () => {
    const request = new Riquest( "https://charting.numberlens.com/api/teamearth/getdailyco2?authtoken=D43026302F294A5784F7512A8969FE37", "json" );
    const raw = await request.get( "" );
    return co2Filter( raw );
}