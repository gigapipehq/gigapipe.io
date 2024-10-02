import React, { useState } from 'react'
import styles from './PricingCalculator.module.css'

const plans = [
  {
    name: 'Basic',
    specs: {
      ram: '32GB RAM',
      storage: '640GB NVMe',
      cpu: '8x Intel vCPU',
      transfer: '16TB/Month Transfer'
    },
    price: {
      monthly: 99,
      yearly: 990
    }
  },
  {
    name: 'Medium',
    specs: {
      ram: '48GB RAM',
      storage: '960GB NVMe',
      cpu: '12x Intel vCPU',
      transfer: '24TB/Month Transfer'
    },
    price: {
      monthly: 150,
      yearly: 1500
    }
  },
  {
    name: 'Large',
    specs: {
      ram: '64GB RAM',
      storage: '1.2TB NVMe',
      cpu: '12x Intel vCPU',
      transfer: '32TB/Month Transfer'
    },
    price: {
      monthly: 250,
      yearly: 2500
    }
  }
]

const extraStoragePrice = 49 // per TB per month

const PricingCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0])
  const [isYearly, setIsYearly] = useState(true)
  const [extraStorage, setExtraStorage] = useState(0)

  const handlePlanChange = (planName: string) => {
    const plan = plans.find(p => p.name === planName)
    if (plan) setSelectedPlan(plan)
  }

  const handleExtraStorageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setExtraStorage(isNaN(value) ? 0 : value)
  }

  const basePlanPrice = isYearly ? selectedPlan.price.yearly : selectedPlan.price.monthly
  const extraStorageCost = extraStorage * extraStoragePrice * (isYearly ? 12 : 1)
  const totalPrice = basePlanPrice + extraStorageCost
  const savings = selectedPlan.price.monthly * 12 - selectedPlan.price.yearly

  return (
    <div className={styles.pricingCalculator}>
      <p className={styles.description}>Choose your plan and options</p>
      
      <div className={styles.planGrid}>
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`${styles.planCard} ${selectedPlan.name === plan.name ? styles.selected : ''}`}
          >
            <input
              type="radio"
              id={plan.name}
              name="plan"
              value={plan.name}
              checked={selectedPlan.name === plan.name}
              onChange={() => handlePlanChange(plan.name)}
              className={styles.srOnly}
            />
            <label htmlFor={plan.name}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <ul className={styles.specsList}>
                {Object.values(plan.specs).map((spec, index) => (
                  <li key={index} className={styles.specItem}>{spec}</li>
                ))}
              </ul>
              <div className={styles.planPrice}>
                ${isYearly ? plan.price.yearly : plan.price.monthly}/{isYearly ? 'year' : 'month'}
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className={styles.optionsRow}>
        <div className={styles.switchContainer}>
          <label htmlFor="billing-cycle" className={styles.switch}>
            <input
              type="checkbox"
              id="billing-cycle"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className={styles.slider}></span>
          </label>
          <span>{isYearly ? 'Yearly Billing' : 'Monthly Billing'}</span>
        </div>
        <div className={styles.storageContainer}>
          <label htmlFor="extra-storage">
            Extra S3 Storage (TB)
            <input
              type="number"
              id="extra-storage"
              min="0"
              value={extraStorage}
              onChange={handleExtraStorageChange}
              className={styles.storageInput}
            />
          </label>
        </div>
      </div>

      <div className={styles.pricingSummary}>
        <div className={styles.totalPrice}>
          Total: ${totalPrice}/{isYearly ? 'year' : 'month'}
        </div>
        <div className={styles.priceBreakdown}>
          Base plan: ${basePlanPrice}/{isYearly ? 'year' : 'month'}
          {extraStorage > 0 && ` + Extra storage: $${extraStorageCost}/${isYearly ? 'year' : 'month'}`}
        </div>
        <div className={styles.savings}>
          You save ${savings} per year with annual billing!
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator
