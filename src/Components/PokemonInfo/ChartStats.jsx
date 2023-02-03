import { Chart } from "react-google-charts";
import { caseFirstLetter } from "../../Utils/Functions"

const ChartStats = ({ name, hp, attack, defense, specialA, specialD, speed }) => {

    const originalWarn = console.warn;

    console.warn = function (...args) {
        const arg = args && args[0];

        if (arg && arg.includes('Attempting to load version \'51\' of Google Charts')) return;

        originalWarn(...args);
    };
    const data = [
        ["Stats" + ` ${name}`, "Level"],
        ["HP", hp],
        ["Attack", attack],
        ["Defense", defense],
        ["Special A", specialA],
        ["Special D", specialD],
        ["Speed", speed]
    ];

    const options = {
        chart: {
            title: `${caseFirstLetter(name)} Performance`
        },
    };

    return (
        <Chart
            chartType="Bar"
            width="94%"
            height="300px"
            data={data}
            options={options}
        />
    );
}

export default ChartStats;