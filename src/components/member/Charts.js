import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    VictoryArea,
    VictoryStack,
    VictoryLegend,
    VictoryAxis,
    VictoryChart,
    VictoryBar,
    VictoryLabel
} from 'victory';

const Charts = ({
    normalize,
    warHistory: { wins: war_wins, losses: war_losses, missed: war_missed },
    clanHistory: { donations: clan_donations }
}) => (
    <div className="charts">
        <VictoryChart
            scale={{ x: 'time' }}
            animate={{
                delay: 0,
                duration: 1000
            }}
        >
            <VictoryStack>
                {war_missed.some(war => war.y > 0) && (
                    <VictoryArea
                        style={{ data: { fill: 'red' } }}
                        data={war_missed}
                    />
                )}
                {war_losses.some(war => war.y > 0) && (
                    <VictoryArea
                        style={{ data: { fill: 'orange' } }}
                        data={war_losses}
                    />
                )}
                {war_wins.some(war => war.y > 0) && (
                    <VictoryArea
                        style={{ data: { fill: 'green' } }}
                        data={war_wins}
                    />
                )}
            </VictoryStack>
            <VictoryBar
                alignment="start"
                labels={d => (d.y ? (d.y * normalize.scale).toFixed(0) : '')}
                labelComponent={
                    <VictoryLabel dx={50 / clan_donations.length} />
                }
                style={{
                    data: { opacity: 0.62 }
                }}
                data={clan_donations}
            />

            <VictoryAxis
                tickFormat={d => new Date(d).toDateString().slice(4, 10)}
            />
            <VictoryAxis
                domain={[0, normalize.max]}
                tickFormat={f => f.toFixed(0)}
                tickCount={normalize.max}
                dependentAxis
                label="Battles"
            />
        </VictoryChart>
        <VictoryLegend
            height={75}
            x={60}
            title="Legend"
            centerTitle
            gutter={20}
            orientation="horizontal"
            colorScale={['black', 'green', 'orange', 'red']}
            style={{ border: { stroke: 'black' }, title: { fontSize: 20 } }}
            data={[
                { name: 'Donations', symbol: { type: 'square' } },
                { name: 'Wins' },
                { name: 'Losses' },
                { name: 'Missed' }
            ]}
        />
    </div>
);

const mapStateToProps = state => state.individualMember.history;

Charts.propTypes = {
    normalize: PropTypes.object,
    warHistory: PropTypes.object,
    clanHistory: PropTypes.object
};

export default connect(mapStateToProps)(Charts);
