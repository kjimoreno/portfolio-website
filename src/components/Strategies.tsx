import React from 'react';

const strategies = [
  {
    title: 'Options Conversion Arbitrage',
    description: 'Modeled mispriced options through put-call parity while staying delta-neutral.',
    metrics: {
      sharpe: 1.5,
      winRate: '60%',
      profitFactor: 2.0,
    },
  },
  {
    title: 'Intraday Momentum Scalping',
    description: 'Used order flow analysis paired with volume imbalance to trade momentum.',
    metrics: {
      sharpe: 2.0,
      winRate: '55%',
      profitFactor: 1.5,
    },
  },
  {
    title: 'Swing Mean Reversion',
    description: 'Combined moving averages, pivot points, and true range for finding reversal trades.',
    metrics: {
      sharpe: 0.7,
      winRate: '61%',
      profitFactor: 2.7,
    },
  },
];

const Strategies = () => {
  return (
    <section id="strategies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
          Strategies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy) => (
            <div key={strategy.title} className="bg-tertiary p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {strategy.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {strategy.description}
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-text-primary">Metrics:</h4>
                <ul className="list-disc list-inside text-text-secondary">
                  <li>Sharpe Ratio: {strategy.metrics.sharpe}</li>
                  <li>Win Rate: {strategy.metrics.winRate}</li>
                  <li>Profit Factor: {strategy.metrics.profitFactor}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategies;
