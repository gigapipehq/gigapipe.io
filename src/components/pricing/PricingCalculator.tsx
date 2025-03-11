import React, { useState } from 'react'
import styles from './PricingCalculator.module.css'

export const frontmatter = {
  sidebar: false,
  pageType: 'custom'
};

const plans = [
  {
    name: 'FREE TRIAL',
    disk: '640GB NVMe', 
    specs: {
      ram: '4GB RAM',
      cpu: '2x Shared vCPU',
      storage: '10GB Shared',
      transfer: '10GB/Month Transfer',
      Redundancy: 'Shared Node',
      support: 'Forum Support'
    },
    price: {
      monthly: 0,
      yearly: 0
    }
  },
  {
    name: 'START UP',
    disk: '640GB NVMe', 
    specs: {
      ram: '16GB RAM',
      cpu: '4x Intel vCPU',
      storage: '160GB NVMe',
      transfer: '1.6TB/Month Transfer',
      Redundancy: 'Standalone Node',
      support: 'Email Support'
    },
    price: {
      monthly: 275,
      yearly: 2750
    }
  },
  {
    name: 'SCALE UP',
    disk: '960GB NVMe',
    specs: {
      ram: '32GB RAM',
      cpu: '8x Intel vCPU',
      storage: '240GB NVMe',
      transfer: '2.4TB/Month Transfer',
      Redundancy: 'Standalone Node',
      support: 'Helpdesk Support'
    },
    price: {
      monthly: 550,
      yearly: 5500
    }
  },
  {
    name: 'ENTERPRISE 👑',
    disk: '1.2TB NVMe',
    specs: {
      ram: '64GB RAM',
      cpu: '16x Intel vCPU',
      storage: '360GB NVMe',
      transfer: '3.2TB/Month Transfer',
      Redundancy: 'High Availability',
      support: 'Helpdesk Support'
    },
    price: {
      monthly: 1100,
      yearly: 11000
    }
  },
  {
    name: 'EXTREME',
    disk: '3TB SSD',
    host: 'hetzner-ccx53',
    specs: {
      ram: '128GB RAM',
      cpu: '32x Intel vCPU',
      storage: '600GB SSD',
      transfer: '5TB/Month Transfer',
      Redundancy: 'High Availability',
      support: 'Helpdesk Support'
    },
    price: {
      monthly: 2150,
      yearly: 21500
    }
  },
  {
    name: 'SUPREME',
    disk: '5TB SSD',
    host: 'hetzner-ccx63',
    specs: {
      ram: '192GB RAM',
      cpu: '48x Intel vCPU',
      storage: '960GB SSD',
      transfer: '5TB/Month Transfer',
      Redundancy: 'High Availability',
      support: 'Helpdesk Support'
    },
    price: {
      monthly: 3250,
      yearly: 32500
    }
  }
]

const extraStoragePrice = 100; // per TB per month
const snapshotsPrice = 50; // per month

const serverLocations = [
  { city: 'Dallas', region: 'US Central', country: 'US', discount: false },
  { city: 'Atlanta', region: 'US East', country: 'US', discount: false },
  { city: 'Los Angeles', region: 'US West', country: 'US', discount: false },
  { city: 'Chicago', region: 'US Central', country: 'US', discount: false },
  { city: 'Seattle', region: 'US West', country: 'US', discount: false },
  { city: 'New York', region: 'US East', country: 'US', discount: false },
  { city: 'Frankfurt', region: 'Germany', country: 'DE', discount: false },
  { city: 'Amsterdam', region: 'Netherlands', country: 'NL', discount: false },
  { city: 'London', region: 'England', country: 'GB', discount: false },
  { city: 'Mumbai', region: 'India', country: 'IN', discount: false },
  { city: 'Tokyo', region: 'Japan', country: 'JP', discount: false },
  { city: 'Singapore', region: 'Singapore', country: 'SG', discount: false },
  { city: 'Sydney', region: 'Australia', country: 'AU', discount: false },
  { city: 'Toronto', region: 'Canada', country: 'CA', discount: false }
]

const PricingCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]) // Default to 'Basic'
  const [isYearly, setIsYearly] = useState(false)
  const [extraStorage, setExtraStorage] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState(serverLocations[0])
  const [includeSnapshots, setIncludeSnapshots] = useState(false)

  const handlePlanChange = (planName: string) => {
    const plan = plans.find(p => p.name === planName)
    if (plan) {
      setSelectedPlan(plan)
      if (plan.name === 'Trial') {
        setExtraStorage(0)
        setIncludeSnapshots(false)
      }
    }
  }

  const handleExtraStorageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setExtraStorage(isNaN(value) ? 0 : value)
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const location = serverLocations.find(l => l.city === e.target.value)
    if (location) setSelectedLocation(location)
  }

  const basePlanPrice = isYearly ? selectedPlan.price.yearly : selectedPlan.price.monthly
  const extraStorageCost = extraStorage * extraStoragePrice * (isYearly ? 12 : 1)
  const snapshotsCost = includeSnapshots ? snapshotsPrice * (isYearly ? 12 : 1) : 0
  const totalPrice = basePlanPrice + extraStorageCost + snapshotsCost
  const savings = selectedPlan.price.monthly * 12 - selectedPlan.price.yearly

  const isTrial = selectedPlan.name === 'Trial'

  return (
    <div className={styles.pricingCalculator}>      
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
                €{isYearly ? plan.price.yearly : plan.price.monthly}/{isYearly ? 'year' : 'month'}
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className={styles.optionsRow}>

        <div className={styles.locationContainer}>
            <label htmlFor="server-location">
              <select
                id="server-location"
                value={selectedLocation.city}
                onChange={handleLocationChange}
                className={styles.locationSelect}
                disabled={isTrial}
              >
                {serverLocations.map((location) => (
                  <option key={location.city} value={location.city}>
                    {location.city} ({location.region})
                    {location.discount ? ' - 10% Off' : ''}
                  </option>
                ))}
              </select>
            </label>
        </div>
        
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
          <span>{isYearly ? 'Yearly' : 'Monthly'}</span>
        </div>
        
        <div className={styles.switchContainer}>
          <label htmlFor="snapshots" className={styles.switch}>
            <input
              type="checkbox"
              id="snapshots"
              checked={includeSnapshots}
              onChange={() => setIncludeSnapshots(!includeSnapshots)}
              disabled={isTrial}
            />
            <span className={styles.slider}></span>
          </label>
          <span>Snapshots</span>
        </div>
        
        <div className={styles.storageContainer}>
          <label htmlFor="extra-storage">
            Extra Storage (TB)
            <input
              type="number"
              id="extra-storage"
              min="0"
              value={extraStorage}
              onChange={handleExtraStorageChange}
              className={styles.storageInput}
              disabled={isTrial}
            />
          </label>
        </div>
        
      </div>

      <div className={styles.pricingSummary}>
        <div className={styles.totalPriceRow}>
          <div className={styles.totalPrice}>
            Total: €{totalPrice}/{isYearly ? 'year' : 'month'}
          </div>
          <a href="/signup" className={styles.signUpButton}>Sign Up</a>
        </div>
        <div className={styles.priceBreakdown}>
          Base plan: €{basePlanPrice}/{isYearly ? 'year' : 'month'}
          {extraStorage > 0 && ` + Extra storage: €${extraStorageCost}/${isYearly ? 'year' : 'month'}`}
          {includeSnapshots && ` + Snapshots: €${snapshotsCost}/${isYearly ? 'year' : 'month'}`}
        </div>
        {!isTrial && (
          <div className={styles.savings}>
            You save €{savings} per year with annual billing!
          </div>
        )}
      </div>
    </div>
  )
}

export default PricingCalculator
