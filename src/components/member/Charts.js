import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { VictoryArea, VictoryStack, VictoryLegend, VictoryAxis } from 'victory';

const Charts = ({ max, weeks, wins, losses, missed }) => (
    <div>
        <VictoryStack
            animate={{
                duration: 100
            }}
        >
            {missed.some(war => war.y > 0) && (
                <VictoryArea style={{ data: { fill: 'red' } }} data={missed} />
            )}
            {losses.some(war => war.y > 0) && (
                <VictoryArea
                    style={{ data: { fill: 'orange' } }}
                    data={losses}
                />
            )}
            {wins.some(war => war.y > 0) && (
                <VictoryArea style={{ data: { fill: 'green' } }} data={wins} />
            )}
            <VictoryAxis tickValues={weeks} />
            <VictoryAxis
                tickFormat={f => f.toFixed(0)}
                tickCount={max}
                dependentAxis
                label="Battles"
            />
        </VictoryStack>
        <VictoryLegend
            height={75}
            x={125}
            y={10}
            title="War Legend"
            centerTitle
            orientation="horizontal"
            gutter={20}
            colorScale={['green', 'orange', 'red']}
            style={{ border: { stroke: 'black' }, title: { fontSize: 20 } }}
            data={[
                { name: 'Wins', symbol: { type: 'star' } },
                { name: 'Losses' },
                { name: 'Missed' }
            ]}
        />
    </div>
);

const mapStateToProps = state => {
    const data = {
        max: 0,
        weeks: [],
        wins: [{ x: 0, y: 0 }],
        losses: [{ x: 0, y: 0 }],
        missed: [{ x: 0, y: 0 }]
    };

    state.individualMember.warHistory.forEach((war, index) => {
        data.max = Math.max(data.max, war.wins + war.losses + war.missed);
        data.weeks.push(new Date(war.week).toDateString().slice(4, 10));
        data.wins.push({ x: index + 1, y: war.wins });
        data.losses.push({ x: index + 1, y: war.losses });
        data.missed.push({ x: index + 1, y: war.missed });
    });

    return data;
};

Charts.propTypes = {
    max: PropTypes.number,
    weeks: PropTypes.array,
    wins: PropTypes.array,
    losses: PropTypes.array,
    missed: PropTypes.array
};

export default connect(mapStateToProps)(Charts);
