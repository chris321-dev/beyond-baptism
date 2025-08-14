import React, { useState } from 'react';
import styles from './PricingToggle.module.css';

const plans = [
  { id: '10', label: '10$', onceLink: 'https://donate.stripe.com/bIYeVibGegCg4Te5kk', monthlyLink: 'https://donate.stripe.com/28o14s6lUgCgdpK28e' },
  { id: '25', label: '25$', onceLink: 'https://donate.stripe.com/9AQ6oM5hQ0DifxS3cd', monthlyLink: 'https://donate.stripe.com/28o14s6lUfycbhCbIP' },
  { id: '50', label: '50$', onceLink: 'https://donate.stripe.com/8wM6oMh0ygCg3Pa146', monthlyLink: 'https://donate.stripe.com/14k8wU9y6dq4gBW28g' },
  { id: '100', label: '100$', onceLink: 'https://donate.stripe.com/6oE14s4dM85KdpK28b', monthlyLink: 'https://donate.stripe.com/5kA9AYbGe5XC71m3cl' },
  { id: '200', label: '200$', onceLink: 'https://donate.stripe.com/fZebJ64dM5XCetOdQU', monthlyLink: 'https://donate.stripe.com/3cs9AYh0ybhW99u8wG' },
  { id: 'custom', label: 'Custom', onceLink: 'https://donate.stripe.com/9AQbJ6bGe85K85qeUZ', monthlyLink: 'https://donate.stripe.com/9AQbJ6bGe85K85qeUZ' }
];

export default function PricingToggle() {
  const [billingOnce, setBillingOnce] = useState(false); // false = monthly
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [error, setError] = useState('');

  const handleToggle = () => {
    setBillingOnce(prev => !prev);
    setSelectedPlan(null); // This line resets the selection
    setError('');
  };

  const handleSelect = (planId) => {
    setSelectedPlan(planId);
    setError('');
  };

  const handleContinue = () => {
    if (!selectedPlan) {
      setError('Please select a plan before continuing.');
      return;
    }
    const plan = plans.find(p => p.id === selectedPlan);
    const url = billingOnce ? plan.onceLink : plan.monthlyLink;
    window.open(url, '_blank');
  };

  return (
    <div id="donate" className={styles.container}>
      <div className={styles.toggleWrapper}>
        <span className={billingOnce ? styles.activeLabel : ''}>Billed Once</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={!billingOnce}
            onChange={handleToggle}
          />
          <span className={styles.slider} />
        </label>
        <span className={!billingOnce ? styles.activeLabel : ''}>Billed Monthly</span>
      </div>

      {/* <div className={styles.grid}>
        {plans.map(plan => (
          <button
            key={plan.id}
            className={`${styles.planButton} ${selectedPlan === plan.id ? styles.selected : ''}`}
            onClick={() => handleSelect(plan.id)}
          >
            {plan.label}
          </button>
        ))}
      </div> */}

      <div className={styles.grid}>
        {plans.map(plan => (
        <button
          key={plan.id}
          className={`${styles.planButton} ${selectedPlan === plan.id ? styles.selected : ''}`}
          onClick={() => handleSelect(plan.id)}
        >
          <div>{plan.label}</div>
          {plan.id === 'custom' && (
            <div className={styles.subLabel}>Billed Once</div>
          )}
        </button>
        ))}
        </div>


      {error && <p className={styles.error}>{error}</p>}

      <button
        className={styles.continueButton}
        onClick={handleContinue}
      >
        Continue &rarr;
      </button>
    </div>
  );
}